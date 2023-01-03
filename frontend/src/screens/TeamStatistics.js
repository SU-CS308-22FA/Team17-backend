import { useState, useEffect, React } from 'react'
import { Form,Col, Button , Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getMyUserDetails} from '../actions/profileActions'

import { Gsstatisticsall } from '../actions/galatasarayActions'
import { Fbstatisticsall } from '../actions/fenerbahceActions'


function TeamStatistics({ history }) {

    const dispatch = useDispatch()

    const statisticsgslist = useSelector(state => state.statisticsgslist)
    const { loading, error, Statisticsgs } = statisticsgslist

    const statisticsfblist = useSelector(state => state.statisticsfblist)
    const { loading:loading2, error:error2, Statisticsfb } = statisticsfblist


    const usermyDetails = useSelector(state => state.usermyDetails)
    const { error:error1, loading:loading1, Myuser } = usermyDetails


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    useEffect(() => {
        if (userInfo) {
            dispatch(Gsstatisticsall())
            dispatch(Fbstatisticsall())
            dispatch(getMyUserDetails(`profile/${userInfo._id}`))

        } else {
            history.push('/login')
        }

    }, [dispatch, history, userInfo])



    return (
        <div>
            {loading1 && loading && loading2
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (
                            <div>
                            {(() => {
                            if (Myuser?.team === "galatasaray") {
                                return (
                                <div>
                                <h1>Team Statistics for {Myuser?.team}</h1>
                                <Table striped bordered hover size="sm">
                                <tr>
                                    <th>Statistics</th>
                                    <th>Number</th>
                                </tr>
                                <tr>
                                    <td>Galatasaray total assists</td>
                                    <td>{Statisticsgs?.statistics?.assists}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total goal</td>
                                    <td>{Statisticsgs?.statistics?.goalsScored}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total successfulDribbles</td>
                                    <td>{Statisticsgs?.statistics?.successfulDribbles}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total yellowCardsAgainst</td>
                                    <td>{Statisticsgs?.statistics?.yellowCardsAgainst}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total redCards</td>
                                    <td>{Statisticsgs?.statistics?.redCards}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total yellowCards</td>
                                    <td>{Statisticsgs?.statistics?.yellowCards}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total PassesAgainst</td>
                                    <td>{Statisticsgs?.statistics?.totalPassesAgainst}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total shotsFromOutsideTheBoxAgainst</td>
                                    <td>{Statisticsgs?.statistics?.shotsFromOutsideTheBoxAgainst}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total FinalThirdPassesAgainst</td>
                                    <td>{Statisticsgs?.statistics?.totalFinalThirdPassesAgainst}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total shotsOnTarget</td>
                                    <td>{Statisticsgs?.statistics?.shotsOnTarget}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total corners</td>
                                    <td>{Statisticsgs?.statistics?.corners}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total freeKickShots</td>
                                    <td>{Statisticsgs?.statistics?.freeKickShots}</td>
                                </tr>
                                <tr>
                                    <td>Galatasaray total freeKickGoals</td>
                                    <td>{Statisticsgs?.statistics?.freeKickGoals}</td>
                                </tr>
                                </Table>

                                </div>
                                )
                            } else if (Myuser?.team === "fenerbahce") {
                                return (
                                <div>
                                        <h1>Team Statistics for {Myuser?.team}</h1>
                                        <Table striped bordered hover size="sm">
                                        <tr>
                                            <th>Statistics</th>
                                            <th>Number</th>
                                        </tr>
                                        <tr>
                                            <td>fenerbahce total assists</td>
                                            <td>{Statisticsfb?.statistics?.assists}</td>
                                        </tr>
                                        <tr>
                                            <td>fenerbahce total goal</td>
                                            <td>{Statisticsfb?.statistics?.goalsScored}</td>
                                        </tr>
                                        <tr>
                                            <td>fenerbahce total successfulDribbles</td>
                                            <td>{Statisticsfb?.statistics?.successfulDribbles}</td>
                                        </tr>
                                        <tr>
                                            <td>fenerbahce total yellowCardsAgainst</td>
                                            <td>{Statisticsfb?.statistics?.yellowCardsAgainst}</td>
                                        </tr>
                                        <tr>
                                            <td>fenerbahce total redCards</td>
                                            <td>{Statisticsfb?.statistics?.redCards}</td>
                                        </tr>
                                        <tr>
                                            <td>fenerbahce total yellowCards</td>
                                            <td>{Statisticsfb?.statistics?.yellowCards}</td>
                                        </tr>
                                        <tr>
                                            <td>fenerbahce total PassesAgainst</td>
                                            <td>{Statisticsfb?.statistics?.totalPassesAgainst}</td>
                                        </tr>
                                        <tr>
                                            <td>fenerbahce total shotsFromOutsideTheBoxAgainst</td>
                                            <td>{Statisticsfb?.statistics?.shotsFromOutsideTheBoxAgainst}</td>
                                        </tr>
                                        <tr>
                                            <td>fenerbahce total FinalThirdPassesAgainst</td>
                                            <td>{Statisticsfb?.statistics?.totalFinalThirdPassesAgainst}</td>
                                        </tr>
                                        <tr>
                                            <td>fenerbahce total shotsOnTarget</td>
                                            <td>{Statisticsfb?.statistics?.shotsOnTarget}</td>
                                        </tr>
                                        <tr>
                                            <td>fenerbahce total corners</td>
                                            <td>{Statisticsfb?.statistics?.corners}</td>
                                        </tr>
                                        <tr>
                                            <td>fenerbahce total freeKickShots</td>
                                            <td>{Statisticsfb?.statistics?.freeKickShots}</td>
                                        </tr>
                                        <tr>
                                            <td>fenerbahce total freeKickGoals</td>
                                            <td>{Statisticsfb?.statistics?.freeKickGoals}</td>
                                        </tr>
                                    </Table>
                                </div>
                                )
                            }else {
                                return (
                                  <div>catch all</div>
                                )
                              }
                            })()}
                        </div>
                    )}
        </div>

    )

}

export default TeamStatistics
