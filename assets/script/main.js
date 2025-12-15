// ハンバーガーメニュー//
var hamburgerMenu = $('.header__menu');

$('.header__hamburger').on('click', function () {
    hamburgerMenu.toggleClass('header__menu--active');
});

$(window).on('resize', function () {
    hamburgerMenu.removeClass('header__menu--active');
});
