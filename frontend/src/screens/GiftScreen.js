import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import { listPrizes } from '../actions/prizeActions'
import { login } from '../actions/userActions'
function GiftScreen({ location,history }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const redirect = location.search ? location.search.split('=')[1] : '/profile'

    const prizealllist = useSelector(state => state.prizealllist)
    const { error:error1, loading:loading1, prizeAll } = prizealllist

    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
        else{
            dispatch(listPrizes())
        }


    }, [history, userInfo, dispatch,redirect])





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
                                    <th>Prizes for Galatasaray winners</th>
                                </tr>
                            </thead>

                            <tbody>
                                {prizeAll?.map((prize,index) =>(
                                    prize.prize_team === "galatasaray" ?(
                                    <tr key={index}>
                                        <td>{prize.prize_name}</td>
                                        <td>{prize.prize_content}</td>
                                        <td>{prize.winner_ladder}</td>
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
                                <th>Prize Winners for Fenerbahce winners</th>
                            </tr>
                        </thead>

                        <tbody>
                        {prizeAll?.map((prize,index) =>(
                                    prize.prize_team === "fenerbahce" ?(
                                    <tr key={index}>
                                        <td>{prize.prize_name}</td>
                                        <td>{prize.prize_content}</td>
                                        <td>{prize.winner_ladder}</td>
                                    </tr>):null
                                ))}
                        </tbody>
                    </Table>
                </div>

                <div>
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>Prize Winners for Besiktas winners</th>
                            </tr>
                        </thead>

                        <tbody>
                        {prizeAll?.map((prize,index) =>(
                                    prize.prize_team === "besiktas" ?(
                                    <tr key={index}>
                                        <td>{prize.prize_name}</td>
                                        <td>{prize.prize_content}</td>
                                        <td>{prize.winner_ladder}</td>
                                    </tr>):null
                                ))}
                        </tbody>
                    </Table>
                </div>

                <div>
                    <Table striped bordered hover responsive className='table-sm'>
                        <thead>
                            <tr>
                                <th>Prize Winners for Trabzonspor winners</th>
                            </tr>
                        </thead>

                        <tbody>
                        {prizeAll?.map((prize,index) =>(
                                    prize.prize_team === "trabzonspor" ?(
                                    <tr key={index}>
                                        <td>{prize.prize_name}</td>
                                        <td>{prize.prize_content}</td>
                                        <td>{prize.winner_ladder}</td>
                                    </tr>):null
                                ))}
                        </tbody>
                    </Table>
                </div>
    </div>




    )
}
export default GiftScreen
