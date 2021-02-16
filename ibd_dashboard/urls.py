from django.urls import path
from . import views

urlpatterns = [
    path('', views.main),
    path('login', views.login_user, name="login-page"),
    path('dashboard', views.dashboard, name="dashboard"),
    path('amam', views.dashboard, name="amam"),
    path('amam/new', views.dashboard, name="amam-new"),
    path('amam/subfields', views.dashboard, name="amam-subfields"),
    path('protocols', views.dashboard, name="protocols"),
    path('protocols/new', views.dashboard, name="protocol-new"),
    path('protocols/update/<int:pk>', views.dashboard, name="protocol-update"),
    path('protocols/print/<int:pk>', views.dashboard, name="protocol-print"),
    path('logout', views.log_out, name="logout"),

    path('api/get-protocols', views.GetProtocolView.as_view({'get':'get'})),
    path('api/post-protocol', views.PostProtocolView.as_view({'post':'post'})),
    path('api/delete-protocol', views.DeleteProtocolView.as_view({'delete':'delete'})),
    path('api/put-protocol', views.PutProtocolView.as_view({'put':'put'})),
    path('api/get-protocol/<int:pk>', views.GetProtocolView.as_view({'get':'get'})),

    path('api/get-protocols-images', views.GetProtocolImagesView.as_view({'get':'get'})),
    path('api/post-protocols-images', views.PostProtocolImagesView.as_view({'post':'post'})),
    path('api/delete-protocols-images', views.DeleteProtocolImagesView.as_view({'delete':'delete'})),

    path('api/get-amam', views.GetAmamView.as_view({'get':'get'})),
    path('api/post-amam', views.PostAmamView.as_view({'post':'post'})),
    path('api/get-amam/<int:pk>', views.GetAmamView.as_view({'get':'get'})),

]