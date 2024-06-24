from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class WorkCategory(models.Model):
    work_category=models.JSONField()
    payments=models.JSONField()
    savings=models.IntegerField(default=0)
    hub_deductions=models.IntegerField(default=0)
    experience_level=models.CharField(max_length=12)
    worker=models.OneToOneField(User,on_delete=models.CASCADE,related_name="user_work_category")


class WorkHistory(models.Model):
    completed_jobs=models.JSONField()
    bidded_jobs=models.JSONField()
    pending_jobs=models.JSONField()
    rejected_jobs=models.JSONField()


