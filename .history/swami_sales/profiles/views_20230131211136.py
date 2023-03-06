from django.shortcuts import render
from rest_framework.response import Response
from .serializers import ProfileSerializer
from rest_framework.decorators import api_view
from .models import Profile
from django_filters.rest_framework import filters
from rest_framework.generics import ListAPIView

# Create your views here.




class ProfilesView(ListAPIView):

    filter_backends = [filters.SearchFilter]
    search_fields = ['$title', '$description']

    def get_queryset(self):
       queryset = Profile.objects.all()
       return queryset

    def get(self,request, *args, ** kwargs):
        qs = Profile.objects.all()
        serializer = ProfileSerializer(qs,many=True,context={"request" : request})
        return Response(serializer.data ,status=200)

