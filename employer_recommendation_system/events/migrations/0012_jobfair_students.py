# Generated by Django 3.2 on 2023-05-10 04:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('emp', '0064_auto_20230510_0447'),
        ('events', '0011_auto_20220609_0953'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobfair',
            name='students',
            field=models.ManyToManyField(to='emp.Student'),
        ),
    ]
