from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
from .serializers import WholesaleListSerializer
from .models import Address,Wholesale
from django_filters.rest_framework import DjangoFilterBackend





class StandardResultsSetPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 1000



class WholesaleListView(ListAPIView):

    pagination_class = StandardResultsSetPagination
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['categories__name', 'platform']

  
        def get_queryset(self):
            queryset = Wholesale.objects.all()
            serializer = WholesaleListSerializer(queryset,many=True)
            return serializer
        def get(self,search,*args,**kwargs):
             queryset = Wholesale.objects.all()