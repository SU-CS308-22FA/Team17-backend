import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Table, ModalTitle } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { createPost } from '../actions/blogActions'
import { POST_CREATE_RESET } from '../constants/blogConstants'


function CreateBlogScreen({ history }) {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [short, setShort] = useState('')
    const [published, setPublished] = useState(true)

    const [message, setMessage] = useState('')

    const postCreate = useSelector(state => state.postCreate)
    const { error, loading, post } = postCreate

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (post) {
            dispatch({ type: POST_CREATE_RESET })
            history.push('/my/blog')
        }
    }, [history, post])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createPost(title,body,short,published))
        setMessage('')

    }
    return (
            <Col md={20}>
                <h2>Create Blog Profile</h2>

                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>

                    <Form.Group controlId='name' form-control-lg>
                        <Form.Label>title</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            placeholder='title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className="h-25" controlId="formHorizontalPassword">
                        <Form.Label>Body</Form.Label>
                        <textarea class="form-control" id="form4Example3" rows="4" required type='name' placeholder='Enter Body ' value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                    </Form.Group>

                    <Form.Group controlId='name'>
                        <Form.Label>short_description</Form.Label>
                        <Form.Control

                            type='name'
                            placeholder='short_description'
                            value={short}
                            onChange={(e) => setShort(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>


                    <Button type='submit' variant='primary'>
                        Update
                </Button>

                </Form>
            </Col>
    )
}

export default CreateBlogScreen
