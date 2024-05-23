// gsap.to("#box1", {
//     width: "100px",
//     height: "100px",
//     x: 600,
//     duration: '2',
//     repeat: -1,
//     yoyo: true,
// });

// gsap.from("#box2", {
//     width: "100px",
//     height: "100px",
//     x: 600,
//     duration: '2',
//     repeat: -1,
//     yoyo: true,

// });

// gsap.from("h2", {
//     color: 'red',
//     y: 15,
//     opacity: 0,
//     duration: 1,
//     stagger: 1,
//     repeat: -1
// })

gsap.to(".child1", {
    x: 648,
    delay: 1,
    duration: 1,
    // repeat: -1,
    // yoyo: true,
})

gsap.to(".child2", {
    x: 648,
    delay: 2,
    duration: 1,
    // repeat: -1,
    // yoyo: true,
})

gsap.to(".child3", {
    x: 648,
    delay: 3,
    duration: 1,
    // repeat: -1,
    // yoyo: true,
})

const timeLine = gsap.timeline();
console.log(timeLine);