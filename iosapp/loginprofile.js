/* =========================================
   PROFILE PAGE
========================================= */

const scurbProfileButton =
  document.getElementById("scurbProfileButton");

const scrubProfilePage =
  document.getElementById("scrubProfilePage");

const scrubProfileBackButton =
  document.getElementById("scrubProfileBackButton");

const scrubProfileName =
  document.getElementById("scrubProfileName");

const scrubProfileMobile =
  document.getElementById("scrubProfileMobile");

const scrubLogoutButton =
  document.getElementById("scrubLogoutButton");

const scrubProfileBookingsButton =
  document.getElementById("scrubProfileBookingsButton");


function getScrubMateLoggedInUser(){

  try{

    const savedUser =
      JSON.parse(
        localStorage.getItem("scrubMateUser") || "null"
      );

    if(
      savedUser &&
      savedUser.login === true &&
      savedUser.verified === true
    ){
      return savedUser;
    }

  }catch(error){

    console.error(
      "Unable to read Scrub Mate user:",
      error
    );

  }

  return null;
}


function formatScrubMateMobile(mobile){

  const cleanedMobile =
    String(mobile || "")
      .replace(/\D/g, "")
      .slice(-10);

  if(cleanedMobile.length !== 10){
    return "";
  }

  return "+91 " + cleanedMobile;
}
function formatScrubMateName(name){

  return String(name || "")
    .trim()
    .toLowerCase()
    .replace(/\b\w/g, function(letter){

      return letter.toUpperCase();

    });

}

function openScrubProfilePage(){

  const user =
    getScrubMateLoggedInUser();

  if(!user){

    scrubProfilePage.classList.remove("show");

    scurbHomePage.style.display = "none";
    locationPage.style.display = "none";

    loginPage.style.display = "grid";

    return;
  }


  const savedName =
    user.name ||
    localStorage.getItem("scrubMateName") ||
    "Scrub Mate User";

  const savedMobile =
    user.mobile ||
    localStorage.getItem("scrubMateMobile") ||
    "";


 scrubProfileName.textContent =
  formatScrubMateName(savedName);

  scrubProfileMobile.textContent =
    formatScrubMateMobile(savedMobile) ||
    "Mobile number unavailable";
scrubProfilePage.style.transition = "";
scrubProfilePage.style.transform = "";
scrubProfilePage.style.opacity = "";

  scrubProfilePage.classList.add("show");

  document.body.style.overflow = "hidden";

}


function closeScrubProfilePage(){

  scrubProfilePage.classList.remove(
    "show"
  );

  scrubProfilePage.style.transition =
    "";

  scrubProfilePage.style.transform =
    "";

  scrubProfilePage.style.opacity =
    "";

  document.body.style.overflow = "";

}
/* =========================================
   PROFILE SWIPE CLOSE — LEFT + RIGHT
========================================= */

let scrubProfileSwipeStartX = 0;
let scrubProfileSwipeStartY = 0;

let scrubProfileSwipeCurrentX = 0;
let scrubProfileSwipeCurrentY = 0;

let scrubProfileSwipeActive = false;
let scrubProfileSwipeDirectionLocked = false;
let scrubProfileSwipeIsHorizontal = false;


scrubProfilePage.addEventListener(
  "touchstart",
  function(event){

    if(
      !scrubProfilePage.classList.contains(
        "show"
      )
    ){
      return;
    }

    if(event.touches.length !== 1){
      return;
    }

    const touch =
      event.touches[0];

    scrubProfileSwipeStartX =
      touch.clientX;

    scrubProfileSwipeStartY =
      touch.clientY;

    scrubProfileSwipeCurrentX =
      touch.clientX;

    scrubProfileSwipeCurrentY =
      touch.clientY;

    scrubProfileSwipeActive = true;

    scrubProfileSwipeDirectionLocked =
      false;

    scrubProfileSwipeIsHorizontal =
      false;

    scrubProfilePage.style.transition =
      "none";

  },
  {
    passive:true
  }
);


