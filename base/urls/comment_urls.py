from django.urls import path

from base.views import comment_views as views

urlpatterns = [
    path('<slug>/', views.comment_list_view),
    path('create/<slug>/', views.comment_create_view),
    path('comments/list/<slug>/', views.PostCommentsListView.as_view()),
]
