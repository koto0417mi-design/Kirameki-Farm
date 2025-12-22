$(function () {

  // ハンバーガー
  const hamburgerMenu = $('.header__menu');

  $('.header__hamburger').on('click', function () {
    hamburgerMenu.toggleClass('header__menu--active');
  });

  $(window).on('resize', function () {
    hamburgerMenu.removeClass('header__menu--active');
  });

  // ギャラリー Swiper
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
