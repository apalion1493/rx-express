jQuery(function ($) {
    $.fn.hScroll = function (amount) {
        amount = amount || 120;
        $(this).bind("DOMMouseScroll mousewheel", function (event) {
            var oEvent = event.originalEvent,
                direction = oEvent.detail ? oEvent.detail * -amount : oEvent.wheelDelta,
                position = $(this).scrollLeft();
            position += direction > 0 ? -amount : amount;
            $(this).scrollLeft(position);
            event.preventDefault();
        })
    };
});

$(document).ready(function() {
    $('.rx-express-facts__slider').hScroll(60); // You can pass (optionally) scrolling amount
});


$(window).width(function() {
    if(document.documentElement.clientWidth < 767.98) {
        $(".rx-express-header__main-imgHuman-blockLeft img").remove();
        $(".rx-express-header__main-imgHuman-blockRight img").remove();
        $(".rx-express-header__main-comments img").remove();
        $('.rx-express-header__main-imgHuman-blockLeft').append('<img class="rx-express-header__main-imgHuman-img rx-express-header__main-imgHuman-left" src="img/hipster-mobil.png" alt="">');
        $('.rx-express-header__main-imgHuman-blockRight').append('<img class="rx-express-header__main-imgHuman-img rx-express-header__main-imgHuman-left" src="img/banker-mobil.png" alt="">');
        $('.rx-express-header__main-comments').append('<img class="rx-express-header__main-comments-left" src="img/left-comment__mobil.png" alt="">');
        $('.rx-express-header__main-comments').append('<img class="rx-express-header__main-comments-left" src="img/right-comment__mobil.png" alt="">');
    }
});