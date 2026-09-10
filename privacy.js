/* =========================================
   TERMS OF SERVICE
   OPEN / CLOSE / EDGE SWIPE BACK
========================================= */

const scrubTermsButton =
  document.getElementById("scrubTermsButton");

const scrubTermsPopup =
  document.getElementById("scrubTermsPopup");

const scrubTermsBackButton =
  document.getElementById("scrubTermsBackButton");


function openScrubTermsPopup() {
  scrubTermsPopup.classList.add("show");
  document.body.style.overflow = "hidden";
}


function closeScrubTermsPopup() {
  scrubTermsPopup.classList.remove("show");
  document.body.style.overflow = "";
}


scrubTermsButton.addEventListener("click", openScrubTermsPopup);

scrubTermsBackButton.addEventListener("click", closeScrubTermsPopup);


/* Both-side edge swipe to close */

let scrubTermsTouchStartX = 0;
let scrubTermsTouchStartY = 0;
let scrubTermsTouchCurrentX = 0;
let scrubTermsEdgeSwipeStarted = false;

const scrubTermsEdgeSize = 35;
const scrubTermsSwipeDistance = 90;


scrubTermsPopup.addEventListener(
  "touchstart",
  (event) => {
    if (!scrubTermsPopup.classList.contains("show")) return;

    const touch = event.touches[0];

    scrubTermsTouchStartX = touch.clientX;
    scrubTermsTouchStartY = touch.clientY;
    scrubTermsTouchCurrentX = touch.clientX;

    const startedFromLeft =
      scrubTermsTouchStartX <= scrubTermsEdgeSize;

    const startedFromRight =
      scrubTermsTouchStartX >=
      window.innerWidth - scrubTermsEdgeSize;

    scrubTermsEdgeSwipeStarted =
      startedFromLeft || startedFromRight;
  },
  { passive: true }
);


scrubTermsPopup.addEventListener(
  "touchmove",
  (event) => {
    if (!scrubTermsEdgeSwipeStarted) return;

    const touch = event.touches[0];

    scrubTermsTouchCurrentX = touch.clientX;
  },
  { passive: true }
);


scrubTermsPopup.addEventListener(
  "touchend",
  () => {
    if (!scrubTermsEdgeSwipeStarted) return;

    const swipeX =
      scrubTermsTouchCurrentX - scrubTermsTouchStartX;

    const swipeY =
      Math.abs(scrubTermsTouchStartY);

    const swipedFromLeft =
      scrubTermsTouchStartX <= scrubTermsEdgeSize &&
      swipeX >= scrubTermsSwipeDistance;

    const swipedFromRight =
      scrubTermsTouchStartX >=
        window.innerWidth - scrubTermsEdgeSize &&
      swipeX <= -scrubTermsSwipeDistance;

    if (swipedFromLeft || swipedFromRight) {
      closeScrubTermsPopup();
    }

    scrubTermsEdgeSwipeStarted = false;
    scrubTermsTouchStartX = 0;
    scrubTermsTouchStartY = 0;
    scrubTermsTouchCurrentX = 0;
  },
  { passive: true }
);
/* =========================================
   PRIVACY POLICY
========================================= */

const scrubPrivacyButton =
  document.getElementById("scrubPrivacyButton");

const scrubPrivacyPopup =
  document.getElementById("scrubPrivacyPopup");

const scrubPrivacyBackButton =
  document.getElementById("scrubPrivacyBackButton");


function openScrubPrivacyPopup() {
  scrubPrivacyPopup.classList.add("show");
  document.body.style.overflow = "hidden";
}


function closeScrubPrivacyPopup() {
  scrubPrivacyPopup.classList.remove("show");
  document.body.style.overflow = "";
}


scrubPrivacyButton.addEventListener(
  "click",
  openScrubPrivacyPopup
);

scrubPrivacyBackButton.addEventListener(
  "click",
  closeScrubPrivacyPopup
);


/* =========================================
   BOTH-SIDE EDGE SWIPE TO CLOSE
========================================= */

let scrubPrivacyTouchStartX = 0;
let scrubPrivacyTouchCurrentX = 0;
let scrubPrivacyEdgeSwipeStarted = false;

const scrubPrivacyEdgeSize = 35;
const scrubPrivacySwipeDistance = 90;


scrubPrivacyPopup.addEventListener(
  "touchstart",
  (event) => {

    if (!scrubPrivacyPopup.classList.contains("show"))
      return;

    const touch = event.touches[0];

    scrubPrivacyTouchStartX = touch.clientX;
    scrubPrivacyTouchCurrentX = touch.clientX;

    const fromLeft =
      scrubPrivacyTouchStartX <=
      scrubPrivacyEdgeSize;

    const fromRight =
      scrubPrivacyTouchStartX >=
      window.innerWidth -
      scrubPrivacyEdgeSize;

    scrubPrivacyEdgeSwipeStarted =
      fromLeft || fromRight;

  },
  { passive: true }
);


