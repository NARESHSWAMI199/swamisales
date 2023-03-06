from django.urls import path
from .views import ProfilesView, ProfileDetailView


app_name = 'profiles'

urlpatterns = [
    path('', ProfilesView.as_view(), name="profiles_list"),
    path('/<username>', ProfileDetailView, name='profile_detail')
  
]
