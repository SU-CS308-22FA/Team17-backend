
import axios from 'axios'
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


export const Gsstatisticsall = () => async (dispatch) => {
    try {
        dispatch({ type: GSSTATISTICS_DETAILS_REQUEST })

        const { data } = await axios.get(`https://api.sofascore.com/api/v1/team/3061/unique-tournament/52/season/42632/statistics/overall`)

        dispatch({
            type: GSSTATISTICS_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GSSTATISTICS_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const GsRatingsAll = () => async (dispatch) => {
    try {
        dispatch({ type: GSRATINGS_DETAILS_REQUEST })

        const { data } = await axios.get(`https://api.sofascore.com/api/v1/team/3061/unique-tournament/52/season/42632/top-players/overall`)

        dispatch({
            type: GSRATINGS_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: GSRATINGS_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
