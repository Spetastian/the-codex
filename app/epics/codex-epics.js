import {
    SEARCH_CODEX_REQUEST,
    GET_GAMES_REQUEST,
    GET_CODEX_REQUEST,
    GET_CODEX_SUCCESS
} from '../actions/types'

import {
    searchCodexSuccess,
    searchCodexFailure,
    getGamesSuccess,
    getGamesFailure,
    getCodexSuccess,
    getCodexFailure
} from '../actions/creators'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import { push } from 'react-router-redux'

export default function(codexService){
    return {

        searchCodexEpic : action$ =>
            action$.ofType(SEARCH_CODEX_REQUEST)
                .debounceTime(200)
                .mergeMap(action =>
                    codexService.search(action.gameId, action.searchText)
                        .map(codexResult => searchCodexSuccess(codexResult))
                        .catch(error => Observable.of(searchCodexFailure(error)))
                ),

        getCodexEpic: action$ =>
            action$.ofType(GET_CODEX_REQUEST)
                .filter(action => action.gameId)
                .mergeMap(action =>
                    codexService.getCodex(action.gameId)
                        .map(codexResult => getCodexSuccess(action.gameId, codexResult))
                        .catch(error => Observable.of(getCodexFailure(error)))
                ),

        getGamesEpic: action$ =>
            action$.ofType(GET_GAMES_REQUEST)
                .first()
                .mergeMap(action =>
                    codexService.getGames()
                        .map(result => getGamesSuccess(result.data))
                        .catch(error => Observable.of(getGamesFailure(error)))
                )

    }
}

