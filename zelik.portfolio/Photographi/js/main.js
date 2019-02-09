
// Sliders

$('.main-slider').slick({
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    lazyLoad: 'ondemand',
    prevArrow: '<span style="cursor: pointer;" class="slick-prev ion-chevron-left"></span>',
    nextArrow: '<span style="cursor: pointer;" class="slick-next ion-chevron-right"></span>',
    cssEase: 'linear'
  });

  $('.menu-btn').click(function (){
    $('.menu').toggleClass('menu-show');
    });


$("[href^='#']").click(function () {
    var href = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(href).offset().top - 100 + 'px'
    });
    return false;
});

$(window).scroll(function() {
    var $height = $(".header-menu");
    var $menu = $('.header');
    if ($(this).scrollTop() > $height.outerHeight(true) && !$menu.hasClass("fixed")) {
        $menu.addClass('fixed');
    } else if ($(this).scrollTop() < $height.outerHeight(true) && $menu.hasClass("fixed")) {
        $menu.removeClass('fixed');
    };
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
      styles: [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#71ABC3"
                },
                {
                    "saturation": -10
                },
                {
                    "lightness": -21
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "landscape.natural",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#7DC45C"
                },
                {
                    "saturation": 37
                },
                {
                    "lightness": -41
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "landscape.man_made",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#C3E0B0"
                },
                {
                    "saturation": 23
                },
                {
                    "lightness": -12
                },
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "hue": "#A19FA0"
                },
                {
                    "saturation": -98
                },
                {
                    "lightness": -20
                },
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "hue": "#FFFFFF"
                },
                {
                    "saturation": -100
                },
                {
                    "lightness": 100
                },
                {
                    "visibility": "simplified"
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
