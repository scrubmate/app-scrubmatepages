/* =========================================
   COMMON SERVICE POPUP
========================================= */
const laundryServicePopup =
  document.getElementById("laundryServicePopup");

function openLaundryServicePopup(){
  laundryServicePopup.innerHTML = `
    <div class="scurbServicePopup show">

      <div class="scurbServicePopupImage">

  <div class="scurbPopupImageShimmer"></div>

  <img
   id="laundryServicePopupHeroImage"
    class="scurbPopupLazyImage"
    data-src="mainn/landuary.png"
    alt="Laundry Service"
  >

  <div class="scurbServicePopupTop">

         <button
  type="button"
  class="scurbServicePopupIconBtn"
 id="closeLaundryServicePopup"
  aria-label="Go back"
>
  <i class="fa-solid fa-chevron-left"></i>
</button>

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="shareLaundryServicePopup"
  aria-label="Share"
>
  <i class="fa-solid fa-share-nodes"></i>
</button>

        </div>

           </div>

      <div class="scurbServiceHeaderRow">

  <div class="scurbServiceHeaderInfo">

    <h1 class="scurbServiceHeaderTitle">
  Laundry (Washing)
</h1>

    <div class="scurbServiceHeaderPrices">

      <span class="scurbServiceSalePrice">
        ₹10
      </span>

      <span class="scurbServiceStrikePrice">
        ₹25
      </span>

    </div>

  </div>

 <button
  type="button"
  class="scurbServiceHeaderBookBtn"
  id="laundryServiceBookBtn"
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
  Fresh and Clean Everyday Laundry
</h3>

<p class="scurbServiceDescription">
  Get assistance with washing suitable everyday clothes, rinsing, and basic drying preparation using the washing facilities and supplies available at your home.
</p>

<h3 class="scurbServiceSubTitleCompact">
  How Long Does It Take?
</h3>

<p class="scurbServiceDescriptionCompact">
  The estimated service duration depends on the number of clothes, fabric type, washing method, and available facilities.
</p>

<div class="scurbFridgeTypes">

  <div class="scurbFridgeCard">

    <div class="scurbPopupSmallImageWrap">

      <div class="scurbPopupSmallImageShimmer"></div>

      <img
        class="scurbPopupLazyImage"
        data-src="popup/cloth1.png"
        alt="Small Load"
      >

    </div>

    <h4>Small Load</h4>
    <span>20 mins</span>

  </div>


  <div class="scurbFridgeCard">

    <div class="scurbPopupSmallImageWrap">

      <div class="scurbPopupSmallImageShimmer"></div>

      <img
        class="scurbPopupLazyImage"
        data-src="popup/cloth2.png"
        alt="Medium Load"
      >

    </div>

    <h4>Medium Load</h4>
    <span>40 mins</span>

  </div>


  <div class="scurbFridgeCard">

    <div class="scurbPopupSmallImageWrap">

      <div class="scurbPopupSmallImageShimmer"></div>

      <img
        class="scurbPopupLazyImage"
        data-src="popup/cloth3.png"
        alt="Large Load"
      >

    </div>

    <h4>Large Load</h4>
    <span>60 mins</span>

  </div>

</div>
<h3 class="scurbServiceSubTitleCompact">
  Includes
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Sorting suitable everyday clothes</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Hand or machine washing assistance</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Basic detergent washing</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Rinsing suitable garments</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Light water removal</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Placing clothes for drying</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Basic washing-area cleanup</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Final garment count and check</span>
</div>


<h3 class="scurbServiceNotIncludesTitle">
  Doesn't Include
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Dry cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Guaranteed stain removal</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Washing delicate designer garments</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Ironing unless booked separately</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Providing detergent or washing equipment</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Repairing washing machines</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Handling contaminated or hazardous clothing</span>
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
        Separate Clothes by Type
</h4>
      <p class="scurbHowDoneItemText">
        Separate white, coloured, delicate, and heavily soiled clothes before the service begins.
</p>
    </div>

  </div>

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
        Check Clothing Labels
</h4>
      <p class="scurbHowDoneItemText">
        Check garment-care labels and keep dry-clean-only or delicate clothes separate.
</p>
    </div>

  </div>

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
        Keep Supplies Ready
</h4>
      <p class="scurbHowDoneItemText">
        Keep detergent, buckets, water, washing machine, and drying space ready as required.
</p>
    </div>

  </div>

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
        Explain Special Instructions
</h4>
      <p class="scurbHowDoneItemText">
        Inform the professional about colour-bleeding clothes, stains, or garments needing special care.
</p>
    </div>

  </div>

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
        Check Clothes After Washing
</h4>
      <p class="scurbHowDoneItemText">
        Check the washed clothes and garment count before they are placed for drying.
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
        Pricing depends on load size, fabric type, washing method, and selected service duration.
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
const laundryServicePopupLazyImages =
  laundryServicePopup.querySelectorAll(
    ".scurbPopupLazyImage"
  );

laundryServicePopupLazyImages.forEach(function(image){
  const imageWrap =
    image.parentElement;

  const shimmer =
    imageWrap.querySelector(
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

  const scurbLaundryServiceFaqQuestions =
    laundryServicePopup.querySelectorAll(
      ".scurbFaqQuestion"
    );

  scurbLaundryServiceFaqQuestions.forEach(function(question){

    question.addEventListener("click", function(event){

      event.preventDefault();
      event.stopPropagation();

      const currentItem =
        this.closest(".scurbFaqItem");

      if(!currentItem) return;

      const wasOpen =
        currentItem.classList.contains(
          "scurbFaqOpen"
        );

      laundryServicePopup
        .querySelectorAll(".scurbFaqItem")
        .forEach(function(item){
          item.classList.remove("scurbFaqOpen");
        });

      if(!wasOpen){
        currentItem.classList.add("scurbFaqOpen");
      }

    });

  });
 document
  .getElementById("closeLaundryServicePopup")
  .addEventListener(
    "click",
    closeLaundryServicePopup
  );
  const scurbLaundryServiceLanguageToggle =
    document.getElementById("scurbLanguageToggle");

  function scurbSetLaundryServicePopupTexts(selector, texts){

    const elements =
      laundryServicePopup.querySelectorAll(selector);

    elements.forEach(function(element, index){

      if(texts[index] !== undefined){
        element.textContent = texts[index];
      }

    });

  }


  function changeLaundryServicePopupLanguage(isTelugu){
    const language = isTelugu ? "te" : "en";

    const laundryServicePopupTranslations = {
      en: {

        detailsTitle: [
          "About this Service"
        ],

        subTitles: [
          "Fresh and Clean Everyday Laundry"
        ],

        descriptions: [
          "Get assistance with washing suitable everyday clothes, rinsing, and basic drying preparation using the washing facilities and supplies available at your home."
        ],

        compactTitles: [
          "How Long Does It Take?",
          "Includes"
        ],

        compactDescriptions: [
          "The estimated service duration depends on the number of clothes, fabric type, washing method, and available facilities."
        ],

        fridgeTypes: [
          "Small Load",
          "Medium Load",
          "Large Load"
        ],

        fridgeTimes: [
          "60 mins",
          "90 mins",
          "120 mins"
        ],

        includeItems: [
          "Sorting suitable everyday clothes",
          "Hand or machine washing assistance",
          "Basic detergent washing",
          "Rinsing suitable garments",
          "Light water removal",
          "Placing clothes for drying",
          "Basic washing-area cleanup",
          "Final garment count and check",
          "Dry cleaning",
          "Guaranteed stain removal",
          "Washing delicate designer garments",
          "Ironing unless booked separately",
          "Providing detergent or washing equipment",
          "Repairing washing machines",
          "Handling contaminated or hazardous clothing"
        ],

        notIncludesTitle: [
          "Doesn't Include"
        ],

        processTitle: [
          "How Is It Done?"
        ],

        processItemTitles: [
          "Separate Clothes by Type",
          "Check Clothing Labels",
          "Keep Supplies Ready",
          "Explain Special Instructions",
          "Check Clothes After Washing"
        ],

        processItemTexts: [
          "Separate white, coloured, delicate, and heavily soiled clothes before the service begins.",
          "Check garment-care labels and keep dry-clean-only or delicate clothes separate.",
          "Keep detergent, buckets, water, washing machine, and drying space ready as required.",
          "Inform the professional about colour-bleeding clothes, stains, or garments needing special care.",
          "Check the washed clothes and garment count before they are placed for drying."
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
          "No. Please keep any service-specific materials or equipment mentioned in the service details ready.",
          "Pricing depends on load size, fabric type, washing method, and selected service duration.",
          "You can reach Scrub Mate support anytime through the Help section available in the app."
        ]

      },


      te: {

        detailsTitle: [
          "ఈ సేవ గురించి"
        ],

        subTitles: [
          "తాజాగా మరియు శుభ్రంగా ఉండే రోజువారీ దుస్తులు"
        ],

        descriptions: [
          "మీ ఇంటిలో అందుబాటులో ఉన్న వాషింగ్ సదుపాయాలు మరియు సామగ్రిని ఉపయోగించి రోజువారీ దుస్తులను ఉతకడం, కడగడం మరియు ఆరబెట్టడానికి సిద్ధం చేయడంలో సహాయం అందిస్తాము."
        ],

        compactTitles: [
          "ఈ సేవకు ఎంత సమయం పడుతుంది?",
          "సేవలో ఉండేవి"
        ],

        compactDescriptions: [
          "దుస్తుల సంఖ్య, వస్త్ర రకం, వాషింగ్ విధానం మరియు అందుబాటులో ఉన్న సదుపాయాలను బట్టి సేవకు పట్టే సమయం మారుతుంది."
        ],

        fridgeTypes: [
          "చిన్న లోడ్",
          "మధ్యస్థ లోడ్",
          "పెద్ద లోడ్"
        ],

        fridgeTimes: [
          "60 నిమిషాలు",
          "90 నిమిషాలు",
          "120 నిమిషాలు"
        ],

        includeItems: [
          "సరైన రోజువారీ దుస్తులను వేరు చేయడం",
          "చేతితో లేదా మెషీన్‌తో ఉతకడంలో సహాయం",
          "సాధారణ డిటర్జెంట్‌తో ఉతకడం",
          "సరైన దుస్తులను నీటితో కడగడం",
          "తేలికగా నీరు తొలగించడం",
          "దుస్తులను ఆరబెట్టడానికి ఉంచడం",
          "వాషింగ్ ప్రాంతాన్ని సాధారణంగా శుభ్రం చేయడం",
          "చివరిగా దుస్తుల లెక్క మరియు పరిశీలన",
          "డ్రై క్లీనింగ్",
          "మరకలు పూర్తిగా తొలగుతాయని హామీ",
          "సున్నితమైన డిజైనర్ దుస్తులు ఉతకడం",
          "వేరుగా బుక్ చేయకపోతే ఇస్త్రీ",
          "డిటర్జెంట్ లేదా వాషింగ్ పరికరాలు అందించడం",
          "వాషింగ్ మెషీన్ మరమ్మతు",
          "కలుషితమైన లేదా ప్రమాదకర దుస్తులను నిర్వహించడం"
        ],

        notIncludesTitle: [
          "సేవలో లేనివి"
        ],

        processTitle: [
          "ఈ సేవ ఎలా చేయబడుతుంది?"
        ],

        processItemTitles: [
          "దుస్తులను రకం ప్రకారం వేరు చేయండి",
          "దుస్తుల లేబుల్స్ పరిశీలించండి",
          "అవసరమైన సామగ్రిని సిద్ధంగా ఉంచండి",
          "ప్రత్యేక సూచనలను వివరించండి",
          "వాషింగ్ తర్వాత దుస్తులను పరిశీలించండి"
        ],

        processItemTexts: [
          "సేవ ప్రారంభమయ్యే ముందు తెలుపు, రంగు, సున్నితమైన మరియు ఎక్కువ మురికిగల దుస్తులను వేరు చేయండి.",
          "దుస్తుల సంరక్షణ లేబుల్స్ చూసి డ్రై క్లీనింగ్ మాత్రమే అవసరమైన లేదా సున్నితమైన దుస్తులను వేరుగా ఉంచండి.",
          "అవసరాన్ని బట్టి డిటర్జెంట్, బకెట్లు, నీరు, వాషింగ్ మెషీన్ మరియు ఆరబెట్టే స్థలాన్ని సిద్ధంగా ఉంచండి.",
          "రంగు వదిలే దుస్తులు, మరకలు లేదా ప్రత్యేక జాగ్రత్త అవసరమైన దుస్తుల గురించి తెలియజేయండి.",
          "దుస్తులను ఆరబెట్టడానికి ఉంచే ముందు ఉతికిన దుస్తులు మరియు వాటి సంఖ్యను పరిశీలించండి."
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
          "Scrub Mate ప్రొఫెషనల్స్ అందరూ ధృవీకరించబడి, శిక్షణ పొందినవారు. వారు నాణ్యమైన మరియు నమ్మకమైన సేవను అందిస్తారు.",
          "సేవ వివరాల్లో పేర్కొన్న అవసరమైన సామగ్రి లేదా పరికరాలను సిద్ధంగా ఉంచండి.",
          "లోడ్ పరిమాణం, వస్త్ర రకం, వాషింగ్ విధానం మరియు ఎంచుకున్న సేవ సమయాన్ని బట్టి ధర నిర్ణయించబడుతుంది.",
          "యాప్‌లో ఉన్న Help విభాగం ద్వారా మీరు ఎప్పుడైనా Scrub Mate సపోర్ట్‌ను సంప్రదించవచ్చు."
        ]

      }

    };


    const text =
  laundryServicePopupTranslations[language];

    scurbSetLaundryServicePopupTexts(
      ".scurbServiceDetailsTitle",
      text.detailsTitle
    );

    scurbSetLaundryServicePopupTexts(
      ".scurbServiceSubTitle",
      text.subTitles
    );

    scurbSetLaundryServicePopupTexts(
      ".scurbServiceDescription",
      text.descriptions
    );

    scurbSetLaundryServicePopupTexts(
      ".scurbServiceSubTitleCompact",
      text.compactTitles
    );

    scurbSetLaundryServicePopupTexts(
      ".scurbServiceDescriptionCompact",
      text.compactDescriptions
    );

    scurbSetLaundryServicePopupTexts(
      ".scurbFridgeCard h4",
      text.fridgeTypes
    );

    scurbSetLaundryServicePopupTexts(
      ".scurbFridgeCard > span",
      text.fridgeTimes
    );

    scurbSetLaundryServicePopupTexts(
      ".scurbServiceIncludeItem > span:last-child",
      text.includeItems
    );

    scurbSetLaundryServicePopupTexts(
      ".scurbServiceNotIncludesTitle",
      text.notIncludesTitle
    );

    scurbSetLaundryServicePopupTexts(
      ".scurbServiceHowDoneTitle",
      text.processTitle
    );

    scurbSetLaundryServicePopupTexts(
      ".scurbHowDoneItemTitle",
      text.processItemTitles
    );

    scurbSetLaundryServicePopupTexts(
      ".scurbHowDoneItemText",
      text.processItemTexts
    );

    scurbSetLaundryServicePopupTexts(
      ".scurbServiceFaqTitle",
      text.faqTitle
    );

    scurbSetLaundryServicePopupTexts(
      ".scurbFaqQuestion > span:first-child",
      text.faqQuestions
    );

    scurbSetLaundryServicePopupTexts(
      ".scurbFaqAnswer",
      text.faqAnswers
    );

  }


  scurbLaundryServiceLanguageToggle.addEventListener(
    "change",
    function(){

     changeLaundryServicePopupLanguage(
  this.checked
);

    }
  );
}


/* =========================================
   OPEN FROM CARD
========================================= */

document.addEventListener("DOMContentLoaded", function(){

 const laundryServiceCard =
  document.getElementById("openLaundryServicePopup");
  if(!laundryServiceCard){
    console.error("Laundry Service card not found");
    return;
  }

  laundryServiceCard.addEventListener("click", function(event){

    if(event.target.closest(".scurbServiceAddBtn")){
      return;
    }

    openLaundryServicePopup();

  });

});



let scurbLaundryServiceTouchStartX = 0;
let scurbLaundryServiceTouchStartY = 0;
let scurbLaundryServiceTouchCurrentX = 0;
let scurbLaundryServiceSwipeSide = "";

function closeLaundryServicePopup(){

  const popup =
    document.getElementById(
      "laundryServicePopup"
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
    popupPage.classList.remove("show");
  }

  setTimeout(function(){
    popup.innerHTML = "";
  },250);
}


document.addEventListener(
  "touchstart",
  function(event){

    const popup =
      document.getElementById(
        "laundryServicePopup"
      );

    if(
      !popup ||
      !popup.innerHTML.trim()
    ){
      return;
    }

    const touch =
      event.touches[0];

    scurbLaundryServiceTouchStartX =
      touch.clientX;

    scurbLaundryServiceTouchStartY =
      touch.clientY;

    scurbLaundryServiceTouchCurrentX =
      touch.clientX;

    scurbLaundryServiceSwipeSide = "";

    const screenWidth =
      window.innerWidth;

    if(
      scurbLaundryServiceTouchStartX <= 35
    ){
      scurbLaundryServiceSwipeSide = "left";
    }
    else if(
      scurbLaundryServiceTouchStartX >=
      screenWidth - 35
    ){
      scurbLaundryServiceSwipeSide = "right";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchmove",
  function(event){

    if(!scurbLaundryServiceSwipeSide){
      return;
    }

    const touch =
      event.touches[0];

    scurbLaundryServiceTouchCurrentX =
      touch.clientX;

    const moveX =
      scurbLaundryServiceTouchCurrentX -
      scurbLaundryServiceTouchStartX;

    const moveY =
      touch.clientY -
      scurbLaundryServiceTouchStartY;

    if(
      Math.abs(moveY) >
      Math.abs(moveX)
    ){
      scurbLaundryServiceSwipeSide = "";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchend",
  function(){

    if(!scurbLaundryServiceSwipeSide){
      return;
    }

    const swipeDistance =
      scurbLaundryServiceTouchCurrentX -
      scurbLaundryServiceTouchStartX;

    const leftSwipePassed =
      scurbLaundryServiceSwipeSide === "left" &&
      swipeDistance >= 90;

    const rightSwipePassed =
      scurbLaundryServiceSwipeSide === "right" &&
      swipeDistance <= -90;

    if(
      leftSwipePassed ||
      rightSwipePassed
    ){
      closeLaundryServicePopup();
    }

    scurbLaundryServiceSwipeSide = "";

  }
);


document.addEventListener(
  "touchcancel",
  function(){
    scurbLaundryServiceSwipeSide = "";
  }
);
