/* =========================================
   COMMON SERVICE POPUP
========================================= */

const acCleaningPopup =
  document.getElementById("acCleaningPopup");

function openAcCleaningPopup(){

  acCleaningPopup.innerHTML = `
    <div class="scurbServicePopup show">

      <div class="scurbServicePopupImage">

  <div class="scurbPopupImageShimmer"></div>

  <img
    id="acPopupHeroImage"
    class="scurbPopupLazyImage"
    data-src="mainn/ac.jpeg"
    alt="AC Cleaning"
  >

  <div class="scurbServicePopupTop">

         <button
  type="button"
  class="scurbServicePopupIconBtn"
 id="closeAcCleaningPopup"
  aria-label="Go back"
>
  <i class="fa-solid fa-chevron-left"></i>
</button>

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="shareAcCleaningPopup"
  aria-label="Share"
>
  <i class="fa-solid fa-share-nodes"></i>
</button>

        </div>

           </div>

      <div class="scurbServiceHeaderRow">

  <div class="scurbServiceHeaderInfo">

    <h1 class="scurbServiceHeaderTitle">
      AC Cleaning
    </h1>

    <div class="scurbServiceHeaderPrices">

      <span class="scurbServiceSalePrice">
        ₹150
      </span>

      <span class="scurbServiceStrikePrice">
        ₹200
      </span>

    </div>

  </div>

 <button
  type="button"
  class="scurbServiceHeaderBookBtn"
  id="acCleaningBookBtn"
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
  Fresh & Hygienic AC
</h3>

<p class="scurbServiceDescription">
  Get your AC thoroughly cleaned for a brighter and clearer home. We remove dust, fingerprints, water marks, stains, and dirt from AC glass, frames, tracks, and accessible corners.
</p>


<h3 class="scurbServiceSubTitleCompact">
  Includes
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>AC glass cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Dust and fingerprint removal</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>AC frame wiping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>AC track cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Water-mark removal</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Corner and edge cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Inside and accessible outside glass cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Final dry wipe for a clear finish</span>
</div>

<h3 class="scurbServiceNotIncludesTitle">
  Doesn't Include
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>AC repair or glass replacement</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Cleaning AC at unsafe heights</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Removal of grills or fixed fittings</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Paint, cement, or permanent stain removal</span>
</div>
<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Curtain washing or dry cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Balcony or full-room cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Exterior cleaning requiring ladders or special equipment</span>
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
        Move Items Near the AC
      </h4>

      <p class="scurbHowDoneItemText">
        Move curtains, plants, furniture, and personal items away from the AC before cleaning begins.
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
        Keep the AC Area Accessible
      </h4>

      <p class="scurbHowDoneItemText">
        Keep enough space near the AC so the professional can clean the glass, frame, and tracks safely.
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
        Inform About Heavy Stains
      </h4>

      <p class="scurbHowDoneItemText">
        Inform the professional about paint, cement, stickers, or stubborn marks before the service begins.
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
        Keep Water Access Ready
      </h4>

      <p class="scurbHowDoneItemText">
        Make sure water and electricity are available when required for the cleaning service.
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
        Check the AC After Cleaning
      </h4>

      <p class="scurbHowDoneItemText">
        Inspect the cleaned glass, frames, and tracks before the professional completes the service.
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
        Pricing depends on the number, size, condition, and accessibility of the AC selected for cleaning.
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
const acPopupLazyImages =
  acCleaningPopup.querySelectorAll(
    ".scurbPopupLazyImage"
  );

acPopupLazyImages.forEach(function(image){

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
 document
  .getElementById("closeAcCleaningPopup")
  .addEventListener(
    "click",
    closeAcCleaningPopup
  );
  const scurbACLanguageToggle =
    document.getElementById("scurbLanguageToggle");

  function scurbSetACPopupTexts(selector, texts){

    const elements =
      acCleaningPopup.querySelectorAll(selector);

    elements.forEach(function(element, index){

      if(texts[index] !== undefined){
        element.textContent = texts[index];
      }

    });

  }


  function changeACPopupLanguage(isTelugu){
    const language = isTelugu ? "te" : "en";

    const acPopupTranslations = {
      en: {

        detailsTitle: [
          "About this Service"
        ],

        subTitles: [
          "Fresh & Hygienic AC"
        ],

        descriptions: [
          "Get your AC thoroughly cleaned for a brighter and clearer home. We remove dust, fingerprints, water marks, stains, and dirt from AC glass, frames, tracks, and accessible corners."
        ],

        compactTitles: [
          "How Long Does It Take?",
          "Includes"
        ],

        compactDescriptions: [
          "The estimated service duration depends on the number, size, condition, and accessibility of the AC."
        ],

        fridgeTypes: [
          "Small AC",
          "Medium AC",
          "Large AC"
        ],

        fridgeTimes: [
          "120 mins",
          "120 mins",
          "120 mins"
        ],

        includeItems: [
          "AC glass cleaning",
          "Dust and fingerprint removal",
          "AC frame wiping",
          "AC track cleaning",
          "Water-mark removal",
          "Corner and edge cleaning",
          "Inside and accessible outside glass cleaning",
          "Final dry wipe for a clear finish",

          "AC repair or glass replacement",
          "Cleaning AC at unsafe heights",
          "Removal of grills or fixed fittings",
          "Paint, cement, or permanent stain removal",
          "Curtain washing or dry cleaning",
          "Balcony or full-room cleaning",
          "Exterior cleaning requiring ladders or special equipment"
        ],

        notIncludesTitle: [
          "Doesn't Include"
        ],

        processTitle: [
          "How Is It Done?"
        ],

        processItemTitles: [
          "Move Items Near the AC",
          "Keep the AC Area Accessible",
          "Inform About Heavy Stains",
          "Keep Water Access Ready",
          "Check the AC After Cleaning"
        ],

        processItemTexts: [
          "Move curtains, plants, furniture, and personal items away from the AC before cleaning begins.",
          "Keep enough space near the AC so the professional can clean the glass, frame, and tracks safely.",
          "Inform the professional about paint, cement, stickers, or stubborn marks before the service begins.",
          "Make sure water and electricity are available when required for the cleaning service.",
          "Inspect the cleaned glass, frames, and tracks before the professional completes the service."
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
          "Pricing depends on the number, size, condition, and accessibility of the AC selected for cleaning.",
          "You can reach Scrub Mate support anytime through the Help section available in the app."
        ]

      },


      te: {

        detailsTitle: [
          "ఈ సేవ గురించి"
        ],

        subTitles: [
          "మెరిసేలా, స్పష్టంగా ఉండే కిటికీలు"
        ],

        descriptions: [
          "మీ ఇంటి కిటికీలను లోపల నుంచి మరియు అందుబాటులో ఉన్న బయట భాగం వరకు పూర్తిగా శుభ్రం చేస్తాము. గాజు, ఫ్రేమ్‌లు, ట్రాక్‌లు మరియు మూలల్లో ఉన్న దుమ్ము, వేలిముద్రలు, నీటి మరకలు మరియు మురికిని తొలగిస్తాము."
        ],

        compactTitles: [
          "ఈ సేవకు ఎంత సమయం పడుతుంది?",
          "సేవలో ఉండేవి"
        ],

        compactDescriptions: [
          "కిటికీల సంఖ్య, పరిమాణం, పరిస్థితి మరియు అందుబాటును బట్టి సేవకు పట్టే సమయం మారుతుంది."
        ],

        fridgeTypes: [
          "చిన్న కిటికీ",
          "మధ్యస్థ కిటికీ",
          "పెద్ద కిటికీ"
        ],

        fridgeTimes: [
          "45 నిమిషాలు",
          "60 నిమిషాలు",
          "90 నిమిషాలు"
        ],

        includeItems: [
          "కిటికీ గాజు శుభ్రత",
          "దుమ్ము మరియు వేలిముద్రల తొలగింపు",
          "కిటికీ ఫ్రేమ్‌లను తుడవడం",
          "కిటికీ ట్రాక్‌ల శుభ్రత",
          "నీటి మరకల తొలగింపు",
          "మూలలు మరియు అంచుల శుభ్రత",
          "లోపలి మరియు అందుబాటులో ఉన్న బయట గాజు శుభ్రత",
          "చివరిగా పొడిగా తుడిచి స్పష్టంగా ఉంచడం",

          "కిటికీ మరమ్మత్తు లేదా గాజు మార్పు",
          "ప్రమాదకరమైన ఎత్తులో ఉన్న కిటికీల శుభ్రత",
          "గ్రిల్స్ లేదా స్థిరమైన ఫిట్టింగ్స్ తొలగింపు",
          "పెయింట్, సిమెంట్ లేదా శాశ్వత మరకల తొలగింపు",
          "కర్టెన్ల వాషింగ్ లేదా డ్రై క్లీనింగ్",
          "బాల్కనీ లేదా పూర్తి గది శుభ్రత",
          "నిచ్చెన లేదా ప్రత్యేక పరికరాలు అవసరమైన బయట భాగం శుభ్రత"
        ],

        notIncludesTitle: [
          "సేవలో లేనివి"
        ],

        processTitle: [
          "ఈ సేవ ఎలా చేయబడుతుంది?"
        ],

        processItemTitles: [
          "కిటికీ దగ్గర ఉన్న వస్తువులను తొలగించండి",
          "కిటికీ ప్రాంతాన్ని అందుబాటులో ఉంచండి",
          "కఠినమైన మరకల గురించి తెలియజేయండి",
          "నీటి సౌకర్యాన్ని సిద్ధంగా ఉంచండి",
          "క్లీనింగ్ తర్వాత కిటికీలను పరిశీలించండి"
        ],

        processItemTexts: [
          "క్లీనింగ్ ప్రారంభమయ్యే ముందు కర్టెన్లు, మొక్కలు, ఫర్నిచర్ మరియు వ్యక్తిగత వస్తువులను కిటికీ దగ్గర నుంచి తొలగించండి.",
          "గాజు, ఫ్రేమ్‌లు మరియు ట్రాక్‌లను సురక్షితంగా శుభ్రం చేయడానికి కిటికీ దగ్గర సరిపడా ఖాళీ ఉంచండి.",
          "పెయింట్, సిమెంట్, స్టిక్కర్లు లేదా కఠినమైన మరకలు ఉంటే సేవ ప్రారంభానికి ముందు ప్రొఫెషనల్‌కు తెలియజేయండి.",
          "క్లీనింగ్ సేవకు అవసరమైనప్పుడు నీరు మరియు విద్యుత్ అందుబాటులో ఉండేలా చూసుకోండి.",
          "సేవ పూర్తయ్యే ముందు శుభ్రం చేసిన గాజు, ఫ్రేమ్‌లు మరియు ట్రాక్‌లను పరిశీలించండి."
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
          "కిటికీల సంఖ్య, పరిమాణం, పరిస్థితి మరియు అందుబాటును బట్టి సేవ ధర నిర్ణయించబడుతుంది.",
          "యాప్‌లో ఉన్న Help విభాగం ద్వారా మీరు ఎప్పుడైనా Scrub Mate సపోర్ట్‌ను సంప్రదించవచ్చు."
        ]

      }

    };


    const text =
  acPopupTranslations[language];

    scurbSetACPopupTexts(
      ".scurbServiceDetailsTitle",
      text.detailsTitle
    );

    scurbSetACPopupTexts(
      ".scurbServiceSubTitle",
      text.subTitles
    );

    scurbSetACPopupTexts(
      ".scurbServiceDescription",
      text.descriptions
    );

   

    scurbSetACPopupTexts(
      ".scurbServiceIncludeItem > span:last-child",
      text.includeItems
    );

    scurbSetACPopupTexts(
      ".scurbServiceNotIncludesTitle",
      text.notIncludesTitle
    );

    scurbSetACPopupTexts(
      ".scurbServiceHowDoneTitle",
      text.processTitle
    );

    scurbSetACPopupTexts(
      ".scurbHowDoneItemTitle",
      text.processItemTitles
    );

    scurbSetACPopupTexts(
      ".scurbHowDoneItemText",
      text.processItemTexts
    );

    scurbSetACPopupTexts(
      ".scurbServiceFaqTitle",
      text.faqTitle
    );

    scurbSetACPopupTexts(
      ".scurbFaqQuestion > span:first-child",
      text.faqQuestions
    );

    scurbSetACPopupTexts(
      ".scurbFaqAnswer",
      text.faqAnswers
    );

  }


  scurbACLanguageToggle.addEventListener(
    "change",
    function(){

     changeACPopupLanguage(
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

  const ACCard =
  document.getElementById("openAcCleaningPopup");
  if(!ACCard){
    console.error("AC cleaning card not found");
    return;
  }

  ACCard.addEventListener("click", function(event){

    if(event.target.closest(".scurbServiceAddBtn")){
      return;
    }

    openAcCleaningPopup();

  });

});

/* =========================================
   FAQ OPEN AND CLOSE
========================================= */

const scurbACFaqQuestions =
  acCleaningPopup.querySelectorAll(
    ".scurbFaqQuestion"
  );

scurbACFaqQuestions.forEach(function(question){

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

    acCleaningPopup
      .querySelectorAll(".scurbFaqItem")
      .forEach(function(item){

        item.classList.remove(
          "scurbFaqOpen"
        );

      });

    if(!wasOpen){
      currentItem.classList.add(
        "scurbFaqOpen"
      );
    }

  });

});

let scurbACTouchStartX = 0;
let scurbACTouchStartY = 0;
let scurbACTouchCurrentX = 0;
let scurbACSwipeSide = "";

function closeAcCleaningPopup(){

  const popup =
    document.getElementById("acCleaningPopup");

  if(!popup || !popup.innerHTML.trim()) return;

  const popupPage =
    popup.querySelector(".scurbServicePopup");

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
      document.getElementById("acCleaningPopup");

    if(
      !popup ||
      !popup.innerHTML.trim()
    ){
      return;
    }

    const touch = event.touches[0];

    scurbACTouchStartX = touch.clientX;
    scurbACTouchStartY = touch.clientY;
    scurbACTouchCurrentX = touch.clientX;
    scurbACSwipeSide = "";

  const screenWidth =
  window.innerWidth;
    if(scurbACTouchStartX <= 35){
      scurbACSwipeSide = "left";
    }
    else if(
      scurbACTouchStartX >=
      screenWidth - 35
    ){
      scurbACSwipeSide = "right";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchmove",
  function(event){

    if(!scurbACSwipeSide) return;

    const touch = event.touches[0];

    scurbACTouchCurrentX =
      touch.clientX;

    const moveX =
      scurbACTouchCurrentX -
      scurbACTouchStartX;

    const moveY =
      touch.clientY -
      scurbACTouchStartY;

    if(
      Math.abs(moveY) >
      Math.abs(moveX)
    ){
      scurbACSwipeSide = "";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchend",
  function(){

    if(!scurbACSwipeSide) return;

    const swipeDistance =
      scurbACTouchCurrentX -
      scurbACTouchStartX;

    const leftSwipePassed =
      scurbACSwipeSide === "left" &&
      swipeDistance >= 90;

    const rightSwipePassed =
      scurbACSwipeSide === "right" &&
      swipeDistance <= -90;

    if(
      leftSwipePassed ||
      rightSwipePassed
    ){
      closeAcCleaningPopup();
    }

    scurbACSwipeSide = "";

  }
);


document.addEventListener(
  "touchcancel",
  function(){
    scurbACSwipeSide = "";
  }
);