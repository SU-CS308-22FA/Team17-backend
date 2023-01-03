import {
    WINNER_LIST_REQUEST,
    WINNER_LIST_SUCCESS,
    WINNER_LIST_FAIL,
    WINNER_LIST_RESET,
} from '../constants/generalConstants'

export const WinnerListReducer = (state = { winners: [] }, action) => {
    switch (action.type) {
        case WINNER_LIST_REQUEST:
            return { loading: true }

        case WINNER_LIST_SUCCESS:
            return { loading: false, winners: action.payload }

        case WINNER_LIST_FAIL:
            return { loading: false, error: action.payload }

        case WINNER_LIST_RESET:
            return { winners: [] }

        default:
            return state
    }
}
