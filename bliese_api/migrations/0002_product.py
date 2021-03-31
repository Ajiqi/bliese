# Generated by Django 2.2 on 2021-03-31 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bliese_api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item_name', models.CharField(default='', max_length=255, unique=True)),
                ('price', models.IntegerField(default=0)),
                ('quantity', models.IntegerField(default=0)),
            ],
        ),
    ]