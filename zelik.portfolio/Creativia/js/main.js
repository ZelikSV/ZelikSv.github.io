
document.body.onload = function(){
var preloader = $("#preloader");
imgCount = $('img').length,
percent = 100 / imgCount,
dBody = $('body'),
progress = 0,
loadImg = 0;


if(imgCount > 0){
    dBody.css('overflow','hidden');
$(".dws-progress-bar").circularProgress({
        color: "#ff0036",
        line_width: 17,
        height: "350px",
        width: "350px",
        percent: 0,
        // counter_clockwise: true,
        starting_position: 25
    }).circularProgress('animate', percent, 2000);

for(var i = 0; i< imgCount;i++){
    var imgCopy = new Image();
    imgCopy.src = document.images[i].src;
    imgCopy.onload = imgLoad;
    imgCopy.onerror = imgLoad;
}
function imgLoad(){
progress +=percent;
loadImg++;
if (progress >=100 || loadImg == imgCount){
    preloader.delay(1000).fadeOut('slow');
    dBody.css('overflow','');

}
$('.dws-progress-bar').circularProgress('animate',progress,500);
        
}
}else{
    preloader.remove();
}
};



// skills
$('.indicator').radialIndicator({
    barWidth: 3,
    initValue: 0,
    barColor: "#ff0036",
    fontColor: "#1a1a1a",
    fontFamily: "'Lato', sans-serif", 
    fontWeight: 500, 
    fontSize: 25,
    percentage: true
});
// btn-more in blog
var $btnBlog = $('.btn-blogs');
$btnBlog.click(function (){
$('.blog-invisible').toggleClass('blog-more');
$(this).toggleClass('btn-blogs-hiden');
return false;
});

var indicators = $('.indicator'),
    setIndVal = function () {
        for (let i = 0, $item; $item = indicators[i]; i++) {
            (function (index) {
                setTimeout(function () {
                    $item = $($item);
                    let radialObj = $item.data('radialIndicator'),
                        indexValue = $item.attr('data-index');
                    radialObj.animate(indexValue);
                }, 1000 * index);
            })(i);
        }
    };
    $(window).scroll(function () {
        var $header = $(".header");
        var $offer = $(".offer");
        var $features = $(".features");
        var $scrollingHeight = $header.outerHeight(true) + $offer.outerHeight(true) + $features.outerHeight(true)/2;
        if ($(this).scrollTop() >= $scrollingHeight) {
            setIndVal(); 
        } else if ($(this).scrollTop() < $scrollingHeight ) {
            return false; 
        };
    });

// Sliders

$('.header-slider').slick({
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    lazyLoad: 'ondemand',
    prevArrow: '<span style="cursor: pointer;" class="slick-prev ion-chevron-left"></span>',
    nextArrow: '<span style="cursor: pointer;" class="slick-next ion-chevron-right"></span>',
    cssEase: 'linear'
  });

  $('.clients-slide').slick({
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    dots: true,
    arrows: false,
  });
  $('.tweets-slider').slick({
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  });
    
      $('.team-slider').slick({
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 450,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 320,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
          ]
    });


var aboutLabels = $('.header-accordion');
var sliderImg = $('.about-slider');
aboutLabels.on('click', function(){
    $(this).addClass('active').siblings().removeClass('active');
    sliderChange();
});

function sliderChange(){
    var a = sliderImg.find('.image-active');
    var b = sliderImg.find('.image-prev');
    var c = sliderImg.find('.image-next');
    a.removeClass('image-active').addClass('image-prev');
    b.removeClass('image-prev').addClass('image-next');
    c.removeClass('image-next').addClass('image-active');
};



// табы
$('.tabs-nav').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.tabs').children('.tabs-content').children('div').removeClass('active').eq($(this).index()).addClass('active');
});
// якорные ссылки

$("[href^='#']").click(function () {
    var href = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(href).offset().top - 100 + 'px'
    });
    return false;
});


// low-download-content

var countWindowHeight = function () {
        return $(window).height();
    },
    windowHeight = countWindowHeight();

$(window).resize(function () {
    countWindowHeight();
});
$(window).scroll(function () {
    var sections = $('.scroll-show');
    for (let i = 0, section; section = sections[i]; i++) {
        let $section = $(section),
            sectionOffsetTop = $section.offset().top,
            windowScroll = $(window).scrollTop() + (windowHeight)*2;
        if (windowScroll >= sectionOffsetTop) {
            $section.addClass('showed');
        }
    }

});
//шестигранники
var setHexSize = function () {
    var items = $('.hex-wrap, .hex-container');
    for (let i = 0, $item; $item = items[i]; i++) {
        $item = $($item);
        let itemWidth = $item.outerWidth(),
            itemHeight = $item.outerHeight();
        // $item.outerHeight(itemWidth * 1.16);
        $item.outerWidth(itemHeight * 1.16);
    }
}
$(window).on('load resize', function () {
    setHexSize();
});
 // Отправка отзыва Ajax
    $(document).ready(function() {
        $("#send_comment").submit(function() {/* ищем форму и следим за событием отправки*/
            var $form = $(this); 
            var data = $form.serialize();/* сериализовали введенные данные(привели в строку)*/
            $.ajax({
                type: 'POST',
                url: 'send.php',
                data: data,
                beforeSend: function(data) {
                    $form.find('input[type="submit"]').attr('disabled', 'disabled');
                },
                success: function(data) {
                    $form.css('display', 'none');   
                    $form.find('input,textarea,select').not('input[type="submit"]').val('');
                    $('.send-form').css('display','block');
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function(data) {
                    $form.find('input[type="submit"]').prop('disabled', false);
                }
            });
            return false;
        });
    });

$('.close-form').click(function (){
   $('.send-form').css('transform', 'scale(0)');
   $('#send_comment').css('display','block');
});

// modal Window

$('.btn-buy').click( function (){
    $('.modal-wrap').addClass('show-modal');
    var product = $(this).parent();
    var product_wrap = $(product).parent();
    var choice = $(product_wrap).parent();
    $(choice).clone().not('.btn-buy').insertAfter('.head-choice');
    return false;
    });
    $('.close').click( function (){
    $('.modal-wrap').removeClass('show-modal');
    var choice = $('.left-part').children().not('.head-choice');
    $(choice).remove();
    $('.choice-done').removeClass('show-modal');
    
    });
    




    // КАРТА
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Функция создания карты сайта и затем вставки ее в блок с идентификатором "map-yandex"
function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7587803, lng: -74.0382405},
      zoom: 11,
      styles:[
        {
            "featureType": "all",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#c4c4c4"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#707070"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 21
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "poi.business",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#be2026"
                },
                {
                    "lightness": "0"
                },
                {
                    "visibility": "on"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "hue": "#ff000a"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#575757"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#2c2c2c"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#999999"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "saturation": "-52"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#000000"
                },
                {
                    "lightness": 17
                }
            ]
        }
    ] });
}
// Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
function loadScript(url, callback){
  var script = document.createElement("script");

  if (script.readyState){  // IE
    script.onreadystatechange = function(){
      if (script.readyState == "loaded" ||
              script.readyState == "complete"){
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {  // Другие браузеры
    script.onload = function(){
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName("head")[0].appendChild(script);
}

// Основная функция, которая проверяет когда мы навели на блок с классом "ymap-container"
var ymap = function() {
  $('.map').mouseenter(function(){
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем
    
      // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true; 
    // Загружаем API Яндекс.Карт
        loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyC3vzoQfYHHCt3rGFXdDBGfmDU8bembjKI&callback=initMap", function(){
        });                
      }
    }
  );  
}
$(function() {
  ymap();
});
