'use strict';

var range = document.getElementById('range-size');

noUiSlider.create(range, {
    start: 700,
    step: 1,
    connect: [true, false],
    tooltips: true,
    range: {
        'min': 100,
        'max': 1000
    }

});

range.noUiSlider.on('update', function (values, handle) {
    var fontS = values[handle] * 0.017;
    document.querySelector('.range-wraper-size .noUi-horizontal .noUi-tooltip').style.fontSize = fontS + 'px';
});

var range2 = document.getElementById('range-price');

noUiSlider.create(range2, {
    start: 5000000,
    step: 1,
    connect: [true, false],
    tooltips: true,
    range: {
        'min': 100000,
        'max': 5000000
    }

});

range2.noUiSlider.on('update', function (values, handle) {
    var fontS = values[handle] * 0.000004;
    document.querySelector('.range-wraper-price .noUi-horizontal .noUi-tooltip').style.fontSize = fontS + 'px';
});

var btnMap = document.getElementById('btn-map');
var modalWindow = document.querySelector('.modal-map-wrap');
var positionMap = document.getElementById('map');
var closeMap = document.querySelector('.close');
var chekBoxed = document.getElementById('checkbox-wrap');
var searchInput = document.getElementById('location-search');
var conrtlZooms = document.getElementById('zoom-map');
var zoomPlus = document.getElementById('zoom-plus');
var zoomMinus = document.getElementById('zoom-minus');
var panelTitle = document.querySelector('#zoom-map p');
var selectRooms = document.querySelectorAll('.bedrooms-field label');
var searchBox = new google.maps.places.SearchBox(searchInput);

var geocoder = new google.maps.Geocoder();

btnMap.addEventListener('click', function () {
    modalWindow.classList.add('show');
    return false;
});

closeMap.addEventListener('click', function () {
    modalWindow.classList.remove('show');
});

var map = new google.maps.Map(positionMap, {
    center: {
        lat: 48.464802368993446,
        lng: 35.046011338622975
    },
    mapTypeControl: true,
    zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_RIGHT
    },
    zoom: 15,
    zoomControl: false,
    disableDefaultUI: true,
    styles: [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#444444"
        }]
    }, {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [{
            "visibility": "on"
        }, {
            "color": "#6771e1"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
            "color": "#f2f2f2"
        }]
    }, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
            "saturation": -100
        }, {
            "lightness": 45
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#6471fd"
        }, {
            "visibility": "on"
        }]
    }]
});

var marker = new google.maps.Marker({
    position: {
        lat: 48.464802368993446,
        lng: 35.046011338622975
    },
    map: map,
    draggable: true,
    icon: './img/marker.png'
});

map.controls[google.maps.ControlPosition.TOP_RIGHT].push(conrtlZooms);

// Отслеживаем ввод локации в поисковом инпуте

google.maps.event.addListener(searchBox, 'places_changed', function () {

    var places = searchBox.getPlaces();
    var bounds = new google.maps.LatLngBounds();
    var place;

    for (var i = 0; place = places[i]; i++) {
        bounds.extend(place.geometry.location);
        marker.setPosition(place.geometry.location);
        panelTitle.innerHTML = place.formatted_address;
    }
    map.fitBounds(bounds);
    map.setZoom(15);
});

google.maps.event.addListener(marker, 'drag', function (event) {

    // Получаем координаты маркера

    var lat = marker.getPosition().lat();
    var lng = marker.getPosition().lng();

    var locationCordinats = { lat: lat, lng: lng };
    // Декодируем координаты в название локации

    geocoder.geocode({ 'location': locationCordinats }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK && results.length > 0) {

            // Заносим локацию в верхнюю панель карты
            panelTitle.innerHTML = results[0].formatted_address;

            // Заносим локацию в поисковый инпут           
            searchInput.value = results[0].formatted_address;
        }
    });
});

// Настройка кнопок в панели карты

function hover(elem) {
    elem.onmouseleave = function () {
        this.style.backgroundColor = '#7881FE';
    };
    elem.onmouseenter = function () {
        this.style.backgroundColor = '#5560F1';
    };
}
var zoomControl = new ZoomControl(document.getElementById('zoom-map'), map);

function ZoomControl(controlDiv, map) {

    controlDiv.style.display = 'flex';

    controlDiv.style.width = 100 + '%';
    controlDiv.style.backgroundColor = 'rgba(103, 113, 255, .7)';

    conrtlZooms.style.zIndex = 99999;
    zoomPlus.style.padding = 20 + 'px';
    zoomMinus.style.padding = 20 + 'px';
    zoomPlus.style.backgroundColor = '#7881FE';
    zoomMinus.style.backgroundColor = '#7881FE';

    zoomPlus.style.borderStyle = 'solid';
    zoomPlus.style.borderColor = '#7881FE';
    zoomPlus.style.borderWidth = '1px';

    zoomMinus.style.borderStyle = 'solid';
    zoomMinus.style.borderColor = '#7881FE';
    zoomMinus.style.borderWidth = '1px';

    hover(zoomPlus);
    hover(zoomMinus);

    zoomPlus.style.color = '#fff';
    zoomMinus.style.color = '#fff';

    zoomPlus.style.marginLeft = 'auto';
    panelTitle.style.color = '#fff';

    panelTitle.style.fontSize = 16 + 'px';
    panelTitle.style.lineHeight = 55 + 'px';
    panelTitle.style.paddingLeft = 20 + 'px';

    // Setup the click event listener - zoomIn
    google.maps.event.addDomListener(zoomPlus, 'click', function () {
        map.setZoom(map.getZoom() + 1);
    });

    // Setup the click event listener - zoomOut
    google.maps.event.addDomListener(zoomMinus, 'click', function () {
        map.setZoom(map.getZoom() - 1);
    });
}

chekBoxed.addEventListener('change', function () {
    range2.parentNode.classList.toggle('hidden');
});

// Выбираем количество комнат

for (var i = 0; i < selectRooms.length; i++) {
    selectRooms[i].addEventListener('change', function () {
        // убираем предыдущий выбор комнат
        for (var a = 0; a < selectRooms.length; a++) {
            selectRooms[a].classList.remove('show');
        }
        this.classList.toggle('show');
    });
}