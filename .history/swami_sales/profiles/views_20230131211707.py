from django.shortcuts import render
from rest_framework.response import Response
from .serializers import ProfileSerializer
from rest_framework.decorators import api_view
from .models import Profile
from django_filters.rest_framework import filters
from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination

# Create your views here.


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 1000




class ProfilesView(ListAPIView):
    pagination_class = StandardResultsSetPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ['$title', '$description']

    def get_queryset(self):
       queryset = Profile.objects.all()
       return queryset

    def get(self,request, *args, ** kwargs):
        qs = self.filter_queryset(self.get_queryset())
        serializer = ProfileSerializer(qs,many=True,context={"request" : request})
        return self.get_paginated_response(serializer.data)

