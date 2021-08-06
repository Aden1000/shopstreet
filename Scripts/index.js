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
document.body.onbeforeload=function(){
   $("#HeaderExtra").height($("#Header").height());
 $("#HeaderExtra").css("padding",$("#Header").css("padding"));
}
document.body.onload=function(){
  $("#HeaderExtra").height($("#Header").height());
 $("#HeaderExtra").css("padding",$("#Header").css("padding"));
var SlideIn=SlideInElements();
}

window.onresize=function(){
   $("#HeaderExtra").height($("#Header").height());
 $("#HeaderExtra").css("padding",($("#Header").css("padding")));
}

function SlideInElements(){
 count=$(".Product.hidden").length;
  for(j=0;j<count; j++){
    Obj=$(".Product.hidden")[0];
    var isVisible=Check_Position(Obj);
    if(isVisible==true){
      $(Obj).removeClass("hidden");
      $(Obj).addClass("shown");
    }
  }
  function Check_Position(Obj){
  var Position=Obj.getBoundingClientRect();
  var ScreenHeight=window.innerHeight;
  if(Position.top<=ScreenHeight) return true;
  else return false;
}
}

function Favourite(obj){
  if($(obj).attr("src")=="Images/Unfavourite.png"){
    //create the animation
    $(obj).css("transform","scale(1.2,1.2)");
    $(obj).attr("src","Images/Favourite.png");
     $("#Alert").toggleClass("shown"); 
  setTimeout(function(){
    //remove the animation and show the alert
    $(obj).css("transform","scale(1,1)");
    $("#Alert").html("Product has be added to favourites");                  
  },100)
    //remove the alert
    setTimeout(function(){
       $("#Alert").toggleClass("shown"); 
    },3000)
  }
  else{
     $(obj).css("transform","scale(1.2,1.2)");
    $(obj).attr("src","Images/Unfavourite.png");
    $("#Alert").html("Product has been removed from favourites");
     $("#Alert").toggleClass("shown"); 
    setTimeout(function(){
      $(obj).css("transform","scale(1,1)");
  },100)
   //remove the alert
    setTimeout(function(){
       $("#Alert").toggleClass("shown"); 
    },3000)  
  }
}

function ShowDetails(obj){
 $("#Product_Details").find("#Details").find("#Banner").html("");
  $(obj).css("transform","scale(1.2,1.2)");
  $("#MainContent").toggleClass("blur");
  $("#Header").toggleClass("blur");
  setTimeout(function(){
    //remove the animation and show the alert
    $(obj).css("transform","scale(1,1)");           
  },100)
  $("#Product_Details").toggleClass("shown");
  var Img=obj.parentElement.parentElement.getElementsByTagName("img").item(1).getAttribute("src");
  var Name=obj.parentElement.parentElement.getElementsByTagName("h3").item(0).innerHTML;
  var Banner="<img src='"+Img+"'>"+Name;
  $("#Product_Details").find("#Details").find("#Banner").html(Banner);
}
function CloseDetails(obj){
   $(obj).css("transform","scale(1.2,1.2)");
   setTimeout(function(){
    //remove the animation and show the alert
    $(obj).css("transform","scale(1,1)");           
  },100);
  setTimeout(function(){
  $("#Product_Details").toggleClass("shown");
   $("#MainContent").toggleClass("blur");
  $("#Header").toggleClass("blur");
},400)
}