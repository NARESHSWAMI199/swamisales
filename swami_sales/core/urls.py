from django.urls import path
from .views import ItemListView,WholesaleListView,update_status,dashboard


app_name= 'core'

urlpatterns = [
    path('',dashboard,name='dashboard'),
    path('wholesale/', WholesaleListView.as_view(), name="wholesale_list"),
    path('wholesale/items/<slug>/',ItemListView.as_view(),name='item_list'),
    path('wholesale/status/',update_status,name='status'),

]