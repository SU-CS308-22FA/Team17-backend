import axios from 'axios'
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


export const Fbstatisticsall = () => async (dispatch) => {
    try {
        dispatch({ type: FBSTATISTICS_DETAILS_REQUEST })

        const { data } = await axios.get(`https://api.sofascore.com/api/v1/team/3052/unique-tournament/52/season/42632/statistics/overall `)

        dispatch({
            type: FBSTATISTICS_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: FBSTATISTICS_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const FbRatingsAll = () => async (dispatch) => {
    try {
        dispatch({ type: FBRATINGS_DETAILS_REQUEST })

        const { data } = await axios.get(`https://api.sofascore.com/api/v1/team/3052/unique-tournament/52/season/42632/top-players/overall`)

        dispatch({
            type: FBRATINGS_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: FBRATINGS_DETAILS_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
