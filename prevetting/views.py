# backend/prevetting/views.py
from rest_framework import viewsets
from prevetting.models import Inspector, Client, Project, InspectionFile
from api.serializers.prevetting import InspectorSerializer, ClientSerializer, ProjectSerializer, InspectionFileSerializer

class InspectorViewSet(viewsets.ModelViewSet):
    queryset = Inspector.objects.all()
    serializer_class = InspectorSerializer

class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class InspectionFileViewSet(viewsets.ModelViewSet):
    queryset = InspectionFile.objects.all()
    serializer_class = InspectionFileSerializer
