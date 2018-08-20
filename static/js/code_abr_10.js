$(document).ready(function($) {

	$('#lang_chooser').click(function(){
    	$('#menu_lang').slideToggle();
	});
	$('#lan_ENGLISH').parent().trigger('click');

	console.log($('#lan_ENGLISH').parent() );
	personaje_added=0;

	ver_personaje=1;
	personaje='P1';
	
	bh4=1;
	bh5=1;

	demorado=3500

	bh4_length=$('.massage_inner h4').length;
	bh5_length=$('.massage_inner h5').length;

	/*Codigo daniel rebolledo*/
	    var mensaje = '';
	   //var buho = 1;
	    var personaje = 1;
	    var personaje1 = localStorage.getItem('p1');
        var personaje2= localStorage.getItem('p2');
        var texto_final = '';
        var ho_talk = 0;
        var lenguaje = localStorage.getItem('idioma');
        var tx_boton = '';
        var tx_boton2 = '';
        var tx_personaje = '';
		var historial = '';
		$('#respuestas_p1').hide();
        $('#respuestas_p2').hide();
		historial = $('#historial').text();
		/*el historial es cuando ya se ha hablado por el chat y guarda la informacio
		* aca en el if(historial) validamos que haya historiam y empezamos a acomodadr
		* todo en base a la secuencia.
		* */
		if(!$('#his_per1').text()=='' && !$('#his_per2').text()==''){
			console.log("hay personajes");
			personaje1 = $('#his_per1').text();
			personaje2 = $('#his_per2').text();
		}
        if(historial){
        	$('.chats').append(historial);
        	personaje1 = $('#his_per1').text();
        	personaje2 = $('#his_per2').text();
        	buho = parseInt($('#his_buho').text());
        	console.log("holis holis holis "+ buho);
			console.log('historial '+ personaje1+' '+personaje2);
        	$('#instruccion').hide();
        	$('#texto1').hide();
			if(buho == 1){
				$('#personaje_activo').text(personaje1);
				ho_talk = 1;
				$('.caja_chat .swicher .tooltip span').html(personaje1);
			}else if(buho == 2){
				$('#personaje_activo').text(personaje1);
				$('.caja_chat .swicher .tooltip span').html(personaje1);
				ho_talk = 1;
			}else if(buho == 3){
				$('#personaje_activo').text(personaje2);
				$('.caja_chat .swicher .tooltip span').html( personaje2);
				ho_talk = 2;
			}else if(buho == 4){
				$('#personaje_activo').text(personaje2);
				$('.caja_chat .swicher .tooltip span').html(personaje2);
				ho_talk = 2;
			}else if(buho == 5){
				$('#personaje_activo').text(personaje1);
				ho_talk = 1;
				$('.caja_chat .swicher .tooltip span').html(personaje1);
				$('#text').hide();
				$('#respuestas_p1').show();
                $('#sender').addClass('active');
			}else if(buho == 6){
				$('#personaje_activo').text(personaje2);
				ho_talk = 2;
				$('.caja_chat .swicher .tooltip span').html(personaje2);
				$('#text').hide();
				$('#respuestas_p2').show();
                $('#sender').addClass('active');
			}else if(buho == 7){
				$('#personaje_activo').text(personaje1);
				$('.caja_chat .swicher .tooltip span').html(personaje1);
			}
			else if(buho == 8){
				$('#personaje_activo').text(personaje2);
				$('.caja_chat .swicher .tooltip span').html(personaje2);
			}

		}else{
        	$('#instruccion').show();
        	$('#texto1').show();
		}
        tx_boton = $('#p1').text();
        $('#p1').text(tx_boton.replace('p1', personaje1));
        tx_boton2 = $('#p2').text();
        $('#p2').text(tx_boton2.replace('p1', personaje2));
        tx_boton2 = $('#p2').text();
        $('#p2').text(tx_boton2.replace('p2', personaje2));
	    texto_final = $('#txt1').text();
	    $('#txt1').text(texto_final.replace('p1', personaje1));
	    tx_personaje = $('#texto8').text();

	    console.log('hola '+texto_final);
	    $('#texto2').hide();
	    $('#texto3').hide();
	    $('#texto4').hide();
	    $('#texto5').hide();
	    $('#texto6').hide();
	    $('#texto7').hide();
	    $('#texto8').hide();
	    $('#historial').hide();
	    $('#his_per1').hide();
	    $('#his_per2').hide();
	    $('#his_buho').hide();
        $('#instruccion_personaje2').removeClass('active');
        $('.chat_massage').hide();

        $('#instruccio1').hide();
        $('#sender_buho').hide();


        $('.btn_buho').click(function () {
            if(buho == 1){
                $('#instruccio1').text(texto_final.replace('p1', personaje1));
                $('#instruccio1').show();
                $('#perso').text(personaje3);
                $('#persona_linea').attr('class','dreampsy');
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
                $('#perso').text(personaje2);
                $('#persona_linea').attr('class','per2');
                ho_talk = 1;
                // aca hace pregunta el personaje 2
                console.log('... P2')
                $('#chats .chats_inner').append('<span class="per2" style="display: inline;">'+
					tx_personaje.replace('p1', personaje1)+
					'</span>');
				$('.chats .chats_inner span:last').prepend('<b>'+personaje2+' dice:</b>');

                quitar_buho();
                $('#text').hide();
                $('#respuestas_p1').show();
                $('#sender').addClass('active');
                last_chat();

            }
            else if (buho == 6){
                $('.chats .chats_inner').append('' +
                '<span id="intruccion2" class="instruccion_buho buho_massage2">\n' +
                texto_final.replace('p2', personaje2) +
                '</span>');
                $('#perso').text(personaje1);
                $('#persona_linea').attr('class','per1');
                ho_talk = 2;
                // aca hace pregunta el personaje 1
                console.log('... P1')
                $('#chats .chats_inner').append('<span class="per1" style="display: inline;">'+
					tx_personaje.replace('p1', personaje2)+
					'</span>');
				$('.chats .chats_inner span:last').prepend('<b>'+personaje1+' dice:</b>');

                quitar_buho();
                $('#text').hide();
                $('#respuestas_p1').hide();
                $('#respuestas_p2').show();
                $('#sender').addClass('active');
                last_chat();
            }
            $('.caja_chat #text').removeAttr('disabled');
        });
        $('#sender').click(function () {
        	if(mensaje=='' || mensaje==' ' || mensaje=='   ' | mensaje=='    '){	
			}else{
	        	$('.caja_chat #text').attr('disabled','disabled');
	            if(buho == 1){
	                poner_buho(demorado);
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

	                $('#instruccion_personaje2').delay(3500).fadeIn(100,function(){
	                	$(this).addClass('active');
	                })
	                buho = 3;
	            }else if(buho == 3){
	                poner_buho(demorado);
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
	                $('#instruccion').delay(3500).fadeIn(100,function(){
	                	$(this).addClass('active');
	                });
	                buho = 5;
	            }else if(buho == 5){
	                $('#texto5').hide();
	                texto_final = $('#txt6').text();
	                texto_final = texto_final.replace('p1', personaje1);
	                $('#txt6').text(texto_final.replace('p2', personaje2));
	                $('#texto6').show();
	                $('#instruccion_personaje2').delay(3500).fadeIn(100,function(){
	                	$(this).addClass('active');
	                })
	                $('#respuestas_p1').hide();
	                buho = 6;
	            }else if(buho == 6){
	                $('#instruccion').delay(3500).fadeIn(100,function(){
	                	$(this).addClass('active');
	                })
	                $('#respuestas_p2').hide();
	                $('#text').show();
	                $('#perso').text(personaje2);
                $('#persona_linea').attr('class','per2');
	                buho = 7;
	                ho_talk = 2;
	            }else if(buho == 7){
	                $('#instruccion_personaje2').delay(3500).fadeIn(100,function(){
	                	$(this).addClass('active');
	                })
	                $('#perso').text(personaje1);
                	$('#persona_linea').attr('class','per1');
	                buho =8;
	                ho_talk = 1;
	            }
	            else if(buho == 8){
	                $('#instruccion').delay(3500).fadeIn(100,function(){
	                	$(this).addClass('active');
	                })
	                $('#perso').text(personaje2);
                	$('#persona_linea').attr('class','per2');
	                buho =7;
	                ho_talk = 2;
	            }
	        }

        });
        $('#p1').click(function () {
            $('.caja_chat .swicher .tooltip span').html( personaje1 );
            $('#personaje_activo').text(personaje1);
            
            $('#instruccion').removeClass('active');

            console.log('active de #instrucciones quitada');
            
            if(buho <= 6){
                poner_buho(0);
            }

            $('#chat_overlay').addClass('active');
            $('#chat_overlay').hide();

            $('.caja_chat #text').removeAttr('disabled');

        });
        $('#p2').click(function () {
            $('.caja_chat .swicher .tooltip span').html( personaje2 );
            $('#instruccion_personaje2').removeClass('active');
            $('#personaje_activo').text(personaje2);
            if(buho <= 6){
                poner_buho(0);
            }
            $('.caja_chat #text').removeAttr('disabled');
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
		$('.chat_massage, #chat_overlay').delay(2).slideToggle();
	}
	function poner_buho(demora){
		$('.chat_massage, #chat_overlay').delay(demora).slideToggle();

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


	
	$('.agregar img').click(function(){
		
		console.log(personaje_added,'personaje_added');	
		//$('.personaje.disable').removeClass('disable');			
		if( personaje_added<2 ){
			console.log('algo');	
			
			$('.add').slideDown();

			if( $('.add a.add_continue').hasClass('disable') ){}else{
				$('.add a.add_continue').addClass('disable');
			}
			
		}
		console.log(personaje_added,'personaje_added');	

		
	})
	$('.bot.disable').click(function(){
		//alert('POR FAVOR AGREGUE 2 PERSONAJE DEL SUEÑO, PARA CONTINUAR')	
	})
	
	$('.ayuda').click(function(){			
		$('.foo-help').addClass('active');			
	})
	$('.foo-help i').click(function(){			
		$('.slideDown.s5').removeClass('active');
	})
	
	$('.slideDown.s5').delay(300).addClass('active').delay(2000).removeClass('active', function(){
		$('.foo-help i, .ayuda').addClass('active');
	});
	
	$('.wait').click(function(){
		if( $(this).hasClass('disabled') ){
			alert('Por Favor Indicar si tu sueño fue Agradable o Desagradable')	
		}else{
			continuar();
		}
	});
	
	$('.sure a.cancelar').click(function(){
		$('.sure').slideUp();
	});
	
	$('.add a.cancelar').click(function(){
		$('.add').slideUp();
	});
	$('.add a.add_continue').click(function(){
		if( $(this).hasClass('disable') ){ alert('debes anadir tu personaje'); }else{
			$('.add').slideUp(function(){
				$('#personaje1').hide();
				$('#personaje2').show();
			});
			personaje_added++;
			
			if( $('.agregar' ).hasClass('agre1') ){
				$('.agregar' ).removeClass('agre1')
				$('.agregar' ).addClass('agre2')
				new_per=$('#personaje2').val();
				$('#agregado2').html( new_per );

				$('#personaje_next').removeClass('disable');
			}else{
				$('.agregar' ).addClass('agre1')
				new_per=$('#personaje1').val();
				$('#agregado1').html( new_per );


			}
		}
	});


	$('#agregado1').click(function(){
		$('#personaje1').attr('placeholder',new_per).val('');
		$('#personaje1').show();
		$('#personaje2').hide();
		$('.add').slideDown();
	})
	$('#agregado2').click(function(){
		$('#personaje2').attr('placeholder',new_per).val('');
		$('#personaje2').show();
		$('#personaje1').hide();

		$('.add').slideDown();
	})
	$('#personaje1,#personaje2').change(function(){

		if( $(this).val()!='' ){
			$('.add a.add_continue').removeClass('disable');
			console.log('ha cambiado y tiene personaje');
		}else{
			console.log('ha cambiado y no tiene personaje');
			if( $('.add a.add_continue').hasClass('disable') ){}else{
				$('.add a.add_continue').addClass('disable');
			}

		}
	})
	
	
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




		if(mensaje=='' || mensaje==' ' || mensaje=='   ' | mensaje=='    '){
			//mensaje='...'
		}else {

            $('.caja_chat textarea').val('').focusout() //focus();

            if (bh4 <= bh4_length) {

                //console.log(bh4, 'bh4', bh4_length, 'bh4_length <------------');

                next_massage();

                quitar_buho(2000);

            } else if (bh5 <= 1) {

                //console.log('--->no hay mas chats prev_massage();')
                //prev_massage();

            } else {
                //console.log('SEGIRRRRRRR')
            }
            aparece_chat();
            console.log(buho, ho_talk, 'buho, ho_talk')
        }
	});

	function aparece_chat(quien_habla){

		//console.log('Mensaje Nuevo', personaje3);


		if( quien_habla=='owl' ){
			$('#chats .chats_inner').append('<span class="buho_massage">'+mensaje+'</span>');
			$('.chats .chats_inner span:last').prepend('<b>'+personaje3+' dice:</b>');

		}else{
			
			peronnnaje = $('.caja_chat .swicher .tooltip span').html();

			console.log(peronnaje, 'peronnnaje - peronnaje');
			//console.log(peronnnaj , peronnaje, 'peronnnaje - peronnaje')

			/*if (peronnnaje == peronnaje) {
				$('#chats .chats_inner').append('<span>'+mensaje+'</span>')

			} else {*/

			// daniel
            if(ho_talk == 1){

                $('#chats .chats_inner').append('<span class="per1">'+mensaje+'</span>');
                console.log('aqui hablo yo2 '+ peronnaje);
            }else if(ho_talk==2){
                $('#chats .chats_inner').append('<span class="per2">'+mensaje+'</span>');
                console.log('aqui hablo yo2 '+ peronnaje);
            }
            //daniel
			//$('#chats .chats_inner').append('<span class="diferente">'+mensaje+'</span>')
			peronnaje = peronnnaje;
            console.log('soy un mensajito: ' +mensaje);
			if( quien_habla=='own' ){ }else{
				if(lenguaje == 'EN'){
					console.log('aqui hablo yo '+ peronnaje);
					$('.chats .chats_inner span:last').prepend('<b>'+peronnaje+' says:</b>');
				}else{
					$('.chats .chats_inner span:last').prepend('<b>'+peronnaje+' dice:</b>');
				}

			}
			//}			
		}
		$('.chats .chats_inner span:last').fadeIn(1000);

		/*var p = $('.chats .chats_inner span:last');
		var offset = p.offset() ;
		console.log( p.offset() );


		console.log(  "--->left: " + offset.left + ", top: " + offset.top );*/

		//chat_leng=$('.chats .chats_inner').height();
		last_chat()

		//$("#chats").animate({ scrollTop: chat_leng }, 1000);
		
		mensaje='';

		$('#sender').removeClass('active');
	}

	function last_chat(){
		console.log('last_chat()')
		chat_leng=$('.chats .chats_inner').height();

		$("#chats").animate({ scrollTop: chat_leng }, 1000);
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


