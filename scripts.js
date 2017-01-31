$(function(){
  highlight();
  var headlines = ["Bermuda real estate made simple.","A team you can trust.","Helping you buy, sell, or lease property."]
  var i = 0

  setInterval(function(){
    if ( i < 2 ){
      i++;
    } else {
      i = 0;
    }

    $("#headline h1").fadeOut(1500, function(){
      $("#headline h1").html(headlines[i]);
      setTimeout(function(){$("#headline h1").fadeIn(1500)}, 500)
    });
  },7000);

  $(".about-link").click(function(){
    $("html, body").animate({
      scrollTop: $("#about").offset().top - 100
    }, 500)
  })

  $(".services-link").click(function(){
    $("html,body").animate({
      scrollTop: $("#services").offset().top - 100
    }, 500)
  })

  $(".contact-link").click(function(){
    $("html, body").animate({
      scrollTop: $("#contact").offset().top - 100
    }, 500)
  })

  $("#logo").click(function(){
    $("html, body").animate({
      scrollTop: $("body").offset().top
    }, 500)
  })

  $('#menu').mouseenter(function(){
    $('#dropdown').css('display','inline-block');
    $('#menu').css({'background-color':'#18AAB7'});

  })

  $('#menu').mouseleave(function(){
    $('#dropdown').css('display','none')
    $('#menu').css('background-color','transparent')
  })

  $('#dropdown').click(function(){
    $('#dropdown').toggle()
  })


  function highlightDefintion(stop){
    var offset = $("#definition-box").offset().top;

    if ( (stop >= offset - 400 ) && (stop <= (offset)) ){
      $("#definition-box div").addClass("highlight");
    } else {
      $("#definition-box div").removeClass("highlight");
    }
  }

  function menuToggle(){
      if((window.innerWidth < 1072) && (window.innerWidth > 540)){
        $("#nav").css("display","none");
        $("#menu").css("display","inline");
      }
      else {
        $("#nav").css("display","inline");
        $("#menu").css("display","none");
      }
  }

  menuToggle();

  window.addEventListener('resize', function(event){
    menuToggle();
  });

  $(window).on('scroll', function(){
    highlight();
  });

  function highlight(){

    var windowBoxBottom = $("#window-box").offset().top + $("#window-box").height() - 90;
    var stop = Math.round($(window).scrollTop());

    if ( stop > windowBoxBottom ){
      $("#title").addClass('past-box');
      $("#logo").addClass('past-box');
    } else {
      $("#title").removeClass('past-box');
      $("#logo").removeClass('past-box');
    }

    if ( stop > ( windowBoxBottom - 75)  ){
      $("#nav").addClass('fix-nav');
    } else {
      $("#nav").removeClass('fix-nav');
    }

    highlightDefintion(stop);
  }

});