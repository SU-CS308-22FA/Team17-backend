import axios from 'axios'
import {
    POST_CREATE_REQUEST,
    POST_CREATE_SUCCESS,
    POST_CREATE_FAIL,
    POST_CREATE_RESET,

    POST_DETAILS_REQUEST,
    POST_DETAILS_SUCCESS,
    POST_DETAILS_FAIL,
    POST_DETAILS_RESET,

    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_FAIL,
    POST_LIST_RESET,

    POST_MYLIST_REQUEST,
    POST_MYLIST_SUCCESS,
    POST_MYLIST_FAIL,
    POST_MYLIST_RESET,

    POST_DELETE_REQUEST,
    POST_DELETE_SUCCESS,
    POST_DELETE_FAIL,
} from '../constants/blogConstants'

export const createPost = (title,body,short,published) => async (dispatch, getState) => {
    try {
        dispatch({
            type: POST_CREATE_REQUEST
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
            `/api/posts/create-new-post/`,
            {'title':title,'body':body,'short_description':short,'is_published':published},
            config
        )
        dispatch({
            type: POST_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: POST_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listMyPosts = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: POST_MYLIST_REQUEST
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
            `/api/posts/post-list/`,
            config
        )

        dispatch({
            type: POST_MYLIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: POST_MYLIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listAllPosts = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: POST_LIST_REQUEST
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
            `/api/posts/`,
            config
        )

        dispatch({
            type: POST_LIST_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: POST_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
