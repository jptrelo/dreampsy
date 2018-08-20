$(document).ready(function($) {
	ver_personaje=1;
	personaje='P1';
	$('.disable').click(function(e){			
		if($('.bot').hasClass('disable')){
			e.preventDefault();
			alert('POR FAVOR AGREGUE 2 PERSONAJE DEL SUEÑO, PARA CONTINUAR')
			//alert('tiene class');
		}else{
			//alert('class removida');
		}		
	})
	$('#chat_continue').click(function(e){
		e.preventDefault();
		$('#chat_buho').fadeOut(function(){
			$('#chat_p1').fadeIn();
			$('.p2_massage').css('display','inline-block');
		})
		$('.online').addClass('active');
	})
	/*$('#chat_responder').click(function(e){
		e.preventDefault();
		alert('trigger')

	})*/

	$('#chat_continue_2').click(function(e){
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
	})

	$('#respuestas_p1').change(function(){
		mensaje=$('#respuestas_p1').val();
		$('#chats').append('<span>'+mensaje+'</span>')
		$('.chats span:last').fadeIn(1000);
		$("#chats").animate({ scrollTop: $(document).height() }, 1000);
		$('#chat_p1').fadeOut(function(){
			$('#chat_cambio').fadeIn().delay(500).fadeIn(function(){
				mensaje='Hola ahora debes posicionarte como si fueras P2';
				$('#chats').append('<span class="buho_massage">'+mensaje+'</span>')
				$('.chats span:last').fadeIn(1000);
				$("#chats").animate({ scrollTop: $(document).height() }, 1000);
				$('#chat_p1').fadeOut(function(){
					$('#chat_cambio').fadeIn();
				})				
			})
		})
	})
	$('#respuestas_p2').change(function(){

		mensaje=$('#respuestas_p2').val();
		$('#chats').append('<span class="p1_massage new_massage">P2 dice:</span>');
		$('.chats span:last').fadeIn(1000);
		$("#chats").animate({ scrollTop: $(document).height() }, 1000,function(){
			$('#chats').append('<span class="p1_massage">'+mensaje+'</span>');
			$('.chats span:last').fadeIn(1000);
			$("#chats").animate({ scrollTop: $(document).height() }, 1000);

		});

		$('.chat_massage, #chat_overlay').delay(1000).fadeOut();
		
	})
	
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
		mensaje= $('.caja_chat textarea').val();
		if(mensaje=='' || mensaje==' ' || mensaje=='   ' | mensaje=='    '){
			mensaje='...'
		}				
		$('.caja_chat textarea').val('').focus();
		$('#chats').append('<span>'+mensaje+'</span>')
		$('.chats span:last').fadeIn(1000);
		$("#chats").animate({ scrollTop: $(document).height() }, 1000);
		mensaje='';
		$('#sender').removeClass('active');
	});

	$('#menu i.fa-bars, #menu_overlay, #menu_flotante .menu.fa-long-arrow-left, #menu_lang a' ).click(function(){
		menu()
	})
	function menu(){		

		if ( $('#menu_flotante').hasClass('active')){
			$('#menu_overlay').removeClass('active')
			$('#menu_flotante').removeClass('active')
		}else{
			$('#menu_flotante').addClass('active');
			$('#menu_overlay').addClass('active');
		}
	}
	$('.logo_inicio').click(function(){
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


