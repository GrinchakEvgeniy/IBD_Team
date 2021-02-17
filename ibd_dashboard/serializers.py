from .models import *
from rest_framework import serializers


class AirwaybillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Airwaybill
        fields = '__all__'

class OfTubesSerializer(serializers.ModelSerializer):
    class Meta:
        model = OfTubes
        fields = '__all__'


class SampleTypeFirstSerializer(serializers.ModelSerializer):
    class Meta:
        model = SampleTypeFirst
        fields = '__all__'


class SampleTypeSecondSerializer(serializers.ModelSerializer):
    class Meta:
        model = SampleTypeSecond
        fields = '__all__'

class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = '__all__'


class VisitSerializer(serializers.ModelSerializer):
    class Meta:
        model = Visit
        fields = '__all__'



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