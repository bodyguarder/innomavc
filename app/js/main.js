$(function () {
  $('.menu-btn').on('click', function () {
    $('.menu-btn__burger').toggleClass('menu-btn__burger--active');
    $('.header__nav-list').toggleClass('header__nav-list--active');
    $('.header').toggleClass('header--active');
    $('body').toggleClass('hidden');
  })

  $('.header__button').on('click', function () {
    $('.login-form').addClass('login-form--active');
    $('.header').addClass('header--modify');
    $('body').addClass('hidden');
  })

  $('.login-form__closer-btn').on('click', function () {
    $('.login-form').removeClass('login-form--active');
    $('.header').removeClass('header--modify');
    $('body').removeClass('hidden');
  })

  $('.tabs-section__tabs-link').on('click', function (e) {
    e.preventDefault();
    $('.tabs-section__tabs-link').removeClass('tabs-section__tabs-link--active');
    $(this).addClass('tabs-section__tabs-link--active');

    $('.tabs-section__content-item').removeClass('tabs-section__content-item--active');
    $($(this).attr('href')).addClass('tabs-section__content-item--active');
  });
});