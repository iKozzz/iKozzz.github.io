$(document).ready(function () {
	"use strict";

    new WOW().init();

	$('figure img').hover(function () {
		$(this).toggleClass("padding");
        $('figure h3').toggle();
	});
    
    $('.scroll').click(function (e) {
        e.preventDefault();
        var destination = $(this).attr('href');
        $('html, body').animate({scrollTop: $(destination).offset().top -200}, 800);
    });
});