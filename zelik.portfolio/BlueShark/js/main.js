// Sliders

$('.banner-slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});


$('.feedback-slider').slick({
    autoplay: true,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '0px',
    autoplaySpeed: 5000,
    dots: true,
    prevArrow: '<span style="cursor: pointer;" class="slick-prev ion-chevron-left"></span>',
    nextArrow: '<span style="cursor: pointer;" class="slick-next ion-chevron-right"></span>',
});

// вводит название заголовка в тень за заголовком раздела

$(function () {
    var items = $('.center-heading').children('.center-text');
    for (let i = 0, item; item = items[i]; i++) {
        item = $(item);
        let itemText = item.text();
        item.attr('data-before', itemText);
    }
});

// Круговой прогресс анимация 
$('.indicator').radialIndicator({
    barWidth: 5,
    initValue: 0,
    barColor: "#00aeef",
    fontColor: "#636363",
    fontFamily: "'Lato', sans-serif", 
    fontWeight: 500, 
    fontSize: 48,
    radius: 80,
    percentage: true
});
var indicators = $('.indicator');
    setIndVal = function () {
        // сразу все
        for (let i = 0, $item; $item = indicators[i]; i++) {
            $item = $($item);
            let radialObj = $item.data('radialIndicator'),
                indexValue = $item.attr('data-index');
            radialObj.animate(indexValue);
        }

        //по очереди (через 1 секунду)
        // for (let i = 0, $item; $item = indicators[i]; i++) {
        //     (function (index) {
        //         setTimeout(function () {
        //             $item = $($item);
        //             let radialObj = $item.data('radialIndicator'),
        //                 indexValue = $item.attr('data-index');
        //             radialObj.animate(indexValue);
        //         }, 1000 * index);
        //     })(i);
        // }
    };

$(window).scroll(function () {
    var $banner = $(".banner"),
     $header = $(".header-top"),
     $about = $(".about");
    var $scrollingHeight = $about.height() + $banner.height();
    if ($(this).scrollTop() >= $scrollingHeight) {
        setIndVal(); 
    } else if ($(this).scrollTop() < $scrollingHeight ) {
        return false; 
    };
});

// button-menu
$('.menu-btn').click(function (){
  
$('.menu').toggleClass('menu-show');
});


// табы

$('.tabs-nav').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.tabs').children('.tabs-content').children('div').removeClass('active').eq($(this).index()).addClass('active');
});

// якорные ссылки

$("[href^='#']").click(function() {
    var href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(href).offset().top - 100 + 'px'});
    return false;
});

  // <!-- фиксированное меню -->
  $(window).scroll(function() {
    var $menu = $(".header-top");
    var $logo = $('.logo');
    if ($(this).scrollTop() > $logo.outerHeight(true) && !$menu.hasClass("fixed")) {
        $menu.addClass('fixed');
    } else if ($(this).scrollTop() < $logo.outerHeight(true) && $menu.hasClass("fixed")) {
        $menu.removeClass('fixed');
    };
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
            return false; 
        });
    });
    $('.send-form').click(function (){
        $('.send-form').css('transform', 'scale(0)');
         $('#send_comment').css('transform', 'scale(1)');
     });
     
// Отправка модального окна 

$(document).ready(function() {
    $("#buy-form").submit(function() {/* ищем форму и следим за событием отправки*/
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
                $('.choice-done').addClass('show-modal');
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
$('.choice-done').click(function (){
    $('.choice-done').removeClass('show-modal');
    $('.buy').css('transform','scale(1)');   
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

//модальное окно



$('.btn-product').click( function (){
$('.modal-wrap').addClass('show-modal');
var product_wrap = $(this).parent();
var choice = $(product_wrap).siblings(".product-front");
$(choice).children().clone().insertAfter('.head-choice');
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
      styles: [
{
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
        {
            "color": "#444444"
        }
    ]
},
{
    "featureType": "landscape",
    "elementType": "all",
    "stylers": [
        {
            "color": "#f2f2f2"
        }
    ]
},
{
    "featureType": "poi",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "road",
    "elementType": "all",
    "stylers": [
        {
            "saturation": -100
        },
        {
            "lightness": 45
        }
    ]
},
{
    "featureType": "road.highway",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "simplified"
        }
    ]
},
{
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "transit",
    "elementType": "all",
    "stylers": [
        {
            "visibility": "off"
        }
    ]
},
{
    "featureType": "water",
    "elementType": "all",
    "stylers": [
        {
            "color": "#46bcec"
        },
        {
            "visibility": "on"
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

// ВИДЕО
var $videoWrap = $('.about-video');
var $imgVideo = $('.img-video');

$imgVideo.click( function (){
    $(this).css('transform','scale(0)');
    $videoWrap.append("<iframe></iframe>");
    var $video = $videoWrap.children('iframe'); 
    $video.attr('src','https://www.youtube.com/embed/ddd14zSZKqg');
});