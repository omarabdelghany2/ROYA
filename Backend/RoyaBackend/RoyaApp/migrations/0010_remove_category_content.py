# Generated by Django 4.2.16 on 2024-09-25 17:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('RoyaApp', '0009_contact_email_contact_landline_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='content',
        ),
    ]
