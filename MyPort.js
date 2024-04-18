$(document).ready(function () {
    $(window).scroll(function () {
      //  sticky navbar on scroll script  //
      if (this.scrollY > 20) {
        $(".navbar").addClass("sticky");
      } else {
        $(".navbar").removeClass("sticky");
      }
  
      //  scroll-up button show/hide script  //
      if (this.scrollY > 500) {
        $(".scroll-up-btn").addClass("show");
      } else {
        $(".scroll-up-btn").removeClass("show");
      }
    });
  
    //  slide-up script  //
  
    $(".scroll-up-btn").click(function () {
      $("html").animate({ scrollTop: 0 });
      //  removing smooth scroll on slide-up button click  //
      $("html").css("scrollBehavior", "auto");
    });
  
    $(".navbar .menu li a").click(function () {
      //  Smooth scroll on Menu Items click  //
  
      $("html").css("scrollBehavior", "smooth");
    });
  
    //  Toggle Navbar  //
  
    $(".menu-btn").click(function () {
      $(".navbar .menu").toggleClass("active");
      $(".menu-btn i").toggleClass("active");
    });
  
    //  Typing Text Animation  //
  
    var typed = new Typed(".typing", {
      strings: [
        ".Net Developer",
        "Web Developer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    var typed = new Typed(".typing-2", {
      strings: [
        "Web Developer",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    });
  
    //  Owl Carousel  //
  
    $(".carousel").owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        600: {
          items: 2,
          nav: false
        },
        1000: {
          items: 3,
          nav: false
        }
      }
    });
  });

//my projects more details

  $(".more-about-gen-asset").click(function () {
    alert('ask the creator');
  });

  $(".more-about-port").click(function () {
    window.location.href = "https://fredc01.github.io/flc/";
  });

  $(".more-about-row").click(function () {
    alert('ask the creator');
  });

  $(".more-about-proj-exp").click(function () {
    alert('ask the creator');
  });

  $(".more-about-lease-exp").click(function () {
    alert('ask the creator');
  });

  $(".more-about-org-view").click(function () {
    alert('ask the creator');
  });

  $(".more-about-tube-color").click(function () {
    alert('ask the creator');
  });


  document.getElementById('download-cv').addEventListener('click', function() {
    var downloadLink = document.createElement('a');
    downloadLink.href = 'file/Fred_CV.pdf';
    downloadLink.download = 'Fred_CV.pdf';
    downloadLink.click();
  });

  document.getElementById('download-cv-me').addEventListener('click', function() {
    var downloadLink = document.createElement('a');
    downloadLink.href = 'file/Fred_CV.pdf';
    downloadLink.download = 'Fred_CV.pdf';
    downloadLink.click();
  });