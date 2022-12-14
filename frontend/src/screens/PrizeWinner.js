import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

function PrizeWinner({ location, history }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/profile'

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <FormContainer>
            <h1>Ödül Kazananar</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>


                <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Fenerbahçe</th>
                    <th scope="col">Kazanan Adı</th>
                    <th scope="col">Kazanan Soyadı</th>
                    <th scope="col">Ödül Açıklaması</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Melike</td>
                    <td>Özgen</td>
                    <td>Maç Bileti</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Emre</td>
                    <td>Demir</td>
                    <td>Forma</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Ayçin</td>
                    <td>Kara</td>
                    <td>Kupa</td>
                    </tr>
                </tbody>
                </table>

                <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Galatasaray</th>
                    <th scope="col">Kazanan Adı</th>
                    <th scope="col">Kazanan Soyadı</th>
                    <th scope="col">Ödül Açıklaması</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Ebru</td>
                    <td>Saygın</td>
                    <td>Maç Bileti</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Sena</td>
                    <td>Tütsü</td>
                    <td>Top</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Kaan</td>
                    <td>Bıyık</td>
                    <td>Takım Atkısı</td>
                    </tr>
                </tbody>
                </table>

                <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Trabzonspor</th>
                    <th scope="col">Kazanan Adı</th>
                    <th scope="col">Kazanan Soyadı</th>
                    <th scope="col">Ödül Açıklaması</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Caner</td>
                    <td>Kunduz</td>
                    <td>Tablet</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Metin </td>
                    <td>Solar</td>
                    <td>Peluş Oyuncak</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Onur</td>
                    <td>Güven </td>
                    <td>Tshirt</td>
                    </tr>
                </tbody>
                </table>

                <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Beşiktaş</th>
                    <th scope="col">Kazanan Adı</th>
                    <th scope="col">Kazanan Soyadı</th>
                    <th scope="col">Ödül Açıklaması</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Banu</td>
                    <td>Tuğrul</td>
                    <td>Tatil</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Elif</td>
                    <td>Aslan</td>
                    <td>Mont</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Ali</td>
                    <td>Duyar</td>
                    <td>Maç bileti</td>
                    </tr>
                </tbody>
                </table>
                                

                
            </Form>

        </FormContainer>
    )
}

export default PrizeWinner
