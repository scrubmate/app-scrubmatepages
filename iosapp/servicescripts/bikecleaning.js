/* =========================================
   COMMON SERVICE POPUP
========================================= */
const bikeCleaningPopup =
  document.getElementById("bikeCleaningPopup");

function openBikeCleaningPopup(){
  bikeCleaningPopup.innerHTML = `
    <div class="scurbServicePopup show">

      <div class="scurbServicePopupImage">

  <div class="scurbPopupImageShimmer"></div>

  <img
   id="bikeCleaningPopupHeroImage"
    class="scurbPopupLazyImage"
    data-src="mainn/bike.jpeg"
    alt="Bike Cleaning"
  >

  <div class="scurbServicePopupTop">

         <button
  type="button"
  class="scurbServicePopupIconBtn"
 id="closeBikeCleaningPopup"
  aria-label="Go back"
>
  <i class="fa-solid fa-chevron-left"></i>
</button>

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="shareBikeCleaningPopup"
  aria-label="Share"
>
  <i class="fa-solid fa-share-nodes"></i>
</button>

        </div>

           </div>

      <div class="scurbServiceHeaderRow">

  <div class="scurbServiceHeaderInfo">

    <h1 class="scurbServiceHeaderTitle">
  Bike Cleaning
</h1>

    <div class="scurbServiceHeaderPrices">

      <span class="scurbServiceSalePrice">
        ₹100
      </span>

      <span class="scurbServiceStrikePrice">
        ₹150
      </span>

    </div>

  </div>

  <button
  type="button"
  class="scurbServiceHeaderBookBtn"
  id="bikeCleaningBookBtn"
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
  Clean and Fresh-Looking Bike
</h3>

<p class="scurbServiceDescription">
  Get your bike exterior cleaned to remove dust, mud, and everyday dirt from accessible body panels, wheels, seat, mirrors, and outer surfaces.
</p>


<h3 class="scurbServiceSubTitleCompact">
  Includes
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Exterior body-panel cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Seat and mirror wiping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Wheel and mudguard cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Headlight and indicator exterior wiping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Accessible engine-area exterior wipe</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Dust and light mud removal</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Final water rinse where suitable</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Dry wipe and clean finish</span>
</div>


<h3 class="scurbServiceNotIncludesTitle">
  Doesn't Include
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Engine or mechanical repair</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Chain lubrication or servicing</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Scratch or rust removal</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Interior electrical cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Pressure washing sensitive components</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Fuel or oil stain treatment</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Removal of permanent paint marks</span>
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
        Park the Bike Safely
</h4>
      <p class="scurbHowDoneItemText">
        Park the bike on a stable, open surface with enough space for safe cleaning.
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
        Remove Personal Items
</h4>
      <p class="scurbHowDoneItemText">
        Remove helmets, documents, mobile holders, bags, and other personal items from the bike.
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
        Inform About Damaged Parts
</h4>
      <p class="scurbHowDoneItemText">
        Inform the professional about loose parts, electrical issues, scratches, or areas that must remain dry.
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
        Keep Water Access Ready
</h4>
      <p class="scurbHowDoneItemText">
        Make sure water and drainage are available where washing is allowed.
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
        Check the Bike After Cleaning
</h4>
      <p class="scurbHowDoneItemText">
        Inspect the cleaned body, wheels, mirrors, and seat before the professional completes the service.
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
        Pricing depends on bike type, mud level, surface condition, and selected cleaning requirements.
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
const bikeCleaningPopupLazyImages =
  bikeCleaningPopup.querySelectorAll(
    ".scurbPopupLazyImage"
  );

bikeCleaningPopupLazyImages.forEach(function(image){
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

  const scurbBikeCleaningFaqQuestions =
    bikeCleaningPopup.querySelectorAll(
      ".scurbFaqQuestion"
    );

  scurbBikeCleaningFaqQuestions.forEach(function(question){

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

      bikeCleaningPopup
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
  .getElementById("closeBikeCleaningPopup")
  .addEventListener(
    "click",
    closeBikeCleaningPopup
  );
  const scurbBikeCleaningLanguageToggle =
    document.getElementById("scurbLanguageToggle");

  function scurbSetBikeCleaningPopupTexts(selector, texts){

    const elements =
      bikeCleaningPopup.querySelectorAll(selector);

    elements.forEach(function(element, index){

      if(texts[index] !== undefined){
        element.textContent = texts[index];
      }

    });

  }


  function changeBikeCleaningPopupLanguage(isTelugu){
    const language = isTelugu ? "te" : "en";

    const bikeCleaningPopupTranslations = {
      en: {

        detailsTitle: [
          "About this Service"
        ],

        subTitles: [
          "Clean and Fresh-Looking Bike"
        ],

        descriptions: [
          "Get your bike exterior cleaned to remove dust, mud, and everyday dirt from accessible body panels, wheels, seat, mirrors, and outer surfaces."
        ],

        compactTitles: [
          "How Long Does It Take?",
          "Includes"
        ],

        compactDescriptions: [
          "The estimated service duration depends on bike type, mud level, surface condition, and water availability."
        ],

        fridgeTypes: [
          "Scooter",
          "Commuter Bike",
          "Sports Bike"
        ],

        fridgeTimes: [
          "30 mins",
          "35 mins",
          "45 mins"
        ],

        includeItems: [
          "Exterior body-panel cleaning",
          "Seat and mirror wiping",
          "Wheel and mudguard cleaning",
          "Headlight and indicator exterior wiping",
          "Accessible engine-area exterior wipe",
          "Dust and light mud removal",
          "Final water rinse where suitable",
          "Dry wipe and clean finish",
          "Engine or mechanical repair",
          "Chain lubrication or servicing",
          "Scratch or rust removal",
          "Interior electrical cleaning",
          "Pressure washing sensitive components",
          "Fuel or oil stain treatment",
          "Removal of permanent paint marks"
        ],

        notIncludesTitle: [
          "Doesn't Include"
        ],

        processTitle: [
          "How Is It Done?"
        ],

        processItemTitles: [
          "Park the Bike Safely",
          "Remove Personal Items",
          "Inform About Damaged Parts",
          "Keep Water Access Ready",
          "Check the Bike After Cleaning"
        ],

        processItemTexts: [
          "Park the bike on a stable, open surface with enough space for safe cleaning.",
          "Remove helmets, documents, mobile holders, bags, and other personal items from the bike.",
          "Inform the professional about loose parts, electrical issues, scratches, or areas that must remain dry.",
          "Make sure water and drainage are available where washing is allowed.",
          "Inspect the cleaned body, wheels, mirrors, and seat before the professional completes the service."
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
          "Pricing depends on bike type, mud level, surface condition, and selected cleaning requirements.",
          "You can reach Scrub Mate support anytime through the Help section available in the app."
        ]

      },


      te: {

        detailsTitle: [
          "ఈ సేవ గురించి"
        ],

        subTitles: [
          "శుభ్రంగా మరియు తాజాగా కనిపించే బైక్"
        ],

        descriptions: [
          "బైక్ బాడీ ప్యానెల్స్, చక్రాలు, సీట్, అద్దాలు మరియు అందుబాటులో ఉన్న బయటి భాగాలపై ఉన్న దుమ్ము, బురద మరియు రోజువారీ మురికిని తొలగిస్తాము."
        ],

        compactTitles: [
          "ఈ సేవకు ఎంత సమయం పడుతుంది?",
          "సేవలో ఉండేవి"
        ],

        compactDescriptions: [
          "బైక్ రకం, బురద స్థాయి, ఉపరితల పరిస్థితి మరియు నీటి లభ్యతను బట్టి సేవకు పట్టే సమయం మారుతుంది."
        ],

        fridgeTypes: [
          "స్కూటర్",
          "కమ్యూటర్ బైక్",
          "స్పోర్ట్స్ బైక్"
        ],

        fridgeTimes: [
          "30 నిమిషాలు",
          "35 నిమిషాలు",
          "45 నిమిషాలు"
        ],

        includeItems: [
          "బైక్ బయటి బాడీ ప్యానెల్స్ శుభ్రత",
          "సీట్ మరియు అద్దాలు తుడవడం",
          "చక్రాలు మరియు మడ్‌గార్డ్ శుభ్రత",
          "హెడ్‌లైట్ మరియు ఇండికేటర్ బయటి భాగం తుడవడం",
          "అందుబాటులో ఉన్న ఇంజిన్ బయటి భాగం తుడవడం",
          "దుమ్ము మరియు తేలికపాటి బురద తొలగింపు",
          "అవసరాన్ని బట్టి చివరిగా నీటితో కడగడం",
          "పొడిగా తుడిచి శుభ్రంగా ఉంచడం",
          "ఇంజిన్ లేదా మెకానికల్ మరమ్మతు",
          "చైన్ లూబ్రికేషన్ లేదా సర్వీసింగ్",
          "స్క్రాచ్ లేదా తుప్పు తొలగింపు",
          "ఎలక్ట్రికల్ లోపలి భాగం శుభ్రత",
          "సున్నితమైన భాగాలపై ప్రెషర్ వాషింగ్",
          "ఇంధనం లేదా ఆయిల్ మరకల చికిత్స",
          "శాశ్వత పెయింట్ మరకల తొలగింపు"
        ],

        notIncludesTitle: [
          "సేవలో లేనివి"
        ],

        processTitle: [
          "ఈ సేవ ఎలా చేయబడుతుంది?"
        ],

        processItemTitles: [
          "బైక్‌ను సురక్షితంగా పార్క్ చేయండి",
          "వ్యక్తిగత వస్తువులను తొలగించండి",
          "పాడైన భాగాల గురించి తెలియజేయండి",
          "నీటి సదుపాయాన్ని సిద్ధంగా ఉంచండి",
          "క్లీనింగ్ తర్వాత బైక్‌ను పరిశీలించండి"
        ],

        processItemTexts: [
          "సురక్షితంగా శుభ్రం చేయడానికి తగిన స్థలం ఉన్న స్థిరమైన ప్రదేశంలో బైక్‌ను పార్క్ చేయండి.",
          "హెల్మెట్లు, పత్రాలు, మొబైల్ హోల్డర్లు, బ్యాగులు మరియు ఇతర వ్యక్తిగత వస్తువులను తొలగించండి.",
          "లూజ్ భాగాలు, ఎలక్ట్రికల్ సమస్యలు, స్క్రాచ్‌లు లేదా పొడిగా ఉంచాల్సిన ప్రాంతాల గురించి తెలియజేయండి.",
          "వాషింగ్ అనుమతించిన ప్రదేశంలో నీరు మరియు డ్రైనేజీ అందుబాటులో ఉండేలా చూడండి.",
          "సేవ పూర్తయ్యే ముందు శుభ్రం చేసిన బాడీ, చక్రాలు, అద్దాలు మరియు సీట్‌ను పరిశీలించండి."
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
          "బైక్ రకం, బురద స్థాయి, ఉపరితల పరిస్థితి మరియు ఎంచుకున్న క్లీనింగ్ అవసరాలను బట్టి ధర నిర్ణయించబడుతుంది.",
          "యాప్‌లో ఉన్న Help విభాగం ద్వారా మీరు ఎప్పుడైనా Scrub Mate సపోర్ట్‌ను సంప్రదించవచ్చు."
        ]

      }

    };


    const text =
  bikeCleaningPopupTranslations[language];

    scurbSetBikeCleaningPopupTexts(
      ".scurbServiceDetailsTitle",
      text.detailsTitle
    );

    scurbSetBikeCleaningPopupTexts(
      ".scurbServiceSubTitle",
      text.subTitles
    );

    scurbSetBikeCleaningPopupTexts(
      ".scurbServiceDescription",
      text.descriptions
    );

    scurbSetBikeCleaningPopupTexts(
      ".scurbServiceSubTitleCompact",
      text.compactTitles
    );

    scurbSetBikeCleaningPopupTexts(
      ".scurbServiceDescriptionCompact",
      text.compactDescriptions
    );

    scurbSetBikeCleaningPopupTexts(
      ".scurbFridgeCard h4",
      text.fridgeTypes
    );

    scurbSetBikeCleaningPopupTexts(
      ".scurbFridgeCard > span",
      text.fridgeTimes
    );

    scurbSetBikeCleaningPopupTexts(
      ".scurbServiceIncludeItem > span:last-child",
      text.includeItems
    );

    scurbSetBikeCleaningPopupTexts(
      ".scurbServiceNotIncludesTitle",
      text.notIncludesTitle
    );

    scurbSetBikeCleaningPopupTexts(
      ".scurbServiceHowDoneTitle",
      text.processTitle
    );

    scurbSetBikeCleaningPopupTexts(
      ".scurbHowDoneItemTitle",
      text.processItemTitles
    );

    scurbSetBikeCleaningPopupTexts(
      ".scurbHowDoneItemText",
      text.processItemTexts
    );

    scurbSetBikeCleaningPopupTexts(
      ".scurbServiceFaqTitle",
      text.faqTitle
    );

    scurbSetBikeCleaningPopupTexts(
      ".scurbFaqQuestion > span:first-child",
      text.faqQuestions
    );

    scurbSetBikeCleaningPopupTexts(
      ".scurbFaqAnswer",
      text.faqAnswers
    );

  }


  scurbBikeCleaningLanguageToggle.addEventListener(
    "change",
    function(){

     changeBikeCleaningPopupLanguage(
  this.checked
);

    }
  );
}


/* =========================================
   OPEN FROM CARD
========================================= */

document.addEventListener("DOMContentLoaded", function(){

 const bikeCleaningCard =
  document.getElementById("openBikeCleaningPopup");
  if(!bikeCleaningCard){
    console.error("Bike Cleaning card not found");
    return;
  }

  bikeCleaningCard.addEventListener("click", function(event){

    if(event.target.closest(".scurbServiceAddBtn")){
      return;
    }

    openBikeCleaningPopup();

  });

});



let scurbBikeCleaningTouchStartX = 0;
let scurbBikeCleaningTouchStartY = 0;
let scurbBikeCleaningTouchCurrentX = 0;
let scurbBikeCleaningSwipeSide = "";

function closeBikeCleaningPopup(){

  const popup =
    document.getElementById(
      "bikeCleaningPopup"
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
        "bikeCleaningPopup"
      );

    if(
      !popup ||
      !popup.innerHTML.trim()
    ){
      return;
    }

    const touch =
      event.touches[0];

    scurbBikeCleaningTouchStartX =
      touch.clientX;

    scurbBikeCleaningTouchStartY =
      touch.clientY;

    scurbBikeCleaningTouchCurrentX =
      touch.clientX;

    scurbBikeCleaningSwipeSide = "";

    const screenWidth =
      window.innerWidth;

    if(
      scurbBikeCleaningTouchStartX <= 35
    ){
      scurbBikeCleaningSwipeSide = "left";
    }
    else if(
      scurbBikeCleaningTouchStartX >=
      screenWidth - 35
    ){
      scurbBikeCleaningSwipeSide = "right";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchmove",
  function(event){

    if(!scurbBikeCleaningSwipeSide){
      return;
    }

    const touch =
      event.touches[0];

    scurbBikeCleaningTouchCurrentX =
      touch.clientX;

    const moveX =
      scurbBikeCleaningTouchCurrentX -
      scurbBikeCleaningTouchStartX;

    const moveY =
      touch.clientY -
      scurbBikeCleaningTouchStartY;

    if(
      Math.abs(moveY) >
      Math.abs(moveX)
    ){
      scurbBikeCleaningSwipeSide = "";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchend",
  function(){

    if(!scurbBikeCleaningSwipeSide){
      return;
    }

    const swipeDistance =
      scurbBikeCleaningTouchCurrentX -
      scurbBikeCleaningTouchStartX;

    const leftSwipePassed =
      scurbBikeCleaningSwipeSide === "left" &&
      swipeDistance >= 90;

    const rightSwipePassed =
      scurbBikeCleaningSwipeSide === "right" &&
      swipeDistance <= -90;

    if(
      leftSwipePassed ||
      rightSwipePassed
    ){
      closeBikeCleaningPopup();
    }

    scurbBikeCleaningSwipeSide = "";

  }
);


document.addEventListener(
  "touchcancel",
  function(){
    scurbBikeCleaningSwipeSide = "";
  }
);
