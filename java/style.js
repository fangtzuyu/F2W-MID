$( document).ready(function() {
  $(".logo").mouseenter(function(){
    $(this).css('transition',' all 0.2s linear').css('opacity','0.5');
  });
  $(".logo").mouseleave(function(){
    $(this).css('transition',' all 0.2s linear').css('opacity','1');
  });
  $(".grid-item img").mouseenter(function(){
    $(this).css('transition',' all 0.2s linear').css('opacity','0.5');
  });
  $(".grid-item img").mouseleave(function(){
    $(this).css('transition',' all 0.2s linear').css('opacity','1');
  });
  $(".icon").mouseenter(function(){
    $(this).css('transition',' all 0.2s linear').css('opacity','0.5');
  });
  $(".icon").mouseleave(function(){
    $(this).css('transition',' all 0.2s linear').css('opacity','1');
  });
});
$( document).ready(function() {
  $(".box-nav .menu").click(function(){
    var $ul =$(".box-nav ul");
    if($ul.hasClass("menu-click")){
      $ul.removeClass("menu-click");
      $ul.slideUp();
    }else{
      $ul.addClass("menu-click");
      $ul.slideDown();
      return false;
    }
  })
});
