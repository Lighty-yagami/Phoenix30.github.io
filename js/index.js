$(document).ready(function() {
    var a = 0;
    var b = (2*Math.PI)/3;
    var c = (4*Math.PI)/3;
    var d = a + (Math.PI / 3);
    var e = b + (Math.PI / 3);
    var f = c + (Math.PI / 3);
    setInterval(function() {
      a = (a + Math.PI / 360) % (Math.PI * 2);
      b = (b + Math.PI / 360) % (Math.PI * 2);
      c = (c + Math.PI / 360) % (Math.PI * 2);
      d = (d + Math.PI / 360) % (Math.PI * 2);
      e = (e + Math.PI / 360) % (Math.PI * 2);
      f = (f + Math.PI / 360) % (Math.PI * 2);
      rotateClockwise1("#p1",a,200);
      rotateClockwise1("#p2",b,200);
      rotateClockwise1("#p3",c,200);
      rotateAntiClockwise1("#p4",a,300);
      rotateAntiClockwise1("#p5",b,300);
      rotateAntiClockwise1("#p6",c,300);
      rotateClockwise2("#p7",d,250);
      rotateClockwise2("#p8",e,250);
      rotateClockwise2("#p9",f,250);
      rotateAntiClockwise2("#p10",d,250);
      rotateAntiClockwise2("#p11",e,250);
      rotateAntiClockwise2("#p12",f,250);
    }, 10);
    setInterval(function() {
      $("#det").addClass("jello");
    },2000);
    setInterval(function() {
      $("#det").removeClass("jello");
    },1900);
});

function rotateClockwise1(ele,angle,radius) {
  var x = $(window).width()/2 -50 - (radius * Math.cos(angle));
  var y = $(window).height()/2 -50 - (radius * Math.sin(angle));
  $(ele).css({"position": "absolute", "top": y+"px", "left": x+"px"});
}

function rotateClockwise2(ele,angle,radius) {
  var x = $(window).width()/3 -100 - (radius * Math.cos(angle));
  var y = $(window).height()/2 -50 - (radius * Math.sin(angle));
  $(ele).css({"position": "absolute", "top": y+"px", "left": x+"px"});
}

function rotateAntiClockwise1(ele,angle,radius) {
  var x = $(window).width()/2 -50 + (radius * Math.cos(angle));
  var y = $(window).height()/2 -50 - (radius * Math.sin(angle));
  $(ele).css({"position": "absolute", "top": y+"px", "left": x+"px"});
}

function rotateAntiClockwise2(ele,angle,radius) {
  var x = 2*$(window).width()/3 -100 + (radius * Math.cos(angle));
  var y = $(window).height()/2 -50 - (radius * Math.sin(angle));
  $(ele).css({"position": "absolute", "top": y+"px", "left": x+"px"});
}
