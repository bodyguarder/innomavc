$(function () {
  $('.menu-btn').on('click', function () {
    $('.menu-btn__burger').toggleClass('menu-btn__burger--active');
    $('.header__nav-list').toggleClass('header__nav-list--active');
  })
});