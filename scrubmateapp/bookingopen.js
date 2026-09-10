(function(){

  /* =========================================
     SCRUB MATE BOOKINGS
  ========================================= */

  const scurbUpcomingTab =
    document.getElementById("scurbUpcomingTab");

  const scurbPastTab =
    document.getElementById("scurbPastTab");

  const scurbBookingsIndicator =
    document.getElementById("scurbBookingsIndicator");

  const scurbBookingsList =
    document.getElementById("scurbBookingsList");

  const scurbBookingsEmpty =
    document.getElementById("scurbBookingsEmpty");

  const scurbBookingsEmptyText =
    document.getElementById("scurbBookingsEmptyText");

  const scurbBookingsEmptyIcon =
    document.getElementById("scurbBookingsEmptyIcon");

  const scurbBookingsLoading =
    document.getElementById("scurbBookingsLoading");


  /*
    Keep all the remaining bookings code here.
    Do not close this function until the very end.
  */


 // ADD THIS ONLY AT THE VERY END


let scurbAllBookings = [];

let scurbActiveBookingTab =
  "upcoming";

let scurbBookingsRequestId = 0;


/* =========================================
   GET LOGGED-IN MOBILE NUMBER
========================================= */

function getScurbLoggedInMobile(){

  const isLoggedIn =
    localStorage.getItem(
      "scrubMateLoggedIn"
    ) === "true";

  const isGuest =
    localStorage.getItem(
      "scrubMateGuestMode"
    ) === "true";


  if(!isLoggedIn || isGuest){
    return "";
  }


  let user = null;

  try{

    user =
      JSON.parse(
        localStorage.getItem(
          "scrubMateUser"
        ) || "null"
      );

  }catch(error){

    console.error(
      "Unable to read Scrub Mate user:",
      error
    );

  }


  return String(
    user?.mobile ||
    user?.phoneNumber ||
    localStorage.getItem(
      "scrubMateMobile"
    ) ||
    ""
  )
    .replace(/\D/g, "")
    .slice(-10);
}


/* =========================================
   NORMALIZE BOOKING STATUS
========================================= */

function normalizeScurbBookingStatus(status){

  return String(status || "placed")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
}


/* =========================================
   CHECK WHETHER BOOKING IS PAST
========================================= */

function isScurbPastBooking(booking){

  const status =
    normalizeScurbBookingStatus(
      booking?.booking_status
    );

  return [
    "completed",
    "delivered",
    "cancelled",
    "canceled",
    "rejected",
    "refunded"
  ].includes(status);
}


/* =========================================
   FORMAT BOOKING STATUS
========================================= */

function formatScurbBookingStatus(status){

  const normalized =
    normalizeScurbBookingStatus(status);

  const statusNames = {

    placed:"Placed",

    confirmed:"Confirmed",

    accepted:"Confirmed",

    assigned:"Partner Assigned",

    partner_assigned:"Partner Assigned",

    on_the_way:"On the Way",

    arrived:"Partner Arrived",

    in_progress:"In Progress",

    completed:"Completed",

    delivered:"Completed",

    cancelled:"Cancelled",

    canceled:"Cancelled",

    rejected:"Rejected",

    refunded:"Refunded"

  };


  return (
    statusNames[normalized] ||
    normalized
      .replace(/_/g, " ")
      .replace(/\b\w/g, function(letter){
        return letter.toUpperCase();
      })
  );
}


/* =========================================
   GET STATUS CLASS
========================================= */

function getScurbBookingStatusClass(status){

  const normalized =
    normalizeScurbBookingStatus(status);

  if(
    normalized === "completed" ||
    normalized === "delivered"
  ){
    return "completed";
  }

  if(
    normalized === "cancelled" ||
    normalized === "canceled" ||
    normalized === "rejected" ||
    normalized === "refunded"
  ){
    return "cancelled";
  }

  return "";
}


/* =========================================
   GET BOOKING DATE
========================================= */

function getScurbBookingDateValue(booking){

  return (
    booking?.created_at ||
    booking?.metadata?.booked_at ||
    null
  );
}


/* =========================================
   FORMAT BOOKING DATE
========================================= */

function formatScurbBookingDate(value){

  if(!value){
    return "Date unavailable";
  }

  const date =
    new Date(value);

  if(Number.isNaN(date.getTime())){
    return "Date unavailable";
  }

  return new Intl.DateTimeFormat(
    "en-IN",
    {
      day:"numeric",
      month:"short",
      year:"numeric",
      hour:"numeric",
      minute:"2-digit"
    }
  ).format(date);
}


/* =========================================
   GET BOOKING SERVICES
========================================= */

function getScurbBookingServices(booking){

  const services =
    booking?.services;

  if(Array.isArray(services)){
    return services;
  }

  if(typeof services === "string"){

    try{

      const parsedServices =
        JSON.parse(services);

      return Array.isArray(parsedServices)
        ? parsedServices
        : [];

    }catch(error){

      return [];

    }

  }

  return [];
}


/* =========================================
   CREATE BOOKING CARD
========================================= */

function createScurbBookingCard(booking){

  const card =
    document.createElement("article");

  card.className =
    "scurb-booking-card";

  card.dataset.bookingId =
    String(
      booking.id ||
      booking.order_id ||
      ""
    );
card.setAttribute(
  "role",
  "button"
);

card.setAttribute(
  "tabindex",
  "0"
);

card.addEventListener(
  "click",
  function(){

    openScurbBookingDetails(
      booking
    );

  }
);

card.addEventListener(
  "keydown",
  function(event){

    if(
      event.key === "Enter" ||
      event.key === " "
    ){

      event.preventDefault();

      openScurbBookingDetails(
        booking
      );

    }

  }
);

  const status =
    normalizeScurbBookingStatus(
      booking.booking_status
    );

  const formattedStatus =
    formatScurbBookingStatus(status);

  const statusClass =
    getScurbBookingStatusClass(status);

  const services =
    getScurbBookingServices(booking);

  const visibleServices =
    services.slice(0, 3);


  /* TOP */

  const top =
    document.createElement("div");

  top.className =
    "scurb-booking-card-top";


  const idWrap =
    document.createElement("div");

  idWrap.className =
    "scurb-booking-id-wrap";


  const idLabel =
    document.createElement("span");

  idLabel.className =
    "scurb-booking-label";

  idLabel.textContent =
    "Booking ID";


  const bookingId =
    document.createElement("strong");

  bookingId.className =
    "scurb-booking-id";

  bookingId.textContent =
    booking.order_id ||
    booking.id ||
    "Scrub Mate Booking";


  idWrap.append(
    idLabel,
    bookingId
  );


  const statusElement =
    document.createElement("span");

  statusElement.className =
    [
      "scurb-booking-status",
      statusClass
    ]
      .filter(Boolean)
      .join(" ");

  statusElement.textContent =
    formattedStatus;


  top.append(
    idWrap,
    statusElement
  );


  /* SERVICES */

  const servicesHolder =
    document.createElement("div");

  servicesHolder.className =
    "scurb-booking-services";


  if(visibleServices.length){

    visibleServices.forEach(function(service){

      const serviceRow =
        document.createElement("div");

      serviceRow.className =
        "scurb-booking-service";


      const serviceName =
        document.createElement("span");

      serviceName.className =
        "scurb-booking-service-name";

      serviceName.textContent =
        service?.name ||
        service?.service_name ||
        "Cleaning Service";


      const serviceQuantity =
        document.createElement("span");

      serviceQuantity.className =
        "scurb-booking-service-quantity";

      serviceQuantity.textContent =
        `× ${Number(
          service?.quantity || 1
        )}`;


      serviceRow.append(
        serviceName,
        serviceQuantity
      );

      servicesHolder.appendChild(
        serviceRow
      );

    });


    if(services.length > 3){

      const remaining =
        document.createElement("span");

      remaining.className =
        "scurb-booking-more-services";

      remaining.textContent =
        `+${services.length - 3} more services`;

      servicesHolder.appendChild(
        remaining
      );

    }

  }else{

    const fallback =
      document.createElement("span");

    fallback.className =
      "scurb-booking-service-name";

    fallback.textContent =
      "Cleaning service";

    servicesHolder.appendChild(
      fallback
    );

  }


  /* DIVIDER */

  const divider =
    document.createElement("div");

  divider.className =
    "scurb-booking-divider";


  /* BOTTOM */

  const bottom =
    document.createElement("div");

  bottom.className =
    "scurb-booking-bottom";


 const dateHolder =
  document.createElement("div");

dateHolder.className =
  "scurb-booking-date";


/* BOOKING DATE */

const dateText =
  document.createElement("span");

dateText.className =
  "scurb-booking-created-date";


const dateIcon =
  document.createElement("i");

dateIcon.className =
  "fa-regular fa-calendar";


dateText.appendChild(
  dateIcon
);

dateText.append(
  document.createTextNode(
    formatScurbBookingDate(
      getScurbBookingDateValue(
        booking
      )
    )
  )
);


/* CUSTOMER DETAILS */

const customerDetails =
  document.createElement("div");

customerDetails.className =
  "scurb-booking-customer-details";


/* CUSTOMER NAME */

const customerNameRow =
  document.createElement("div");

customerNameRow.className =
  "scurb-booking-customer-row";


const customerNameIcon =
  document.createElement("i");

customerNameIcon.className =
  "fa-regular fa-user";


const customerNameText =
  document.createElement("span");

customerNameText.textContent =
  booking.customer_name ||
  "Scrub Mate User";


customerNameRow.append(
  customerNameIcon,
  customerNameText
);


/* MOBILE NUMBER */

const mobileRow =
  document.createElement("div");

mobileRow.className =
  "scurb-booking-customer-row";


const mobileIcon =
  document.createElement("i");

mobileIcon.className =
  "fa-solid fa-phone";


const mobileText =
  document.createElement("span");

const bookingMobile =
  String(
    booking.customer_mobile || ""
  )
    .replace(/\D/g, "")
    .slice(-10);

mobileText.textContent =
  bookingMobile.length === 10
    ? `+91 ${bookingMobile}`
    : "Mobile unavailable";


mobileRow.append(
  mobileIcon,
  mobileText
);


/* SERVICE ADDRESS */

const addressRow =
  document.createElement("div");

addressRow.className =
  "scurb-booking-customer-row scurb-booking-address-row";


const addressIcon =
  document.createElement("i");

addressIcon.className =
  "fa-solid fa-location-dot";


const addressText =
  document.createElement("span");

const bookingAddress =
  booking.service_address ||
  [
    booking.street_name,
    booking.neighbourhood,
    booking.village,
    booking.city
  ]
    .filter(Boolean)
    .join(", ");

addressText.textContent =
  bookingAddress ||
  "Address unavailable";


addressRow.append(
  addressIcon,
  addressText
);


customerDetails.append(
  customerNameRow,
  mobileRow,
  addressRow
);


dateHolder.append(
  dateText,
  customerDetails
);

  


  bottom.appendChild(
  dateHolder
);


  card.append(
    top,
    servicesHolder,
    divider,
    bottom
  );


  return card;
}


/* =========================================
   SHOW BOOKINGS EMPTY STATE
========================================= */

function showScurbBookingsEmpty(){

  if(scurbBookingsList){
    scurbBookingsList.replaceChildren();
  }

  if(scurbBookingsEmpty){
    scurbBookingsEmpty.classList.remove(
      "hide"
    );
  }

  if(scurbBookingsEmptyText){

    scurbBookingsEmptyText.textContent =
      scurbActiveBookingTab === "upcoming"
        ? "No upcoming bookings"
        : "No past bookings";

  }

  if(scurbBookingsEmptyIcon){

    scurbBookingsEmptyIcon.className =
      scurbActiveBookingTab === "upcoming"
        ? "fa-regular fa-calendar-check"
        : "fa-solid fa-clock-rotate-left";

  }

}


/* =========================================
   RENDER BOOKINGS
========================================= */

function renderScurbBookings(){

  if(!scurbBookingsList){
    return;
  }


  const filteredBookings =
    scurbAllBookings.filter(
      function(booking){

        const past =
          isScurbPastBooking(booking);

        return scurbActiveBookingTab ===
          "past"
            ? past
            : !past;

      }
    );


  scurbBookingsList.replaceChildren();


  if(!filteredBookings.length){

    showScurbBookingsEmpty();

    return;
  }


  scurbBookingsEmpty?.classList.add(
    "hide"
  );


  const fragment =
    document.createDocumentFragment();


  filteredBookings.forEach(
    function(booking){

      fragment.appendChild(
        createScurbBookingCard(
          booking
        )
      );

    }
  );


  scurbBookingsList.appendChild(
    fragment
  );
}


/* =========================================
   SET BOOKINGS TAB
========================================= */

function setScurbBookingsTab(tab){

  scurbActiveBookingTab =
    tab === "past"
      ? "past"
      : "upcoming";


  scurbUpcomingTab?.classList.toggle(
    "active",
    scurbActiveBookingTab === "upcoming"
  );

  scurbPastTab?.classList.toggle(
    "active",
    scurbActiveBookingTab === "past"
  );


  /*
    Keep your existing indicator animation.
    This moves it to the second tab for Past.
  */

  if(scurbBookingsIndicator){

    scurbBookingsIndicator.style.transform =
      scurbActiveBookingTab === "past"
        ? "translateX(100%)"
        : "translateX(0)";

  }


  renderScurbBookings();
}


/* =========================================
   LOAD BOOKINGS FROM SUPABASE
========================================= */

async function loadScurbBookings(){

  const currentRequestId =
    ++scurbBookingsRequestId;

  const mobile =
    getScurbLoggedInMobile();


  scurbAllBookings = [];

  scurbBookingsList?.replaceChildren();

  scurbBookingsEmpty?.classList.add(
    "hide"
  );


  /*
    Guest or not logged in:
    do not call Supabase.
    Keep same empty UI.
  */

  if(mobile.length !== 10){

    scurbBookingsLoading.hidden =
      true;

    showScurbBookingsEmpty();

    return;
  }


  scurbBookingsLoading.hidden =
    false;


  try{

    const client =
      window.supabaseClient ||
      supabaseClient;


    const result =
      await client
        .from("scrubmate_orders")
.select(`
  id,
  order_id,

  customer_name,
  customer_mobile,
  customer_email,

  service_address,
  street_name,
  neighbourhood,
  village,
  city,

  latitude,
  longitude,

  cleaner_name,
  cleaner_mobile,
  cleaner_latitude,
  cleaner_longitude,
  estimated_arrival_minutes,

  services,
  total_quantity,

  original_service_total,
  service_total,
  service_discount,
  delivery_fee,
  coupon_discount,
  final_amount,

  payment_amount,
  payment_method,
  payment_status,

  booking_status,
  metadata,
  created_at
`)
        .eq(
          "customer_mobile",
          mobile
        )
        .order(
          "created_at",
          {
            ascending:false
          }
        );


    /*
      Prevent an older request from replacing
      the latest bookings request.
    */

    if(
      currentRequestId !==
      scurbBookingsRequestId
    ){
      return;
    }


    if(result.error){
      throw result.error;
    }


    scurbAllBookings =
      Array.isArray(result.data)
        ? result.data
        : [];


    renderScurbBookings();

  }catch(error){

    console.error(
      "Unable to load Scrub Mate bookings:",
      error
    );

    scurbAllBookings = [];

    showScurbBookingsEmpty();

  }finally{

    if(
      currentRequestId ===
      scurbBookingsRequestId &&
      scurbBookingsLoading
    ){

      scurbBookingsLoading.hidden =
        true;

    }

  }

}


/* =========================================
   BOOKINGS TAB CLICKS
========================================= */

scurbUpcomingTab?.addEventListener(
  "click",
  function(){

    setScurbBookingsTab(
      "upcoming"
    );

  }
);


scurbPastTab?.addEventListener(
  "click",
  function(){

    setScurbBookingsTab(
      "past"
    );

  }
);


/* =========================================
   LOAD WHEN BOOKINGS NAVIGATION OPENS
========================================= */

scurbBookingsNavButton?.addEventListener(
  "click",
  function(){

    setScurbBookingsTab(
      scurbActiveBookingTab
    );

    loadScurbBookings();

  }
);


/* =========================================
   INITIAL EMPTY UI
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  function(){

    setScurbBookingsTab(
      "upcoming"
    );

  }
);

/* =========================================
   ORDER TRACKING ELEMENTS
========================================= */

const scurbOrderTrackingPage =
  document.getElementById(
    "scurbOrderTrackingPage"
  );

const scurbOrderBackButton =
  document.getElementById(
    "scurbOrderBackButton"
  );


const scurbOrderStatusIcon =
  document.getElementById(
    "scurbOrderStatusIcon"
  );

const scurbOrderStatusTitle =
  document.getElementById(
    "scurbOrderStatusTitle"
  );

const scurbOrderStatusDescription =
  document.getElementById(
    "scurbOrderStatusDescription"
  );

const scurbOrderCleanerCard =
  document.getElementById(
    "scurbOrderCleanerCard"
  );

const scurbOrderCleanerName =
  document.getElementById(
    "scurbOrderCleanerName"
  );

const scurbOrderCleanerArrival =
  document.getElementById(
    "scurbOrderCleanerArrival"
  );
const scurbOrderReadyMessage =
  document.getElementById(
    "scurbOrderReadyMessage"
  );

const scurbOrderReadyIcon =
  document.getElementById(
    "scurbOrderReadyIcon"
  );

const scurbOrderReadyText =
  document.getElementById(
    "scurbOrderReadyText"
  );
const scurbOrderCleanerCall =
  document.getElementById(
    "scurbOrderCleanerCall"
  );

const scurbOrderStatusBadge =
  document.getElementById(
    "scurbOrderStatusBadge"
  );

const scurbOrderBookingId =
  document.getElementById(
    "scurbOrderBookingId"
  );

const scurbOrderBookingDate =
  document.getElementById(
    "scurbOrderBookingDate"
  );

const scurbOrderServicesList =
  document.getElementById(
    "scurbOrderServicesList"
  );

const scurbOrderCustomerName =
  document.getElementById(
    "scurbOrderCustomerName"
  );

const scurbOrderCustomerMobile =
  document.getElementById(
    "scurbOrderCustomerMobile"
  );

const scurbOrderCustomerAddress =
  document.getElementById(
    "scurbOrderCustomerAddress"
  );

const scurbOrderServiceTotal =
  document.getElementById(
    "scurbOrderServiceTotal"
  );

const scurbOrderServiceDiscount =
  document.getElementById(
    "scurbOrderServiceDiscount"
  );

const scurbOrderDeliveryFee =
  document.getElementById(
    "scurbOrderDeliveryFee"
  );

const scurbOrderCouponRow =
  document.getElementById(
    "scurbOrderCouponRow"
  );

const scurbOrderCouponDiscount =
  document.getElementById(
    "scurbOrderCouponDiscount"
  );

const scurbOrderFinalAmount =
  document.getElementById(
    "scurbOrderFinalAmount"
  );
const scurbOrderCancelArea =
  document.getElementById(
    "scurbOrderCancelArea"
  );

const scurbOrderCancelButton =
  document.getElementById(
    "scurbOrderCancelButton"
  );

const scurbCancelSheetOverlay =
  document.getElementById(
    "scurbCancelSheetOverlay"
  );

const scurbCancelSheet =
  document.getElementById(
    "scurbCancelSheet"
  );

const scurbCancelSheetClose =
  document.getElementById(
    "scurbCancelSheetClose"
  );

const scurbCancelSheetNo =
  document.getElementById(
    "scurbCancelSheetNo"
  );

const scurbCancelSheetYes =
  document.getElementById(
    "scurbCancelSheetYes"
  );


let scurbCurrentTrackingBooking = null;

let scurbCancellingBooking = false;

let scurbTrackingMap = null;

let scurbTrackingCustomerMarker = null;

let scurbTrackingCleanerMarker = null;

let scurbTrackingRouteLine = null;

let scurbTrackingRouteRequestId = 0;

let scurbBookingsRealtimeChannel = null;

let scurbRealtimeRefreshTimer = null;


/* =========================================
   CLEANER DETAILS
========================================= */

function getScurbTrackingCleanerName(
  booking
){

  return (
    booking.cleaner_name ||
    booking.service_partner_name ||
    booking.assigned_partner_name ||
    booking.delivery_boy_name ||
    ""
  );
}


function getScurbTrackingCleanerMobile(
  booking
){

  return String(
    booking.cleaner_mobile ||
    booking.service_partner_mobile ||
    booking.assigned_partner_mobile ||
    booking.delivery_boy_mobile ||
    ""
  )
    .replace(/\D/g, "")
    .slice(-10);
}


/* =========================================
   CHECK CLEANER ASSIGNMENT
========================================= */

function hasScurbCleanerAccepted(
  booking
){

  const status =
    normalizeScurbBookingStatus(
      booking.booking_status
    );

  const cleanerName =
    getScurbTrackingCleanerName(
      booking
    );

  return Boolean(cleanerName) || [
    "confirmed",
    "accepted",
    "assigned",
    "partner_assigned",
    "on_the_way",
    "arrived",
    "in_progress",
    "completed",
    "delivered"
  ].includes(status);
}

/* =========================================
   CANCEL BUTTON VISIBILITY
========================================= */

function canScurbBookingBeCancelled(
  status
){

  const normalizedStatus =
    normalizeScurbBookingStatus(
      status
    );

  return [
    "placed",
    "confirmed",
    "accepted",
    "assigned",
    "partner_assigned"
  ].includes(
    normalizedStatus
  );

}


function updateScurbCancelButton(
  booking
){

  if(!scurbOrderCancelArea){
    return;
  }

  const canCancel =
    canScurbBookingBeCancelled(
      booking?.booking_status
    );

  scurbOrderCancelArea.hidden =
    !canCancel;

}
/* =========================================
   FINISHED BOOKING MAP MODE
========================================= */

function isScurbTrackingFinishedStatus(
  status
){

  return [
    "completed",
    "delivered",
    "cancelled",
    "canceled",
    "rejected",
    "refunded"
  ].includes(
    normalizeScurbBookingStatus(
      status
    )
  );

}


/* =========================================
   UPDATE STATUS
========================================= */

function updateScurbOrderTrackingStatus(
  booking
){

  const status =
    normalizeScurbBookingStatus(
      booking.booking_status
    );

  const cleanerAccepted =
    hasScurbCleanerAccepted(
      booking
    );

  const cleanerName =
    getScurbTrackingCleanerName(
      booking
    );

  const arrivalMinutes =
    Math.max(
      1,
      Number(
        booking.estimated_arrival_minutes ||
        15
      )
    );


  scurbOrderStatusBadge.textContent =
    formatScurbBookingStatus(
      status
    );

  scurbOrderStatusBadge.className =
    [
      "scurbOrderStatusBadge",
      getScurbBookingStatusClass(
        status
      )
    ]
      .filter(Boolean)
      .join(" ");


  /*
    WAITING STATE
  */

  if(
    status === "placed" &&
    !cleanerAccepted
  ){

    scurbOrderStatusIcon.className =
      "fa-solid fa-person-dress";

    scurbOrderStatusTitle.textContent =
      "Waiting for a professional cleaner";

    scurbOrderStatusDescription.textContent =
      "Finding an available professional cleaner";

    scurbOrderCleanerCard.hidden =
      true;
scurbOrderReadyMessage.hidden =
  true;

    return;
  }


  /*
    CLEANER ACCEPTED
  */

  if(
    status === "confirmed" ||
    status === "accepted" ||
    status === "assigned" ||
    status === "partner_assigned"
  ){

    scurbOrderStatusIcon.className =
      "fa-solid fa-circle-check";

    scurbOrderStatusTitle.textContent =
      "Professional cleaner assigned";

    scurbOrderStatusDescription.textContent =
      `${cleanerName || "Your cleaner"} accepted your booking and will arrive soon.`;

    showScurbAcceptedCleaner(
      booking,
      arrivalMinutes
    );

 scurbOrderReadyMessage.hidden =
  false;

scurbOrderReadyIcon.className =
  "fa-regular fa-clock";

scurbOrderReadyText.textContent =
  "Please stay available and get ready at your doorstep.";

    return;
  }


  /*
    ON THE WAY
  */

  if(status === "on_the_way"){

    scurbOrderStatusIcon.className =
      "fa-solid fa-location-arrow";

    scurbOrderStatusTitle.textContent =
      "Your cleaner is on the way";

    scurbOrderStatusDescription.textContent =
      `${cleanerName || "Your professional cleaner"} is travelling towards your service location.`;

    showScurbAcceptedCleaner(
      booking,
      arrivalMinutes
    );

   scurbOrderReadyMessage.hidden =
  false;

scurbOrderReadyIcon.className =
  "fa-regular fa-clock";

scurbOrderReadyText.textContent =
  "Please stay available and get ready at your doorstep.";

    return;
  }


  /*
    ARRIVED
  */

  if(status === "arrived"){

    scurbOrderStatusIcon.className =
      "fa-solid fa-location-dot";

    scurbOrderStatusTitle.textContent =
      "Your cleaner has arrived";

    scurbOrderStatusDescription.textContent =
      `${cleanerName || "Your professional cleaner"} reached your service location.`;

    showScurbAcceptedCleaner(
      booking,
      0
    );

    scurbOrderCleanerArrival.textContent =
      "Cleaner reached your doorstep";

   scurbOrderReadyMessage.hidden =
  false;

scurbOrderReadyIcon.className =
  "fa-solid fa-location-dot";

scurbOrderReadyText.textContent =
  "Please meet your professional cleaner at the doorstep.";
    return;
  }


  /*
    SERVICE IN PROGRESS
  */

  if(status === "in_progress"){

    scurbOrderStatusIcon.className =
      "fa-solid fa-broom";

    scurbOrderStatusTitle.textContent =
      "Cleaning service is in progress";

    scurbOrderStatusDescription.textContent =
      "Your selected cleaning services are currently being completed.";

    showScurbAcceptedCleaner(
      booking,
      0
    );

    scurbOrderCleanerArrival.textContent =
      "Service is currently in progress";
scurbOrderReadyMessage.hidden =
  false;

scurbOrderReadyIcon.className =
  "fa-solid fa-broom";

scurbOrderReadyText.textContent =
  "Your selected cleaning services are being completed.";


    return;
  }


  /*
    COMPLETED
  */

  if(
    status === "completed" ||
    status === "delivered"
  ){

    scurbOrderStatusIcon.className =
      "fa-solid fa-circle-check";

    scurbOrderStatusTitle.textContent =
      "Cleaning service completed";

    scurbOrderStatusDescription.textContent =
      "Your booking has been completed successfully.";

    if(cleanerAccepted){

      showScurbAcceptedCleaner(
        booking,
        0
      );

      scurbOrderCleanerArrival.textContent =
        "Service completed successfully";
scurbOrderReadyMessage.hidden =
  false;

scurbOrderReadyIcon.className =
  "fa-solid fa-circle-check";

scurbOrderReadyText.textContent =
  "Thank you for choosing Scrub Mate.";
    }else{

      scurbOrderCleanerCard.hidden =
        true;

    }

   

    return;
  }


  /*
    CANCELLED
  */

  if(
  status === "cancelled" ||
  status === "canceled" ||
  status === "rejected"
){

  scurbOrderStatusIcon.className =
    "fa-solid fa-circle-xmark";

  scurbOrderStatusTitle.textContent =
    "Booking cancelled";

  scurbOrderStatusDescription.textContent =
    "This booking is no longer active.";

  scurbOrderCleanerCard.hidden =
    true;

  scurbOrderReadyMessage.hidden =
    true;

  return;
}


  /*
    FALLBACK
  */

  scurbOrderStatusIcon.className =
    "fa-solid fa-person-dress";

  scurbOrderStatusTitle.textContent =
    formatScurbBookingStatus(
      status
    );

  scurbOrderStatusDescription.textContent =
    "Your booking status has been updated.";

  scurbOrderCleanerCard.hidden =
    !cleanerAccepted;


  if(cleanerAccepted){

    showScurbAcceptedCleaner(
      booking,
      arrivalMinutes
    );

  }

}
/* =========================================
   CANCEL BUTTON EVENTS
========================================= */

scurbOrderCancelButton?.addEventListener(
  "click",
  openScurbCancelSheet
);


scurbCancelSheetClose?.addEventListener(
  "click",
  closeScurbCancelSheet
);


scurbCancelSheetNo?.addEventListener(
  "click",
  closeScurbCancelSheet
);


scurbCancelSheetYes?.addEventListener(
  "click",
  cancelScurbCurrentBooking
);


/*
  Close when tapping dark background.
*/

scurbCancelSheetOverlay?.addEventListener(
  "click",
  function(event){

    if(
      event.target ===
      scurbCancelSheetOverlay
    ){

      closeScurbCancelSheet();

    }

  }
);

/* =========================================
   SHOW ACCEPTED CLEANER
========================================= */

function showScurbAcceptedCleaner(
  booking,
  arrivalMinutes
){

  scurbOrderReadyMessage.hidden =
    false;

  const cleanerName =
    getScurbTrackingCleanerName(
      booking
    );

  const cleanerMobile =
    getScurbTrackingCleanerMobile(
      booking
    );

  const status =
    normalizeScurbBookingStatus(
      booking?.booking_status
    );

  const hideCallButton = [
    "completed",
    "delivered",
    "cancelled",
    "canceled",
    "rejected",
    "refunded"
  ].includes(status);


  scurbOrderCleanerCard.hidden =
    false;


  scurbOrderCleanerName.textContent =
    cleanerName ||
    "Assigned professional";


  scurbOrderCleanerArrival.textContent =
    arrivalMinutes > 0
      ? `Arriving in approximately ${arrivalMinutes} minutes`
      : "Professional cleaner assigned";


  if(
    cleanerMobile.length === 10 &&
    !hideCallButton
  ){

    const dialNumber =
      `+91${cleanerMobile}`;

    scurbOrderCleanerCall.href =
      `tel:${dialNumber}`;

    scurbOrderCleanerCall.dataset.mobile =
      dialNumber;

    scurbOrderCleanerCall.style.display =
      "flex";

  }else{

    scurbOrderCleanerCall.removeAttribute(
      "href"
    );

    delete scurbOrderCleanerCall.dataset.mobile;

    scurbOrderCleanerCall.style.display =
      "none";

  }

}

/* =========================================
   OPEN CLEANER NUMBER IN PHONE DIAL PAD
========================================= */

scurbOrderCleanerCall?.addEventListener(
  "click",
  function(event){

    const dialNumber =
      this.dataset.mobile || "";

    if(!dialNumber){
      event.preventDefault();
      return;
    }

    event.preventDefault();

    const dialUrl =
      `tel:${dialNumber}`;

    window.location.href =
      dialUrl;

  }
);


/* =========================================
   RENDER SERVICES
========================================= */

function renderScurbOrderTrackingServices(
  booking
){

  scurbOrderServicesList.replaceChildren();


  const services =
    getScurbBookingServices(
      booking
    );


  if(!services.length){

    const unavailable =
      document.createElement("p");

    unavailable.textContent =
      "Service details unavailable.";

    scurbOrderServicesList.appendChild(
      unavailable
    );

    return;
  }


  services.forEach(function(service){

    const row =
      document.createElement("div");

    row.className =
      "scurbOrderServiceRow";


    const information =
      document.createElement("div");

    information.className =
      "scurbOrderServiceInformation";


    const name =
      document.createElement("strong");

    name.textContent =
      service.name ||
      service.service_name ||
      "Cleaning Service";


    const quantity =
      Number(
        service.quantity || 1
      );


    const price =
      Number(
        service.price ||
        service.discount_price ||
        0
      );


    const lineTotal =
      Number(
        service.line_total ||
        service.total ||
        price * quantity
      );


    const priceText =
      document.createElement("span");

    priceText.textContent =
      lineTotal > 0
        ? `₹${lineTotal}`
        : "";


    const quantityText =
      document.createElement("span");

    quantityText.className =
      "scurbOrderServiceQuantity";

    quantityText.textContent =
      `× ${quantity}`;


    information.append(
      name,
      priceText
    );


    row.append(
      information,
      quantityText
    );


    scurbOrderServicesList.appendChild(
      row
    );

  });

}


/* =========================================
   RENDER BOOKED LOCATION MAP
========================================= */

async function renderScurbBookedLocationMap(
  booking
){

  if(
    !window.L ||
    !document.getElementById(
      "scurbOrderMap"
    )
  ){
    return;
  }


  const routeRequestId =
    ++scurbTrackingRouteRequestId;


  const customerLatitude =
    parseFloat(
      booking.latitude
    );

  const customerLongitude =
    parseFloat(
      booking.longitude
    );

  const cleanerLatitude =
    parseFloat(
      booking.cleaner_latitude
    );

  const cleanerLongitude =
    parseFloat(
      booking.cleaner_longitude
    );


  const validCustomerLocation =
    Number.isFinite(customerLatitude) &&
    Number.isFinite(customerLongitude) &&
    customerLatitude !== 0 &&
    customerLongitude !== 0 &&
    Math.abs(customerLatitude) <= 90 &&
    Math.abs(customerLongitude) <= 180;


  const validCleanerLocation =
    Number.isFinite(cleanerLatitude) &&
    Number.isFinite(cleanerLongitude) &&
    cleanerLatitude !== 0 &&
    cleanerLongitude !== 0 &&
    Math.abs(cleanerLatitude) <= 90 &&
    Math.abs(cleanerLongitude) <= 180;


  const finishedBooking =
    isScurbTrackingFinishedStatus(
      booking?.booking_status
    );


  const mapLatitude =
    validCustomerLocation
      ? customerLatitude
      : 16.747578614935353;

  const mapLongitude =
    validCustomerLocation
      ? customerLongitude
      : 81.68208423275695;


  if(!scurbTrackingMap){

    scurbTrackingMap =
      L.map(
        "scurbOrderMap",
        {
          zoomControl:false,
          attributionControl:false
        }
      );


    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        maxZoom:19
      }
    ).addTo(
      scurbTrackingMap
    );

  }


  /*
    Always keep the map visible.
    Clear old markers and route before drawing.
  */

  const mapElement =
    document.getElementById(
      "scurbOrderMap"
    );

  const mapSection =
    mapElement?.closest(
      ".scurbOrderMapSection"
    ) || mapElement?.parentElement;

  if(mapSection){

    mapSection.hidden =
      false;

    mapSection.style.display =
      "";

  }


  scurbTrackingCustomerMarker?.remove();
  scurbTrackingCleanerMarker?.remove();
  scurbTrackingRouteLine?.remove();

  scurbTrackingCustomerMarker = null;
  scurbTrackingCleanerMarker = null;
  scurbTrackingRouteLine = null;


  /*
    CUSTOMER BOOKED LOCATION PIN
  */

  const customerIcon =
    L.divIcon(
      {
        className:"",
        html:`
          <div class="scurbOrderCustomerPin">
            <div class="scurbOrderCustomerPinCircle">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div class="scurbOrderCustomerPinPoint"></div>
          </div>
        `,
        iconSize:[38,46],
        iconAnchor:[19,43]
      }
    );


  if(validCustomerLocation){

    scurbTrackingCustomerMarker =
      L.marker(
        [
          customerLatitude,
          customerLongitude
        ],
        {
          icon:customerIcon,
          zIndexOffset:1000
        }
      )
      .addTo(
        scurbTrackingMap
      );

  }


  /*
    COMPLETED / CANCELLED:
    Keep map visible, but show only customer location.
  */

  if(finishedBooking){

    scurbTrackingMap.setView(
      [
        mapLatitude,
        mapLongitude
      ],
      validCustomerLocation
        ? 18
        : 17
    );


    setTimeout(
      function(){

        scurbTrackingMap.invalidateSize();

      },
      250
    );

    return;

  }


  /*
    ACTIVE ORDER:
    Show cleaner marker and route.
  */

  if(validCleanerLocation){

    const cleanerIcon =
      L.divIcon(
        {
          className:"",
          html:`
            <div class="scurbOrderCleanerMarker">
              <i class="fa-solid fa-person-dress"></i>
            </div>
          `,
          iconSize:[48,48],
          iconAnchor:[24,44]
        }
      );


    scurbTrackingCleanerMarker =
      L.marker(
        [
          cleanerLatitude,
          cleanerLongitude
        ],
        {
          icon:cleanerIcon,
          zIndexOffset:1100
        }
      )
      .addTo(
        scurbTrackingMap
      );

  }


  if(
    validCustomerLocation &&
    validCleanerLocation
  ){

    const fallbackRoute =
      function(){

        if(
          routeRequestId !==
          scurbTrackingRouteRequestId
        ){
          return;
        }

        scurbTrackingRouteLine?.remove();

        scurbTrackingRouteLine =
          L.polyline(
            [
              [
                cleanerLatitude,
                cleanerLongitude
              ],
              [
                customerLatitude,
                customerLongitude
              ]
            ],
            {
              color:"#14b9bb",
              weight:5,
              opacity:.85,
              dashArray:"8 8",
              lineCap:"round",
              lineJoin:"round"
            }
          )
          .addTo(
            scurbTrackingMap
          );


        scurbTrackingMap.fitBounds(
          scurbTrackingRouteLine.getBounds(),
          {
            padding:[55,55],
            maxZoom:17
          }
        );

      };


    try{

      const routeUrl =
        `https://router.project-osrm.org/route/v1/driving/` +
        `${cleanerLongitude},${cleanerLatitude};` +
        `${customerLongitude},${customerLatitude}` +
        `?overview=full&geometries=geojson&steps=false`;

      const response =
        await fetch(
          routeUrl,
          {
            method:"GET",
            cache:"no-store"
          }
        );

      if(!response.ok){
        throw new Error(
          "Unable to load road route"
        );
      }

      const routeData =
        await response.json();

      if(
        routeRequestId !==
        scurbTrackingRouteRequestId
      ){
        return;
      }

      const routeGeometry =
        routeData?.routes?.[0]?.geometry;

      if(!routeGeometry){
        throw new Error(
          "Road route unavailable"
        );
      }

      scurbTrackingRouteLine =
        L.geoJSON(
          routeGeometry,
          {
            style:{
              color:"#14b9bb",
              weight:6,
              opacity:.92,
              lineCap:"round",
              lineJoin:"round"
            }
          }
        )
        .addTo(
          scurbTrackingMap
        );


      scurbTrackingMap.fitBounds(
        scurbTrackingRouteLine.getBounds(),
        {
          padding:[55,55],
          maxZoom:17
        }
      );

    }catch(error){

      console.warn(
        "Road route unavailable, using direct line:",
        error
      );

      fallbackRoute();

    }

  }else if(validCustomerLocation){

    scurbTrackingMap.setView(
      [
        customerLatitude,
        customerLongitude
      ],
      18
    );

  }else if(validCleanerLocation){

    scurbTrackingMap.setView(
      [
        cleanerLatitude,
        cleanerLongitude
      ],
      17
    );

  }else{

    scurbTrackingMap.setView(
      [
        mapLatitude,
        mapLongitude
      ],
      17
    );

  }


  setTimeout(
    function(){

      scurbTrackingMap.invalidateSize();

    },
    250
  );

}


