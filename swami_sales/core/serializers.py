from rest_framework import serializers
from .models import Wholesale ,Address,Message,Item




class ActionsSerializer(serializers.Serializer):
    action_id = serializers.CharField()
    action_type = serializers.CharField(required=False)

    def validate_action_id(self,value):
        print("workinggg")
        if value == None or value is '':
            return 0
        return value

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = [
            'user',
            'message',
            'created',
            'item',
        ]


class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = [
            'landmark',
            'city',
            'state',
            'zip_code'
        ]


class WholesaleSerializer(serializers.ModelSerializer):
    address= AddressSerializer(read_only=True)
    image = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Wholesale
        fields = [
                'name',
                'description',
                'image',
                'address',
                'rating',
                'slug',
                'status',
                'created'
            ]
    def get_image(self,obj):
        return obj.image.url



class WholesaleUpdateSerializer(serializers.Serializer):
    name = serializers.CharField()
    descrition = serializers.CharField(required =  False)
    image = serializers.ImageField()
    address = serializers.CharField()





class ItemSerializer(serializers.ModelSerializer):
    label = serializers.CharField(source='get_label_display', read_only=True)
    class Meta:
        model = Item
        fields = [
            'title',
            'label',
            'price',
            'description',
            'discount',
            'image',
            'rating',
            'in_stock'
        ]


    def get_image(self,obj):
        return obj.image.url
    



    

