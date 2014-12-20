$(document).ready(function () {
	"use strict";
	
	$('.scroll').click(function (e) {
		e.preventDefault();
        var destination = $(this).attr('href');
        $('html, body').animate({scrollTop: $(destination).offset().top}, 800);
	});
});