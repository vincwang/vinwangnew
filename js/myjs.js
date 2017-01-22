$(document).ready(function() {
  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      $(".navbar").css({
        "background-color": "rgba(255, 255, 255, .7)"
      });
      $(".navbar-default").css({
        "background-color": "rgba(255, 255, 255, .7)",
        "border-color": "rgba(255, 255, 255, .7)"
      });
      $(".vincentwang a").css({
        "color": "#304966",
        "border": "2px solid #354458",
      });
      $(".navbar-default .navbar-nav>li>a").css({
        "color": "#354458"
      });
    } else {
      $(".navbar").css({
        "background-color": "transparent"
      });
      $(".navbar-default").css({
        "background-color": "transparent",
        "border-color": "transparent"
      });
      $(".vincentwang a").css({
        "color": "#fff",
        "border": "2px solid #FDFEFE"
      });
      $(".navbar-default .navbar-nav>li>a").css({
        "color": "#FDFEFE"
      });
    }
  });
});
