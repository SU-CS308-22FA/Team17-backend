import axios from 'axios'
import {
    PLAYER_CREATE_REQUEST,
    PLAYER_CREATE_SUCCESS,
    PLAYER_CREATE_FAIL,

    PLAYER_LIST_REQUEST,
    PLAYER_LIST_SUCCESS,
    PLAYER_LIST_FAIL,

    PLAYER_UPDATE_REQUEST,
    PLAYER_UPDATE_SUCCESS,
    PLAYER_UPDATE_FAIL,
} from '../constants/playerConstants'


export const createPlayer = (team,player_name) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PLAYER_CREATE_REQUEST
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
            `/api/player/create-new-player/`,
            {'player':player_name,'team_player':team},
            config
        )
        dispatch({
            type: PLAYER_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: PLAYER_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listPlayers = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: PLAYER_LIST_REQUEST
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

        const { data } = await axios.get(
            `/api/player/create-new-player`,
            config
        )

        dispatch({
            type: PLAYER_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: PLAYER_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const updatePlayer = (player) => async (dispatch, getState) => {
    try {
        dispatch({
            type: PLAYER_UPDATE_REQUEST
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

        const { data } = await axios.put(
            `/api/player/player-update/${player.id}/`,
            player,
            config
        )

        dispatch({
            type: PLAYER_UPDATE_SUCCESS,
        })

        dispatch({
            type: PLAYER_UPDATE_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: PLAYER_UPDATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
