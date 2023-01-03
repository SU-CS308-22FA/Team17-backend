import {
    GSSTATISTICS_DETAILS_REQUEST,
    GSSTATISTICS_DETAILS_SUCCESS,
    GSSTATISTICS_DETAILS_FAIL,
    GSSTATISTICS_DETAILS_RESET,

    GSRATINGS_DETAILS_REQUEST,
    GSRATINGS_DETAILS_SUCCESS,
    GSRATINGS_DETAILS_FAIL,
    GSRATINGS_DETAILS_RESET,
} from '../constants/galatasarayConstants'

export const StatisticsGsList = (state = { Statisticsgs: [] }, action) => {
    switch (action.type) {
        case GSSTATISTICS_DETAILS_REQUEST:
            return { loading: true }

        case GSSTATISTICS_DETAILS_SUCCESS:
            return { loading: false, Statisticsgs: action.payload }

        case GSSTATISTICS_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        case GSSTATISTICS_DETAILS_RESET:
            return { Statisticsgs: [] }

        default:
            return state
    }
}

export const ratingsGsList = (state = { Ratingsgs: {} }, action) => {
    switch (action.type) {
        case GSRATINGS_DETAILS_REQUEST:
            return { loading: true }

        case GSRATINGS_DETAILS_SUCCESS:
            return { loading: false, Ratingsgs: action.payload }

        case GSRATINGS_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        case GSRATINGS_DETAILS_RESET:
            return { Ratingsgs: {} }

        default:
            return state
    }
}
