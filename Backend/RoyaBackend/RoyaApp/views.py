from django.http import JsonResponse
from .models import Category
from .models import Contact
from .models import Project
from .models import Logo
from django.shortcuts import get_object_or_404

def category_list(request):
    # Get all categories from the database

    try:
        categories = Category.objects.all()

        # Serialize categories into a list of dictionaries
        categories_data = [
            {
                'id': category.id,
                'name': category.name,
                'description': category.description,
                'long_description':category.long_description,
                'image': category.image.url if category.image else None
            }
            for category in categories
        ]

        # Return JSON response
        return JsonResponse({'categories': categories_data},status=200)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category information does not exist'}, status=404)


def logos_list(request):
    # Get all categories from the database

    try:
        logos = Logo.objects.all()

        # Serialize categories into a list of dictionaries
        logos_data = [
            {
                'id': logo.id,
                'name': logo.name,
                'image': logo.image.url if logo.image else None
            }
            for logo in logos
        ]
        # Return JSON response
        return JsonResponse({'logos': logos_data},status=200)
    except Logo.DoesNotExist:
        return JsonResponse({'error': 'logo information does not exist'}, status=404)
    



def contact_info(request):
    try:
        # Retrieve all contact entries
        contacts = Contact.objects.all()

        # Serialize contact data into a list of dictionaries
        contact_data = [
            {
                'mobile_number': contact.mobile_number,
                'landline':contact.landline,
                'instagram_account': contact.instagram_account,
                'facebook_account': contact.facebook_account,
                'linkedin_account': contact.linkedin_account,
                'twitter_account': contact.twitter_account,
                'email':contact.email,

            }
            for contact in contacts
        ]

        # Return JSON response with status and HTTP status code 200 (OK)
        return JsonResponse({'contact': contact_data}, status=200)

    except Exception as e:
        # Handle any other exceptions
        return JsonResponse({'message': str(e)}, status=500)



def project_list_by_category(request, category_name):
    try:
        # Retrieve the category instance by name (case-insensitive)
        category = get_object_or_404(Category, name__iexact=category_name)

        # Retrieve all projects associated with the category
        projects = Project.objects.filter(category=category)

        # Serialize project data into a list of dictionaries
        project_data = [
            {
                'id':project.id,
                'name': project.name,
                'description': project.description,
                'image': project.image.url if project.image else None,  # Include image URL if exists
                'category_name': project.category.name,  # Include category name
                'content': project.content,
                'createdAt':project.created_at,
            }
            for project in projects
        ]

        # Return JSON response with status and HTTP status code 200 (OK)
        return JsonResponse({
            'projects': project_data
        }, status=200)

    except Category.DoesNotExist:
        return JsonResponse({
            'status': 'error',
            'message': 'Category not found.'
        }, status=404)

    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': str(e)
        }, status=500)
    

def project_detail(request, id):
    try:
        # Retrieve the project by id
        project = get_object_or_404(Project, id=id)

        # Serialize project data
        project_data = {
            'id': project.id,
            'name': project.name,
            'description': project.description,
            'image': project.image.url if project.image else None,  # Include image URL if exists
            'category_name': project.category.name,  # Include category name
            'content': project.content,
            'createdAt':project.created_at,

        }

        # Return JSON response with status and HTTP status code 200 (OK)
        return JsonResponse({
            'project': project_data
        }, status=200)

    except Exception as e:
        # Handle any other exceptions
        return JsonResponse({
            'status': 'error',
            'message': str(e)
        }, status=500)
    



def project_all(request):
    try:

        # Retrieve all projects associated with the category
        projects = Project.objects.all()

        # Serialize project data into a list of dictionaries
        project_data = [
            {
                'id':project.id,
                'name': project.name,
                'description': project.description,
                'image': project.image.url if project.image else None,  # Include image URL if exists
                'category_name': project.category.name,  # Include category name
                'content': project.content,
                'createdAt':project.created_at,
            }
            for project in projects
        ]

        # Return JSON response with status and HTTP status code 200 (OK)
        return JsonResponse({
            'projects': project_data
        }, status=200)

    except Category.DoesNotExist:
        return JsonResponse({
            'status': 'error',
            'message': 'Category not found.'
        }, status=404)

    except Exception as e:
        return JsonResponse({
            'status': 'error',
            'message': str(e)
        }, status=500)
    


def category_with_projects(request):
    try:
        # Get all categories from the database
        categories = Category.objects.all()
        # Serialize categories with their associated projects
        categories_data = [
            {
                'name': category.name,
                'projects': [
                    {
                        'id': project.id,
                        'name': project.name,
                    }
                    for project in category.projects.all()  # Accessing the related 'projects' via related_name
                ]
            }
            for category in categories
        ]
        # Return JSON response
        return JsonResponse({'categories': categories_data}, status=200)
    except Category.DoesNotExist:
        return JsonResponse({'error': 'Category information does not exist'}, status=404)        