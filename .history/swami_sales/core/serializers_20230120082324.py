from rest_framework import serializers
from .models import Wholesale ,Address




class ActionsSerializer(serializers.Serializer):
    action_id = serializers.CharField()
    action_type = serializers.CharField()

    def validate_action_id(self,value):
        if value is None or value is '':
            return 0





class WholesaleListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Wholesale
        fields = [
            'name',
                'description',
                'image'
                  ]


class AddressSerializer(serializers.ModelSerializer):
    wholesale_obj = WholesaleListSerializer(source='wholesale',read_only=True)
    class Meta:
        model = Address
        fields = [
            'wholesale_obj',
            'city',
            'state',
            'zip_code'
        ]
