from django import forms



class ProfileUpdateFrom(forms.Form):
    first_name =forms.CharField(required=True )
    last_name = forms.CharField(required=True)
    email = forms.EmailField(required=True, validators= [UniqueValidator(queryset = User.objects.all())])
    username = forms.CharField(required=True, validators= [UniqueValidator(queryset = User.objects.all())])
    bio = forms.CharField(required=False )