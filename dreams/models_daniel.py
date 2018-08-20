import json
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from users.models import UserProfile
# Create your models here.


class Dream(models.Model):
    nombre_sueno = models.CharField(max_length=30, blank=True)
    agradable = models.BooleanField(default=True)
    userprofile = models.ForeignKey(UserProfile)
    descripcion = models.TextField(max_length=300, blank=True)

    personaje1 = models.CharField(max_length=40, blank=True)
    personaje2 = models.CharField(max_length=40, blank=True)
    creado = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.userprofile)

class MenuIdioma(models.Model):
    idioma = models.CharField(max_length=30)
    activo = models.BooleanField(default=False)
    def __str__(self):
        return self.idioma

class Idioma(models.Model):
    lenguaje = models.ForeignKey(MenuIdioma, related_name="idioma_traductor")
    #pantalla 1

    sub_pregunta = models.CharField(max_length=70)
    sad_image = models.CharField(max_length=70)
    happy_image = models.CharField(max_length=70)

    btn_continuar = models.CharField(max_length=30)
    btn_cancelar = models.CharField(max_length=30)
    btn_confirmar = models.CharField(max_length=30)
    sad_mensaje = models.TextField(max_length=200)
    happy_mensaje = models.TextField(max_length=200)
    ayuda1 = models.TextField(max_length=200)
    #Plantilla 2

    sub_pregunta2 = models.TextField(max_length=70, blank=True)
    placeholder = models.TextField(max_length=70, blank=True)

    #pantalla3
    sub_pregunta3 = models.TextField(max_length=800, blank=True)
    ejemplo = models.TextField(max_length=800, blank=True)
    agregar = models.CharField(max_length=800, blank=True)

    #plantilla4
    parrafo1 = models.TextField(max_length=800, blank=True)
    parrafo2 = models.TextField(max_length=800, blank=True)
    parrafo3 = models.TextField(max_length=800, blank=True)
    parrafo4 = models.TextField(max_length=800, blank=True)

    # plantilla5
    parrafo5 = models.TextField(max_length=800, blank=True)
    parrafo6 = models.TextField(max_length=800, blank=True)
    parrafo7 = models.TextField(max_length=800, blank=True)
    parrafo8 = models.TextField(max_length=800, blank=True)

    # plantilla chat
    instruccion_p1 = models.TextField(max_length=800, blank=True)
    instruccion_p2 = models.TextField(max_length=800, blank=True)
    buho1 = models.TextField(max_length=800, blank=True)
    buho2 = models.TextField(max_length=800, blank=True)
    buho3 = models.TextField(max_length=800, blank=True)
    buho4 = models.TextField(max_length=800, blank=True)
    buho5 = models.TextField(max_length=800, blank=True)
    buho6 = models.TextField(max_length=800, blank=True)
    placeholder_chat = models.CharField(max_length=50, blank=True)
    btn_personaje1 = models.CharField(max_length=50, blank=True)
    btn_personaje5 = models.CharField(max_length=50, blank=True)
    opcion1 = models.CharField(max_length=50, blank=True)
    opcion2 = models.CharField(max_length=50, blank=True)
    opcion3 = models.CharField(max_length=50, blank=True)
    opcion4 = models.CharField(max_length=50, blank=True)
    # correciones
    pregunta_personaje = models.CharField(max_length=50, blank=True)
    ayuda2 = models.TextField(max_length=200, blank=True)
    ayuda3 = models.TextField(max_length=200, blank=True)
    ayuda4 = models.TextField(max_length=200, blank=True)
    ayuda5 = models.TextField(max_length=200, blank=True)
    ayuda6 = models.TextField(max_length=200, blank=True)
    ayuda7 = models.TextField(max_length=200, blank=True)
    ayuda8 = models.TextField(max_length=200, blank=True)

    def __str__(self):
        return str(self.lenguaje)


@receiver(post_save, sender=Idioma)
def post_save_idioma(sender, instance, **kwargs):
    print(instance.__dict__)
    name = str(instance.__dict__['_lenguaje_cache'])
    extension = '.json'
    nombre_archivo = name+extension
    print(name+extension)

    hola = instance.__dict__['_state']
    instance.__dict__.pop('_state')
    instance.__dict__.pop('_lenguaje_cache')
    print(instance.__dict__)
    with open(nombre_archivo, "w") as out:
        #data = serializers.serialize("json", instance.__dict__)
        #out.write(data)
        data = json.dumps(instance.__dict__)
        out.write(data)
    instance.__dict__['_state'] = hola



class Historial(models.Model):
    dream = models.ForeignKey(Dream)
    contenido = models.TextField(max_length=2000)
    buho = models.CharField(max_length=10, blank=True)
