from django.urls import path

from base.views import post_views as views

urlpatterns = [
    path('', views.PostListView.as_view()),
    path('view/<slug>/', views.PostDetailView.as_view(), name='post-detail'),
    path('create-new-post/', views.post_create_view),
    path('post-list/', views.PostListAllView.as_view()),
    path('update-post/', views.post_update_view),
    path('delete-post/', views.post_delete_view),
]
