# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-08-21 01:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='todoelements',
            name='todo_done',
            field=models.BooleanField(default=False),
        ),
    ]