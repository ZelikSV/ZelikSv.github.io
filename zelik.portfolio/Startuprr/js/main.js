// skills

$('.indicator').radialIndicator({
    barWidth: 3,
    initValue: 0,
    barColor: "#00a99d",
    fontColor: "#e4e4e4",
    fontFamily: "'Raleway', sans-serif", 
    fontWeight: 800, 
    fontSize: 30,
    percentage: true
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
        };
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


// team-members-slider

$('.members-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<span style="cursor: pointer;" class="slick-prev fa fa-caret-left"></span>',
    nextArrow: '<span style="cursor: pointer;" class="slick-next fa fa-caret-right"></span>',
    responsive: [{
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
        }
    ]
});



$('.comments-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    prevArrow: '<span style="cursor: pointer;" class="slick-prev fa fa-caret-left"></span>',
    nextArrow: '<span style="cursor: pointer;" class="slick-next fa fa-caret-right"></span>',
});


$('.clients-slider').slick({
    prevArrow: '<span style="cursor: pointer;" class="slick-prev fa fa-caret-left"></span>',
    nextArrow: '<span style="cursor: pointer;" class="slick-next fa fa-caret-right"></span>',
    slidesToShow: 4,
    responsive: [

        {
            breakpoint: 1020,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});


// якорные ссылки

$("[href^='#']").click(function () {
    var href = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(href).offset().top - 100 + 'px'
    });
    return false;
});

// фиксированное меню 
$(window).scroll(function () {
    var $menu = $(".header-menu");
    var $banner = $(".banner");
    if ($(this).scrollTop() >= $banner.outerHeight(true) && !$menu.hasClass("fixed")) {
            $menu.addClass('fixed');
    } else if ($(this).scrollTop() < $banner.outerHeight(true) && $menu.hasClass("fixed")) {
            $menu.removeClass('fixed');
    };
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
            windowScroll = $(window).scrollTop() + (windowHeight);
        if (windowScroll >= sectionOffsetTop) {
            $section.addClass('showed');
        }
    }

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
                    $form.css('transform', 'scale(0)');   
                    $form.find('input,textarea,select').not('input[type="submit"]').val('');
                    $('.send-form').css('transform', 'scale(1)');
                },
                error: function(xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function(data) {
                    $form.find('input[type="submit"]').prop('disabled', false);
                }
            });
            return false; // вырубaeм стaндaртную oтпрaвку фoрмы!!!!!!!!!!!!!!!!!!!!
        });
    });
$('.send-form').click(function (){
   $('.send-form').css('transform', 'scale(0)');
    $('#send_comment').css('transform', 'scale(1)');
});


$('.btn-buy').click( function (){
$('.modal-wrap').addClass('show-modal');
var product_wrap = $(this).parent();
$(product_wrap).children().clone().not('.btn-buy').insertAfter('.head-choice');
return false;
});
$('.close').click( function (){
$('.modal-wrap').removeClass('show-modal');
var choice = $('.left-part').children().not('.head-choice');
$(choice).remove();
});


// modal image

var imgBtn = document.getElementsByClassName('works-button');
var imgWorks = document.getElementsByClassName('img-work');
var imgModal = document.getElementById('modal-image-content');
var imgText = document.getElementById('image-text');
var windowImgModal = document.getElementById('modal-image');
var modImgWrap = document.getElementById('modal-image-wrap');

for (var i = 0; i < imgBtn.length; i++) {
        imgBtn[i].onclick = ( function(i){
            return function () {
                windowImgModal.classList.add('show-modal');
                imgModal.src = imgWorks[i].src;
                imgText.innerHTML = imgWorks[i].alt;
                return false;
            };
    })(i);
}
$('.close-img').click( function (){
    $('.modal-image').removeClass('show-modal');
    $('.modal-image-content').removeAttr('src');
    });
// map

// КАРТА
//Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
var check_if_load = false;
//Функция создания карты сайта и затем вставки ее в блок с идентификатором "map-yandex"
function initMap() {
    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 40.7587803, lng: -74.0382405},
    
      zoom: 12,
      styles: [
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d3d3d3"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "color": "#808080"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#b3b3b3"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ffffff"
            },
            {
                "weight": 1.8
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#d7d7d7"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#ebebeb"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#a7a7a7"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#efefef"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#696969"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#737373"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#d6d6d6"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {},
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#dadada"
            }
        ]
    }
]
    });}
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