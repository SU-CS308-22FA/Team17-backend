import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'
import { createPrize } from '../actions/prizeActions'
import {PRIZE_CREATE_RESET} from '../constants/prizeConstants'

function AdminPrizeAdd({ location, history }) {
    const [prize_team, setPrizeTeam] = useState('')
    const [prize_name, setPrizeName] = useState('')
    const [prize_content, setPrizeContent] = useState('')
    const [winner_ladder, setWinnerLadder] = useState('')



    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const prizecreate = useSelector(state => state.prizecreate)
    const { error , loading, success,prize } = prizecreate


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (success) {
            setPrizeTeam("")
            setPrizeName("")
            setPrizeContent("")
            setWinnerLadder("")
            dispatch({ type: PRIZE_CREATE_RESET })
        }
    }, [history, success,dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createPrize(prize_name,prize_content,winner_ladder,prize_team))
        setMessage('')

    }

    return (
        <Col md={20}>
        <h2>Ödül Oluştur</h2>

        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>

            <Form.Group controlId='name' form-control-lg>
                <Form.Label>Ödülün İsmi</Form.Label>
                <Form.Control
                    required
                    type='name'
                    placeholder='Eklenecek ödülün ismini giriniz...'
                    value={prize_name}
                    onChange={(e) => setPrizeName(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

                <Form.Group controlId='name' form-control-lg>
                    <Form.Label>Ödülün açıklaması</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Eklenecek ödülün açıklamasını giriniz...'
                        value={prize_content}
                        onChange={(e) => setPrizeContent(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='name' form-control-lg>
                    <Form.Label>Ödülün kaçıncıya verilecegi</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Ödülün kaçıncıya verilecegini seçiniz...'
                        value={winner_ladder}
                        onChange={(e) => setWinnerLadder(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='name' form-control-lg>
                    <Form.Label>Oyuncunun takımı</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='Eklenecek ödülün hangi takıma ait olduğunu yazınız...'
                        value={prize_team}
                        onChange={(e) => setPrizeTeam(e.target.value)}
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

export default AdminPrizeAdd
