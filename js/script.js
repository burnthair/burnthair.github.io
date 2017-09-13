$(document).ready(function() {
  // Full opacity for silhouette
  $("#silhouette1").fadeIn(1414);
  $("#silhouette2").fadeIn(555);
  $("#silhouette3").fadeIn(999);
  $("#silhouette2").fadeOut(999);
  $("#silhouette3").fadeOut(555);
  // Functionality for the bottom progress bar
  $(window).scroll(function() {
    var winTop = $(window).scrollTop(),
    docHeight = $('body').height(),
    winHeight = $(window).height();
    var totalScroll = (winTop/(docHeight-winHeight))*100;
    $(".KW_progressBar").css("width",totalScroll+"%");
  });
  // Functionality to fade in and out text on the side navigation bar
  $(".side-nav").hover(function() {
      $(".side-nav").addClass('side-nav-active');
      $(".nav-arrow").addClass('nav-arrow-active');
      $(".side-nav-link").addClass('side-nav-link-active');
    }, function() {
      $(".side-nav").removeClass('side-nav-active');
      $(".nav-arrow").removeClass('nav-arrow-active');
      $(".side-nav-link").removeClass('side-nav-link-active');
    }
  );
  $(".about-box").on('touchstart', function() {
    $(".about-box").children('p').slideUp();
    $(".about-box").children('.about-arrow').css({"transform": "rotate(90deg)", "-webkit-transform": "rotate(90deg)"});
    $(this).children('p').slideDown();
    $(this).children('.about-arrow').css({"transform": "rotate(510deg)", "-webkit-transform": "rotate(510deg)"});
  });

  // Functionality to "light focus" the hovered demo box
  // $(".demo-box").hover(function() {
  //   $(".demo-box").css("z-index", "10")
  //   $(this).css("z-index","1000")
  //   $("#overlay").fadeTo(100, 0.1);
  // }, function() {
  //   $("#overlay").fadeOut(100);
  // });
  // Replay burger animation
  var burgerPlayCount = 0;
  $("#burger-button").click(function() {
    burgerPlayCount++
    if (burgerPlayCount > 1) {
      $(".shift-element").attr("data-animation","shift_exitLeft");
    } else {
      setTimeout(function() {
        $("#burger-button").text("MAKE ANOTHER");
      }, 3300);
    }
  });
  // Set the element with class of "carousel" to a slick.js carousel with autoplay
  $(".carousel").slick({autoplay: true, autoplaySpeed: 4000});
});
