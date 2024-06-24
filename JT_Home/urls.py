from django.urls import path
from JT_Home import views
urlpatterns = [
    path("",views.homePage,name="homepage")
]
