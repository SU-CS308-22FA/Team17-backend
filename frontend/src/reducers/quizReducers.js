
import {
    CATEGORY_CREATE_REQUEST,
    CATEGORY_CREATE_SUCCESS,
    CATEGORY_CREATE_FAIL,
    CATEGORY_CREATE_RESET,
    CATEGORY_LIST_CREATE_REQUEST,
    CATEGORY_LIST_CREATE_SUCCESS,
    CATEGORY_LIST_CREATE_FAIL,
    CATEGORY_LIST_CREATE_RESET,
    CATEGORY_DELETE_REQUEST,
    CATEGORY_DELETE_SUCCESS,
    CATEGORY_DELETE_FAIL,
    QUESTION_LIST_CREATE_REQUEST,
    QUESTION_LIST_CREATE_SUCCESS,
    QUESTION_LIST_CREATE_FAIL,
    QUESTION_LIST_CREATE_RESET,
    QUESTION_DELETE_REQUEST,
    QUESTION_DELETE_SUCCESS,
    QUESTION_DELETE_FAIL,
    QUESTION_CREATE_REQUEST,
    QUESTION_CREATE_SUCCESS,
    QUESTION_CREATE_FAIL,
    QUESTION_CREATE_RESET,

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

    QUESTION_DELETE_RESET,
} from '../constants/quizConstants'

export const CategoryCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case CATEGORY_CREATE_REQUEST:
            return { loading: true }

        case CATEGORY_CREATE_SUCCESS:
            return { loading: false, success: true, category: action.payload }

        case CATEGORY_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case CATEGORY_CREATE_RESET:
            return {}

        default:
            return state
    }
}

export const categoryListReducer = (state = { categories: [] }, action) => {
    switch (action.type) {
        case CATEGORY_LIST_CREATE_REQUEST:
            return { loading: true }

        case CATEGORY_LIST_CREATE_SUCCESS:
            return { loading: false, categories: action.payload }

        case CATEGORY_LIST_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case CATEGORY_LIST_CREATE_RESET:
            return { categories: [] }

        default:
            return state
    }
}

export const categoryDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case CATEGORY_DELETE_REQUEST:
            return { loading: true }

        case CATEGORY_DELETE_SUCCESS:
            return { loading: false, success: true }

        case CATEGORY_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const categoryDetailsReducer = (state = { questions: [] }, action) => {
    switch (action.type) {
        case QUESTION_LIST_CREATE_REQUEST:
            return { ...state, loading: true }

        case QUESTION_LIST_CREATE_SUCCESS:
            return { loading: false, questions: action.payload }

        case QUESTION_LIST_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case QUESTION_LIST_CREATE_RESET:
            return { questions: [] }


        default:
            return state
    }
}

export const questionDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case QUESTION_DELETE_REQUEST:
            return { loading: true }

        case QUESTION_DELETE_SUCCESS:
            return { loading: false, success: true }

        case QUESTION_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const PromptCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case QUESTION_CREATE_REQUEST:
            return { loading: true }

        case QUESTION_CREATE_SUCCESS:
            return { loading: false, success: true, question: action.payload }

        case QUESTION_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case QUESTION_CREATE_RESET:
            return {}

        default:
            return state
    }
}

export const AnswerListReducer = (state = { answers: [] }, action) => {
    switch (action.type) {
        case ANSWER_DETAIL_REQUEST:
            return { loading: true }

        case ANSWER_DETAIL_SUCCESS:
            return { loading: false, answers: action.payload }

        case ANSWER_DETAIL_FAIL:
            return { loading: false, error: action.payload }

        case ANSWER_DETAIL_RESET:
            return { answers: [] }

        default:
            return state
    }
}

export const answerDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case ANSWER_DELETE_REQUEST:
            return { loading: true }

        case ANSWER_DELETE_SUCCESS:
            return { loading: false, success: true }

        case ANSWER_DELETE_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}

export const answerCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ANSWER_CREATE_REQUEST:
            return { loading: true }

        case ANSWER_CREATE_SUCCESS:
            return { loading: false, success: true, answerss: action.payload }

        case ANSWER_CREATE_FAIL:
            return { loading: false, error: action.payload }

        case ANSWER_CREATE_RESET:
            return {}

        default:
            return state
    }
}
