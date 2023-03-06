# Generated by Django 4.1.6 on 2023-03-06 11:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0008_item_in_stock'),
    ]

    operations = [
        migrations.AddField(
            model_name='wholesale',
            name='created',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='wholesale',
            name='status',
            field=models.CharField(choices=[('A', 'Active'), ('D', 'Deactivate')], default='A', max_length=1),
        ),
    ]