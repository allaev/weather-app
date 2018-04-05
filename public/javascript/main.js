/* global $ */

var temp=$("#temperature").html();
  if (temp<="0") {
    $("body").css("background-image", "url(../images/0.jpg)");    
  }
  else if (temp<="16") {
    $("body").css("background-image", "url(../images/16.jpg)");    
  }
  else if (temp<"32") {
    $("body").css("background-image", "url(../images/32.jpg)");    
  }
  else if (temp<"50") {
    $("body").css("background-image", "url(../images/50.jpg)");    
  }
  else if (temp<"59") {
    $("body").css("background-image", "url(../images/59.jpg)");    
  }
  else if (temp<"68") {
    $("body").css("background-image", "url(../images/68.jpg)");    
  }
  else {
    $("body").css("background-image", "url(../images/70.jpg)");    
  }
  
