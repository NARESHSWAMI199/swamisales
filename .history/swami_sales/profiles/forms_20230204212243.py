from django import forms
from .models import Profile
from django.contrib.auth.models import User 


class ProfileUpdateFrom(forms.ModelForm):
    first_name =forms.CharField(required=True )
    last_name = forms.CharField(required=True)
    email = forms.EmailField(required=True)
    username = forms.CharField(required=True)

    class Meta:
        model = Profile
        fields = [
            'bio','image','location'
        ]




    def validate_email(self,value):
        user = User.objects.filter(email=value)
        if user.exists():
           return forms.ValidationError("Email already exists.")
        return value


    def validate_username(self,value):
        user = User.objects.filter(username=value)
        if user.exists():
           return forms.ValidationError("Username already exists.")
        return value
    

