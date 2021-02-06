from django.urls import path
from . import views

urlpatterns = [
    path('', views.main),
    path('login', views.login_user, name="login-page"),
    path('dashboard', views.dashboard, name="dashboard"),
    path('amam', views.dashboard, name="amam"),
    path('amam/new', views.dashboard, name="amam-new"),
    path('protocols', views.dashboard, name="protocols"),
    path('protocols/new', views.dashboard, name="protocol-new"),
    path('logout', views.log_out, name="logout"),

    path('api/protocols', views.ProtocolList.as_view({'get':'get', 'post':'post'})),
    path('api/protocols-images', views.ProtocolImagesList.as_view({'get':'get', 'post':'post'}))
]