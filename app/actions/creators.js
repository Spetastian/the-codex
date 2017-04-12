import {
    GET_CODEX_REQUEST,
    GET_CODEX_SUCCESS,
    GET_CODEX_FAILURE,
    GET_GAMES_REQUEST,
    GET_GAMES_SUCCESS,
    GET_GAMES_FAILURE,
    SEARCH_CODEX_REQUEST,
    SEARCH_CODEX_SUCCESS,
    SEARCH_CODEX_FAILURE
} from './types'

export const getCodexRequest = (gameId) => ({ type: GET_CODEX_REQUEST, gameId })
export const getCodexSuccess = (gameId, result) => ({ type: GET_CODEX_SUCCESS, gameId, result })
export const getCodexFailure = (error) => ({ type: GET_CODEX_FAILURE, error })

export const searchCodexRequest = (searchText, gameId) => ({ type: SEARCH_CODEX_REQUEST, searchText, gameId })
export const searchCodexSuccess = (result) => ({ type: SEARCH_CODEX_SUCCESS, result })
export const searchCodexFailure = (error) => ({ type: SEARCH_CODEX_FAILURE, error })

export const getGamesRequest = () => ({ type: GET_GAMES_REQUEST })
export const getGamesSuccess = (result) => ({ type: GET_GAMES_SUCCESS, result })
export const getGamesFailure = (error) => ({ type: GET_GAMES_FAILURE, error })