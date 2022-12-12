import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button , Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { LinkContainer } from 'react-router-bootstrap'
import { getCategoryDetails,deleteQuestion,createQuestion } from '../actions/quizActions'
import { Table } from 'react-bootstrap'

function QuizAddScreen({ match, history }) {

    const catId = match.params.id
    const [prompt, setPrompt] = useState('')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const categoryDetail = useSelector(state => state.categoryDetail)
    const { loading, error, questions } = categoryDetail

    const questionCreate = useSelector(state => state.questionCreate)
    const { error:error1, loading:loading1, success, question } = questionCreate


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const questionDelete = useSelector(state => state.questionDelete)
    const { success: successDelete } = questionDelete


    useEffect(() => {
        if(success)
            setPrompt('')

        dispatch(getCategoryDetails(catId))

    }, [dispatch,catId,history,successDelete, success])

    const deleteHandler = (id) => {

        if (window.confirm('Are you sure you want to delete this category?')) {
            dispatch(deleteQuestion(id))
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createQuestion(catId,prompt))
        setMessage('')

    }


    return (
        <div>
            <Link to='/categorylist'>
                Go Back
            </Link>
            <h1>questions</h1>
            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>PROMPT</th>
                                    <th>DELETE</th>
                                    <th>ADD ANSWERS</th>
                                </tr>
                            </thead>

                            <tbody>
                                {questions.map(questionss => (
                                    <tr key={questionss.id}>
                                        <td>{questionss.id}</td>
                                        <td>{questionss.prompt}</td>
                                        <td>
                                            <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(questionss.id)}>
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </td>
                                        <td>
                                            <LinkContainer to={`/answer/list/${questionss.id}/edit`}>
                                                <Button variant='dark' className='btn-sm'>
                                                    <i className='fas fa-edit'></i>
                                                </Button>
                                            </LinkContainer>


                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                            <Form onSubmit={submitHandler}>

                                <Form.Group controlId='Add an Question' form-control-lg>
                                    <Form.Label>Add an Question</Form.Label>
                                    <Form.Control
                                        required
                                        type='name'
                                        placeholder='Soru Ekle'
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>



                                <hr></hr>

                                <Button type='submit' variant='primary'>
                                    Oluştur
                                </Button>

                            </Form>
        </div>

    )
}

export default QuizAddScreen
