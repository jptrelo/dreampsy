$(document).ready(function($) {



	ver_personaje=1;
	personaje='P1';
	
	bh4=1;
	bh5=1;

	bh4_length=$('.massage_inner h4').length;
	bh5_length=$('.massage_inner h5').length;

	/*Codigo daniel rebolledo*/
	    var mensaje = '';
	    var buho = 1;
	    var personaje = 1;
	    var personaje1 = localStorage.getItem('p1');
        var personaje2= localStorage.getItem('p2');
        var texto_final = '';
        var ho_talk = 0;
        var tx_boton = '';
        var tx_boton2 = '';
        tx_boton = $('#p1').text();
        $('#p1').text(tx_boton.replace('p1', personaje1));
        tx_boton2 = $('#p2').text();
        $('#p2').text(tx_boton2.replace('p1', personaje2));
        tx_boton2 = $('#p2').text();
        $('#p2').text(tx_boton2.replace('p2', personaje2));
	    texto_final = $('#txt1').text();
	    $('#txt1').text(texto_final.replace('p1', personaje1));
        $('#texto1').show();
	    console.log('hola '+texto_final);
	    $('#texto2').hide();
	    $('#texto3').hide();
	    $('#texto4').hide();
	    $('#texto5').hide();
	    $('#texto6').hide();
	    $('#texto7').hide();
        $('#instruccion_personaje2').hide();
        $('.chat_massage').hide();
        $('#respuestas_p1').hide();
        $('#respuestas_p2').hide();
        $('#instruccio1').hide();
        $('#sender_buho').hide();
        $("#p1").click(function () {
            $('.caja_chat .swicher .tooltip span').html( personaje1 );
            $('#instruccion').hide();
            if(buho <= 6){
                poner_buho();
            }

            $('#chat_overlay').addClass('active');
            $('#chat_overlay').hide();


        });
        $('.btn_buho').click(function () {
            if(buho == 1){
                $('#instruccio1').text(texto_final.replace('p1', personaje1));
                $('#instruccio1').show();
                $('#perso').text(personaje3);
                ho_talk = 1;
                quitar_buho(20);
            }else if(buho == 2){
                 $('.chats .chats_inner').append('' +
                '<span id="intruccion2" class="instruccion_buho buho_massage2">\n' +
                 texto_final.replace('p2', personaje2)+
                '</span>');
                 ho_talk = 1;
                 quitar_buho(20);
            }else if(buho == 3){
                $('.chats .chats_inner').append('' +
                '<span id="intruccion2" class="instruccion_buho buho_massage2">\n' +
                texto_final.replace('p2', personaje2) +
                '</span>');
                ho_talk = 2;
                quitar_buho(20);
            }else if(buho == 4){
                $('.chats .chats_inner').append('' +
                '<span id="intruccion2" class="instruccion_buho buho_massage2">\n' +
                texto_final.replace('p2', personaje2) +
                '</span>');
                ho_talk = 2;
                quitar_buho();
            }else if (buho == 5){
                $('.chats .chats_inner').append('' +
                '<span id="intruccion2" class="instruccion_buho buho_massage2">\n' +
                texto_final.replace('p2', personaje2) +
                '</span>');
                $('#perso').text(personaje1);
                ho_talk = 1;
                quitar_buho();
                $('#text').hide();
                $('#respuestas_p1').show();
                $('#sender').addClass('active');
            }
            else if (buho == 6){
                $('.chats .chats_inner').append('' +
                '<span id="intruccion2" class="instruccion_buho buho_massage2">\n' +
                texto_final.replace('p2', personaje2) +
                '</span>');
                $('#perso').text(personaje2);
                ho_talk = 2;
                quitar_buho();
                $('#text').hide();
                $('#respuestas_p1').hide();
                $('#respuestas_p2').show();
                $('#sender').addClass('active');
            }
        });
        $('#sender').click(function () {
            if(buho == 1){
                poner_buho();
                  $('#texto1').hide();
                  texto_final = $('#txt2').text();
                  texto_final = texto_final.replace('p1', personaje1);
                  $('#txt2').text(texto_final.replace('p2', personaje2));
                  $('#texto2').show();
                  buho = 2;
            }else if(buho == 2){
                $('#texto2').hide();
                texto_final = $('#txt3').text();
                $('#txt3').text(texto_final.replace('p2', personaje2));
                $('#texto3').show();

                $('#instruccion_personaje2').show();
                buho = 3;
            }else if(buho == 3){
                poner_buho();
                  $('#texto3').hide();
                  texto_final = $('#txt4').text();
                  texto_final = texto_final.replace('p1', personaje1);
                  $('#txt4').text(texto_final.replace('p2', personaje2));
                  $('#texto4').show();
                  buho = 4;
            }else if(buho == 4){
                $('#texto4').hide();
                texto_final = $('#txt5').text();
                texto_final = texto_final.replace('p1', personaje1);
                $('#txt5').text(texto_final.replace('p2', personaje2));
                $('#texto5').show();
                $('#instruccion').show();
                buho = 5;
            }else if(buho == 5){
                $('#texto5').hide();
                texto_final = $('#txt6').text();
                texto_final = texto_final.replace('p1', personaje1);
                $('#txt6').text(texto_final.replace('p2', personaje2));
                $('#texto6').show();
                $('#instruccion_personaje2').show();
                $('#respuestas_p1').hide();
                buho = 6;
            }else if(buho == 6){
                $('#instruccion').show();
                $('#respuestas_p2').hide();
                $('#text').show();
                $('#perso').text(personaje1);
                buho = 7;
            }else if(buho == 7){
                $('#instruccion_personaje2').show();
                $('#perso').text(personaje2);
                buho =8;
            }
            else if(buho == 8){
                $('#instruccion').show();
                $('#perso').text(personaje1);
                buho =7;
            }

        });
        $('#p2').click(function () {
            $('.caja_chat .swicher .tooltip span').html( personaje2 );
            $('#instruccion_personaje2').hide();
            if(buho <= 6){
                poner_buho();
            }

        });
        var texto_p = $('#parrafo2').text();
        texto_p = texto_p.replace('P1', personaje1);
        $('#parrafo2').text(texto_p.replace('P2', personaje2));
        $('#respuestas_p1').change(function () {
    	mensaje = $('#respuestas_p1 option:selected').text();
        });
        $('#respuestas_p2').change(function () {
    	mensaje = $('#respuestas_p2 option:selected').text();
        });
	/*termina codigo daniel rebolledo*/

	function quitar_buho(demora){
		$('.chat_massage, #chat_overlay').delay(demora).slideToggle();
	}
	function poner_buho(){

		$('.chat_massage, #chat_overlay').delay(2).slideToggle();

	}
	/*function next_massage(){
		//$('.chat_massage h4').hide();
		$('.massage_inner h4').each(function(){
			if( $(this).attr('data-rel')==bh4 ){
				$(this).addClass('active');
				
				console.log( bh4_length , 'bh4_length bh4' , bh4 );
				
				buho_dice=$(this).find('span.block').html();

				//console.log(buho_dice,'---------buho dice');

				$('textarea.chat').attr("value", buho_dice);

				$(this).find('a.chat_continue').click(function(){
					$('.massage_inner h4').removeClass('active');
					peronnaje=personaje3;
					quitar_buho(0);
					mensaje = buho_dice;	
					aparece_chat('owl');
					if( bh4 > bh4_length ){
							//console.log('--->no hay mas chats esperando')
							prev_massage();
							
					}			
				})
				
				$(this).find('a.chat_cambio').click(function(){
					//$('.massage_inner h4').removeClass('active');

					$(this).parent().find('span:first').addClass('none')
					$(this).parent().find('span:last').removeClass('none')

					$(this).parent().find('a.bot:first').addClass('none')
					$(this).parent().find('a.bot:last').removeClass('none')

					cambio_personaje();
					
					
        			
				})

			}
		})
		bh4++;

		

	}
	function prev_massage(){
		$('.chat_massage img').addClass('none');
		
		console.log('UPppppppp prev_massage');
		//$('.chat_massage h4').hide();

		$('.massage_inner h5').removeClass('active');
		
		$('.massage_inner h5').each(function(){

			if( $(this).attr('data-rel') == bh5 ){
				
				quitar_buho(1500);

				$(this).addClass('active');
				
				console.log( bh5_length , 'bh5_length bh5' , bh5 );
				
				buho_dice = $(this).find('span.block').html();

				console.log(buho_dice,' -------- h5 1-2')

				mensaje = buho_dice;

				$('textarea.chat').delay(2000).fadeIn(function(){

					aparece_chat('own');						
					
					peronnaje = personaje2;

					console.log(peronnaje, 'Rio deberia ser---------- peronnaje');
					
					$('.caja_chat .swicher .tooltip span').html( personaje2 );									
				})
				//console.log(buho_dice,'---------buho dice');



				$(this).find('a.chat_cambio').click(function(){
					//$('.massage_inner h4').removeClass('active');

					$(this).parent().find('span:first').addClass('none')
					$(this).parent().find('span:last').removeClass('none')

					$(this).parent().find('a.bot:first').addClass('none')
					$(this).parent().find('a.bot:last').removeClass('none')

					cambio_personaje();			
					
        			
				})

				$('textarea.chat').attr("value", buho_dice);

				$(this).find('a.chat_continue').click(function(){
					
					$('.massage_inner h5').removeClass('active');

					quitar_buho(0);
					
					//cambio_personaje();
					
					mensaje = buho_dice;
					
					aparece_chat();	

					$('textarea.chat').delay(3000,function(){
						prev_massage();
					})


				})
				
				

			}
		})
		bh5++;
	}

	$('#respuestas_p1').change(function(){
		
		cambio_personaje();

		peronnaje = personaje1;

		$('.caja_chat .swicher .tooltip span').html( personaje1 );

		mensaje_select=$(this).val();

		respuesta_select(mensaje_select)
		
		
	})
	$('#respuestas_p2').change(function(){
		
		//cambio_personaje();

		peronnaje = personaje2;

		$('.caja_chat .swicher .tooltip span').html( personaje2 );

		mensaje_select=$(this).val();

		respuesta_select(mensaje_select)
		
		
	})

	function respuesta_select(men_sele){


		console.log(peronnaje, 'Arbol deberia ser---------- peronnaje');
		
		mensaje=men_sele;

		aparece_chat();	

		quitar_buho(0);

		cambio_personaje();

		prev_massage();
	}

	function cambio_personaje(){
		if( $('.caja_chat .swicher .tooltip span').html() != personaje2 ){
			$('.caja_chat .swicher .tooltip span').html( personaje2 );

			//console.log('-----------> .tooltip personaje2', personaje2);
		} else if ( $('.caja_chat .swicher .tooltip span').html() !=personaje1 ){
			$('.caja_chat .swicher .tooltip span').html( personaje1 );
			//console.log('-----------> .tooltip personaje1', personaje1);
		}	
	}
	next_massage();

	function quitar_buho(demora){
		$('.chat_massage, #chat_overlay').delay(demora).slideToggle();
	}

	function poner_buho(){
		//$('.chat_massage, #chat_overlay').delay(3000).slideToggle();
	}

	
	$('.disable').click(function(e){			
		if($('.bot').hasClass('disable')){
			e.preventDefault();
			alert('POR FAVOR AGREGUE 2 PERSONAJE DEL SUEÑO, PARA CONTINUAR')
			//alert('tiene class');
		}else{
			//alert('class removida');
		}		
	})*/





	/*$('#chat_continue').click(function(e){
		e.preventDefault();
		$('#chat_buho').fadeOut(function(){
			$('#chat_p1').fadeIn();
			$('.p2_massage').css('display','inline-block');
		})
		$('.online').addClass('active');
	})*/
	/*$('#chat_responder').click(function(e){
		e.preventDefault();
		alert('trigger')

	})*/

	/*$('#chat_continue_2').click(function(e){
		e.preventDefault();
		$('#chat_cambio').fadeOut();
		$('#chat_p2').fadeIn();


		$('.online').removeClass('active').delay(2000).fadeIn(function(){
			$(this).find('span').fadeToggle(0,function(){
				$('.online').addClass('active');
			});

		})

		//$('.p2_massage').css('display','inline-block');
		//$('.online').addClass('active');
	})*/


					
	/*$('#respuestas_p2').change(function(){

		mensaje=$('#respuestas_p2').val();
		$('#chats').append('<span class="p1_massage new_massage">P2 dice:</span>');
		$('.chats span:last').fadeIn(1000);
		$("#chats").animate({ scrollTop: $(document).height() }, 1000,function(){
			$('#chats').append('<span class="p1_massage">'+mensaje+'</span>');
			$('.chats span:last').fadeIn(1000);
			$("#chats").animate({ scrollTop: $(document).height() }, 1000);

		});

		$('.chat_massage, #chat_overlay').delay(1000).fadeOut();
		
	})*/


	
	$('.agregar img').click(function(e){
		$('.disable').removeClass('disable');		
		//alert('bloquear()');
		//return true;
	})
	$('.bot.disable').click(function(){
		//alert('POR FAVOR AGREGUE 2 PERSONAJE DEL SUEÑO, PARA CONTINUAR')	
	})
	
	$('.ayuda').click(function(){			
		$('.foo-help').slideToggle();			
	})
	$('.foo-help i').click(function(){			
		$('.slideDown.s5').slideUp(500);			
	})
	
	$('.slideDown.s5').delay(1000).slideToggle().delay(4000).slideUp(500, function(){
		$('.foo-help i, .ayuda').addClass('active')
	});
	
	$('.wait').click(function(){
		if( $(this).hasClass('disabled') ){
			alert('Por Favor Indicar si tu sueño fue Agradable o Desagradable')	
		}else{
			continuar();
		}
	});
	
	$('a.cancelar').click(function(){
		$('.sure').slideUp();
	});
	
	
	/*$('.caja_chat textarea').change(function(){
		alert('cambió')		
	})*/
	
	$('.caja_chat textarea').bind('input propertychange', function() {
		mensaje= $('.caja_chat textarea').val();
      	if(mensaje=='' || mensaje==' ' || mensaje=='   ' | mensaje=='    '){
			$('#sender').removeClass('active');
		}else{
			$('#sender').addClass('active');
		}
	});
	
	
	$('.opciones .agradable').click(function(){
		$('.rangeselector').animate({
				'left':'100%'
		});	
		$('.opciones').removeClass('todos desa');			
		if( $('.opciones').hasClass('agra') ){}else{
			$('.opciones').addClass('agra');
			linked='agradable';	
		}
		if( $('.wait').hasClass('disabled') ){
			$('.wait').removeClass('disabled');
		}	
	})
	$('.opciones .desagradable').click(function(){
		$('.rangeselector').animate({
				'left':'0%'
		});
		$('.opciones').removeClass('todos agra');			
		if( $('.opciones').hasClass('desa') ){}else{
			$('.opciones').addClass('desa');
			linked='desagradable';	
		}
		if( $('.wait').hasClass('disabled') ){
			$('.wait').removeClass('disabled');
		}	
	})
	
	/*$('.caja_chat textarea').focus(function(){
		$("#chats").addClass('active');
	})
	$('.caja_chat textarea').focusout(function(){
		$("#chats").removeClass('active');
	})*/
	$('#sender').click(function(){
		//console.log(buho_dice);

		if(mensaje == ''){
			mensaje= $('.caja_chat textarea').val();
		}


		if(mensaje=='' || mensaje==' ' || mensaje=='   ' | mensaje=='    '){
			mensaje='...'
		}				
		$('.caja_chat textarea').val('').focusout() //focus();

		if(bh4 <= bh4_length){
			
			//console.log(bh4, 'bh4', bh4_length, 'bh4_length <------------');

			next_massage();
			
			quitar_buho(2000);

		}else if(bh5 <= 1){
			
			//console.log('--->no hay mas chats prev_massage();')
			//prev_massage();

		}else{
			//console.log('SEGIRRRRRRR')
		}
		aparece_chat();
	});

	function aparece_chat(quien_habla){

		//console.log('Mensaje Nuevo', personaje3);


		if( quien_habla=='owl' ){
			$('#chats .chats_inner').append('<span class="buho_massage">'+mensaje+'</span>');

			$('.chats .chats_inner span:last').prepend('<b>'+personaje3+' dice:</b>'); //.css('content', personaje3);

		}else{
			
			peronnnaje = $('.caja_chat .swicher .tooltip span').html();

			console.log(peronnnaje , peronnaje, 'peronnnaje - peronnaje')

			/*if (peronnnaje == peronnaje) {
				$('#chats .chats_inner').append('<span>'+mensaje+'</span>')

			} else {*/

			// daniel
            if(ho_talk == 1){
                $('#chats .chats_inner').append('<span class="per1">'+mensaje+'</span>');
            }else if(ho_talk==2){
                $('#chats .chats_inner').append('<span class="per2">'+mensaje+'</span>')
            }
            //daniel
			//$('#chats .chats_inner').append('<span class="diferente">'+mensaje+'</span>')
			peronnaje = peronnnaje;

			if( quien_habla=='own' ){ }else{
				$('.chats .chats_inner span:last').prepend('<b>'+peronnaje+' dice:</b>');
			}
			//}			
		}
		$('.chats .chats_inner span:last').fadeIn(1000);

		/*var p = $('.chats .chats_inner span:last');
		var offset = p.offset() ;
		console.log( p.offset() );


		console.log(  "--->left: " + offset.left + ", top: " + offset.top );*/

		chat_leng=$('.chats .chats_inner').height();

		//console.log(chat_leng, 'chat_leng')

		$("#chats").animate({ scrollTop: chat_leng }, 1000);
		
		mensaje='';

		$('#sender').removeClass('active');
	}

	$('#menu i.fa-bars, #menu_overlay, #menu_flotante .menu.fa-long-arrow-left, #menu_lang a' ).click(function(){
		menu()
	})
	function menu(){		

		if ($('#menu_flotante').hasClass('active')) {
			$('#menu_overlay').removeClass('active')
			$('#menu_flotante').removeClass('active')
		} else {
			$('#menu_flotante').addClass('active');
			$('#menu_overlay').addClass('active');
		}
	}
	$('.logo_inicio').click(function() {

		if( $('#inicio_sesion').hasClass('active') ){}else{
			$('#inicio_sesion').addClass('active');

		}
	})
	function aparece_p1(){
		alert('aparece p1');
		
	}



	
});

	

