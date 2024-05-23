gsap.to("#box1", {
    width: "100px",
    height: "100px",
    x: 600,
    duration: '2',
    repeat: -1,
    yoyo: true,
});

gsap.from("#box2", {
    width: "100px",
    height: "100px",
    x: 600,
    duration: '2',
    repeat: -1,
    yoyo: true,

});

gsap.from("h2", {
    color: 'red',
    y: 15,
    opacity: 0,
    duration: 1,
    stagger: 1,
    repeat: -1
})