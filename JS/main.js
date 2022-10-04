$(function () {
    $('.slider__inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    $('select').styler();

    $('.header__btn-menu').on('click', function () {
        $('.menu ul').slideToggle();
    });

    $(".album-list").magnificPopup({
        delegate: "a",
        type: "image",
        gallery: {
            enabled: true
        }
    });


});