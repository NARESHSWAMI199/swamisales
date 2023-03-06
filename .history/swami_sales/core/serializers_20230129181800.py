from rest_framework import serializers
from .models import Wholesale ,Address,Message,Item




class ActionsSerializer(serializers.Serializer):
    action_id = serializers.CharField()
    action_type = serializers.CharField()

    def validate_action_id(self,value):
        if value is None or value is '':
            return 0

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
    class Meta:
        model = Wholesale
        fields = [
                'name',
                'description',
                'image',
                'address',
                'rating'
            ]


class ItemSerializer(serializers.ModelSerializer):
    wholesale = WholesaleSerializer()

    class Meta:
        model = Item
        fields = [
            'wholesale'
            'title',
            'lable',
            'price',
            'description',
            'disount',
            'image',
            'rating'

        ]
