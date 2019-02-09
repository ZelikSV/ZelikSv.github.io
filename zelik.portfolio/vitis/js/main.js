'use strict';

$(document).ready(function () {

  // Селект валюты
  $('.cashe-wrap-list').selecter();

  // Селект языка
  $('.lang-wrap-list').selecter();

  // banner slider
  var swiper = new Swiper('.banner-slider', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 30,
    effect: 'fade',
    mousewheel: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });

  // Слайдер товара
  var swiper = new Swiper('.closes-slider', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.slick-arrow.slick-next',
      prevEl: '.slick-arrow.slick-prev'
    },
    breakpoints: {
      // when window width is <= 450px
      450: {
        slidesPerView: 1,
        spaceBetween: 10,
        mousewheel: false
      },
      // when window width is <= 680px
      680: {
        slidesPerView: 1,
        spaceBetween: 10
      },
      // when window width is <= 992px
      992: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });

  // фиксированное меню

  $(window).scroll(function () {
    var $menu = $(".header");
    var $bannerHeight = $('.header').height();
    if ($(this).scrollTop() > 1 && !$menu.hasClass("fixed")) {
      $menu.addClass('fixed');
    } else if ($(this).scrollTop() < 1 && $menu.hasClass("fixed")) {
      $menu.removeClass('fixed');
    };
  });

  // бургер меню
  var bodyWidth = $('body').outerWidth(true);

  $('.toggle-button').on('click', function () {
    if (bodyWidth < 992) {
      $('.header').toggleClass('open-main-menu');
    }
    $(this).toggleClass('button-open');
    $('.nav-menu').toggleClass('show');
  });

  // submenu
  $('.submenu-link').on('click', function () {
    $(this).siblings('.submenu').toggleClass('show');
    $('.header').toggleClass('submenu-open');
    return false;
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzZWxlY3RlciIsInN3aXBlciIsIlN3aXBlciIsImRpcmVjdGlvbiIsInNsaWRlc1BlclZpZXciLCJzcGFjZUJldHdlZW4iLCJlZmZlY3QiLCJtb3VzZXdoZWVsIiwicGFnaW5hdGlvbiIsImVsIiwiY2xpY2thYmxlIiwibG9vcCIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJicmVha3BvaW50cyIsIndpbmRvdyIsInNjcm9sbCIsIiRtZW51IiwiJGJhbm5lckhlaWdodCIsImhlaWdodCIsInNjcm9sbFRvcCIsImhhc0NsYXNzIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImJvZHlXaWR0aCIsIm91dGVyV2lkdGgiLCJvbiIsInRvZ2dsZUNsYXNzIiwic2libGluZ3MiXSwibWFwcGluZ3MiOiI7O0FBQ0FBLEVBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFVOztBQUUzQjtBQUNHRixJQUFFLGtCQUFGLEVBQXNCRyxRQUF0Qjs7QUFFSjtBQUNJSCxJQUFFLGlCQUFGLEVBQXFCRyxRQUFyQjs7QUFFSjtBQUNBLE1BQUlDLFNBQVMsSUFBSUMsTUFBSixDQUFXLGdCQUFYLEVBQTZCO0FBQ3hDQyxlQUFXLFVBRDZCO0FBRXhDQyxtQkFBZSxDQUZ5QjtBQUd4Q0Msa0JBQWMsRUFIMEI7QUFJeENDLFlBQVEsTUFKZ0M7QUFLeENDLGdCQUFZLElBTDRCO0FBTXhDQyxnQkFBWTtBQUNWQyxVQUFJLG9CQURNO0FBRVZDLGlCQUFXO0FBRkQ7QUFONEIsR0FBN0IsQ0FBYjs7QUFZQTtBQUNBLE1BQUlULFNBQVMsSUFBSUMsTUFBSixDQUFXLGdCQUFYLEVBQTZCO0FBQ3hDRSxtQkFBZSxDQUR5QjtBQUV4Q0Msa0JBQWMsRUFGMEI7QUFHeENNLFVBQU0sSUFIa0M7QUFJeENDLGdCQUFZO0FBQ1ZDLGNBQVEseUJBREU7QUFFVkMsY0FBUTtBQUZFLEtBSjRCO0FBUXhDQyxpQkFBYTtBQUNYO0FBQ0EsV0FBSztBQUNIWCx1QkFBZSxDQURaO0FBRUhDLHNCQUFjLEVBRlg7QUFHSEUsb0JBQVk7QUFIVCxPQUZNO0FBT2Y7QUFDSSxXQUFLO0FBQ0hILHVCQUFlLENBRFo7QUFFSEMsc0JBQWM7QUFGWCxPQVJNO0FBWVg7QUFDQSxXQUFLO0FBQ0hELHVCQUFlLENBRFo7QUFFSEMsc0JBQWM7QUFGWDtBQWJNO0FBUjJCLEdBQTdCLENBQWI7O0FBNEJBOztBQUVFUixJQUFFbUIsTUFBRixFQUFVQyxNQUFWLENBQWlCLFlBQVk7QUFDM0IsUUFBSUMsUUFBUXJCLEVBQUUsU0FBRixDQUFaO0FBQ0EsUUFBSXNCLGdCQUFnQnRCLEVBQUUsU0FBRixFQUFhdUIsTUFBYixFQUFwQjtBQUNBLFFBQUl2QixFQUFFLElBQUYsRUFBUXdCLFNBQVIsS0FBc0IsQ0FBdEIsSUFBMkIsQ0FBQ0gsTUFBTUksUUFBTixDQUFlLE9BQWYsQ0FBaEMsRUFBeUQ7QUFDdkRKLFlBQU1LLFFBQU4sQ0FBZSxPQUFmO0FBQ0QsS0FGRCxNQUVPLElBQUkxQixFQUFFLElBQUYsRUFBUXdCLFNBQVIsS0FBc0IsQ0FBdEIsSUFBMkJILE1BQU1JLFFBQU4sQ0FBZSxPQUFmLENBQS9CLEVBQXdEO0FBQzdESixZQUFNTSxXQUFOLENBQWtCLE9BQWxCO0FBQ0Q7QUFDRixHQVJEOztBQVVGO0FBQ0EsTUFBSUMsWUFBWTVCLEVBQUUsTUFBRixFQUFVNkIsVUFBVixDQUFxQixJQUFyQixDQUFoQjs7QUFFRTdCLElBQUUsZ0JBQUYsRUFBb0I4QixFQUFwQixDQUF1QixPQUF2QixFQUFnQyxZQUFZO0FBQzFDLFFBQUlGLFlBQVksR0FBaEIsRUFBb0I7QUFDbEI1QixRQUFFLFNBQUYsRUFBYStCLFdBQWIsQ0FBeUIsZ0JBQXpCO0FBQ0g7QUFDQy9CLE1BQUUsSUFBRixFQUFRK0IsV0FBUixDQUFvQixhQUFwQjtBQUNBL0IsTUFBRSxXQUFGLEVBQWUrQixXQUFmLENBQTJCLE1BQTNCO0FBQ0QsR0FORDs7QUFTRjtBQUNBL0IsSUFBRSxlQUFGLEVBQW1COEIsRUFBbkIsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBVTtBQUN6QzlCLE1BQUUsSUFBRixFQUFRZ0MsUUFBUixDQUFpQixVQUFqQixFQUE2QkQsV0FBN0IsQ0FBeUMsTUFBekM7QUFDQS9CLE1BQUUsU0FBRixFQUFhK0IsV0FBYixDQUF5QixjQUF6QjtBQUNFLFdBQU8sS0FBUDtBQUNELEdBSkQ7QUFRQyxDQW5GRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gLy8g0KHQtdC70LXQutGCINCy0LDQu9GO0YLRi1xuICAgICQoJy5jYXNoZS13cmFwLWxpc3QnKS5zZWxlY3RlcigpO1xuXG4vLyDQodC10LvQtdC60YIg0Y/Qt9GL0LrQsFxuICAgICQoJy5sYW5nLXdyYXAtbGlzdCcpLnNlbGVjdGVyKCk7XG5cbi8vIGJhbm5lciBzbGlkZXJcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuYmFubmVyLXNsaWRlcicsIHtcbiAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICBzbGlkZXNQZXJWaWV3OiAxLFxuICBzcGFjZUJldHdlZW46IDMwLFxuICBlZmZlY3Q6ICdmYWRlJyxcbiAgbW91c2V3aGVlbDogdHJ1ZSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG59KTtcblxuLy8g0KHQu9Cw0LnQtNC10YAg0YLQvtCy0LDRgNCwXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcignLmNsb3Nlcy1zbGlkZXInLCB7XG4gIHNsaWRlc1BlclZpZXc6IDMsXG4gIHNwYWNlQmV0d2VlbjogMzAsXG4gIGxvb3A6IHRydWUsXG4gIG5hdmlnYXRpb246IHtcbiAgICBuZXh0RWw6ICcuc2xpY2stYXJyb3cuc2xpY2stbmV4dCcsXG4gICAgcHJldkVsOiAnLnNsaWNrLWFycm93LnNsaWNrLXByZXYnLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDQ1MHB4XG4gICAgNDUwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMCxcbiAgICAgIG1vdXNld2hlZWw6IGZhbHNlXG4gICAgfSxcbi8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDY4MHB4XG4gICAgNjgwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAxMFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gOTkycHhcbiAgICA5OTI6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDIwXG4gICAgfVxuICB9XG59KTtcblxuLy8g0YTQuNC60YHQuNGA0L7QstCw0L3QvdC+0LUg0LzQtdC90Y5cblxuICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJG1lbnUgPSAkKFwiLmhlYWRlclwiKTtcbiAgICB2YXIgJGJhbm5lckhlaWdodCA9ICQoJy5oZWFkZXInKS5oZWlnaHQoKTtcbiAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEgJiYgISRtZW51Lmhhc0NsYXNzKFwiZml4ZWRcIikpIHtcbiAgICAgICRtZW51LmFkZENsYXNzKCdmaXhlZCcpO1xuICAgIH0gZWxzZSBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA8IDEgJiYgJG1lbnUuaGFzQ2xhc3MoXCJmaXhlZFwiKSkge1xuICAgICAgJG1lbnUucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XG4gICAgfTtcbiAgfSk7XG5cbi8vINCx0YPRgNCz0LXRgCDQvNC10L3RjlxudmFyIGJvZHlXaWR0aCA9ICQoJ2JvZHknKS5vdXRlcldpZHRoKHRydWUpO1xuXG4gICQoJy50b2dnbGUtYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChib2R5V2lkdGggPCA5OTIpe1xuICAgICAgJCgnLmhlYWRlcicpLnRvZ2dsZUNsYXNzKCdvcGVuLW1haW4tbWVudScpO1xuICB9XG4gICAgJCh0aGlzKS50b2dnbGVDbGFzcygnYnV0dG9uLW9wZW4nKTtcbiAgICAkKCcubmF2LW1lbnUnKS50b2dnbGVDbGFzcygnc2hvdycpO1xuICB9KTtcblxuXG4vLyBzdWJtZW51XG4kKCcuc3VibWVudS1saW5rJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiQodGhpcykuc2libGluZ3MoJy5zdWJtZW51JykudG9nZ2xlQ2xhc3MoJ3Nob3cnKTtcbiQoJy5oZWFkZXInKS50b2dnbGVDbGFzcygnc3VibWVudS1vcGVuJyk7XG4gIHJldHVybiBmYWxzZTtcbn0pO1xuXG5cblxufSk7XG4iXX0=
