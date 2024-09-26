from django.db import models
from django.core.exceptions import ValidationError
class Category(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False,unique=True)  # Name cannot be empty
    description = models.TextField(blank=False, null=False)           # Description cannot be empty                                 # Content is optional
    image = models.ImageField(upload_to='categories/', blank=False, null=False)  # Image cannot be empty

    def __str__(self):
        return self.name  # Display the name of the category in the admin panel



class Contact(models.Model):
    mobile_number = models.CharField(max_length=20, blank=False, null=False)
    landline = models.CharField(max_length=20, blank=True, null=False)
    instagram_account = models.CharField(max_length=255, blank=True, null=True)
    facebook_account = models.CharField(max_length=255, blank=True, null=True)
    linkedin_account = models.CharField(max_length=255, blank=True, null=True)
    twitter_account = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=254, blank=True, null=True)



    def __str__(self):
        return f'Contact info: {self.mobile_number}'

    def save(self, *args, **kwargs):
        # Ensure that only one instance of Contact can be created
        if not self.pk and Contact.objects.exists():
            raise ValidationError('Only one instance of Contact is allowed.')
        super(Contact, self).save(*args, **kwargs)



class Project(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=False, null=False)
    image = models.ImageField(upload_to='project_images/', blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='projects')
    content = models.TextField(default='.', blank=True)  # New field with default value

    def __str__(self):
        return f'{self.name} ({self.category.name})'
