jQuery.easing.def = 'easeInQuad';

$(document).on('click', '._close-drawer', function () {
    $("#dark-overlay").fadeTo(400, 0, function(){
        this.classList.add("hidden");
        $(this).css("margin-left","0");
    });
    $("#drawer").animate({
        right:'-100%'
    }, 600);
    setTimeout(function(){ $("#session-header").css("z-index","2"); }, 650);    
});
    
$(document).on('click', '._open-drawer', function () {
    $("#session-header").css("z-index","1");
    $("#dark-overlay").removeClass("hidden").fadeTo(400, 0.3).css("margin-left","-55px");
    $("#drawer").animate({
        right:0
    }, 600)});
        // $("#dark-overlay").css("margin-left","-60px");
        