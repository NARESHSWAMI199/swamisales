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
    path('swagger-ui/', TemplateView.as_view(
         template_name='swagger-ui.html',
         extra_context={'schema_url': 'openapi-schema'}
         ), name='swagger-ui'),
]+static(settings.MEDIA_URL,document_root= settings.MEDIA_ROOT)
