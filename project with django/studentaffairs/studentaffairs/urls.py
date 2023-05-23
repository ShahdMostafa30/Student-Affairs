from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('studentaffairs_app.urls')),
    path('add_student/', include('studentaffairs_app.urls')),
    path('home/', include('studentaffairs_app.urls')),
    path('add/', include('studentaffairs_app.urls')),
    path('help/', include('studentaffairs_app.urls')),
]

