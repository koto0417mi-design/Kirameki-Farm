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
            pagination: {
                el: '.gallery__pagination',
                clickable: true,
            },
        });
    }

});

//  アコーディオン
document.querySelectorAll('.faq__title').forEach(title => {
    title.addEventListener('click', () => {
        const content = title.nextElementSibling;
        const icon = title.querySelector('.faq__icon');

        const isOpen = content.style.display === 'block';

        content.style.display = isOpen ? 'none' : 'block';
        icon.src = isOpen
            ? '/assets/image/icon_plus.png'
            : '/assets/image/icon_minus.png';
    });
});
