$(function () {

    // ハンバーガー
    const hamburgerMenu = $('.header__menu');

    $('.header__hamburger').on('click', function () {
        hamburgerMenu.toggleClass('header__menu--active');
    });

    $(window).on('resize', function () {
        hamburgerMenu.removeClass('header__menu--active');
    });

    // スワイパー
    if (typeof Swiper !== 'undefined' && $('.gallery__slider').length) {
        new Swiper('.gallery__slider', {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 30,
            pagination: {
                el: '.gallery__pagination',
                clickable: true,
            },
        });
    }

});

//アコーディオン
$(function () {
    $('.faq__title').on('click', function () {
        const $item = $(this).closest('.faq__item');
        const $list = $(this).closest('.faq__list');

        $item.toggleClass('faq__item--active');

        const hasActiveItem = $list.find('.faq__item--active').length > 0;
        $list.toggleClass('faq__list--expanded', hasActiveItem);
    });
});
