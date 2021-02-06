from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login, logout
from .forms import LoginForm



def main(request):
    if request.user.is_authenticated:
        return redirect('dashboard')
    else:
        return redirect('login-page')


def dashboard(request):
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


