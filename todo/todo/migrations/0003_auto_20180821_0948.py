# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-08-21 01:48
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('todo', '0002_todoelements_todo_done'),
    ]

    operations = [
        migrations.RenameField(
            model_name='todoelements',
            old_name='todo_done',
            new_name='done',
        ),
    ]