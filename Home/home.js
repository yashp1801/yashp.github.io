
TweenMax.from(".left", 3, {
  left: "-50%",
  ease: Expo.easeInOut,
  delay: 7,
});
TweenMax.from(".header h1", 3, {
  left: "-140%",
  ease: Expo.easeInOut,
  delay: 3.4,
});
TweenMax.from(
  ".images",
  1,
  {
    y: "60",
    opacity: 0,
    ease: Power2.easeOut,
    delay: 10,
  },
  0.2
);

TweenMax.staggerFrom(
  ".title > p",
  1,
  {
    y: "60",
    opacity: 0,
    ease: Power2.easeOut,
    delay: 9,
  },
  0.2
);

TweenMax.from(".link", 1, {
  opacity: 0,
  ease: SteppedEase.config(1),
  repeat: -1,
  repeatDelay: 0.2,
  delay: 7.8,
});






// Preloaders


TweenMax.staggerFrom(
  ".titles > div",
  0.8,
  {
    x: "-60",
    ease: Power3.easeInOut,
    opacity: "0",
  },
  2
);

TweenMax.staggerTo(
  ".titles > div",
  0.8,
  {
    x: "60",
    ease: Power3.easeInOut,
    delay: 1.2,
    opacity: "0",
  },
  2
);
TweenMax.staggerFrom(
  "li",
  3,
  {
    x: "-1600",
    delay: 4.2,
    ease: Expo.easeInOut,
  },
  0.16
);

TweenMax.staggerTo(
  "li",
  2.6,
  {
    x: "1600",
    delay: 6.8,
    ease: Expo.easeInOut,
  },
  0.2
);

var textWrapper = document.querySelector(".header");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline().add({
  targets: ".header .letter",
  opacity: [0, 1],
  translateY: [80, 0],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 2000,
  delay: (el, i) => 8400 + 40 * i,
});


// navbar hover

const bgImg = document.getElementById('bgImage');
const li = document.querySelector("a");

li.forEach(el => {
  el.addEventListner("mouseover" , () => {
    let bg = el.getAttribute("data-bg");
    bgImg.style.background = `url(${bg}) no-repeat center/cover`
  })
})

