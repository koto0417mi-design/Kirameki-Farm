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
            spaceBetween:30,
            pagination: {
                el: '.gallery__pagination',
                clickable: true,
            },
        });
    }

});

//  アコーディオン
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".faq__title").forEach(title => {
        title.addEventListener("click", () => {
            const item = title.closest(".faq__item");
            const content = title.nextElementSibling;

            const isActive = item.classList.contains("faq__item--active");

            item.classList.toggle("faq__item--active");
            content.style.display = isActive ? "none" : "block";
        });
    });
});
