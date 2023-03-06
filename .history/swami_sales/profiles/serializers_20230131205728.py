from rest_framework import serializers
from .models import Profile



class ProfileSerializer(serializers.ModelField):
    username = serializers.SerializerMethodField(read_only=True)
    first_name = serializers.SerializerMethodField(read_only=True)
    last_name = serializers.SerializerMethodField(read_only=True)
    followers = serializers.SerializerMethodField(read_only=True)
    following = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Profile
        fields = {
            'username',
            'first_name',
            'last_name',
            'followers',
            'following',
        }

    def get_last_name(self,obj):
        return obj.user.lastname

    def get_first_name(self,obj):
        return obj.user.fristname

    def get_followers(self,obj):
        return obj.followers.count()
    
    def get_following(slef,obj):
        return obj.user.following.count()