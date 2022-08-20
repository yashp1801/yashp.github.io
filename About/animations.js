function pageTransition() {
  var tl = gsap.timeline();
  tl.to(".transition li", {
    duration: 0.5,
    scaleY: 1.2,
    transformOrigin: "top left",
    stagger: 0.2,
  });
  tl.to(".transition li", {
    duration: 0.5,
    scaleY: 0,
    transformOrigin: "bottom left",
    stagger: 0.1,
    delay: 0.1,
  });
}
function contentAnimation() {
  var tl = gsap.timeline();
  tl.form(
    "h1",
    {
      duartion: 2,
      translateY: -300,
      opacity: 0,
    },
    "-=.1"
  );
}

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTransition();
        await delay(1400);
        done();
      },
      async CustomElementRegistry(data) {
        contentAnimation();
      },
    },
  ],
});

var rellax = new Rellax(".rellax");
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
