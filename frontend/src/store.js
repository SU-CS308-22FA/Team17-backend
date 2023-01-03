import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    userLoginReducer,
    userRegisterReducer,
    userDetailsReducer,
    userUpdateProfileReducer,
    userListReducer,
    userDeleteReducer,
    userUpdateReducer,
} from './reducers/userReducers'

import {
    userMyDetailsReducer,
    userUpdateMyProfileReducer,
    userMyListReducer,
} from './reducers/profileReducers'

import {
    postCreateReducer, postMyListReducer,
    postAllListReducer,
    postDetailsReducer,
} from './reducers/blogReducers'

import {
    commentCreateReducer,
    CommentAllList,
} from './reducers/commentsReducers'

import {
    CategoryCreateReducer,
    categoryListReducer,
    categoryDeleteReducer,
    categoryDetailsReducer,
    questionDeleteReducer,
    PromptCreateReducer,
    AnswerListReducer,
    answerDeleteReducer,
    answerCreateReducer,

} from './reducers/quizReducers'

import {
    StatisticsGsList,
    ratingsGsList,
} from './reducers/galatasarayReducers'

import {
    StatisticsFbList,
    ratingsFbList,
} from './reducers/fenerbahceReducers'

import {
    PlayerCreateReducer,
    PlayerAllList,
    PlayerUpdateReducer,
} from './reducers/playerReducers'


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,

    usermyDetails: userMyDetailsReducer,
    usermyUpdateProfile: userUpdateMyProfileReducer,
    usermyList: userMyListReducer,

    postCreate:postCreateReducer,
    postmyList:postMyListReducer,
    postallList:postAllListReducer,
    postdetails:postDetailsReducer,

    postcomment :commentCreateReducer,
    commentalllist:CommentAllList,

    categorycreate:CategoryCreateReducer,
    categoryList:categoryListReducer,
    categoryDelete:categoryDeleteReducer,
    categoryDetail:categoryDetailsReducer,
    questionDelete:questionDeleteReducer,
    questionCreate:PromptCreateReducer,
    answerList:AnswerListReducer,
    answerDelete:answerDeleteReducer,
    answerCreate:answerCreateReducer,
    statisticsgslist:StatisticsGsList,
    ratingsgslist:ratingsGsList,
    statisticsfblist:StatisticsFbList,
    ratingsfblist:ratingsFbList,
    playercreatereducer:PlayerCreateReducer,
    playeralllist:PlayerAllList,
    platerupdatereducer:PlayerUpdateReducer,
})

const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null

const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
}

const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store
