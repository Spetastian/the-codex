import {
    GET_CODEX_REQUEST,
    GET_CODEX_SUCCESS,
    GET_CODEX_FAILURE,
    GET_GAMES_REQUEST,
    GET_GAMES_SUCCESS,
    GET_GAMES_FAILURE,
    SEARCH_CODEX_SUCCESS,
    SEARCH_CODEX_FAILURE
} from '../actions/types'

const initialState = {
    loading: false,
    error: null,
    codex: [],
    games: [],
    selectedGame: ''
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {

    case GET_GAMES_REQUEST:
    case GET_CODEX_REQUEST:
        return Object.assign({}, state, {
            loading: true,
        })
    case GET_GAMES_SUCCESS:
        return Object.assign({}, state, {
            loading: false,
            error: null,
            games: action.result
        })
    case SEARCH_CODEX_SUCCESS:
          return Object.assign({}, state, {
              loading: false,
              error: null,
              codex: action.result
          })
    case GET_CODEX_SUCCESS:
          return Object.assign({}, state, {
              loading: false,
              error: null,
              codex: action.result,
              selectedGame: action.gameId
          })
    case SEARCH_CODEX_FAILURE:
    case GET_GAMES_FAILURE:
    case GET_CODEX_FAILURE:
          return Object.assign({}, state, {
              loading: false,
              error: action.error
          })
    default:
        return state
  }
}