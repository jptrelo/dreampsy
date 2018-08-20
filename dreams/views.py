import json
from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required
from django.views.generic import DetailView
from .models import Idioma, Dream, Historial
from django.views.decorators.csrf import csrf_exempt

@login_required
def index(request):
    datos = json.loads(open('SPANISH.json').read())
    datos['idiomas'] = Idioma.objects.all()
    user = request.user.userprofile.id
    datos['cant_sueno'] = Dream.objects.filter(userprofile_id=user).count()
    print(datos)
    return render(request, 'dreams/describir(inicio).html', datos)


def agradable(request):
    idioma = request.GET.get('idioma')
    datos = {'idiomas': Idioma.objects.all()}
    user = request.user.userprofile.id
    datos['cant_sueno'] = Dream.objects.filter(userprofile_id=user).count()
    if idioma == "ES":
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    elif idioma == "EN":
        datos['objetos'] = json.loads(open('ENGLISH.json').read())
    elif idioma == "FR":
        datos['objetos'] = json.loads(open('FRENCH.json').read())
    else:
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    return render(request, 'dreams/agradable.html', datos)


def chat(request):
    datos = {'idiomas': Idioma.objects.all()}
    idioma = request.GET.get('idioma')
    user = request.user.userprofile.id
    datos['cant_sueno'] = Dream.objects.filter(userprofile_id=user).count()
    if idioma == "ES":
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    elif idioma == "EN":
        datos['objetos'] = json.loads(open('ENGLISH.json').read())
    elif idioma == "FR":
        datos['objetos'] = json.loads(open('FRENCH.json').read())
    else:
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    return render(request, 'dreams/chat.html', datos)


def desagradable(request):
    datos = {'idiomas': Idioma.objects.all()}
    idioma = request.GET.get('idioma')
    user = request.user.userprofile.id
    datos['cant_sueno'] = Dream.objects.filter(userprofile_id=user).count()
    if idioma == "ES":
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    elif idioma == "EN":
        datos['objetos'] = json.loads(open('ENGLISH.json').read())
    elif idioma == "FR":
        datos['objetos'] = json.loads(open('FRENCH.json').read())
    else:
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    return render(request, 'dreams/desagradable.html', datos)


def describir(request):
    datos = {'idiomas': Idioma.objects.all()}
    user = request.user.userprofile.id
    datos['cant_sueno'] = Dream.objects.filter(userprofile_id=user).count()
    return render(request, 'dreams/describir(inicio).html', datos)


def instruccion(request):
    datos = {'idiomas': Idioma.objects.all()}
    idioma = request.GET.get('idioma')
    user = request.user.userprofile.id
    datos['cant_sueno'] = Dream.objects.filter(userprofile_id=user).count()
    if idioma == "ES":
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    elif idioma == "EN":
        datos['objetos'] = json.loads(open('ENGLISH.json').read())
    elif idioma == "FR":
        datos['objetos'] = json.loads(open('FRENCH.json').read())
    else:
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    return render(request, 'dreams/instruccion.html', datos)


def introduccion(request):
    datos = {'idiomas': Idioma.objects.all()}
    user = request.user.userprofile.id
    datos['cant_sueno'] = Dream.objects.filter(userprofile_id=user).count()
    return render(request, 'dreams/introduccion.html', datos)


def introducciones(request):
    datos = {'idiomas': Idioma.objects.all()}
    idioma = request.GET.get('idioma')
    user = request.user.userprofile.id
    datos['cant_sueno'] = Dream.objects.filter(userprofile_id=user).count()
    if idioma == "ES":
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    elif idioma == "EN":
        datos['objetos'] = json.loads(open('ENGLISH.json').read())
    elif idioma == "FR":
        datos['objetos'] = json.loads(open('FRENCH.json').read())
    else:
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    return render(request, 'dreams/introducciones.html', datos)


def personaje_agradable(request):
    datos = {'idiomas': Idioma.objects.all()}
    idioma = request.GET.get('idioma')
    user = request.user.userprofile.id
    datos['cant_sueno'] = Dream.objects.filter(userprofile_id=user).count()
    if idioma == "ES":
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    elif idioma == "EN":
        datos['objetos'] = json.loads(open('ENGLISH.json').read())
    elif idioma == "FR":
        datos['objetos'] = json.loads(open('FRENCH.json').read())
    else:
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    return render(request, 'dreams/personajes-agradable.html', datos)


