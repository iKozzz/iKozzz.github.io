$(document).ready(function () {
	"use strict";
	$("#hello-world ul").css('width', $(window).width());
    $("#hello-world ul").css('height', $(window).height());
    
    $(window).resize(function () {
        $("#hello-world ul").css('width', $(window).width());
        $("#hello-world ul").css('height', $(window).height());
    });
    
    $('#scene').parallax({
		calibrateX: true,
        calibrateY: true,
        invertX: true,
        invertY: true,
        limitX: false,
        limitY: false,
        scalarX: 9,
        scalarY: 7,
        frictionX: 0.8,
        frictionY: 0.6,
        originX: 0.5,
        originY: 0.5
	});
	
	var sound = document.getElementById("ambient");
	sound.autoplay = true;
	sound.loop = true;
	
	$('button').on('click', function () {
		if (sound.paused) {
			sound.play();
		} else {
			sound.pause();
		}
		$(this).children().toggleClass('fa-volume-off');
		$(this).children().toggleClass('fa-volume-up');
		$(this).toggleClass('button-click');
	});
	
	$('figure').hover(function () {
		$('.eye').toggle();
		$('figure img').toggleClass("padding");
	});
	
	$('.scroll').click(function (e) {
		e.preventDefault();
        var destination = $(this).attr('href');
        $('html, body').animate({scrollTop: $(destination).offset().top}, 800);
	});
});