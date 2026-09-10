/* =========================
   MAIN LOCATION PAGE
========================= */

const loginPage = document.getElementById("loginPage");
const locationPage = document.getElementById("locationPage");
const autoLocationPage =
  document.getElementById("autoLocationPage");

const autoLocationLoading =
  document.getElementById("autoLocationLoading");

const autoLocationResult =
  document.getElementById("autoLocationResult");

const autoLocationName =
  document.getElementById("autoLocationName");

const autoLocationAddress =
  document.getElementById("autoLocationAddress");

let isAutomaticLoginLocation = false;
const currentLocationButton =
  document.getElementById("currentLocationButton");

const manualLocationButton =
  document.getElementById("manualLocationButton");

/* =========================================
   MAIN LOCATION PAGE SWIPE BACK
   LEFT + RIGHT
========================================= */

let scurbLocationSwipeStartX = 0;
let scurbLocationSwipeStartY = 0;

let scurbLocationSwipeCurrentX = 0;
let scurbLocationSwipeCurrentY = 0;

let scurbLocationSwipeActive = false;
let scurbLocationSwipeLocked = false;
let scurbLocationSwipeHorizontal = false;


/* RESET LOCATION PAGE SWIPE STYLES */

function resetScurbLocationSwipeStyles(){

  locationPage.style.transition = "";
  locationPage.style.transform = "";
  locationPage.style.opacity = "";

}


/* RETURN FROM MAIN LOCATION PAGE */

function closeMainScurbLocationPage(){

  const isGuest =
    localStorage.getItem(
      "scrubMateGuestMode"
    ) === "true";

  const isLoggedIn =
    localStorage.getItem(
      "scrubMateLoggedIn"
    ) === "true";


  locationPage.classList.remove("show");

  resetScurbLocationSwipeStyles();


  /* SKIP LOGIN USER → RETURN TO LOGIN */

  if(isGuest && !isLoggedIn){

    localStorage.removeItem(
      "scrubMateGuestMode"
    );

    scurbLocationOpenedFromHome = false;

    manualSearchPage?.classList.remove(
      "show"
    );

    confirmLocationPage?.classList.remove(
      "show"
    );

    autoLocationPage?.classList.remove(
      "show"
    );

    loginPage.style.display = "grid";

    if(typeof startMarquee === "function"){
      startMarquee();
    }

    return;
  }


  /* LOGGED-IN USER → RETURN TO HOME */

  if(isLoggedIn){

    scurbLocationOpenedFromHome = false;

    loginPage.style.display = "none";

    manualSearchPage?.classList.remove(
      "show"
    );

    confirmLocationPage?.classList.remove(
      "show"
    );

    autoLocationPage?.classList.remove(
      "show"
    );

    updateScurbHomeLocation();

    scurbHomePage.classList.add("show");

    requestAnimationFrame(function(){

      if(window.loadScurbHomeImages){
        window.loadScurbHomeImages();
      }

      if(
        typeof updateScurbFloatingCartBar ===
        "function"
      ){
        updateScurbFloatingCartBar();
      }

    });

    return;
  }


  /* FALLBACK → LOGIN */

  loginPage.style.display = "grid";

}


/* TOUCH START */

