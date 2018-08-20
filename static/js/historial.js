 $(document).ready(function($) {
     $(window).on("beforeunload", function (e) {
         e.preventDefault();
         contenido = $('#chats').html();
         console.log("y no te voy negar " + buho);
         id_sueno = localStorage.getItem('Id');
         $.ajax({
             dataType: "json",
             data: {'id_sueno': id_sueno, 'contenido': contenido, 'buho': buho},
             url: '/historial/',
             type: 'POST',
             success: function (data) {
                 console.log("ajax " + data);
             }
         });
         
         return "Hay pendientes";
     });
     function getCookie(name) {
        var cookieValue = null;
        var i = 0;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (i; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    var csrftoken = getCookie('csrftoken');

    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    $.ajaxSetup({
        crossDomain: false, // obviates need for sameOrigin test
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type)) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        }
    }); 
  
 });
