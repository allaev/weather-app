/* global $ */

var temp=$("#temperature").html();
  if (temp>"50") {
    $("body").css("background-color", "red");    
  }
  else {    
    $("body").css("background-color", "blue");    
  }
