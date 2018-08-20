$(document).ready(function($) {

	$('#lang_chooser').click(function(){
    	$('#menu_lang').slideToggle();
	});
	$('#lan_ENGLISH').parent().trigger('click');

	console.log($('#lan_ENGLISH').parent() );
	personaje_added=0;
	editando=0;
	ver_personaje=1;
	personaje='P1';

	
	bh4=1;
	bh5=1;

	demorado=2

	bh4_length=$('.massage_inner h4').length;
	bh5_length=$('.massage_inner h5').length;

	n=1



	to_user= $('#secuencia_chat li:first').attr('data-user');
	to_onliner= $('#secuencia_chat li:first').attr('data-online');

	onliner();



	/*Codigo daniel rebolledo*/
    var mensaje = '';
    //var buho = 1;
    var personaje = 1;
    var personaje1 = localStorage.getItem('p1');
    var personaje2= localStorage.getItem('p2');
	var texto_final = '';
	var texto_sub = '';
    var ho_talk = 0;
    var lenguaje = localStorage.getItem('idioma');
    var tx_boton = '';
    var tx_boton2 = '';
    var tx_personaje = '';
	var historial = '';
	$('#sub_buho1').hide();
	$('#sub_buho2').hide();
	$('#sub_buho3').hide();
	$('#sub_buho4').hide();
	$('#sub_buho5').hide();
	$('#sub_buho6').hide();
	$('#instruccion3').hide();
	$('#instruccion4').hide();
	$('#instruccion5').hide();
	$('#instruccion6').hide();
	$('#instruccion7').hide();
	$('#respuestas_p1').hide();
	$('#respuestas_p2').hide();
	var instru = 1;
	var instru_text = '';
	historial = $('#historial').html();
	/*el historial es cuando ya se ha hablado por el chat y guarda la informacio
	* aca en el if(historial) validamos que haya historiam y empezamos a acomodadr
	* todo en base a la secuencia.
	* */
	if(!$('#his_per1').html()=='' && !$('#his_per2').html()==''){
		console.log("hay personajes");
		personaje1 = $('#his_per1').html();
		personaje2 = $('#his_per2').html();
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
    	$('#perso').text(personaje3);
    	console.log('hola historial '+personaje3);
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
			ho_talk = 2;
			$('.caja_chat .swicher .tooltip span').html(personaje1);
			$('#text').hide();
			$('#respuestas_p1').show();
            $('#sender').addClass('active');
            $('#perso').text(personaje2);
		}else if(buho == 6){
			$('#personaje_activo').text(personaje2);
			ho_talk = 1;
			$('.caja_chat .swicher .tooltip span').html(personaje2);
			$('#text').hide();
			$('#respuestas_p2').show();
            $('#sender').addClass('active');
            $('#perso').text(personaje1);
		}else if(buho == 7){
			$('#perso').text(personaje2);
			$('#personaje_activo').text(personaje1);
			$('.caja_chat .swicher .tooltip span').html(personaje1);
		}
		else if(buho == 8){
			$('#personaje_activo').text(personaje2);
			$('.caja_chat .swicher .tooltip span').html(personaje2);
			$('#perso').text(personaje1);
		}

	}else{

    	$('#instruccion').show();
    	$('span.personaje1').html(personaje1)
    	$('#texto1').show();
	}

    tx_boton = $('#p1').text();
    $('#p1').text(tx_boton.replace('p1', personaje1));

    tx_boton2 = $('#p2').text();
    $('#p2').text(tx_boton2.replace('p2', personaje2));

    tx_boton3 = $('#p3').text();
    $('#p3').text(tx_boton3.replace('p1', personaje1));

    tx_boton4 = $('#p4').text();
    $('#p4').text(tx_boton4.replace('p2', personaje2));

    tx_boton5 = $('#p5').text();
    $('#p5').text(tx_boton5.replace('p1', personaje1));

    tx_boton6 = $('#p6').text();
    $('#p6').text(tx_boton6.replace('p2', personaje2));

    tx_boton7 = $('#p7').text();
    $('#p7').text(tx_boton7.replace('p1', personaje1));


	texto_final = $('#txt1').text();
	texto_sub = $('#sub_buho1').text();
    $('#txt1').text(texto_final.replace('p1', personaje1));
    tx_personaje = $('#texto8').text();

    cambiar_pers()

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


    
    
	

	
	$('#secuencia_chat button.btn_inst, #secuencia_chat button.btn_buho').click(function () {

		$('#secuencia_chat li').removeClass('active');		
		n++;

    })

    $('#p1, #p2, #p3, #p4').click(function() {
        next_massage(0);
        onliner();

    });
    $('#p3').click(function() {
    	$('#text').hide();
		$('#respuestas_p1').show();
		$('#respuestas_p2').hide();
		$('#sender').addClass('active');
	});

    $('#p4').click(function() {
    	$('#text').hide();
		$('#respuestas_p1').hide();
		$('#respuestas_p2').show();
		$('#sender').addClass('active');
	});

    $('#p5').click(function() {
    	$('#secuencia_chat li').removeClass('active');	
    	ho_talk = $(this).attr('data-next');	
		n=12;
    })

    $('#p6').click(function() {
    	$('#secuencia_chat li').removeClass('active');
    	ho_talk = $(this).attr('data-next');		
    	n=11;
    })

    

    var texto_p = $('#parrafo2').text();
    texto_p = texto_p.replace('P1', personaje1);
    $('#parrafo2').text(texto_p.replace('P2', personaje2));

    $('#respuestas_p1').change(function () {
		mensaje = $('#respuestas_p1 option:selected').text();

    });

    $('#respuestas_p2').change(function () {
		mensaje = $('#respuestas_p2 option:selected').text();
    });
    cambiar_pers();	

	/*termina codigo daniel rebolledo*/

	function quitar_buho(demora){
		$('.chat_massage, #chat_overlay').delay(2).slideToggle();
	}
	function poner_buho(demora){
		$('.chat_massage, #chat_overlay').delay(demora).slideToggle();

	}
	


	
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

		if( $('#right_box').hasClass('active') ){
			$('#right_box').removeClass('active');	

		} else {
			$('#right_box').addClass('active');	
			
		}
	})
	/*$('.foo-help i').click(function(){			
		//$('.slideDown.s5').removeClass('active');
	})*/
	$('.fa-angle-down').click(function(){
		$('.ayuda').trigger('click');	
		$('.ayuda').addClass('active');
	})

	if( $('#right_box').hasClass('s5') ){

		//console.log(  $('#right_box').attr('class'), "$('#right_box').class" );

		/*$('#right_box').fadeIn().delay(300, function(){	
			$('.ayuda').trigger('click');
			//$('#right_box').addClass('active');
		})*/

		$('.ayuda').delay(300,function(){
			console.log('ayuda1');
			$('.ayuda').trigger('click');	
		});
		


	}

	/*$('.slideDown.s5').delay(300).addClass('active').delay(2000).removeClass('active', function(){
		$('.foo-help i, .ayuda').addClass('active');
	});*/


	
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
			

			if( editando==2 ){ 
				console.log('estamos en Editando 2')
				new_per2=$('#personaje2').val();
				$('#agregado2').html( new_per2 );

				editando=0;

			} else {

				if( editando==1 ){ 
					console.log('estamos en Editando 1')
					new_per1=$('#personaje1').val();
					$('#agregado1').html( new_per1 );

					editando=0;	

				} else {

					personaje_added++;

					if( $('.agregar' ).hasClass('agre1') ){
						console.log('estamos en agre2')
						$('.agregar' ).removeClass('agre1')
						$('.agregar' ).addClass('agre2');
						new_per2=$('#personaje2').val();
						$('#agregado2').html( new_per2 );
						$('#personaje_next').removeClass('disable');
					} else {
						console.log('estamos en agre1')
						$('.agregar' ).addClass('agre1');
						new_per1=$('#personaje1').val();
						$('#agregado1').html( new_per1 );
					}
				}
			}
		}
	});


	$('#agregado1').click(function(){
		//$('#personaje1').attr('placeholder',new_per1).val('');
		$('#personaje1').show();
		$('#personaje2').hide();

		editando=1;

		$('.add').slideDown();
	})
	$('#agregado2').click(function(){
		//$('#personaje2').attr('placeholder',new_per2).val('');
		$('#personaje2').show();
		$('#personaje1').hide();

		editando=2;

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
		$('#right_box').removeClass('active');
		$('.ayuda').addClass('active');

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
		$('#right_box').removeClass('active');
		$('.ayuda').addClass('active');
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

            next_massage(demorado);

            aparece_chat();

            $('#text').show();
			$('#respuestas_p1').hide();
			$('#respuestas_p2').hide();
			$('#sender').removeClass('active');

			onliner();
            
        }
	});

	$('.btn_buho').click(function () {
        write_text = $(this).parent().find('.write_text .write_cont').html();

        ho_talk = $(this).attr('data-next');

        console.log(write_text,' - - - - - - write_text - ho_talk - - - - - ', ho_talk);
        
        $('.chats .chats_inner').append(' ' +'<span class="new_chat instruccion_buho">\n' + write_text + '</span>');

        last_chat();

        if(intermediate_masaje != undefined){
        	//alert('va mensaje');
        	$('#chats .chats_inner').append('<span class="new_chat per2"> '+ inter_mass +'</span>');

        	asked=$('#perso').html();

        	if(lenguaje == 'EN'){
				//console.log('******* aqui hablo yo '+ peronnaje);
				$('.chats .chats_inner .new_chat:last').prepend('<b>'+asked+' says:</b>');
			}else{
				$('.chats .chats_inner .new_chat:last').prepend('<b>'+asked+' dice:</b>');
			}
            

            //console.log('aqui hablo yo2 '+ peronnaje);
        }
 		/*	$('#text').show();
		$('#respuestas_p1').hide();
		$('#respuestas_p2').hide();*/
    });

    function next_massage(vel){

		velo = vel+'s';

    	$('#secuencia_chat .buhito .buhito_dice, #secuencia_chat .buhito .overlay, #secuencia_chat .buhito img, #secuencia_chat .instruccion.overlay').css('transition-delay', velo);

    	$('#secuencia_chat li:nth-child('+n+')').addClass('active');

    	/* //////////////////// */

    	to_user= $('#secuencia_chat li:nth-child('+n+')').attr('data-user');
		to_onliner= $('#secuencia_chat li:nth-child('+n+')').attr('data-online');

    	intermediate_masaje=$('#secuencia_chat li:nth-child('+n+')').attr('data-pregunta');

    	inter_mass=$('#secuencia_chat li:nth-child('+n+')').find('.pregunta_personaje').html();

        


    }

    function onliner(){
    	console.log('-------- Next Message - ', n,'|',to_user,'to_user |',to_onliner,'to_onliner |');
    	
    	$('#persona_linea').attr('class','').addClass(to_user);

    	$('#perso').html(to_user);

    	$('#personaje_activo').html(to_onliner);
    	
    }

	function aparece_chat(quien_habla){

		//console.log('--------- ******* Mensaje Nuevo', personaje3);


		if( quien_habla=='owl' ){
			$('#chats .chats_inner').append('<span class="buho_massage">'+mensaje+'</span>');
			$('.chats .chats_inner span:last').prepend('<b>'+personaje3+' dice:</b>');

		}else{
			
			peronnnaje = $('#personaje_activo').html();

			//console.log(peronnaje, 'peronnnaje - peronnaje');
			//console.log(peronnnaj , peronnaje, 'peronnnaje - peronnaje')

			

			// daniel
            
            if(ho_talk == 1){
                $('#chats .chats_inner').append('<span class="new_chat per1"> '+ mensaje +'</span>');
                console.log('aqui hablo yo2 '+ peronnaje);
            }else if(ho_talk==2){
                $('#chats .chats_inner').append('<span class="new_chat per2"> '+ mensaje +'</span>');
                console.log('aqui hablo yo2 '+ peronnaje);
            }
            //daniel
			
			//$('#chats .chats_inner').append('<span class="diferente">'+mensaje+'</span>')
			
			peronnaje = peronnnaje;
            
            //console.log('soy un mensajito: ' +mensaje);
            lenguaje = localStorage.getItem('idioma');
			
			if( quien_habla=='own' ){ }else{
				if(lenguaje == 'EN'){
					//console.log('******* aqui hablo yo '+ peronnaje);
					$('.chats .chats_inner .new_chat:last').prepend('<b>'+peronnaje+' says:</b>');
				}else{
					$('.chats .chats_inner .new_chat:last').prepend('<b>'+peronnaje+' dice:</b>');
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
		//console.log('last_chat()')
		
		chat_leng=$('.chats .chats_inner').height();

		$("#chats").animate({ scrollTop: chat_leng }, 1000);
		$('#chats span:last').fadeIn(1000);
	}

	$('#menu i.fa-bars, #menu_overlay, #menu_flotante .menu.fa-chevron-left, #menu_lang a' ).click(function(){
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

	$('.logo_inicio').fadeIn().delay('2500').fadeIn(function(){
		$(this).trigger('click');
	})
	
	function aparece_p1(){
		alert('aparece p1');
		
	}
	cambiar_pers();

	function cambiar_pers(){
		console.log('deberia de cambiar');
		$('.per_p1').html(personaje1)
		$('.per_p2').html(personaje2)
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

	$('#right_box').removeClass('active');
	$('.ayuda').addClass('active');
}
function continuar(){	
	$('.sure.'+linked).slideDown();	
	//alert(linked)	
}



