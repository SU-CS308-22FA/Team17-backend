import {
    PRIZE_CREATE_REQUEST,
    PRIZE_CREATE_SUCCESS,
    PRIZE_CREATE_FAIL,
    PRIZE_CREATE_RESET,

    PRIZE_LIST_REQUEST,
    PRIZE_LIST_SUCCESS,
    PRIZE_LIST_FAIL,
    PRIZE_LIST_RESET,

} from '../constants/prizeConstants'


export const PrizeCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRIZE_CREATE_REQUEST:
            return { loading: true }

        case PRIZE_CREATE_SUCCESS:
            return { loading: false, success: true, prize: action.payload }

        case PRIZE_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case PRIZE_CREATE_RESET:
            return {}

        default:
            return state
    }
}

export const PrizeAllList = (state = { prizeAll: [] }, action) => {
    switch (action.type) {
        case PRIZE_LIST_REQUEST:
            return { loading: true }

        case PRIZE_LIST_SUCCESS:
            return { loading: false, prizeAll: action.payload }

        case PRIZE_LIST_FAIL:
            return { loading: false, error: action.payload }

        case PRIZE_LIST_RESET:
            return { prizeAll: [] }

        default:
            return state
    }
}
