from django.urls import path, include
from .views import RegisterApi

urlpatterns = [
      path('api/register', RegisterApi.as_view()),
]