# Generated by Django 3.2.19 on 2023-11-09 06:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('moodle', '0003_auto_20231102_1354'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='mdlquizgrades',
            options={'managed': False},
        ),
        migrations.AlterModelOptions(
            name='mdluser',
            options={'managed': False},
        ),
    ]