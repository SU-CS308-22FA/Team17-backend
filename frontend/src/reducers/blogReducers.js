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

export const postCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case POST_CREATE_REQUEST:
            return { loading: true }

        case POST_CREATE_SUCCESS:
            return { loading: false, success: true, post: action.payload }

        case POST_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case POST_CREATE_RESET:
            return {}

        default:
            return state
    }
}

export const postMyListReducer = (state = { Myposts: [] }, action) => {
    switch (action.type) {
        case POST_MYLIST_REQUEST:
            return { loading: true }

        case POST_MYLIST_SUCCESS:
            return { loading: false, Myposts: action.payload }

        case POST_MYLIST_FAIL:
            return { loading: false, error: action.payload }

        case POST_MYLIST_RESET:
            return { Myposts: [] }

        default:
            return state
    }
}


export const postAllListReducer = (state = { Allposts: [] }, action) => {
    switch (action.type) {
        case POST_LIST_REQUEST:
            return { loading: true }

        case POST_LIST_SUCCESS:
            return { loading: false, Allposts: action.payload }

        case POST_LIST_FAIL:
            return { loading: false, error: action.payload }

        case POST_LIST_RESET:
            return { Allposts: [] }

        default:
            return state
    }
}

export const postDetailsReducer = (state = { post: { comments: [] } }, action) => {
    switch (action.type) {
        case POST_DETAILS_REQUEST:
            return { loading: true, ...state }

        case POST_DETAILS_SUCCESS:
            return { loading: false, post: action.payload }

        case POST_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}
