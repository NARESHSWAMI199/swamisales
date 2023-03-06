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
    filterset_fields = ['name', 'description']

    def get_queryset(self):
        queryset = Wholesale.objects.all()
        serializer = WholesaleListSerializer
        return serializer


    def get(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = WholesaleListSerializer(queryset, many=True)
        page = self.paginate_queryset(serializer.data)
        return self.get_paginated_response(page)
