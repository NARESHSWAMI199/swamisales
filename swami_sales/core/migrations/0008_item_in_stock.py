# Generated by Django 4.1.6 on 2023-03-06 10:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_message_is_deleted_alter_item_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='item',
            name='in_stock',
            field=models.CharField(choices=[('N', 'Not in stock'), ('Y', 'In stock')], default='Y', max_length=1),
            preserve_default=False,
        ),
    ]
