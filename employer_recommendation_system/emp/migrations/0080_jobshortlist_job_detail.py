# Generated by Django 3.2.19 on 2024-03-14 08:01

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('emp', '0079_jobdetail_added_by'),
    ]

    operations = [
        migrations.AddField(
            model_name='jobshortlist',
            name='job_detail',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='emp.jobdetail'),
            preserve_default=False,
        ),
    ]