scrubProfilePage.addEventListener(
  "touchmove",
  function(event){

    if(
      !scrubProfileSwipeActive ||
      event.touches.length !== 1
    ){
      return;
    }

    const touch =
      event.touches[0];

    scrubProfileSwipeCurrentX =
      touch.clientX;

    scrubProfileSwipeCurrentY =
      touch.clientY;


    const moveX =
      scrubProfileSwipeCurrentX -
      scrubProfileSwipeStartX;

    const moveY =
      scrubProfileSwipeCurrentY -
      scrubProfileSwipeStartY;


    /*
     Detect whether user is scrolling
     vertically or swiping horizontally.
    */

    if(!scrubProfileSwipeDirectionLocked){

      if(
        Math.abs(moveX) < 8 &&
        Math.abs(moveY) < 8
      ){
        return;
      }

      scrubProfileSwipeDirectionLocked =
        true;

      scrubProfileSwipeIsHorizontal =
        Math.abs(moveX) >
        Math.abs(moveY) * 1.15;

    }


    /*
     Allow normal vertical scrolling.
    */

    if(!scrubProfileSwipeIsHorizontal){
      return;
    }


    event.preventDefault();


    const limitedMoveX =
      Math.max(
        -window.innerWidth,
        Math.min(
          window.innerWidth,
          moveX
        )
      );


    const progress =
      Math.min(
        Math.abs(limitedMoveX) /
        window.innerWidth,
        1
      );


    scrubProfilePage.style.transform =
      `translate3d(${limitedMoveX}px,0,0)`;

    scrubProfilePage.style.opacity =
      String(
        Math.max(
          0.55,
          1 - progress * 0.45
        )
      );

  },
  {
    passive:false
  }
);


scrubProfilePage.addEventListener(
  "touchend",
  function(){

    if(!scrubProfileSwipeActive){
      return;
    }

    scrubProfileSwipeActive = false;


    const moveX =
      scrubProfileSwipeCurrentX -
      scrubProfileSwipeStartX;

    const moveY =
      scrubProfileSwipeCurrentY -
      scrubProfileSwipeStartY;


    const shouldClose =
      scrubProfileSwipeIsHorizontal &&
      Math.abs(moveX) >= 90 &&
      Math.abs(moveX) >
      Math.abs(moveY);


    scrubProfilePage.style.transition =
      "transform .25s ease, opacity .2s ease";


    if(shouldClose){

      const closeDirection =
        moveX > 0
          ? window.innerWidth
          : -window.innerWidth;


      scrubProfilePage.style.transform =
        `translate3d(${closeDirection}px,0,0)`;

      scrubProfilePage.style.opacity =
        "0";


      setTimeout(function(){

        closeScrubProfilePage();

        scrubProfilePage.style.transition =
          "";

        scrubProfilePage.style.transform =
          "";

        scrubProfilePage.style.opacity =
          "";

      }, 250);

    }else{

      scrubProfilePage.style.transform =
        "translate3d(0,0,0)";

      scrubProfilePage.style.opacity =
        "1";


      setTimeout(function(){

        scrubProfilePage.style.transition =
          "";

        scrubProfilePage.style.transform =
          "";

        scrubProfilePage.style.opacity =
          "";

      }, 250);

    }


    scrubProfileSwipeDirectionLocked =
      false;

    scrubProfileSwipeIsHorizontal =
      false;

  }
);


scrubProfilePage.addEventListener(
  "touchcancel",
  function(){

    scrubProfileSwipeActive = false;

    scrubProfileSwipeDirectionLocked =
      false;

    scrubProfileSwipeIsHorizontal =
      false;

    scrubProfilePage.style.transition =
      "transform .25s ease, opacity .2s ease";

    scrubProfilePage.style.transform =
      "translate3d(0,0,0)";

    scrubProfilePage.style.opacity =
      "1";


    setTimeout(function(){

      scrubProfilePage.style.transition =
        "";

      scrubProfilePage.style.transform =
        "";

      scrubProfilePage.style.opacity =
        "";

    }, 250);

  }
);


scurbProfileButton.addEventListener(
  "click",
  function(){

    const isLoggedIn =
      localStorage.getItem(
        "scrubMateLoggedIn"
      ) === "true";

    const isGuest =
      localStorage.getItem(
        "scrubMateGuestMode"
      ) === "true";


    /* Guest must log in first */

    if(!isLoggedIn || isGuest){

      openScrubLoginFromGuestProfile();

      return;

    }


    /* Logged-in user: open normal profile */

    if(
      typeof openScrubProfilePage ===
      "function"
    ){

      openScrubProfilePage();

    }else{

      scurbHomePage.classList.remove("show");

      document
        .getElementById("scrubProfilePage")
        ?.classList.add("show");

    }

  }
);


scrubProfileBackButton.addEventListener(
  "click",
  function(){

    closeScrubProfilePage();

  }
);


/* MY BOOKINGS */

scrubProfileBookingsButton.addEventListener(
  "click",
  function(){

    closeScrubProfilePage();

    if(
      typeof scurbBookingsNavButton !==
      "undefined"
    ){
      scurbBookingsNavButton.click();
    }

  }
);


