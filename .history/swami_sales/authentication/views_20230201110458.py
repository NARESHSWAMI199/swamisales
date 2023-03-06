from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.generics import CreateAPIView
from .serializers import RegisterSerializer
from rest_framework.permissions import AllowAny
# Create your views here.




class RegistrationApiView(CreateAPIView):
    permission_classes = (AllowAny)
    serializer_class = RegisterSerializer