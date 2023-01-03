import {
    FBSTATISTICS_DETAILS_REQUEST,
    FBSTATISTICS_DETAILS_SUCCESS,
    FBSTATISTICS_DETAILS_FAIL,
    FBSTATISTICS_DETAILS_RESET,

    FBRATINGS_DETAILS_REQUEST,
    FBRATINGS_DETAILS_SUCCESS,
    FBRATINGS_DETAILS_FAIL,
    FBRATINGS_DETAILS_RESET,
} from '../constants/fenerbahceConstants'

export const StatisticsFbList = (state = { Statisticsfb: [] }, action) => {
    switch (action.type) {
        case FBSTATISTICS_DETAILS_REQUEST:
            return { loading: true }

        case FBSTATISTICS_DETAILS_SUCCESS:
            return { loading: false, Statisticsfb: action.payload }

        case FBSTATISTICS_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        case FBSTATISTICS_DETAILS_RESET:
            return { Statisticsfb: [] }

        default:
            return state
    }
}

export const ratingsFbList = (state = { Ratingsfb: [] }, action) => {
    switch (action.type) {
        case FBRATINGS_DETAILS_REQUEST:
            return { loading: true }

        case FBRATINGS_DETAILS_SUCCESS:
            return { loading: false, Ratingsfb: action.payload }

        case FBRATINGS_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        case FBRATINGS_DETAILS_RESET:
            return { Ratingsfb: [] }

        default:
            return state
    }
}
