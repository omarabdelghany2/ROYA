from django.db import models
from django.core.exceptions import ValidationError
import os
from django.conf import settings
from PIL import Image as PILImage
from io import BytesIO
from django.core.files.base import ContentFile

class Category(models.Model):
    name = models.CharField(max_length=255, blank=False, null=False, unique=True)  # Name cannot be empty
    description = models.TextField(blank=False, null=False)                        # Description cannot be empty
    image = models.ImageField(upload_to='categories/', blank=False, null=False)    # Image cannot be empty

    def __str__(self):
        return self.name  # Display the name of the category in the admin panel

    def save(self, *args, **kwargs):
        # If the instance already exists and the image is being changed
        if self.pk:
            old_instance = Category.objects.get(pk=self.pk)
            if old_instance.image != self.image:  # Check if the image is being changed
                if os.path.isfile(old_instance.image.path):
                    os.remove(old_instance.image.path)  # Delete the old image file

        # Convert the new image to WebP format
        if self.image:
            img = PILImage.open(self.image)
            img = img.convert("RGB")  # Ensure the image is in RGB mode
            output = BytesIO()
            img.save(output, format='WEBP', quality=85)  # Save image in WebP format with quality
            output.seek(0)

            # Replace the image with the converted WebP image
            self.image.save(self.image.name.split('.')[0] + '.webp', ContentFile(output.read()), save=False)

        super().save(*args, **kwargs)  # Save the model instance

    def delete(self, *args, **kwargs):
        # Delete the associated image file when the instance is deleted
        if self.image:
            if os.path.isfile(self.image.path):
                os.remove(self.image.path)
        super().delete(*args, **kwargs)




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
