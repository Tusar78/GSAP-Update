document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".scroll__item", {
    opacity: 0,
    // scale: .5,
    fontSize: "36px",
    color: "#000",
    y: 60,
  });

  gsap.set(".scroll__item:first-child", {
    opacity: 1,
    // scale: 1,
    fontSize: "44px",
    color: "#7A00FF",
    y: 0,
  });

  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".scroll__inner",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });

  let items = document.querySelectorAll(".scroll__item");

  // We go throgh each element of the array and add animation
  items.forEach((item, index) => {
    // First we hide the current element
    if (index > 0) {
      t1.to(items[index - 1], {
        opacity: 0,
        // scale: .5,
        fontSize: "36px",
        color: "#000",
        y: -60,
        ease: "none",
      });
    }

    // Show The Current Element
    t1.to(
      item,
      {
        opacity: 1,
        // scale: 1,
        fontSize: "44px",
        color: "#7A00FF",
        y: 0,
        ease: "none",
      },
      "-=.9"
    );

    // Hide the current element if it is not the last one
    if (index < items.length - 1) {
      t1.to(
        item,
        {
          opacity: 0,
          // scale: .5,
          fontSize: "36px",
          color: "#000",
          y: -60,
          ease: "none",
        },
        "-=.4"
      );
    }
  });
});

