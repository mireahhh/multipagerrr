// общий код
$(document).ready(function() {
  // движение фона
  $('body').mousemove(function(event) {
    $(document).mousemove(function(e) {
      $('.blurstars').css({
        left: 25 - e.pageX / 50,
        top: 25 - e.pageY / 50
      })
      $('.sprinkles, .smallsprinkles, .bigsprinkles').css({
        left: 10 - e.pageX / 25,
        top: 10 - e.pageY / 25
      })
      $('.stars').css({
        left: 25 - e.pageX / 9,
        top: 25 - e.pageY / 9
      })
    })
  })



  // опции и бронь
  $('.fivestars').click(function() {$('.alloptions').toggleClass('none');});
  $('#five').click(function() {
    $('.alloptions').addClass('none');
    $('.bronoff').removeClass('none');
  });
  $('.prereserve').click(function() {
    $('.alloptions').addClass('none');
    $('.bronoff').removeClass('none');
  });
  $('#ten').click(function() {
    $('.bronoff').addClass('none');
    $('html').addClass('wow');
    $('.uraaa').removeClass('none');
  });
  $('.off, #ten').click(function() {
    $('.onestar, .fivestars, .threestars, .bubble1, .bubble2, .bubble3, .allbubble4, .bubble5, .bubble6, .bubble7, .allbubble8, .bubble9, .bubble10, .bubble11, .bubble12, .bubble13, .bubble14, .bubble15, .bubble16, .allbubble17').removeClass('none');
    $('.bronoff').addClass('none');
  });
  $('.fivestars').click(function() {$('.bubble1, .bubble2, .bubble3, .allbubble4, .bubble5, .bubble6, .bubble7, .allbubble8, .bubble9, .bubble10, .bubble11, .bubble12, .bubble13, .bubble14, .bubble15, .bubble16, .allbubble17').toggleClass('none');});
  $('#five').click(function() {$('.onestar, .fivestars, .threestars').addClass('none');});



  // кнопка наверх
  $(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() != 0) {$('.threestars').fadeIn();}
      else {$('.threestars').fadeOut();}
    });
    $('.threestars').click(function() {
      $('body, html').animate({scrollTop: 0}, 1600);
    })
  });
});



  // сопровождающее меню
  jQuery(window).scroll(function () {
    var top = jQuery(this).scrollTop();
    var menu = jQuery('.sticky');
    if (top < 200) {
      menu.stop().css('top', '0px');
    }
    if (top > 201 && top < 300) {
      menu.css('top', '-70px');
      menu.css('position', 'absolute');
    }
    if (top >= 570) {
      menu.css('position', 'fixed');
      if (menu.css('top') == '-70px') {
        menu.stop().animate({
        top: 0
      }, 200);
    }
  }
});
