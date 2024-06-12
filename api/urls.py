from django.urls import path
from .views import ArticlesListView, ArticleDetailView

urlpatterns = [
    path('articles/', ArticlesListView.as_view(), name='articles_list'),
    path('articles/<slug:slug>/', ArticleDetailView.as_view(), name='article_detail'),
]
