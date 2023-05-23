from django.shortcuts import render, redirect
from studentaffairs_app.models import Student
from django.http import JsonResponse

def index(request):
    return render(request, 'index.html')
def home(request):
    return render(request, "Home.html")
def add(request):
    return render(request, "Add.html")
def Help(request):
    return render(request, "Help.html")
def add_student(request):
    if(request.POST):
        data = request.POST.dict()
        Name = data['student_name']
        ID = data['student_id']
        LEVEL = data['student_level']
        DEPT = data['student_dept']
        GPA = data['student_gpa']
        EMAIL = data['student_email']
        PHone = data['student_phone']
        DATE = data['student_birthdate']
        Statues = data['student_status']
        GEnder = data['student_gender']       
        student = Student(
            name=Name,
            student_id=ID,
            level=LEVEL,
            department=DEPT,
            gpa=GPA,
            email=EMAIL,
            phone=PHone,
            date_of_birth=DATE,
            gender=GEnder,
            status=Statues,
        )
        if Student.objects.filter(student_id=ID).exists():
            return JsonResponse({'message': 'Student already exists'})
        student.save()
        return JsonResponse({'message': 'Student added successfully'})
    return JsonResponse({'message': 'Invalid request'})
