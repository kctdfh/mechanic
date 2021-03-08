$(document).ready(renderDisabledCollapse());

function renderDisabledCollapse(){
    var disabledsection = $(".collapse-header:disabled");
    disabledsection.siblings(".collapse-body").slideUp();
}

$(".collapse-header").click(function() {
    if ($(this).is(".open")) {
        $(this).removeClass("open");
        $(this).parent().find(".collapse-body").slideUp();
    } else {
        $(this).addClass("open");
        $(this).parent().find(".collapse-body").slideDown();
    };
});