from django.contrib.auth.models import User
from django.db import models

# Create your models here.

class Hub(models.Model):
    hub_location=models.CharField(max_length=15)
    hub_admin=models.OneToOneField(User,on_delete=models.CASCADE,related_name="hub_admin")
    hub_workers=models.ForeignKey(User,on_delete=models.CASCADE,related_name="hub_workers")
