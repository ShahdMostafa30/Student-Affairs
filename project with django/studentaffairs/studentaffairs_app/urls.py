
from django.contrib import admin
from django.urls import path, include
from studentaffairs_app import views

urlpatterns = [
    # i need when we go to the main page to go to the index function in views.py
    path('', views.index),
    # i need when the user click on the add button to go to the add_student function in views.py
    path('add_student/', views.add_student),
    # i need when the user click on the home button to go to the home function in views.py
    path('home/', views.home),
    path('add/', views.add),
    path('help/', views.Help),
    path('get-students/', views.get_students, name='get_students'),
    path('update_student/', views.update_student, name='update_student'),
    path('delete_student/', views.delete_student, name='delete_student'),
]
