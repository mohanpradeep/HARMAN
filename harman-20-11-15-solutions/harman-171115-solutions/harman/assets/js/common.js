$(document).ready(function () {
    // DESKTOP HOVER MEGAMENU SHOWING SUB MENU
    $('.js-activated').dropdownHover().dropdown();


    // PAGE SCROLL GET HIDE MAIN MENU    
    //    $(window).scroll(function () {
    //        if ($(this).scrollTop() > 0) {
    //            $('.harman-megamenu').fadeOut();
    //        } else {
    //            $('.harman-megamenu').fadeIn();
    //        }
    //    });

    var windowSize = $(window).width();
    $(window).scroll(function () {
        windowSize = $(window).width();
        if (windowSize > 1025) {
            if ($(this).scrollTop() > 0) {
                $('.harman-megamenu').fadeOut();
            } else {
                $('.harman-megamenu').fadeIn();
            }
        }
    });



    // TOGGLE ANIMATION START
    $(".nyse-search-burger .hamburger").click(function () {
        $(".harman-megamenu").stop().slideToggle("slow");
        $(".stickyheader").animate({
            "top": "50px !important"
        },  "slow");
    }, function () {
        $(".harman-megamenu").stop().slideToggle("slow");
        $(".stickyheader").animate({
            "top": "100px !important"
        },  "slow");
    });
    // TOGGLE ANIMATION END 


    // DESKTOP HOVER MEGAMENU - VERTICAL TAB
    $('#company-sublinks a, #solutions-submenu a, #responsibility-submenu a, #innovation-submenu a').hover(function (e) {
        e.preventDefault()
        $(this).tab('show');
    });

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




    // NICE SCROLL START
    //    $(".mob-leaders-dd, .milestone-year-dd").niceScroll({
    //        touchbehavior: true,
    //        cursorcolor: "#ffffff",
    //        cursorborder: " 0px solid #ffffff",
    //        cursoropacitymax: 0.5
    //    });
    // NICE SCROLL END



    // STICKY HEADER SECTION DROPDOWN LIST ITEM

    $.each($(".scroll"), function (index, ele) {
        $("#ddMenu").append("<li><a onclick=smoothScrollTo('#" + $(ele).attr("id") + "')>" + $(ele).attr("data-title") + "</a></li>")
    })
});

function smoothScrollTo(ele) {
        $('html, body').animate({
            scrollTop: $(ele).offset().top-$("#harmansticky").height()}, 1000);
    }


/*STICKY JS STARTS*/
function go2Next(ele) {
    var scrollSize = $(".scroll:eq(" + $(ele).attr("data-next") + ")").offset().top - $("#harmansticky").height(); //- $(ele).height()
    $('html, body').animate({
        scrollTop: scrollSize
    }, 1000);
    $("#headerTitle").text($(ele).attr("data-title"));
    var nextEle = parseInt($(ele).attr("data-next")) + 1
    $(ele).attr("data-next", nextEle)
}

function go2Prev(ele) {
    var scrollSize = $(".scroll:eq(" + $(ele).attr("data-prev") + ")").offset().top - $("#harmansticky").height(); //- $(ele).height()
    $('html, body').animate({
        scrollTop: scrollSize
    }, 1000);
    $("#headerTitle").text($(ele).attr("data-title"));
    var nextEle = parseInt($(ele).attr("data-prev")) - 1
    $(ele).attr("data-prev", nextEle)

}

function pageScroll() {
    var winScrollPosX = $(window).scrollTop();
    $(".scroll").each(function () {
        var eleTop = $(this).offset().top - $("#harmansticky").height();
        var eleHeight = $(this).height();
        var eleBottom = eleTop + eleHeight;
        var eleIndex = parseInt($(".scroll").index($(this)));

        if (eleTop <= winScrollPosX && eleBottom > winScrollPosX) {
            
            $("h2").css({
                "display": "inline-block"
            })
            $("#headerTitle").text($(this).attr("data-title"));
            $("#sectionCount").text(eleIndex + 1 + " of " + $(".scroll").length)
            $("#sectionNavNext").attr("data-next", eleIndex + 1)
            $("#sectionNavPrev").attr("data-prev", eleIndex - 1)
            switch (eleIndex) {
                case 0:
                    $("#sectionNavPrev").fadeOut();
                    $("#sectionNavNext").css("display", "inline");
                    break
                case ($(".scroll").length - 1):
                    $("#sectionNavPrev").css("display", "inline");
                    $("#sectionNavNext").fadeOut();
                    break
                default:
                    $("#sectionNavNext").css("display", "inline").fadeIn();
                    $("#sectionNavPrev").css("display", "inline").fadeIn();
            }

        } else if ($(".scroll:first").offset().top - $("#harmansticky").height() > winScrollPosX) {
            $("h2").css({
                "display": "none"
            })
        }
    })

}
$(window).scroll(function (event) {
        pageScroll();
    })
    /*STICKY JS ENDS*/
