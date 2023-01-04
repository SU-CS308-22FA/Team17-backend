import { useState, useEffect ,React } from 'react'
import { Form,Col, Button , Table} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { getMyUserDetails} from '../actions/profileActions'

import { GsRatingsAll } from '../actions/galatasarayActions'
import { FbRatingsAll } from '../actions/fenerbahceActions'


function PlayerRatings({ history }) {

    const dispatch = useDispatch()

    const ratingsgslist = useSelector(state => state.ratingsgslist)
    const { loading, error, Ratingsgs } = ratingsgslist

    const ratingsfblist = useSelector(state => state.ratingsfblist)
    const { loading:loading2, error:error2, Ratingsfb } = ratingsfblist

    const usermyDetails = useSelector(state => state.usermyDetails)
    const { error:error1, loading:loading1, Myuser } = usermyDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    useEffect(() => {
        if (userInfo) {
            dispatch(getMyUserDetails(`profile/${userInfo._id}`))
            dispatch(GsRatingsAll())
            dispatch(FbRatingsAll())

        } else {
            history.push('/login')
        }

    }, [dispatch, history, userInfo])

    const ratinggs = Ratingsgs

    return (
        <div>
            {loading2 && loading1 && loading
                ? (<Loader />)
                : error
                    ? (<Message variant='danger'>{error}</Message>)
                    : (

                        <div>
                            {(() => {
                            if (Myuser?.team === "galatasaray") {
                                return (
                                <div>
                                    <h1>Overall Player Ratings for {Myuser?.team}</h1>
                                    <Table striped bordered hover responsive className='table-sm' id= 'table2'>
                                    <thead>
                                        <tr>
                                            <th>Rating</th>
                                            <th>Player Name</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {Ratingsgs?.topPlayers?.rating.map((item,index) => (
                                            <tr key={index}>
                                                <td>{item["statistics"]?.rating}</td>
                                                <td>{item["player"]?.name}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    </Table>
                                </div>
                                )
                            } else if (Myuser?.team === "fenerbahce") {
                                return (
                                <div>
                                    <h1>Overall Player Ratings for {Myuser?.team}</h1>
                                    <Table striped bordered hover responsive className='table-sm' id= 'table2'>
                                    <thead>
                                        <tr>
                                            <th>Rating</th>
                                            <th>Player Name</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {Ratingsfb?.topPlayers?.rating && Ratingsfb["topPlayers"]?.rating.map(item => (
                                            <tr key={item}>
                                                <td>{item["statistics"]?.rating}</td>
                                                <td>{item["player"]?.name}</td>
                                            </tr>
                                        ))}
                                    </tbody>
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

export default PlayerRatings
