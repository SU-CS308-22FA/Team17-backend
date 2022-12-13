import React, { useState, useEffect } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listCategories } from '../actions/quizActions'
import { getMyUserDetails} from '../actions/profileActions'


function QuizCategory({ history }) {

    const dispatch = useDispatch()

    const categoryList = useSelector(state => state.categoryList)
    const { loading, error, categories } = categoryList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const usermyDetails = useSelector(state => state.usermyDetails)
    const { error:error1, loading:loading1, Myuser } = usermyDetails

    useEffect(() => {
        if (userInfo) {
            dispatch(listCategories())
            dispatch(getMyUserDetails(`profile/${userInfo._id}`))
        } else {
            history.push('/login')
        }

    }, [dispatch, history, userInfo])

    return (
        <div>
            <h1>Categories</h1>
            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>TITLE</th>
                                    <th>QUESTION_COUNT</th>
                                    <th>AttemptQuiz</th>
                                </tr>
                            </thead>

                            <tbody>
                                {categories.map(category => (
                                    Myuser.team === category.title ?(
                                    <tr key={category.id}>
                                        <td>{category.title}</td>
                                        <td>{category.question_count}</td>
                                        <td>
                                            <LinkContainer to={`attemptquiz/${category.id}`}>
                                                <Button variant='dark' className='btn-sm'>
                                                    <i className='fas fa-edit'></i>
                                                </Button>
                                            </LinkContainer>
                                        </td>
                                    </tr>):null
                                ))}
                            </tbody>
                        </Table>
                    )}
        </div>

    )
}

export default QuizCategory
