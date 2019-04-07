(function($) {
  "use strict"; // Start of use strict

  // var videoUrls = [
  //   "video/Header/3.mov",
  //   "video/Header/6.mov",
  //   "video/Header/1.mp4",
  //   "video/Header/2.mp4",
  //   "video/Header/4.mp4",
  //   "video/Header/7.mp4",
  //   "video/Header/8.mp4",
  //   "video/Header/9.mp4",
  // ]

  // document.getElementById("video-to-change").src = videoUrls[Math.floor(Math.random() * videoUrls.length)];

  // *** Need modify Later
  $('a[href*="#"]').on("click", function(e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      400,
      "linear"
    );
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      $();
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // test
  // $("#btnLogin").click(function(event) {

  //   //Fetch form to apply custom Bootstrap validation
  //   var form = $("#formLogin")

  //   if (form[0].checkValidity() === false) {
  //     event.preventDefault()
  //     event.stopPropagation()
  //   }

  //   form.addClass('was-validated');
  // });
})(jQuery); // End of use strict
