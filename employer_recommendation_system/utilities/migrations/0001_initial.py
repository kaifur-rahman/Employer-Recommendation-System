# Generated by Django 3.2.19 on 2023-11-02 13:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='FossCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('foss', models.CharField(max_length=255, unique=True)),
                ('description', models.TextField()),
                ('status', models.BooleanField(max_length=2)),
                ('is_learners_allowed', models.BooleanField(default=0, max_length=2)),
                ('created', models.DateTimeField(auto_now_add=True)),
                ('updated', models.DateTimeField(auto_now=True)),
                ('show_on_homepage', models.PositiveSmallIntegerField(default=0, help_text='0:Series, 1:Display on home page, 2:Archived')),
            ],
            options={
                'verbose_name': 'FOSS',
                'verbose_name_plural': 'FOSSes',
                'ordering': ('foss',),
            },
        ),
    ]
