
  $('.feedback-slider').slick({
    dots: true,
    infinite: true,
    speed: 400,
    fade: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  var clockheader = $('.timer-header').FlipClock(39874,{ 
    autoStart: true,
    language: 'russian',
    countdown:true
    });

  var clockfooter = $('.timer-footer').FlipClock(39874,{ 
    autoStart: true,
    language: 'russian',
    countdown:true
    });
