from django.db import models
from ckeditor.fields import RichTextField


class Amam(models.Model):
    subject = models.IntegerField()
    date = models.CharField(max_length=10)
    visit = models.CharField(max_length=100)
    sample_type_first = models.CharField(max_length=100)
    sample_type_second = models.CharField(max_length=100)
    of_tubes = models.IntegerField(verbose_name='# of tubes')
    result = models.CharField(max_length=10)
    accession = models.IntegerField(verbose_name='Accession#')
    shipping_date = models.CharField(max_length=10)
    airwaybill = models.IntegerField(verbose_name='Airwaybill#')
    comments = models.TextField()
    date_order = models.CharField(max_length=10)
    number_order = models.IntegerField()
    date_getting = models.CharField(max_length=10)


class Protocol(models.Model):
    patient = models.CharField(max_length=100, null=True, blank=True)
    date_of_examination = models.CharField(max_length=10, null=True, blank=True)
    tech_param_survey = RichTextField(null=True, blank=True)
    protocol = RichTextField(null=True, blank=True)
    conclusion = RichTextField(null=True, blank=True)

    def __str__(self):
        return self.patient

class ProtocolImages(models.Model):
    image = models.ImageField(upload_to='notes/', null=True, blank=True)
    name = models.CharField(max_length=200, blank=True, null=True)
    protocol_id = models.ForeignKey(Protocol,
                                 on_delete=models.CASCADE,
                                 null=True,
                                 blank=True,
                                 related_name="protocol_image")