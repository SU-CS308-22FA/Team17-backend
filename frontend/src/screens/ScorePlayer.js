import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Table,Dropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { PLAYER_UPDATE_RESET } from '../constants/playerConstants'
import { getMyUserDetails} from '../actions/profileActions'
import { listPlayers,updatePlayer} from '../actions/playerActions'

function ScorePlayer({ history }) {

    const scorearr =[1,2,3,4,5,6,7,8,9,10]

    const [score, setScore] = useState('')
    const [playerid, setPlayerId] = useState('')
    const [playercurrentscore, setCurrentScore] = useState('')
    const [playerteam, setPlayerTeam] = useState('')
    const [selectedPlayer, setSelectedPlayer] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const usermyDetails = useSelector(state => state.usermyDetails)
    const { error, loading, Myuser } = usermyDetails

    const playeralllist = useSelector(state => state.playeralllist)
    const { loading:loading1, error:error1, playerAll } = playeralllist

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const platerupdatereducer = useSelector(state => state.platerupdatereducer)
    const {success: successUpdate  } = platerupdatereducer



    useEffect(() => {
        if (userInfo) {
            dispatch(listPlayers())
            dispatch(getMyUserDetails(`profile/${userInfo._id}`))
        } else {
            history.push('/login')
        }
        if(successUpdate)
            {
                setScore('')
                setPlayerId('')
                setPlayerTeam('')
                setSelectedPlayer('')
                setCurrentScore('')
                dispatch({ type: PLAYER_UPDATE_RESET })

            }

    }, [dispatch, history, userInfo, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updatePlayer({
            'id': playerid,
            'team_player':playerteam,
            'score':playercurrentscore+score,
            'player':selectedPlayer,
        }))
        setMessage('')


    }

    const handler = (player) => {
        setSelectedPlayer(player?.player)
        setPlayerId(player?.id)
        setPlayerTeam(player?.team_player)
        setCurrentScore(player?.score)

      }

    return (
        <Row>
            <Col md={20}>
                <h2>{Myuser.team} Player's Scoring System</h2>

                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {loading && <Loader />}


                <Form onSubmit={submitHandler}>

                    <Form.Group controlId='team'>
                        <Dropdown variant="dark">
                            <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
                                {selectedPlayer?selectedPlayer:"Select a player"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark">
                            {playerAll?.map(player => (
                                Myuser.team === player.team_player ?(<Dropdown.Item onSelect={()=>handler(player)}>{player?.player}</Dropdown.Item>):null

                            ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>

                    <Form.Group controlId='team'>
                        <Dropdown variant="dark">
                            <Dropdown.Toggle id="dropdown-button-dark-example2" variant="dark">
                                {score?score:"Select a score"}
                            </Dropdown.Toggle>
                            <Dropdown.Menu variant="dark">
                            {scorearr?.map(scores => (
                                <Dropdown.Item onSelect={()=>setScore(scores)}>{scores}</Dropdown.Item>
                            ))}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form.Group>

                    <Button type='submit' variant='primary'>
                        Update
                </Button>

                </Form>
            </Col>
        </Row>
    )
}

export default ScorePlayer
