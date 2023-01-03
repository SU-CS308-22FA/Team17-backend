from rest_framework.generics import *
from rest_framework.parsers import MultiPartParser, JSONParser
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse
from django.shortcuts import render
from base.models import Profile
from base.serializers import ProfileOwnerSerializer

class ProfileOwnerDetailApiView(RetrieveUpdateAPIView):

    queryset = Profile.objects.all()

    serializer_class = ProfileOwnerSerializer

    permission_classes = (IsAuthenticated,)

    lookup_field = "id"

    def perform_update(self, serializer):
        serializer.save(user=self.request.user)

class ListAllUsers(ListCreateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileOwnerSerializer
