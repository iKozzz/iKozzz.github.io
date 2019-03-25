$(document).ready(function () {
	"use strict";
	let scene = $("#hello-world ul");
	scene.css('width', $(window).width());
	scene.css('height', $(window).height());

	$(window).resize(function () {
		scene.css('width', $(window).width());
		scene.css('height', $(window).height());
	});

	$('#planet')
		.mouseenter(
			function () {
				$(this).stop(true, true).css({
					animation : 'earth-1 1.4s',
					transform : 'rotate(180deg)'
				});
			}
		)
		.mouseleave(
			function () {
				$(this).stop(true, true).css({
					animation : 'earth-2 1s',
					transform : 'rotate(0deg)'
				});
			}
	);
});