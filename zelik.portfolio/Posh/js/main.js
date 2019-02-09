$('.banner-slider').slick({
  dots: true,
  infinite: true,
  speed: 800,
  fade: false,
  arrows: false,
  cssEase: 'linear'
});
$('.calendar-slide').slick({
  dots: false,
  infinite: true,
  speed: 800,
  fade: false,
  cssEase: 'linear',
  prevArrow: '<span class="ion-arrow-left-c slick-arrow slick-prev"></span>',
  nextArrow: '<span class="ion-arrow-right-c slick-arrow slick-next "></span>'
});

// blog tabs
$('.tabs-nav').on('click', 'li:not(.active)', function () {
  $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.tabs').children('.tabs-content').children('.blog-pages').removeClass('active').eq($(this).index()).addClass('active');

});
$('.blog-btn').on('click', function(){
$(this).parent().children('.hidden').toggleClass('hidden');
return false;
});