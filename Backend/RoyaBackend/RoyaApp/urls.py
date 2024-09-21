from django.urls import path
from . import views

urlpatterns = [
    path('categories/', views.category_list, name='category_list'),
    path('contact/', views.contact_info, name='contact_info'),  # New URL pattern
    path('projects/<str:category_name>/', views.project_list_by_category, name='project_list_by_category'),
    path('project-id/<int:id>/', views.project_detail, name='project_detail'),
    # Add other URL patterns here if needed
]
    