/* =========================================
   OPEN ORDER TRACKING
========================================= */

function openScurbBookingDetails(
  booking
){

  if(!scurbOrderTrackingPage){
    return;
  }
scurbCurrentTrackingBooking =
  booking;

updateScurbCancelButton(
  booking
);

  const mobile =
    String(
      booking.customer_mobile || ""
    )
      .replace(/\D/g, "")
      .slice(-10);


  const address =
    booking.service_address ||
    [
      booking.street_name,
      booking.neighbourhood,
      booking.village,
      booking.city
    ]
      .filter(Boolean)
      .join(", ");


  scurbOrderBookingId.textContent =
    booking.order_id ||
    booking.id ||
    "Scrub Mate Booking";


  scurbOrderBookingDate.textContent =
    formatScurbBookingDate(
      getScurbBookingDateValue(
        booking
      )
    );


  scurbOrderCustomerName.textContent =
    booking.customer_name ||
    "Scrub Mate User";


  scurbOrderCustomerMobile.textContent =
    mobile.length === 10
      ? `+91 ${mobile}`
      : "Mobile unavailable";


  scurbOrderCustomerAddress.textContent =
    address ||
    "Address unavailable";


  /*
    BILL DETAILS
  */

  const originalServiceTotal =
    Number(
      booking.original_service_total ||
      booking.service_total ||
      0
    );


  const serviceDiscount =
    Number(
      booking.service_discount ||
      0
    );


  const deliveryFee =
    Number(
      booking.delivery_fee ||
      0
    );


  const couponDiscount =
    Number(
      booking.coupon_discount ||
      0
    );


  const finalAmount =
    Number(
      booking.final_amount ||
      booking.payment_amount ||
      0
    );


  scurbOrderServiceTotal.textContent =
    `₹${originalServiceTotal}`;


  scurbOrderServiceDiscount.textContent =
    `− ₹${serviceDiscount}`;


  scurbOrderDeliveryFee.textContent =
    deliveryFee === 0
      ? "FREE"
      : `₹${deliveryFee}`;


  /*
    COUPON ROW:
    hide fully when discount is zero.
  */

  if(couponDiscount > 0){

    scurbOrderCouponRow.hidden =
      false;

    scurbOrderCouponRow.style.display =
      "flex";

    scurbOrderCouponDiscount.textContent =
      `− ₹${couponDiscount}`;

  }else{

    scurbOrderCouponRow.hidden =
      true;

    scurbOrderCouponRow.style.display =
      "none";

  }


  scurbOrderFinalAmount.textContent =
    `₹${finalAmount}`;


  updateScurbOrderTrackingStatus(
    booking
  );


  renderScurbOrderTrackingServices(
    booking
  );


  scurbOrderTrackingPage.classList.add(
    "show"
  );


  scurbOrderTrackingPage.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";


  setTimeout(function(){

    renderScurbBookedLocationMap(
      booking
    );

  }, 80);

}


