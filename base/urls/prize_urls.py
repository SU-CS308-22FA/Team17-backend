from django.urls import path

from base.views import prize_views as views

urlpatterns = [
    path('create-new-prize/', views.ListCreatePrize.as_view()),
    path('player-delete/<int:id>/', views.RetrieveUpdateDestroyPrize.as_view()),
]
