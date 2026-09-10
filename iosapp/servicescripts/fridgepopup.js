/* =========================================
   COMMON SERVICE POPUP
========================================= */

const fridgeCleaningPopup =
  document.getElementById("fridgeCleaningPopup");

function openFridgeCleaningPopup(){

  fridgeCleaningPopup.innerHTML = `
    <div class="scurbServicePopup show">

      <div class="scurbServicePopupImage">

       <div class="scurbPopupImageShimmer"></div>

<img
  class="scurbPopupLazyImage"
  data-src="mainn/fridgeclean.jpeg"
  alt="Fridge Cleaning"
>

<div class="scurbServicePopupTop">

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="closeFridgeCleaningPopup"
  aria-label="Go back"
>
  <i class="fa-solid fa-chevron-left"></i>
</button>

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="shareFridgeCleaningPopup"
  aria-label="Share"
>
  <i class="fa-solid fa-share-nodes"></i>
</button>

        </div>

           </div>

      <div class="scurbServiceHeaderRow">

  <div class="scurbServiceHeaderInfo">

    <h1 class="scurbServiceHeaderTitle">
      Fridge Cleaning
    </h1>

    <div class="scurbServiceHeaderPrices">

      <span class="scurbServiceSalePrice">
        ₹70
      </span>

      <span class="scurbServiceStrikePrice">
        ₹100
      </span>

    </div>

  </div>

  <button
  type="button"
  class="scurbServiceHeaderBookBtn"
  id="fridgeCleaningBookBtn"
>
  Book
</button>

</div>
<div class="scurbServiceDivider"></div>

<div class="scurbServiceDetailsHeader">

  <h2 class="scurbServiceDetailsTitle">
    About this Service
  </h2>

  <label class="scurbLanguageSwitch">

    <input
      type="checkbox"
      id="scurbLanguageToggle"
    >

    <span class="scurbLanguageTrack">

      <span class="scurbLanguageThumb"></span>

      <span class="scurbLanguageOption scurbLanguageEnglish">
        ENG
      </span>

      <span class="scurbLanguageOption scurbLanguageTelugu">
        తెలుగు
      </span>

    </span>

  </label>

</div>
<h3 class="scurbServiceSubTitle">
  A Fresher, Cleaner Fridge
</h3>

<p class="scurbServiceDescription">
  Give your refrigerator a deep, hygienic clean inside and out. We remove stains, spills, unpleasant odours, and hidden dirt from every shelf, drawer, and corner, leaving your fridge fresh, clean, and ready to use.
</p>

<h3 class="scurbServiceSubTitleCompact">
  How Long Does It Take?
</h3>

<p class="scurbServiceDescriptionCompact">
  The estimated service duration varies based on your refrigerator's size and condition.
</p>

<div class="scurbFridgeTypes">

  <div class="scurbFridgeCard">
  <div class="scurbPopupSmallImageWrap">

  <div class="scurbPopupSmallImageShimmer"></div>

  <img
    class="scurbPopupLazyImage"
    data-src="popup/single.png"
    alt=""
  >

</div>
    <h4>Single Door</h4>
    <span>45 mins</span>
  </div>

  <div class="scurbFridgeCard">
   <div class="scurbPopupSmallImageWrap">

  <div class="scurbPopupSmallImageShimmer"></div>

  <img
    class="scurbPopupLazyImage"
    data-src="popup/double.png"
    alt=""
  >

</div>
    <h4>Double Door</h4>
    <span>60 mins</span>
  </div>

  <div class="scurbFridgeCard">
<div class="scurbPopupSmallImageWrap">

  <div class="scurbPopupSmallImageShimmer"></div>

  <img
    class="scurbPopupLazyImage"
    data-src="popup/large.png"
    alt=""
  >

</div>
    <h4>Large Fridge</h4>
    <span>90 mins</span>
  </div>

</div>
<h3 class="scurbServiceSubTitleCompact">
  Includes
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Interior shelves and drawers cleaned</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Stain and spill removal</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Door seals and compartments cleaned</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Odour removal and sanitization</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Exterior surface cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Vegetable and storage trays cleaned</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Freezer compartment cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Final wipe and fresh finish</span>
</div>

<h3 class="scurbServiceNotIncludesTitle">
  Doesn't Include
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Food items inside the refrigerator</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Electrical or mechanical repairs</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Gas leakage or cooling issues</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Replacement of damaged parts</span>
</div>
<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Removal of permanently damaged stains</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Cleaning behind or moving the refrigerator</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Disposal of expired food and waste</span>
</div>
<h3 class="scurbServiceHowDoneTitle">
  How Is It Done?
</h3>


<div class="scurbHowDoneList">

  <div class="scurbHowDoneItem">

    <div class="scurbHowDoneImageWrap">

  <div class="scurbHowDoneImageShimmer"></div>

  <img
    class="scurbHowDoneImage scurbPopupLazyImage"
    data-src="popup/how.png"
    alt=""
  >

</div>

    <div class="scurbHowDoneContent">

      <h4 class="scurbHowDoneItemTitle">
        Remove Personal Items
      </h4>

      <p class="scurbHowDoneItemText">
        Remove food, medicines, and personal items before the cleaning service begins.
      </p>

    </div>

  </div>


  <div class="scurbHowDoneItem">

    <img
      class="scurbHowDoneImage"
      src="popup/how.png"
      alt=""
    >

    <div class="scurbHowDoneContent">

      <h4 class="scurbHowDoneItemTitle">
        Defrost the Fridge
      </h4>

      <p class="scurbHowDoneItemText">
        Defrost the refrigerator in advance when required for smooth and effective cleaning.
      </p>

    </div>

  </div>


  <div class="scurbHowDoneItem">

    <img
      class="scurbHowDoneImage"
      src="popup/how.png"
      alt=""
    >

    <div class="scurbHowDoneContent">

      <h4 class="scurbHowDoneItemTitle">
        Report Heavy Ice Buildup
      </h4>

      <p class="scurbHowDoneItemText">
        Inform the cleaning professional if the fridge has heavy ice buildup or difficult stains.
      </p>

    </div>

  </div>


  <div class="scurbHowDoneItem">

    <img
      class="scurbHowDoneImage"
      src="popup/how.png"
      alt=""
    >

    <div class="scurbHowDoneContent">

      <h4 class="scurbHowDoneItemTitle">
        Keep Garbage Bags Ready
      </h4>

      <p class="scurbHowDoneItemText">
        Keep garbage bags available for waste disposal and unwanted food items.
      </p>

    </div>

  </div>


  <div class="scurbHowDoneItem">

    <img
      class="scurbHowDoneImage"
      src="popup/how.png"
      alt=""
    >

    <div class="scurbHowDoneContent">

      <h4 class="scurbHowDoneItemTitle">
        Be Available for Approval
      </h4>

      <p class="scurbHowDoneItemText">
        Stay available during the service to approve the disposal of unwanted items.
      </p>

    </div>

  </div>

</div>


<h3 class="scurbServiceFaqTitle">
  FAQ
</h3>

<div class="scurbFaqList">

  <div class="scurbFaqItem">

    <button type="button" class="scurbFaqQuestion">
      <span>What if the cleaning isn’t completed within the selected time?</span>
      <span class="scurbFaqIcon"></span>
    </button>

    <div class="scurbFaqAnswerWrap">

      <div class="scurbFaqDivider"></div>

      <p class="scurbFaqAnswer">
        You can place a new booking for the additional time you need, and it will be assigned to the same professional whenever possible.
      </p>

    </div>

  </div>


  <div class="scurbFaqItem">

    <button type="button" class="scurbFaqQuestion">
      <span>How can I trust your service?</span>
      <span class="scurbFaqIcon"></span>
    </button>

    <div class="scurbFaqAnswerWrap">

      <div class="scurbFaqDivider"></div>

      <p class="scurbFaqAnswer">
        All Scrub Mate professionals are verified, trained, and committed to delivering high-quality cleaning services.
      </p>

    </div>

  </div>


  <div class="scurbFaqItem">

    <button type="button" class="scurbFaqQuestion">
      <span>Do I need to provide cleaning materials?</span>
      <span class="scurbFaqIcon"></span>
    </button>

    <div class="scurbFaqAnswerWrap">

      <div class="scurbFaqDivider"></div>

      <p class="scurbFaqAnswer">
        No. Our professionals bring the essential cleaning supplies required to complete the service.
      </p>

    </div>

  </div>


  <div class="scurbFaqItem">

    <button type="button" class="scurbFaqQuestion">
      <span>How is the service price calculated?</span>
      <span class="scurbFaqIcon"></span>
    </button>

    <div class="scurbFaqAnswerWrap">

      <div class="scurbFaqDivider"></div>

      <p class="scurbFaqAnswer">
        Pricing depends on the refrigerator type, size, condition, and the service selected at the time of booking.
      </p>

    </div>

  </div>


  <div class="scurbFaqItem">

    <button type="button" class="scurbFaqQuestion">
      <span>How can I contact support?</span>
      <span class="scurbFaqIcon"></span>
    </button>

    <div class="scurbFaqAnswerWrap">

      <div class="scurbFaqDivider"></div>

      <p class="scurbFaqAnswer">
        You can reach Scrub Mate support anytime through the Help section available in the app.
      </p>

    </div>

  </div>

</div>
    </div>
  `;
const fridgePopupLazyImages =
  fridgeCleaningPopup.querySelectorAll(
    ".scurbPopupLazyImage"
  );

fridgePopupLazyImages.forEach(function(image){

  const shimmer =
    image.parentElement.querySelector(
      ".scurbPopupImageShimmer," +
      ".scurbPopupSmallImageShimmer," +
      ".scurbHowDoneImageShimmer"
    );

  image.onload = function(){

    image.classList.add("loaded");

    if(shimmer){
      shimmer.remove();
    }

  };

  image.onerror = function(){

    image.classList.add("loaded");

    if(shimmer){
      shimmer.remove();
    }

  };

  image.src =
    image.dataset.src;

});
  document
    .getElementById("closeFridgeCleaningPopup")
    .addEventListener(
      "click",
      closeFridgeCleaningPopup
    );
  const scurbFridgeLanguageToggle =
    document.getElementById("scurbLanguageToggle");

  function scurbSetFridgePopupTexts(selector, texts){

    const elements =
      fridgeCleaningPopup.querySelectorAll(selector);

    elements.forEach(function(element, index){

      if(texts[index] !== undefined){
        element.textContent = texts[index];
      }

    });

  }


  function changeFridgePopupLanguage(isTelugu){

    const language = isTelugu ? "te" : "en";

    const fridgePopupTranslations = {

      en: {

        detailsTitle: [
          "About this Service"
        ],

        subTitles: [
          "A Fresher, Cleaner Fridge"
        ],

        descriptions: [
          "Give your refrigerator a deep, hygienic clean inside and out. We remove stains, spills, unpleasant odours, and hidden dirt from every shelf, drawer, and corner, leaving your fridge fresh, clean, and ready to use."
        ],

        compactTitles: [
          "How Long Does It Take?",
          "Includes"
        ],

        compactDescriptions: [
          "The estimated service duration varies based on your refrigerator's size and condition."
        ],

        fridgeTypes: [
          "Single Door",
          "Double Door",
          "Large Fridge"
        ],

        fridgeTimes: [
          "45 mins",
          "60 mins",
          "90 mins"
        ],

        includeItems: [
          "Interior shelves and drawers cleaned",
          "Stain and spill removal",
          "Door seals and compartments cleaned",
          "Odour removal and sanitization",
          "Exterior surface cleaning",
          "Vegetable and storage trays cleaned",
          "Freezer compartment cleaning",
          "Final wipe and fresh finish",

          "Food items inside the refrigerator",
          "Electrical or mechanical repairs",
          "Gas leakage or cooling issues",
          "Replacement of damaged parts",
          "Removal of permanently damaged stains",
          "Cleaning behind or moving the refrigerator",
          "Disposal of expired food and waste"
        ],

        notIncludesTitle: [
          "Doesn't Include"
        ],

        processTitle: [
          "How Is It Done?"
        ],

        processItemTitles: [
          "Remove Personal Items",
          "Defrost the Fridge",
          "Report Heavy Ice Buildup",
          "Keep Garbage Bags Ready",
          "Be Available for Approval"
        ],

        processItemTexts: [
          "Remove food, medicines, and personal items before the cleaning service begins.",
          "Defrost the refrigerator in advance when required for smooth and effective cleaning.",
          "Inform the cleaning professional if the fridge has heavy ice buildup or difficult stains.",
          "Keep garbage bags available for waste disposal and unwanted food items.",
          "Stay available during the service to approve the disposal of unwanted items."
        ],

        faqTitle: [
          "FAQ"
        ],

        faqQuestions: [
          "What if the cleaning isn’t completed within the selected time?",
          "How can I trust your service?",
          "Do I need to provide cleaning materials?",
          "How is the service price calculated?",
          "How can I contact support?"
        ],

        faqAnswers: [
          "You can place a new booking for the additional time you need, and it will be assigned to the same professional whenever possible.",
          "All Scrub Mate professionals are verified, trained, and committed to delivering high-quality cleaning services.",
          "No. Our professionals bring the essential cleaning supplies required to complete the service.",
          "Pricing depends on the refrigerator type, size, condition, and the service selected at the time of booking.",
          "You can reach Scrub Mate support anytime through the Help section available in the app."
        ]

      },


      te: {

        detailsTitle: [
          "ఈ సేవ గురించి"
        ],

        subTitles: [
          "మరింత తాజాగా, శుభ్రంగా ఉండే ఫ్రిజ్"
        ],

        descriptions: [
          "మీ ఫ్రిజ్ లోపల మరియు బయట పూర్తిగా శుభ్రం చేయబడుతుంది. ప్రతి షెల్ఫ్, డ్రాయర్ మరియు మూలలో ఉన్న మరకలు, చిందిన పదార్థాలు, దుర్వాసన మరియు దాగి ఉన్న మురికిని తొలగించి, ఫ్రిజ్‌ను శుభ్రంగా, తాజాగా మరియు ఉపయోగించడానికి సిద్ధంగా ఉంచుతాము."
        ],

        compactTitles: [
          "ఈ సేవకు ఎంత సమయం పడుతుంది?",
          "సేవలో ఉండేవి"
        ],

        compactDescriptions: [
          "మీ ఫ్రిజ్ పరిమాణం మరియు దాని పరిస్థితిని బట్టి సేవకు పట్టే సమయం మారుతుంది."
        ],

        fridgeTypes: [
          "సింగిల్ డోర్",
          "డబుల్ డోర్",
          "పెద్ద ఫ్రిజ్"
        ],

        fridgeTimes: [
          "45 నిమిషాలు",
          "60 నిమిషాలు",
          "90 నిమిషాలు"
        ],

        includeItems: [
          "లోపలి షెల్ఫ్‌లు మరియు డ్రాయర్ల శుభ్రత",
          "మరకలు మరియు చిందిన పదార్థాల తొలగింపు",
          "డోర్ సీల్స్ మరియు కంపార్ట్‌మెంట్‌ల శుభ్రత",
          "దుర్వాసన తొలగింపు మరియు శానిటైజేషన్",
          "బయటి ఉపరితల శుభ్రత",
          "కూరగాయలు మరియు నిల్వ ట్రేల శుభ్రత",
          "ఫ్రీజర్ కంపార్ట్‌మెంట్ శుభ్రత",
          "చివరిగా తుడిచి తాజాగా ఉంచడం",

          "ఫ్రిజ్‌లో ఉన్న ఆహార పదార్థాలు",
          "ఎలక్ట్రికల్ లేదా మెకానికల్ మరమ్మతులు",
          "గ్యాస్ లీకేజ్ లేదా కూలింగ్ సమస్యలు",
          "పాడైన భాగాల మార్పు",
          "శాశ్వతంగా ఏర్పడిన మరకల తొలగింపు",
          "ఫ్రిజ్‌ను కదిలించడం లేదా వెనుక భాగాన్ని శుభ్రం చేయడం",
          "గడువు ముగిసిన ఆహారం మరియు చెత్త తొలగింపు"
        ],

        notIncludesTitle: [
          "సేవలో లేనివి"
        ],

        processTitle: [
          "ఈ సేవ ఎలా చేయబడుతుంది?"
        ],

        processItemTitles: [
          "వ్యక్తిగత వస్తువులను తొలగించండి",
          "ఫ్రిజ్‌ను డీఫ్రాస్ట్ చేయండి",
          "ఎక్కువగా పేరుకున్న మంచు గురించి తెలియజేయండి",
          "చెత్త సంచులను సిద్ధంగా ఉంచండి",
          "అనుమతి కోసం అందుబాటులో ఉండండి"
        ],

        processItemTexts: [
          "క్లీనింగ్ సేవ ప్రారంభమయ్యే ముందు ఆహారం, మందులు మరియు వ్యక్తిగత వస్తువులను ఫ్రిజ్ నుంచి బయటకు తీసేయండి.",
          "సులభంగా మరియు సమర్థవంతంగా శుభ్రం చేయడానికి అవసరమైతే ఫ్రిజ్‌ను ముందుగానే డీఫ్రాస్ట్ చేయండి.",
          "ఫ్రిజ్‌లో ఎక్కువగా మంచు పేరుకుపోయి ఉంటే లేదా కఠినమైన మరకలు ఉంటే క్లీనింగ్ ప్రొఫెషనల్‌కు తెలియజేయండి.",
          "చెత్త మరియు అవసరం లేని ఆహార పదార్థాలను తొలగించడానికి చెత్త సంచులను సిద్ధంగా ఉంచండి.",
          "అవసరం లేని వస్తువులను తొలగించేందుకు అనుమతి ఇవ్వడానికి సేవ సమయంలో అందుబాటులో ఉండండి."
        ],

        faqTitle: [
          "తరచుగా అడిగే ప్రశ్నలు"
        ],

        faqQuestions: [
          "ఎంచుకున్న సమయంలో క్లీనింగ్ పూర్తికాకపోతే ఏమి చేయాలి?",
          "మీ సేవను నేను ఎలా నమ్మగలను?",
          "క్లీనింగ్ సామగ్రిని నేనే ఇవ్వాలా?",
          "సేవ ధర ఎలా నిర్ణయించబడుతుంది?",
          "సపోర్ట్‌ను ఎలా సంప్రదించాలి?"
        ],

        faqAnswers: [
          "మీకు అదనంగా అవసరమైన సమయానికి కొత్త బుకింగ్ చేయవచ్చు. సాధ్యమైనప్పుడు అదే ప్రొఫెషనల్‌కు ఆ బుకింగ్ కేటాయించబడుతుంది.",
          "Scrub Mate క్లీనింగ్ ప్రొఫెషనల్స్ అందరూ ధృవీకరించబడి, శిక్షణ పొందినవారు. వారు నాణ్యమైన మరియు నమ్మకమైన సేవను అందిస్తారు.",
          "లేదు. సేవను పూర్తి చేయడానికి అవసరమైన ముఖ్యమైన క్లీనింగ్ సామగ్రిని మా ప్రొఫెషనల్స్ తీసుకువస్తారు.",
          "ఫ్రిజ్ రకం, పరిమాణం, పరిస్థితి మరియు మీరు ఎంచుకున్న సేవను బట్టి ధర నిర్ణయించబడుతుంది.",
          "యాప్‌లో ఉన్న Help విభాగం ద్వారా మీరు ఎప్పుడైనా Scrub Mate సపోర్ట్‌ను సంప్రదించవచ్చు."
        ]

      }

    };


    const text =
      fridgePopupTranslations[language];


    scurbSetFridgePopupTexts(
      ".scurbServiceDetailsTitle",
      text.detailsTitle
    );

    scurbSetFridgePopupTexts(
      ".scurbServiceSubTitle",
      text.subTitles
    );

    scurbSetFridgePopupTexts(
      ".scurbServiceDescription",
      text.descriptions
    );

    scurbSetFridgePopupTexts(
      ".scurbServiceSubTitleCompact",
      text.compactTitles
    );

    scurbSetFridgePopupTexts(
      ".scurbServiceDescriptionCompact",
      text.compactDescriptions
    );

    scurbSetFridgePopupTexts(
      ".scurbFridgeCard h4",
      text.fridgeTypes
    );

    scurbSetFridgePopupTexts(
      ".scurbFridgeCard > span",
      text.fridgeTimes
    );

    scurbSetFridgePopupTexts(
      ".scurbServiceIncludeItem > span:last-child",
      text.includeItems
    );

    scurbSetFridgePopupTexts(
      ".scurbServiceNotIncludesTitle",
      text.notIncludesTitle
    );

    scurbSetFridgePopupTexts(
      ".scurbServiceHowDoneTitle",
      text.processTitle
    );

    scurbSetFridgePopupTexts(
      ".scurbHowDoneItemTitle",
      text.processItemTitles
    );

    scurbSetFridgePopupTexts(
      ".scurbHowDoneItemText",
      text.processItemTexts
    );

    scurbSetFridgePopupTexts(
      ".scurbServiceFaqTitle",
      text.faqTitle
    );

    scurbSetFridgePopupTexts(
      ".scurbFaqQuestion > span:first-child",
      text.faqQuestions
    );

    scurbSetFridgePopupTexts(
      ".scurbFaqAnswer",
      text.faqAnswers
    );

  }


  scurbFridgeLanguageToggle.addEventListener(
    "change",
    function(){

      changeFridgePopupLanguage(
        this.checked
      );

    }
  );
}



