import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form,Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'

import { createCategory } from '../actions/quizActions'
import { USER_UPDATE_RESET } from '../constants/userConstants'
import {CATEGORY_CREATE_RESET} from '../constants/quizConstants'

function AddCategory({ history }) {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')


    const [message, setMessage] = useState('')

    const categorycreate = useSelector(state => state.categorycreate)
    const { error, loading, category } = categorycreate

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (category) {
            dispatch({ type: CATEGORY_CREATE_RESET })
            history.push('/categorylist')
        }
    }, [history, category])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createCategory(userInfo.id,title))
        setMessage('')

    }





    return (
        <Col md={20}>
        <h2>Category Oluştur</h2>

        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>

            <Form.Group controlId='name' form-control-lg>
                <Form.Label>Category</Form.Label>
                <Form.Control
                    required
                    type='name'
                    placeholder='Category Ekle'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                >
                </Form.Control>
            </Form.Group>


            <Button type='submit' variant='primary'>
                Oluştur
        </Button>

        </Form>
    </Col>

    )
}

export default AddCategory
