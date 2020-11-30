$(function () {
    $('.topic').each(function(){ 
        $(this).mouseenter(function () { 
            $(this).find('.sub-menu').show();
            //$(this).find('.sub-menu').slideDown();
        });

        $(this).mouseleave(function () { 
            $(this).find('.sub-menu').hide();
        });
    });
});