/* =========================================
   OPEN FROM CARD
========================================= */

/* =========================================
   OPEN FROM CARD
========================================= */

document.addEventListener("DOMContentLoaded", function(){

  const fridgeCard =
    document.getElementById("openFridgeCleaningPopup");

  if(!fridgeCard){
    console.error("Fridge cleaning card not found");
    return;
  }

  fridgeCard.addEventListener("click", function(event){

    if(event.target.closest(".scurbServiceAddBtn")){
      return;
    }

    openFridgeCleaningPopup();

  });

});





document.addEventListener("click", function(event){

  const question =
    event.target.closest(".scurbFaqQuestion");

  if(!question) return;

  const currentItem =
    question.closest(".scurbFaqItem");

  const faqList =
    currentItem.closest(".scurbFaqList");

  const wasOpen =
    currentItem.classList.contains("scurbFaqOpen");

  faqList
    .querySelectorAll(".scurbFaqItem")
    .forEach(function(item){
      item.classList.remove("scurbFaqOpen");
    });

  if(!wasOpen){
    currentItem.classList.add("scurbFaqOpen");
  }

});
let fridgePopupTouchStartX = 0;
let fridgePopupTouchStartY = 0;
let fridgePopupTouchCurrentX = 0;
let fridgePopupSwipeSide = "";


