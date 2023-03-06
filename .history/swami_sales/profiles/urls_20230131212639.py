from django.urls import path
from .views import ProfilesView


app_name = 'profiles'

urlpatterns = [
    path('', ProfilesView.as_view(), name="profiles_list"),
  
]
