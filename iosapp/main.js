/* =========================================
   MAIN HOME PAGE
========================================= */

const scurbHomePage =
  document.getElementById("scurbHomePage");

const scurbHomeLocationName =
  document.getElementById("scurbHomeLocationName");

const scurbHomeAddress =
  document.getElementById("scurbHomeAddress");

const scurbHeaderLocation =
  document.getElementById("scurbHeaderLocation");

const scurbHomeNavButton =
  document.getElementById("scurbHomeNavButton");

const scurbBookingsNavButton =
  document.getElementById("scurbBookingsNavButton");

const scurbHomeHeader =
  document.getElementById("scurbHomeHeader");

const scurbHomeContent =
  document.getElementById("scurbHomeContent");

const scurbBookingsContent =
  document.getElementById("scurbBookingsContent");

const scurbUpcomingTab =
  document.getElementById("scurbUpcomingTab");

const scurbPastTab =
  document.getElementById("scurbPastTab");

const scurbBookingsTabs =
  document.querySelector(".scurb-bookings-tabs");

const scurbBookingsEmptyIcon =
  document.getElementById("scurbBookingsEmptyIcon");

const scurbBookingsEmptyText =
  document.getElementById("scurbBookingsEmptyText");
  let scurbLocationOpenedFromHome = false;
function updateScurbHomeLocation(){

  const village =
    localStorage.getItem("scurbMateVillage")?.trim() || "";

  const street =
    localStorage.getItem("scurbMateStreetName")?.trim() || "";

  const neighbourhood =
    localStorage.getItem("scurbMateNeighbourhood")?.trim() || "";

  const city =
    localStorage.getItem("scurbMateCity")?.trim() || "";

  const district =
    localStorage.getItem("scurbMateDistrict")?.trim() || "";

  const state =
    localStorage.getItem("scurbMateState")?.trim() || "";

  const postcode =
    localStorage.getItem("scurbMatePostcode")?.trim() || "";

  const fullAddress =
    localStorage.getItem("scurbMateFullAddress")?.trim() || "";


  const locationName =
    village ||
    neighbourhood ||
    street ||
    city ||
    "Selected location";

  scurbHomeLocationName.textContent =
    cleanScurbLocationText(locationName);


  const addressParts = [
    street,
    neighbourhood,
    village,
    city,
    district,
    state,
    postcode
  ].filter(function(value){

    const cleanValue =
      cleanScurbLocationText(value);

    return cleanValue !== "";

  });


  const address =
    addressParts.length
      ? addressParts.join(", ")
      : cleanScurbLocationText(fullAddress) ||
        "Your selected address";


  const words =
    address.trim().split(/\s+/);

  scurbHomeAddress.textContent =
    words.length > 4
      ? words.slice(0, 4).join(" ") + "..."
      : address;
}
function cleanScurbLocationText(value){

  return String(value || "")
    .replace(/\s*---+\s*/g, " ")
    .replace(/\s*--+\s*/g, " ")
    .replace(/\s+-\s+/g, ", ")
    .replace(/,\s*,+/g, ", ")
    .replace(/\s{2,}/g, " ")
    .replace(/^[-,\s]+|[-,\s]+$/g, "")
    .trim();
}

function openScurbHomePage(){
scurbLocationOpenedFromHome = false;
  updateScurbHomeLocation();

  document.getElementById("loginPage")
    ?.style.setProperty("display", "none");

  document.getElementById("locationPage")
    ?.classList.remove("show");

  document.getElementById("manualSearchPage")
    ?.classList.remove("show");

  document.getElementById("confirmLocationPage")
    ?.classList.remove("show");

  scurbHomePage.classList.add("show");

  requestAnimationFrame(function(){

    if(window.loadScurbHomeImages){
      window.loadScurbHomeImages();
    }

  });
}


/* CLICK HEADER TO CHANGE LOCATION */

