/* =========================================
   COMMON SERVICE POPUP
========================================= */

const sweepingMoppingPopup =
  document.getElementById("sweepingMoppingPopup");

function openSweepingMoppingPopup(){

  sweepingMoppingPopup.innerHTML = `
    <div class="scurbServicePopup show">

      <div class="scurbServicePopupImage">

       <div class="scurbPopupImageShimmer"></div>

<img
  class="scurbPopupLazyImage"
  data-src="mainn/swepping.png"
  alt="Sweeping & Mopping"
>

        <div class="scurbServicePopupTop">

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="closeSweepingMoppingPopup"
  aria-label="Go back"
>
  <i class="fa-solid fa-chevron-left"></i>
</button>

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="shareSweepingMoppingPopup"
  aria-label="Share"
>
  <i class="fa-solid fa-share-nodes"></i>
</button>

        </div>

           </div>

      <div class="scurbServiceHeaderRow">

  <div class="scurbServiceHeaderInfo">

    <h1 class="scurbServiceHeaderTitle">
      Sweeping & Mopping
    </h1>

    <div class="scurbServiceHeaderPrices">

      <span class="scurbServiceSalePrice">
        ₹80
      </span>

      <span class="scurbServiceStrikePrice">
        ₹100
      </span>

    </div>

  </div>

 <button
  type="button"
  class="scurbServiceHeaderBookBtn"
  id="sweepingMoppingBookBtn"
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
  A Fresher, Cleaner Sweeping
</h3>

<p class="scurbServiceDescription">
  Give your refrigerator a deep, hygienic clean inside and out. We remove stains, spills, unpleasant odours, and hidden dirt from every shelf, drawer, and corner, leaving your sweeping fresh, clean, and ready to use.
</p>


<h3 class="scurbServiceSubTitleCompact">
  Includes
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Sweeping all floor areas</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Wet mopping with cleaning solution</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Corner and edge cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Under furniture where accessible</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Dust removal from floor surfaces</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Final dry finish</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Fresh floor finish</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Final inspection</span>
</div>

<h3 class="scurbServiceNotIncludesTitle">
  Doesn't Include
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Carpet shampooing</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Sofa cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Wall cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Ceiling cleaning</span>
</div>
<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Heavy stain removal</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Heavy furniture shifting</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Waste disposal</span>
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
        Remove Loose Items
      </h4>

      <p class="scurbHowDoneItemText">
        Remove loose items and small obstacles from the floor before the service begins.
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
        Defrost the Sweeping
      </h4>

      <p class="scurbHowDoneItemText">
        The professional sweeps the complete floor to remove loose dust and debris.
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
        Mop with Cleaning Solution
      </h4>

      <p class="scurbHowDoneItemText">
        Inform the cleaning professional if the sweeping has heavy ice buildup or difficult stains.
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
        Clean Corners and Edges
      </h4>

      <p class="scurbHowDoneItemText">
        Corners, edges, and accessible spaces under furniture are cleaned carefully.
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
        Final Inspection
      </h4>

      <p class="scurbHowDoneItemText">
        The floor is checked and given a final clean finish before completion.
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
        Pricing depends on the number of rooms, floor size, and condition at the time of booking.
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
const sweepingPopupLazyImages =
  sweepingMoppingPopup.querySelectorAll(
    ".scurbPopupLazyImage"
  );

sweepingPopupLazyImages.forEach(function(image){

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
    .getElementById("closeSweepingMoppingPopup")
    .addEventListener(
      "click",
      closeSweepingMoppingPopup
    );
  const scurbSweepingLanguageToggle =
    document.getElementById("scurbLanguageToggle");

  function scurbSetSweepingPopupTexts(selector, texts){

    const elements =
      sweepingMoppingPopup.querySelectorAll(selector);

    elements.forEach(function(element, index){

      if(texts[index] !== undefined){
        element.textContent = texts[index];
      }

    });

  }


  function changeSweepingPopupLanguage(isTelugu){

    const language = isTelugu ? "te" : "en";

    const sweepingPopupTranslations = {

      en: {

        detailsTitle: [
          "About this Service"
        ],

        subTitles: [
          "A Fresher, Cleaner Sweeping"
        ],

        descriptions: [
          "Give your refrigerator a deep, hygienic clean inside and out. We remove stains, spills, unpleasant odours, and hidden dirt from every shelf, drawer, and corner, leaving your sweeping fresh, clean, and ready to use."
        ],

        compactTitles: [
          "How Long Does It Take?",
          "Includes"
        ],

        compactDescriptions: [
          "The estimated service duration depends on the number of rooms, floor size, and floor condition."
        ],

        sweepingTypes: [
          "1 Room",
          "2 Rooms",
          "Large Sweeping"
        ],

        sweepingTimes: [
          "30 mins",
          "60 mins",
          "90+ mins"
        ],

        includeItems: [
          "Sweeping all floor areas",
          "Wet mopping with cleaning solution",
          "Corner and edge cleaning",
          "Under furniture where accessible",
          "Dust removal from floor surfaces",
          "Final dry finish",
          "Fresh floor finish",
          "Final inspection",

          "Carpet shampooing",
          "Sofa cleaning",
          "Wall cleaning",
          "Ceiling cleaning",
          "Heavy stain removal",
          "Heavy furniture shifting",
          "Waste disposal"
        ],

        notIncludesTitle: [
          "Doesn't Include"
        ],

        processTitle: [
          "How Is It Done?"
        ],

        processItemTitles: [
          "Remove Loose Items",
          "Defrost the Sweeping",
          "Mop with Cleaning Solution",
          "Clean Corners and Edges",
          "Final Inspection"
        ],

        processItemTexts: [
          "Remove loose items and small obstacles from the floor before the service begins.",
          "The professional sweeps the complete floor to remove loose dust and debris.",
          "Inform the cleaning professional if the sweeping has heavy ice buildup or difficult stains.",
          "Corners, edges, and accessible spaces under furniture are cleaned carefully.",
          "The floor is checked and given a final clean finish before completion."
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
          "Pricing depends on the number of rooms, floor size, and condition at the time of booking.",
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

        sweepingTypes: [
          "సింగిల్ డోర్",
          "డబుల్ డోర్",
          "పెద్ద ఫ్రిజ్"
        ],

        sweepingTimes: [
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
      sweepingPopupTranslations[language];


    scurbSetSweepingPopupTexts(
      ".scurbServiceDetailsTitle",
      text.detailsTitle
    );

    scurbSetSweepingPopupTexts(
      ".scurbServiceSubTitle",
      text.subTitles
    );

    scurbSetSweepingPopupTexts(
      ".scurbServiceDescription",
      text.descriptions
    );

    scurbSetSweepingPopupTexts(
      ".scurbServiceSubTitleCompact",
      text.compactTitles
    );

    scurbSetSweepingPopupTexts(
      ".scurbServiceDescriptionCompact",
      text.compactDescriptions
    );

    scurbSetSweepingPopupTexts(
      ".scurbSweepingCard h4",
      text.sweepingTypes
    );

    scurbSetSweepingPopupTexts(
      ".scurbSweepingCard > span",
      text.sweepingTimes
    );

    scurbSetSweepingPopupTexts(
      ".scurbServiceIncludeItem > span:last-child",
      text.includeItems
    );

    scurbSetSweepingPopupTexts(
      ".scurbServiceNotIncludesTitle",
      text.notIncludesTitle
    );

    scurbSetSweepingPopupTexts(
      ".scurbServiceHowDoneTitle",
      text.processTitle
    );

    scurbSetSweepingPopupTexts(
      ".scurbHowDoneItemTitle",
      text.processItemTitles
    );

    scurbSetSweepingPopupTexts(
      ".scurbHowDoneItemText",
      text.processItemTexts
    );

    scurbSetSweepingPopupTexts(
      ".scurbServiceFaqTitle",
      text.faqTitle
    );

    scurbSetSweepingPopupTexts(
      ".scurbFaqQuestion > span:first-child",
      text.faqQuestions
    );

    scurbSetSweepingPopupTexts(
      ".scurbFaqAnswer",
      text.faqAnswers
    );

  }


  scurbSweepingLanguageToggle.addEventListener(
    "change",
    function(){

      changeSweepingPopupLanguage(
        this.checked
      );

    }
  );
}

function closeSweepingMoppingPopup(){

  sweepingMoppingPopup.innerHTML = "";

}

/* =========================================
   OPEN FROM CARD
========================================= */

/* =========================================
   OPEN FROM CARD
========================================= */

document.addEventListener("DOMContentLoaded", function(){

  const sweepingCard =
    document.getElementById("openSweepingMoppingPopup");

  if(!sweepingCard){
    console.error("Sweeping cleaning card not found");
    return;
  }

  sweepingCard.addEventListener("click", function(event){

    if(event.target.closest(".scurbServiceAddBtn")){
      return;
    }

    openSweepingMoppingPopup();

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
let scurbPopupTouchStartX = 0;
let scurbPopupTouchStartY = 0;
let scurbPopupTouchCurrentX = 0;
let scurbPopupSwipeSide = "";

function closeSweepingMoppingPopup(){

  const popup =
    document.getElementById("sweepingMoppingPopup");

  if(!popup || !popup.innerHTML.trim()) return;

  const popupPage =
    popup.querySelector(".scurbServicePopup");

  if(popupPage){
    popupPage.classList.remove("show");
  }

  setTimeout(function(){
    popup.innerHTML = "";
  }, 250);
}


document.addEventListener(
  "touchstart",
  function(event){

    const popup =
      document.getElementById("sweepingMoppingPopup");

    if(
      !popup ||
      !popup.innerHTML.trim()
    ){
      return;
    }

    const touch = event.touches[0];

    scurbPopupTouchStartX = touch.clientX;
    scurbPopupTouchStartY = touch.clientY;
    scurbPopupTouchCurrentX = touch.clientX;
    scurbPopupSwipeSide = "";

    const screenWidth =
      window.innerWidth;

    /* Started from left edge */
    if(scurbPopupTouchStartX <= 35){
      scurbPopupSwipeSide = "left";
    }

    /* Started from right edge */
    else if(
      scurbPopupTouchStartX >=
      screenWidth - 35
    ){
      scurbPopupSwipeSide = "right";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchmove",
  function(event){

    if(!scurbPopupSwipeSide) return;

    const touch = event.touches[0];

    scurbPopupTouchCurrentX =
      touch.clientX;

    const moveX =
      scurbPopupTouchCurrentX -
      scurbPopupTouchStartX;

    const moveY =
      touch.clientY -
      scurbPopupTouchStartY;

    /* Cancel when vertically scrolling */
    if(
      Math.abs(moveY) >
      Math.abs(moveX)
    ){
      scurbPopupSwipeSide = "";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchend",
  function(){

    if(!scurbPopupSwipeSide) return;

    const swipeDistance =
      scurbPopupTouchCurrentX -
      scurbPopupTouchStartX;

    /* Left edge → swipe right */
    const leftSwipePassed =
      scurbPopupSwipeSide === "left" &&
      swipeDistance >= 90;

    /* Right edge → swipe left */
    const rightSwipePassed =
      scurbPopupSwipeSide === "right" &&
      swipeDistance <= -90;

    if(
      leftSwipePassed ||
      rightSwipePassed
    ){
      closeSweepingMoppingPopup();
    }

    scurbPopupSwipeSide = "";

  }
);


document.addEventListener(
  "touchcancel",
  function(){
    scurbPopupSwipeSide = "";
  }
);