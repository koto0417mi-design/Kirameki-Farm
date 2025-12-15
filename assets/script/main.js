// ハンバーガーメニュー本体
var hamburgerMenu = $('.header__menu');

// ボタン → メニュー開閉
$('.header__hamburger').on('click', function () {
    hamburgerMenu.toggleClass('header__menu--active');
});

// リサイズ時は必ず閉じる
$(window).on('resize', function () {
    hamburgerMenu.removeClass('header__menu--active');
});
