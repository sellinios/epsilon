from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from articles.models import ArticlesArticle
from api.serializers.serializers import ArticlesArticleSerializer

class ArticlesListView(APIView):
    def get(self, request):
        articles = ArticlesArticle.objects.all()
        serializer = ArticlesArticleSerializer(articles, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class ArticleDetailView(APIView):
    def get(self, request, slug):
        try:
            article = ArticlesArticle.objects.get(slug=slug)
            serializer = ArticlesArticleSerializer(article)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except ArticlesArticle.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
