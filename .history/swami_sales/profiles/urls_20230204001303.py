from django.urls import path
from .views import ProfilesView,PageNumberPagination


app_name = 'profiles'

urlpatterns = [
    path('', ProfilesView.as_view(), name="profiles_list"),
    path('<username>/', ProfileDetailView.as_view(), name='profile_detail')
  
]
