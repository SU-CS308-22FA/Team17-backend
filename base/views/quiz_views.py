from django.shortcuts import get_object_or_404
from django.db.models import Q
from rest_framework import generics, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from base.models import Quiz,Question,Answer
from base.serializers import QuizSerializer, QuestionSerializer, AnswerSerializer

class ListCreateQuiz(generics.ListCreateAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class RetrieveUpdateDestroyQuiz(generics.RetrieveUpdateDestroyAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer

class ListCreateQuestion(generics.ListCreateAPIView):
	queryset = Question.objects.all()
	serializer_class = QuestionSerializer

	def get_queryset(self):
		return self.queryset.filter(quiz_id=self.kwargs.get('quiz_pk'))

	def perform_create(self, serializer):
		quiz = get_object_or_404(
			Quiz,
			pk=self.kwargs.get('quiz_pk')
		)
		serializer.save(quiz=quiz)

class RetrieveUpdateDestroyQuestion(generics.RetrieveUpdateDestroyAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def get_object(self):
        return get_object_or_404(
            self.get_queryset(),
            quiz_id=self.kwargs.get('quiz_pk'),
            pk=self.kwargs.get('pk')
        )

class ListCreateAnswer(generics.ListCreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

    def get_queryset(self):
        return self.queryset.filter(
            Q(question__quiz_id=self.kwargs.get('quiz_pk')),
            Q(question_id=self.kwargs.get('question_pk'))
        )

    def perform_create(self, serializer):
        question = get_object_or_404(
            Question,
            pk=self.kwargs.get('id')
        )
        serializer.save(question=question)

class RetrieveUpdateDestroyAnswer(generics.RetrieveUpdateDestroyAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer

    def get_object(self):
        return get_object_or_404(
            self.get_queryset(),
            pk=self.kwargs.get('pk')
        )


class QuizViewSet(viewsets.ModelViewSet):
	queryset = Quiz.objects.all()
	serializer_class = QuizSerializer

	@property
	def paginator(self):
		self._paginator = super(QuizViewSet, self).paginator
		if self.action != 'questions':
			self._paginator = None
		return self._paginator

	@action(detail=True,methods=['get'])
	def questions(self, request, pk=None):
		questions = Question.objects.filter(quiz_id=pk)

		self.pagination_class.page_size = 1
		page = self.paginate_queryset(questions)
		if page is not None: # if pages appear
			serializer = QuestionSerializer(page, many=True)
			return self.get_paginated_response(serializer.data)

		serializer = QuestionSerializer(
			questions,
			many=True
		)
		return Response(serializer.data)

	@action(detail=True,methods=['get'])
	def all_questions(self, request, pk=None):
		questions = Question.objects.filter(quiz_id=pk)
		serializer = QuestionSerializer(
			questions,
			many=True
		)
		return Response(serializer.data)

class QuestionViewSet(viewsets.ModelViewSet):
	queryset = Question.objects.all()
	serializer_class = QuestionSerializer

	@action(detail=True,methods=['get'])
	def answers(self, request, pk=None):
		answers = Answer.objects.filter(question_id=pk)
		serializer = AnswerSerializer(
			answers,
			many=True,
		)
		return Response(serializer.data)

class AnswerViewSet(viewsets.ModelViewSet):
	queryset = Answer.objects.all()
	serializer_class = AnswerSerializer
