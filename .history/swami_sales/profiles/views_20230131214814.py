from django.shortcuts import render
from rest_framework.response import Response
from .serializers import ProfileSerializer
from rest_framework.decorators import api_view
from .models import Profile
from rest_framework import filters
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
    search_fields = ['$user__username', '$user__first_name']

    def get_queryset(self):
       queryset = Profile.objects.all()
       return queryset

    def get(self,request, *args, ** kwargs):
        qs = self.filter_queryset(self.get_queryset())
        serializer = ProfileSerializer( qs, context={"request": request}, many=True)
        ''' this will provide pagination so must call these for pagination'''
        page = self.paginate_queryset(serializer.data) 
        return self.get_paginated_response(page)

