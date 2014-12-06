$(document).ready( function() {
    new WOW().init();

    $('.scroll').click(function(e){
        e.preventDefault();
        var destination = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(destination).offset().top
        }, 800);
    });
});