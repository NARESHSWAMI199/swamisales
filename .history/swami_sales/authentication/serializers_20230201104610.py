from rest_framework import serializers
from django.contrib.auth.models import User




class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'first_name',
            'last_name',
            'email',
            'password',
            'password2'
        ]

