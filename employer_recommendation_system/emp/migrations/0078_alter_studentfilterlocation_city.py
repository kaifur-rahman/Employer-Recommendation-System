# Generated by Django 3.2.19 on 2024-03-11 11:08

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('utilities', '0003_institutetype_location'),
        ('emp', '0077_auto_20240309_1023'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentfilterlocation',
            name='city',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='utilities.city'),
        ),
    ]
