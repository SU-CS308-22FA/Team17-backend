import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { PostDetails } from '../actions/blogActions'
import cssClass from '../components/details.css'
import hr from '../components/HR/hr.js'
import { COMMENTS_CREATE_RESET } from '../constants/commentsConstants'
import { CommentList, createComment } from '../actions/commentsActions'
import Comments from '../components/comments'
import { POST_DETAILS_SUCCESS } from '../constants/blogConstants'

function BlogDetailScreen({ match, history }) {
    const [body, setBody] = useState('')

    const dispatch = useDispatch()

    const postdetails = useSelector(state => state.postdetails)
    const { loading, error, post } = postdetails

    const postcomment = useSelector(state => state.postcomment)
    const { error:error1, loading:loading1, success, comment } = postcomment

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const [message, setMessage] = useState('')

    useEffect(() => {


        if(success){
            setBody("")
            dispatch({ type: COMMENTS_CREATE_RESET})
        }
        dispatch(PostDetails(match.params.slug))


    }, [dispatch, match, success])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createComment(match.params.slug,userInfo.name,body,userInfo.email))
        setMessage('')

    }


    return (

        <div>
                {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <div className={cssClass.PostBodyDiv}>
                        <h1 className={cssClass.Title}>
                            {post.title}
                        </h1>

                        <p className={cssClass.PublishedDate}>
                            {new Date(
                                post.published_on
                            ).toDateString()}
                        </p>
                        <hr />
                        <p className={cssClass.PostBody}>
                            {post.body}
                        </p>
                        <hr />
                        <div className={cssClass.PostInfo}>
                            <p> - {post.author_full_name}</p>
                        </div>
                        <h1 className={cssClass.CommentHeading}>
                            Comments: {post.total_comments}
                        </h1>

                        {post.comments_list && post.comments_list.map(comment => (
                            <Col key={comment._id} sm={12} md={6} lg={4} xl={3}>
                                <Comments comments={comment} />
                            </Col>
                        ))}

                        <hr />
                        <h1 className={cssClass.CommentHeading}>
                            Add a comment
                        </h1>
                        <hr />
                        <Form onSubmit={submitHandler}>

                            <Form.Group className="h-25" controlId="formHorizontalPassword">
                                <textarea class="form-control" id="form4Example3" rows="5" required type='name' placeholder='Enter Comment ' value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                            </Form.Group>



                            <Button type='submit' variant='primary'>
                                Create
                            </Button>

                        </Form>
                        </div>

                    )}


        </div>

    )
}

export default BlogDetailScreen
