var LastScroll;
var rotate;
function SlideInElements(){
  count=$(".Product.hidden").length;
  for(j=0;j<count; j++){
    Obj=$(".Product.hidden")[0];
    if(Check_Position(Obj)==true){
      $(Obj).removeClass("hidden");
      $(Obj).addClass("shown");
    }
    else{
      $(Obj).removeClass("shown");
      $(Obj).addClass("hidden");
    }
  }
  function Check_Position(Obj){
  var Position=Obj.getBoundingClientRect();
  var ScreenHeight=window.innerHeight;
  if(Position.top<=ScreenHeight) return true;
  else return false;
}
}
function ShowMenu(){
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
function Favourite(obj){
  if($(obj).attr("src")=="Images/Unfavourite.svg"){
    //create the animation
    $(obj).css("transform","scale(1.2,1.2)");
    $(obj).attr("src","Images/Favourite.svg");
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
    $(obj).attr("src","Images/Unfavourite.svg");
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
function AddToCart(obj){
  $(obj).css("transform","scale(1.2,1.2)");
  $(obj).css("opacity","0.5");
  $(obj).attr("onclick","")
  
  setTimeout(function(){
    //remove the animation and show the alert
    $(obj).css("transform","scale(1,1)");
    $("#Alert").html("Product has been added to cart");    
    $("#Alert").toggleClass("shown"); 
  },100)
    //remove the alert
    setTimeout(function(){
       $("#Alert").toggleClass("shown"); 
    },3000)
}
function ShowDetails(obj){
LastScroll=window.scrollY;
  /*prepare the details*/
 $("#Product_Details").find("#Details").find("#Banner").html("");
    $(obj).css("transform","scale(1,1)");           
  var Img=obj.getElementsByTagName("img").item(0).getAttribute("src");
  var Name=obj.getElementsByTagName("h3").item(0).innerHTML;
  var Price=obj.getElementsByClassName("Price").item(0).innerHTML;
  var Banner="<img src='"+Img+"'>" + Name +"<br>" + "<div class='Price'>"+ Price + "</div>";
  $("#Product_Details").find("#Details").find("#Banner").html(Banner);
//  var deg=0;
//  rotate=setInterval(function(){
//    deg+=1;
//    $("#Product_Details #Details #Banner img").eq(0).css("transform","rotateY("+deg+"deg)");
//    if(deg%180==0){
//      deg=0;
//    }
//  },10)
  $("#Product_Details").toggleClass("shown");
  /*blur the main content*/
  setTimeout(function(){
  $("#MainContent").toggleClass("blur");
  $("#Header").toggleClass("blur");},1000)
}
function CloseDetails(obj){
   $(obj).css("transform","scale(1.2,1.2)");
  clearInterval(rotate);
   setTimeout(function(){
    //remove the animation and show the alert
    $(obj).css("transform","scale(1,1)");           
  },100);
  setTimeout(function(){
  $("#Product_Details").toggleClass("shown");
   $("#MainContent").toggleClass("blur");
  $("#Header").toggleClass("blur");
    window.scrollTo(0,LastScroll);
},400)
  setTimeout(function(){
  $("#AddToCart").css("opacity","1");
  $("#AddToCart").attr("onclick","AddToCart(this)");}
  ,1000)
}
function SearchKeyword(){
  return false;
}
function RemoveSearch_Icon(){
  $("#Search_Icon").css("display","none");
  $("#SearchBox").css("margin-right","25px")
}
function ShowSearch_Icon(){
  $("#Search_Icon").css("display","block");
  $("#SearchBox").css("margin-right","0px")
}
