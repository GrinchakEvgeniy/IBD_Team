from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from .forms import LoginForm
from .models import Protocol, ProtocolImages
from .serializers import *
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status


# ===========================$$======================
class GetAirwaybillView(viewsets.ModelViewSet):
    serializer_class = AirwaybillSerializer
    queryset = Airwaybill.objects.all()

    def get(self, request):
        queryset = Airwaybill.objects.all()[::-1]
        serializer_class = AirwaybillSerializer(queryset, many=True)
        return Response(serializer_class.data)


class PostAirwaybillView(viewsets.ModelViewSet):
    serializer_class = AirwaybillSerializer
    queryset = Airwaybill.objects.all()

    def post(self, request):
        serializers = AirwaybillSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            instance = Airwaybill.objects.all()[::-1]
            serializer = AirwaybillSerializer(instance, many=True)
            return Response(serializer.data)
        return Response({'error': 'error'})


class DeleteAirwaybillView(viewsets.ModelViewSet):
    serializer_class = AirwaybillSerializer
    queryset = Airwaybill.objects.all()

    def delete(self, request):
        instance = Airwaybill.objects.get(pk=int(request.data['id']))
        instance.delete()
        instance = Airwaybill.objects.all()[::-1]
        serializer = AirwaybillSerializer(instance, many=True)
        return Response(serializer.data)


# =============================||=====================

# ===========================$$======================
class GetOfTubesView(viewsets.ModelViewSet):
    serializer_class = OfTubesSerializer
    queryset = OfTubes.objects.all()

    def get(self, request):
        queryset = OfTubes.objects.all()[::-1]
        serializer_class = OfTubesSerializer(queryset, many=True)
        return Response(serializer_class.data)


class PostOfTubesView(viewsets.ModelViewSet):
    serializer_class = OfTubesSerializer
    queryset = OfTubes.objects.all()

    def post(self, request):
        serializers = OfTubesSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            instance = OfTubes.objects.all()[::-1]
            serializer = OfTubesSerializer(instance, many=True)
            return Response(serializer.data)
        return Response({'error': 'error'})


class DeleteOfTubesView(viewsets.ModelViewSet):
    serializer_class = OfTubesSerializer
    queryset = OfTubes.objects.all()

    def delete(self, request):
        instance = OfTubes.objects.get(pk=int(request.data['id']))
        instance.delete()
        instance = OfTubes.objects.all()[::-1]
        serializer = OfTubesSerializer(instance, many=True)
        return Response(serializer.data)


# =============================||=====================

# ===========================$$======================
class GetSampleTypeFirstView(viewsets.ModelViewSet):
    serializer_class = SampleTypeFirstSerializer
    queryset = SampleTypeFirst.objects.all()

    def get(self, request):
        queryset = SampleTypeFirst.objects.all()[::-1]
        serializer_class = SampleTypeFirstSerializer(queryset, many=True)
        return Response(serializer_class.data)


class PostSampleTypeFirstView(viewsets.ModelViewSet):
    serializer_class = SampleTypeFirstSerializer
    queryset = SampleTypeFirst.objects.all()

    def post(self, request):
        serializers = SampleTypeFirstSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            instance = SampleTypeFirst.objects.all()[::-1]
            serializer = SampleTypeFirstSerializer(instance, many=True)
            return Response(serializer.data)
        return Response({'error': 'error'})


class DeleteSampleTypeFirstView(viewsets.ModelViewSet):
    serializer_class = SampleTypeFirstSerializer
    queryset = SampleTypeFirst.objects.all()

    def delete(self, request):
        instance = SampleTypeFirst.objects.get(pk=int(request.data['id']))
        instance.delete()
        instance = SampleTypeFirst.objects.all()[::-1]
        serializer = SampleTypeFirstSerializer(instance, many=True)
        return Response(serializer.data)


# =============================||=====================

# ===========================$$======================
class GetSampleTypeSecondView(viewsets.ModelViewSet):
    serializer_class = SampleTypeSecondSerializer
    queryset = SampleTypeSecond.objects.all()

    def get(self, request):
        queryset = SampleTypeSecond.objects.all()[::-1]
        serializer_class = SampleTypeSecondSerializer(queryset, many=True)
        return Response(serializer_class.data)


class PostSampleTypeSecondView(viewsets.ModelViewSet):
    serializer_class = SampleTypeSecondSerializer
    queryset = SampleTypeSecond.objects.all()

    def post(self, request):
        serializers = SampleTypeSecondSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            instance = SampleTypeSecond.objects.all()[::-1]
            serializer = SampleTypeSecondSerializer(instance, many=True)
            return Response(serializer.data)
        return Response({'error': 'error'})


class DeleteSampleTypeSecondView(viewsets.ModelViewSet):
    serializer_class = SampleTypeSecondSerializer
    queryset = SampleTypeSecond.objects.all()

    def delete(self, request):
        instance = SampleTypeSecond.objects.get(pk=int(request.data['id']))
        instance.delete()
        instance = SampleTypeSecond.objects.all()[::-1]
        serializer = SampleTypeSecondSerializer(instance, many=True)
        return Response(serializer.data)


