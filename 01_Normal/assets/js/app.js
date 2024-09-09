// gsap.to("#box1", {
//     width: "100px",
//     height: "100px",
//     x: 600,
//     duration: '2',
//     repeat: -1,
//     yoyo: true,
// });

// gsap.to(".box", {
//   width: "100px",
//   height: "100px",
//   x: 200,
//   duration: 2,
//   repeat: -1, // Repeat Infinity
//   yoyo: true // Repeat Smoothly
// })

// gsap.from("#box2", {
//     width: "100px",
//     height: "100px",
//     x: 600,
//     duration: '2',
//     repeat: -1,
//     yoyo: true,
// });

// gsap.from(".box", {
//   width: "100px",
//   height: "100px",
//   duration: 1,
//   opacity: 0,
//   repeat: -1,
//   // yoyo: true,
//   rotation: 270,
//   scale: 0.5,
//   transformOrigin: "50px 20px",
// });

// gsap.from("h2", {
//     color: 'red',
//     y: 15,
//     opacity: 0,
//     duration: 1,
//     stagger: 1,
//     repeat: -1
// })

// gsap.to(".child1", {
//     x: 648,
//     delay: 1,
//     duration: 1,
//     // repeat: -1,
//     // yoyo: true,
// })

// gsap.to(".child2", {
//     x: 648,
//     delay: 2,
//     duration: 1,
//     // repeat: -1,
//     // yoyo: true,
// })

// gsap.to(".child3", {
//     x: 648,
//     delay: 3,
//     duration: 1,
//     // repeat: -1,
//     // yoyo: true,
// })

// const timeLine = gsap.timeline();
// console.log(timeLine);

// timeLine.to(".child1", {
//         x: 648,
//         delay: 1,
//         duration: 1,
//         // repeat: -1,
//         // yoyo: true,
// })
// timeLine.to(".child2", {
//         x: 648,
//         duration: 1,
//         // repeat: -1,
//         // yoyo: true,
// })
// timeLine.to(".child3", {
//         x: 648,
//         duration: 1,
//         // repeat: -1,
//         // yoyo: true,
// })

// const tl = gsap.timeline();
// const tl2 = gsap.timeline();
// tl.from(".brand", {
//   opacity: 0,
//   y: -20,
//   delay: 1,
//   duration: 0.5,
// });

// tl2.from(".nav-menu a", {
//   y: -20,
//   opacity: 0,
//   delay: 1,
//   duration: 0.5,
//   stagger: 0.5,
// });

// gsap.from(".section1 .box", {
//   scale: 0,
//   rotate: -360,
//   duration: 1,
//   delay: 1,
// });

// gsap.from(".section2 .box", {
//   scale: 0,
//   rotate: -360,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".section2 .box",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//   },
// });

// gsap.from(".section3 .box", {
//         scale: 0,
//         rotate: -360,
//         duration: 1,
//         scrollTrigger: {
//                 trigger: '.section3 .box',
//                 scroller: 'body',
//         }
// })

// gsap.from(".section2 h2", {
//   opacity: 0,
//   x: 500,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".section2 h2",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//     scrub: 5,
//   },
// });

// gsap.from(".section2 h3", {
//   opacity: 0,
//   x: -500,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".section2 h3",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//     scrub: 3,
//   },
// });

// gsap.to(".section3 p", {
//   transform: 'translateX(-100%)',
//   scrollTrigger: {
//     trigger: ".section3",
//     scroller: "body",
//     markers: true,
//     start: "top 0%",
//     end: "top -100%",
//     scrub: 2,
//     pin: true,
//   },
// });

document.addEventListener("DOMContentLoaded", function() {
  
  'use strict';

  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".section_item", {
    opacity: 0,
    scale: .5,
    y: 100
  })

  gsap.set(".section_item:first-child", {
    opacity: 1,
    scale: 1,
    y: 0
  })

  let t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_inner",
      start: "top top",
      end: "bottom bottom",
      scrub: 1
    }
  })


  let items = document.querySelectorAll(".section_item");

  // We go throgh each element of the array and add animation
  items.forEach((item, index) => {

    // First we hide the current element
    if(index > 0) {
      t1.to(items[index - 1], {
        opacity: 0,
        scale: .5,
        y: -100,
        ease: "none"
      })
    }

    // Show The Current Element
    t1.to(item, {
      opacity: 1,
      scale: 1,
      y: 0,
      ease: "none"
    }, "-=.9");

    // Hide the current element if it is not the last one
    if(index < items.length - 1) {
      t1.to(item, {
        opacity: 0,
        scale: .5,
        y: -100,
        ease: "none"
      }, "-=.4");
    }
  })

})
