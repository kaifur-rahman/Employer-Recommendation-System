# Generated by Django 3.2.19 on 2023-11-09 06:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('spoken', '0004_auto_20231102_1354'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='language',
            table='creation_language',
        ),
        migrations.AlterModelTable(
            name='participant',
            table='training_participant',
        ),
    ]
