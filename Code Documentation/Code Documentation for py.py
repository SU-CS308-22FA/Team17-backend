#### @author Arda Göktaş
#### @version 3.11
#### @since 13.12.2022

### @Purposes It exists to send questions and answers in a certain category as an object to the front-end.
class QuizViewSet(viewsets.ModelViewSet): ### to see all the questions in a category
	queryset = Quiz.objects.all()  ##Retrieves all the quizzes in the database
	serializer_class = QuizSerializer ##

	@action(detail=True,methods=['get']) ## get method specified to get all questions
	def all_questions(self, request, pk=None): # all_question function used to retrieve questions
		questions = Question.objects.filter(quiz_id=pk) # Filtering questions by API from url
		serializer = QuestionSerializer(
			questions,
			many=True
		) # Specifies the information to be used in the retur section
		return Response(serializer.data) # Returns the used information over data


#### @author Mustafa Sergen Haysal
#### @version 3.11
#### @since 13.12.2022

### @Purposes Used to get answers to a specific question and to add a new answer.
class ListCreateAnswer(generics.ListCreateAPIView):
    queryset = Answer.objects.all()  ### initalize query with all answers in database
    serializer_class = AnswerSerializer

    def get_queryset(self): ## function that returns only answers to a particular question
        return self.queryset.filter(
            Q(question__quiz_id=self.kwargs.get('quiz_pk')), 
            Q(question_id=self.kwargs.get('question_pk'))
        ) # Return for filter

    def perform_create(self, serializer): ## function used to add an answer to a particular question
        question = get_object_or_404(
            Question,
            pk=self.kwargs.get('id')
        ) # match by id
        serializer.save(question=question)