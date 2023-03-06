from rest_framework import serializers
from .models import Profile



class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField()
    first_name = serializers.SerializerMethodField()
    last_name = serializers.SerializerMethodField()
    followers = serializers.SerializerMethodField()
    following = serializers.SerializerMethodField()
    is_staff = serializers.SerializerMethodField()
    image = serializers.SerializerMethodField()

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