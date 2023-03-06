from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Profile

# Create your views here.



@api_view(['GET'])
def get_all_user_profile(request):
    profiles = Profile.objects.all()

