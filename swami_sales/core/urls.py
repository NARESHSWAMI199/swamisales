from django.urls import path
from .views import WholesaleListView,ItemListView


app_name= 'core'

urlpatterns = [
    path('', WholesaleListView.as_view(), name="wholesale_list"),
    path('items/<slug>/',ItemListView.as_view(),name='item_list')
]