from django.urls import path
from .views import ProfilesView,ProfileDetailView,update_profile,update_status


app_name = 'profiles'

urlpatterns = [
    path('', ProfilesView.as_view(), name="profiles_list"),
    path('update/',update_profile,name='update'),
    path('action/', update_status, name='status'),
    path('<username>/', ProfileDetailView.as_view(), name='profile_detail')
]
