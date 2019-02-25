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
        $('.rx-express-header__main-imgHuman-blockLeft.rx-express-header__main-imgHuman-basis').append('<img class="rx-express-header__main-imgHuman-img rx-express-header__main-imgHuman-left" src="img/hipster-mobil.png" alt="">');
        $('.rx-express-header__main-imgHuman-blockRight.rx-express-header__main-imgHuman-basis').append('<img class="rx-express-header__main-imgHuman-img rx-express-header__main-imgHuman-left" src="img/banker-mobil.png" alt="">');

        $('.rx-express-header__main-imgHuman-blockLeft.rx-express-header__main-imgHuman-blockLeft-alternative').append('<img class="rx-express-header__main-imgHuman-img rx-express-header__main-imgHuman-left" src="img/man-mob.png" alt="">');
        $('.rx-express-header__main-imgHuman-blockRight.rx-express-header__main-imgHuman-blockRight-alternative').append('<img class="rx-express-header__main-imgHuman-img rx-express-header__main-imgHuman-left" src="img/woman-mob.png" alt="">');

        $('.rx-express-header__main-comments').append('<img class="rx-express-header__main-comments-left" src="img/left-comment__mobil.png" alt="">');
        $('.rx-express-header__main-comments').append('<img class="rx-express-header__main-comments-right" src="img/right-comment__mobil.png" alt="">');
    }
});


//accordion
//uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
(function(){
    var d = document,
        accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
        setAria,
        setAccordionAria,
        switchAccordion,
        touchSupported = ('ontouchstart' in window),
        pointerSupported = ('pointerdown' in window);

    skipClickDelay = function(e){
        e.preventDefault();
        e.target.click();
    };

    setAriaAttr = function(el, ariaType, newProperty){
        el.setAttribute(ariaType, newProperty);
    };
    setAccordionAria = function(el1, el2, expanded){
        switch(expanded) {
            case "true":
                setAriaAttr(el1, 'aria-expanded', 'true');
                setAriaAttr(el2, 'aria-hidden', 'false');
                break;
            case "false":
                setAriaAttr(el1, 'aria-expanded', 'false');
                setAriaAttr(el2, 'aria-hidden', 'true');
                break;
            default:
                break;
        }
    };
//function
    switchAccordion = function(e) {
        console.log("triggered");
        e.preventDefault();
        var thisAnswer = e.target.parentNode.nextElementSibling;
        var thisQuestion = e.target;
        if(thisAnswer.classList.contains('is-collapsed')) {
            setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {
            setAccordionAria(thisQuestion, thisAnswer, 'false');
        }
        thisQuestion.classList.toggle('is-collapsed');
        thisQuestion.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('is-collapsed');
        thisAnswer.classList.toggle('is-expanded');

        thisAnswer.classList.toggle('animateIn');
    };
    for (var i=0,len=accordionToggles.length; i<len; i++) {
        if(touchSupported) {
            accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
        }
        if(pointerSupported){
            accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
        }
        accordionToggles[i].addEventListener('click', switchAccordion, false);
    }
})();