/* LOGOUT */
scrubLogoutButton.addEventListener(
  "click",
  function(){

    /* =====================================
       REMOVE LOGIN DATA
    ===================================== */

    localStorage.removeItem(
      "scrubMateUser"
    );

    localStorage.removeItem(
      "scrubMateMobile"
    );

    localStorage.removeItem(
      "scrubMateOtp"
    );

    localStorage.removeItem(
      "scrubMateLoggedIn"
    );

    localStorage.removeItem(
      "scrubMateName"
    );

    localStorage.removeItem(
      "scrubMateFirstName"
    );

    localStorage.removeItem(
      "scrubMateLastName"
    );

    localStorage.removeItem(
      "scrubMateEmail"
    );

    localStorage.removeItem(
      "scrubMateGuestMode"
    );

    localStorage.removeItem(
      "scrubMateLoginFromGuestProfile"
    );


    /* =====================================
       RESET RUNTIME FLOW
    ===================================== */

    isAutomaticLoginLocation = false;

    scrubMateLocationRequestType = null;

    scurbLocationOpenedFromHome = false;

    hideCurrentLocationSpinner();


    /* =====================================
       HIDE ALL PAGES
    ===================================== */

    scrubProfilePage.classList.remove(
      "show"
    );

    scurbHomePage.classList.remove(
      "show",
      "home-slide-up"
    );

    locationPage.classList.remove(
      "show"
    );

    manualSearchPage.classList.remove(
      "show"
    );

    autoLocationPage.classList.remove(
      "show"
    );

    confirmLocationPage.classList.remove(
      "show"
    );

    scrubDetailsPage.classList.remove(
      "show"
    );

    otpOverlay.classList.remove(
      "show"
    );


    /* =====================================
       RESET INLINE DISPLAY
    ===================================== */

    scurbHomePage.style.display = "";

    locationPage.style.display = "";

    manualSearchPage.style.display = "";

    autoLocationPage.style.display = "";

    confirmLocationPage.style.display = "";

    scrubDetailsPage.style.display = "";


    /* =====================================
       RESET SWIPE STYLES
    ===================================== */

    scrubProfilePage.style.transition = "";
    scrubProfilePage.style.transform = "";
    scrubProfilePage.style.opacity = "";

    locationPage.style.transition = "";
    locationPage.style.transform = "";
    locationPage.style.opacity = "";

    manualSearchPage.style.transition = "";
    manualSearchPage.style.transform = "";
    manualSearchPage.style.opacity = "";

    confirmLocationPage.style.transition = "";
    confirmLocationPage.style.transform = "";
    confirmLocationPage.style.opacity = "";


    /* =====================================
       RESET LOGIN FORM
    ===================================== */

    mobileInput.value = "";

    otpInput.value = "";

    errorText.textContent = "";

    otpInput.style.borderColor = "";
    otpInput.style.boxShadow = "";

    continueButton.disabled = true;

    continueButton.classList.remove(
      "enabled"
    );


    /* =====================================
       RESET DETAILS FORM
    ===================================== */

    scrubFirstNameInput.value = "";

    scrubLastNameInput.value = "";

    scrubEmailInput.value = "";

    scrubFirstNameError.textContent = "";

    scrubEmailError.textContent = "";

    scrubConfirmDetailsButton.disabled =
      true;

    scrubConfirmDetailsButton.classList.remove(
      "enabled"
    );


    /* =====================================
       RETURN TO LOGIN
    ===================================== */

    loginPage.style.display = "grid";

    document.body.style.overflow = "";

    if(
      typeof startMarquee ===
      "function"
    ){
      startMarquee();
    }

  }
);

/* =========================================
   OPEN LOGIN FROM GUEST PROFILE
========================================= */

function openScrubLoginFromGuestProfile(){

  localStorage.setItem(
    "scrubMateLoginFromGuestProfile",
    "true"
  );

  scurbHomePage.classList.remove(
    "show",
    "home-slide-up"
  );

  document
    .getElementById("scrubProfilePage")
    ?.classList.remove("show");

  document
    .getElementById("locationPage")
    ?.classList.remove("show");

  document
    .getElementById("manualSearchPage")
    ?.classList.remove("show");

  document
    .getElementById("confirmLocationPage")
    ?.classList.remove("show");

  document
    .getElementById("autoLocationPage")
    ?.classList.remove("show");

  document
    .getElementById("scrubDetailsPage")
    ?.classList.remove("show");


  const loginPage =
    document.getElementById("loginPage");

  if(loginPage){

    loginPage.style.display = "grid";

  }


  const mobileInput =
    document.getElementById("mobileInput");

  const otpInput =
    document.getElementById("otpInput");

  const errorText =
    document.getElementById("errorText");

  const continueButton =
    document.getElementById("continueButton");


  if(mobileInput){
    mobileInput.value = "";
  }

  if(otpInput){
    otpInput.value = "";
  }

  if(errorText){
    errorText.textContent = "";
  }

  if(continueButton){

    continueButton.disabled = true;

    continueButton.classList.remove(
      "enabled"
    );

  }


  if(window.startMarquee){
    window.startMarquee();
  }

}
