from django.urls import path
from .views import ProfilesView


app_name = 'profiles'

urlpatterns = [
    path('list/', ProfilesView, name="profiles_list"),
  
]
