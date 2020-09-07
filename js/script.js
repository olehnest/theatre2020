var $j = jQuery.noConflict();

const loader = document.querySelector(".loader");
    window.onload = function(){
      setTimeout(function(){
        loader.style.opacity = 0;
        setTimeout(function(){
          loader.style.display = "none";
        }, 300);
      },1000);
    };

$('.cardtest').hover(function(){
if($(this).hasClass("active")){
  $('.cardtest .bottomtest').slideUp(function(){
    $('.cardtest').removeClass("active");
  });
}else{
  $('.cardtest').addClass("active");
  $('.cardtest .bottomtest').stop().slideDown();
}
});