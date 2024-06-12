from rest_framework import serializers
from articles.models import ArticlesArticle

class ArticlesArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticlesArticle
        fields = '__all__'
