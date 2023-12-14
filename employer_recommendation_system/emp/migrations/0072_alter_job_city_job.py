# Generated by Django 4.2.7 on 2023-12-14 07:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    dependencies = [
        ("utilities", "0002_state_district_city"),
        ("emp", "0071_jobfilteryear_jobfilterstate_jobfiltercity"),
    ]

    operations = [
        migrations.AlterField(
            model_name="job",
            name="city_job",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="utilities.city",
            ),
        ),
    ]
