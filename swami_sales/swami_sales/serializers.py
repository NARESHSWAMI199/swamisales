from rest_framework import serializers



class ActionSerializer(serializers.Serializer):
    action = serializers.CharField(required = False)
    id = serializers.IntegerField()
