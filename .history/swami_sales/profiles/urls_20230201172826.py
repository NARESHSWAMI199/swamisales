from django.urls import path
from .views import ProfilesView, ProfileDetailView,profile_detail_view


app_name = 'profiles'

urlpatterns = [
    path('', ProfilesView.as_view(), name="profiles_list"),
    path('detail/<username>', profile_detail_view, name='profile_detail')
  
]
