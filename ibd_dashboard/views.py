from django.shortcuts import render, redirect


def main(request):
    if request.user.is_authenticated:
        return redirect('dashboard')
    else:
        return redirect('login-page')


def dashboard(request):
    return render(request, "dashboard/index.html")


def login(request):
    return render(request, 'dashboard/login.html')
