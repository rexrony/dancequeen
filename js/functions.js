AOS.init({ disable: 'mobile' });

$('.set > a').on("click", function(){
  if($(this).hasClass('active')){
    $(this).removeClass("active");
    $(this).siblings('.content').slideUp(200);
    $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
  }else{
    $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
  $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
  $(".set > a").removeClass("active");
  $(this).addClass("active");
  $('.content').slideUp(200);
  $(this).siblings('.content').slideDown(200);
  } 
});





$(".tab-links a").click(function(event) {

  event.preventDefault();
  $(this).parent().addClass("activetab");
  $(this).parent().siblings().removeClass("activetab");
  var tab = $(this).attr("href");
  $(".tab-contents").not(tab).css("display", "none");
  $(tab).fadeIn();
});

