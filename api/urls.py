from django.urls import path, include
from rest_framework.routers import DefaultRouter
from prevetting.views import InspectorViewSet, ClientViewSet, ProjectViewSet, InspectionFileViewSet
from api.views import ArticlesListView, ArticleDetailView

router = DefaultRouter()
router.register(r'inspectors', InspectorViewSet)
router.register(r'clients', ClientViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'files', InspectionFileViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('articles/', ArticlesListView.as_view(), name='articles-list'),
    path('articles/<slug:slug>/', ArticleDetailView.as_view(), name='article-detail'),
]
