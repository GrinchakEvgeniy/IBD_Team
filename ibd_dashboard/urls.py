from django.urls import path
from . import views

urlpatterns = [
    path('', views.main),
    path('login', views.login, name="login-page"),
    path('dashboard', views.dashboard, name="dashboard"),
    path('amam', views.dashboard, name="amam"),
    path('protocols', views.dashboard, name="protocols")
]