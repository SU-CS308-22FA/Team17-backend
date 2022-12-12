import axios from 'axios'
import {
    CATEGORY_CREATE_REQUEST,
    CATEGORY_CREATE_SUCCESS,
    CATEGORY_CREATE_FAIL,
    CATEGORY_LIST_CREATE_REQUEST,
    CATEGORY_LIST_CREATE_SUCCESS,
    CATEGORY_LIST_CREATE_FAIL,
    CATEGORY_DELETE_REQUEST,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_DELETE_FAIL,
    QUESTION_LIST_CREATE_REQUEST,
    QUESTION_LIST_CREATE_SUCCESS,
    QUESTION_LIST_CREATE_FAIL,
    QUESTION_DELETE_REQUEST,
    QUESTION_DELETE_SUCCESS,
    QUESTION_DELETE_FAIL,
    QUESTION_CREATE_REQUEST,
    QUESTION_CREATE_SUCCESS,
    QUESTION_CREATE_FAIL,

    ANSWER_DELETE_REQUEST,
    ANSWER_DELETE_SUCCESS,
    ANSWER_DELETE_FAIL,
    ANSWER_DELETE_RESET,
    ANSWER_DETAIL_REQUEST,
    ANSWER_DETAIL_SUCCESS,
    ANSWER_DETAIL_FAIL,
    ANSWER_DETAIL_RESET,
    ANSWER_CREATE_REQUEST,
    ANSWER_CREATE_SUCCESS,
    ANSWER_CREATE_FAIL,
    ANSWER_CREATE_RESET,

    QUESTION_CREATE_RESET,

    QUESTION_DELETE_RESET,
    CATEGORY_LIST_CREATE_RESET,
    CATEGORY_CREATE_RESET,
} from '../constants/quizConstants'

export const createCategory = (author,title) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORY_CREATE_REQUEST
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
            `/api/v2/quizzes/`,
            {'author':author,'title':title},
            config
        )
        dispatch({
            type: CATEGORY_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: CATEGORY_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const listCategories = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORY_LIST_CREATE_REQUEST
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
            `/api/v2/quizzes/`,
            config
        )

        dispatch({
            type: CATEGORY_LIST_CREATE_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: CATEGORY_LIST_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteCategory = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORY_DELETE_REQUEST
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

        const { data } = await axios.delete(
            `/api/v2/quizzes/${id}/`,
            config
        )

        dispatch({
            type: CATEGORY_DELETE_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: CATEGORY_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const getCategoryDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: QUESTION_LIST_CREATE_REQUEST
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
            `/api/v2/quizzes/${id}/all_questions`,
            config
        )

        dispatch({
            type: QUESTION_LIST_CREATE_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: QUESTION_LIST_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteQuestion = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: QUESTION_DELETE_REQUEST
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

        const { data } = await axios.delete(
            `/api/v2/questions/${id}/`,
            config
        )

        dispatch({
            type: QUESTION_DELETE_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: QUESTION_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createQuestion = (quiz_id,prompt) => async (dispatch, getState) => {
    try {
        dispatch({
            type: QUESTION_CREATE_REQUEST
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
            `/api/v2/questions/`,
            {'quiz':quiz_id,'prompt':prompt},
            config
        )
        dispatch({
            type: QUESTION_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: QUESTION_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listAnswers = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ANSWER_DETAIL_REQUEST
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
            `/api/v2/questions/${id}/answers/`,
            config
        )

        dispatch({
            type: ANSWER_DETAIL_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: ANSWER_DETAIL_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const deleteAnswer = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ANSWER_DELETE_REQUEST
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

        const { data } = await axios.delete(
            `/api/v2/answers/${id}/`,
            config
        )

        dispatch({
            type: ANSWER_DELETE_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type: ANSWER_DELETE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}

export const createAnswer = (quiz_id,text,correct) => async (dispatch, getState) => {
    try {
        dispatch({
            type: ANSWER_CREATE_REQUEST
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
            `/api/comments/questions/${quiz_id}/answerss`,
            {'text':text,'correct':correct},
            config
        )
        dispatch({
            type: ANSWER_CREATE_SUCCESS,
            payload: data,
        })


    } catch (error) {
        dispatch({
            type: ANSWER_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}
