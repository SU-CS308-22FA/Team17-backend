from django.urls import path

from base.views import comment_views as views
from base.views import quiz_views as views1
urlpatterns = [
    path('<slug>/', views.comment_list_view),
    path('create/<slug>/', views.comment_create_view),
    path('comments/list/<slug>/', views.PostCommentsListView.as_view()),
    path("questions/<int:id>/answerss",views1.ListCreateAnswer.as_view()),
]
