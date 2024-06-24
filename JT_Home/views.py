from django.shortcuts import render,redirect
from JT_Users.models import WorkCategory
# Create your views here.

def homePage(request):
    context={}
    if request.user.is_authenticated:
        user=request.user
        try:
            category=WorkCategory.objects.get(worker=user)
            context["work_category"]=category.work_category
            context["payments"]=category.payments
            context["savings"]=category.savings
            context["hub_deductions"]=category.hub_deductions
            context["exp_level"]=category.experience_level
        except:
            return redirect("work_profile")
    
    return render(request,"JT_Home/index.html",context=context)
