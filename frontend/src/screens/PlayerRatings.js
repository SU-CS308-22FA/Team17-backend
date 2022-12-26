import React, { useState, useEffect } from 'react'
import { Form,Col, Button , Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getMyUserDetails} from '../actions/profileActions'

import { GsRatingsAll } from '../actions/galatasarayActions'


function PlayerRatings({ history }) {

    const dispatch = useDispatch()

    const ratingsgslist = useSelector(state => state.ratingsgslist)
    const { loading, error, Ratingsgs } = ratingsgslist


    const usermyDetails = useSelector(state => state.usermyDetails)
    const { error:error1, loading:loading1, Myuser } = usermyDetails


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    useEffect(() => {
        if (userInfo) {
            dispatch(GsRatingsAll())
            dispatch(getMyUserDetails(`profile/${userInfo._id}`))

        } else {
            history.push('/login')
        }

    }, [dispatch, history, userInfo])



    return (
        <div>
            <h1>Overall Player Ratings for {Myuser?.team}</h1>
            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <div>
                        <Table striped bordered hover responsive className='table-sm'>
                            <thead>
                                <tr>
                                    <th>TITLE</th>
                                    <th>QUESTION_COUNT</th>
                                </tr>
                            </thead>

                            <tbody>
                                {Ratingsgs["topPlayers"]?.rating.map(item => (
                                    <tr key={item}>
                                        <td>{item["statistics"]?.rating}</td>
                                        <td>{item["player"]?.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        </div>
                    )}
        </div>

    )

}

export default PlayerRatings
