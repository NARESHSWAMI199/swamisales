from django.urls import path
from .views import ProfilesView,ProfileDetailView,update_profile,update_status,update_actions


app_name = 'profiles'

urlpatterns = [
    path('', ProfilesView.as_view(), name="profiles_list"),
    path('update/',update_profile,name='update'),
    path('status/', update_status, name='status'),
    path('action/',update_actions, name='action'),
    path('<username>/', ProfileDetailView.as_view(), name='profile_detail')
]
