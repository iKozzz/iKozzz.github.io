$(document).ready(function () {
	"use strict";
	$("#hello-world ul").css('width', $(window).width());
	$("#hello-world ul").css('height', $(window).height());

	$(window).resize(function () {
		$("#hello-world ul").css('width', $(window).width());
		$("#hello-world ul").css('height', $(window).height());
	});

	if ($(window).width() <= 1024) {
        $('#scene').parallax({
            calibrateX: true,
            calibrateY: true,
            invertX: true,
            invertY: true,
            limitX: false,
            limitY: false,
            scalarX: 9,
            scalarY: 7,
            frictionX: 1.8,
            frictionY: 1.6,
            originX: 0.5,
            originY: 0.5
        });
    } else {
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
    }

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

	$('.scroll').click(function (e) {
		e.preventDefault();
		var destination = $(this).attr('href');
		$('html, body').animate({scrollTop: $(destination).offset().top}, 800);
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