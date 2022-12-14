import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { login } from '../actions/userActions'

function AdminPrizeAdd({ location, history }) {
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
            <h1>Ödül Ekleme</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>


                <form>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Ödül Fotoğrafını Ekleyin</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                </div>
                </form>

                <div class="form-group">
                    <label for="inputAddress">Ödül Açıklaması Girin</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Ödül tanımı.."/>
                </div>

                <fieldset class="form-group">
                    <div class="row">
                    <div class="col-sm-10">
                        <div class="row">
                        <legend class="col-form-label ">Ödül için sıralama seçiniz</legend>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
                        <label class="form-check-label" for="gridRadios1">
                            Birinci Olan Kullanıcı için 
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
                        <label class="form-check-label" for="gridRadios2">
                            İkinci Olan Kullanıcı için 
                        </label>
                        </div>
                        <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3"/>
                        <label class="form-check-label" for="gridRadios3">
                            Üçüncü Olan Kullanıcı için 
                        </label>
                        </div>
                    </div>
                    </div>
                </fieldset>
                <form><div class="form-group">
                    <label for="inputState">Takım Seçin</label>
                    <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>Fenerbahçe</option>
                        <option>Galatasaray</option>
                        <option>Beşiktaş</option>
                        <option>Trabzonspor</option>
                    </select>
                    </div>

                </form>
                

                <Button type='submit' variant='primary'>
                    Ödülü ekle
                </Button>
            </Form>

        </FormContainer>
    )
}

export default AdminPrizeAdd