function berificaStado(){
	line = $('.rangeouter').css('width');
	line_in = parseInt(line);
	left_p =$('.rangeselector').css('left');
	left_in = parseInt(left_p);
	
	porsentaje =left_in / line_in * 100;
	
	//console.log(line_in,  left_in , porsentaje);
	
	if( porsentaje>=45 && porsentaje <=55 ){
		console.log('todos');
		$('.opciones').removeClass('desa agra');
		if( $('.opciones').hasClass('todos') ){}else{
			$('.opciones').addClass('todos');
		}	
					
		if( $('.wait').hasClass('disabled') ){}else{
			$('.wait').addClass('disabled');
		}			
	}else if(porsentaje<45){
		console.log('<---Desagradable');
		$('.opciones').removeClass('todos agra');			
		if( $('.opciones').hasClass('desa') ){}else{
			$('.opciones').addClass('desa');
			linked='desagradable';	
		}				
					
		if( $('.wait').hasClass('disabled') ){
			$('.wait').removeClass('disabled');
		}	
	}else if(porsentaje>55){
		console.log('--->Agradable')
		$('.opciones').removeClass('desa todos');
		if( $('.opciones').hasClass('agra') ){}else{
			$('.opciones').addClass('agra');
			linked='agradable';	
				
		}			
					
		if( $('.wait').hasClass('disabled') ){
			$('.wait').removeClass('disabled');
		}	
	}
}
function continuar(){	
	$('.sure.'+linked).slideDown();	
	//alert(linked)	
}


