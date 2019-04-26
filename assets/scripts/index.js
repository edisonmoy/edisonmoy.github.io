
	var red = "#D56969";
	var blue = "#ADCAD3";
	var grey = "#707070";


	$("#red-circle").click(function() {
    var back = document.getElementById("page");
    var right_line = document.getElementById("red-line");
    var left_line = document.getElementById("blue-line");
    var nav_items = document.getElementsByTagName("a");
    var stroke1 = document.getElementsByClassName("text text-stroke text-stroke-2");
    var the_overlay_color = document.getElementById("overlay-color");
    var the_overlay = document.getElementById("overlay");


	if(back.style.background === "rgb(213, 105, 105)"){
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = grey;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = blue;
        }
        back.style.background = "white";
        left_line.style.background = blue;
        right_line.style.background = red;
        the_overlay_color.style.zIndex = 1;
        the_overlay.style.zIndex = 3;
    }else{
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = grey;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = blue;
        }
        back.style.background = red;
        left_line.style.background = blue;
        right_line.style.background = grey;
        the_overlay_color.style.zIndex = 3;
        the_overlay.style.zIndex = 1;
    }
  });
	$("#blue-circle").click(function() {
   	var back = document.getElementById("page");
    var right_line = document.getElementById("red-line");
    var left_line = document.getElementById("blue-line");
    var nav_items = document.getElementsByTagName("a");
    var stroke1 = document.getElementsByClassName("text text-stroke text-stroke-2");
    var the_overlay_color = document.getElementById("overlay-color");
    var the_overlay = document.getElementById("overlay");


	if(back.style.background === "rgb(173, 202, 211)"){
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = grey;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = blue;
        }
        back.style.background = "white";
        left_line.style.background = blue;
        right_line.style.background = red;
        the_overlay_color.style.zIndex = 1;
        the_overlay.style.zIndex = 3;
    }else{
        
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = grey;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = grey;
        }
        back.style.background = blue;
        left_line.style.background = grey;
        right_line.style.background = red;
        the_overlay_color.style.zIndex = 1;
        the_overlay.style.zIndex = 3;  
    }
  });
	$("#grey-circle").click(function() {
    var back = document.getElementById("page");
    var right_line = document.getElementById("red-line");
    var left_line = document.getElementById("blue-line");
    var nav_items = document.getElementsByTagName("a");
    var stroke1 = document.getElementsByClassName("text text-stroke text-stroke-2");
    var the_overlay_color = document.getElementById("overlay-color");
    var the_overlay = document.getElementById("overlay");

	if(back.style.background === "rgb(112, 112, 112)"){
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = grey;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = blue;
        }
        back.style.background = "white";
        left_line.style.background = blue;
        right_line.style.background = red;
        the_overlay_color.style.zIndex = 1;
        the_overlay.style.zIndex = 3;
    }else{
        for (var i = 0; i < nav_items.length; i++) {
        	nav_items[i].style.color = red;
        }
        for (var i = 0; i < stroke1.length; i++) {
        	stroke1[i].style.stroke = blue;
        }
    }
    back.style.background = grey;
    left_line.style.background = blue;
    right_line.style.background = red;
    the_overlay_color.style.zIndex =3;
    the_overlay.style.zIndex = 1;
    });

$(function() {
  $('.intro').addClass('go');

  // $('.reload').click(function() {
  //   $('.intro').removeClass('go').delay(200).queue(function(next) {
  //     $('.intro').addClass('go');
  //     next();
  //   });

  // });
})
  
	

	