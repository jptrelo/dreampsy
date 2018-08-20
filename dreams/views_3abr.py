import json
from django.shortcuts import render, HttpResponse
from django.contrib.auth.decorators import login_required
from django.views.generic import DetailView
from .models import Idioma, Dream, Historial

@login_required
def index(request):
    datos = json.loads(open('SPANISH.json').read())
    datos['idiomas'] = Idioma.objects.all()
    print(datos)
    return render(request, 'dreams/describir(inicio).html', datos)


def agradable(request):
    idioma = request.GET.get('idioma')
    datos = {'idiomas': Idioma.objects.all()}

    if idioma == "ES":
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    elif idioma == "EN":
        datos['objetos'] = json.loads(open('ENGLISH.json').read())
    elif idioma == "FR":
        datos['objetos'] = json.loads(open('FRENCH.json').read())
    return render(request, 'dreams/agradable.html', datos)


def chat(request):
    datos = {'idiomas': Idioma.objects.all()}
    idioma = request.GET.get('idioma')
    if idioma == "ES":
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    elif idioma == "EN":
        datos['objetos'] = json.loads(open('ENGLISH.json').read())
    elif idioma == "FR":
        datos['objetos'] = json.loads(open('FRENCH.json').read())
    return render(request, 'dreams/chat.html', datos)


def desagradable(request):
    datos = {'idiomas': Idioma.objects.all()}
    idioma = request.GET.get('idioma')
    if idioma == "ES":
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    elif idioma == "EN":
        datos['objetos'] = json.loads(open('ENGLISH.json').read())
    elif idioma == "FR":
        datos['objetos'] = json.loads(open('FRENCH.json').read())
    return render(request, 'dreams/desagradable.html', datos)


def describir(request):
    datos = {'idiomas': Idioma.objects.all()}
    return render(request, 'dreams/describir(inicio).html', datos)


def instruccion(request):
    datos = {'idiomas': Idioma.objects.all()}
    idioma = request.GET.get('idioma')
    if idioma == "ES":
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    elif idioma == "EN":
        datos['objetos'] = json.loads(open('ENGLISH.json').read())
    elif idioma == "FR":
        datos['objetos'] = json.loads(open('FRENCH.json').read())
    return render(request, 'dreams/instruccion.html', datos)


def introduccion(request):
    datos = {'idiomas': Idioma.objects.all()}
    return render(request, 'dreams/introduccion.html', datos)


def introducciones(request):
    datos = {'idiomas': Idioma.objects.all()}
    idioma = request.GET.get('idioma')
    if idioma == "ES":
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    elif idioma == "EN":
        datos['objetos'] = json.loads(open('ENGLISH.json').read())
    elif idioma == "FR":
        datos['objetos'] = json.loads(open('FRENCH.json').read())
    return render(request, 'dreams/introducciones.html', datos)


def personaje_agradable(request):
    datos = {'idiomas': Idioma.objects.all()}
    idioma = request.GET.get('idioma')
    if idioma == "ES":
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    elif idioma == "EN":
        datos['objetos'] = json.loads(open('ENGLISH.json').read())
    elif idioma == "FR":
        datos['objetos'] = json.loads(open('FRENCH.json').read())
    return render(request, 'dreams/personajes-agradable.html', datos)


def personaje_desagradable(request):
    datos = {'idiomas': Idioma.objects.all()}
    idioma = request.GET.get('idioma')
    if idioma == "ES":
        datos['objetos'] = json.loads(open('SPANISH.json').read())
    elif idioma == "EN":
        datos['objetos'] = json.loads(open('ENGLISH.json').read())
    elif idioma == "FR":
        datos['objetos'] = json.loads(open('FRENCH.json').read())
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
    dreams = Dream.objects.filter(userprofile_id=user)

    return render(request, 'dreams/mis_suenos.html', {'dreams': dreams})


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


def historial(request):
    if request.is_ajax():
        id = int(request.GET.get('id_sueno'))
        buho = int(request.GET['buho'])
        contenido = request.GET['contenido']

        historial, created = Historial.objects.update_or_create(dream_id=id)

        if created:
            historial.objects.create(dream_id=id, buho=buho, contenido=contenido)

        else:
            historial.buho = buho
            historial.contenido = contenido
            historial.save()
        return HttpResponse("Llego")


def continuar_chat(request, pk):

    historial = Historial.objects.get(dream_id=pk)
    objetos = json.loads(open('SPANISH.json').read())
    return render(request, 'dreams/chat.html', {'historial':historial, 'objetos':objetos})
