from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from authentication.views import RegistrationApiView
from django.views.generic import TemplateView
from rest_framework.schemas import get_schema_view

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('core.urls'),name='core'),
    path("profiles/",include("profiles.urls"),name="profiles"),
    path("auth/", include("authentication.urls"), name="autenctication"),
    path('register/', RegistrationApiView.as_view(),name='registration'),
    path('openapi/', get_schema_view(
        title="Your Project",
        description="API for all things …",
        version="1.0.0"
    ), name='openapi-schema'),
]+static(settings.MEDIA_URL,document_root= settings.MEDIA_ROOT)
