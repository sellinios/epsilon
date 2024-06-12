# backend/prevetting/urls.py
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from .views import InspectorViewSet, ClientViewSet, ProjectViewSet, InspectionFileViewSet

router = DefaultRouter()
router.register(r'inspectors', InspectorViewSet)
router.register(r'clients', ClientViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'files', InspectionFileViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
