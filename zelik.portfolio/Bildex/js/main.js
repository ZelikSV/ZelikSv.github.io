'use strict';

$('.banner-slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: true,
  autoplay: true,
  prevArrow: '<span style="cursor: pointer;" class="arrows slick-prev"></span>',
  nextArrow: '<span style="cursor: pointer;" class="arrows slick-next"></span>',
  cssEase: 'linear'
});

$('.partners-slider').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: false,
  slidesToShow: 8,
  arrows: false,
  autoplay: true,
  cssEase: 'linear',
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 8,
      slidesToScroll: 1,
      infinite: true
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 576,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 450,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 320,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }]
});

$(window).scroll(function () {
  var $menu = $(".header");
  var $preheader = $(".preheader");
  if ($(this).scrollTop() > 53 && !$menu.hasClass("fixed")) {
    $menu.addClass('fixed');
  } else if ($(this).scrollTop() < 53 && $menu.hasClass("fixed")) {
    $menu.removeClass('fixed');
  };
});

$('.toggle-button').on('click', function () {
  $(this).toggleClass('button-open');
  $('.menu-content').toggleClass('show');
  $('.header').toggleClass('show');
});

$(document).ready(function () {
  var countWindow = $('.container');
  if (countWindow.width() <= 768) {
    $('.submenu-wrap').hover(function () {
      $(this).find('.submenu').slideDown();
      $(this).addClass('hovered');
    }, function () {
      $(this).find('.submenu').slideUp();
      $(this).removeClass('hovered');
    });
  }
});
$(document).resize(function () {
  var countWindow = $('.container');
  if (countWindow.width() <= 768) {
    $('.submenu-wrap').hover(function () {
      $(this).find('.submenu').slideDown();
      $(this).addClass('hovered');
    }, function () {
      $(this).find('.submenu').slideUp();
      $(this).removeClass('hovered');
    });
  }
});

$('.inp-file').change(function () {
  var filename = $(this).val().replace(/.*\\/, "");
  $('.mask-input-file').html(filename);
});

$(document).ready(function () {

  $('input').unbind().blur(function () {
    var id = $(this).attr('id');
    var val = $(this).val();
    switch (id) {
      case 'name':
        var rv_name = /^[a-zA-Zа-яА-Я]+$/;
        if (val = rv_name.test(val)) {
          $(this).parent().addClass('error');
        }
        break;
      case 'email':
        var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
        if (val = rv_email.test(val)) {
          $(this).parent().addClass('error');
        }
        break;
      case 'phone':
        var rv_phone = /^[0-9]{7,14}$/;
        if (val === rv_phone.test(val)) {
          $(this).parent().addClass('error');
        }
        break;
      case 'job':
        var rv_job = /^[a-zA-Zа-яА-Я]+$/;
        if (val = rv_job.test(val)) {
          $(this).parent().addClass('error');
        }
        break;
      case 'company':
        var rv_company = /^[a-zA-Zа-яА-Я]+$/;
        if (val = rv_company.test(val)) {
          $(this).parent().addClass('error');
        }
        break;
    }
  });
});