/* =========================================
   FLOATING SERVICE CART
========================================= */

const scurbFloatingCartBar =
  document.getElementById("scurbFloatingCartBar");

const scurbFloatingCartImages =
  document.getElementById("scurbFloatingCartImages");

const scurbFloatingCartSavings =
  document.getElementById("scurbFloatingCartSavings");

const scurbFloatingCartCount =
  document.getElementById("scurbFloatingCartCount");

const scurbFloatingCartButton =
  document.getElementById("scurbFloatingCartButton");
const scurbCartDeliveryFee =
  document.getElementById(
    "scurbCartDeliveryFee"
  );

const scurbCartDeliveryDistance =
  document.getElementById(
    "scurbCartDeliveryDistance"
  );

const scurbCartDeliveryRow =
  scurbCartDeliveryFee?.closest(
    ".scurbCartDeliveryRow"
  );
/* =========================================
   FULL CART PAGE ELEMENTS
========================================= */

const scurbCartPage =
  document.getElementById("scurbCartPage");

const scurbCartBackButton =
  document.getElementById("scurbCartBackButton");

const scurbCartItems =
  document.getElementById("scurbCartItems");

const scurbCartServiceCount =
  document.getElementById(
    "scurbCartServiceCount"
  );

const scurbCartAddMoreButton =
  document.getElementById(
    "scurbCartAddMoreButton"
  );

const scurbCartCustomerName =
  document.getElementById(
    "scurbCartCustomerName"
  );

const scurbCartCustomerMobile =
  document.getElementById(
    "scurbCartCustomerMobile"
  );
const scurbCartCustomerNameRow =
  scurbCartCustomerName?.closest(
    ".scurbCartDetailRow"
  );

const scurbCartCustomerMobileRow =
  scurbCartCustomerMobile?.closest(
    ".scurbCartDetailRow"
  );
const scurbCartCustomerAddress =
  document.getElementById(
    "scurbCartCustomerAddress"
  );

const scurbCartServiceTotal =
  document.getElementById(
    "scurbCartServiceTotal"
  );

const scurbCartDiscount =
  document.getElementById(
    "scurbCartDiscount"
  );

const scurbCartBillTotal =
  document.getElementById(
    "scurbCartBillTotal"
  );

const scurbCartBottomTotal =
  document.getElementById(
    "scurbCartBottomTotal"
  );
  const scurbCartPromoCard =
  document.getElementById(
    "scurbCartPromoCard"
  );

const scurbCartPromoTitle =
  document.getElementById(
    "scurbCartPromoTitle"
  );

const scurbCartPromoSubtitle =
  document.getElementById(
    "scurbCartPromoSubtitle"
  );


const scurbCouponPopup =
  document.getElementById(
    "scurbCouponPopup"
  );

const scurbCouponBackdrop =
  document.getElementById(
    "scurbCouponBackdrop"
  );

const scurbCouponCloseButton =
  document.getElementById(
    "scurbCouponCloseButton"
  );

const scurbCouponInput =
  document.getElementById(
    "scurbCouponInput"
  );

const scurbCouponApplyButton =
  document.getElementById(
    "scurbCouponApplyButton"
  );

const scurbCouponQuickApplyButton =
  document.getElementById(
    "scurbCouponQuickApplyButton"
  );

const scurbCouponMessage =
  document.getElementById(
    "scurbCouponMessage"
  );

const scurbCouponAvailableCard =
  document.querySelector(
    ".scurbCouponAvailableCard"
  );

const scurbCouponEmptyState =
  document.getElementById(
    "scurbCouponEmptyState"
  );


const scurbCartCouponDiscountRow =
  document.getElementById(
    "scurbCartCouponDiscountRow"
  );

const scurbCartCouponDiscount =
  document.getElementById(
    "scurbCartCouponDiscount"
  );
let scurbServiceCart = [];


/* =========================================
   CONVERT PRICE TEXT TO NUMBER
========================================= */

function getScurbPriceNumber(value){

  const cleanValue =
    String(value || "")
      .replace(/[^\d.]/g, "");

  return Number(cleanValue) || 0;
}


/* =========================================
   GET SERVICE NAME
========================================= */

function getScurbServiceName(serviceCard){

  return (
    serviceCard?.dataset.service?.trim() ||
    "Cleaning Service"
  );
}


/* =========================================
   FIND SERVICE FROM CART
========================================= */

function findScurbCartService(serviceCard){

  const serviceName =
    getScurbServiceName(serviceCard);

  return scurbServiceCart.find(function(item){

    return item.name === serviceName;

  });
}


/* =========================================
   SAVE CART
========================================= */

function saveScurbServiceCart(){

  localStorage.setItem(
    "scurbMateServiceCart",
    JSON.stringify(scurbServiceCart)
  );
}


/* =========================================
   LOAD SAVED CART
========================================= */

function loadScurbServiceCart(){

  try{

    const savedCart =
      JSON.parse(
        localStorage.getItem(
          "scurbMateServiceCart"
        ) || "[]"
      );

    scurbServiceCart =
      Array.isArray(savedCart)
        ? savedCart.filter(function(item){

            return Number(item.quantity || 0) > 0;

          })
        : [];

  }catch(error){

    scurbServiceCart = [];

  }

  updateScurbServiceButtons();

  updateScurbFloatingCartBar();
}


/* =========================================
   CREATE NEW CART SERVICE
========================================= */

function createScurbCartService(serviceCard){

  const serviceName =
    getScurbServiceName(serviceCard);

  const serviceImage =
    serviceCard.querySelector(
      ".scurbServiceImg"
    );

  const cartImage =
    serviceImage?.dataset.cartImg || "";

  const currentPrice =
    getScurbPriceNumber(
      serviceCard.querySelector(
        ".scurbServicePrice"
      )?.textContent
    );

  const originalPrice =
    getScurbPriceNumber(
      serviceCard.querySelector(
        ".scurbServiceOldPrice"
      )?.textContent
    );

  return {

    name:serviceName,

    price:currentPrice,

    originalPrice:
      originalPrice || currentPrice,

    quantity:1,

    cartImage:cartImage

  };
}


/* =========================================
   CHANGE SERVICE QUANTITY
========================================= */

function changeScurbServiceQuantity(
  serviceCard,
  quantityChange
){

  if(!serviceCard){
    return;
  }

  const serviceName =
    getScurbServiceName(serviceCard);

  const serviceIndex =
    scurbServiceCart.findIndex(
      function(item){

        return item.name === serviceName;

      }
    );


  /* ADD NEW SERVICE */

  if(serviceIndex === -1){

    if(quantityChange > 0){

      const newService =
        createScurbCartService(
          serviceCard
        );

      scurbServiceCart.push(
        newService
      );

    }

  }else{

    const service =
      scurbServiceCart[serviceIndex];

    service.quantity =
      Number(service.quantity || 0) +
      quantityChange;


    /* REMOVE WHEN QUANTITY BECOMES ZERO */

    if(service.quantity <= 0){

      scurbServiceCart.splice(
        serviceIndex,
        1
      );

    }else if(quantityChange > 0){

      /*
       Move recently increased service to
       the end so its image appears first.
      */

      scurbServiceCart.splice(
        serviceIndex,
        1
      );

      scurbServiceCart.push(
        service
      );

    }

  }

saveScurbServiceCart();

updateScurbServiceButtons();

updateScurbFloatingCartBar();

updateScurbPopupBookButtons();
}


/* =========================================
   GET SHORT QUANTITY LABEL
========================================= */

function getScurbServiceShortName(
  serviceCard,
  quantity
){

  const serviceName =
    getScurbServiceName(serviceCard)
      .toLowerCase();

  const single =
    Number(quantity || 0) <= 1;

  if(serviceName.includes("utilities")){
    return single ? "Item" : "Items";
  }

  if(serviceName.includes("kitchen help")){
    return single ? "Hour" : "Hours";
  }

  if(
  serviceName.includes("dusting") ||
  serviceName.includes("wiping") ||
  serviceName.includes("sweeping") ||
  serviceName.includes("mopping")
){
  return single ? "Room" : "Rooms";
}

  if(
    serviceName.includes("packing") ||
    serviceName.includes("unpacking")
  ){
    return single
      ? "Box or Bag"
      : "Boxes or Bags";
  }

  if(serviceName.includes("ironing")){
    return single ? "Piece" : "Pieces";
  }

  if(serviceName.includes("laundry")){
    return single ? "Piece" : "Pieces";
  }

  return getScurbServiceName(serviceCard)
    .replace(/\s+Cleaning$/i, "")
    .replace(/\s+Service$/i, "")
    .replace(/\s+Help$/i, "")
    .trim();
}
/* =========================================
   UPDATE ALL SERVICE + / − BUTTONS
========================================= */


/* =========================================
   UPDATE SERVICE + / − BUTTONS
   WITHOUT RE-RENDERING ALL BUTTONS
========================================= */

function updateScurbServiceButtons(){

  document.querySelectorAll(
    ".scurbServiceCard"
  ).forEach(function(serviceCard){

    const addButton =
      serviceCard.querySelector(
        ".scurbServiceAddBtn"
      );

    if(!addButton){
      return;
    }


    const imageBox =
      serviceCard.querySelector(
        ".scurbServiceImageBox"
      );


    const cartService =
      findScurbCartService(
        serviceCard
      );


    const quantity =
      Number(
        cartService?.quantity || 0
      );


    const previousQuantity =
      Number(
        addButton.dataset.quantity || 0
      );


    let quantityLabel =
      imageBox?.querySelector(
        ".scurbServiceQuantityLabel"
      );


    /*
     Do nothing when this service quantity
     has not changed.

     This prevents all other + buttons
     from re-rendering and blinking.
    */

    if(previousQuantity === quantity){

  if(quantity > 0 && quantityLabel){

    const shortName =
      getScurbServiceShortName(
        serviceCard,
        quantity
      );

    if(
      quantityLabel.textContent !==
      shortName
    ){

      quantityLabel.textContent =
        shortName;

    }

  }

  return;
}
    addButton.dataset.quantity =
      String(quantity);


    /* SHOW − QUANTITY + */

    if(quantity > 0){

      addButton.classList.add(
        "scurbQtyMode"
      );


      /*
       Create quantity structure only when
       changing from normal + to quantity mode.
      */

      if(previousQuantity === 0){

        addButton.replaceChildren();


        const minus =
          document.createElement("span");

        minus.className =
          "scurbServiceMinus";

        minus.setAttribute(
          "aria-label",
          "Decrease quantity"
        );

        minus.textContent = "−";


        const quantityText =
          document.createElement("span");

        quantityText.className =
          "scurbServiceQty";

        quantityText.textContent =
          String(quantity);


        const plus =
          document.createElement("span");

        plus.className =
          "scurbServicePlus";

        plus.setAttribute(
          "aria-label",
          "Increase quantity"
        );

        plus.textContent = "+";


        addButton.append(
          minus,
          quantityText,
          plus
        );

      }else{

        /*
         Quantity mode already exists.
         Update number only.
        */

        const quantityText =
          addButton.querySelector(
            ".scurbServiceQty"
          );

        if(
          quantityText &&
          quantityText.textContent !==
            String(quantity)
        ){

          quantityText.textContent =
            String(quantity);

        }

      }


      addButton.setAttribute(
        "aria-label",
        `Quantity ${quantity}`
      );


      /* CREATE SMALL SERVICE NAME */

      if(imageBox && !quantityLabel){

        quantityLabel =
          document.createElement("span");

        quantityLabel.className =
          "scurbServiceQuantityLabel";

        imageBox.appendChild(
          quantityLabel
        );

      }


      if(quantityLabel){

       quantityLabel.textContent =
  getScurbServiceShortName(
    serviceCard,
    quantity
  );

        quantityLabel.classList.add(
          "show"
        );

      }

    }else{

      /* RESTORE NORMAL SINGLE + */

      addButton.classList.remove(
        "scurbQtyMode"
      );

      addButton.replaceChildren();


      const singlePlus =
        document.createElement("span");

      singlePlus.className =
        "scurbSinglePlus";

      singlePlus.textContent =
        "+";


      addButton.appendChild(
        singlePlus
      );


      addButton.setAttribute(
        "aria-label",
        "Add service"
      );


      if(quantityLabel){

        quantityLabel.remove();

      }

    }

  });
}







/* =========================================
   UPDATE FLOATING CART BAR
========================================= */

