$(document).ready(function() {
  // Apply lettering() to the name title
  $("#name-title").lettering();
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
      $(".side-nav-hidden").fadeIn(400, false);
    }, function() {
      $(".side-nav-hidden").fadeOut(400, false);
    }
  );
  // Functionality to "light focus" the hovered demo box
  $(".demo-box").hover(function() {
    $(".demo-box").css("z-index", "10")
    $(this).css("z-index","1000")
    $("#overlay").fadeTo(100, 0.1);
  }, function() {
    $("#overlay").fadeOut(100);
  });
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

  $('.parallax-layer').parallax({
    mouseport: jQuery("#port")
  });
});

var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine = Engine.create();

var render = Render.create({
  element: document.body.children[2],
  engine: engine,
  options: {
    background: 'rgba(0,0,0,0)',
    width: 500,
    height: 700,
    wireframes: false
  }
});

//HTML5
//CSS
//javascript
//jquery
//angular
//postgres
//nodejs
//inkscape
//indesign


var leftConstraint = Bodies.rectangle(125, 100, 5, 200, { render: {fillStyle: "#333"}, isStatic: true });
var rightConstraint = Bodies.rectangle(425, 100, 5, 200, { render: {fillStyle: "#666"}, isStatic: true });
var bottomRightConstraint = Bodies.rectangle(375, 200, 150, 5, { render: {fillStyle: "#999"}, isStatic: true });
var bottomLeftConstraint = Bodies.rectangle(175, 200, 150, 5, { render: {fillStyle: "#bbb"}, isStatic: true });
var cssLogo = Bodies.rectangle(176, 100, 80, 80, {render: {sprite: {texture: "./img/css3-logo.png"}}});
var htmlLogo = Bodies.circle(184, 200, 40, {render: {sprite: {texture: "./img/html5-logo.svg"}}});
var postgresLogo = Bodies.circle(236, 20, 40, {render: {sprite: {texture: "./img/postgres-logo.png"}}});
var inkscapeLogo = Bodies.circle(284, 140, 40, {render: {sprite: {texture: "./img/inkscape-logo.svg"}}});
var ground = Bodies.rectangle(250, 680, 510, 60, { isStatic: true });

World.add(engine.world, [leftConstraint, rightConstraint, bottomRightConstraint, bottomLeftConstraint, cssLogo, htmlLogo, postgresLogo, inkscapeLogo, ground]);

Engine.run(engine);

Render.run(render);
