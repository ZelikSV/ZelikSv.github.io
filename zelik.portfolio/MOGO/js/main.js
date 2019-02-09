'use strict';

window.onload = function () {

  $('.banner-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    autoplay: true,
    cssEase: 'linear'
  });

  $('.offer-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: false,
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    cssEase: 'linear',
    prevArrow: '<span style="cursor: pointer;" class="fa fa-chevron-left arrows slick-prev"></span>',
    nextArrow: '<span style="cursor: pointer;" class="fa fa-chevron-right arrows slick-next"></span>'

  });
  $('.work-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: false,
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    cssEase: 'linear',
    prevArrow: '<span style="cursor: pointer;" class="fa fa-chevron-left arrows slick-prev"></span>',
    nextArrow: '<span style="cursor: pointer;" class="fa fa-chevron-right arrows slick-next"></span>'

  });

  $(window).scroll(function () {
    var $menu = $("header");
    if ($(this).scrollTop() > 53 && !$menu.hasClass("fixed")) {
      $menu.addClass('fixed');
    } else if ($(this).scrollTop() < 53 && $menu.hasClass("fixed")) {
      $menu.removeClass('fixed');
    };
  });

  $('.toggle-button').on('click', function () {
    $(this).toggleClass('button-open');
    $('.menu-content').slideToggle();
  });

  function accordionMy(head, footer) {
    var acordLine = document.querySelectorAll(head),
        acordText = document.querySelectorAll(footer);
    for (var i = 0; i < acordLine.length; i++) {
      acordLine[i].onclick = function () {
        for (var _i = 0; _i < acordLine.length; _i++) {
          acordLine[_i].classList.remove('show');
          acordText[_i].classList.remove('show');
          acordLine[_i].children[2].classList.remove('show');
          acordLine[_i].children[3].classList.add('show');
        }
        this.classList.toggle('show');
        this.nextElementSibling.classList.toggle('show');
        this.children[2].classList.toggle('show');
        this.children[3].classList.toggle('show');
      };
    }
  }
  accordionMy('.slide-head', '.slide-footer');

  $('.icon-map').on('click', function () {
    $('.map-content').toggleClass('show');
    $('.mask-map').toggleClass('show');
  });
};