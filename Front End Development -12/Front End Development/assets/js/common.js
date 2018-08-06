$(document).ready(function () {

    // SCROLL REVEAL - PAGE CONTENT ANIMATION
    window.sr = new scrollReveal();

    //    HOME PAGE CAR`OSUSEL START 
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




    // ABOUT SECTION READ MORE/LESS START
    var moretext = "More";
            var lesstext = "Less";
            $('.more').each(function () {
                var content= $(this).html();
                var html = '<p>'+$('.more:first p').html() + '</p> <span class="moreelipses"></span><span class="morecontent"><span>' + content.substr($('.more:first p').html().length + 47, content.length - $('.more:first p').html().length) + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
                $(this).html(html);
               });
            $(".morelink").click(function () {
                if ($(this).hasClass("less")) {
                    $(this).removeClass("less");
                    $(this).html(moretext);
                } else {
                    $(this).addClass("less");
                    $(this).html(lesstext);
                }
                $(this).parent().prev().toggle();
                $(this).prev().toggle();
                return false;
            });
      var $w1 = $(window).width();
                if ($w1 < 767) {
                $(".morecontent >span").hide();
                if ($('.morelink.less').find()) {
                   $('.morelink').show();

                }
            }
               $(window).on('resize', function () {
                $w1 = $(window).width();
              if ($w1 < 767) {
                    $('.morelink').removeClass("less");
                    $('.morelink').html("More");
                    $(".morecontent >span").hide();
                    if ($('.morelink.less').find()) {
                        $('.morelink').show();
                    } 
                   } else if ($w1 >= 767) {
                      $('.morelink').hide();
                      $(".morecontent >span").show();
                }
            })

        // ABOUT SECTION READ MORE/LESS END 

});
