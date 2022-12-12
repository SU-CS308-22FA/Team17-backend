import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button , Col} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import {listAnswers,deleteAnswer,createAnswer} from '../actions/quizActions'
import { Table } from 'react-bootstrap'

function AnswerList({ match, history }) {

    const question_id = match.params.id
    const [answer, setAnswer] = useState('')
    const [isCorrect, SetisCorrect] = useState(false)

    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const answerList = useSelector(state => state.answerList)
    const { loading, error, answers } = answerList

    const answerCreate = useSelector(state => state.answerCreate)
    const { error:error1, loading:loading1, success, answerss } = answerCreate

    const answerDelete = useSelector(state => state.answerDelete)
    const { success: successDelete } = answerDelete



    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin



    useEffect(() => {
        if(success)
            setAnswer('')
            SetisCorrect(false)

        dispatch(listAnswers(question_id))

    }, [dispatch,question_id,history,successDelete,success])


    const deleteHandler = (id) => {

        if (window.confirm('Are you sure you want to delete this category?')) {
            dispatch(deleteAnswer(id))
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createAnswer(question_id,answer,isCorrect))
        setMessage('')

    }



    return (
        <div>
            <Link to='/categorylist'>
                Go Back
            </Link>
            <h1>Answers</h1>
            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>TEXT</th>
                                    <th>IS_CORRECT</th>
                                    <th>DELETE</th>

                                </tr>
                            </thead>

                            <tbody>
                                {answers.map(answer => (
                                    <tr key={answer.id}>
                                        <td>{answer.id}</td>
                                        <td>{answer.text}</td>
                                        <td>{answer.correct}</td>
                                        <td>
                                            <Button variant='danger' className='btn-sm' onClick={() => deleteHandler(answer.id)}>
                                                <i className='fas fa-trash'></i>
                                            </Button>
                                        </td>


                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                        <Col md={4}>
                            <Form onSubmit={submitHandler}>
                            <Form.Group controlId='Add an Answer' form-control-lg>
                                    <Form.Label>Add an Answer</Form.Label>
                                    <Form.Control
                                        required
                                        type='Answer'
                                        placeholder='Cevap Ekle'
                                        value={answer}
                                        onChange={(e) => setAnswer(e.target.value)}
                                    >
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Check type={"checkbox"}>
                                        <Form.Check.Input
                                        type={"checkbox"}
                                        defaultChecked={false}
                                        value = {true}
                                        onClick={(e) => SetisCorrect(e.target.value)}
                                        />
                                        <Form.Check.Label>Is Correct</Form.Check.Label>
                                    </Form.Check>
                                </Form.Group>



                                <hr></hr>

                                <Button type='submit' variant='primary'>
                                    Oluştur
                                </Button>

                            </Form>
                        </Col>


        </div>

    )
}

export default AnswerList
