import json
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from users.models import UserProfile
from tinymce.models import HTMLField

# Create your models here.


class Dream(models.Model):
    nombre_sueno = models.CharField(max_length=255, blank=True)
    agradable = models.BooleanField(default=True)
    userprofile = models.ForeignKey(UserProfile)
    descripcion = HTMLField(blank=True)

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

    sub_pregunta = models.CharField(max_length=255)
    sad_image = models.CharField(max_length=255)
    happy_image = models.CharField(max_length=255)
    crear_sueno = models.CharField(max_length=800, blank=True)
    idioma = models.CharField(max_length=800, blank=True)
    mi_sueno = models.CharField(max_length=800, blank=True)
    cerrar_sesion = models.CharField(max_length=800, blank=True)
    sub_sueno = models.CharField(max_length=800, blank=True)

    btn_continuar = models.CharField(max_length=255)
    btn_cancelar = models.CharField(max_length=255)
    btn_confirmar = models.CharField(max_length=255)
    sad_mensaje = HTMLField()
    happy_mensaje = HTMLField(max_length=255)
    ayuda1 = HTMLField(max_length=255)
    #Plantilla 2

    sub_pregunta2 = HTMLField(  blank=True)
    placeholder = models.TextField(  blank=True)

    #pantalla3
    sub_pregunta3 = HTMLField( blank=True)
    ejemplo = HTMLField( blank=True)
    agregar = models.CharField(max_length=800, blank=True)
    add_desagradable = models.CharField(max_length=800, blank=True)
    add_agradable = models.CharField(max_length=800, blank=True)
    label_p1 = models.CharField(max_length=800, blank=True)
    label_p2 = models.CharField(max_length=800, blank=True)
    #plantilla4
    parrafo1 = HTMLField(  blank=True)
    parrafo2 = HTMLField(  blank=True)
    parrafo3 = HTMLField( blank=True)
    parrafo4 = HTMLField( blank=True)

    # plantilla5
    parrafo5 = HTMLField(  blank=True)
    parrafo6 = models.TextField( blank=True)
    parrafo7 = HTMLField(   blank=True)
    parrafo8 = HTMLField( blank=True)

    # plantilla chat
    instruccion_p1 = HTMLField(  blank=True)
    instruccion_p2 = HTMLField(  blank=True)
    instruccion_3 = HTMLField(  blank=True)
    instruccion_4 = HTMLField( blank=True)
    instruccion_5 = HTMLField(  blank=True)
    instruccion_6 = HTMLField( blank=True)
    instruccion_7 = HTMLField(  blank=True)

    buho1 = HTMLField(  blank=True)
    sub_buho1 = HTMLField( blank=True)

    buho2 = HTMLField(  blank=True)
    sub_buho2 = HTMLField(  blank=True)    
    buho3 = HTMLField(  blank=True)
    sub_buho3 = HTMLField(  blank=True)
    buho4 = HTMLField(  blank=True)
    sub_buho4 = HTMLField( blank=True)
    buho5 = HTMLField( blank=True)
    sub_buho5 = HTMLField(  blank=True)

    buho6 = HTMLField( blank=True)
    sub_buho6 = HTMLField(  blank=True)
    





    placeholder_chat = models.CharField(max_length=255, blank=True)
    btn_personaje1 = models.CharField(max_length=255, blank=True)
    btn_personaje5 = models.CharField(max_length=255, blank=True)
    opcion1 = models.CharField(max_length=255, blank=True)
    opcion2 = models.CharField(max_length=255, blank=True)
    opcion3 = models.CharField(max_length=255, blank=True)
    opcion4 = models.CharField(max_length=255, blank=True)
    p2_opcion1 = models.CharField(max_length=255, blank=True)
    p2_opcion2 = models.CharField(max_length=255, blank=True)
    p2_opcion3 = models.CharField(max_length=255, blank=True)
    p2_opcion4 = models.CharField(max_length=255, blank=True)
    # correciones
    pregunta_personaje = models.CharField(max_length=255, blank=True)
    ayuda2 = HTMLField( blank=True)
    ayuda3 = HTMLField(  blank=True)
    ayuda4 = HTMLField( blank=True)
    ayuda5 = HTMLField(  blank=True)
    ayuda6 = HTMLField( blank=True)
    ayuda7 = HTMLField(  blank=True)
    ayuda8 = HTMLField(  blank=True)

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
    contenido = HTMLField()
    buho = models.CharField(max_length=10, blank=True)
