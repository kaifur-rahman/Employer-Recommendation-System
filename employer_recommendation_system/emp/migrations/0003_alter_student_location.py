# Generated by Django 3.2 on 2021-05-04 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('emp', '0002_auto_20210504_1820'),
    ]

    operations = [
        migrations.AlterField(
            model_name='student',
            name='location',
            field=models.CharField(blank=True, max_length=400, null=True),
        ),
    ]
