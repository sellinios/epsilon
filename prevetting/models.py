# backend/prevetting/models.py
from django.db import models
from django.contrib.auth.models import User

class Inspector(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Client(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Project(models.Model):
    principal = models.CharField(max_length=100)
    vessel = models.CharField(max_length=100)
    date = models.DateField()
    service = models.CharField(max_length=100)
    inspector = models.ForeignKey(Inspector, on_delete=models.CASCADE)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.principal} - {self.vessel} - {self.date} - {self.service}"

class InspectionFile(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='files')
    file_type = models.CharField(max_length=50)  # e.g., "Inspection Material", "Photos", "Report"
    file = models.FileField(upload_to='inspection_files/')

    def __str__(self):
        return f"{self.project} - {self.file_type}"
