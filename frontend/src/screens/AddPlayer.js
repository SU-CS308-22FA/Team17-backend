import React, { useState, useEffect } from 'react'
import { Form,Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'

import { createPlayer } from '../actions/playerActions'
import {PLAYER_CREATE_RESET} from '../constants/playerConstants'

function AddPlayer({ history }) {

    const [playerteam, setPlayeerTeam] = useState('')
    const [playername, setplayer] = useState('')


    const [message, setMessage] = useState('')

    const playercreatereducer = useSelector(state => state.playercreatereducer)
    const { error, loading, success,player } = playercreatereducer

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (success) {
            setPlayeerTeam("")
            setplayer("")
            dispatch({ type: PLAYER_CREATE_RESET })
        }
    }, [history, success,dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createPlayer(playerteam,playername))
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
                <Form.Label>Oyuncu İsmi</Form.Label>
                <Form.Control
                    required
                    type='name'
                    placeholder='Eklenecek oyuncunun ismini giriniz...'
                    value={playername}
                    onChange={(e) => setplayer(e.target.value)}
                >
                </Form.Control>
            </Form.Group>

            <Form.Group controlId='name' form-control-lg>
                <Form.Label>Oyuncunun takımı</Form.Label>
                <Form.Control
                    required
                    type='name'
                    placeholder='Eklenecek oyuncunun takımını giriniz...'
                    value={playerteam}
                    onChange={(e) => setPlayeerTeam(e.target.value)}
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

export default AddPlayer
