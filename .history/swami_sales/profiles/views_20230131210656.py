from django.shortcuts import render
from rest_framework.response import Response
from .serializers import ProfileSerializer
from rest_framework.decorators import api_view
from .models import Profile

# Create your views here.



@api_view(['GET'])
def get_all_user_profile(request):
    qs = Profile.objects.all()
    serializer = ProfileSerializer(qs,many=True,context={"request" : request})
    return Response(serializer.data ,status=200)

