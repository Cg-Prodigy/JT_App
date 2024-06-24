from django.urls import path
from JT_Users import views
urlpatterns = [
    path("create_work_profile/",views.createWorkProfile,name="work_profile")
]
