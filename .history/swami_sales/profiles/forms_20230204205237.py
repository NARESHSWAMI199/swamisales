from django import forms



class ProfileUpdateFrom(forms.Form):
    first_name =forms.CharField(required=True )
    last_name = forms.CharField(required=True)
    email = forms.EmailField(required=True)
    username = forms.CharField(required=True)
    bio = forms.CharField(required=False )
    image = forms.ImageField(required=False)