scrubPrivacyPopup.addEventListener(
  "touchmove",
  (event) => {

    if (!scrubPrivacyEdgeSwipeStarted)
      return;

    scrubPrivacyTouchCurrentX =
      event.touches[0].clientX;

  },
  { passive: true }
);


scrubPrivacyPopup.addEventListener(
  "touchend",
  () => {

    if (!scrubPrivacyEdgeSwipeStarted)
      return;

    const swipeX =
      scrubPrivacyTouchCurrentX -
      scrubPrivacyTouchStartX;

    const closeFromLeft =
      scrubPrivacyTouchStartX <=
        scrubPrivacyEdgeSize &&
      swipeX >=
        scrubPrivacySwipeDistance;

    const closeFromRight =
      scrubPrivacyTouchStartX >=
        window.innerWidth -
          scrubPrivacyEdgeSize &&
      swipeX <=
        -scrubPrivacySwipeDistance;

    if (
      closeFromLeft ||
      closeFromRight
    ) {
      closeScrubPrivacyPopup();
    }

    scrubPrivacyEdgeSwipeStarted = false;
    scrubPrivacyTouchStartX = 0;
    scrubPrivacyTouchCurrentX = 0;

  },
  { passive: true }
);

/* =========================================
   ABOUT US
========================================= */

const scrubAboutUsButton =
  document.getElementById("scrubAboutUsButton");

const scrubAboutUsPopup =
  document.getElementById("scrubAboutUsPopup");

const scrubAboutUsBackButton =
  document.getElementById("scrubAboutUsBackButton");


function openScrubAboutUsPopup() {
  scrubAboutUsPopup.classList.add("show");
  document.body.style.overflow = "hidden";
}


function closeScrubAboutUsPopup() {
  scrubAboutUsPopup.classList.remove("show");
  document.body.style.overflow = "";
}


scrubAboutUsButton.addEventListener(
  "click",
  openScrubAboutUsPopup
);

scrubAboutUsBackButton.addEventListener(
  "click",
  closeScrubAboutUsPopup
);


/* =========================================
   BOTH-SIDE EDGE SWIPE TO CLOSE
========================================= */

let scrubAboutTouchStartX = 0;
let scrubAboutTouchStartY = 0;
let scrubAboutTouchCurrentX = 0;
let scrubAboutTouchCurrentY = 0;
let scrubAboutEdgeSwipeStarted = false;

const scrubAboutEdgeSize = 35;
const scrubAboutSwipeDistance = 90;


scrubAboutUsPopup.addEventListener(
  "touchstart",
  (event) => {
    if (!scrubAboutUsPopup.classList.contains("show")) return;

    const touch = event.touches[0];

    scrubAboutTouchStartX = touch.clientX;
    scrubAboutTouchStartY = touch.clientY;
    scrubAboutTouchCurrentX = touch.clientX;
    scrubAboutTouchCurrentY = touch.clientY;

    const startedFromLeft =
      scrubAboutTouchStartX <= scrubAboutEdgeSize;

    const startedFromRight =
      scrubAboutTouchStartX >=
      window.innerWidth - scrubAboutEdgeSize;

    scrubAboutEdgeSwipeStarted =
      startedFromLeft || startedFromRight;
  },
  { passive: true }
);


scrubAboutUsPopup.addEventListener(
  "touchmove",
  (event) => {
    if (!scrubAboutEdgeSwipeStarted) return;

    const touch = event.touches[0];

    scrubAboutTouchCurrentX = touch.clientX;
    scrubAboutTouchCurrentY = touch.clientY;
  },
  { passive: true }
);


scrubAboutUsPopup.addEventListener(
  "touchend",
  () => {
    if (!scrubAboutEdgeSwipeStarted) return;

    const swipeX =
      scrubAboutTouchCurrentX -
      scrubAboutTouchStartX;

    const swipeY =
      Math.abs(
        scrubAboutTouchCurrentY -
        scrubAboutTouchStartY
      );

    const horizontalSwipe =
      Math.abs(swipeX) > swipeY;

    const swipedFromLeft =
      scrubAboutTouchStartX <= scrubAboutEdgeSize &&
      swipeX >= scrubAboutSwipeDistance;

    const swipedFromRight =
      scrubAboutTouchStartX >=
        window.innerWidth - scrubAboutEdgeSize &&
      swipeX <= -scrubAboutSwipeDistance;

    if (
      horizontalSwipe &&
      (swipedFromLeft || swipedFromRight)
    ) {
      closeScrubAboutUsPopup();
    }

    scrubAboutEdgeSwipeStarted = false;
    scrubAboutTouchStartX = 0;
    scrubAboutTouchStartY = 0;
    scrubAboutTouchCurrentX = 0;
    scrubAboutTouchCurrentY = 0;
  },
  { passive: true }
);