def personaje_desagradable(request):
    datos = {'idiomas': Idioma.objects.all()}
    idioma = request.GET.get('idioma')
    user = request.user.userprofile.id
    datos['cant_sueno'] = Dream.objects.filter(userprofile_id=user).count()
    if idioma == "ES":
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    elif idioma == "EN":
        datos['objetos'] = json.loads(open('ENGLISH.json').read())
    elif idioma == "FR":
        datos['objetos'] = json.loads(open('FRENCH.json').read())
    else:
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    return render(request, 'dreams/personajes-desagradable.html', datos)


def cambio_lenguaje(request):
    if request.is_ajax():
        idioma = request.GET.get('idioma')
        extension = '.json'
        nombre_archivo = idioma + extension
        datos = json.loads(open(nombre_archivo).read())
        response = json.dumps(datos)

        return HttpResponse(response, content_type='application/json')


def crear_sueno(request):
    if request.is_ajax():
        user = request.user.userprofile.id
        estado = request.GET['estado_sueno']

        if estado == "1":
            dream = Dream(userprofile_id=user)
            dream.save()
            print(dream.id)
        else:
            dream = Dream(agradable=False, userprofile_id=user)
            dream.save()
            print(dream.id)
        return HttpResponse(dream.id)


def crear_descripcion(request):
    if request.is_ajax():
        user = request.user.userprofile.id
        id = int(request.GET['id_sueno'])
        texto = request.GET['texto']
        dream = Dream.objects.get(id=id)
        dream.descripcion = texto
        dream.save()

        return HttpResponse("positivo")


def crear_personajes(request):
    if request.is_ajax():
        user = request.user.userprofile.id
        id = int(request.GET['id_sueno'])
        personaje1 = request.GET['personaje1']
        personaje2 = request.GET['personaje2']
        dream = Dream.objects.get(id=id)
        dream.personaje1 = personaje1
        dream.personaje2 = personaje2
        dream.save()
        return HttpResponse("positivo")


def mis_suenos(request):
    datos = {'idiomas': Idioma.objects.all()}
    user = request.user.userprofile.id
    datos['dreams'] = Dream.objects.filter(userprofile_id=user).order_by('-id')
    user = request.user.userprofile.id
    datos['cant_sueno'] = Dream.objects.filter(userprofile_id=user).count()
    return render(request, 'dreams/mis_suenos.html', datos)


class DetalleSueno(DetailView):
    template_name = "dreams/sueno_detalle.html"
    context_object_name = 'dream'
    model = Dream


def edit_nombre(request):
    if request.is_ajax():
        id = int(request.GET.get('id_sueno'))
        nombre = request.GET['nombre']

        dream_obj = Dream.objects.get(id=id)
        dream_obj.nombre_sueno = nombre
        dream_obj.save()

        return HttpResponse("Llego")

@csrf_exempt
def historial(request):
    if request.is_ajax() and request.POST:
        id = int(request.POST.get('id_sueno'))
        buho = int(request.POST.get('buho'))
        contenido = request.POST.get('contenido')

        #historial, created = Historial.objects.update_or_create(dream_id=id)
        try:
            obj = Historial.objects.get(dream_id=id)
            obj.buho=buho
            obj.contenido=contenido
            obj.save()
        except Historial.DoesNotExist:
            Historial.objects.create(dream_id=id, buho=buho, contenido=contenido)

        #if created:
        #    historial.objects.create(dream_id=id, buho=buho, contenido=contenido)

        #else:
        #    historial.buho = buho
        #    historial.contenido = contenido
        #    historial.save()
        return HttpResponse("Llego")


def continuar_chat(request, pk):

    if Historial.objects.filter(dream_id=pk).exists():
        contex = {'historial': Historial.objects.get(dream_id=pk)}
    else:
        contex = {'historial': False}
        contex['my_dream'] = Dream.objects.get(id=pk)
    contex['objetos'] = json.loads(open('SPANISH.json').read())
    user = request.user.userprofile.id
    contex['cant_sueno'] = Dream.objects.filter(userprofile_id=user).count()
    return render(request, 'dreams/chat.html', contex)
