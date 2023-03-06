from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
from .serializers import WholesaleListSerializer
from .models import Address,Wholesale





class StandardResultsSetPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 1000

class WholesaleListView(ListAPIView):


    def get(self,search,*args,**kwargs):
        queryset = Wholesale.objects.filter(name__contains=search)
        serializer_class = WholesaleListSerializer
        pagination_class = StandardResultsSetPagination
