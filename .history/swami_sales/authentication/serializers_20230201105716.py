from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework import status
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password



class RegisterSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=True, validators= [UniqueValidator(queryset = User.objects.all())])
    password = serializers.CharField(required=True, validators=[validate_password])
    password2 = serializers.CharField(required=True,write_only=True)
    class Meta:
        model = User
        fields = [
            'username',
            'first_name',
            'last_name',
            'email',
            'password',
            'password2'
        ]

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
            {"password": "Password fields didn't match."})
        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username = 
        )