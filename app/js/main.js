$(function () {
  $('.menu-btn').on('click', function () {
    $('.menu-btn__burger').toggleClass('menu-btn__burger--active');
    $('.header__nav-list').toggleClass('header__nav-list--active');
    $('.header').toggleClass('header--active');
  })

  $('.header__button').on('click', function () {
    $('.login-form').addClass('login-form--active');
    $('.header').addClass('header--modify');
  })

  $('.login-form__closer-btn').on('click', function () {
    $('.login-form').removeClass('login-form--active');
    $('.header').removeClass('header--modify');
  })
});