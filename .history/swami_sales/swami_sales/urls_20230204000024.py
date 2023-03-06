from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from authentication.views import RegistrationApiView

from rest_framework import permissions
from drf_yasg.views import get_schema_view as get_swwage_schema_view
from drf_yasg import openapi


schema_view = get_swwage_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version='1.0.0',
        description="Test description",
        # terms_of_service="https://www.google.com/policies/terms/",
        # contact=openapi.Contact(email="contact@snippets.local"),
        # license=openapi.License(name="BSD License"),
    ),
    public=True,
    # permission_classes=[permissions.AllowAny],
)





urlpatterns = [
    path('admin/', admin.site.urls),
    # path('',include('core.urls'),name='core'),
    # path("profiles/",include("profiles.urls"),name="profiles"),
    # path("auth/", include("authentication.urls"), name="autenctication"),
    # path('register/', RegistrationApiView.as_view(),name='registration'),
    # path('openapi', get_schema_view(
    #     title="Your Project",
    #     description="API for all things …",
    #     version="1.0.0"
    # ), name='openapi-schema'),


    # path(r'^swagger(?P<format>\.json|\.yaml)$',
    #         schema_view.without_ui(cache_timeout=0), name='schema-json'),
    # path(r'^swagger/$', schema_view.with_ui('swagger',
    #         cache_timeout=0), name='schema-swagger-ui'),
    path("swagger/schema/", schema_view.with_ui('swagger',cache_timeout=0), name='swagger-schema'),
   
  
]+static(settings.MEDIA_URL,document_root= settings.MEDIA_ROOT)
