import axios from 'axios'
import {
    PRIZE_CREATE_REQUEST,
    PRIZE_CREATE_SUCCESS,
    PRIZE_CREATE_FAIL,

    PRIZE_LIST_REQUEST,
    PRIZE_LIST_SUCCESS,
    PRIZE_LIST_FAIL,

} from '../constants/prizeConstants'

export const createPrize = (prize_name,content,winner_ladder,team) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRIZE_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `/api/prize/create-new-prize/`,
            {'prize_name':prize_name,'prize_content':content,'winner_ladder':winner_ladder,'prize_team':team},
            config
        )
        dispatch({
            type: PRIZE_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: PRIZE_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listPrizes = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: PRIZE_LIST_REQUEST
        })

        const { data } = await axios.get(
            `/api/prize/create-new-prize/`,
        )

        dispatch({
            type: PRIZE_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: PRIZE_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
