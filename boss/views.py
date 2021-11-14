from django.shortcuts import render

def home(request):
    return render(request, "index.html")

def arthematic(request):
    return render(request, "arthematic.html")

def largest(request):
    return render(request, "largest.html")

