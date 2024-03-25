// Smooth scrolling for anchor links
$(document).ready(function () {
  $(".navbar-collapse a").on("click", function () {
      $(".navbar-collapse").collapse("hide");
  });

  $(".smoothscroll").click(function () {
      var el = $(this).attr("href");
      var elWrapped = $(el);
      var header_height = $(".navbar").height();

      scrollToDiv(elWrapped, header_height);
      return false;

      function scrollToDiv(element, navheight) {
          var offset = element.offset();
          var offsetTop = offset.top;
          var totalScroll = offsetTop - navheight;

          $("body,html").animate({
              scrollTop: totalScroll
          }, 300);
      }
  });
});

// Masonry layout for events grid
$(document).ready(function () {
  $("#events-grid").masonry({
      itemSelector: ".col-md-6",
      columnWidth: ".col-md-6",
      horizontalOrder: true
  });
});