function closeFridgeCleaningPopup(){

  const popup =
    document.getElementById(
      "fridgeCleaningPopup"
    );

  if(
    !popup ||
    !popup.innerHTML.trim()
  ){
    return;
  }

  const popupPage =
    popup.querySelector(
      ".scurbServicePopup"
    );

  if(popupPage){

    popupPage.classList.remove(
      "show"
    );

  }

  setTimeout(function(){

    popup.innerHTML = "";

  }, 250);
}


/* TOUCH START */

document.addEventListener(
  "touchstart",
  function(event){

    const popup =
      document.getElementById(
        "fridgeCleaningPopup"
      );

    if(
      !popup ||
      !popup.innerHTML.trim() ||
      event.touches.length !== 1
    ){
      return;
    }

    const touch =
      event.touches[0];

    fridgePopupTouchStartX =
      touch.clientX;

    fridgePopupTouchStartY =
      touch.clientY;

    fridgePopupTouchCurrentX =
      touch.clientX;

    fridgePopupSwipeSide = "";

    const screenWidth =
      window.innerWidth;


    /* LEFT EDGE */

    if(
      fridgePopupTouchStartX <= 35
    ){

      fridgePopupSwipeSide =
        "left";

    }


    /* RIGHT EDGE */

    else if(
      fridgePopupTouchStartX >=
      screenWidth - 35
    ){

      fridgePopupSwipeSide =
        "right";

    }

  },
  {
    passive:true
  }
);


