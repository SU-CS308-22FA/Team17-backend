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


export const commentCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case COMMENTS_CREATE_REQUEST:
            return { loading: true }

        case COMMENTS_CREATE_SUCCESS:
            return { loading: false, success: true, comment: action.payload }

        case COMMENTS_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case COMMENTS_CREATE_RESET:
            return {}

        default:
            return state
    }
}

export const CommentAllList = (state = { commentsAll: [] }, action) => {
    switch (action.type) {
        case COMMENTS_LIST_REQUEST:
            return { loading: true }

        case COMMENTS_LIST_SUCCESS:
            return { loading: false, commentsAll: action.payload }

        case COMMENTS_LIST_FAIL:
            return { loading: false, error: action.payload }

        case COMMENTS_LIST_RESET:
            return { commentsAll: [] }

        default:
            return state
    }
}
