/* =========================================
   COMMON SERVICE POPUP
========================================= */

const windowCleaningPopup =
  document.getElementById("windowCleaningPopup");

function openWindowCleaningPopup(){

  windowCleaningPopup.innerHTML = `
    <div class="scurbServicePopup show">

      <div class="scurbServicePopupImage">

        <div class="scurbPopupImageShimmer"></div>

        <img
          id="windowCleaningPopupHeroImage"
          class="scurbPopupLazyImage"
          data-src="mainn/windowclean.jpeg"
          alt="Window Cleaning"
        >

        <div class="scurbServicePopupTop">

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="closeWindowCleaningPopup"
  aria-label="Go back"
>
  <i class="fa-solid fa-chevron-left"></i>
</button>

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="shareWindowCleaningPopup"
  aria-label="Share"
>
  <i class="fa-solid fa-share-nodes"></i>
</button>

        </div>

           </div>

      <div class="scurbServiceHeaderRow">

  <div class="scurbServiceHeaderInfo">

    <h1 class="scurbServiceHeaderTitle">
      Window Cleaning
    </h1>

    <div class="scurbServiceHeaderPrices">

      <span class="scurbServiceSalePrice">
        ₹50
      </span>

      <span class="scurbServiceStrikePrice">
        ₹80
      </span>

    </div>

  </div>

  <button
  type="button"
  class="scurbServiceHeaderBookBtn"
  id="windowCleaningBookBtn"
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
      id="scurbWindowLanguageToggle"
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
  Crystal-Clear, Spotless Windows
</h3>

<p class="scurbServiceDescription">
  Give your windows a detailed, streak-free clean. We remove dust, fingerprints, water marks, stains, and dirt from the glass, frames, tracks, and corners, leaving your windows clear, bright, and refreshed.
</p>

<h3 class="scurbServiceSubTitleCompact">
  How Long Does It Take?
</h3>

<p class="scurbServiceDescriptionCompact">
  The estimated service duration varies based on the number, size, height, and condition of your windows.
</p>

<div class="scurbFridgeTypes">

  <div class="scurbFridgeCard">
    <div class="scurbPopupSmallImageWrap">

      <div class="scurbPopupSmallImageShimmer"></div>

      <img class="scurbPopupLazyImage" data-src="popup/window1.png" alt="">

    </div>

    <h4>Small Window</h4>
    <span>30 mins</span>
  </div>

  <div class="scurbFridgeCard">
    <div class="scurbPopupSmallImageWrap">

      <div class="scurbPopupSmallImageShimmer"></div>

      <img class="scurbPopupLazyImage" data-src="popup/window2.png" alt="">

    </div>

    <h4>Medium Window</h4>
    <span>45 mins</span>
  </div>

  <div class="scurbFridgeCard">
    <div class="scurbPopupSmallImageWrap">

      <div class="scurbPopupSmallImageShimmer"></div>

      <img class="scurbPopupLazyImage" data-src="popup/window3.png" alt="">

    </div>

    <h4>Large Window</h4>
    <span>60 mins</span>
  </div>

</div>
<h3 class="scurbServiceSubTitleCompact">
  Includes
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Accessible window glass cleaned</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Dust, fingerprints, and water marks removed</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Window frames and edges cleaned</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Window tracks and grooves cleaned</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Corners and handles wiped</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Light stains and surface dirt removed</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Final streak-free glass wipe</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Area left neat after service</span>
</div>

<h3 class="scurbServiceNotIncludesTitle">
  Doesn't Include
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Removal of fixed grills, mesh, or fittings</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Repair of broken glass, frames, locks, or handles</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Unsafe or inaccessible window cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>High-rise exterior cleaning without safety access</span>
</div>
<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Removal of permanent scratches, paint, cement, or mineral damage</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Moving heavy furniture near the window</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Curtain, blind, or mosquito-mesh washing</span>
</div>
<h3 class="scurbServiceHowDoneTitle">
  How Is It Done?
</h3>


<div class="scurbHowDoneList">

  <div class="scurbHowDoneItem">

    <div class="scurbHowDoneImageWrap">


      <div class="scurbHowDoneImageShimmer"></div>


      <img class="scurbHowDoneImage scurbPopupLazyImage" data-src="popup/how.png" alt="">


    </div>

    <div class="scurbHowDoneContent">

      <h4 class="scurbHowDoneItemTitle">
        Clear the Window Area
      </h4>

      <p class="scurbHowDoneItemText">
        Move small items and decorations away from the window before the cleaning service begins.
      </p>

    </div>

  </div>


  <div class="scurbHowDoneItem">

    <div class="scurbHowDoneImageWrap">


      <div class="scurbHowDoneImageShimmer"></div>


      <img class="scurbHowDoneImage scurbPopupLazyImage" data-src="popup/how.png" alt="">


    </div>

    <div class="scurbHowDoneContent">

      <h4 class="scurbHowDoneItemTitle">
        Remove Curtains When Possible
      </h4>

      <p class="scurbHowDoneItemText">
        Remove curtains or open blinds when possible so the professional can reach the glass, frames, and tracks.
      </p>

    </div>

  </div>


  <div class="scurbHowDoneItem">

    <div class="scurbHowDoneImageWrap">


      <div class="scurbHowDoneImageShimmer"></div>


      <img class="scurbHowDoneImage scurbPopupLazyImage" data-src="popup/how.png" alt="">


    </div>

    <div class="scurbHowDoneContent">

      <h4 class="scurbHowDoneItemTitle">
        Report Tough Stains
      </h4>

      <p class="scurbHowDoneItemText">
        Inform the professional about paint, cement, hard-water marks, or other difficult stains.
      </p>

    </div>

  </div>


  <div class="scurbHowDoneItem">

    <div class="scurbHowDoneImageWrap">


      <div class="scurbHowDoneImageShimmer"></div>


      <img class="scurbHowDoneImage scurbPopupLazyImage" data-src="popup/how.png" alt="">


    </div>

    <div class="scurbHowDoneContent">

      <h4 class="scurbHowDoneItemTitle">
        Provide Safe Access
      </h4>

      <p class="scurbHowDoneItemText">
        Keep the window area safely accessible and move nearby obstacles when possible.
      </p>

    </div>

  </div>


  <div class="scurbHowDoneItem">

    <div class="scurbHowDoneImageWrap">


      <div class="scurbHowDoneImageShimmer"></div>


      <img class="scurbHowDoneImage scurbPopupLazyImage" data-src="popup/how.png" alt="">


    </div>

    <div class="scurbHowDoneContent">

      <h4 class="scurbHowDoneItemTitle">
        Check the Final Cleaning
      </h4>

      <p class="scurbHowDoneItemText">
        Stay available at the end of the service to inspect the cleaned windows.
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
        Pricing depends on the number, size, height, accessibility, and condition of the windows.
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


  const windowPopupLazyImages =
    windowCleaningPopup.querySelectorAll(
      ".scurbPopupLazyImage"
    );

  windowPopupLazyImages.forEach(function(image){

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


  const scurbWindowFaqQuestions =
    windowCleaningPopup.querySelectorAll(
      ".scurbFaqQuestion"
    );

  scurbWindowFaqQuestions.forEach(function(question){

    question.addEventListener("click", function(event){

      event.preventDefault();
      event.stopPropagation();

      const currentItem =
        this.closest(".scurbFaqItem");

      if(!currentItem){
        return;
      }

      const wasOpen =
        currentItem.classList.contains(
          "scurbFaqOpen"
        );

      windowCleaningPopup
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
    .getElementById("closeWindowCleaningPopup")
    .addEventListener(
      "click",
      closeWindowCleaningPopup
    );
  const scurbWindowLanguageToggle =
    document.getElementById("scurbWindowLanguageToggle");

  function scurbSetWindowPopupTexts(selector, texts){

    const elements =
      windowCleaningPopup.querySelectorAll(selector);

    elements.forEach(function(element, index){

      if(texts[index] !== undefined){
        element.textContent = texts[index];
      }

    });

  }


  function changeWindowPopupLanguage(isTelugu){

    const language = isTelugu ? "te" : "en";

    const windowPopupTranslations = {

      en: {

        detailsTitle: [
          "About this Service"
        ],

        subTitles: [
          "Crystal-Clear, Spotless Windows"
        ],

        descriptions: [
          "Give your windows a detailed, streak-free clean. We remove dust, fingerprints, water marks, stains, and dirt from the glass, frames, tracks, and corners, leaving your windows clear, bright, and refreshed."
        ],

        compactTitles: [
          "How Long Does It Take?",
          "Includes"
        ],

        compactDescriptions: [
          "The estimated service duration varies based on the number, size, height, and condition of your windows."
        ],

        fridgeTypes: [
          "Small Window",
          "Medium Window",
          "Large Window"
        ],

        fridgeTimes: [
          "30 mins",
          "45 mins",
          "60 mins"
        ],

        includeItems: [
          "Accessible window glass cleaned",
          "Dust, fingerprints, and water marks removed",
          "Window frames and edges cleaned",
          "Window tracks and grooves cleaned",
          "Corners and handles wiped",
          "Light stains and surface dirt removed",
          "Final streak-free glass wipe",
          "Area left neat after service",

          "Removal of fixed grills, mesh, or fittings",
          "Repair of broken glass, frames, locks, or handles",
          "Unsafe or inaccessible window cleaning",
          "High-rise exterior cleaning without safety access",
          "Removal of permanent scratches, paint, cement, or mineral damage",
          "Moving heavy furniture near the window",
          "Curtain, blind, or mosquito-mesh washing"
        ],

        notIncludesTitle: [
          "Doesn't Include"
        ],

        processTitle: [
          "How Is It Done?"
        ],

        processItemTitles: [
          "Clear the Window Area",
          "Remove Curtains When Possible",
          "Report Tough Stains",
          "Provide Safe Access",
          "Check the Final Cleaning"
        ],

        processItemTexts: [
          "Move small items and decorations away from the window before the cleaning service begins.",
          "Remove curtains or open blinds when possible so the professional can reach the glass, frames, and tracks.",
          "Inform the professional about paint, cement, hard-water marks, or other difficult stains.",
          "Keep the window area safely accessible and move nearby obstacles when possible.",
          "Stay available at the end of the service to inspect the cleaned windows."
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
          "Pricing depends on the number, size, height, accessibility, and condition of the windows.",
          "You can reach Scrub Mate support anytime through the Help section available in the app."
        ]

      },


      te: {

        detailsTitle: [
          "ఈ సేవ గురించి"
        ],

        subTitles: [
          "మెరిసే, మచ్చలేని కిటికీలు"
        ],

        descriptions: [
          "మీ కిటికీల గాజు, ఫ్రేములు, ట్రాక్‌లు మరియు మూలలను పూర్తిగా శుభ్రం చేస్తాము. దుమ్ము, వేలిముద్రలు, నీటి మరకలు మరియు మురికిని తొలగించి కిటికీలను మెరిసేలా ఉంచుతాము."
        ],

        compactTitles: [
          "ఈ సేవకు ఎంత సమయం పడుతుంది?",
          "సేవలో ఉండేవి"
        ],

        compactDescriptions: [
          "కిటికీల సంఖ్య, పరిమాణం, ఎత్తు మరియు పరిస్థితిని బట్టి సేవకు పట్టే సమయం మారుతుంది."
        ],

        fridgeTypes: [
          "చిన్న కిటికీ",
          "మధ్యస్థ కిటికీ",
          "పెద్ద కిటికీ"
        ],

        fridgeTimes: [
          "30 నిమిషాలు",
          "45 నిమిషాలు",
          "60 నిమిషాలు"
        ],

        includeItems: [
          "అందుబాటులో ఉన్న కిటికీ గాజు శుభ్రత",
          "దుమ్ము, వేలిముద్రలు మరియు నీటి మరకల తొలగింపు",
          "కిటికీ ఫ్రేములు మరియు అంచుల శుభ్రత",
          "కిటికీ ట్రాక్‌లు మరియు గాడుల శుభ్రత",
          "మూలలు మరియు హ్యాండిల్స్ తుడవడం",
          "తేలికపాటి మరకలు మరియు పైపొర మురికి తొలగింపు",
          "మరకలు లేకుండా చివరిగా గాజు తుడవడం",
          "సేవ తర్వాత ప్రదేశాన్ని శుభ్రంగా ఉంచడం",

          "స్థిరమైన గ్రిల్స్, మెష్ లేదా ఫిట్టింగ్స్ తొలగింపు",
          "పగిలిన గాజు, ఫ్రేములు, లాక్స్ లేదా హ్యాండిల్స్ మరమ్మతులు",
          "సురక్షితం కాని లేదా చేరుకోలేని కిటికీల శుభ్రత",
          "సేఫ్టీ యాక్సెస్ లేని ఎత్తైన బయటి కిటికీల శుభ్రత",
          "శాశ్వత గీతలు, పెయింట్, సిమెంట్ లేదా ఖనిజ మరకల తొలగింపు",
          "కిటికీ దగ్గర ఉన్న భారీ ఫర్నిచర్‌ను కదిలించడం",
          "కర్టెన్, బ్లైండ్ లేదా దోమల మెష్ వాషింగ్"
        ],

        notIncludesTitle: [
          "సేవలో లేనివి"
        ],

        processTitle: [
          "ఈ సేవ ఎలా చేయబడుతుంది?"
        ],

        processItemTitles: [
          "కిటికీ చుట్టూ ప్రదేశాన్ని ఖాళీ చేయండి",
          "సాధ్యమైతే కర్టెన్లు తొలగించండి",
          "కఠినమైన మరకల గురించి తెలియజేయండి",
          "సురక్షితంగా చేరుకునేలా ఉంచండి",
          "చివరి శుభ్రతను పరిశీలించండి"
        ],

        processItemTexts: [
          "సేవ ప్రారంభమయ్యే ముందు కిటికీ దగ్గర ఉన్న చిన్న వస్తువులు మరియు అలంకరణలను తొలగించండి.",
          "గాజు, ఫ్రేములు మరియు ట్రాక్‌లను చేరుకోవడానికి సాధ్యమైతే కర్టెన్లు తొలగించండి లేదా బ్లైండ్స్ తెరవండి.",
          "పెయింట్, సిమెంట్ లేదా హార్డ్ వాటర్ మరకలు ఉంటే ప్రొఫెషనల్‌కు తెలియజేయండి.",
          "చెత్త మరియు అవసరం లేని ఆహార పదార్థాలను తొలగించడానికి సురక్షితంగా చేరుకునేలా ఉంచండి.",
          "సేవ పూర్తయ్యాక శుభ్రం చేసిన కిటికీలను పరిశీలించండి."
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
          "కిటికీల సంఖ్య, పరిమాణం, ఎత్తు, అందుబాటు మరియు పరిస్థితిని బట్టి ధర నిర్ణయించబడుతుంది.",
          "యాప్‌లో ఉన్న Help విభాగం ద్వారా మీరు ఎప్పుడైనా Scrub Mate సపోర్ట్‌ను సంప్రదించవచ్చు."
        ]

      }

    };


    const text =
      windowPopupTranslations[language];


    scurbSetWindowPopupTexts(
      ".scurbServiceDetailsTitle",
      text.detailsTitle
    );

    scurbSetWindowPopupTexts(
      ".scurbServiceSubTitle",
      text.subTitles
    );

    scurbSetWindowPopupTexts(
      ".scurbServiceDescription",
      text.descriptions
    );

    scurbSetWindowPopupTexts(
      ".scurbServiceSubTitleCompact",
      text.compactTitles
    );

    scurbSetWindowPopupTexts(
      ".scurbServiceDescriptionCompact",
      text.compactDescriptions
    );

    scurbSetWindowPopupTexts(
      ".scurbFridgeCard h4",
      text.fridgeTypes
    );

    scurbSetWindowPopupTexts(
      ".scurbFridgeCard > span",
      text.fridgeTimes
    );

    scurbSetWindowPopupTexts(
      ".scurbServiceIncludeItem > span:last-child",
      text.includeItems
    );

    scurbSetWindowPopupTexts(
      ".scurbServiceNotIncludesTitle",
      text.notIncludesTitle
    );

    scurbSetWindowPopupTexts(
      ".scurbServiceHowDoneTitle",
      text.processTitle
    );

    scurbSetWindowPopupTexts(
      ".scurbHowDoneItemTitle",
      text.processItemTitles
    );

    scurbSetWindowPopupTexts(
      ".scurbHowDoneItemText",
      text.processItemTexts
    );

    scurbSetWindowPopupTexts(
      ".scurbServiceFaqTitle",
      text.faqTitle
    );

    scurbSetWindowPopupTexts(
      ".scurbFaqQuestion > span:first-child",
      text.faqQuestions
    );

    scurbSetWindowPopupTexts(
      ".scurbFaqAnswer",
      text.faqAnswers
    );

  }


  scurbWindowLanguageToggle.addEventListener(
    "change",
    function(){

      changeWindowPopupLanguage(
        this.checked
      );

    }
  );
}

/* =========================================
   OPEN FROM CARD
========================================= */

document.addEventListener("DOMContentLoaded", function(){

  const windowCard =
    document.getElementById("openWindowCleaningPopup");

  if(!windowCard){
    console.error("Window Cleaning card not found");
    return;
  }

  windowCard.addEventListener("click", function(event){

    if(event.target.closest(".scurbServiceAddBtn")){
      return;
    }

    openWindowCleaningPopup();

  });

});





let scurbWindowTouchStartX = 0;
let scurbWindowTouchStartY = 0;
let scurbWindowTouchCurrentX = 0;
let scurbWindowSwipeSide = "";

function closeWindowCleaningPopup(){

  const popup =
    document.getElementById("windowCleaningPopup");

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
      document.getElementById("windowCleaningPopup");

    if(
      !popup ||
      !popup.innerHTML.trim()
    ){
      return;
    }

    const touch = event.touches[0];

    scurbWindowTouchStartX = touch.clientX;
    scurbWindowTouchStartY = touch.clientY;
    scurbWindowTouchCurrentX = touch.clientX;
    scurbWindowSwipeSide = "";

    const screenWidth =
      window.innerWidth;

    /* Started from left edge */
    if(scurbWindowTouchStartX <= 35){
      scurbWindowSwipeSide = "left";
    }

    /* Started from right edge */
    else if(
      scurbWindowTouchStartX >=
      screenWidth - 35
    ){
      scurbWindowSwipeSide = "right";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchmove",
  function(event){

    if(!scurbWindowSwipeSide) return;

    const touch = event.touches[0];

    scurbWindowTouchCurrentX =
      touch.clientX;

    const moveX =
      scurbWindowTouchCurrentX -
      scurbWindowTouchStartX;

    const moveY =
      touch.clientY -
      scurbWindowTouchStartY;

    /* Cancel when vertically scrolling */
    if(
      Math.abs(moveY) >
      Math.abs(moveX)
    ){
      scurbWindowSwipeSide = "";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchend",
  function(){

    if(!scurbWindowSwipeSide) return;

    const swipeDistance =
      scurbWindowTouchCurrentX -
      scurbWindowTouchStartX;

    /* Left edge → swipe right */
    const leftSwipePassed =
      scurbWindowSwipeSide === "left" &&
      swipeDistance >= 90;

    /* Right edge → swipe left */
    const rightSwipePassed =
      scurbWindowSwipeSide === "right" &&
      swipeDistance <= -90;

    if(
      leftSwipePassed ||
      rightSwipePassed
    ){
      closeWindowCleaningPopup();
    }

    scurbWindowSwipeSide = "";

  }
);


document.addEventListener(
  "touchcancel",
  function(){
    scurbWindowSwipeSide = "";
  }
);