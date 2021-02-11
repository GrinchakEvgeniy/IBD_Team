from .models import *
from rest_framework import serializers


class AmamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Amam
        fields = '__all__'


class ProtocolImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProtocolImages
        fields = '__all__'

class ProtocolSerializer(serializers.ModelSerializer):
    protocol_image = ProtocolImageSerializer(many=True, read_only=True)
    class Meta:
        model = Protocol
        fields = '__all__'