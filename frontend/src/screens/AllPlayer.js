import React, { useState, useEffect } from 'react'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listPlayers } from '../actions/playerActions'
import { getMyUserDetails} from '../actions/profileActions'


function AllPlayer({ history }) {

    const dispatch = useDispatch()

    const playeralllist = useSelector(state => state.playeralllist)
    const { loading, error, playerAll } = playeralllist

    const usermyDetails = useSelector(state => state.usermyDetails)
    const { error:error1, loading:loading1, Myuser } = usermyDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (userInfo) {
            dispatch(listPlayers())
            dispatch(getMyUserDetails(`profile/${userInfo._id}`))
        } else {
            history.push('/login')
        }

    }, [dispatch, history, userInfo])

    return (
        <div>
            <h1>{Myuser.team} Player's ratings given by the users</h1>
            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>Player Name</th>
                                    <th>Score</th>
                                </tr>
                            </thead>

                            <tbody>
                                {playerAll.map(player => (
                                    Myuser.team === player.team_player ?(
                                    <tr key={player.id}>
                                        <td>{player.player}</td>
                                        <td>{player.score}</td>
                                    </tr>):null
                                ))}
                            </tbody>
                        </Table>
                    )}
        </div>

    )
}

export default AllPlayer
