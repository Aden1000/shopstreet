document.getElementById("HeaderMenu").onclick=function(){
  //create a smooth animation of the menu bars when clicked
  $("#HeaderMenu #Bar1").toggleClass("clicked");
  $("#HeaderMenu #Bar2").toggleClass("clicked");
  $("#HeaderMenu #Bar3").toggleClass("clicked");
  if($("#HeaderMenu #Bar1").hasClass("clicked")){
     $("#HeaderMenu #Bar1").css("transform","translateY(10px)");
    setTimeout(function(){ 
      $("#HeaderMenu #Bar1").css("transform","translateY(10px) rotate(-45deg)");
    },250);
    
     }
  else{
       $("#HeaderMenu #Bar1").css("transform","translateY(0px) rotate(0deg)");
  }
  if($("#HeaderMenu #Bar3").hasClass("clicked")){
     $("#HeaderMenu #Bar3").css("transform","translateY(-10px)");
    setTimeout(function(){ 
      $("#HeaderMenu #Bar3").css("transform","translateY(-10px) rotate(45deg)");
    },250);
    
     }
  else{
       $("#HeaderMenu #Bar3").css("transform","translateY(0px) rotate(0deg)");
  }
   $("#MainContent").toggleClass("slide");
  $("#Header").toggleClass("slide");
}

document.body.onload=function(){
  $("#HeaderExtra").height($("#Header").height());
 $("#HeaderExtra").css("padding",$("#Header").css("padding"));
}

window.onresize=function(){
   $("#HeaderExtra").height($("#Header").height());
 $("#HeaderExtra").css("padding",($("#Header").css("padding")));
}