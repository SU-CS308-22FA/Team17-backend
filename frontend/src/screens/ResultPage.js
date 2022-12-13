import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col,Button, Form } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { PostDetails } from '../actions/blogActions'
import cssClass from '../components/details.css'
import { getCategoryDetails} from '../actions/quizActions'
import { LinkContainer } from 'react-router-bootstrap'

import { Table } from 'semantic-ui-react';

import Comments from '../components/comments'

import { getMyUserDetails} from '../actions/profileActions'


function ResultPage({ match, history }) {
    const quizid = match.params.id
    const earnedpoint = match.params.point
    const qna = match.params.arr
    console.log(qna)
    const dispatch = useDispatch()

    const usermyDetails = useSelector(state => state.usermyDetails)
    const { error:eror1, loading:loading1, Myuser } = usermyDetails

    const categoryDetail = useSelector(state => state.categoryDetail)
    const { loading, error, questions } = categoryDetail


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const [message, setMessage] = useState('')

    useEffect(() => {

        if(userInfo) {
            dispatch(getCategoryDetails(quizid))
            dispatch(getMyUserDetails(`profile/${userInfo._id}`))
        }else{
            history.push('/login')
        }


    }, [dispatch,quizid,earnedpoint,qna, match])




    return (
        <div>
            <h1>Bu quizden kazandiginiz puan {earnedpoint}</h1>
            <hr />
            <h1>Toplam Puanınız {Myuser.rating}</h1>



            <Table celled striped selectable size="large">
            <Table.Header>
                <Table.Row>
                <Table.HeaderCell>No.</Table.HeaderCell>
                <Table.HeaderCell>Questions</Table.HeaderCell>
                <Table.HeaderCell>All Answers</Table.HeaderCell>
                <Table.HeaderCell>Correct Answers</Table.HeaderCell>
                <Table.HeaderCell>Your Answer</Table.HeaderCell>
                <Table.HeaderCell>Points</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {questions?.map((questionss, i) => (
                <Table.Row key={i + 1}>
                    <Table.Cell>{i + 1}</Table.Cell>
                    <Table.Cell>{questionss?.prompt}</Table.Cell>
                    <Table.Cell>
                        {questions[i].answers.map((answers,i) => (
                        <Table.Row Key={i+1}>
                            <Table.Cell>{answers?.text}</Table.Cell>
                        </Table.Row>
                        ))}
                    </Table.Cell>

                    <Table.Cell>
                        {questions[i].answers.map((answers,i) => {
                            if(answers.correct === true)
                            return(
                                <Table.Row Key={i+1}>
                                    <Table.Cell>{answers?.text}</Table.Cell>
                                </Table.Row>)
                            })}
                    </Table.Cell>

                    <Table.Cell>
                                {qna[i].user_answer}
                    </Table.Cell>

                    <Table.Cell>1</Table.Cell>
                </Table.Row>
                ))}
            </Table.Body>
            </Table>

            <hr />



        </div>

    )
}

export default ResultPage
