from django.urls import path
from .views import ProfilesView,ProfileDetailView


app_name = 'profiles'

urlpatterns = [
    path('', ProfilesView.as_view(), name="profiles_list"),
    # path('update/',UpdateProfileView.as_view(),name='update'),
    path('<username>/', ProfileDetailView.as_view(), name='profile_detail'),

]
