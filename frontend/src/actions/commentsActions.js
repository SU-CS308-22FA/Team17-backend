import axios from 'axios'
import {
    COMMENTS_CREATE_REQUEST,
    COMMENTS_CREATE_SUCCESS,
    COMMENTS_CREATE_FAIL,
    COMMENTS_CREATE_RESET,

    COMMENTS_DETAILS_REQUEST,
    COMMENTS_DETAILS_SUCCESS,
    COMMENTS_DETAILS_FAIL,
    COMMENTS_DETAILS_RESET,

    COMMENTS_LIST_REQUEST,
    COMMENTS_LIST_SUCCESS,
    COMMENTS_LIST_FAIL,
    COMMENTS_LIST_RESET,
} from '../constants/commentsConstants'


export const createComment = (slug,name,body,email) => async (dispatch, getState) => {
    try {
        dispatch({
            type: COMMENTS_CREATE_REQUEST
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
            `/api/comments/create/${slug}/`,
            {'name':name,'body':body,'email':email},
            config
        )
        dispatch({
            type: COMMENTS_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: COMMENTS_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const CommentList = (slug) => async (dispatch) => {
    try {
        dispatch({ type: COMMENTS_LIST_REQUEST })

        const { data } = await axios.get(`/api/comments/${slug}`)

        dispatch({
            type: COMMENTS_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: COMMENTS_LIST_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
