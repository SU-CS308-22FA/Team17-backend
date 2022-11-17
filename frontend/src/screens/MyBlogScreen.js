import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listMyPosts } from '../actions/blogActions'
import Posts from '../components/Posts'



function MyBlogScreen({ history }) {

    const dispatch = useDispatch()

    const postmyList = useSelector(state => state.postmyList)
    const { loading, error, Myposts } = postmyList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo ) {
            history.push('/login')
        } else {
            dispatch(listMyPosts())
        }
    }, [dispatch, history, userInfo])



    return (
        <div>
            <h1>My Posts</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {Myposts.map(post => (
                                <Col key={post._id} sm={12} md={6} lg={4} xl={3}>
                                    <Posts post={post} />
                                </Col>
                            ))}
                        </Row>
                    </div>
            }
        </div>
    )
}

export default MyBlogScreen
