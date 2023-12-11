gsap.registerPlugin(ScrollTrigger);

$(function () {
  gsap.to("header", {
    top: 0,
    duration: 1.5
  });
  gsap.to(".intro .top-area .text-wrap", {
    top: "50%",
    opacity: 1,
    duration: 1,
    delay: 1
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      gsap.to("header", {
        top: -192,
        duration: 1
      });
      gsap.to(".intro .top-area .text-wrap", {
        top: "40%",
        opacity: 0,
        duration: 1
      });
    } else if ($(this).scrollTop() === 0) {
      gsap.to("header", {
        top: 0,
        duration: 1.5
      });
      gsap.to(".intro .top-area .text-wrap", {
        top: "50%",
        opacity: 1,
        duration: 1,
        delay: 1
      });
    }

    if ($(this).scrollTop() >= $(".intro .middle-area").offset().top - 500) {
      gsap.to(".intro .middle-area p", {
        opacity: 1,
        stagger: {
          amount: 2
        },
        delay: 0.2
      });
    }

    if($(this).scrollTop() >= $(".space").offset().top - 500) {
      gsap.to(".space", {
        className: "space active",
        onComplete: function () {
          $(".space .space-info .left-wrap").addClass("active");
          $(".space .space-info .right-wrap").addClass("active");
        }
      });
    }

    if ($(this).scrollTop() >= $(document).height() - $(window).height() - 500) {
      $(".video").addClass("active");
    }

    if ($(this).scrollTop() === $(document).height() - $(window).height()) {
      $("footer").addClass("show");
    }
  });

  gsap.to(".intro .bottom-area img", {
    scrollTrigger: {
      trigger: ".intro .bottom-area",
      scrub: 10,
      pin: true,
    },
    top: "10%",
  });

  $(".space .space-info .right-wrap ul li").on("click", function () {
    $(".space .space-info .right-wrap ul li").removeClass("active");
    $(this).addClass("active");

    if ($(this).hasClass("type2")) {
      $(".space .space-info .left-wrap .space-img img").removeClass("show");
      $(".space .space-info .left-wrap .space-img .type2").addClass("show");
    } else {
      $(".space .space-info .left-wrap .space-img img").removeClass("show");
      $(".space .space-info .left-wrap .space-img .type1").addClass("show");
    }
  });

  $(".space .space-info .right-wrap ul li > p").hover(function () {
    $(".space .space-info .right-wrap ul li:not(.active) > p").css("color", "#aaa");
    $(this).css("color", "#000").parent("li").addClass("focus");
  }, function () {
    $(".space .space-info .right-wrap ul li > p").css("color", "#000");
    $(this).parent("li").removeClass("focus");
  });
});
