'use strict';

$(document).ready(function () {

  new WOW().init();

  // баннер слайдер

  $('.banner-slider').slick({
    dots: false,
    infinite: true,
    speed: 400,
    fade: false,
    arrows: false,
    autoplay: true,
    cssEase: 'linear'
  });

  // табы

  $('.tabs-nav').on('click', 'li:not(.active)', function () {
    $(this).addClass('active').siblings().removeClass('active').closest('.portfolio-tabs').children('.tabs-content-wrapper').children('.portfolio-tabs-content').removeClass('active').eq($(this).index()).addClass('active');
  });

  // якорные ссылки

  $("[href^='#']").click(function () {
    var href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top - 100 + 'px' });
    return false;
  });

  // Добавление видео

  $('.fa-play').click(function () {
    $('.mask-video-intro').addClass('hidden');
    $('.video-wrap').append('<iframe ></iframe>');
    $('.video-wrap iframe').attr('src', 'https://www.youtube.com/embed/rEeWj051uBg?color=white;theme=light;autoplay=1;enablejsapi=1;');
  });

  // фиксированное меню
  $(window).scroll(function () {
    var $menu = $("header");
    if ($(this).scrollTop() > 82 && !$menu.hasClass("fixed")) {
      $menu.addClass('fixed');
    } else if ($(this).scrollTop() < 82 && $menu.hasClass("fixed")) {
      $menu.removeClass('fixed');
    };
  });
  // бургер меню
  $('.toggle-button').on('click', function () {
    $(this).toggleClass('button-open');
    $('.menu').toggleClass('open-menu');
    $('.header').toggleClass('open-menu');
  });
  // работа с инпутами
  $('.personal-datas').on('focus', function () {
    $(this).parent().find('.inputs-titles').addClass('focus');
  });
  $('.personal-datas').on('blur', function () {
    $(this).parent().find('.inputs-titles').removeClass('focus');
  });

  $('#mail').focus(function () {
    $('.mail-title').addClass('focus');
  });

  $('#mail').blur(function () {
    $('.mail-title').removeClass('focus');
  });
});