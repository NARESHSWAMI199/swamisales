from rest_framework import serializers
from .models import Profile
from rest_framework.validators import UniqueValidator
from django.contrib.auth.models import User


class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField(read_only=True)
    first_name = serializers.SerializerMethodField(read_only=True)
    last_name = serializers.SerializerMethodField(read_only=True)
    followers = serializers.SerializerMethodField(read_only=True)
    following = serializers.SerializerMethodField(read_only=True)
    is_staff = serializers.SerializerMethodField(read_only=True)
    image = serializers.SerializerMethodField(read_only =True)

    class Meta:
        model = Profile
        fields = [
            'username',
            'image',
            'first_name',
            'last_name',
            'followers',
            'following',
            'bio',
            'is_staff',
        ]


    def get_image(self,obj):
        return obj.image.url

    def get_is_staff(self,obj):
        return obj.user.is_staff

    def get_username(self,obj):
        return obj.user.username

    def get_last_name(self,obj):
        return obj.user.last_name

    def get_first_name(self,obj):
        return obj.user.first_name

    def get_followers(self,obj):
        return obj.followers.count()
    
    def get_following(slef,obj):
        return obj.user.following.count()
    



class UpdateProfileSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(requried=True ,write_only=True)
    last_name = serializers.CharField(requried=True,write_only=True)
    email = serializers.EmailField(required=True, validators= [UniqueValidator(queryset = User.objects.all())])
    username = serializers.CharField(required=True, validators= [UniqueValidator(queryset = User.objects.all())])

    class Meta:
        model = Profile
        fields = [
            'username',
            'first_name',
            'last_name',
            'bio',
            'image'
        ]

    def update(self,validated_data):
        profile = Profile(
            bio = validated_data['bio'],
            image = validated_data['image']
        )
        profile.user.first_name = validated_data['first_name']
        profile.user.username = validated_data['username']
        profile.user.last_name = validated_data['lastname']
        profile.save()



    