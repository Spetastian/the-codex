const config = {
    codexApiUrl: '/api'
};

import { combineEpics } from 'redux-observable'
import codexEpicsCreator from './codex-epics'
import CodexService from '../services/CodexService'

const {
    searchCodexEpic,
    getGamesEpic,
    getCodexEpic
} = codexEpicsCreator(new CodexService(config.codexApiUrl))

export const rootEpic = combineEpics(
    searchCodexEpic,
    getGamesEpic,
    getCodexEpic
);