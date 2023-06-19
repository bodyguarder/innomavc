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

  $('.accelerator-section__popup-link').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });

  $('.drop-list__btn').on('click', function () {
    $(this).toggleClass('drop-list__btn--active');
    $(this).next('.drop-list__list').slideToggle(300, "linear");
  });

  $('.about-section__gallery-slider').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 475,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});