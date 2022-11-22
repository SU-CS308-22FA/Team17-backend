import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { register } from '../actions/userActions'

function RegisterScreen({ location, history }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [team, setTeam] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()

        if (password != confirmPassword) {
            setMessage('Şifre Aynı Değil')
        } else {
            dispatch(register(name, email, team, password))
        }

    }

    return (
        <FormContainer>
            <h1>Kayıt Ol</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='name'>
                    <Form.Label>İsim</Form.Label>
                    <Form.Control
                        required
                        type='name'
                        placeholder='İsim Gir'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email'>
                    <Form.Label>Email Adresi</Form.Label>
                    <Form.Control
                        required
                        type='email'
                        placeholder='Email Gir'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='team'>
                    <Form.Label>Takım</Form.Label>
                    <Form.Control
                        required
                        type='team'
                        placeholder='Takımını Gir'
                        value={team}
                        onChange={(e) => setTeam(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>Şifre</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Şifre Gir'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='passwordConfirm'>
                    <Form.Label>Şifre Onay</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Şifreni Tekrar Gir'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant='primary'>
                    Kayıt Ol
                </Button>

            </Form>

            <Row className='py-3'>
                <Col>
                    Zaten Hesabın Var Mı? <Link
                        to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                        Giriş Yap
                        </Link>
                </Col>
            </Row>
        </FormContainer >
    )
}

export default RegisterScreen
