
$( document ).ready(function () {
    var estado = 1;
    var estado_sueno = 1;
    var id_sueno = 0;
    var idio = 'ES';
   $(".idioma").click(function () {
       lenguaje = $(this).text();
       console.log('hola '+lenguaje);
       if(lenguaje == 'SPANISH'){
           localStorage.setItem("idioma", "ES");
       }else if (lenguaje == 'ENGLISH'){
           localStorage.setItem("idioma", "EN");
       }else if (lenguaje == 'FRENCH'){
           localStorage.setItem("idioma", "FR");
       }
       console.log(lenguaje);
       $.ajax({
           data: {'idioma': lenguaje},
           url: '/cambio-lenguaje/',
           type: 'get',
           success: function (data) {
                console.log(data);
                $('.title').text(data.sub_pregunta);
                $('#sad_image').text(data.sad_image);
                $('#happy_image').text(data.happy_image);
                $('.sad_mensaje').text(data.sad_mensaje);
                $('.happy_mensaje').text(data.happy_mensaje);
                $('.continue').text(data.btn_confirmar);
                $('.cancelar').text(data.btn_cancelar);
                $('.btn_con').text(data.btn_continuar);
           }
       });
   });

   console.log(idio);
   $('.desagradable').click(function () {
      estado_sueno = 0;
      console.log(estado_sueno);
   });
   $('.agradable').click(function () {
      estado_sueno = 1;
      console.log(estado_sueno);
   });
   $('.continue').click(function () {
       $.ajax({
           data: {'estado_sueno': estado_sueno},
           url: '/crear-sueno/',
           type: 'get',
           success: function (data) {
                id_sueno = data;
                localStorage.setItem("Id", id_sueno);
                localStorage.setItem("Estado", estado_sueno);
                idio= localStorage.getItem("idioma");
                if(estado_sueno){

                    window.location.href = "/agradable/?idioma="+idio;

                }else {
                    window.location.href = "/desagradable/?idioma="+idio;
                }


           }
       });

   });
   estado_sueno = localStorage.getItem("Estado");
   console.log("hola "+estado_sueno);
   $('.boton').click(function () {
       var id = localStorage.getItem("Id");
       console.log(estado_sueno)
       texto = $(".renglones").val();
       obj = {'id_sueno': id, 'texto': texto};


      $.ajax({
           data: obj,
           url: '/crear-descripcion/',
           type: 'get',
           success: function (data) {
               if(data){
                   idio= localStorage.getItem("idioma");
                   console.log('chambers '+idio);
                   if(estado_sueno == 1){
                       window.location.href = "/personaje-agradables/?idioma="+idio;

                   }else {

                       window.location.href = "/personaje-desagradables/?idioma="+idio;

                    }
               }
           }
       });
   });
   $('.personaje').click(function () {
      
         var id = localStorage.getItem("Id");
         estado_sueno = localStorage.getItem("Estado");

         console.log(estado_sueno);
         console.log(id);
         var personaje1 = $('#personaje1').val();
         var personaje2 = $('#personaje2').val();
         if(personaje1 && personaje2){
             console.log(personaje1);
             console.log(personaje2);
             obj = {
                 'personaje1': personaje1,
                 'personaje2': personaje2,
                 'id_sueno': id
             };
             $.ajax({
             data: obj,
             url: '/crear-personajes/',
             type: 'get',
                 success: function (data) {
                     idio= localStorage.getItem("idioma");

                     if(data){
                         window.location.href = "/introducciones/?idioma="+idio;
                         localStorage.setItem('p1', personaje1);
                         localStorage.setItem('p2', personaje2);
                     }
                 }
              });
         } else {
             console.log("digita los personajes")
         }
   });

   $('#edit').click(function () {
       var id_sueno = $('#sueño_id').text();
       var nombre = $('#nombre_sueño').val();

       $.ajax({
           data: {'id_sueno': id_sueno, 'nombre':nombre},
           url: '/nombre-sueno/',
           type: 'get',
           success: function (data) {
               console.log(data);
           }
       });

   });
   $('#btn_next_chat').click(function () {
       idio= localStorage.getItem("idioma");
       window.location.href = "/chat/?idioma="+idio;
   });
   $('.introduccion').click(function () {
       idio= localStorage.getItem("idioma");
       window.location.href = "/chat/?idioma="+idio;
   });


});