/* =========================================
   CLOSE ORDER TRACKING
========================================= */

function closeScurbOrderTracking(){

  if(!scurbOrderTrackingPage){
    return;
  }


  scurbOrderTrackingPage.classList.remove(
    "show"
  );


  scurbOrderTrackingPage.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow =
    "hidden";

}


scurbOrderBackButton?.addEventListener(
  "click",
  closeScurbOrderTracking
);
/* =========================================
   ORDER TRACKING EDGE SWIPE BACK
========================================= */

let scurbOrderSwipeStartX = 0;
let scurbOrderSwipeStartY = 0;
let scurbOrderSwipeCurrentX = 0;
let scurbOrderSwipeCurrentY = 0;
let scurbOrderSwipeFromLeft = false;
let scurbOrderSwipeFromRight = false;
let scurbOrderSwipeActive = false;

const SCURB_ORDER_EDGE_SIZE = 45;
const SCURB_ORDER_CLOSE_DISTANCE = 85;
const SCURB_ORDER_VERTICAL_LIMIT = 70;


/* =========================================
   START SWIPE
========================================= */

function startScurbOrderSwipe(event){

  if(
    !scurbOrderTrackingPage ||
    !scurbOrderTrackingPage.classList.contains(
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

  const pageRect =
    scurbOrderTrackingPage.getBoundingClientRect();

  const startX =
    touch.clientX;

  const startY =
    touch.clientY;


  scurbOrderSwipeFromLeft =
    startX <=
    pageRect.left +
    SCURB_ORDER_EDGE_SIZE;

  scurbOrderSwipeFromRight =
    startX >=
    pageRect.right -
    SCURB_ORDER_EDGE_SIZE;


  if(
    !scurbOrderSwipeFromLeft &&
    !scurbOrderSwipeFromRight
  ){
    return;
  }


  scurbOrderSwipeActive =
    true;

  scurbOrderSwipeStartX =
    startX;

  scurbOrderSwipeStartY =
    startY;

  scurbOrderSwipeCurrentX =
    startX;

  scurbOrderSwipeCurrentY =
    startY;

}


/* =========================================
   MOVE SWIPE
========================================= */

function moveScurbOrderSwipe(event){

  if(
    !scurbOrderSwipeActive ||
    event.touches.length !== 1
  ){
    return;
  }


  const touch =
    event.touches[0];

  scurbOrderSwipeCurrentX =
    touch.clientX;

  scurbOrderSwipeCurrentY =
    touch.clientY;


  const deltaX =
    scurbOrderSwipeCurrentX -
    scurbOrderSwipeStartX;

  const deltaY =
    scurbOrderSwipeCurrentY -
    scurbOrderSwipeStartY;


  /*
    Cancel when the user is scrolling
    vertically instead of swiping back.
  */

  if(
    Math.abs(deltaY) >
    Math.abs(deltaX) &&
    Math.abs(deltaY) > 15
  ){

    scurbOrderSwipeActive =
      false;

    return;

  }


  /*
    Correct swipe directions:

    Left edge  -> swipe right
    Right edge -> swipe left
  */

  const validLeftMovement =
    scurbOrderSwipeFromLeft &&
    deltaX > 0;

  const validRightMovement =
    scurbOrderSwipeFromRight &&
    deltaX < 0;


  if(
    validLeftMovement ||
    validRightMovement
  ){

    event.preventDefault();

  }

}


/* =========================================
   END SWIPE
========================================= */

function endScurbOrderSwipe(){

  if(!scurbOrderSwipeActive){
    return;
  }


  const deltaX =
    scurbOrderSwipeCurrentX -
    scurbOrderSwipeStartX;

  const deltaY =
    scurbOrderSwipeCurrentY -
    scurbOrderSwipeStartY;


  const horizontalDistance =
    Math.abs(deltaX);

  const verticalDistance =
    Math.abs(deltaY);


  const validLeftSwipe =
    scurbOrderSwipeFromLeft &&
    deltaX >=
    SCURB_ORDER_CLOSE_DISTANCE;

  const validRightSwipe =
    scurbOrderSwipeFromRight &&
    deltaX <=
    -SCURB_ORDER_CLOSE_DISTANCE;


  scurbOrderSwipeActive =
    false;

  scurbOrderSwipeFromLeft =
    false;

  scurbOrderSwipeFromRight =
    false;


  if(
    verticalDistance <=
    SCURB_ORDER_VERTICAL_LIMIT &&
    horizontalDistance >
    verticalDistance &&
    (
      validLeftSwipe ||
      validRightSwipe
    )
  ){

    closeScurbOrderTracking();

  }

}


/* =========================================
   CANCEL SWIPE
========================================= */

function cancelScurbOrderSwipe(){

  scurbOrderSwipeActive =
    false;

  scurbOrderSwipeFromLeft =
    false;

  scurbOrderSwipeFromRight =
    false;

}


/* =========================================
   ADD SWIPE EVENTS
========================================= */

if(scurbOrderTrackingPage){

  scurbOrderTrackingPage.addEventListener(
    "touchstart",
    startScurbOrderSwipe,
    {
      passive:true,
      capture:true
    }
  );


  scurbOrderTrackingPage.addEventListener(
    "touchmove",
    moveScurbOrderSwipe,
    {
      passive:false,
      capture:true
    }
  );


  scurbOrderTrackingPage.addEventListener(
    "touchend",
    endScurbOrderSwipe,
    {
      passive:true,
      capture:true
    }
  );


  scurbOrderTrackingPage.addEventListener(
    "touchcancel",
    cancelScurbOrderSwipe,
    {
      passive:true,
      capture:true
    }
  );

}
/* =========================================
   OPEN CANCEL SHEET
========================================= */

function openScurbCancelSheet(){

  if(
    !scurbCancelSheetOverlay ||
    !scurbCurrentTrackingBooking ||
    scurbCancellingBooking
  ){
    return;
  }

  if(
    !canScurbBookingBeCancelled(
      scurbCurrentTrackingBooking.booking_status
    )
  ){
    updateScurbCancelButton(
      scurbCurrentTrackingBooking
    );

    return;
  }

  scurbCancelSheetOverlay.classList.add(
    "show"
  );

  scurbCancelSheetOverlay.setAttribute(
    "aria-hidden",
    "false"
  );

}


/* =========================================
   CLOSE CANCEL SHEET
========================================= */

function closeScurbCancelSheet(){

  if(
    !scurbCancelSheetOverlay ||
    scurbCancellingBooking
  ){
    return;
  }

  scurbCancelSheetOverlay.classList.remove(
    "show"
  );

  scurbCancelSheetOverlay.setAttribute(
    "aria-hidden",
    "true"
  );

}
/* =========================================
   CANCEL BOOKING IN SUPABASE
========================================= */

async function cancelScurbCurrentBooking(){

  if(
    scurbCancellingBooking ||
    !scurbCurrentTrackingBooking
  ){
    return;
  }


  const currentStatus =
    normalizeScurbBookingStatus(
      scurbCurrentTrackingBooking.booking_status
    );


  if(
    !canScurbBookingBeCancelled(
      currentStatus
    )
  ){

    closeScurbCancelSheet();

    updateScurbCancelButton(
      scurbCurrentTrackingBooking
    );

    return;

  }


  scurbCancellingBooking =
    true;


  if(scurbCancelSheetYes){

    scurbCancelSheetYes.disabled =
      true;

    scurbCancelSheetYes.textContent =
      "Cancelling...";

  }


  if(scurbOrderCancelButton){

    scurbOrderCancelButton.disabled =
      true;

  }


  try{

    const client =
      window.supabaseClient ||
      supabaseClient;


    /*
      Update only the exact order and only if
      its current status is still cancellable.
    */

    let updateQuery =
      client
        .from("scrubmate_orders")
        .update({
          booking_status:"cancelled",
          updated_at:new Date().toISOString()
        });


    if(scurbCurrentTrackingBooking.id){

      updateQuery =
        updateQuery.eq(
          "id",
          scurbCurrentTrackingBooking.id
        );

    }else{

      updateQuery =
        updateQuery.eq(
          "order_id",
          scurbCurrentTrackingBooking.order_id
        );

    }


    const result =
      await updateQuery
        .in(
          "booking_status",
          [
            "placed",
            "confirmed",
            "accepted",
            "assigned",
            "partner_assigned"
          ]
        )
        .select(`
          id,
          order_id,
          booking_status
        `)
        .maybeSingle();


    if(result.error){
      throw result.error;
    }


    if(!result.data){

      throw new Error(
        "This booking can no longer be cancelled."
      );

    }


    /*
      Update local opened booking.
    */

    scurbCurrentTrackingBooking.booking_status =
      "cancelled";


    /*
      Update the booking in the main array.
    */

    const bookingIndex =
      scurbAllBookings.findIndex(
        function(item){

          return (
            item.id ===
            scurbCurrentTrackingBooking.id
          ) || (
            item.order_id ===
            scurbCurrentTrackingBooking.order_id
          );

        }
      );


    if(bookingIndex !== -1){

      scurbAllBookings[
        bookingIndex
      ].booking_status =
        "cancelled";

    }


    /*
      Update tracking screen immediately.
    */

    updateScurbOrderTrackingStatus(
      scurbCurrentTrackingBooking
    );

    updateScurbCancelButton(
      scurbCurrentTrackingBooking
    );


    /*
      Move cancelled booking to Past.
    */

    renderScurbBookings();


    scurbCancelSheetOverlay.classList.remove(
      "show"
    );

    scurbCancelSheetOverlay.setAttribute(
      "aria-hidden",
      "true"
    );


  }catch(error){

    console.error(
      "Unable to cancel booking:",
      error
    );

    alert(
      error?.message ||
      "Unable to cancel the booking. Please try again."
    );

  }finally{

    scurbCancellingBooking =
      false;


    if(scurbCancelSheetYes){

      scurbCancelSheetYes.disabled =
        false;

      scurbCancelSheetYes.textContent =
        "Yes, cancel";

    }


    if(scurbOrderCancelButton){

      scurbOrderCancelButton.disabled =
        false;

    }

  }

}

/* =========================================
   SUPABASE REALTIME BOOKINGS — NO REFRESH
========================================= */

function getScurbRealtimeBookingKey(booking){

  return String(
    booking?.id ||
    booking?.order_id ||
    ""
  );

}


function bookingBelongsToScurbUser(booking){

  const loggedMobile =
    getScurbLoggedInMobile();

  const bookingMobile =
    String(
      booking?.customer_mobile ||
      ""
    )
      .replace(/\D/g, "")
      .slice(-10);

  return (
    loggedMobile.length === 10 &&
    bookingMobile === loggedMobile
  );

}


/*
  Replace only one booking card instead of
  rebuilding the whole list. This avoids
  flashing or blinking on realtime updates.
*/

function updateScurbBookingCardWithoutBlink(
  booking
){

  const bookingKey =
    getScurbRealtimeBookingKey(
      booking
    );

  if(!bookingKey){
    return;
  }


  const existingIndex =
    scurbAllBookings.findIndex(
      function(item){

        return (
          getScurbRealtimeBookingKey(item) ===
          bookingKey
        );

      }
    );


  if(existingIndex === -1){

    scurbAllBookings.unshift(
      booking
    );

  }else{

    scurbAllBookings[
      existingIndex
    ] = {
      ...scurbAllBookings[
        existingIndex
      ],
      ...booking
    };

    booking =
      scurbAllBookings[
        existingIndex
      ];

  }


  const shouldBePast =
    isScurbPastBooking(
      booking
    );

  const visibleInCurrentTab =
    scurbActiveBookingTab === "past"
      ? shouldBePast
      : !shouldBePast;


  const existingCard =
    scurbBookingsList?.querySelector(
      `[data-booking-id="${CSS.escape(
        bookingKey
      )}"]`
    );


  /*
    The status moved between Upcoming/Past.
    Remove it smoothly from the current tab.
  */

  if(!visibleInCurrentTab){

    if(existingCard){

      existingCard.style.transition =
        "opacity .18s ease, transform .18s ease";

      existingCard.style.opacity =
        "0";

      existingCard.style.transform =
        "translateY(-5px)";

      setTimeout(
        function(){

          existingCard.remove();

          if(
            scurbBookingsList &&
            !scurbBookingsList.children.length
          ){
            showScurbBookingsEmpty();
          }

        },
        180
      );

    }

    return;

  }


  scurbBookingsEmpty?.classList.add(
    "hide"
  );


  const newCard =
    createScurbBookingCard(
      booking
    );


  /*
    Replace only this card. No complete list
    rerender and no screen blinking.
  */

  if(existingCard){

    existingCard.replaceWith(
      newCard
    );

  }else if(scurbBookingsList){

    scurbBookingsList.prepend(
      newCard
    );

  }

}


/*
  Update the currently opened tracking page
  directly from the realtime payload.
*/

function updateOpenScurbTrackingWithoutBlink(
  booking,
  previousBooking = null
){

  if(
    !scurbOrderTrackingPage?.classList.contains(
      "show"
    ) ||
    !scurbCurrentTrackingBooking
  ){
    return;
  }


  const openBookingKey =
    getScurbRealtimeBookingKey(
      scurbCurrentTrackingBooking
    );

  const changedBookingKey =
    getScurbRealtimeBookingKey(
      booking
    );


  if(
    !openBookingKey ||
    openBookingKey !==
      changedBookingKey
  ){
    return;
  }


  scurbCurrentTrackingBooking = {
    ...scurbCurrentTrackingBooking,
    ...booking
  };


  const updatedBooking =
    scurbCurrentTrackingBooking;


  updateScurbCancelButton(
    updatedBooking
  );

  updateScurbOrderTrackingStatus(
    updatedBooking
  );


  /*
    Update cleaner phone immediately.
    showScurbAcceptedCleaner() is called by
    the status renderer when required.
  */

  const servicesChanged =
    JSON.stringify(
      previousBooking?.services ?? null
    ) !==
    JSON.stringify(
      updatedBooking.services ?? null
    );

  if(servicesChanged){

    renderScurbOrderTrackingServices(
      updatedBooking
    );

  }


  /*
    Redraw the map only when coordinates have
    changed. Status-only updates do not make
    the map blink.
  */

  const locationChanged =
    Number(previousBooking?.latitude) !==
      Number(updatedBooking.latitude) ||
    Number(previousBooking?.longitude) !==
      Number(updatedBooking.longitude) ||
    Number(previousBooking?.cleaner_latitude) !==
      Number(updatedBooking.cleaner_latitude) ||
    Number(previousBooking?.cleaner_longitude) !==
      Number(updatedBooking.cleaner_longitude);


  const previousFinished =
    isScurbTrackingFinishedStatus(
      previousBooking?.booking_status
    );

  const currentFinished =
    isScurbTrackingFinishedStatus(
      updatedBooking.booking_status
    );

  const mapModeChanged =
    previousFinished !==
    currentFinished;


  if(
    locationChanged ||
    mapModeChanged
  ){

    renderScurbBookedLocationMap(
      updatedBooking
    );

  }

}


/* =========================================
   APPLY REALTIME INSERT / UPDATE / DELETE
========================================= */

function applyScurbRealtimeBookingChange(
  payload
){

  const eventType =
    String(
      payload?.eventType ||
      ""
    ).toUpperCase();

  const newBooking =
    payload?.new || null;

  const oldBooking =
    payload?.old || null;


  if(eventType === "DELETE"){

    const deletedKey =
      getScurbRealtimeBookingKey(
        oldBooking
      );

    if(!deletedKey){
      return;
    }


    scurbAllBookings =
      scurbAllBookings.filter(
        function(item){

          return (
            getScurbRealtimeBookingKey(item) !==
            deletedKey
          );

        }
      );


    scurbBookingsList
      ?.querySelector(
        `[data-booking-id="${CSS.escape(
          deletedKey
        )}"]`
      )
      ?.remove();


    if(
      getScurbRealtimeBookingKey(
        scurbCurrentTrackingBooking
      ) === deletedKey
    ){

      closeScurbOrderTracking();

    }

    return;

  }


  if(
    !newBooking ||
    !bookingBelongsToScurbUser(
      newBooking
    )
  ){
    return;
  }


  const bookingKey =
    getScurbRealtimeBookingKey(
      newBooking
    );

  const previousBooking =
    scurbAllBookings.find(
      function(item){

        return (
          getScurbRealtimeBookingKey(item) ===
          bookingKey
        );

      }
    ) || null;


  updateScurbBookingCardWithoutBlink(
    newBooking
  );

  updateOpenScurbTrackingWithoutBlink(
    newBooking,
    previousBooking
  );

}


/* =========================================
   CONNECT REALTIME
========================================= */

function setupScurbBookingsRealtime(){

  const client =
    window.supabaseClient ||
    (
      typeof supabaseClient !==
      "undefined"
        ? supabaseClient
        : null
    );

  if(
    !client ||
    scurbBookingsRealtimeChannel
  ){
    return;
  }


  const mobile =
    getScurbLoggedInMobile();

  if(mobile.length !== 10){
    return;
  }


  scurbBookingsRealtimeChannel =
    client
      .channel(
        `scrubmate-customer-orders-${mobile}`
      )
      .on(
        "postgres_changes",
        {
          event:"*",
          schema:"public",
          table:"scrubmate_orders"
        },
        applyScurbRealtimeBookingChange
      )
      .subscribe(
        function(status){

          if(status === "SUBSCRIBED"){

            console.log(
              "Scrub Mate realtime connected"
            );

          }else if(
            status === "CHANNEL_ERROR" ||
            status === "TIMED_OUT"
          ){

            console.warn(
              "Scrub Mate realtime connection:",
              status
            );

          }

        }
      );

}


/*
  Connect after the page and Supabase client
  are ready. It does not refresh the page.
*/

if(document.readyState === "loading"){

  document.addEventListener(
    "DOMContentLoaded",
    setupScurbBookingsRealtime,
    {
      once:true
    }
  );

}else{

  setupScurbBookingsRealtime();

}


})();
