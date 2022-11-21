import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Table } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listAllPosts } from '../actions/blogActions'
import Posts from '../components/Posts'
import { Carousel } from 'react-bootstrap'


function BlogListScreen({ history }) {

    const dispatch = useDispatch()

    const postallList = useSelector(state => state.postallList)
    const { loading, error, Allposts } = postallList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo ) {
            history.push('/login')
        } else {
            dispatch(listAllPosts())

        }
    }, [dispatch, history, userInfo])


    return (
        <div>
            <h1>Latest Posts</h1>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                    <Row>
                        {Allposts.map(post => (
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

export default BlogListScreen
