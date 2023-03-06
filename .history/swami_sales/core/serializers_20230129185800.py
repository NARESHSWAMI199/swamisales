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
                'rating',
                'slug'
            ]


class ItemSerializer(serializers.ModelSerializer):
    label = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Item
        fields = [
            'title',
            'label',
            'price',
            'description',
            'discount',
            'image',
            'rating'

        ]


    def get_label(self,obj):
        return obj.label.get_label_display()