/* TOUCH MOVE */

document.addEventListener(
  "touchmove",
  function(event){

    if(
      !fridgePopupSwipeSide ||
      event.touches.length !== 1
    ){
      return;
    }

    const touch =
      event.touches[0];

    fridgePopupTouchCurrentX =
      touch.clientX;

    const moveX =
      fridgePopupTouchCurrentX -
      fridgePopupTouchStartX;

    const moveY =
      touch.clientY -
      fridgePopupTouchStartY;


    /* Cancel vertical scrolling */

    if(
      Math.abs(moveY) >
      Math.abs(moveX)
    ){

      fridgePopupSwipeSide = "";

    }

  },
  {
    passive:true
  }
);


/* TOUCH END */

document.addEventListener(
  "touchend",
  function(){

    if(!fridgePopupSwipeSide){
      return;
    }

    const swipeDistance =
      fridgePopupTouchCurrentX -
      fridgePopupTouchStartX;


    const leftSwipePassed =
      fridgePopupSwipeSide === "left" &&
      swipeDistance >= 90;


    const rightSwipePassed =
      fridgePopupSwipeSide === "right" &&
      swipeDistance <= -90;


    if(
      leftSwipePassed ||
      rightSwipePassed
    ){

      closeFridgeCleaningPopup();

    }

    fridgePopupSwipeSide = "";

  }
);


/* TOUCH CANCEL */

document.addEventListener(
  "touchcancel",
  function(){

    fridgePopupSwipeSide = "";

  }
);