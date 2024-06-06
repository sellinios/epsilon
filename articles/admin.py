from django.contrib import admin
from ckeditor.widgets import CKEditorWidget
from django.db import models
from .models import ArticlesArticle, ArticlesCategory


@admin.register(ArticlesArticle)
class ArticlesArticleAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.TextField: {'widget': CKEditorWidget()},
    }
    list_display = ('title', 'author', 'category', 'created_at', 'updated_at')
    search_fields = ('title', 'content', 'author')
    list_filter = ('category', 'created_at', 'updated_at')
    prepopulated_fields = {'slug': ('title',)}


@admin.register(ArticlesCategory)
class ArticlesCategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)
    prepopulated_fields = {'slug': ('name',)}
