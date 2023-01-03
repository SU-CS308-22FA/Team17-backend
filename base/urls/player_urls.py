from django.urls import path

from base.views import player_views as views

urlpatterns = [
    path('create-new-player/', views.ListCreatePlayer.as_view()),
    path('player-update/<int:id>/', views.RetrieveUpdateDestroyPlayer.as_view()),
]
