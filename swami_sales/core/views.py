from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
from .serializers import WholesaleSerializer,ItemSerializer
from .models import Address,Wholesale,Item
from rest_framework import filters
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from swami_sales.serializers import ActionSerializer
from rest_framework.permissions import IsAuthenticated



class StandardResultsSetPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 1000



def hello(request):
    return Response({"message": "hello"},200)


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
        serializer = self.get_serializer(queryset,many=True)
        page = self.paginate_queryset(serializer.data)
        return self.get_paginated_response(page)


class ItemListView(ListAPIView):
    pagination_class = StandardResultsSetPagination
    # filter_backends = [DjangoFilterBackend]
    # filterset_fields = ['name', 'description']
    filter_backends = [filters.SearchFilter]
    search_fields = ['$title', '$description']
    serializer_class = ItemSerializer

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
        serializer = self.get_serializer(queryset,many=True)
        page = self.paginate_queryset(serializer.data)
        paginated = self.get_paginated_response(page)
        context = {
            "wholesale": wholesale_serializer.data,
            "items": paginated.data
        }
        return Response(context,status=200)
    



@api_view(['post'])
@permission_classes([IsAuthenticated])
def update_status(request):
    serializer = ActionSerializer(data=request.data)
    try:
        if serializer.is_valid(raise_exception=True):
            VALID_ACTIONS = ['A','D']
            status = serializer.validated_data.get("action")
            id = serializer.validated_data.get("id")
            wholesale = Wholesale.objects.get(id=id)
            if status not in VALID_ACTIONS:
                return Response({'message' : "Not a valid action."},status=400)
            if wholesale is not None:
                wholesale.status = status
                wholesale.save()
                if status == 'A':
                    return Response({"message": 'Successfully activated.'},status=201)
                elif status == 'D':
                    return Response({"message":'Successfully deactivated.'},status=201)
            return Response({'message' : "Wholesale doesn't exists. "},status=400)
        return Response({'message' : serializer.error_messages},status=400)
    except Exception as e:
        return Response({"message": str(e)},status=500)
    

@api_view(['post'])
def update_wholesale(request):
    user = request.user
    return None

