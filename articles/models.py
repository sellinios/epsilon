from django.db import models
from django.utils.text import slugify


class AuthUser(models.Model):
    # This is just a placeholder to show how the relationship works
    # Usually, this should be imported from django.contrib.auth.models
    pass


class ArticlesCategory(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(unique=True, max_length=100)
    slug = models.SlugField(unique=True, max_length=255, blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'articles_category'
        verbose_name_plural = "Categories"
        managed = True


class ArticlesArticle(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.CharField(max_length=100)
    slug = models.SlugField(unique=True, max_length=255, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    date = models.DateField()
    image = models.CharField(max_length=100, blank=True, null=True)
    category = models.ForeignKey(ArticlesCategory, related_name='articles', on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)[:255]
            original_slug = self.slug
            counter = 1
            while ArticlesArticle.objects.filter(slug=self.slug).exists():
                self.slug = f"{original_slug}-{counter}"
                if len(self.slug) > 255:
                    self.slug = self.slug[:255 - len(str(counter)) - 1]
                counter += 1
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        db_table = 'articles_article'
        verbose_name_plural = "Articles"
        managed = True
