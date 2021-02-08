from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from .forms import LoginForm
from .models import Protocol, ProtocolImages
from .serializers import ProtocolSerializer, ProtocolImageSerializer
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status


class ProtocolList(viewsets.ViewSet):
    serializer_class = ProtocolSerializer
    queryset = Protocol.objects.all()

    def get(self, request, pk=None, format=None):
        if pk:
            protocols = Protocol.objects.filter(pk=int(pk))
        else:
            protocols = Protocol.objects.all()[::-1]
        serializer = ProtocolSerializer(protocols, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ProtocolSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def update(self, request):
        print(request.data)
        instance = Protocol.objects.get(id=int(request.data['id']))
        instance.patient = request.data['patient']
        instance.date_of_examination = request.data['date_of_examination']
        instance.tech_param_survey = request.data['tech_param_survey']
        instance.protocol = request.data['protocol']
        instance.conclusion = request.data['conclusion']
        instance.save()
        serializer = ProtocolSerializer([instance], many=True)
        return Response(serializer.data)

    def delete(self, request, format=None):
        snippet = Protocol.objects.get(pk=int(request.data['delete_id']))
        snippet.delete()
        protocols = Protocol.objects.all()[::-1]
        serializer = ProtocolSerializer(protocols, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class ProtocolImagesList(viewsets.ViewSet):
    serializer_class = ProtocolImageSerializer
    queryset = ProtocolImages.objects.all()

    def get(self, request):
        instance = ProtocolImages.objects.all()
        serializer = ProtocolImageSerializer(instance, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        for value in request.FILES:
            serializer = ProtocolImageSerializer(data={'protocol': int(request.data['protocol_id']), 'image': request.FILES[value]})
            if serializer.is_valid():
                serializer.save()
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'status': 'OK'}, status=status.HTTP_201_CREATED)

    def delete(self, request, format=None):
        for id in request.data['ids']:
            ProtocolImages.objects.get(pk=int(id)).delete()
        return Response({'status': 'OK'}, status=status.HTTP_201_CREATED)




def main(request):
    if request.user.is_authenticated:
        return redirect('dashboard')
    else:
        return redirect('login-page')


def dashboard(request, pk=None):
    return render(request, "dashboard/index.html")


def login_user(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        print(form)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(username=cd['username'], password=cd['password'])
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('/')
                else:
                    return HttpResponse('Disabled account')
            else:
                return HttpResponse('Invalid login')
    else:
        form = LoginForm()
    return render(request, 'dashboard/login.html', {'form': form})


def log_out(request):
    logout(request)
    return redirect('/')


