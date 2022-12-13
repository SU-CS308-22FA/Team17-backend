import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message1 from '../components/Message'
import FormContainer from '../components/FormContainer'
import { LinkContainer } from 'react-router-bootstrap'
import { getCategoryDetails} from '../actions/quizActions'
import { Table } from 'react-bootstrap'
import Answers from '../components/answers'
import getLetter from '../utils/getLetter'
import {
    Container,
    Segment,
    Item,
    Divider,
    Button,
    Icon,
    Message,
    Menu,
    Header
  } from 'semantic-ui-react';
import { getMyUserDetails,updateMyUserProfile} from '../actions/profileActions'


function QuizAttemptScreen({ match, history }) {
    const data = [];
    const answers = [];
    let point = 0;

    const catId = match.params.id
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()

    const categoryDetail = useSelector(state => state.categoryDetail)
    const { loading, error, questions } = categoryDetail

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const usermyDetails = useSelector(state => state.usermyDetails)

    const { error:eror1, loading:loading1, Myuser } = usermyDetails

    const [questionIndex, setQuestionIndex] = useState(0);
    const [totalpoint, settotalpoint] = useState(0);

    const [correctA, setcorrectA] = useState("");
    const [userSlectedAns, setUserSlectedAns] = useState(null);
    const [questionsAndAnswers, setQuestionsAndAnswers] = useState([]);


  const handleItemClick = (e, { name }) => {
    setUserSlectedAns(name);
    if(questionIndex === 0)
        questions[0].answers.map((answer) => {

            if(answer.correct === true)
                setcorrectA(answer.text)

        })

  };

  const handleNext = () => {
    setcorrectA("")
    if(questionIndex < questions?.length - 1)
        questions[questionIndex+1].answers.map((answer) => {

            if(answer.correct === true)
                setcorrectA(answer.text)

        })
    if(questionIndex === questions?.length - 1)
        questions[questionIndex].answers.map((answer) => {

            if(answer.correct === true)
                setcorrectA(answer.text)

        })

    if (userSlectedAns === correctA ) {
        point = point + 1
    }

    const qna = questionsAndAnswers;
    qna.push({
      question: questions[questionIndex].prompt,
      user_answer: userSlectedAns,
      point
    });


    settotalpoint(totalpoint+point)

    if (questionIndex === questions?.length - 1) {
        dispatch(updateMyUserProfile({
            'id': Myuser.id,
            'user':Myuser.user,
            'team': Myuser.team,
            'bio': Myuser.bio,
            'birth_date': Myuser.birth_date,
            'rating': Myuser.rating+totalpoint
        }))
        history.push(`/resultpage/${catId}/${totalpoint}/${questionsAndAnswers}`)

      }


    setQuestionIndex(questionIndex + 1);
    setUserSlectedAns(null);
    setQuestionsAndAnswers(qna);


  };





    useEffect(() => {
        if(userInfo) {
            dispatch(getCategoryDetails(catId))
            dispatch(getMyUserDetails(`profile/${userInfo._id}`))
        }else{
            history.push('/login')
        }



    }, [dispatch,catId,history])



    return (
            <Item.Header>
                <Container>
                    <Segment>
                    <Item.Group divided>
                        <Item>
                        <Item.Content>
                            <Item.Extra>
                            <Header as="h1" block floated="left">
                                <Icon name="info circle" />
                                <Header.Content>
                                {`Question No.${questionIndex + 1} of ${questions.length}`}
                                </Header.Content>
                            </Header>

                            </Item.Extra>
                            <br />
                            <Item.Meta>
                            <h3>
                                {questions[questionIndex]?.prompt ? (
                                    <b>{`Q. ${questions[questionIndex]?.prompt }`}</b>
                                ): <b>{`Q. `}</b>}

                            </h3>
                            <br />
                            <Item.Description>
                                <h4>Please choose one of the following answers:</h4>
                            </Item.Description>
                            <Divider />

                            <Menu vertical fluid size="massive">
                            {questions[questionIndex]?.answers.map((answer,i) => {
                                const letter = getLetter(i);
                                const decodedOption = answer.text;

                                return (
                                    <Menu.Item
                                    key={decodedOption}
                                    name={decodedOption}
                                    active={userSlectedAns === decodedOption}
                                    onClick={handleItemClick}
                                    >
                                    <b style={{ marginRight: '8px' }}>{letter}</b>
                                    {decodedOption}
                                    </Menu.Item>
                                );
                                })}


                            </Menu>
                            </Item.Meta>
                            <Divider />
                            <Item.Extra>
                            <Button
                                primary
                                content="Next"
                                onClick={handleNext}
                                floated="right"
                                size="big"
                                icon="right chevron"
                                labelPosition="right"
                                disabled={!userSlectedAns}
                            />
                            </Item.Extra>
                        </Item.Content>
                        </Item>
                    </Item.Group>
                    </Segment>
                    <br />
                </Container>
                </Item.Header>

                )
            }

export default QuizAttemptScreen
