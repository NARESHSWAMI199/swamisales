from django import forms
from django.contrib.auth.models import User 


class ProfileUpdateFrom(forms.Form):
    first_name =forms.CharField(required=True )
    last_name = forms.CharField(required=True)
    email = forms.EmailField(required=True)
    username = forms.CharField(required=True)
    bio = forms.CharField(required=False )
    image = forms.ImageField(required=False)


    def validate_email(self,value):
        user = User.objects.filter(email=value)
        if user.exists():
           return forms.ValidationError("Email already exists..")

    

