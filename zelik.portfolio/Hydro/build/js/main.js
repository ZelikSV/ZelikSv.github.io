'use strict';

window.onload = function () {

  $('.btn-burger').on('click', function () {
    $(this).siblings('.menu-links').slideToggle();
    return false;
  });

  $('.banner-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    autoplay: true,
    cssEase: 'linear'
  });

  $('.team-wrap').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    arrows: false,
    dots: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        centerMode: false,
        slidesToShow: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }, {
      breakpoint: 480,
      settings: {
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }]
  });

  $('.feedback-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    autoplay: true,
    cssEase: 'linear'
  });

  window.onscroll = function () {
    var skillsLine = document.querySelector('.skill-wrap');
    var z = skillsLine.getBoundingClientRect().top;
    if (z <= 280) {
      setTimeout(runProgress('.progress-line'), 1000);
    }
  };

  function runProgress(sel) {
    var progressLine = document.querySelectorAll(sel);
    for (var _i = 0; _i < progressLine.length; _i++) {
      var a = progressLine[_i].getAttribute('data-value');
      var progress = a + '%';
      progressLine[_i].children[0].innerHTML = progress;
      progressLine[_i].style.width = progress;
    }
  };

  var text = document.querySelectorAll('.details');
  var icon = document.querySelectorAll('.details-line a');

  function showText() {
    setInterval(function () {
      for (var _i2 = 0; _i2 < text.length; _i2++) {
        if (text[_i2].classList.contains('active')) {
          text[_i2].classList.remove('active');
          icon[_i2].classList.remove('active');
          _i2++;
          if (_i2 >= text.length) {
            _i2 = 0;
          }
          text[_i2].classList.add('active');
          icon[_i2].classList.add('active');
        }
      }
    }, 1500);
  };
  showText();

  accordionMy('.slide-head', '.slide-footer');

  function accordionMy(head, footer) {
    var acordLine = document.querySelectorAll(head),
        acordText = document.querySelectorAll(footer);
    for (var _i3 = 0; _i3 < acordLine.length; _i3++) {
      acordLine[_i3].onclick = function () {

        for (var _i4 = 0; _i4 < acordLine.length; _i4++) {
          acordLine[_i4].classList.remove('show');
          acordText[_i4].classList.remove('show');
          acordLine[_i4].children[1].classList.remove('show');
          acordLine[_i4].children[2].classList.add('show');
        }
        this.classList.toggle('show');
        this.nextElementSibling.classList.toggle('show');
        this.children[1].classList.toggle('show');
        this.children[2].classList.toggle('show');
      };
    }
  }

  // modal-img

  var workImg = document.querySelectorAll('.work-img-wrap>i');
  var imgWrapmod = document.querySelector('.modal-img');

  document.querySelector('.close-modal').addEventListener('click', function () {
    document.querySelector('.modal-wrap').classList.remove('show-wrap');
    imgWrapmod.removeChild(imgWrapmod.childNodes[3]);
  });

  for (var i = 0; i < workImg.length; i++) {
    workImg[i].addEventListener('click', function () {

      var father = this.parentNode;
      imgWrapmod.appendChild(father.childNodes[1].cloneNode(true));
      document.querySelector('.modal-wrap').classList.add('show-wrap');
    });
  }
  // modal-buy-form

  var buyHref = document.querySelectorAll('.price-card>a');
  var buyWrapmod = document.querySelector('.left-modal');

  document.querySelector('.close-modal-buy').addEventListener('click', function () {
    document.querySelector('.buy-modal').classList.remove('show-wrap');
    buyWrapmod.removeChild(buyWrapmod.lastChild);
  });

  for (var i = 0; i < buyHref.length; i++) {
    buyHref[i].onclick = function () {

      var father = this.parentNode;
      var contentBuyForm = buyWrapmod.appendChild(father.cloneNode(true));
      contentBuyForm.removeChild(contentBuyForm.childNodes[5]);
      document.querySelector('.buy-modal').classList.add('show-wrap');
      return false;
    };
  }

  $("[href^='#']").click(function () {
    var href = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(href).offset().top - 100 + 'px'
    });
    return false;
  });

  $(document).ready(function () {
    $(".form-send").submit(function () {
    
      var $form = $(this);
      var data = $form.serialize(); 
      $.ajax({
        type: 'POST',
        url: 'send.php',
        data: data,
        beforeSend: function beforeSend(data) {
          $form.find('input[type="submit"]').attr('disabled', 'disabled');
        },
        success: function success(data) {
          $form.css('transform', 'scale(0)');
          $form.find('input,textarea,select').not('input[type="submit"]').val('');
          $('.send-form').css('transform', 'scale(1)');
        },
        error: function error(xhr, ajaxOptions, thrownError) {
          alert(xhr.status);
          alert(thrownError);
        },
        complete: function complete(data) {
          $form.find('input[type="submit"]').prop('disabled', false);
        }
      });
      return false; 
    });
  });
  $('.send-form').click(function () {
    $('.send-form').css('transform', 'scale(0)');
    $('#send_comment').css('transform', 'scale(1)');
  });
};