scurbHeaderLocation.addEventListener(
  "click",
  function(){

    scurbLocationOpenedFromHome = true;

    scurbHomePage.classList.remove(
      "show",
      "home-slide-up"
    );

    locationPage.classList.remove("show");

    confirmLocationPage.classList.remove("show");

    manualSearchPage.classList.add("show");

    setTimeout(function(){

      manualLocationSearchInput?.focus();

    }, 200);

  }
);
/* BOTTOM NAVIGATION */

/* =========================================
   HOME / BOOKINGS NAVIGATION
========================================= */

function showScurbHomeScreen(){

  scurbHomeHeader.style.display = "flex";

  scurbHomeContent.style.display = "block";

  scurbBookingsContent.classList.remove("show");

  scurbHomeNavButton.classList.add("active");

  scurbBookingsNavButton.classList.remove("active");


  if(window.loadScurbHomeImages){

    window.loadScurbHomeImages();

  }

  updateScurbFloatingCartBar();
}


function showScurbBookingsScreen(){

  scurbHomeHeader.style.display = "none";

  scurbHomeContent.style.display = "none";

  scurbBookingsContent.classList.add("show");
scurbFloatingCartBar.classList.remove("show");
  scurbHomeNavButton.classList.remove("active");

  scurbBookingsNavButton.classList.add("active");

  

  showScurbUpcomingBookings();
}


scurbHomeNavButton.addEventListener(
  "click",
  showScurbHomeScreen
);


scurbBookingsNavButton.addEventListener(
  "click",
  showScurbBookingsScreen
);
/* =========================================
   BOOKINGS TABS
========================================= */

function showScurbUpcomingBookings(){

  scurbUpcomingTab.classList.add("active");
  scurbPastTab.classList.remove("active");

  scurbBookingsTabs.classList.remove("past-active");

  scurbBookingsEmptyIcon.className =
    "fa-regular fa-calendar-check";

  scurbBookingsEmptyText.textContent =
    "No upcoming bookings";
}


function showScurbPastBookings(){

  scurbPastTab.classList.add("active");
  scurbUpcomingTab.classList.remove("active");

  scurbBookingsTabs.classList.add("past-active");

  scurbBookingsEmptyIcon.className =
    "fa-solid fa-clock-rotate-left";

  scurbBookingsEmptyText.textContent =
    "No past bookings";
}


scurbUpcomingTab.addEventListener(
  "click",
  showScurbUpcomingBookings
);


scurbPastTab.addEventListener(
  "click",
  showScurbPastBookings
);
/* =========================================
   HOME BANNER SLIDER
========================================= */

const scurbBannerSlider =
  document.querySelector(".scurbBannerSlider");

const scurbBannerTrack =
  document.querySelector(".scurbBannerTrack");

const scurbBannerItems =
  document.querySelectorAll(".scurbBannerItem");




/* SHOW BANNER */

function showScurbBanner(index){

  if(index < 0){
    index = scurbBannerItems.length - 1;
  }

  if(index >= scurbBannerItems.length){
    index = 0;
  }

  scurbBannerIndex = index;

  scurbBannerTrack.style.transform =
    `translateX(-${scurbBannerIndex * 100}%)`;

  scurbBannerDots.forEach(function(dot, dotIndex){

    dot.classList.toggle(
      "active",
      dotIndex === scurbBannerIndex
    );

  });

}


function openHomeWithSlideUp(){

  const scurbHomePage =
    document.getElementById("scurbHomePage");

  autoLocationPage.classList.remove("show");

  updateScurbHomeLocation();

  scurbHomePage.classList.remove(
    "show",
    "home-slide-up"
  );

  void scurbHomePage.offsetWidth;

  scurbHomePage.classList.add(
    "show",
    "home-slide-up"
  );
requestAnimationFrame(function(){

  if(window.loadScurbHomeImages){
    window.loadScurbHomeImages();
  }

});
  setTimeout(function(){

    scurbHomePage.classList.remove(
      "home-slide-up"
    );

  }, 500);
}


