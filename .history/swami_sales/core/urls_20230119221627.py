from django.urls import path
from .views import WholesaleListView,get_wholesale_detail


app_name= 'core'

urlpatterns = [
    path('', WholesaleListView.as_view(), name="wholesale_list"),
    path('address/<int:id>/',get_wholesale_detail,name='address')

]