function updateScurbFloatingCartBar(){

  if(!scurbFloatingCartBar){
    return;
  }


  /* Number of different service cards */

const totalServices =
  scurbServiceCart.filter(
    function(item){

      return Number(item.quantity || 0) > 0;

    }
  ).length;


  const totalCurrentPrice =
    scurbServiceCart.reduce(
      function(total, item){

        return total +
          (
            Number(item.price || 0) *
            Number(item.quantity || 0)
          );

      },
      0
    );


  const totalOriginalPrice =
    scurbServiceCart.reduce(
      function(total, item){

        return total +
          (
            Number(item.originalPrice || 0) *
            Number(item.quantity || 0)
          );

      },
      0
    );


  const totalSavings =
    Math.max(
      0,
      totalOriginalPrice -
      totalCurrentPrice
    );


  if(scurbFloatingCartSavings){

    scurbFloatingCartSavings.textContent =
      `You saved ₹${totalSavings}`;

  }


  if(scurbFloatingCartCount){

  scurbFloatingCartCount.textContent =
    totalServices === 1
      ? "1 Service"
      : `${totalServices} Services`;

}

if(scurbFloatingCartImages){

  const latestServices =
    scurbServiceCart
      .filter(function(item){

        return item.cartImage;

      })
      .slice(-3)
      .reverse();


  const latestImagesKey =
    latestServices
      .map(function(item){

        return `${item.name}:${item.cartImage}`;

      })
      .join("|");


  /*
   Re-render images only when services change.
   Quantity changes will not blink the images.
  */

  if(
    scurbFloatingCartImages.dataset.imagesKey !==
    latestImagesKey
  ){

    scurbFloatingCartImages.dataset.imagesKey =
      latestImagesKey;

    scurbFloatingCartImages.replaceChildren();


    latestServices.forEach(function(item){

      const image =
        document.createElement("img");

      image.className =
        "scurbFloatingCartImage";

      image.alt =
        item.name;

      image.decoding =
        "async";

      image.draggable =
        false;


      image.addEventListener(
        "error",
        function(){

          image.remove();

        },
        {
          once:true
        }
      );


      image.src =
        item.cartImage;


      scurbFloatingCartImages.appendChild(
        image
      );

    });

  }

}
  


  const homeVisible =
    scurbHomeContent &&
    scurbHomeContent.style.display !==
      "none";


  scurbFloatingCartBar.classList.toggle(
  "show",
  totalServices > 0 &&
  homeVisible
);
}


/* =========================================
   SERVICE BUTTON CLICK
========================================= */

document.querySelectorAll(
  ".scurbServiceAddBtn"
).forEach(function(addButton){

  addButton.addEventListener(
    "click",
    function(event){

      event.preventDefault();

      event.stopPropagation();


      const serviceCard =
        addButton.closest(
          ".scurbServiceCard"
        );

      if(!serviceCard){
        return;
      }


      /* MINUS CLICK */

      if(
       event.target.closest(".scurbServiceMinus")
      ){

        changeScurbServiceQuantity(
          serviceCard,
          -1
        );

        return;
      }


      /* QUANTITY NUMBER CLICK */

      if(
        event.target.closest(".scurbServiceQty")
      ){

        return;
      }


      /*
       Single + or quantity +
       both increase the service.
      */

      changeScurbServiceQuantity(
        serviceCard,
        1
      );

    }
  );

});


/* =========================================
   GO TO CART
========================================= */

scurbFloatingCartButton
  ?.addEventListener(
    "click",
    openScurbCartPage
  );


scurbCartBackButton
  ?.addEventListener(
    "click",
    closeScurbCartPage
  );


scurbCartAddMoreButton
  ?.addEventListener(
    "click",
    closeScurbCartPage
  );


/* =========================================
   LOAD CART WHEN APP OPENS
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  loadScurbServiceCart
);
/* =========================================
   GET CART USER DETAILS
========================================= */
/* =========================================
   GET CART USER DETAILS
========================================= */

function updateScurbCartCustomerDetails(){

  const isLoggedIn =
    localStorage.getItem(
      "scrubMateLoggedIn"
    ) === "true";

  const isGuest =
    localStorage.getItem(
      "scrubMateGuestMode"
    ) === "true";


  let user = null;

  try{

    user =
      JSON.parse(
        localStorage.getItem(
          "scrubMateUser"
        ) || "null"
      );

  }catch(error){

    user = null;

  }


  const validLoggedInUser =
    isLoggedIn &&
    !isGuest &&
    user &&
    user.login === true &&
    user.verified === true;


  /* HIDE NAME + MOBILE FOR GUEST USER */

  if(!validLoggedInUser){

    if(scurbCartCustomerNameRow){

      scurbCartCustomerNameRow.style.display =
        "none";

    }

    if(scurbCartCustomerMobileRow){

      scurbCartCustomerMobileRow.style.display =
        "none";

    }

  }else{

    if(scurbCartCustomerNameRow){

      scurbCartCustomerNameRow.style.display =
        "flex";

    }

    if(scurbCartCustomerMobileRow){

      scurbCartCustomerMobileRow.style.display =
        "flex";

    }


    const userName =
      user.name ||
      localStorage.getItem(
        "scrubMateName"
      ) ||
      user.firstName ||
      "Scrub Mate User";


    const mobile =
      String(
        user.mobile ||
        user.phoneNumber ||
        localStorage.getItem(
          "scrubMateMobile"
        ) ||
        ""
      )
      .replace(/\D/g, "")
      .slice(-10);


    if(scurbCartCustomerName){

      scurbCartCustomerName.textContent =
        userName;

    }


    if(scurbCartCustomerMobile){

      scurbCartCustomerMobile.textContent =
        mobile.length === 10
          ? `+91 ${mobile}`
          : "";

    }

  }


  /* ADDRESS ALWAYS VISIBLE */

  const address =
    localStorage.getItem(
      "scurbMateFullAddress"
    ) ||
    [
      localStorage.getItem(
        "scurbMateStreetName"
      ),
      localStorage.getItem(
        "scurbMateNeighbourhood"
      ),
      localStorage.getItem(
        "scurbMateVillage"
      ),
      localStorage.getItem(
        "scurbMateCity"
      )
    ]
    .filter(Boolean)
    .join(", ") ||
    "Your selected address";


  if(scurbCartCustomerAddress){

    scurbCartCustomerAddress.textContent =
      address;

  }

}

/* =========================================
   UPDATE CART ITEM QUANTITY
========================================= */

function changeScurbCartItemQuantity(
  serviceName,
  change
){

  const serviceIndex =
    scurbServiceCart.findIndex(
      function(item){

        return item.name === serviceName;

      }
    );


  if(serviceIndex === -1){
    return;
  }


  const item =
    scurbServiceCart[serviceIndex];


  item.quantity =
    Number(item.quantity || 0) +
    change;


  if(item.quantity <= 0){

    scurbServiceCart.splice(
      serviceIndex,
      1
    );

  }


  saveScurbServiceCart();

updateScurbServiceButtons();

updateScurbFloatingCartBar();

updateScurbPopupBookButtons();

renderScurbCartPage();


  if(scurbServiceCart.length === 0){

    closeScurbCartPage();

  }

}

/* =========================================
   GET CART QUANTITY LABEL
========================================= */



function getScurbCartQuantityLabel(
  serviceName,
  quantity
){

  const originalName =
    String(serviceName || "");

  const lowerName =
    originalName.toLowerCase();

  const single =
    Number(quantity || 0) <= 1;

  if(lowerName.includes("utilities")){
    return single ? "Item" : "Items";
  }

  if(lowerName.includes("kitchen help")){
    return single ? "Hour" : "Hours";
  }

 if(
  lowerName.includes("dusting") ||
  lowerName.includes("wiping") ||
  lowerName.includes("sweeping") ||
  lowerName.includes("mopping")
){
  return single ? "Room" : "Rooms";
}

  if(
    lowerName.includes("packing") ||
    lowerName.includes("unpacking")
  ){
    return single
      ? "Box or Bag"
      : "Boxes or Bags";
  }

  if(
    lowerName.includes("ironing") ||
    lowerName.includes("laundry")
  ){
    return single ? "Piece" : "Pieces";
  }

  return originalName
    .replace(/\s+Cleaning$/i, "")
    .replace(/\s+Service$/i, "")
    .replace(/\s+Help$/i, "")
    .trim();
}


/* =========================================
   DELIVERY FEE CONFIGURATION
========================================= */

const SCURB_SERVICE_CENTER_LAT =
  16.747578614935353;

const SCURB_SERVICE_CENTER_LON =
  81.68208423275695;

const SCURB_FREE_DISTANCE_KM = 1;

const SCURB_DELIVERY_RATE_PER_KM = 5;

const SCURB_MAX_DELIVERY_FEE = 40;


/* =========================================
   CONVERT DEGREES TO RADIANS
========================================= */

function scurbDegreesToRadians(value){

  return Number(value) * Math.PI / 180;
}


/* =========================================
   CALCULATE DISTANCE USING HAVERSINE
========================================= */

function calculateScurbDistanceKm(
  startLatitude,
  startLongitude,
  endLatitude,
  endLongitude
){

  const earthRadiusKm = 6371;

  const latitudeDifference =
    scurbDegreesToRadians(
      endLatitude - startLatitude
    );

  const longitudeDifference =
    scurbDegreesToRadians(
      endLongitude - startLongitude
    );

  const startLatitudeRadians =
    scurbDegreesToRadians(
      startLatitude
    );

  const endLatitudeRadians =
    scurbDegreesToRadians(
      endLatitude
    );

  const value =
    Math.sin(latitudeDifference / 2) ** 2 +
    Math.cos(startLatitudeRadians) *
    Math.cos(endLatitudeRadians) *
    Math.sin(longitudeDifference / 2) ** 2;

  const angularDistance =
    2 * Math.atan2(
      Math.sqrt(value),
      Math.sqrt(1 - value)
    );

  return earthRadiusKm * angularDistance;
}


/* =========================================
   GET USER LOCATION FROM LOCAL STORAGE
========================================= */

function getScurbStoredCoordinates(){

  const latitudeKeys = [
    "scurbMateLatitude",
    "scurbMateLat",
    "scrubMateLatitude",
    "scrubMateLat",
    "cezooUserLat"
  ];

  const longitudeKeys = [
    "scurbMateLongitude",
    "scurbMateLon",
    "scurbMateLng",
    "scrubMateLongitude",
    "scrubMateLon",
    "scrubMateLng",
    "cezooUserLon"
  ];


  let latitude = null;
  let longitude = null;


 for(const key of latitudeKeys){

  const rawValue =
    localStorage.getItem(key);

  if(rawValue === null || rawValue === ""){
    continue;
  }

  const storedValue =
    Number(rawValue);

  if(Number.isFinite(storedValue)){

    latitude = storedValue;
    break;
  }
}


for(const key of longitudeKeys){

  const rawValue =
    localStorage.getItem(key);

  if(rawValue === null || rawValue === ""){
    continue;
  }

  const storedValue =
    Number(rawValue);

  if(Number.isFinite(storedValue)){

    longitude = storedValue;
    break;
  }
}

  if(
    !Number.isFinite(latitude) ||
    !Number.isFinite(longitude)
  ){

    return null;
  }


  return {
    latitude,
    longitude
  };
}


/* =========================================
   FORMAT DELIVERY DISTANCE
========================================= */

function formatScurbDeliveryDistance(
  distanceKm
){

  if(distanceKm < 1){

    const distanceMeters =
      Math.round(distanceKm * 1000);

    return `${distanceMeters} m away`;
  }


  if(distanceKm < 10){

    return `${distanceKm.toFixed(2)} km away`;
  }


  return `${distanceKm.toFixed(1)} km away`;
}


/* =========================================
   CALCULATE DELIVERY FEE
========================================= */

function getScurbDeliveryDetails(){

  const coordinates =
    getScurbStoredCoordinates();


  if(!coordinates){

    return {
      distanceKm:null,
      distanceText:"Location unavailable",
      fee:0
    };
  }


  const distanceKm =
    calculateScurbDistanceKm(
      SCURB_SERVICE_CENTER_LAT,
      SCURB_SERVICE_CENTER_LON,
      coordinates.latitude,
      coordinates.longitude
    );


  let deliveryFee = 0;


  /*
     First 1 km is free.

     Examples:

     0.8 km  = ₹0
     1.2 km  = ₹5
     2.1 km  = ₹10
     5.5 km  = ₹25
     10 km   = ₹40 maximum
  */

  if(distanceKm > SCURB_FREE_DISTANCE_KM){

    const chargeableDistance =
      distanceKm -
      SCURB_FREE_DISTANCE_KM;

    const chargeableKilometres =
      Math.ceil(chargeableDistance);

    deliveryFee =
      chargeableKilometres *
      SCURB_DELIVERY_RATE_PER_KM;
  }


  deliveryFee =
    Math.min(
      deliveryFee,
      SCURB_MAX_DELIVERY_FEE
    );


  return {
    distanceKm,
    distanceText:
      formatScurbDeliveryDistance(
        distanceKm
      ),
    fee:deliveryFee
  };
}


