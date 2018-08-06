$(document).ready(function () {
    $('.js-activated').dropdownHover().dropdown();  
    
    

    $("#company-submenu li").hover(function () {
        $("#company-image").attr("src", $(this).data("img")).fadeIn(1000);
        $(".company-submenu-content").empty().append($(this).data("content"));
    }, function () {
        $("#company-image").attr("src", $("#company-image").data("original"));
        $(".company-submenu-content").empty().append($('.company-submenu-content').data("originalcont"));
    });


    $("#solution-submenu li").hover(function () {
        $("#solution-image").attr("src", $(this).data("img")).fadeIn(1000);
        $(".solution-submenu-content").empty().append($(this).data("content"));
    }, function () {
        $("#solution-image").attr("src", $("#solution-image").data("original"));
        $(".solution-submenu-content").empty().append($('.solution-submenu-content').data("originalcont"));
    });



});
