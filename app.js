// Selection Image
$('.sl1').hover(
    function () { $('.popup').addClass('appear1') },
    function () { $('.popup').removeClass('appear1') }
);

$('.sl2').hover(
    function () { $('.popup').addClass('appear2') },
    function () { $('.popup').removeClass('appear2') }
);

$('.sl3').hover(
    function () { $('.popup').addClass('appear3') },
    function () { $('.popup').removeClass('appear3') }
);

// Marquee Text
const el = document.querySelector(".marquee-text");

let elWidth = el.offsetWidth;
let windowWidth = window.innerWidth;

let mouseX = 0;
let prevMouseX = 0;

let skewTarget = 0;
let translateTarget = 0;

let skewWithEasing = 0;
let translateWithEasing = 0;

let skewEasingFactor = 0.035;
let translateEasingFactor = 0.001;

window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("resize", handleWindowResize);

function handleMouseMove(e) {
    mouseX = e.pageX;
}

function handleWindowResize(e) {
    elWidth = el.offsetWidth;
    windowWidth = window.innerWidth;
}

function lerp(start, end, factor) {
    return (1 - factor) * start + factor * end;
}

function animateMe() {
    skewTarget = mouseX - prevMouseX;
    prevMouseX = mouseX;

    translateTarget = (elWidth - windowWidth) / windowWidth * mouseX * -1;

    skewWithEasing = lerp(skewWithEasing, skewTarget, skewEasingFactor);

    skewWithEasing = Math.min(Math.max(parseInt(skewWithEasing), -75), 75);

    translateWithEasing = lerp(
        translateWithEasing,
        translateTarget,
        translateEasingFactor);


    el.style.transform = `
    translateX(${translateWithEasing}px)
    skewX(${skewWithEasing}deg)
  `;

    window.requestAnimationFrame(animateMe);
}

window.requestAnimationFrame(animateMe);
