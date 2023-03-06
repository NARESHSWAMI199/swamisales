from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from authentication.views import RegistrationApiView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('core.urls'),name='core'),
    path("profiles/",include("profiles.urls"),name="profiles"),
    path("auth/", include("authentication.urls"), name="autenctication"),
    path('register/', RegistrationApiView.as_view(),name='registration')
]+static(settings.MEDIA_URL,document_root= settings.MEDIA_ROOT)
