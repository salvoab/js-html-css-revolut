$(function () {
    $('.topic').each(function(){ 
        $(this).mouseenter(function () { 
            $(this).find('.sub-menu').css('display', 'flex');
        });

        $(this).mouseleave(function () { 
            $(this).find('.sub-menu').hide();
        });
    });
});