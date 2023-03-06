from django.shortcuts import render
from rest_framework.response import Response
from .serializers import ProfileSerializer
from rest_framework.decorators import api_view,permission_classes
from .models import Profile
from rest_framework import filters
from rest_framework.generics import ListAPIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated
from core.serializers import ActionsSerializer

# Create your views here.


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 1000


@permission_classes([IsAuthenticated])
class ProfilesView(ListAPIView):
    pagination_class = StandardResultsSetPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ['$user__username', '$user__first_name']

    def get_queryset(self):
       queryset = Profile.objects.all()
       return queryset

    def get(self,request, *args, ** kwargs):
        qs = self.filter_queryset(self.get_queryset())
        serializer = ProfileSerializer( qs, context={"request": request}, many=True)
        ''' this will provide pagination so must call this for pagination'''
        page = self.paginate_queryset(serializer.data) 
        return self.get_paginated_response(page)

@api_view(["POST"])
def profile_detail_view(request):
    serializer = ActionsSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        profile_id = serializer.validated_data['action_id']
        qs = Profile.objects.filter(id=profile_id)
        profile_serializer = ProfileSerializer(qs)
        return Response(profile_serializer.data)
    return Response({"message", "something went wrong"},status=400)

    


