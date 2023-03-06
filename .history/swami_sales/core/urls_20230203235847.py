from django.urls import path
from .views import hello


app_name= 'core'

urlpatterns = [
    path('', hello, name="wholesale_list"),
    # path('items/<slug>/',ItemListView.as_view(),name='item_list')
]