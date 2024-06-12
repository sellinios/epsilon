# backend/urls.py
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from articles.views import upload_image

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('prevetting.urls')),
    path('ckeditor/', include('ckeditor_uploader.urls')),
    path('upload/', upload_image, name='upload_image'),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
