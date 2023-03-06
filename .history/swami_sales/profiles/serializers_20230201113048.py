from rest_framework import serializers
from .models import Profile



class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.SerializerMethodField(read_only=True)
    first_name = serializers.SerializerMethodField(read_only=True)
    last_name = serializers.SerializerMethodField(read_only=True)
    followers = serializers.SerializerMethodField(read_only=True)
    following = serializers.SerializerMethodField(read_only=True)
    is_staf = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Profile
        fields = [
            'username',
            'first_name',
            'last_name',
            'followers',
            'following',
        ]

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