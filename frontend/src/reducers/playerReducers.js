import {
    PLAYER_CREATE_REQUEST,
    PLAYER_CREATE_SUCCESS,
    PLAYER_CREATE_FAIL,
    PLAYER_CREATE_RESET,

    PLAYER_LIST_REQUEST,
    PLAYER_LIST_SUCCESS,
    PLAYER_LIST_FAIL,
    PLAYER_LIST_RESET,

    PLAYER_UPDATE_REQUEST,
    PLAYER_UPDATE_SUCCESS,
    PLAYER_UPDATE_FAIL,
    PLAYER_UPDATE_RESET,
} from '../constants/playerConstants'


export const PlayerCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PLAYER_CREATE_REQUEST:
            return { loading: true }

        case PLAYER_CREATE_SUCCESS:
            return { loading: false, success: true, player: action.payload }

        case PLAYER_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case PLAYER_CREATE_RESET:
            return {}

        default:
            return state
    }
}

export const PlayerAllList = (state = { playerAll: [] }, action) => {
    switch (action.type) {
        case PLAYER_LIST_REQUEST:
            return { loading: true }

        case PLAYER_LIST_SUCCESS:
            return { loading: false, playerAll: action.payload }

        case PLAYER_LIST_FAIL:
            return { loading: false, error: action.payload }

        case PLAYER_LIST_RESET:
            return { playerAll: [] }

        default:
            return state
    }
}


export const PlayerUpdateReducer = (state = { player: {} }, action) => {
    switch (action.type) {
        case PLAYER_UPDATE_REQUEST:
            return { loading: true }

        case PLAYER_UPDATE_SUCCESS:
            return { loading: false, success: true }

        case PLAYER_UPDATE_FAIL:
            return { loading: false, error: action.payload }

        case PLAYER_UPDATE_RESET:
            return { player: {} }

        default:
            return state
    }
}
