from django.contrib.auth.models import User
from django.db import models
from JT_Hubs import models as hub_models
# Create your models here.

class AllFinances(models.Model):
    daily_revenue=models.JSONField()
    monthly_revenue=models.JSONField()
    annual_revenue=models.JSONField()
    class Meta:
        abstract=True

class JitumeFinances(AllFinances):
    pass
class HubFinances(AllFinances):
    hub=models.OneToOneField(hub_models.Hub,on_delete=models.CASCADE)