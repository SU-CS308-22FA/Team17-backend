from django.shortcuts import get_object_or_404
from django.db.models import Q
from rest_framework import generics, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from base.models import Prize
from base.serializers import PrizeCreateSerializers

class ListCreatePrize(generics.ListCreateAPIView):
    queryset = Prize.objects.all()
    serializer_class = PrizeCreateSerializers

class RetrieveUpdateDestroyPrize(generics.RetrieveUpdateDestroyAPIView):
    queryset = Prize.objects.all()
    serializer_class = PrizeCreateSerializers
    lookup_field = 'id'
