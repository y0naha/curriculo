// ---------------------------------------------------------------MARIO--------------------------------------------------------------
var player = document.getElementById('mario')
var powerup = {
    audio: new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_powerup.wav'),
    play: function () {
        this.audio.currentTime = 0;
        this.audio.play()
    }
}

// localização do personagem
function updateElement(element, incx, incy) {
    var x = Number(element.getAttribute('data-x')) + incx
    var y = Number(element.getAttribute('data-y')) + incy

    /*
    // Exemplo de limite de região básico
    if ((x < 0) || (x > 600)) 
      return
    */

    element.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    if (element.classList.contains('mirror'))
        element.style.transform += ' scaleX(-1)'

    if (element.classList.contains('big'))
        element.style.transform += ' scale(2)'

    // Update HTML
    element.setAttribute('data-x', x)
    element.setAttribute('data-y', y)
}

// Quando o usuário pressiona uma tecla
window.addEventListener('keydown', function (e) {
    console.log(e)

    var speed = 10;
    //var speed = (e.ctrlKey ? 20 : 10)

    // Cursor para a direita
    if (e.keyCode == 39) {
        player.classList.add('caminhar')
        player.classList.remove('mirror')
        updateElement(player, +speed, 0)
    }
    // Cursor para a esquerda
    else if (e.keyCode == 37) {
        player.classList.add('caminhar')
        player.classList.add('mirror')
        updateElement(player, -speed, 0)
    }

    if (e.keyCode == 85) {
        player.classList.toggle('big')
        //new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_powerup.wav').play()
        powerup.play(); // fix network lag sound    
        updateElement(player, 0, 0)
    }

})

// Quando o usuário solta uma tecla
window.addEventListener('keyup', function (e) {
    // Removemos a classe walk para parar a animação
    // e fazê-lo parar no primeiro quadro, como quando não para
    // executa a animação.
    player.classList.remove('caminhar')
})

// inicialização
updateElement(player, 0, 0)


// ---------------------------------------------------------------NAVBAR--------------------------------------------------------------
$(function() {

	// // Parallax Background Image
	var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 35;

	function moveBackground() {
		x += (lFollowX - x) * friction;
		y += (lFollowY - y) * friction;

		translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

		$('.hero-bg').css({
			'-webit-transform': translate,
			'-moz-transform': translate,
			'transform': translate
		});

		window.requestAnimationFrame(moveBackground);
	}

	$(window).on('mousemove click', function(e) {

		var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
		var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
		lFollowX = (-10 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
		lFollowY = (-5 * lMouseY) / 100;
	});

	moveBackground();
	
	

	
	// jQuery for page scrolling feature - requires jQuery Easing plugin
	$('a.page-scroll').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: ($($anchor.attr('href')).offset().top - 79)
		}, 1250, 'easeInOutExpo');
		event.preventDefault();
	});
	
	

	// // Highlight the top nav as scrolling occurs
	$('body').scrollspy({
		target: "#myNav",
		offset: 80
	});

	
	
	// Fixed Nav Menu Navbar Shrink on Scroll

	
	
	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
		$('.navbar-toggle:visible').click();
	});

	
	


	// Initialize WOW.js Scrolling Animations
	new WOW().init();

});

