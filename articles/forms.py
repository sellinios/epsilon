from django import forms
from tinymce.widgets import TinyMCE
from .models import ArticlesArticle

class ArticlesArticleForm(forms.ModelForm):
    content = forms.CharField(widget=TinyMCE(attrs={'cols': 80, 'rows': 30}))

    class Meta:
        model = ArticlesArticle
        fields = '__all__'