/* =========================================
   RENDER CART PAGE
========================================= */

function renderScurbCartPage(){

  if(!scurbCartItems){
    return;
  }


  const activeItems =
    scurbServiceCart.filter(
      function(item){

        return Number(item.quantity || 0) > 0;

      }
    );


  scurbCartItems.replaceChildren();


  activeItems.forEach(function(item){

    const cartItem =
      document.createElement("article");

    cartItem.className =
      "scurbCartItem";


    const image =
      document.createElement("img");

    image.className =
      "scurbCartItemImage";

    image.src =
      item.cartImage || "";

    image.alt =
      item.name;

    image.draggable =
      false;


    const info =
      document.createElement("div");

    info.className =
      "scurbCartItemInfo";


    const name =
      document.createElement("h3");

    name.textContent =
      item.name;


    const priceHolder =
      document.createElement("div");

    priceHolder.className =
      "scurbCartItemPrice";


    const currentPrice =
      document.createElement("span");

    currentPrice.className =
      "scurbCartItemCurrentPrice";

    currentPrice.textContent =
      `₹${Number(item.price || 0)}`;


    const originalPrice =
      document.createElement("span");

    originalPrice.className =
      "scurbCartItemOldPrice";

    originalPrice.textContent =
      `₹${Number(
        item.originalPrice ||
        item.price ||
        0
      )}`;


    priceHolder.append(
      currentPrice,
      originalPrice
    );


    info.append(
      name,
      priceHolder
    );


   const quantityWrap =
  document.createElement("div");

quantityWrap.className =
  "scurbCartItemQuantityWrap";


const quantityHolder =
  document.createElement("div");

quantityHolder.className =
  "scurbCartItemQuantity";


    const minusButton =
      document.createElement("button");

    minusButton.type =
      "button";

    minusButton.className =
      "scurbCartItemMinus";

    minusButton.textContent =
      "−";

    minusButton.setAttribute(
      "aria-label",
      `Decrease ${item.name}`
    );


    const quantityText =
      document.createElement("span");

    quantityText.className =
      "scurbCartItemQty";

    quantityText.textContent =
      String(item.quantity);


    const plusButton =
      document.createElement("button");

    plusButton.type =
      "button";

    plusButton.className =
      "scurbCartItemPlus";

    plusButton.textContent =
      "+";

    plusButton.setAttribute(
      "aria-label",
      `Increase ${item.name}`
    );


    minusButton.addEventListener(
      "click",
      function(){

        changeScurbCartItemQuantity(
          item.name,
          -1
        );

      }
    );


    plusButton.addEventListener(
      "click",
      function(){

        changeScurbCartItemQuantity(
          item.name,
          1
        );

      }
    );


   quantityHolder.append(
  minusButton,
  quantityText,
  plusButton
);


const quantityLabel =
  document.createElement("span");

quantityLabel.className =
  "scurbCartItemQuantityLabel";

quantityLabel.textContent =
  getScurbCartQuantityLabel(
    item.name,
    item.quantity
  );


quantityWrap.append(
  quantityHolder,
  quantityLabel
);


    cartItem.append(
  image,
  info,
  quantityWrap
);

    scurbCartItems.appendChild(
      cartItem
    );

  });


  const serviceCount =
    activeItems.length;


  if(scurbCartServiceCount){

    scurbCartServiceCount.textContent =
      serviceCount === 1
        ? "1 service"
        : `${serviceCount} services`;

  }


  const originalTotal =
    activeItems.reduce(
      function(total, item){

        return total +
          (
            Number(
              item.originalPrice ||
              item.price ||
              0
            ) *
            Number(item.quantity || 0)
          );

      },
      0
    );


  const currentTotal =
    activeItems.reduce(
      function(total, item){

        return total +
          (
            Number(item.price || 0) *
            Number(item.quantity || 0)
          );

      },
      0
    );


  const discount =
    Math.max(
      0,
      originalTotal -
      currentTotal
    );


  if(scurbCartServiceTotal){

    scurbCartServiceTotal.textContent =
      `₹${originalTotal}`;

  }


  if(scurbCartDiscount){

    scurbCartDiscount.textContent =
      `− ₹${discount}`;

  }


/* DELIVERY DETAILS */

const deliveryDetails =
  getScurbDeliveryDetails();

let deliveryFee =
  Number(deliveryDetails.fee || 0);


/* FREE DELIVERY FOR ₹300 OR ABOVE */

if(currentTotal >= 300){

  deliveryFee = 0;

}


/* COUPON DISCOUNT */

let couponDiscount =
  getScurbCouponDiscount(
    currentTotal
  );


/*
   Automatically remove coupon if
   service total goes below ₹400.
*/

if(
  scurbAppliedCoupon &&
  currentTotal < 400
){

  scurbAppliedCoupon = false;

  localStorage.removeItem(
    "scurbMateAppliedCoupon"
  );

  couponDiscount = 0;
}


/* FINAL AMOUNT */

const finalTotal =
  Math.max(
    0,
    currentTotal +
    deliveryFee -
    couponDiscount
  );


/* DELIVERY DISTANCE */

if(scurbCartDeliveryDistance){

  scurbCartDeliveryDistance.textContent =
    deliveryDetails.distanceText;

}


/* DELIVERY FEE */

if(scurbCartDeliveryFee){

  scurbCartDeliveryFee.textContent =
    deliveryFee === 0
      ? "FREE"
      : `₹${deliveryFee}`;

}


if(scurbCartDeliveryRow){

  scurbCartDeliveryRow.classList.toggle(
    "deliveryFree",
    deliveryFee === 0
  );

}


/* COUPON BILL ROW */

if(scurbCartCouponDiscountRow){

  if(couponDiscount > 0){

    scurbCartCouponDiscountRow.hidden =
      false;

    scurbCartCouponDiscountRow.style.display =
      "";

  }else{

    scurbCartCouponDiscountRow.hidden =
      true;

    scurbCartCouponDiscountRow.style.display =
      "none";

  }

}


if(
  scurbCartCouponDiscount &&
  couponDiscount > 0
){

  scurbCartCouponDiscount.textContent =
    `− ₹${couponDiscount}`;

}


/* PROMO CARD STATUS */

if(scurbCartPromoTitle){

  scurbCartPromoTitle.textContent =
    couponDiscount > 0
      ? "SCRUBMATE applied"
      : "Apply promo code";

}


if(scurbCartPromoSubtitle){

  scurbCartPromoSubtitle.textContent =
    couponDiscount > 0
      ? `You saved ₹${couponDiscount}`
      : "Save more on your booking";

}


/* FINAL TO PAY */

if(scurbCartBillTotal){

  scurbCartBillTotal.textContent =
    `₹${finalTotal}`;

}


if(scurbCartBottomTotal){

  scurbCartBottomTotal.textContent =
    `₹${finalTotal}`;

}


  updateScurbCartCustomerDetails();

}

/* =========================================
   OPEN CART PAGE
========================================= */

function openScurbCartPage(){

  if(scurbServiceCart.length === 0){
    return;
  }

  resetScurbCartSwipeStyles();

  renderScurbCartPage();

  scurbCartPage.style.transition = "";
  scurbCartPage.style.transform = "";
  scurbCartPage.style.opacity = "";

  scurbCartPage.classList.add(
    "show"
  );

  document.body.style.overflow =
    "hidden";

}


/* =========================================
   CLOSE CART PAGE
========================================= */

function closeScurbCartPage(){

  scurbCartPage.classList.remove(
    "show"
  );

  resetScurbCartSwipeStyles();

  document.body.style.overflow = "";

}
/* =========================================
   CART PAGE SWIPE CLOSE
   LEFT + RIGHT
========================================= */

let scurbCartSwipeStartX = 0;
let scurbCartSwipeStartY = 0;

let scurbCartSwipeCurrentX = 0;
let scurbCartSwipeCurrentY = 0;

let scurbCartSwipeActive = false;
let scurbCartSwipeDirectionLocked = false;
let scurbCartSwipeHorizontal = false;


/* RESET CART SWIPE */

function resetScurbCartSwipeStyles(){

  scurbCartSwipeActive = false;

  scurbCartSwipeDirectionLocked = false;

  scurbCartSwipeHorizontal = false;

  scurbCartSwipeStartX = 0;
  scurbCartSwipeStartY = 0;

  scurbCartSwipeCurrentX = 0;
  scurbCartSwipeCurrentY = 0;

  if(!scurbCartPage){
    return;
  }

  scurbCartPage.style.transition = "";

  scurbCartPage.style.transform = "";

  scurbCartPage.style.opacity = "";

}


/* TOUCH START */

