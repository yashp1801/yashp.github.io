var rellax = new Rellax(".rellax", {
  // horizontal:true,
  vertical: true,

  //Disable vertical Parallax Scrolling
});

var image = document.getElementsByClassName("trial");
new simpleParallax(image, {
  orientation: "right",
});

document.addEventListener("DOMContentLoaded", () => {
  const revealerNav = window.revealer({
    revealElementSelector: ".nav-js",
    options: {
      anchorSelector: ".nav-btn-js",
    },
  });

  const actionBtn = document.querySelector(".nav-btn-js");
  actionBtn.addEventListener("click", () => {
    if (!revealerNav.isRevealed()) {
      revealerNav.reveal();
      actionBtn.setAttribute("data-open", true);
    } else {
      revealerNav.hide();
      actionBtn.setAttribute("data-open", false);
    }
  });
});

let tl = gsap.timeline({ defaults: { duration: 1 } });

tl.from(".aboutHeader", { y: "50%", opacity: 0 });
tl.from(".about-social", { y: "50%", opacity: 0 });
tl.from(".left", { ease: "expo.out", x: "-100vw" });
tl.from(".right", { ease: "expo.out", x: "100vw" });



const body = document.body,
  scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
  height = scrollWrap.getBoundingClientRect().height - 1,
  speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
  offset += (window.pageYOffset - offset) * speed;

  var scroll = "translateY(-" + offset + "px) translateZ(0)";
  scrollWrap.style.transform = scroll;

  callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();