# =============================||=====================

# ===========================$$======================
class GetSubjectView(viewsets.ModelViewSet):
    serializer_class = SubjectSerializer
    queryset = Subject.objects.all()

    def get(self, request):
        queryset = Subject.objects.all()[::-1]
        serializer_class = SubjectSerializer(queryset, many=True)
        return Response(serializer_class.data)


class PostSubjectView(viewsets.ModelViewSet):
    serializer_class = SubjectSerializer
    queryset = Subject.objects.all()

    def post(self, request):
        serializers = SubjectSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            instance = Subject.objects.all()[::-1]
            serializer = SubjectSerializer(instance, many=True)
            return Response(serializer.data)
        return Response({'error': 'error'})


class DeleteSubjectView(viewsets.ModelViewSet):
    serializer_class = SubjectSerializer
    queryset = Subject.objects.all()

    def delete(self, request):
        instance = Subject.objects.get(pk=int(request.data['id']))
        instance.delete()
        instance = Subject.objects.all()[::-1]
        serializer = SubjectSerializer(instance, many=True)
        return Response(serializer.data)


# =============================||=====================

# ===========================$$======================
class GetVisitView(viewsets.ModelViewSet):
    serializer_class = VisitSerializer
    queryset = Visit.objects.all()

    def get(self, request):
        queryset = Visit.objects.all()[::-1]
        serializer_class = VisitSerializer(queryset, many=True)
        return Response(serializer_class.data)


class PostVisitView(viewsets.ModelViewSet):
    serializer_class = VisitSerializer
    queryset = Visit.objects.all()

    def post(self, request):
        serializers = VisitSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            instance = Visit.objects.all()[::-1]
            serializer = VisitSerializer(instance, many=True)
            return Response(serializer.data)
        return Response({'error': 'error'})


class DeleteVisitView(viewsets.ModelViewSet):
    serializer_class = VisitSerializer
    queryset = Visit.objects.all()

    def delete(self, request):
        instance = Visit.objects.get(pk=int(request.data['id']))
        instance.delete()
        instance = Visit.objects.all()[::-1]
        serializer = VisitSerializer(instance, many=True)
        return Response(serializer.data)


# =============================||=====================

class GetAmamView(viewsets.ModelViewSet):
    serializer_class = AmamSerializer
    queryset = Amam.objects.all()

    def get(self, request, pk=None, format=None):
        if pk:
            protocols = Amam.objects.filter(pk=int(pk))
        else:
            protocols = Amam.objects.all()[::-1]
        serializer = AmamSerializer(protocols, many=True)
        return Response(serializer.data)


class PostAmamView(viewsets.ModelViewSet):
    serializer_class = AmamSerializer
    queryset = Amam.objects.all()

    def post(self, request, format=None):
        serializer = AmamSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




class GetProtocolView(viewsets.ModelViewSet):
    serializer_class = ProtocolSerializer
    queryset = Protocol.objects.all()

    def get(self, request, pk=None, format=None):
        if pk:
            protocols = Protocol.objects.filter(pk=int(pk))
        else:
            protocols = Protocol.objects.all()[::-1]
        serializer = ProtocolSerializer(protocols, many=True)
        return Response(serializer.data)


class PostProtocolView(viewsets.ModelViewSet):
    serializer_class = ProtocolSerializer
    queryset = Protocol.objects.all()

    def post(self, request, format=None):
        serializer = ProtocolSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PutProtocolView(viewsets.ModelViewSet):
    serializer_class = ProtocolSerializer
    queryset = Protocol.objects.all()

    def put(self, request):
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


class DeleteProtocolView(viewsets.ModelViewSet):
    serializer_class = ProtocolSerializer
    queryset = Protocol.objects.all()

    def delete(self, request, format=None):
        snippet = Protocol.objects.get(pk=int(request.data['delete_id']))
        snippet.delete()
        protocols = Protocol.objects.all()[::-1]
        serializer = ProtocolSerializer(protocols, many=True)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class GetProtocolImagesView(viewsets.ModelViewSet):
    serializer_class = ProtocolImageSerializer
    queryset = ProtocolImages.objects.all()

    def get(self, request):
        instance = ProtocolImages.objects.all()
        serializer = ProtocolImageSerializer(instance, many=True)
        return Response(serializer.data)


class PostProtocolImagesView(viewsets.ModelViewSet):
    serializer_class = ProtocolImageSerializer
    queryset = ProtocolImages.objects.all()

    def post(self, request, format=None):
        for value in request.FILES:
            serializer = ProtocolImageSerializer(data={'protocol': int(request.data['protocol_id']), 'image': request.FILES[value]})
            if serializer.is_valid():
                serializer.save()
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({'status': 'OK'}, status=status.HTTP_201_CREATED)


class DeleteProtocolImagesView(viewsets.ModelViewSet):
    serializer_class = ProtocolImageSerializer
    queryset = ProtocolImages.objects.all()

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


