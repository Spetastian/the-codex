'use strict'
import { Observable } from 'rxjs/Observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/partition';
import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/throttleTime';

export default class CodexService {
    constructor (codexApiUrl){
        this.codexApiUrl = codexApiUrl;
        this.localStorage = window && window.localStorage;
        this.memCache = {};
        this.ttl = 7200000 //Two hours
    }

    _getStorageKey(gameId){
        return `the-codex:${gameId}`;
    }

    _hasExpiredSinceFirstCall(codex) {
        return codex && codex.timestamp && codex.timestamp+this.ttl > Date.now();
    }

    _getCached (gameId) {
        if(!this.memCache[gameId]) {
            const localStorageData = this.localStorage.getItem(this._getStorageKey(gameId));
            this.memCache[gameId] = localStorageData && Object.assign(localStorageData && JSON.parse(localStorageData), {timestamp: Date.now()});
        }

        return this.memCache[gameId];
    }

    _cache (gameId, codexData) {
        this.localStorage.setItem(this._getStorageKey(gameId), JSON.stringify(codexData))
        this.memCache[gameId] = Object.assign(codexData, {timestamp: Date.now()});
        return codexData;
    }

    getGames() {
        return ajax.getJSON(`${this.codexApiUrl}/games`)
    }

    getCodex(gameId) {
        return Observable.of(this._getCached(gameId))
            .mergeMap(cachedData =>
                ajax.getJSON(`${this.codexApiUrl}/${gameId}/codex?contentHash=${cachedData && cachedData.contentHash}`)
                    .map(result => result.data)
                    .filter(data => data && data.codex && data.codex.length > 0)
                    .map(data => this._cache(gameId, data))
                    .defaultIfEmpty(cachedData)
                    .map(data => data.codex)
            )
    }

    // Returns an observable
    search (gameId, searchText) {
        const searchTextLower = searchText.toLowerCase();
        return Observable.of(this._getCached(gameId))
            .do(console.log)
            .map(data => data && data.codex && data.codex.filter(
                item => item.title && item.title.toLowerCase().startsWith(searchTextLower))
            )
    }
}