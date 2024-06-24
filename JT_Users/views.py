import json
from datetime import date
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.shortcuts import render,redirect
from JT_Users.models import WorkCategory
# Create your views here.


@login_required
def createWorkProfile(request):
    if request.method=="POST":
        today=date.today().strftime("%Y-%m-%d")
        data=request.POST
        experience=data["experience"]
        category_data=json.loads(data["c-values"])
        instance=WorkCategory()
        instance.experience_level=experience
        instance.work_category=category_data
        instance.payments={"date":today,"amount_paid":0}
        instance.worker=request.user
        instance.save()
        messages.add_message(request,messages.SUCCESS,"Work information has been saved successfully.")
        return redirect("homepage")
    
    return render(request,"JT_Users/create_work_profile.html")