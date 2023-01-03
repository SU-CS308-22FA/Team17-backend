from django.shortcuts import get_object_or_404
from django.db.models import Q
from rest_framework import generics, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from base.models import Player
from base.serializers import PlayerCreateSerializers

class ListCreatePlayer(generics.ListCreateAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerCreateSerializers

class RetrieveUpdateDestroyPlayer(generics.RetrieveUpdateDestroyAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerCreateSerializers
    lookup_field = 'id'
