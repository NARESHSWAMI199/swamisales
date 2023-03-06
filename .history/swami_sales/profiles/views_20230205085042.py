from django.shortcuts import render
from rest_framework.response import Response
from .serializers import ProfileSerializer,UpdateProfileSerializer
from .forms import ProfileUpdateFrom
from rest_framework.decorators import api_view,permission_classes
from .models import Profile
from rest_framework import filters
from rest_framework.generics import ListAPIView,RetrieveAPIView,UpdateAPIView
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import IsAuthenticated

# Create your views here.


class StandardResultsSetPagination(PageNumberPagination):
    page_size = 100
    page_size_query_param = 'page_size'
    max_page_size = 1000


# @permission_classes([IsAuthenticated])
class ProfilesView(ListAPIView):
    pagination_class = StandardResultsSetPagination
    filter_backends = [filters.SearchFilter]
    search_fields = ['$user__username', '$user__first_name']
    serializer_class = ProfileSerializer

    def get_queryset(self):
       queryset = Profile.objects.all()
       return queryset

    def get(self,request, *args, ** kwargs):
        qs = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer( qs, context={"request": request}, many=True)
        ''' this will provide pagination so must call this for pagination'''
        page = self.paginate_queryset(serializer.data) 
        return self.get_paginated_response(page)

    
class ProfileDetailView(RetrieveAPIView):
    serializer_class = ProfileSerializer

    def get_queryset(self):
        username = self.kwargs['username']
        qs = Profile.objects.filter(user__username=username)
        return qs

    def get(self, request, *args, **kwargs):
        qs = self.get_queryset()
        if qs.exists():
            profile = qs.first()
            return Response(self.get_serializer(profile).data)
        return Response({"message": "The link you followed may be broken, or the page may have been removed"},400)




@api_view(['POST'])
@permission_classes([IsAuthenticated])
def update_profile(request):
    user = request.user
    form = ProfileUpdateFrom(request.POST or None ,request.FILES or None,instance=user.profile)
    print(request.POST)
    if form.is_valid():
        print('hello')
        obj = form.save(commit=False)
        first_name = form.cleaned_data('frist_name')
        last_name = form.cleaned_data('last_name')
        email = form.cleaned_data('email')
        username  = form.cleaned_data('username')
        user.first_name = first_name
        user.last_name  = last_name
        user.email = email
        user.username = username
        obj.user = user
        user.save()
        obj.save()
        return Response({'message': 'Profile update succesfully.'},201)
    return Response({'message':'Something went wrong'},400)
        

# @permission_classes([IsAuthenticated])
# class UpdateProfileView(UpdateAPIView):
#     serializer_class = UpdateProfileSerializer

#     def get_queryset(self):
#         user = self.request.user
#         queryset =Profile.objects.filter(user=user)
#         return queryset