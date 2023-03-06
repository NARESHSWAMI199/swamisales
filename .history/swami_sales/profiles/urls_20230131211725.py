from django.urls import path
from .views import ProfilesView


app_name = 'core'

urlpatterns = [
    path('', ProfilesView, name="profiles_list"),
  
]
