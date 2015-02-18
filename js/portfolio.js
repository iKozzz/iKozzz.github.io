$(document).ready(function () {
	"use strict";

    new WOW().init();

	$('figure img').hover(function () {
		$(this).toggleClass("padding");
        $('figure h3').toggle();
	});
});