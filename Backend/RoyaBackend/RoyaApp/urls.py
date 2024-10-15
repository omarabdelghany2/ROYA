from django.urls import path
from . import views

urlpatterns = [
    path('api/categories/', views.category_list, name='category_list'),
    path('api/contact/', views.contact_info, name='contact_info'),  # New URL pattern
    path('api/projects/<str:category_name>/', views.project_list_by_category, name='project_list_by_category'),
    path('api/project-id/<int:id>/', views.project_detail, name='project_detail'),
    path('api/project-all/', views.project_all, name='project_detail'),
    path('api/logos/', views.logos_list, name='project_detail'),
    path('api/headers/', views.category_with_projects, name='project_detail'),
    # Add other URL patterns here if needed
]
    