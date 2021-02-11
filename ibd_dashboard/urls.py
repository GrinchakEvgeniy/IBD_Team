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
    path('protocols/update/<int:pk>', views.dashboard, name="protocol-update"),
    path('protocols/print/<int:pk>', views.dashboard, name="protocol-print"),
    path('logout', views.log_out, name="logout"),

    path('api/protocols', views.ProtocolList.as_view({'get':'get', 'post':'post', 'delete':'delete', 'put':'update'})),
    path('api/protocols/<int:pk>', views.ProtocolList.as_view({'get':'get', 'post':'post', 'delete':'delete'})),
    path('api/protocols-images', views.ProtocolImagesList.as_view({'get':'get', 'post':'post', 'delete':'delete'})),

    path('api/amam', views.AmamView.as_view({'get':'get', 'post':'post'})),
    path('api/amam/<int:pk>', views.AmamView.as_view({'get':'get', 'post':'post'})),

]