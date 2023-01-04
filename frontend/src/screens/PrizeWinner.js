import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { listWinners } from '../actions/generalActions'
import { listPrizes } from '../actions/prizeActions'
import { login } from '../actions/userActions'

function PrizeWinner({ location, history }) {
    const gsprizearr=[]
    const fbprizearr=[]
    const tsprizearr=[]
    const bjkprizearr=[]

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const redirect = location.search ? location.search.split('=')[1] : '/profile'

    const winnerlistreducer = useSelector(state => state.winnerlistreducer)
    const { error:error1, loading:loading1, winners } = winnerlistreducer

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
        else{
            dispatch(listWinners())
        }

    }, [history, userInfo, dispatch,redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <div>
        {loading1 && loading
            ? (<Loader />)
            : error
                ? (<Message variant='danger'>{error}</Message>)
                : (
                    <div>
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>Prize Winners for Galatasaray</th>
                                </tr>
                            </thead>

                            <tbody>
                                {winners?.sort((first,second) => second.rating - first.rating).map((winner,index) =>(
                                    winner.team === "galatasaray" ?(
                                    <tr key={index}>
                                        <td>{winner["user"].name}</td>
                                        <td>{winner.team}</td>
                                        <td>{winner.rating}</td>
                                    </tr>):null
                                ))}
                            </tbody>
                        </Table>
                    </div>
                )}
                <div>
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>Prize Winners for Fenerbahce</th>
                            </tr>
                        </thead>

                        <tbody>
                            {winners?.sort((first,second) => second.rating - first.rating ).map((winner,index) =>(
                                winner.team === "fenerbahce" ?(
                                <tr key={index}>
                                    <td>{winner["user"].name}</td>
                                    <td>{winner.team}</td>
                                    <td>{winner.rating}</td>
                                </tr>):null
                            ))}
                        </tbody>
                    </Table>
                </div>

                <div>
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>Prize Winners for Besiktas</th>
                            </tr>
                        </thead>

                        <tbody>
                            {winners?.sort((first,second) => second.rating - first.rating ).map((winner,index) =>(
                                winner.team === "besiktas" ?(
                                <tr key={index}>
                                    <td>{winner["user"].name}</td>
                                    <td>{winner.team}</td>
                                    <td>{winner.rating}</td>
                                </tr>):null
                            ))}
                        </tbody>
                    </Table>
                </div>

                <div>
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>Prize Winners for Trabzonspor</th>
                            </tr>
                        </thead>

                        <tbody>
                            {winners?.sort((first,second) => second.rating - first.rating ).map((winner,index) =>(
                                winner.team === "trabzonspor" ?(
                                <tr key={index}>
                                    <td>{winner["user"].name}</td>
                                    <td>{winner.team}</td>
                                    <td>{winner.rating}</td>
                                </tr>):null
                            ))}
                        </tbody>
                    </Table>
                </div>
    </div>







    )
}

export default PrizeWinner
