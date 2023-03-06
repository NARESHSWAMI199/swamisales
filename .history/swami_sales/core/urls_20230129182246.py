from django.urls import path
from .views import WholesaleListView


app_name= 'core'

urlpatterns = [
    path('', WholesaleListView.as_view(), name="wholesale_list"),
    path('items',get_wholesale_detail,name='item_list')
]