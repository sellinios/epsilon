# backend/api/serializers/prevetting.py
from rest_framework import serializers
from prevetting.models import Inspector, Client, Project, InspectionFile

class InspectorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inspector
        fields = ['id', 'name']

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ['id', 'name']

class ProjectSerializer(serializers.ModelSerializer):
    inspector = InspectorSerializer()
    client = ClientSerializer()

    class Meta:
        model = Project
        fields = ['id', 'principal', 'vessel', 'date', 'service', 'inspector', 'client']

class InspectionFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = InspectionFile
        fields = ['id', 'project', 'file_type', 'file']
