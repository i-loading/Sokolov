$(document).ready(function () {
  $(".index-header .menu li a").click(function (e) { 
    $(".index-header .menu li a").removeClass("active"); 
    $(this).addClass("active");
  });
});