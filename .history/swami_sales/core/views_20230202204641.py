from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
from .serializers import WholesaleSerializer,ItemSerializer
from .models import Address,Wholesale,Item
from rest_framework import filters
from rest_framework.response import Response




class StandardResultsSetPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 1000



class WholesaleListView(ListAPIView):

    pagination_class = StandardResultsSetPagination
    # filter_backends = [DjangoFilterBackend]
    # filterset_fields = ['name', 'description']
    filter_backends = [filters.SearchFilter]
    search_fields = ['$name', '$description']
    serializer_class = WholesaleSerializer

    def get_queryset(self):
        queryset = Wholesale.objects.all()
        return queryset


    def get(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = WholesaleSerializer(queryset, many=True)
        page = self.paginate_queryset(serializer.data)
        return self.get_paginated_response(page)


class ItemListView(ListAPIView):
    pagination_class = StandardResultsSetPagination
    # filter_backends = [DjangoFilterBackend]
    # filterset_fields = ['name', 'description']
    filter_backends = [filters.SearchFilter]
    search_fields = ['$title', '$description']
    # serializer_class = WholesaleSerializer

    def get_queryset(self):
        slug = self.kwargs['slug']
        queryset = Item.objects.filter(wholesale__slug=slug)
        return queryset

    def get(self, request, *args, **kwargs):
        slug = self.kwargs['slug']
        wholesale = Wholesale.objects.filter(slug=slug).first()
        # if wholesale.is_exist():
        #     wholesale = wholesale.first()
        wholesale_serializer = WholesaleSerializer(wholesale)
        queryset = self.filter_queryset(self.get_queryset())
        serializer = ItemSerializer(queryset, many=True)
        page = self.paginate_queryset(serializer.data)
        paginated = self.get_paginated_response(page)
        context = {
            "wholesale": wholesale_serializer.data,
            "items": paginated.data
        }
        return Response(context,status=200)
