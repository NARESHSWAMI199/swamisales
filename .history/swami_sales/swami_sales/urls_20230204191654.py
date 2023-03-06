from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from authentication.views import RegistrationApiView

from rest_framework import permissions
from drf_yasg.views import get_schema_view as get_swwager_schema_view
from drf_yasg import openapi
from  core.views import hello

schema_view = get_swwager_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version='v1',
        description="Test description",
        # terms_of_service="https://www.google.com/policies/terms/",
        # contact=openapi.Contact(email="contact@snippets.local"),
        # license=openapi.License(name="BSD License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)





urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('core.urls'),name='core'),
    path("profiles/",include("profiles.urls"),name="profiles"),
    path("auth/", include("authentication.urls"), name="autenctication"),
    path('register/', RegistrationApiView.as_view(),name='registration'),
    path("swagger/schema/", schema_view.with_ui('swagger',cache_timeout=0), name='swagger-schema-ui'),
   
  
]+static(settings.MEDIA_URL,document_root= settings.MEDIA_ROOT)
