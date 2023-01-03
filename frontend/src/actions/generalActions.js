import axios from 'axios'
import {
    WINNER_LIST_REQUEST,
    WINNER_LIST_SUCCESS,
    WINNER_LIST_FAIL,
    WINNER_LIST_RESET,

} from '../constants/generalConstants'


export const listWinners = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: WINNER_LIST_REQUEST
        })

        const { data } = await axios.get(
            `/api/users/my/profile/all-users`,
        )

        dispatch({
            type: WINNER_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: WINNER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
