let imgMazda = ['img/mazda/минимальный.jpg',
                "img/mazda/стандарт.jpg",
                "img/mazda/стандарт+.jpg",
                "img/mazda/стандарт++.jpg",
                "img/mazda/стандарт+++.jpg",
                "img/mazda/целиком.jpg"                
];
let imgMazdaHidden = ["img/mazda/оптика.jpg",
                    "img/mazda/пороги-внутренние.jpg",
                    "img/mazda/пороги-наружние.jpg",
                    "img/mazda/двери.jpg",
                    "img/mazda/заднее-крыло.jpg",
                    "img/mazda/капот.jpg",
                    "img/mazda/передний-бампер.jpg",
                    "img/mazda/задний-бампер.jpg"
];
let imgMersedes = ['img/mersedes/минимальный.jpg',
                    "img/mersedes/стандарт.jpg",
                    "img/mersedes/стандарт+.jpg",
                    "img/mersedes/стандарт++.jpg",
                    "img/mersedes/стандарт+++.jpg",
                    "img/mersedes/целиком.jpg"
];
let imgMersedesHidden = [ "img/mersedes/оптика.jpg",
"img/mersedes/пороги-внутренние.jpg",
"img/mersedes/пороги-наружние.jpg",
"img/mersedes/двери.jpg",
"img/mersedes/задние-крылья.jpg",
"img/mersedes/капот.jpg",
"img/mersedes/передний-бампер.jpg",
"img/mersedes/задний-бампер.jpg"
];
let imgSitroen = ['img/citroen/минимальный.jpg',
                    "img/citroen/стандарт.jpg",
                    "img/citroen/стандарт+.jpg",
                    "img/citroen/стандарт++.jpg",
                    "img/citroen/стандарт+++.jpg",
                    "img/citroen/целиком.jpg",
                    
];
let imgSitroenHidden = [ "img/citroen/оптика.jpg",
"img/citroen/пороги-внутренние.jpg",
"img/citroen/пороги-наружние.jpg",
"img/citroen/двери.jpg",
"img/citroen/задние-крылья.jpg",
"img/citroen/капот.jpg",
"img/citroen/передний-бампер.jpg",
"img/citroen/задний-бампер.jpg"
];

// default img
let mass = imgMersedes;
$('.main-img').attr({"src" : mass[3]});



// Основной план
function setPlan(el){
    if(el.parent().index()===0){
        mass = imgSitroen;
    $('.main-img').attr({"src" : mass[3]});
    
    }else if(el.parent().index()===1){
        mass = imgMazda; 
        $('.main-img').attr({"src" : mass[3]});
    
    }else if(el.parent().index()===2){
        mass = imgMersedes;
        $('.main-img').attr({"src" : mass[3]}); 
         
    }
}


// Выбираем класс машины по клику кнопки

$('.btn').on('click', function(){
    $('.btn').removeClass('selected');
    $(this).addClass('selected');
    $('.on-parts').slideUp();
    $('.plan-content').removeClass('show');
    setPlan($(this));
});


// Выбираем план машине
$('.plan').hover(
    function(){
        setPlan($('.selected'));
        $(this).siblings().removeClass('show');
        $(this).addClass('show');
        $('.main-img').attr({"src" : mass[$(this).index()]});
});

// Выбираем частями
$('.parts-link').hover(
    function(){
        $(this).siblings().removeClass('show');
        $(this).addClass('show');
        if($('.selected').parent().index()===0){
            mass = imgSitroenHidden;
        }else if($('.selected').parent().index()===1){
            mass = imgMazdaHidden; 
        }else if($('.selected').parent().index()===2){
            mass = imgMersedesHidden; 
        }
        $('.main-img').attr({"src" : mass[$(this).index()]});
},
function(){
    $(this).removeClass('show');
}
);

// Отображение иконок под основным изображением

$('.parts-link').on('click', function(){

    // Удаление или отображение иконки в соответствии с нажатым пунктом

    if($(this).index() ===0){
        $('.headlamp').parent().toggleClass('show');
    }else if($(this).index() ===2){
        $('.rapids').parent().toggleClass('show');
    }else if($(this).index() ===3){
        $('.door').parent().toggleClass('show');
    }else if($(this).index() ===4){
        $('.wingsall').parent().toggleClass('show');
    }else if($(this).index() ===5){
        $('.hoodall').parent().toggleClass('show');
    }else if($(this).index() ===6){
        $('.bumper').parent().toggleClass('show');
    }else if($(this).index() ===7){
        $('.bumperback').parent().toggleClass('show');
    }

// Отображение группы иконок в соответствии с выбраным планом

    $('.plan-content').removeClass('show');
    if($('.plan.show').index()===0){
       $('.minimal').addClass('show');
    }else if($('.plan.show').index()===1){
        $('.standart').addClass('show');
    }else if($('.plan.show').index()===2){
        $('.standart-1').addClass('show');
    }else if($('.plan.show').index()===3){
        $('.standart-2').addClass('show');
    }else if($('.plan.show').index()===4){
        $('.standart-3').addClass('show');
    }
});

// Скрыть показать меню
$('.submenu-title').on('click', function(){
$('.on-parts').slideToggle();
});



