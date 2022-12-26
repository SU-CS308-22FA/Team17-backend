import React, { useState, useEffect } from 'react'
import { Form,Col, Button , Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getMyUserDetails} from '../actions/profileActions'

import { Gsstatisticsall } from '../actions/galatasarayActions'


function TeamStatistics({ history }) {

    const dispatch = useDispatch()

    const statisticsgslist = useSelector(state => state.statisticsgslist)
    const { loading, error, Statisticsgs } = statisticsgslist


    const usermyDetails = useSelector(state => state.usermyDetails)
    const { error:error1, loading:loading1, Myuser } = usermyDetails


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    useEffect(() => {
        if (userInfo) {
            dispatch(Gsstatisticsall())
            dispatch(getMyUserDetails(`profile/${userInfo._id}`))

        } else {
            history.push('/login')
        }

    }, [dispatch, history, userInfo])



    return (
        <div>
            <h1>Team Statistics for {Myuser?.team}</h1>
            {loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                        <div>
                            <Table striped bordered hover size="sm">
                                <tr>
                                    <th>statistics</th>
                                    <th>Number</th>
                                </tr>
                                <tr>
                                    <td>Galatasaray total assists</td>
                                    <td>{Statisticsgs["statistics"]?.assists}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total goal</td>
                                    <td>{Statisticsgs["statistics"]?.goalsScored}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total successfulDribbles</td>
                                    <td>{Statisticsgs["statistics"]?.successfulDribbles}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total yellowCardsAgainst</td>
                                    <td>{Statisticsgs["statistics"]?.yellowCardsAgainst}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total redCards</td>
                                    <td>{Statisticsgs["statistics"]?.redCards}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total yellowCards</td>
                                    <td>{Statisticsgs["statistics"]?.yellowCards}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total PassesAgainst</td>
                                    <td>{Statisticsgs["statistics"]?.totalPassesAgainst}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total shotsFromOutsideTheBoxAgainst</td>
                                    <td>{Statisticsgs["statistics"]?.shotsFromOutsideTheBoxAgainst}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total FinalThirdPassesAgainst</td>
                                    <td>{Statisticsgs["statistics"]?.totalFinalThirdPassesAgainst}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total shotsOnTarget</td>
                                    <td>{Statisticsgs["statistics"]?.shotsOnTarget}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total corners</td>
                                    <td>{Statisticsgs["statistics"]?.corners}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total freeKickShots</td>
                                    <td>{Statisticsgs["statistics"]?.freeKickShots}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total freeKickGoals</td>
                                    <td>{Statisticsgs["statistics"]?.freeKickGoals}</td>
                                </tr>
                            </Table>


                        </div>

                    )}
        </div>

    )

}

export default TeamStatistics
