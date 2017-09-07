$(document).ready(function () {
  showT1();
  $("#heading").addClass("zoomIn");
  $("#m1").mouseover(function () {
    showT1();
  });
  $("#m2").mouseover(function () {
    showT2();
  });
  $("#m3").mouseover(function () {
    showT3();
  });
});

function showT1() {
  $("#t1").show();
  $("#m1").addClass("dark");
  $("#t2").hide();
  $("#m2").removeClass("dark");
  $("#t3").hide();
  $("#m3").removeClass("dark");
  $("#viewField").css({"background-image": "url('./img/codebreaker.jpg')"});
}

function showT2() {
  $("#t2").show();
  $("#m2").addClass("dark");
  $("#t1").hide();
  $("#m1").removeClass("dark");
  $("#t3").hide();
  $("#m3").removeClass("dark");
  $("#viewField").css({"background-image": "url('./img/tank.jpg')"});
}

function showT3() {
  $("#t3").show();
  $("#m3").addClass("dark");
  $("#t2").hide();
  $("#m2").removeClass("dark");
  $("#t1").hide();
  $("#m1").removeClass("dark");
  $("#viewField").css({"background-image": "url('./img/rocket.jpg')"});
}