scurbCartPage?.addEventListener(
  "touchstart",
  function(event){

    if(
      !scurbCartPage.classList.contains(
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


    scurbCartSwipeStartX =
      touch.clientX;

    scurbCartSwipeStartY =
      touch.clientY;

    scurbCartSwipeCurrentX =
      touch.clientX;

    scurbCartSwipeCurrentY =
      touch.clientY;


    scurbCartSwipeActive = true;

    scurbCartSwipeDirectionLocked =
      false;

    scurbCartSwipeHorizontal =
      false;


    scurbCartPage.style.transition =
      "none";

  },
  {
    passive:true
  }
);


/* TOUCH MOVE */

scurbCartPage?.addEventListener(
  "touchmove",
  function(event){

    if(
      !scurbCartSwipeActive ||
      event.touches.length !== 1
    ){
      return;
    }


    const touch =
      event.touches[0];


    scurbCartSwipeCurrentX =
      touch.clientX;

    scurbCartSwipeCurrentY =
      touch.clientY;


    const moveX =
      scurbCartSwipeCurrentX -
      scurbCartSwipeStartX;

    const moveY =
      scurbCartSwipeCurrentY -
      scurbCartSwipeStartY;


    /*
     First detect whether the gesture
     is horizontal or vertical.
    */

    if(!scurbCartSwipeDirectionLocked){

      if(
        Math.abs(moveX) < 10 &&
        Math.abs(moveY) < 10
      ){
        return;
      }


      scurbCartSwipeDirectionLocked =
        true;


      scurbCartSwipeHorizontal =
        Math.abs(moveX) >
        Math.abs(moveY) * 1.2;

    }


    /*
     Vertical gesture:
     allow normal cart scrolling.
    */

    if(!scurbCartSwipeHorizontal){
      return;
    }


    event.preventDefault();


    const maximumMove =
      window.innerWidth;


    const limitedMoveX =
      Math.max(
        -maximumMove,
        Math.min(
          maximumMove,
          moveX
        )
      );


    const progress =
      Math.min(
        Math.abs(limitedMoveX) /
        maximumMove,
        1
      );


    scurbCartPage.style.transform =
      `translate3d(${limitedMoveX}px,0,0)`;


    scurbCartPage.style.opacity =
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

scurbCartPage?.addEventListener(
  "touchend",
  function(){

    if(!scurbCartSwipeActive){
      return;
    }


    scurbCartSwipeActive = false;


    const moveX =
      scurbCartSwipeCurrentX -
      scurbCartSwipeStartX;

    const moveY =
      scurbCartSwipeCurrentY -
      scurbCartSwipeStartY;


    const swipeDistance =
      Math.abs(moveX);


    const shouldClose =
      scurbCartSwipeHorizontal &&
      swipeDistance >= 90 &&
      swipeDistance >
      Math.abs(moveY);


    scurbCartPage.style.transition =
      "transform .25s ease, opacity .2s ease";


    if(shouldClose){

      const closeDirection =
        moveX > 0
          ? window.innerWidth
          : -window.innerWidth;


      scurbCartPage.style.transform =
        `translate3d(${closeDirection}px,0,0)`;


      scurbCartPage.style.opacity =
        "0";


      setTimeout(function(){

        scurbCartPage.classList.remove(
          "show"
        );

        document.body.style.overflow =
          "";

        resetScurbCartSwipeStyles();

      }, 250);


      return;
    }


    /* Gesture too short: return cart to center */

    scurbCartPage.style.transform =
      "translate3d(0,0,0)";


    scurbCartPage.style.opacity =
      "1";


    setTimeout(function(){

      resetScurbCartSwipeStyles();

    }, 250);

  }
);


/* TOUCH CANCEL */

scurbCartPage?.addEventListener(
  "touchcancel",
  function(){

    if(!scurbCartSwipeActive){
      return;
    }


    scurbCartSwipeActive = false;


    scurbCartPage.style.transition =
      "transform .25s ease, opacity .2s ease";


    scurbCartPage.style.transform =
      "translate3d(0,0,0)";


    scurbCartPage.style.opacity =
      "1";


    setTimeout(function(){

      resetScurbCartSwipeStyles();

    }, 250);

  }
);


/* =========================================
   POPUP BOOK BUTTONS
   SYNCHRONIZED WITH HOME + CART
========================================= */

const scurbPopupBookButtonMap = {

  fridgeCleaningBookBtn:
    "openFridgeCleaningPopup",

  sweepingMoppingBookBtn:
    "openSweepingMoppingPopup",

  windowCleaningBookBtn:
    "openWindowCleaningPopup",

  bikeCleaningBookBtn:
    "openBikeCleaningPopup",

  bedroomCleaningBookBtn:
    "openBedroomCleaningPopup",

  bathroomCleaningBookBtn:
    "openBathroomCleaningPopup",

  acCleaningBookBtn:
    "openAcCleaningPopup",

  utilitiesCleaningBookBtn:
    "openUtilitiesCleaningPopup",

  fanCleaningBookBtn:
    "openFanCleaningPopup",

  ironingBookBtn:
    "openIroningPopup",

  kitchenHelpBookBtn:
    "openKitchenHelpPopup",

  laundryServiceBookBtn:
    "openLaundryServicePopup",

  packingUnpackingBookBtn:
    "openPackingUnpackingPopup",

  shopCleaningBookBtn:
    "openShopCleaningPopup",

  dustingWipingBookBtn:
    "openDustingWipingPopup",

  stageCleaningBookBtn:
    "openStageCleaningPopup"

};


/* GET HOME SERVICE CARD FROM POPUP BUTTON */

function getScurbCardFromPopupButton(
  popupButton
){

  if(!popupButton){
    return null;
  }

  const serviceCardId =
    scurbPopupBookButtonMap[
      popupButton.id
    ];

  if(!serviceCardId){
    return null;
  }

  return document.getElementById(
    serviceCardId
  );
}


/* GET CURRENT SERVICE QUANTITY */

function getScurbPopupServiceQuantity(
  serviceCard
){

  const cartService =
    findScurbCartService(
      serviceCard
    );

  return Number(
    cartService?.quantity || 0
  );
}

function getScurbPopupQuantityLabel(
  serviceCard,
  quantity
){

  const serviceName =
    getScurbServiceName(serviceCard)
      .toLowerCase();

  const single =
    Number(quantity || 0) <= 1;

  if(serviceName.includes("utilities")){
    return single ? "Item" : "Items";
  }

  if(serviceName.includes("kitchen help")){
    return single ? "Hour" : "Hours";
  }

  if(
    serviceName.includes("dusting") ||
    serviceName.includes("wiping") ||
    serviceName.includes("sweeping") ||
    serviceName.includes("mopping")
  ){
    return single ? "Room" : "Rooms";
  }

  if(
    serviceName.includes("packing") ||
    serviceName.includes("unpacking")
  ){
    return single
      ? "Box or Bag"
      : "Boxes or Bags";
  }

  if(
    serviceName.includes("ironing") ||
    serviceName.includes("laundry")
  ){
    return single
      ? "Piece"
      : "Pieces";
  }

  return getScurbServiceName(serviceCard)
    .replace(/\s+Cleaning$/i, "")
    .replace(/\s+Service$/i, "")
    .replace(/\s+Help$/i, "")
    .trim();
}
/* RENDER ONE POPUP BOOK BUTTON */
function renderScurbPopupBookButton(
  popupButton
){

  const serviceCard =
    getScurbCardFromPopupButton(
      popupButton
    );

  if(!serviceCard){
    return;
  }

  const quantity =
    getScurbPopupServiceQuantity(
      serviceCard
    );


  /* NO QUANTITY — SHOW BOOK */

  if(quantity <= 0){

    popupButton.classList.remove(
      "scurbPopupQtyMode"
    );

    popupButton.replaceChildren();

    popupButton.textContent =
      "Book";

    popupButton.setAttribute(
      "aria-label",
      "Book service"
    );

    return;
  }


  /* SHOW − NUMBER + WITH UNIT */

  popupButton.classList.add(
    "scurbPopupQtyMode"
  );

  popupButton.replaceChildren();


  const quantityRow =
    document.createElement("span");

  quantityRow.className =
    "scurbPopupBookQuantityRow";


  const minus =
    document.createElement("span");

  minus.className =
    "scurbPopupBookMinus";

  minus.textContent =
    "−";


  const quantityText =
    document.createElement("span");

  quantityText.className =
    "scurbPopupBookQty";

  quantityText.textContent =
    String(quantity);


  const plus =
    document.createElement("span");

  plus.className =
    "scurbPopupBookPlus";

  plus.textContent =
    "+";


  quantityRow.append(
    minus,
    quantityText,
    plus
  );


  const quantityLabel =
    document.createElement("span");

  quantityLabel.className =
    "scurbPopupBookQuantityLabel";

  quantityLabel.textContent =
    getScurbPopupQuantityLabel(
      serviceCard,
      quantity
    );


  popupButton.append(
    quantityRow,
    quantityLabel
  );


  popupButton.setAttribute(
    "aria-label",
    `Quantity ${quantity}`
  );
}


/* UPDATE ALL OPEN POPUP BUTTONS */

function updateScurbPopupBookButtons(){

  Object.keys(
    scurbPopupBookButtonMap
  ).forEach(function(buttonId){

    const popupButton =
      document.getElementById(
        buttonId
      );

    if(popupButton){

      renderScurbPopupBookButton(
        popupButton
      );

    }

  });
}
/* =========================================
   POPUP BOOK / − / + CLICK
========================================= */

document.addEventListener(
  "click",
  function(event){

    const popupButton =
      event.target.closest(
        ".scurbServiceHeaderBookBtn"
      );

    if(!popupButton){
      return;
    }

    const serviceCardId =
      scurbPopupBookButtonMap[
        popupButton.id
      ];

    if(!serviceCardId){
      return;
    }

    const serviceCard =
      document.getElementById(
        serviceCardId
      );

    if(!serviceCard){
      console.error(
        "Service card not found:",
        serviceCardId
      );

      return;
    }

    event.preventDefault();
    event.stopPropagation();


    /* MINUS */

    if(
      event.target.closest(
        ".scurbPopupBookMinus"
      )
    ){

      changeScurbServiceQuantity(
        serviceCard,
        -1
      );

      return;
    }


    /* QUANTITY NUMBER — DO NOTHING */

    if(
      event.target.closest(
        ".scurbPopupBookQty"
      )
    ){
      return;
    }


    /* BOOK OR PLUS */

    changeScurbServiceQuantity(
      serviceCard,
      1
    );

  }
);
/* =========================================
   UPDATE BOOK BUTTON AFTER POPUP OPENS
========================================= */

document.addEventListener(
  "click",
  function(event){

    const serviceCard =
      event.target.closest(
        ".scurbServiceCard"
      );

    if(!serviceCard){
      return;
    }

    if(
      event.target.closest(
        ".scurbServiceAddBtn"
      )
    ){
      return;
    }

    /*
      Popup HTML is inserted by the service
      popup file. Wait until that finishes.
    */

    setTimeout(function(){

      updateScurbPopupBookButtons();

    }, 0);

  }
);

/* =========================================
   SCRUBMATE COUPON
========================================= */

const SCURB_COUPON_CODE =
  "SCRUBMATE";

let scurbAppliedCoupon =
  localStorage.getItem(
    "scurbMateAppliedCoupon"
  ) === SCURB_COUPON_CODE;


/* =========================================
   GET COUPON DISCOUNT
========================================= */

function getScurbCouponDiscount(
  serviceTotal
){

  if(!scurbAppliedCoupon){
    return 0;
  }

  const total =
    Number(serviceTotal || 0);

  if(total >= 600){
    return 60;
  }

  if(total >= 400){
    return 50;
  }

  return 0;
}


/* =========================================
   OPEN COUPON POPUP
========================================= */

function openScurbCouponPopup(){

  if(!scurbCouponPopup){
    return;
  }

  scurbCouponPopup.classList.add(
    "show"
  );

  scurbCouponPopup.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";

  resetScurbCouponPopupState();

  setTimeout(function(){

    scurbCouponInput?.focus();

  }, 250);
}


/* =========================================
   CLOSE COUPON POPUP
========================================= */

function closeScurbCouponPopup(){

  if(!scurbCouponPopup){
    return;
  }

  scurbCouponPopup.classList.remove(
    "show"
  );

  scurbCouponPopup.setAttribute(
    "aria-hidden",
    "true"
  );

  document.body.style.overflow =
    scurbCartPage?.classList.contains("show")
      ? "hidden"
      : "";
}


/* =========================================
   RESET POPUP STATE
========================================= */

function resetScurbCouponPopupState(){

  if(scurbCouponInput){

    scurbCouponInput.value =
      scurbAppliedCoupon
        ? SCURB_COUPON_CODE
        : "";
  }

  if(scurbCouponMessage){

    scurbCouponMessage.textContent = "";
    scurbCouponMessage.classList.remove(
      "success"
    );
  }
/* WRONG COUPON SEARCH */

if(scurbCouponAvailableCard){

  scurbCouponAvailableCard.hidden =
    true;

  scurbCouponAvailableCard.style.display =
    "none";

}

if(scurbCouponEmptyState){

  scurbCouponEmptyState.hidden =
    false;

  scurbCouponEmptyState.style.display =
    "flex";

}
}


/* =========================================
   APPLY COUPON
========================================= */

function applyScurbCoupon(){

  const enteredCode =
    String(
      scurbCouponInput?.value || ""
    )
      .trim()
      .toUpperCase();

if(enteredCode !== SCURB_COUPON_CODE){

  /* HIDE SCRUBMATE COUPON CARD */

  if(scurbCouponAvailableCard){

    scurbCouponAvailableCard.hidden =
      true;

    scurbCouponAvailableCard.style.display =
      "none";

  }


  /* SHOW NO COUPON AVAILABLE */

  if(scurbCouponEmptyState){

    scurbCouponEmptyState.hidden =
      false;

    scurbCouponEmptyState.style.display =
      "flex";

  }


  if(scurbCouponMessage){

    scurbCouponMessage.textContent = "";

    scurbCouponMessage.classList.remove(
      "success"
    );

  }

  return;
}

  const serviceTotal =
    scurbServiceCart.reduce(
      function(total, item){

        return total +
          (
            Number(item.price || 0) *
            Number(item.quantity || 0)
          );

      },
      0
    );


  if(serviceTotal < 400){

    if(scurbCouponAvailableCard){

      scurbCouponAvailableCard.hidden =
        false;
    }

    if(scurbCouponEmptyState){

      scurbCouponEmptyState.hidden =
        true;
    }

    if(scurbCouponMessage){

      scurbCouponMessage.textContent =
        `Add ₹${400 - serviceTotal} more to use this coupon`;

      scurbCouponMessage.classList.remove(
        "success"
      );
    }

    return;
  }


  scurbAppliedCoupon = true;

  localStorage.setItem(
    "scurbMateAppliedCoupon",
    SCURB_COUPON_CODE
  );


  if(scurbCouponMessage){

    scurbCouponMessage.textContent =
      serviceTotal >= 600
        ? "Coupon applied! You saved ₹60"
        : "Coupon applied! You saved ₹50";

    scurbCouponMessage.classList.add(
      "success"
    );
  }


  renderScurbCartPage();


  setTimeout(function(){

    closeScurbCouponPopup();

  }, 650);
}
scurbCartPromoCard
  ?.addEventListener(
    "click",
    openScurbCouponPopup
  );


scurbCouponCloseButton
  ?.addEventListener(
    "click",
    closeScurbCouponPopup
  );


scurbCouponBackdrop
  ?.addEventListener(
    "click",
    closeScurbCouponPopup
  );


scurbCouponApplyButton
  ?.addEventListener(
    "click",
    applyScurbCoupon
  );


scurbCouponQuickApplyButton
  ?.addEventListener(
    "click",
    function(){

      if(scurbCouponInput){

        scurbCouponInput.value =
          SCURB_COUPON_CODE;
      }

      applyScurbCoupon();
    }
  );


scurbCouponInput
  ?.addEventListener(
    "input",
    function(){

      const searchedCode =
        String(
          scurbCouponInput.value || ""
        )
          .trim()
          .toUpperCase()
          .replace(/\s/g, "");


      /* KEEP INPUT CAPITAL */

      scurbCouponInput.value =
        searchedCode;


      /* CLEAR OLD MESSAGE */

      if(scurbCouponMessage){

        scurbCouponMessage.textContent = "";

        scurbCouponMessage.classList.remove(
          "success"
        );
      }


      /*
         EMPTY INPUT:
         Show available SCRUBMATE coupon.
      */

      if(searchedCode === ""){

  if(scurbCouponAvailableCard){

    scurbCouponAvailableCard.hidden =
      false;

    scurbCouponAvailableCard.style.display =
      "";

  }

  if(scurbCouponEmptyState){

    scurbCouponEmptyState.hidden =
      true;

    scurbCouponEmptyState.style.display =
      "none";

  }

  return;
}


      /*
         MATCHING SEARCH:
         Show SCRUBMATE coupon while typing.

         Examples:
         S
         SCR
         SCRUB
         SCRUBMATE
      */

      const couponMatches =
        SCURB_COUPON_CODE.startsWith(
          searchedCode
        );


     if(couponMatches){

  if(scurbCouponAvailableCard){

    scurbCouponAvailableCard.hidden =
      false;

    scurbCouponAvailableCard.style.display =
      "";

  }

  if(scurbCouponEmptyState){

    scurbCouponEmptyState.hidden =
      true;

    scurbCouponEmptyState.style.display =
      "none";

  }

  return;
}


      /*
         WRONG SEARCH:
         Hide coupon and show no results.
      */

     if(scurbCouponAvailableCard){

  scurbCouponAvailableCard.hidden =
    true;

  scurbCouponAvailableCard.style.display =
    "none";

}

if(scurbCouponEmptyState){

  scurbCouponEmptyState.hidden =
    false;

  scurbCouponEmptyState.style.display =
    "flex";

}

    }
  );
/* =========================================
   SCRUB MATE PAYMENT + BOOKING FLOW
   CASH / UPI ON SERVICE + RAZORPAY ONLINE
========================================= */

const scurbCartPayOnlineButton =
  document.getElementById("scurbCartPayOnlineButton");

const scurbCartCashButton =
  document.getElementById("scurbCartCashButton");

let scurbBookingTimer = null;
let scurbBookingSaving = false;


/* =========================================
   GET SUPABASE CLIENT
========================================= */

function getScrubMateSupabaseClient(){

  if(
    typeof supabaseClient !== "undefined" &&
    supabaseClient?.from
  ){
    return supabaseClient;
  }

  if(window.supabaseClient?.from){
    return window.supabaseClient;
  }

  if(window.scrubMateSupabase?.from){
    return window.scrubMateSupabase;
  }

  throw new Error(
    "Supabase client was not found. Keep your existing supabaseClient connection loaded before this file."
  );
}


/* =========================================
   READ SAVED CUSTOMER
========================================= */

function getScrubMateBookingUser(){

  let user = null;

  try{
    user = JSON.parse(
      localStorage.getItem("scrubMateUser") || "null"
    );
  }catch(error){
    user = null;
  }

  const name =
    user?.name ||
    localStorage.getItem("scrubMateName") ||
    [
      localStorage.getItem("scrubMateFirstName"),
      localStorage.getItem("scrubMateLastName")
    ]
      .filter(Boolean)
      .join(" ") ||
    "Scrub Mate User";

  const mobile = String(
    user?.mobile ||
    user?.phoneNumber ||
    localStorage.getItem("scrubMateMobile") ||
    ""
  )
    .replace(/\D/g, "")
    .slice(-10);

  const email =
    user?.email ||
    localStorage.getItem("scrubMateEmail") ||
    "";

  return {
    ...user,
    name,
    mobile,
    email
  };
}


/* =========================================
   READ SAVED ADDRESS + LOCATION
========================================= */

function getScrubMateBookingLocation(){

  const coordinates =
    getScurbStoredCoordinates();

  const streetName =
    localStorage.getItem("scurbMateStreetName") || "";

  const neighbourhood =
    localStorage.getItem("scurbMateNeighbourhood") || "";

  const village =
    localStorage.getItem("scurbMateVillage") || "";

  const city =
    localStorage.getItem("scurbMateCity") || "";

  const district =
    localStorage.getItem("scurbMateDistrict") || "";

  const state =
    localStorage.getItem("scurbMateState") || "";

  const postalCode =
    localStorage.getItem("scurbMatePostcode") ||
    localStorage.getItem("scurbMatePostalCode") ||
    "";

  const serviceAddress =
    localStorage.getItem("scurbMateFullAddress") ||
    [
      streetName,
      neighbourhood,
      village,
      city,
      district,
      state,
      postalCode
    ]
      .filter(Boolean)
      .join(", ") ||
    "Your selected address";

  return {
    serviceAddress,
    streetName,
    neighbourhood,
    village,
    city,
    district,
    state,
    postalCode,
    latitude:coordinates?.latitude ?? null,
    longitude:coordinates?.longitude ?? null
  };
}


/* =========================================
   CREATE COMPLETE BOOKING SNAPSHOT
========================================= */

function getScrubMateBookingSnapshot(){

  const activeItems =
    scurbServiceCart.filter(function(item){
      return Number(item.quantity || 0) > 0;
    });

  const originalServiceTotal =
    activeItems.reduce(function(total, item){
      return total +
        Number(item.originalPrice || item.price || 0) *
        Number(item.quantity || 0);
    }, 0);

  const serviceTotal =
    activeItems.reduce(function(total, item){
      return total +
        Number(item.price || 0) *
        Number(item.quantity || 0);
    }, 0);

  const serviceDiscount =
    Math.max(
      0,
      originalServiceTotal - serviceTotal
    );

  const deliveryDetails =
    getScurbDeliveryDetails();

  const deliveryFee =
    Number(deliveryDetails.fee || 0);

  const couponDiscount =
    getScurbCouponDiscount(serviceTotal);

  const subtotal =
    serviceTotal + deliveryFee;

  const finalAmount =
    Math.max(
      0,
      subtotal - couponDiscount
    );

  const services =
    activeItems.map(function(item){

      const quantity =
        Number(item.quantity || 0);

      const unitPrice =
        Number(item.price || 0);

      const originalUnitPrice =
        Number(
          item.originalPrice ||
          item.price ||
          0
        );

      return {
        name:item.name,
        quantity,
        quantity_label:
          getScurbCartQuantityLabel(
            item.name,
            quantity
          ),
        unit_price:unitPrice,
        original_unit_price:originalUnitPrice,
        line_total:unitPrice * quantity,
        original_line_total:
          originalUnitPrice * quantity,
        discount:
          Math.max(
            0,
            (originalUnitPrice - unitPrice) *
            quantity
          )
      };
    });

  return {
    services,
    totalServiceTypes:activeItems.length,
    totalQuantity:
      activeItems.reduce(function(total, item){
        return total + Number(item.quantity || 0);
      }, 0),
    originalServiceTotal,
    serviceTotal,
    serviceDiscount,
    deliveryDetails,
    deliveryFee,
    couponDiscount,
    subtotal,
    finalAmount
  };
}


/* =========================================
   PLATFORM NAME
========================================= */

function getScrubMatePlatform(){

  const userAgent =
    navigator.userAgent || "";

  if(/iphone|ipad|ipod/i.test(userAgent)){
    return "ios";
  }

  if(/android/i.test(userAgent)){
    return "android";
  }

  return "web";
}


/* =========================================
   BUILD DATABASE ROW
========================================= */

function buildScrubMateOrderRow(
  paymentMethod,
  paymentStatus,
  razorpayDetails = {}
)
{


  const user =
    getScrubMateBookingUser();

  const location =
    getScrubMateBookingLocation();

  const bill =
    getScrubMateBookingSnapshot();

  const couponApplied =
    scurbAppliedCoupon &&
    bill.couponDiscount > 0;
const deviceToken =
  localStorage.getItem(
    "scrubMateDeviceToken"
  ) || null;

const devicePlatform =
  localStorage.getItem(
    "scrubMateDeviceTokenPlatform"
  ) || getScrubMatePlatform();

const deviceTokenType =
  localStorage.getItem(
    "scrubMateDeviceTokenType"
  ) || null;
  return {
    customer_name:user.name,
    customer_mobile:user.mobile,
    customer_email:user.email || null,
    customer_type:
      localStorage.getItem("scrubMateGuestMode") === "true"
        ? "guest"
        : "registered",

    service_address:location.serviceAddress,
    street_name:location.streetName || null,
    neighbourhood:location.neighbourhood || null,
    village:location.village || null,
    city:location.city || null,
    district:location.district || null,
    state:location.state || null,
    postal_code:location.postalCode || null,
    latitude:location.latitude,
    longitude:location.longitude,

    service_center_latitude:
      SCURB_SERVICE_CENTER_LAT,
    service_center_longitude:
      SCURB_SERVICE_CENTER_LON,
    distance_km:
      bill.deliveryDetails.distanceKm === null
        ? 0
        : Number(
            bill.deliveryDetails.distanceKm.toFixed(3)
          ),
    distance_text:
      bill.deliveryDetails.distanceText,
    delivery_fee:bill.deliveryFee,
    delivery_fee_rule:
      "First 1 km free, ₹5 per extra km, maximum ₹40",

    services:bill.services,
    total_service_types:bill.totalServiceTypes,
    total_quantity:bill.totalQuantity,

    original_service_total:
      bill.originalServiceTotal,
    service_total:bill.serviceTotal,
    service_discount:bill.serviceDiscount,

    coupon_code:
      couponApplied
        ? SCURB_COUPON_CODE
        : null,
    coupon_applied:couponApplied,
    coupon_discount:
      couponApplied
        ? bill.couponDiscount
        : 0,
    coupon_rule:
      couponApplied
        ? "₹50 off above ₹400; ₹60 off above ₹600"
        : null,
    coupon_applied_at:
      couponApplied
        ? new Date().toISOString()
        : null,

    subtotal:bill.subtotal,
    final_amount:bill.finalAmount,
    currency:"INR",

    payment_method:paymentMethod,
    payment_status:paymentStatus,
    payment_amount:bill.finalAmount,
    paid_at:
      paymentStatus === "paid"
        ? new Date().toISOString()
        : null,

    razorpay_order_id:
      razorpayDetails.razorpay_order_id || null,
    razorpay_payment_id:
      razorpayDetails.razorpay_payment_id || null,
    razorpay_signature:
      razorpayDetails.razorpay_signature || null,
    razorpay_payment_method:
      razorpayDetails.razorpay_payment_method || null,

    booking_status:"placed",
    booking_type:"instant",
device_token:deviceToken,
device_platform:devicePlatform,
device_token_type:deviceTokenType,

app_platform:getScrubMatePlatform(),
app_version:
  localStorage.getItem(
    "scrubMateAppVersion"
  ) || null,
    app_platform:getScrubMatePlatform(),
    app_version:
      localStorage.getItem("scrubMateAppVersion") || null,

    metadata:{
      source:"scrubmate_cart",
      booked_at:new Date().toISOString()
    }
  };
}


/* =========================================
   SAVE BOOKING TO SUPABASE
========================================= */

async function saveScrubMateBooking(
  paymentMethod,
  paymentStatus,
  razorpayDetails = {}
){

  if(scurbBookingSaving){
    return {
      success:false,
      message:"Booking is already being placed."
    };
  }

  const user =
    getScrubMateBookingUser();

  if(!user.mobile || user.mobile.length !== 10){
    return {
      success:false,
      message:"Please login with your mobile number first."
    };
  }

  const bill =
    getScrubMateBookingSnapshot();

  if(!bill.services.length){
    return {
      success:false,
      message:"Your cart is empty."
    };
  }

  try{

    scurbBookingSaving = true;

    const client =
      getScrubMateSupabaseClient();

    const orderRow =
      buildScrubMateOrderRow(
        paymentMethod,
        paymentStatus,
        razorpayDetails
      );

    const result =
      await client
        .from("scrubmate_orders")
        .insert(orderRow)
        .select("id, order_id")
        .single();

    if(result.error){
      throw result.error;
    }

    return {
      success:true,
      order:result.data
    };

  }catch(error){

    console.error(
      "Unable to save Scrub Mate booking:",
      error
    );

    return {
      success:false,
      message:
        error?.message ||
        "Unable to place booking. Please try again."
    };

  }finally{
    scurbBookingSaving = false;
  }
}


/* =========================================
   CLEAR CART AFTER SUCCESS
========================================= */

function clearScrubMateCartAfterBooking(){

  scurbServiceCart = [];

  localStorage.removeItem(
    "scurbMateServiceCart"
  );

  localStorage.removeItem(
    "scurbMateAppliedCoupon"
  );

  scurbAppliedCoupon = false;

  updateScurbServiceButtons();
  updateScurbFloatingCartBar();
  updateScurbPopupBookButtons();

  closeScurbCartPage();
}


/* =========================================
   BOOKING SUCCESS ALERT
========================================= */
/* =========================================
   CREATE BOOKING SUCCESS PAGE
========================================= */

function createScrubMateBookingSuccessPage(){

  if(
    document.getElementById(
      "scrubMateBookingSuccessPage"
    )
  ){
    return;
  }

  const style =
    document.createElement("style");

  style.id =
    "scrubMateBookingSuccessStyle";

  style.textContent = `
    .scrubMateBookingSuccessPage{
      position:fixed;
      inset:0;
      z-index:2000000;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:
        calc(24px + env(safe-area-inset-top))
        24px
        calc(40px + env(safe-area-inset-bottom));
      background:
        radial-gradient(
          circle at center,
          #f3ffff 0%,
          #ffffff 52%,
          #ffffff 100%
        );
      opacity:0;
      visibility:hidden;
      overflow:hidden;
      transition:
        opacity .28s ease,
        visibility .28s ease;
      font-family:"Manrope",Arial,sans-serif;
    }

    .scrubMateBookingSuccessPage.show{
      opacity:1;
      visibility:visible;
    }

    .scrubMateBookingSuccessContent{
      position:relative;
      width:100%;
      max-width:420px;
      text-align:center;
      opacity:0;
      transform:
        translateY(20px)
        scale(.94);
      transition:
        opacity .45s ease,
        transform .55s
        cubic-bezier(.22,.9,.32,1);
    }

    .scrubMateBookingSuccessPage.show
    .scrubMateBookingSuccessContent{
      opacity:1;
      transform:
        translateY(0)
        scale(1);
    }

    /* =========================================
       SUCCESS ANIMATION AREA
    ========================================= */

   .scrubMateSuccessAnimation{
  position:relative;
  width:210px;
  height:180px;
  margin:0 auto 2px;
  display:flex;
  align-items:center;
  justify-content:center;
}

    .scrubMateSuccessGlow{
      position:absolute;
      width:150px;
      height:150px;
      border-radius:50%;
      background:
        rgba(20,185,187,.16);
      transform:scale(.6);
      opacity:0;
    }

    .scrubMateBookingSuccessPage.show
    .scrubMateSuccessGlow{
      animation:
        scrubMateSuccessGlowPulse
        1.6s
        .1s
        ease-out both;
    }

    .scrubMateSuccessCircle{
      position:relative;
      z-index:4;
      width:118px;
      height:118px;
      display:flex;
      align-items:center;
      justify-content:center;
      border-radius:50%;
      background:
        linear-gradient(
          145deg,
          #20c9cb,
          #109fa1
        );
      box-shadow:
        0 18px 42px
        rgba(20,185,187,.30),
        inset 0 1px 0
        rgba(255,255,255,.35);
      opacity:0;
      transform:scale(.4);
    }

    .scrubMateBookingSuccessPage.show
    .scrubMateSuccessCircle{
      animation:
        scrubMateSuccessCirclePop
        .72s
        cubic-bezier(.22,.9,.32,1)
        forwards;
    }

    /* =========================================
       SMOOTH DRAWING TICK
    ========================================= */

    .scrubMateSuccessTickSvg{
      width:60px;
      height:60px;
      overflow:visible;
    }

    .scrubMateSuccessTickPath{
      fill:none;
      stroke:#ffffff;
      stroke-width:7;
      stroke-linecap:round;
      stroke-linejoin:round;
      stroke-dasharray:70;
      stroke-dashoffset:70;
    }

    .scrubMateBookingSuccessPage.show
    .scrubMateSuccessTickPath{
      animation:
        scrubMateDrawTick
        .7s
        .42s
        cubic-bezier(.4,0,.2,1)
        forwards;
    }

    /* =========================================
       STARS
    ========================================= */

    .scrubMateSuccessStar{
      position:absolute;
      z-index:3;
      display:flex;
      align-items:center;
      justify-content:center;
      color:#ffba2e;
      opacity:0;
      transform:scale(.2);
      filter:
        drop-shadow(
          0 4px 7px
          rgba(255,186,46,.30)
        );
    }

    .scrubMateSuccessStar svg{
      width:100%;
      height:100%;
      fill:currentColor;
    }

    .scrubMateSuccessStar.star1{
      width:25px;
      height:25px;
      top:15px;
      left:92px;
    }

    .scrubMateSuccessStar.star2{
      width:18px;
      height:18px;
      top:50px;
      right:17px;
    }

    .scrubMateSuccessStar.star3{
      width:27px;
      height:27px;
      bottom:43px;
      right:14px;
    }

    .scrubMateSuccessStar.star4{
      width:18px;
      height:18px;
      bottom:13px;
      left:94px;
    }

    .scrubMateSuccessStar.star5{
      width:23px;
      height:23px;
      bottom:43px;
      left:15px;
    }

    .scrubMateSuccessStar.star6{
      width:17px;
      height:17px;
      top:49px;
      left:18px;
    }

    .scrubMateBookingSuccessPage.show
    .scrubMateSuccessStar.star1{
      animation:
        scrubMateStarAppear
        .8s
        .20s
        ease-out both;
    }

    .scrubMateBookingSuccessPage.show
    .scrubMateSuccessStar.star2{
      animation:
        scrubMateStarAppear
        .8s
        .29s
        ease-out both;
    }

    .scrubMateBookingSuccessPage.show
    .scrubMateSuccessStar.star3{
      animation:
        scrubMateStarAppear
        .8s
        .38s
        ease-out both;
    }

    .scrubMateBookingSuccessPage.show
    .scrubMateSuccessStar.star4{
      animation:
        scrubMateStarAppear
        .8s
        .47s
        ease-out both;
    }

    .scrubMateBookingSuccessPage.show
    .scrubMateSuccessStar.star5{
      animation:
        scrubMateStarAppear
        .8s
        .56s
        ease-out both;
    }

    .scrubMateBookingSuccessPage.show
    .scrubMateSuccessStar.star6{
      animation:
        scrubMateStarAppear
        .8s
        .65s
        ease-out both;
    }

    /* =========================================
       TEXT
    ========================================= */

    .scrubMateBookingSuccessTitle{
  margin:0;
  font-size:32px;
  line-height:1.2;
  font-weight:900;
  letter-spacing:-.7px;
  color:#20242d;
  opacity:0;
  transform:translateY(14px);
}

    .scrubMateBookingSuccessPage.show
    .scrubMateBookingSuccessTitle{
      animation:
        scrubMateSuccessTextUp
        .55s
        .72s
        ease-out forwards;
    }

    .scrubMateBookingSuccessId{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      min-height:45px;
      margin-top:18px;
      padding:10px 18px;
      border:1px solid
        rgba(20,185,187,.18);
      border-radius:14px;
      background:
        rgba(20,185,187,.08);
      color:#109b9d;
      font-size:14px;
      line-height:1.4;
      font-weight:800;
      letter-spacing:.1px;
      opacity:0;
      transform:translateY(12px);
    }

    .scrubMateBookingSuccessId[hidden]{
      display:none;
    }

    .scrubMateBookingSuccessPage.show
    .scrubMateBookingSuccessId{
      animation:
        scrubMateSuccessTextUp
        .55s
        .88s
        ease-out forwards;
    }

    /* =========================================
       FULL BOTTOM 5-SECOND TIMER
    ========================================= */

    .scrubMateBookingSuccessTimer{
      position:absolute;
      left:0;
      right:0;
      bottom:0;
      width:100%;
      height:6px;
      overflow:hidden;
      background:#e7e9ec;
    }

    .scrubMateBookingSuccessTimerFill{
      width:100%;
      height:100%;
      background:
        linear-gradient(
          90deg,
          #14b9bb,
          #0d9496
        );
      transform-origin:left center;
      transform:scaleX(1);
    }

    .scrubMateBookingSuccessPage.show
    .scrubMateBookingSuccessTimerFill{
      animation:
        scrubMateSuccessTimerCountdown
        5s
        linear forwards;
    }

    /* =========================================
       ANIMATIONS
    ========================================= */

    @keyframes scrubMateSuccessCirclePop{

      0%{
        opacity:0;
        transform:scale(.35);
      }

      65%{
        opacity:1;
        transform:scale(1.12);
      }

      82%{
        transform:scale(.96);
      }

      100%{
        opacity:1;
        transform:scale(1);
      }

    }

    @keyframes scrubMateDrawTick{

      0%{
        stroke-dashoffset:70;
      }

      100%{
        stroke-dashoffset:0;
      }

    }

    @keyframes scrubMateSuccessGlowPulse{

      0%{
        opacity:0;
        transform:scale(.5);
      }

      45%{
        opacity:1;
      }

      100%{
        opacity:0;
        transform:scale(1.45);
      }

    }

    @keyframes scrubMateStarAppear{

      0%{
        opacity:0;
        transform:
          scale(.15)
          rotate(-40deg);
      }

      55%{
        opacity:1;
        transform:
          scale(1.35)
          rotate(20deg);
      }

      78%{
        transform:
          scale(.9)
          rotate(-8deg);
      }

      100%{
        opacity:1;
        transform:
          scale(1)
          rotate(0deg);
      }

    }

    @keyframes scrubMateSuccessTextUp{

      0%{
        opacity:0;
        transform:translateY(14px);
      }

      100%{
        opacity:1;
        transform:translateY(0);
      }

    }

    @keyframes scrubMateSuccessTimerCountdown{

      from{
        transform:scaleX(1);
      }

      to{
        transform:scaleX(0);
      }

    }
  `;

  document.head.appendChild(style);

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <section
        class="scrubMateBookingSuccessPage"
        id="scrubMateBookingSuccessPage"
        aria-hidden="true"
      >

        <div class="scrubMateBookingSuccessContent">

          <div class="scrubMateSuccessAnimation">

            <div class="scrubMateSuccessGlow"></div>

            <span class="scrubMateSuccessStar star1">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.5l2.75 5.57 6.15.89-4.45 4.34 1.05 6.13L12 16.54l-5.5 2.89 1.05-6.13L3.1 8.96l6.15-.89L12 2.5z"/>
              </svg>
            </span>

            <span class="scrubMateSuccessStar star2">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.5l2.75 5.57 6.15.89-4.45 4.34 1.05 6.13L12 16.54l-5.5 2.89 1.05-6.13L3.1 8.96l6.15-.89L12 2.5z"/>
              </svg>
            </span>

            <span class="scrubMateSuccessStar star3">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.5l2.75 5.57 6.15.89-4.45 4.34 1.05 6.13L12 16.54l-5.5 2.89 1.05-6.13L3.1 8.96l6.15-.89L12 2.5z"/>
              </svg>
            </span>

            <span class="scrubMateSuccessStar star4">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.5l2.75 5.57 6.15.89-4.45 4.34 1.05 6.13L12 16.54l-5.5 2.89 1.05-6.13L3.1 8.96l6.15-.89L12 2.5z"/>
              </svg>
            </span>

            <span class="scrubMateSuccessStar star5">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.5l2.75 5.57 6.15.89-4.45 4.34 1.05 6.13L12 16.54l-5.5 2.89 1.05-6.13L3.1 8.96l6.15-.89L12 2.5z"/>
              </svg>
            </span>

            <span class="scrubMateSuccessStar star6">
              <svg viewBox="0 0 24 24">
                <path d="M12 2.5l2.75 5.57 6.15.89-4.45 4.34 1.05 6.13L12 16.54l-5.5 2.89 1.05-6.13L3.1 8.96l6.15-.89L12 2.5z"/>
              </svg>
            </span>

            <div class="scrubMateSuccessCircle">

              <svg
                class="scrubMateSuccessTickSvg"
                viewBox="0 0 64 64"
                aria-hidden="true"
              >
                <path
                  class="scrubMateSuccessTickPath"
                  d="M15 33 L27 45 L50 20"
                />
              </svg>

            </div>

          </div>

          <h2 class="scrubMateBookingSuccessTitle">
            Booking Received!
          </h2>

          <div
            class="scrubMateBookingSuccessId"
            id="scrubMateBookingSuccessId"
            hidden
          ></div>

        </div>

        <div class="scrubMateBookingSuccessTimer">
          <div
            class="scrubMateBookingSuccessTimerFill"
          ></div>
        </div>

      </section>
    `
  );
}


/* =========================================
   SHOW BOOKING SUCCESS
========================================= */

function showScrubMateBookingSuccess(order){

  createScrubMateBookingSuccessPage();

  const successPage =
    document.getElementById(
      "scrubMateBookingSuccessPage"
    );

  const successId =
    document.getElementById(
      "scrubMateBookingSuccessId"
    );

  const bookingId =
    order?.order_id || "";

  if(bookingId){

    successId.hidden = false;

    successId.textContent =
      `Booking ID: ${bookingId}`;

  }else{

    successId.hidden = true;
    successId.textContent = "";

  }

  clearTimeout(
    window.scrubMateSuccessTimer
  );

  successPage.classList.remove("show");

  /*
    Restart the circle, tick, stars and
    bottom timer animations every time.
  */

  void successPage.offsetWidth;

  successPage.classList.add("show");

  successPage.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.style.overflow =
    "hidden";

  window.scrubMateSuccessTimer =
    setTimeout(function(){

      successPage.classList.remove(
        "show"
      );

      successPage.setAttribute(
        "aria-hidden",
        "true"
      );

      document.body.style.overflow = "";

    }, 5000);
}


/* =========================================
   CASH / UPI CONFIRMATION SHEET
========================================= */

function createScrubMateBookingSheet(){

  if(
    document.getElementById(
      "scrubMateBookingConfirmOverlay"
    )
  ){
    return;
  }

  const style =
    document.createElement("style");

  style.id =
    "scrubMateBookingConfirmStyle";

  style.textContent = `
    .scrubMateBookingConfirmOverlay{
      position:fixed;
      inset:0;
      z-index:1000000;
      display:flex;
      align-items:flex-end;
      background:rgba(15,23,42,.46);
      opacity:0;
      visibility:hidden;
      transition:
        opacity .22s ease,
        visibility .22s ease;
      font-family:"Manrope",Arial,sans-serif;
    }

    .scrubMateBookingConfirmOverlay.show{
      opacity:1;
      visibility:visible;
    }

    .scrubMateBookingConfirmSheet{
      width:100%;
      max-height:90dvh;
      padding:
        12px
        22px
        calc(22px + env(safe-area-inset-bottom));
      background:#ffffff;
      border-radius:28px 28px 0 0;
      box-shadow:
        0 -18px 55px rgba(15,23,42,.18);
      transform:translateY(105%);
      transition:
        transform .32s
        cubic-bezier(.22,.9,.32,1);
      overflow-y:auto;
      overscroll-behavior:contain;
    }

    .scrubMateBookingConfirmOverlay.show
    .scrubMateBookingConfirmSheet{
      transform:translateY(0);
    }

    .scrubMateBookingHandle{
      width:44px;
      height:5px;
      margin:0 auto 20px;
      border-radius:50px;
      background:#d7dce3;
    }

    .scrubMateBookingTitle{
      margin:0;
      font-size:21px;
      line-height:1.25;
      font-weight:800;
      letter-spacing:-.25px;
      color:#1f2937;
    }

    .scrubMateBookingSubtitle{
      margin:7px 0 18px;
      max-width:360px;
      font-size:13px;
      line-height:1.55;
      font-weight:500;
      color:#7a8392;
    }

    .scrubMateBookingDetails{
      overflow:hidden;
      border:1px solid #edf0f3;
      border-radius:18px;
      background:#ffffff;
    }

    .scrubMateBookingInfoRow{
      display:flex;
      align-items:center;
      gap:14px;
      min-height:82px;
      padding:14px 15px;
    }

    .scrubMateBookingInfoIcon{
      flex:0 0 50px;
      width:50px;
      height:50px;
      display:grid;
      place-items:center;
      border-radius:15px;
      background:#effafa;
      color:#14a9ab;
      font-size:19px;
    }

    .scrubMateBookingInfoText{
      min-width:0;
      flex:1;
    }

    .scrubMateBookingAmount{
      display:block;
      margin-bottom:3px;
      font-size:21px;
      line-height:1.2;
      font-weight:850;
      color:#20242d;
    }

    .scrubMateBookingInfoLabel{
      display:block;
      font-size:12px;
      line-height:1.4;
      font-weight:600;
      color:#8a929f;
    }

    .scrubMateBookingAddressTitle{
      margin:0 0 4px;
      font-size:14px;
      line-height:1.35;
      font-weight:800;
      color:#20242d;
    }

    .scrubMateBookingAddress{
      display:-webkit-box;
      margin:0;
      overflow:hidden;
      -webkit-box-orient:vertical;
      -webkit-line-clamp:2;
      font-size:12.5px;
      line-height:1.45;
      font-weight:500;
      color:#7c8491;
    }

    .scrubMateBookingDivider{
      height:1px;
      margin:0 15px;
      background:#edf0f3;
    }

    .scrubMatePlaceBookingButton{
      position:relative;
      width:100%;
      height:56px;
      margin-top:20px;
      padding:0 20px;
      overflow:hidden;
      border:0;
      border-radius:16px;
      background:#14b9bb;
      color:#ffffff;
      font-family:inherit;
      cursor:pointer;
      box-shadow:
        0 12px 26px rgba(20,185,187,.23);
      transform:translateZ(0);
      -webkit-tap-highlight-color:transparent;
    }

    .scrubMatePlaceBookingButton::before{
      content:"";
      position:absolute;
      inset:0 auto 0 0;
      width:0;
      background:#0d9fa1;
      z-index:1;
    }

    .scrubMatePlaceBookingButton.counting::before{
      animation:
        scrubMateBookingFill
        5s
        linear
        forwards;
    }

    .scrubMatePlaceBookingButton span{
      position:relative;
      z-index:2;
      font-size:19px;
      line-height:1;
      font-weight:850;
      letter-spacing:.1px;
    }

    .scrubMatePlaceBookingButton:active{
      transform:scale(.985);
    }

    .scrubMatePlaceBookingButton:disabled{
      cursor:default;
    }

    .scrubMateCancelBookingButton{
      width:100%;
      margin-top:10px;
      padding:13px 10px;
      border:0;
      background:transparent;
      color:#14a5a7;
      font-family:inherit;
      font-size:14px;
      line-height:1.2;
      font-weight:750;
      cursor:pointer;
      -webkit-tap-highlight-color:transparent;
    }

    .scrubMateCancelBookingButton:active{
      opacity:.65;
    }

    @keyframes scrubMateBookingFill{
      from{
        width:0;
      }

      to{
        width:100%;
      }
    }
  `;

  document.head.appendChild(style);

  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <section
        class="scrubMateBookingConfirmOverlay"
        id="scrubMateBookingConfirmOverlay"
        aria-hidden="true"
      >
        <div class="scrubMateBookingConfirmSheet">

          <div class="scrubMateBookingHandle"></div>

          <h2 class="scrubMateBookingTitle">
            Confirm Booking
          </h2>

          <p class="scrubMateBookingSubtitle">
            Pay using Cash or UPI after the service is completed.
          </p>

          <div class="scrubMateBookingDetails">

            <div class="scrubMateBookingInfoRow">

              <div class="scrubMateBookingInfoIcon">
                <i class="fa-solid fa-indian-rupee-sign"></i>
              </div>

              <div class="scrubMateBookingInfoText">

                <strong
                  class="scrubMateBookingAmount"
                  id="scrubMateBookingConfirmTotal"
                >
                  ₹0
                </strong>

                <span class="scrubMateBookingInfoLabel">
                  Amount to Pay
                </span>

              </div>

            </div>

            <div class="scrubMateBookingDivider"></div>

            <div class="scrubMateBookingInfoRow">

              <div class="scrubMateBookingInfoIcon">
                <i class="fa-solid fa-house"></i>
              </div>

              <div class="scrubMateBookingInfoText">

                <h3 class="scrubMateBookingAddressTitle">
                  Service Address
                </h3>

                <p
                  class="scrubMateBookingAddress"
                  id="scrubMateBookingConfirmAddress"
                ></p>

              </div>

            </div>

          </div>

          <button
            type="button"
            class="scrubMatePlaceBookingButton"
            id="scrubMatePlaceBookingButton"
          >
            <span>Book Now</span>
          </button>

          <button
            type="button"
            class="scrubMateCancelBookingButton"
            id="scrubMateCancelBookingButton"
          >
            Cancel
          </button>

        </div>
      </section>
    `
  );

  document
    .getElementById(
      "scrubMateCancelBookingButton"
    )
    ?.addEventListener(
      "click",
      closeScrubMateBookingSheet
    );

  document
    .getElementById(
      "scrubMateBookingConfirmOverlay"
    )
    ?.addEventListener(
      "click",
      function(event){

        if(event.target === this){
          closeScrubMateBookingSheet();
        }

      }
    );
}
/* =========================================
   OPEN CASH / UPI SHEET
========================================= */
/* =========================================
   CONTINUE BOOKING AFTER LOGIN
========================================= */

function continueScrubMateBookingAfterLogin(){

  const shouldContinueBooking =
    localStorage.getItem(
      "scrubMateContinueBookingAfterLogin"
    ) === "true";

  if(!shouldContinueBooking){
    return false;
  }

  localStorage.removeItem(
    "scrubMateContinueBookingAfterLogin"
  );

  localStorage.removeItem(
    "scrubMateGuestMode"
  );

  document
    .getElementById("loginPage")
    ?.style.setProperty(
      "display",
      "none"
    );

  document
    .getElementById("scrubDetailsPage")
    ?.classList.remove("show");

  updateScurbHomeLocation();
  openScurbHomePage();

  /*
    Reopen cart and booking sheet
    after login is completed.
  */

  requestAnimationFrame(function(){

    requestAnimationFrame(function(){

      if(typeof openScurbCartPage === "function"){
        openScurbCartPage();
      }

      setTimeout(function(){

        openScrubMateBookingSheet();

      }, 150);

    });

  });

  return true;
}
/* =========================================
   OPEN CASH / UPI SHEET
========================================= */

function openScrubMateBookingSheet(){

  const user =
    getScrubMateBookingUser();

  /*
    USER IS NOT LOGGED IN
    SAVE BOOKING RETURN FLAG
    THEN OPEN LOGIN PAGE
  */

  if(
    !user.mobile ||
    user.mobile.length !== 10
  ){

    localStorage.setItem(
      "scrubMateContinueBookingAfterLogin",
      "true"
    );

    clearTimeout(scurbBookingTimer);
    scurbBookingTimer = null;

    closeScrubMateBookingSheet();

    if(typeof closeScurbCartPage === "function"){
      closeScurbCartPage();
    }

    document
      .getElementById("scurbHomePage")
      ?.classList.remove("show");

    document
      .getElementById("scrubDetailsPage")
      ?.classList.remove("show");

    const loginPage =
      document.getElementById(
        "loginPage"
      );

    if(loginPage){

      loginPage.style.display =
        "grid";

    }

    document.body.style.overflow =
      "hidden";

    setTimeout(function(){

      document
        .getElementById("mobileInput")
        ?.focus();

    }, 250);

    return;
  }

  const bill =
    getScrubMateBookingSnapshot();

  if(!bill.services.length){
    return;
  }

  const location =
    getScrubMateBookingLocation();

  createScrubMateBookingSheet();

  const overlay =
    document.getElementById(
      "scrubMateBookingConfirmOverlay"
    );

  const button =
    document.getElementById(
      "scrubMatePlaceBookingButton"
    );

  const totalElement =
    document.getElementById(
      "scrubMateBookingConfirmTotal"
    );

  const addressElement =
    document.getElementById(
      "scrubMateBookingConfirmAddress"
    );

  if(!overlay || !button){
    return;
  }

  if(totalElement){

    totalElement.textContent =
      `₹${bill.finalAmount}`;

  }

  if(addressElement){

    addressElement.textContent =
      location.serviceAddress;

  }

  clearTimeout(scurbBookingTimer);
  scurbBookingTimer = null;

  button.disabled = false;

  button.classList.remove(
    "counting"
  );

  const buttonText =
    button.querySelector("span");

  if(buttonText){

    buttonText.textContent =
      "Book Now";

  }

  button.onclick = function(){

    void placeScrubMateCashBooking();

  };

  requestAnimationFrame(function(){

    overlay.classList.add(
      "show"
    );

    overlay.setAttribute(
      "aria-hidden",
      "false"
    );

  });

  document.body.style.overflow =
    "hidden";

  /*
    Start the 5-second fill animation.
  */

  requestAnimationFrame(function(){

    button.classList.remove(
      "counting"
    );

    void button.offsetWidth;

    button.classList.add(
      "counting"
    );

  });

  /*
    Automatically book after 5 seconds
    if the user does not click Book Now.
  */

  scurbBookingTimer =
    setTimeout(function(){

      if(
        overlay.classList.contains(
          "show"
        )
      ){

        void placeScrubMateCashBooking();

      }

    }, 5000);
}

/* =========================================
   CLOSE CASH / UPI SHEET
========================================= */
/* =========================================
   CLOSE CASH / UPI SHEET
========================================= */

function closeScrubMateBookingSheet(){

  clearTimeout(scurbBookingTimer);
  scurbBookingTimer = null;

  const overlay =
    document.getElementById(
      "scrubMateBookingConfirmOverlay"
    );

  const button =
    document.getElementById(
      "scrubMatePlaceBookingButton"
    );

  overlay?.classList.remove(
    "show"
  );

  overlay?.setAttribute(
    "aria-hidden",
    "true"
  );

  if(button){

    button.disabled = false;

    button.classList.remove(
      "counting"
    );

    const buttonText =
      button.querySelector("span");

    if(buttonText){

      buttonText.textContent =
        "Book Now";

    }

  }

  document.body.style.overflow =
    scurbCartPage?.classList.contains(
      "show"
    )
      ? "hidden"
      : "";
}

/* =========================================
   PLACE CASH / UPI BOOKING
========================================= */
/* =========================================
   PLACE CASH / UPI BOOKING
   CLICK INSTANT + AUTO AFTER 5 SECONDS
========================================= */

async function placeScrubMateCashBooking(){

  if(scurbBookingSaving){
    return;
  }

  clearTimeout(scurbBookingTimer);
  scurbBookingTimer = null;

  const button =
    document.getElementById(
      "scrubMatePlaceBookingButton"
    );

  if(button){
    button.disabled = true;
    button.classList.remove("counting");
    button.querySelector("span").textContent =
      "Book Now";
  }

  /*
    Show success screen immediately.
    Booking ID will be added after Supabase responds.
  */

  closeScrubMateBookingSheet();

  showScrubMateBookingSuccess({});

  const result =
    await saveScrubMateBooking(
      "cash_or_upi_on_service",
      "pending"
    );

  if(!result.success){

    /*
      Hide instant success screen because
      saving the booking failed.
    */

    const successPage =
      document.getElementById(
        "scrubMateBookingSuccessPage"
      );

    successPage?.classList.remove("show");

    successPage?.setAttribute(
      "aria-hidden",
      "true"
    );

    clearTimeout(
      window.scrubMateSuccessTimer
    );

    document.body.style.overflow = "";

    alert(result.message);

    if(button){
      button.disabled = false;
      button.querySelector("span").textContent =
        "Book Now";
    }

    return;
  }

  /*
    Add the real Booking ID to the success
    page when Supabase returns.
  */

  const successId =
    document.getElementById(
      "scrubMateBookingSuccessId"
    );

  const bookingId =
    result.order?.order_id || "";

  if(successId && bookingId){

    successId.hidden = false;

    successId.textContent =
      `Booking ID: ${bookingId}`;
clearTimeout(
  window.scrubMateSuccessTimer
);

window.scrubMateSuccessTimer =
  setTimeout(function(){

    const successPage =
      document.getElementById(
        "scrubMateBookingSuccessPage"
      );

    successPage?.classList.remove("show");

    successPage?.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.style.overflow = "";

  }, 5000);
  }

  clearScrubMateCartAfterBooking();
}



/* =========================================
   ONLINE PAYMENT CENTER LOADER
   IPHONE-STYLE 12 BAR SPINNER
========================================= */

function ensureScrubMatePaymentLoader(){

  if(
    document.getElementById(
      "scrubMatePaymentLoaderStyle"
    )
  ){
    return;
  }

  const style =
    document.createElement("style");

  style.id =
    "scrubMatePaymentLoaderStyle";

  style.textContent = `
    .scrubMatePaymentLoader{
      position:fixed;
      inset:0;
      z-index:2147483646;

      display:none;
      align-items:center;
      justify-content:center;

      background:rgba(255,255,255,.18);
      backdrop-filter:blur(2px);
      -webkit-backdrop-filter:blur(2px);
    }

    .scrubMatePaymentLoader.show{
      display:flex;
    }

    .scrubMateIOSSpinner{
      position:relative;

      width:38px;
      height:38px;
    }

    .scrubMateIOSSpinner span{
      position:absolute;

      left:17px;
      top:2px;

      width:4px;
      height:10px;

      border-radius:5px;

      background:#30343a;

      transform-origin:2px 17px;

      animation:
        scrubMateIOSSpinnerFade
        1.2s
        linear
        infinite;
    }

    .scrubMateIOSSpinner span:nth-child(1){
      transform:rotate(0deg);
      animation-delay:-1.1s;
    }

    .scrubMateIOSSpinner span:nth-child(2){
      transform:rotate(30deg);
      animation-delay:-1s;
    }

    .scrubMateIOSSpinner span:nth-child(3){
      transform:rotate(60deg);
      animation-delay:-.9s;
    }

    .scrubMateIOSSpinner span:nth-child(4){
      transform:rotate(90deg);
      animation-delay:-.8s;
    }

    .scrubMateIOSSpinner span:nth-child(5){
      transform:rotate(120deg);
      animation-delay:-.7s;
    }

    .scrubMateIOSSpinner span:nth-child(6){
      transform:rotate(150deg);
      animation-delay:-.6s;
    }

    .scrubMateIOSSpinner span:nth-child(7){
      transform:rotate(180deg);
      animation-delay:-.5s;
    }

    .scrubMateIOSSpinner span:nth-child(8){
      transform:rotate(210deg);
      animation-delay:-.4s;
    }

    .scrubMateIOSSpinner span:nth-child(9){
      transform:rotate(240deg);
      animation-delay:-.3s;
    }

    .scrubMateIOSSpinner span:nth-child(10){
      transform:rotate(270deg);
      animation-delay:-.2s;
    }

    .scrubMateIOSSpinner span:nth-child(11){
      transform:rotate(300deg);
      animation-delay:-.1s;
    }

    .scrubMateIOSSpinner span:nth-child(12){
      transform:rotate(330deg);
      animation-delay:0s;
    }

    @keyframes scrubMateIOSSpinnerFade{
      0%{
        opacity:1;
      }

      100%{
        opacity:.12;
      }
    }

`;

  document.head.appendChild(style);


  const loader =
    document.createElement("div");

  loader.id =
    "scrubMatePaymentLoader";

  loader.className =
    "scrubMatePaymentLoader";

  loader.setAttribute(
    "aria-hidden",
    "true"
  );

  loader.innerHTML = `
    <div
      class="scrubMateIOSSpinner"
      role="status"
      aria-label="Loading"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  `;

  document.body.appendChild(loader);
}


function showScrubMatePaymentLoader(){

  ensureScrubMatePaymentLoader();

  const loader =
    document.getElementById(
      "scrubMatePaymentLoader"
    );

  loader?.classList.add("show");

  loader?.setAttribute(
    "aria-hidden",
    "false"
  );
}


function hideScrubMatePaymentLoader(){

  const loader =
    document.getElementById(
      "scrubMatePaymentLoader"
    );

  loader?.classList.remove("show");

  loader?.setAttribute(
    "aria-hidden",
    "true"
  );
}


function restoreScrubMatePaymentPage(){

  hideScrubMatePaymentLoader();

  scurbBookingSaving = false;

  if(scurbCartPayOnlineButton){

    scurbCartPayOnlineButton.disabled =
      false;

  }

  /*
     Keep cart scrolling locked only while
     the cart page is still open.
  */

  document.body.style.overflow =
    scurbCartPage?.classList.contains("show")
      ? "hidden"
      : "";
}


/*
   Razorpay can return control through browser
   back, app resume, tab restore or modal close.
   Always remove the loader and restore clicks.
*/

window.addEventListener(
  "pageshow",
  restoreScrubMatePaymentPage
);

window.addEventListener(
  "focus",
  function(){

    setTimeout(
      restoreScrubMatePaymentPage,
      150
    );

  }
);

document.addEventListener(
  "visibilitychange",
  function(){

    if(!document.hidden){

      setTimeout(
        restoreScrubMatePaymentPage,
        150
      );

    }

  }
);



/* =========================================
   LOAD RAZORPAY CHECKOUT
========================================= */

function loadScrubMateRazorpay(){

  return new Promise(function(resolve, reject){

    if(window.Razorpay){
      resolve();
      return;
    }

    const existingScript =
      document.querySelector(
        'script[src="https://checkout.razorpay.com/v1/checkout.js"]'
      );

    if(existingScript){
      existingScript.addEventListener("load", resolve, {once:true});
      existingScript.addEventListener("error", reject, {once:true});
      return;
    }

    const script =
      document.createElement("script");

    script.src =
      "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = resolve;
    script.onerror = reject;

    document.head.appendChild(script);
  });
}


/* =========================================
   PAY ONLINE WITH RAZORPAY
========================================= */

async function openScrubMateOnlinePayment(){

  if(scurbBookingSaving){
    return;
  }

  const user =
    getScrubMateBookingUser();

  if(!user.mobile || user.mobile.length !== 10){

    alert(
      "Please login before making payment."
    );

    return;
  }

  const bill =
    getScrubMateBookingSnapshot();

  if(
    !bill.services.length ||
    bill.finalAmount <= 0
  ){

    alert("Invalid booking amount.");

    return;
  }

  scurbBookingSaving = true;

  if(scurbCartPayOnlineButton){

    scurbCartPayOnlineButton.disabled =
      true;

  }

  showScrubMatePaymentLoader();

  try{

    await loadScrubMateRazorpay();

    const response = await fetch(
      "https://razropay.onrender.com/create-order",
      {
        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body:JSON.stringify({
          amount:
            Math.round(
              bill.finalAmount * 100
            )
        })
      }
    );

    const data =
      await response.json();

    if(
      !response.ok ||
      !data?.success ||
      !data?.order
    ){

      throw new Error(
        data?.message ||
        "Unable to create online payment."
      );
    }

    /*
       The Razorpay window is ready.
       Remove our loader before checkout opens.
    */

    hideScrubMatePaymentLoader();

    const options = {

      key:"rzp_live_SqrUSaPO5pA6gt",

      amount:data.order.amount,

      currency:
        data.order.currency || "INR",

      order_id:data.order.id,

      name:"Scrub Mate",

      description:
        "Cleaning service booking",

      prefill:{
        name:user.name,
        email:user.email || "",
        contact:user.mobile
      },

      theme:{
        color:"#14b9bb"
      },

      handler:async function(
        paymentResponse
      ){

        showScrubMatePaymentLoader();

        try{

          const result =
            await saveScrubMateBooking(
              "razorpay",
              "paid",
              paymentResponse
            );

          if(!result.success){

            alert(
              "Payment succeeded, but booking could not be saved. Please contact support with payment ID: " +
              (
                paymentResponse
                  .razorpay_payment_id ||
                ""
              )
            );

            return;
          }

          clearScrubMateCartAfterBooking();

          showScrubMateBookingSuccess(
            result.order
          );

        }finally{

          restoreScrubMatePaymentPage();

        }

      },

      modal:{

        ondismiss:function(){

          /*
             User pressed back or closed Razorpay.
             Do not leave an invisible layer or
             disabled button over the cart.
          */

          restoreScrubMatePaymentPage();

        },

        escape:true,

        backdropclose:false

      }

    };

    const checkout =
      new window.Razorpay(options);

    checkout.on(
      "payment.failed",
      function(response){

        restoreScrubMatePaymentPage();

        alert(
          response?.error?.description ||
          "Payment failed. Please try again."
        );

      }
    );

    checkout.open();

    /*
       Some WebViews return immediately from
       checkout.open(). Keep the page restored.
    */

    setTimeout(
      hideScrubMatePaymentLoader,
      100
    );

  }catch(error){

    console.error(
      "Scrub Mate online payment failed:",
      error
    );

    restoreScrubMatePaymentPage();

    alert(
      error?.message ||
      "Unable to open payment. Please try again."
    );

  }
}


/* =========================================
   PAYMENT BUTTON EVENTS
========================================= */

scurbCartCashButton?.addEventListener(
  "click",
  openScrubMateBookingSheet
);

scurbCartPayOnlineButton?.addEventListener(
  "click",
  function(){
    void openScrubMateOnlinePayment();
  }
);