locationPage.addEventListener(
  "touchstart",
  function(event){

    if(
      !locationPage.classList.contains(
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

    scurbLocationSwipeStartX =
      touch.clientX;

    scurbLocationSwipeStartY =
      touch.clientY;

    scurbLocationSwipeCurrentX =
      touch.clientX;

    scurbLocationSwipeCurrentY =
      touch.clientY;

    scurbLocationSwipeActive = true;
    scurbLocationSwipeLocked = false;
    scurbLocationSwipeHorizontal = false;

    locationPage.style.transition =
      "none";

  },
  {
    passive:true
  }
);


/* TOUCH MOVE */

locationPage.addEventListener(
  "touchmove",
  function(event){

    if(
      !scurbLocationSwipeActive ||
      event.touches.length !== 1
    ){
      return;
    }

    const touch =
      event.touches[0];

    scurbLocationSwipeCurrentX =
      touch.clientX;

    scurbLocationSwipeCurrentY =
      touch.clientY;


    const moveX =
      scurbLocationSwipeCurrentX -
      scurbLocationSwipeStartX;

    const moveY =
      scurbLocationSwipeCurrentY -
      scurbLocationSwipeStartY;


    if(!scurbLocationSwipeLocked){

      if(
        Math.abs(moveX) < 8 &&
        Math.abs(moveY) < 8
      ){
        return;
      }

      scurbLocationSwipeLocked = true;

      scurbLocationSwipeHorizontal =
        Math.abs(moveX) >
        Math.abs(moveY) * 1.15;

    }


    /* KEEP NORMAL VERTICAL MOVEMENT */

    if(!scurbLocationSwipeHorizontal){
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


    locationPage.style.transform =
      `translate3d(${limitedMoveX}px,0,0)`;

    locationPage.style.opacity =
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


/* TOUCH END */

locationPage.addEventListener(
  "touchend",
  function(){

    if(!scurbLocationSwipeActive){
      return;
    }

    scurbLocationSwipeActive = false;


    const moveX =
      scurbLocationSwipeCurrentX -
      scurbLocationSwipeStartX;

    const moveY =
      scurbLocationSwipeCurrentY -
      scurbLocationSwipeStartY;


    const shouldClose =
      scurbLocationSwipeHorizontal &&
      Math.abs(moveX) >= 90 &&
      Math.abs(moveX) >
      Math.abs(moveY);


    locationPage.style.transition =
      "transform .25s ease, opacity .2s ease";


    if(shouldClose){

      const closeDirection =
        moveX > 0
          ? window.innerWidth
          : -window.innerWidth;


      locationPage.style.transform =
        `translate3d(${closeDirection}px,0,0)`;

      locationPage.style.opacity =
        "0";


      setTimeout(function(){

        closeMainScurbLocationPage();

      }, 250);

    }else{

      locationPage.style.transform =
        "translate3d(0,0,0)";

      locationPage.style.opacity =
        "1";


      setTimeout(function(){

        resetScurbLocationSwipeStyles();

      }, 250);

    }


    scurbLocationSwipeLocked = false;
    scurbLocationSwipeHorizontal = false;

  }
);


/* TOUCH CANCEL */

locationPage.addEventListener(
  "touchcancel",
  function(){

    scurbLocationSwipeActive = false;
    scurbLocationSwipeLocked = false;
    scurbLocationSwipeHorizontal = false;

    locationPage.style.transition =
      "transform .25s ease, opacity .2s ease";

    locationPage.style.transform =
      "translate3d(0,0,0)";

    locationPage.style.opacity =
      "1";


    setTimeout(function(){

      resetScurbLocationSwipeStyles();

    }, 250);

  }
);


/* =========================
   IOS NATIVE LOCATION BRIDGE
========================= */

let scrubMateLocationRequestType = null;
let currentLocationButtonOriginalHTML = "";

function showCurrentLocationSpinner() {
  if (!currentLocationButton) return;

  if (!currentLocationButtonOriginalHTML) {
    currentLocationButtonOriginalHTML =
      currentLocationButton.innerHTML;
  }

  currentLocationButton.disabled = true;

  currentLocationButton.innerHTML = `
    <span class="scrub-location-spinner" aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="currentColor"
          stroke-width="2.4"
          stroke-linecap="round"
          stroke-dasharray="42 16"
        ></circle>
      </svg>
    </span>
  `;
}

function hideCurrentLocationSpinner() {
  if (!currentLocationButton) return;

  currentLocationButton.disabled = false;

  if (currentLocationButtonOriginalHTML) {
    currentLocationButton.innerHTML =
      currentLocationButtonOriginalHTML;
  }
}

function isScrubMateIOSApp() {
  return Boolean(
    window.webkit &&
    window.webkit.messageHandlers &&
    window.webkit.messageHandlers.requestScrubMateLocation
  );
}

function requestScrubMateNativeLocation(requestType) {
  scrubMateLocationRequestType = requestType;

  window.webkit.messageHandlers.requestScrubMateLocation.postMessage({
    type: requestType
  });
}
skipButton.addEventListener("click", function(){

  stopMarquee();

  /* Guest mode */
  localStorage.removeItem("scrubMateLoggedIn");
  localStorage.setItem("scrubMateGuestMode", "true");

  isAutomaticLoginLocation = false;


  /* Hide every other screen */

  loginPage.style.display = "none";

  otpOverlay.classList.remove("show");

  document
    .getElementById("scrubDetailsPage")
    ?.classList.remove("show");

  document
    .getElementById("scrubProfilePage")
    ?.classList.remove("show");

  document
    .getElementById("scurbHomePage")
    ?.classList.remove(
      "show",
      "home-slide-up"
    );

  autoLocationPage.classList.remove("show");

  document
    .getElementById("manualSearchPage")
    ?.classList.remove("show");

  document
    .getElementById("confirmLocationPage")
    ?.classList.remove("show");


  /* Open normal location page */

  locationPage.classList.remove("show");
locationPage.style.transition = "";
locationPage.style.transform = "";
locationPage.style.opacity = "";
  void locationPage.offsetWidth;

  locationPage.classList.add("show");

});


currentLocationButton.addEventListener(
  "click",
  getAndSaveCurrentLocation
);


/* =========================
   SAVE CURRENT LOCATION
========================= */
/* =========================
   AUTOMATIC LOGIN LOCATION
========================= */

function startAutomaticLoginLocation(){

  isAutomaticLoginLocation = true;

  stopMarquee();

  loginPage.style.display = "none";

  otpOverlay.classList.remove("show");

  document
    .getElementById("scrubDetailsPage")
    ?.classList.remove("show");

  locationPage.classList.remove("show");

  document
    .getElementById("manualSearchPage")
    ?.classList.remove("show");

  document
    .getElementById("confirmLocationPage")
    ?.classList.remove("show");

  autoLocationPage.classList.add("show");

  autoLocationLoading.style.display = "flex";

  autoLocationResult.classList.remove("show");

  autoLocationName.textContent =
    "Your location";

  autoLocationAddress.textContent =
    "Location detected successfully";

  getAndSaveCurrentLocation();
}

function showAutomaticLocationResult(locationData){

  if(!isAutomaticLoginLocation){
    return;
  }

  const placeName =
    locationData.village ||
    locationData.neighbourhood ||
    locationData.city ||
    locationData.district ||
    "Your location";

  const address =
    locationData.fullAddress ||
    [
      locationData.city,
      locationData.district,
      locationData.state,
      locationData.postcode
    ]
    .filter(Boolean)
    .join(", ") ||
    "Location detected successfully";

  autoLocationLoading.style.display = "none";

  autoLocationName.textContent = placeName;
  autoLocationAddress.textContent = address;

  autoLocationResult.classList.add("show");

  setTimeout(function(){

  isAutomaticLoginLocation = false;

  openHomeWithSlideUp();

}, 1400);
}


function handleAutomaticLocationFailure(){

  if(!isAutomaticLoginLocation){
    return;
  }

  isAutomaticLoginLocation = false;

  autoLocationPage.classList.remove("show");

  /* Show normal location-selection page */
  locationPage.classList.add("show");
}

async function getAndSaveCurrentLocation() {

  showCurrentLocationSpinner();

  // iOS native app
  if (isScrubMateIOSApp()) {
    requestScrubMateNativeLocation(
      "saveCurrentLocation"
    );
    return;
  }

  // Normal browser fallback
  if (!navigator.geolocation) {
    console.error(
      "Geolocation is not supported."
    );

    hideCurrentLocationSpinner();
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async function(position) {
      await saveCurrentCoordinates(
        position.coords.latitude,
        position.coords.longitude,
        position.coords.accuracy ?? null
      );
    },

    function(error) {
      hideCurrentLocationSpinner();
      handleBrowserLocationError(error);
    },

    {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0
    }
  );
}
async function saveCurrentCoordinates(
  latitude,
  longitude,
  accuracy
) {

  let finalLocationData = null;

  try {

    const locationData =
      await reverseGeocode(latitude, longitude);

    finalLocationData = {
      ...locationData,
      latitude,
      longitude,
      accuracy: accuracy ?? null,
      locationType: "current",
      addressFound: true
    };

    saveLocationToStorage(finalLocationData);

    console.log("Current location saved.");

  } catch (error) {

    finalLocationData = {
      latitude,
      longitude,
      accuracy: accuracy ?? null,
      fullAddress: "",
      locationType: "current",
      addressFound: false
    };

    saveLocationToStorage(finalLocationData);

    console.error(
      "Coordinates saved, but address failed:",
      error
    );
  }

  hideCurrentLocationSpinner();

  /* Login automatic location flow */
  if(isAutomaticLoginLocation){

    showAutomaticLocationResult(
      finalLocationData
    );

    return;
  }

  /* Existing manual button flow */
  updateScurbHomeLocation();
  openScurbHomePage();
}
/* =========================
   MANUAL LOCATION ELEMENTS
========================= */

const manualSearchPage =
  document.getElementById("manualSearchPage");

const confirmLocationPage =
  document.getElementById("confirmLocationPage");

const manualSearchBackButton =
  document.getElementById("manualSearchBackButton");

const confirmLocationBackButton =
  document.getElementById("confirmLocationBackButton");

const manualLocationSearchInput =
  document.getElementById("manualLocationSearchInput");

const locationSearchResults =
  document.getElementById("locationSearchResults");

const manualCurrentLocationButton =
  document.getElementById("manualCurrentLocationButton");
/* =========================================
   MANUAL CURRENT LOCATION BUTTON SPINNER
========================================= */

let manualCurrentLocationOriginalHTML = "";
let manualCurrentLocationIsLoading = false;


function showManualCurrentLocationSpinner(){

  if(
    !manualCurrentLocationButton ||
    manualCurrentLocationIsLoading
  ){
    return;
  }


  if(!manualCurrentLocationOriginalHTML){

    manualCurrentLocationOriginalHTML =
      manualCurrentLocationButton.innerHTML;

  }


  manualCurrentLocationIsLoading = true;

  manualCurrentLocationButton.disabled =
    true;


  manualCurrentLocationButton.innerHTML = `
    <span
      class="scrub-location-spinner"
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24">
        <circle
          cx="12"
          cy="12"
          r="9"
          fill="none"
          stroke="currentColor"
          stroke-width="2.4"
          stroke-linecap="round"
          stroke-dasharray="42 16"
        ></circle>
      </svg>
    </span>

   
  `;

}


function hideManualCurrentLocationSpinner(){

  if(!manualCurrentLocationButton){
    return;
  }


  manualCurrentLocationIsLoading = false;

  manualCurrentLocationButton.disabled =
    false;


  if(manualCurrentLocationOriginalHTML){

    manualCurrentLocationButton.innerHTML =
      manualCurrentLocationOriginalHTML;

  }

}
const confirmSearchButton =
  document.getElementById("confirmSearchButton");

const goCurrentLocationButton =
  document.getElementById("goCurrentLocationButton");

const confirmManualLocationButton =
  document.getElementById("confirmManualLocationButton");

const selectedLocationName =
  document.getElementById("selectedLocationName");

const selectedLocationAddress =
  document.getElementById("selectedLocationAddress");

const mapPinPlaceName =
  document.getElementById("mapPinPlaceName");


let manualLocationMap = null;
let selectedManualLocation = null;
let searchTimer = null;
let reverseTimer = null;
let reverseRequestNumber = 0;


/* =========================
   OPEN MANUAL SEARCH
========================= */

manualLocationButton.addEventListener(
  "click",
  function(){

    locationPage.classList.remove(
      "show"
    );

    resetScurbManualSwipeStyles();

    manualSearchPage.classList.add(
      "show"
    );

    setTimeout(function(){

      manualLocationSearchInput.focus();

    }, 200);

  }
);

/* =========================================
   CLOSE MANUAL SEARCH PAGE
========================================= */

function closeScurbManualSearchPage(){

  manualSearchPage.classList.remove(
    "show"
  );

  manualSearchPage.style.transition = "";
  manualSearchPage.style.transform = "";
  manualSearchPage.style.opacity = "";


  /* Opened from Home location header */

  if(scurbLocationOpenedFromHome){

    scurbLocationOpenedFromHome = false;

    locationPage.classList.remove(
      "show"
    );

    confirmLocationPage.classList.remove(
      "show"
    );

    updateScurbHomeLocation();

    scurbHomePage.classList.add(
      "show"
    );

    requestAnimationFrame(function(){

      if(window.loadScurbHomeImages){

        window.loadScurbHomeImages();

      }

      if(
        typeof updateScurbFloatingCartBar ===
        "function"
      ){

        updateScurbFloatingCartBar();

      }

    });

    return;
  }


  /* Opened from main location page */

  locationPage.style.transition = "";
  locationPage.style.transform = "";
  locationPage.style.opacity = "";

  locationPage.classList.add(
    "show"
  );

}

manualSearchBackButton.addEventListener(
  "click",
  closeScurbManualSearchPage
);
/* =========================================
   MANUAL SEARCH SWIPE BACK
   LEFT + RIGHT
========================================= */

let scurbManualSwipeStartX = 0;
let scurbManualSwipeStartY = 0;

let scurbManualSwipeCurrentX = 0;
let scurbManualSwipeCurrentY = 0;

let scurbManualSwipeActive = false;
let scurbManualSwipeLocked = false;
let scurbManualSwipeHorizontal = false;


function resetScurbManualSwipeStyles(){

  manualSearchPage.style.transition = "";
  manualSearchPage.style.transform = "";
  manualSearchPage.style.opacity = "";

}


manualSearchPage.addEventListener(
  "touchstart",
  function(event){

    if(
      !manualSearchPage.classList.contains(
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

    scurbManualSwipeStartX =
      touch.clientX;

    scurbManualSwipeStartY =
      touch.clientY;

    scurbManualSwipeCurrentX =
      touch.clientX;

    scurbManualSwipeCurrentY =
      touch.clientY;

    scurbManualSwipeActive = true;
    scurbManualSwipeLocked = false;
    scurbManualSwipeHorizontal = false;

    manualSearchPage.style.transition =
      "none";

  },
  {
    passive:true
  }
);


manualSearchPage.addEventListener(
  "touchmove",
  function(event){

    if(
      !scurbManualSwipeActive ||
      event.touches.length !== 1
    ){
      return;
    }

    const touch =
      event.touches[0];

    scurbManualSwipeCurrentX =
      touch.clientX;

    scurbManualSwipeCurrentY =
      touch.clientY;


    const moveX =
      scurbManualSwipeCurrentX -
      scurbManualSwipeStartX;

    const moveY =
      scurbManualSwipeCurrentY -
      scurbManualSwipeStartY;


    if(!scurbManualSwipeLocked){

      if(
        Math.abs(moveX) < 8 &&
        Math.abs(moveY) < 8
      ){
        return;
      }

      scurbManualSwipeLocked = true;

      scurbManualSwipeHorizontal =
        Math.abs(moveX) >
        Math.abs(moveY) * 1.15;

    }


    if(!scurbManualSwipeHorizontal){
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


    manualSearchPage.style.transform =
      `translate3d(${limitedMoveX}px,0,0)`;

    manualSearchPage.style.opacity =
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


manualSearchPage.addEventListener(
  "touchend",
  function(){

    if(!scurbManualSwipeActive){
      return;
    }

    scurbManualSwipeActive = false;


    const moveX =
      scurbManualSwipeCurrentX -
      scurbManualSwipeStartX;

    const moveY =
      scurbManualSwipeCurrentY -
      scurbManualSwipeStartY;


    const shouldClose =
      scurbManualSwipeHorizontal &&
      Math.abs(moveX) >= 90 &&
      Math.abs(moveX) >
      Math.abs(moveY);


    manualSearchPage.style.transition =
      "transform .25s ease, opacity .2s ease";


    if(shouldClose){

      const closeDirection =
        moveX > 0
          ? window.innerWidth
          : -window.innerWidth;


      manualSearchPage.style.transform =
        `translate3d(${closeDirection}px,0,0)`;

      manualSearchPage.style.opacity =
        "0";


      setTimeout(function(){

        closeScurbManualSearchPage();

      }, 250);

    }else{

      manualSearchPage.style.transform =
        "translate3d(0,0,0)";

      manualSearchPage.style.opacity =
        "1";


      setTimeout(function(){

        resetScurbManualSwipeStyles();

      }, 250);

    }


    scurbManualSwipeLocked = false;
    scurbManualSwipeHorizontal = false;

  }
);


manualSearchPage.addEventListener(
  "touchcancel",
  function(){

    scurbManualSwipeActive = false;
    scurbManualSwipeLocked = false;
    scurbManualSwipeHorizontal = false;

    manualSearchPage.style.transition =
      "transform .25s ease, opacity .2s ease";

    manualSearchPage.style.transform =
      "translate3d(0,0,0)";

    manualSearchPage.style.opacity =
      "1";


    setTimeout(function(){

      resetScurbManualSwipeStyles();

    }, 250);

  }
);
confirmLocationBackButton.addEventListener(
  "click",
  function(){

    confirmLocationPage.classList.remove(
      "show"
    );

    resetScurbManualSwipeStyles();

    manualSearchPage.classList.add(
      "show"
    );

  }
);


confirmSearchButton.addEventListener(
  "click",
  function(){

    confirmLocationPage.classList.remove(
      "show"
    );

    resetScurbManualSwipeStyles();

    manualSearchPage.classList.add(
      "show"
    );

    setTimeout(function(){

      manualLocationSearchInput.focus();

    }, 200);

  }
);


/* =========================
   SEARCH LOCATION
========================= */

manualLocationSearchInput.addEventListener("input", function(){

  const query = this.value.trim();

  clearTimeout(searchTimer);

  if(query.length < 3){

    locationSearchResults.innerHTML = "";
    return;

  }

  locationSearchResults.innerHTML = `
    <p class="location-search-message">
      Searching...
    </p>
  `;

  searchTimer = setTimeout(function(){
    searchLocations(query);
  }, 600);

});


async function searchLocations(query){

  try{

    const url =
      "https://nominatim.openstreetmap.org/search" +
      "?format=jsonv2" +
      "&addressdetails=1" +
      "&limit=6" +
      "&countrycodes=in" +
      "&q=" + encodeURIComponent(query);

    const response = await fetch(url, {
      headers:{
        "Accept":"application/json",
        "Accept-Language":"en"
      }
    });

    if(!response.ok){
      throw new Error("Search request failed.");
    }

    const results = await response.json();

    renderSearchResults(results);

  }catch(error){

    console.error(error);

    locationSearchResults.innerHTML = `
      <p class="location-search-message">
        Unable to search this location.
      </p>
    `;

  }

}


function renderSearchResults(results){

  locationSearchResults.innerHTML = "";

  if(!results.length){

    locationSearchResults.innerHTML = `
      <p class="location-search-message">
        No locations found.
      </p>
    `;

    return;

  }

  results.forEach(function(result){

    const address = result.address || {};

    const title =
      address.village ||
      address.town ||
      address.city ||
      address.suburb ||
      address.locality ||
      result.name ||
      "Selected location";

    const item = document.createElement("button");

    item.type = "button";
    item.className = "location-result-item";

    item.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path
          d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12z"
        ></path>
        <circle cx="12" cy="9" r="2.3"></circle>
      </svg>

      <span class="location-result-text">
        <strong>${escapeLocationHTML(title)}</strong>
        <span>
          ${escapeLocationHTML(result.display_name || "")}
        </span>
      </span>
    `;

    item.addEventListener("click", function(){

      openConfirmLocation(
        Number(result.lat),
        Number(result.lon)
      );

    });

    locationSearchResults.appendChild(item);

  });

}


/* =========================
   OPEN CONFIRM MAP
========================= */

async function openConfirmLocation(latitude, longitude){

  manualSearchPage.classList.remove("show");
  confirmLocationPage.classList.add("show");
confirmManualLocationButton.disabled = true;
  selectedLocationName.textContent = "Finding location...";
  selectedLocationAddress.textContent = "";
  mapPinPlaceName.textContent = "Selected location";

  setTimeout(function(){

    createOrMoveMap(latitude, longitude);

  }, 100);

}


function createOrMoveMap(latitude, longitude){

  if(!manualLocationMap){

    manualLocationMap = L.map(
      "manualLocationMap",
      {
        zoomControl:false,
        attributionControl:true
      }
    ).setView([latitude, longitude], 18);


    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom:19,
        attribution:"© OpenStreetMap"
      }
    ).addTo(manualLocationMap);


    manualLocationMap.on("move", function(){
confirmManualLocationButton.disabled = true;
      selectedLocationName.textContent =
        "Move map to select location";

      mapPinPlaceName.textContent =
        "Selecting...";

    });


    manualLocationMap.on("moveend", function(){

      const center = manualLocationMap.getCenter();

      scheduleMapReverseGeocode(
        center.lat,
        center.lng
      );

    });

  }else{

    manualLocationMap.setView(
      [latitude, longitude],
      18,
      {
        animate:false
      }
    );

  }

  manualLocationMap.invalidateSize();

  scheduleMapReverseGeocode(
    latitude,
    longitude
  );

}


/* =========================
   MAP DRAG ADDRESS UPDATE
========================= */

function scheduleMapReverseGeocode(latitude, longitude){

  clearTimeout(reverseTimer);

  reverseTimer = setTimeout(function(){

    updateMapAddress(latitude, longitude);

  }, 450);

}


async function updateMapAddress(latitude, longitude){

  const requestNumber = ++reverseRequestNumber;

  try{

    const locationData =
      await reverseGeocode(latitude, longitude);

    if(requestNumber !== reverseRequestNumber){
      return;
    }

    selectedManualLocation = {
      ...locationData,
      latitude,
      longitude,
      locationType:"manual"
    };

    const placeName =
      locationData.village ||
      locationData.neighbourhood ||
      locationData.city ||
      locationData.road ||
      "Selected location";

    mapPinPlaceName.textContent = placeName;
    selectedLocationName.textContent = placeName;

    selectedLocationAddress.textContent =
      locationData.fullAddress ||
      "Selected map location";
confirmManualLocationButton.disabled = false;
  }catch(error){

    console.error("Reverse location failed:", error);

    selectedManualLocation = {
      latitude,
      longitude,
      locationType:"manual",
      fullAddress:"",
      addressFound:false
    };

    mapPinPlaceName.textContent =
      "Selected location";

    selectedLocationName.textContent =
      "Selected location";

    selectedLocationAddress.textContent =
      latitude.toFixed(6) +
      ", " +
      longitude.toFixed(6);
confirmManualLocationButton.disabled = true;
  }

}


/* =========================
   MANUAL CURRENT LOCATION
========================= */

manualCurrentLocationButton.addEventListener(
  "click",
  function(){

    showManualCurrentLocationSpinner();

    openDeviceLocationOnMap(
      "manualSearchButton"
    );

  }
);

goCurrentLocationButton.addEventListener(
  "click",
  openDeviceLocationOnMap
);

function openDeviceLocationOnMap(
  requestSource = ""
){

  const openedFromManualSearch =
    requestSource ===
    "manualSearchButton";


  /* iOS native app */

  if(isScrubMateIOSApp()){

    if(openedFromManualSearch){

      scrubMateLocationRequestType =
        "openLocationOnMapFromManualSearch";

      window.webkit.messageHandlers
        .requestScrubMateLocation
        .postMessage({
          type:
            "openLocationOnMapFromManualSearch"
        });

    }else{

      requestScrubMateNativeLocation(
        "openLocationOnMap"
      );

    }

    return;
  }


  /* Browser fallback */

  if(!navigator.geolocation){

    console.error(
      "Geolocation is not supported."
    );

    if(openedFromManualSearch){

      hideManualCurrentLocationSpinner();

    }

    return;
  }


  navigator.geolocation.getCurrentPosition(

    function(position){

      if(openedFromManualSearch){

        hideManualCurrentLocationSpinner();

      }


      openConfirmLocation(
        position.coords.latitude,
        position.coords.longitude
      );

    },


    function(error){

      if(openedFromManualSearch){

        hideManualCurrentLocationSpinner();

      }

      handleBrowserLocationError(error);

    },


    {
      enableHighAccuracy:true,
      timeout:20000,
      maximumAge:0
    }

  );

}
window.onScrubMateLocationReceived =
  function(location) {

    const latitude =
      Number(location.latitude);

    const longitude =
      Number(location.longitude);

    const accuracy =
      location.accuracy !== undefined
        ? Number(location.accuracy)
        : null;

    if (
      !Number.isFinite(latitude) ||
      !Number.isFinite(longitude)
    ) {
      console.error(
        "Invalid native location received:",
        location
      );

      hideCurrentLocationSpinner();
      scrubMateLocationRequestType = null;

      return null;
    }

    console.log(
      "Native iOS location received:",
      latitude,
      longitude,
      accuracy
    );

    const requestedType =
      scrubMateLocationRequestType;

    scrubMateLocationRequestType = null;

    // Run async work internally without returning Promise to Swift
    void (async function() {

      if(
  requestedType ===
  "openLocationOnMap" ||
  requestedType ===
  "openLocationOnMapFromManualSearch"
){

  if(
    requestedType ===
    "openLocationOnMapFromManualSearch"
  ){

    hideManualCurrentLocationSpinner();

  }


  openConfirmLocation(
    latitude,
    longitude
  );

  return;
}

      await saveCurrentCoordinates(
        latitude,
        longitude,
        accuracy
      );

    })();

    // Swift receives a supported return value
    return null;
  };

 window.onScrubMateLocationError =
  function(errorData){

    hideCurrentLocationSpinner();

    hideManualCurrentLocationSpinner();

    scrubMateLocationRequestType = null;

    const code =
      errorData?.code || "unknown";

    const message =
      errorData?.message ||
      "Unable to access your current location.";

    if(code === "denied"){

      localStorage.setItem(
        "scurbMateLocationPermission",
        "denied"
      );

    }

    console.error(
      "Native iOS location error:",
      code,
      message
    );

    return null;
  };
  function handleBrowserLocationError(error) {

  hideCurrentLocationSpinner();

  if(error.code === error.PERMISSION_DENIED){

    localStorage.setItem(
      "scurbMateLocationPermission",
      "denied"
    );
  }

  console.error("Location error:", error);

  handleAutomaticLocationFailure();
}
/* =========================
   CONFIRM AND SAVE SILENTLY
========================= */

confirmManualLocationButton.addEventListener(
  "click",
  function(){

    if(!manualLocationMap){
      return;
    }

    const center = manualLocationMap.getCenter();

    const finalLocation = {
      ...(selectedManualLocation || {}),
      latitude:center.lat,
      longitude:center.lng,
      locationType:"manual"
    };

    saveLocationToStorage(finalLocation);

    console.log(
      "Manual location saved:",
      finalLocation
    );

    openScurbHomePage();

  }
);


/* =========================
   REVERSE GEOCODING
========================= */

async function reverseGeocode(latitude, longitude){

  const url =
    "https://nominatim.openstreetmap.org/reverse" +
    "?format=jsonv2" +
    "&lat=" + encodeURIComponent(latitude) +
    "&lon=" + encodeURIComponent(longitude) +
    "&zoom=18" +
    "&addressdetails=1";

  const response = await fetch(url, {
    headers:{
      "Accept":"application/json",
      "Accept-Language":"en"
    }
  });

  if(!response.ok){
    throw new Error("Address request failed.");
  }

  const result = await response.json();
  const address = result.address || {};

  const houseNumber =
    address.house_number || "";

  const road =
    address.road ||
    address.residential ||
    address.pedestrian ||
    address.footway ||
    address.path ||
    "";

  const neighbourhood =
    address.neighbourhood ||
    address.suburb ||
    address.quarter ||
    address.hamlet ||
    "";

  const village =
    address.village ||
    address.hamlet ||
    address.locality ||
    "";

  const city =
    address.city ||
    address.town ||
    address.municipality ||
    address.village ||
    "";

  const district =
    address.state_district ||
    address.county ||
    address.district ||
    "";

  const state =
    address.state || "";

  const postcode =
    address.postcode || "";

  const country =
    address.country || "";

  const countryCode =
    address.country_code || "";

  const streetAddress = [
    houseNumber,
    road
  ]
  .filter(Boolean)
  .join(", ");

  const fullAddress =
    result.display_name || [
      streetAddress,
      neighbourhood,
      village,
      city,
      district,
      state,
      postcode,
      country
    ]
    .filter(Boolean)
    .join(", ");

  return {
    houseNumber,
    road,
    streetName:road,
    streetAddress,
    neighbourhood,
    village,
    city,
    district,
    state,
    postcode,
    country,
    countryCode,
    fullAddress
  };

}


/* =========================
   SAVE LOCAL STORAGE
========================= */

function saveLocationToStorage(location){

  const latitude =
    Number(location.latitude);

  const longitude =
    Number(location.longitude);

  const savedLocation = {
    ...location,
    latitude,
    longitude,
    locationSavedAt:new Date().toISOString()
  };


  localStorage.setItem(
    "scurbMateLatitude",
    String(latitude)
  );

  localStorage.setItem(
    "scurbMateLongitude",
    String(longitude)
  );

  localStorage.setItem(
    "scurbMateHouseNumber",
    location.houseNumber || ""
  );

  localStorage.setItem(
    "scurbMateStreetName",
    location.streetName ||
    location.road ||
    ""
  );

  localStorage.setItem(
    "scurbMateStreetAddress",
    location.streetAddress || ""
  );

  localStorage.setItem(
    "scurbMateNeighbourhood",
    location.neighbourhood || ""
  );

  localStorage.setItem(
    "scurbMateVillage",
    location.village || ""
  );

  localStorage.setItem(
    "scurbMateCity",
    location.city || ""
  );

  localStorage.setItem(
    "scurbMateDistrict",
    location.district || ""
  );

  localStorage.setItem(
    "scurbMateState",
    location.state || ""
  );

  localStorage.setItem(
    "scurbMatePostcode",
    location.postcode || ""
  );

  localStorage.setItem(
    "scurbMateCountry",
    location.country || ""
  );

  localStorage.setItem(
    "scurbMateCountryCode",
    location.countryCode || ""
  );

  localStorage.setItem(
    "scurbMateFullAddress",
    location.fullAddress || ""
  );

  localStorage.setItem(
    "scurbMateLocationType",
    location.locationType || ""
  );

  localStorage.setItem(
    "scurbMateCurrentLocation",
    JSON.stringify(savedLocation)
  );

  localStorage.setItem(
    "scurbMateLocationPermission",
    "granted"
  );

}


/* =========================
   HTML SAFETY
========================= */

function escapeLocationHTML(value){

  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}