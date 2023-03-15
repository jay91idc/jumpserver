# Generated by Django 2.2.7 on 2019-12-17 09:58

import common.db.fields
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('ops', '0009_auto_20191217_1713'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='adhoc',
            name='_hosts',
        ),
        migrations.AlterField(
            model_name='adhoc',
            name='_become',
            field=common.db.fields.EncryptJsonDictCharField(blank=True, null=True, default='', max_length=1024, verbose_name='Become'),
        ),
        migrations.AlterField(
            model_name='adhoc',
            name='_options',
            field=common.db.fields.JsonDictCharField(default='', max_length=1024, verbose_name='Options'),
        ),
        migrations.AlterField(
            model_name='adhoc',
            name='_tasks',
            field=common.db.fields.JsonListTextField(verbose_name='Tasks'),
        ),
        migrations.RenameField(
            model_name='adhoc',
            old_name='_become',
            new_name='become',
        ),
        migrations.RenameField(
            model_name='adhoc',
            old_name='_options',
            new_name='options',
        ),
        migrations.RenameField(
            model_name='adhoc',
            old_name='_tasks',
            new_name='tasks',
        ),
        migrations.AlterField(
            model_name='adhocrunhistory',
            name='_result',
            field=common.db.fields.JsonDictTextField(blank=True, null=True, verbose_name='Adhoc raw result'),
        ),
        migrations.AlterField(
            model_name='adhocrunhistory',
            name='_summary',
            field=common.db.fields.JsonDictTextField(blank=True, null=True, verbose_name='Adhoc result summary'),
        ),
        migrations.RenameField(
            model_name='adhocrunhistory',
            old_name='_result',
            new_name='result',
        ),
        migrations.RenameField(
            model_name='adhocrunhistory',
            old_name='_summary',
            new_name='summary',
        ),
    ]
