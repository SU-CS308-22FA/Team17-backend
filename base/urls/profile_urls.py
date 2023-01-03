from django.urls import path
from base.views import profile_views as views

urlpatterns = [
    path("profile/<int:id>/",views.ProfileOwnerDetailApiView.as_view()),
    path("profile/all-users/",views.ListAllUsers.as_view()),
]
