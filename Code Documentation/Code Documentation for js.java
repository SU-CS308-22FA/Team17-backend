// #### @author Arda Göktaş
// #### @version 3.11
// #### @since 13.12.2022


/// @Purpose It shows the quiz questions to the user page by page and provides a transition to other questions.
  const handleNext = () => {
    setcorrectA("")
    if(questionIndex < questions?.length - 1)
        questions[questionIndex+1].answers.map((answer) => {

            if(answer.correct === true)
                setcorrectA(answer.text)

        }) ///It is used to determine the correct answer of the quiz in the database.

    if(questionIndex === questions?.length - 1)
        questions[questionIndex].answers.map((answer) => {

            if(answer.correct === true)
                setcorrectA(answer.text)

        }) ///It is used to determine the correct answer of the quiz in the database.

    if (userSlectedAns === correctA ) {
        point = point + 1
    } ///It adds points or not by comparing the user's chosen answer and the real answer.

    const qna = questionsAndAnswers;
    qna.push({
      question: questions[questionIndex].prompt,
      user_answer: userSlectedAns,
      point
    }); // array that holds users' answers and scores


    settotalpoint(totalpoint+point) /// calculate settotalpoint

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

      } /// When the last question in the quiz is passed, it adds the score gained by the user from the quiz to the overall score and directs it to the result page.


    setQuestionIndex(questionIndex + 1); // determine which questin shows
    setUserSlectedAns(null); // selected answer became default
    setQuestionsAndAnswers(qna);


  };


// #### @author Mustafa Sergen Haysal
// #### @version 3.11
// #### @since 13.12.2022


/// @Purpose The function that sends a post request to the backend when a new category is created
export const createCategory = (author,title) => async (dispatch, getState) => {
    try {
        dispatch({
            type: CATEGORY_CREATE_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState() // Retrieves User Login and User Info information To be able to use tokens

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        } // It provides the authentication part

        const { data } = await axios.post(
            `/api/v2/quizzes/`,
            {'author':author,'title':title},
            config
        ) // The database is making a request with certain parameters
        dispatch({
            type: CATEGORY_CREATE_SUCCESS,
            payload: data,
        }) //Allows the use of returned data


    } catch (error) {
        dispatch({
            type: CATEGORY_CREATE_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    } //If an error is received, an error message is returned from the backend
}


// #### @author Melike Sena Özgen
// #### @version 3.11
// #### @since 14.12.2022

