jQuery.easing.def = 'easeInQuad';

$(document).on('click', '._close-drawer', function () {
    $("#dark-overlay").fadeTo(600, 0, function(){
        this.classList.add("hidden");
    });
    $("#drawer").animate({
        right:'-100%'
    }, 1000)})

$(document).on('click', '._open-drawer', function () {
        $("#dark-overlay").removeClass("hidden").fadeTo(600, 0.5);
        $("#drawer").animate({
            right:0
        }, 1000)});