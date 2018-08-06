$(document).ready(function () {

    // SCROLL REVEAL - PAGE CONTENT ANIMATION
    window.sr = new scrollReveal();

    //    HOME PAGE CAROSUSEL START 
    $('#homeCarousel').carousel({
        interval: 3000,
        pause: "false"
    });
    //    HOME PAGE CAROSUSEL END

    //    HOME PAGE RECOGNITION START 
    $('#home-recognition').carousel({
        interval: 3000,
        pause: "false"
    });
    //    HOME PAGE RECOGNITION END

    // CAROUSEL SWIPE START 
    $("#homeCarousel").carousel({
        swipe: 100 // percent-per-second, default is 50. Pass false to disable swipe
    });
    $("#newsCarousel").carousel({
        swipe: 100 // percent-per-second, default is 50. Pass false to disable swipe
    });
    // CAROUSEL SWIPE END 



    // HEADER SEARCH TEXT BOX CLEAR TEXT START
    $(".hasclear").keyup(function () {
        var t = $(this);
        t.next('span').toggle(Boolean(t.val()));
    });

    $(".clearer").hide($(this).prev('input').val());

    $(".clearer").click(function () {
        $(this).prev('input').val('').focus();
        $(this).hide();
    });
    // HEADER SEARCH TEXT BOX CLEAR TEXT END

});
