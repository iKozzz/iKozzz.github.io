$(document).ready(function () {
	"use strict";
	
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