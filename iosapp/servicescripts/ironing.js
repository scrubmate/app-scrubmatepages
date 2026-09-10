/* =========================================
   COMMON SERVICE POPUP
========================================= */
const ironingPopup =
  document.getElementById("ironingPopup");

function openIroningPopup(){
  ironingPopup.innerHTML = `
    <div class="scurbServicePopup show">

      <div class="scurbServicePopupImage">

  <div class="scurbPopupImageShimmer"></div>

  <img
   id="ironingPopupHeroImage"
    class="scurbPopupLazyImage"
    data-src="mainn/iron.jpeg"
    alt="Ironing"
  >

  <div class="scurbServicePopupTop">

         <button
  type="button"
  class="scurbServicePopupIconBtn"
 id="closeIroningPopup"
  aria-label="Go back"
>
  <i class="fa-solid fa-chevron-left"></i>
</button>

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="shareIroningPopup"
  aria-label="Share"
>
  <i class="fa-solid fa-share-nodes"></i>
</button>

        </div>

           </div>

      <div class="scurbServiceHeaderRow">

  <div class="scurbServiceHeaderInfo">

    <h1 class="scurbServiceHeaderTitle">
  Ironing
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
  id="ironingBookBtn"
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
  Neatly Pressed Everyday Clothes
</h3>

<p class="scurbServiceDescription">
  Get everyday clothes ironed neatly at your home. The professional presses suitable garments, folds them carefully, and keeps the completed clothes organized.
</p>


<h3 class="scurbServiceSubTitleCompact">
  Includes
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Ironing suitable everyday clothes</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Shirts, trousers, kurtas, and simple garments</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Basic saree and dupatta ironing</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Careful folding after ironing</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Garment-wise heat adjustment</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Light wrinkle removal</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Organizing completed clothes</span>
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
  <span>Washing or stain removal</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Dry-clean-only garments</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Damaged or heat-sensitive clothes without instructions</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Heavy bridal or designer garments</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Leather, plastic, or unsafe fabrics</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Clothing repair or alteration</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Providing an iron or ironing table</span>
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
        Keep Clothes Clean and Dry
</h4>
      <p class="scurbHowDoneItemText">
        Keep all clothes washed, completely dry, and ready before the ironing service begins.
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
        Separate Delicate Fabrics
</h4>
      <p class="scurbHowDoneItemText">
        Separate delicate, printed, synthetic, or heat-sensitive garments from regular clothes.
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
        Provide Ironing Equipment
</h4>
      <p class="scurbHowDoneItemText">
        Keep a working iron, safe power socket, and suitable ironing surface available.
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
        Inform the professional about special folds, low-heat garments, or clothes that should not be ironed.
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
        Check Clothes After Ironing
</h4>
      <p class="scurbHowDoneItemText">
        Check the ironed clothes, folds, and garment count before the professional completes the service.
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
        Pricing depends on the selected duration, number of garments, fabric type, and ironing difficulty.
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
const ironingPopupLazyImages =
  ironingPopup.querySelectorAll(
    ".scurbPopupLazyImage"
  );

ironingPopupLazyImages.forEach(function(image){
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

  const scurbIroningFaqQuestions =
    ironingPopup.querySelectorAll(
      ".scurbFaqQuestion"
    );

  scurbIroningFaqQuestions.forEach(function(question){

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

      ironingPopup
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
  .getElementById("closeIroningPopup")
  .addEventListener(
    "click",
    closeIroningPopup
  );
  const scurbIroningLanguageToggle =
    document.getElementById("scurbLanguageToggle");

  function scurbSetIroningPopupTexts(selector, texts){

    const elements =
      ironingPopup.querySelectorAll(selector);

    elements.forEach(function(element, index){

      if(texts[index] !== undefined){
        element.textContent = texts[index];
      }

    });

  }


  function changeIroningPopupLanguage(isTelugu){
    const language = isTelugu ? "te" : "en";

    const ironingPopupTranslations = {
      en: {

        detailsTitle: [
          "About this Service"
        ],

        subTitles: [
          "Neatly Pressed Everyday Clothes"
        ],

        descriptions: [
          "Get everyday clothes ironed neatly at your home. The professional presses suitable garments, folds them carefully, and keeps the completed clothes organized."
        ],

        compactTitles: [
          "How Long Does It Take?",
          "Includes"
        ],

        compactDescriptions: [
          "The estimated service duration depends on the number of clothes, fabric type, garment condition, and selected time."
        ],

        fridgeTypes: [
          "Small Bundle",
          "Medium Bundle",
          "Large Bundle"
        ],

        fridgeTimes: [
          "45 mins",
          "60 mins",
          "90 mins"
        ],

        includeItems: [
          "Ironing suitable everyday clothes",
          "Shirts, trousers, kurtas, and simple garments",
          "Basic saree and dupatta ironing",
          "Careful folding after ironing",
          "Garment-wise heat adjustment",
          "Light wrinkle removal",
          "Organizing completed clothes",
          "Final garment count and check",
          "Washing or stain removal",
          "Dry-clean-only garments",
          "Damaged or heat-sensitive clothes without instructions",
          "Heavy bridal or designer garments",
          "Leather, plastic, or unsafe fabrics",
          "Clothing repair or alteration",
          "Providing an iron or ironing table"
        ],

        notIncludesTitle: [
          "Doesn't Include"
        ],

        processTitle: [
          "How Is It Done?"
        ],

        processItemTitles: [
          "Keep Clothes Clean and Dry",
          "Separate Delicate Fabrics",
          "Provide Ironing Equipment",
          "Explain Special Instructions",
          "Check Clothes After Ironing"
        ],

        processItemTexts: [
          "Keep all clothes washed, completely dry, and ready before the ironing service begins.",
          "Separate delicate, printed, synthetic, or heat-sensitive garments from regular clothes.",
          "Keep a working iron, safe power socket, and suitable ironing surface available.",
          "Inform the professional about special folds, low-heat garments, or clothes that should not be ironed.",
          "Check the ironed clothes, folds, and garment count before the professional completes the service."
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
          "No. Our professionals bring the essential supplies required to complete the service.",
          "Pricing depends on the selected duration, number of garments, fabric type, and ironing difficulty.",
          "You can reach Scrub Mate support anytime through the Help section available in the app."
        ]

      },


      te: {

        detailsTitle: [
          "ఈ సేవ గురించి"
        ],

        subTitles: [
          "చక్కగా ఇస్త్రీ చేసిన రోజువారీ దుస్తులు"
        ],

        descriptions: [
          "మీ ఇంటిలోనే రోజువారీ దుస్తులను చక్కగా ఇస్త్రీ చేస్తాము. సరైన దుస్తులను ఇస్త్రీ చేసి, జాగ్రత్తగా మడిచి, పూర్తయిన దుస్తులను క్రమంగా ఉంచుతాము."
        ],

        compactTitles: [
          "ఈ సేవకు ఎంత సమయం పడుతుంది?",
          "సేవలో ఉండేవి"
        ],

        compactDescriptions: [
          "దుస్తుల సంఖ్య, వస్త్ర రకం, దుస్తుల పరిస్థితి మరియు ఎంచుకున్న సమయాన్ని బట్టి సేవకు పట్టే సమయం మారుతుంది."
        ],

        fridgeTypes: [
          "చిన్న దుస్తుల కట్టు",
          "మధ్యస్థ దుస్తుల కట్టు",
          "పెద్ద దుస్తుల కట్టు"
        ],

        fridgeTimes: [
          "45 నిమిషాలు",
          "60 నిమిషాలు",
          "90 నిమిషాలు"
        ],

        includeItems: [
          "సరైన రోజువారీ దుస్తులను ఇస్త్రీ చేయడం",
          "షర్ట్లు, ప్యాంట్లు, కుర్తాలు మరియు సాధారణ దుస్తులు",
          "సాధారణ చీరలు మరియు దుపట్టాలు ఇస్త్రీ చేయడం",
          "ఇస్త్రీ తర్వాత జాగ్రత్తగా మడవడం",
          "దుస్తుల రకానికి అనుగుణంగా వేడి సర్దుబాటు",
          "తేలికపాటి ముడతల తొలగింపు",
          "పూర్తయిన దుస్తులను క్రమంగా ఉంచడం",
          "చివరిగా దుస్తుల లెక్క మరియు పరిశీలన",
          "దుస్తులు ఉతకడం లేదా మరకలు తొలగించడం",
          "డ్రై క్లీనింగ్ మాత్రమే అవసరమైన దుస్తులు",
          "సూచనలు లేని పాడైన లేదా వేడి తట్టుకోలేని దుస్తులు",
          "భారీ పెళ్లి లేదా డిజైనర్ దుస్తులు",
          "లెదర్, ప్లాస్టిక్ లేదా అసురక్షిత వస్త్రాలు",
          "దుస్తుల మరమ్మతు లేదా మార్పులు",
          "ఇస్త్రీ పెట్టె లేదా ఇస్త్రీ టేబుల్ అందించడం"
        ],

        notIncludesTitle: [
          "సేవలో లేనివి"
        ],

        processTitle: [
          "ఈ సేవ ఎలా చేయబడుతుంది?"
        ],

        processItemTitles: [
          "దుస్తులను శుభ్రంగా మరియు పొడిగా ఉంచండి",
          "సున్నితమైన వస్త్రాలను వేరుగా ఉంచండి",
          "ఇస్త్రీ పరికరాలను సిద్ధంగా ఉంచండి",
          "ప్రత్యేక సూచనలను వివరించండి",
          "ఇస్త్రీ తర్వాత దుస్తులను పరిశీలించండి"
        ],

        processItemTexts: [
          "ఇస్త్రీ సేవ ప్రారంభమయ్యే ముందు అన్ని దుస్తులను ఉతికి, పూర్తిగా ఆరబెట్టి సిద్ధంగా ఉంచండి.",
          "సున్నితమైన, ప్రింటెడ్, సింథటిక్ లేదా వేడి తట్టుకోలేని దుస్తులను సాధారణ దుస్తుల నుంచి వేరుగా ఉంచండి.",
          "పనిచేసే ఇస్త్రీ పెట్టె, సురక్షితమైన విద్యుత్ సాకెట్ మరియు సరైన ఇస్త్రీ ఉపరితలం అందుబాటులో ఉంచండి.",
          "ప్రత్యేక మడతలు, తక్కువ వేడి అవసరమైన దుస్తులు లేదా ఇస్త్రీ చేయకూడని దుస్తుల గురించి తెలియజేయండి.",
          "ప్రొఫెషనల్ సేవను పూర్తి చేసే ముందు ఇస్త్రీ చేసిన దుస్తులు, మడతలు మరియు దుస్తుల సంఖ్యను పరిశీలించండి."
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
          "లేదు. సేవకు అవసరమైన ప్రత్యేక సామగ్రి ఏదైనా ఉంటే సేవ వివరాల్లో ముందుగానే తెలియజేయబడుతుంది.",
          "ఎంచుకున్న సమయం, దుస్తుల సంఖ్య, వస్త్ర రకం మరియు ఇస్త్రీ కష్టతను బట్టి ధర నిర్ణయించబడుతుంది.",
          "యాప్‌లో ఉన్న Help విభాగం ద్వారా మీరు ఎప్పుడైనా Scrub Mate సపోర్ట్‌ను సంప్రదించవచ్చు."
        ]

      }

    };


    const text =
  ironingPopupTranslations[language];

    scurbSetIroningPopupTexts(
      ".scurbServiceDetailsTitle",
      text.detailsTitle
    );

    scurbSetIroningPopupTexts(
      ".scurbServiceSubTitle",
      text.subTitles
    );

    scurbSetIroningPopupTexts(
      ".scurbServiceDescription",
      text.descriptions
    );

    scurbSetIroningPopupTexts(
      ".scurbServiceSubTitleCompact",
      text.compactTitles
    );

    scurbSetIroningPopupTexts(
      ".scurbServiceDescriptionCompact",
      text.compactDescriptions
    );

    scurbSetIroningPopupTexts(
      ".scurbFridgeCard h4",
      text.fridgeTypes
    );

    scurbSetIroningPopupTexts(
      ".scurbFridgeCard > span",
      text.fridgeTimes
    );

    scurbSetIroningPopupTexts(
      ".scurbServiceIncludeItem > span:last-child",
      text.includeItems
    );

    scurbSetIroningPopupTexts(
      ".scurbServiceNotIncludesTitle",
      text.notIncludesTitle
    );

    scurbSetIroningPopupTexts(
      ".scurbServiceHowDoneTitle",
      text.processTitle
    );

    scurbSetIroningPopupTexts(
      ".scurbHowDoneItemTitle",
      text.processItemTitles
    );

    scurbSetIroningPopupTexts(
      ".scurbHowDoneItemText",
      text.processItemTexts
    );

    scurbSetIroningPopupTexts(
      ".scurbServiceFaqTitle",
      text.faqTitle
    );

    scurbSetIroningPopupTexts(
      ".scurbFaqQuestion > span:first-child",
      text.faqQuestions
    );

    scurbSetIroningPopupTexts(
      ".scurbFaqAnswer",
      text.faqAnswers
    );

  }


  scurbIroningLanguageToggle.addEventListener(
    "change",
    function(){

     changeIroningPopupLanguage(
  this.checked
);

    }
  );
}


/* =========================================
   OPEN FROM CARD
========================================= */

document.addEventListener("DOMContentLoaded", function(){

 const ironingCard =
  document.getElementById("openIroningPopup");
  if(!ironingCard){
    console.error("Ironing card not found");
    return;
  }

  ironingCard.addEventListener("click", function(event){

    if(event.target.closest(".scurbServiceAddBtn")){
      return;
    }

    openIroningPopup();

  });

});



let scurbIroningTouchStartX = 0;
let scurbIroningTouchStartY = 0;
let scurbIroningTouchCurrentX = 0;
let scurbIroningSwipeSide = "";

function closeIroningPopup(){

  const popup =
    document.getElementById(
      "ironingPopup"
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
        "ironingPopup"
      );

    if(
      !popup ||
      !popup.innerHTML.trim()
    ){
      return;
    }

    const touch =
      event.touches[0];

    scurbIroningTouchStartX =
      touch.clientX;

    scurbIroningTouchStartY =
      touch.clientY;

    scurbIroningTouchCurrentX =
      touch.clientX;

    scurbIroningSwipeSide = "";

    const screenWidth =
      window.innerWidth;

    if(
      scurbIroningTouchStartX <= 35
    ){
      scurbIroningSwipeSide = "left";
    }
    else if(
      scurbIroningTouchStartX >=
      screenWidth - 35
    ){
      scurbIroningSwipeSide = "right";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchmove",
  function(event){

    if(!scurbIroningSwipeSide){
      return;
    }

    const touch =
      event.touches[0];

    scurbIroningTouchCurrentX =
      touch.clientX;

    const moveX =
      scurbIroningTouchCurrentX -
      scurbIroningTouchStartX;

    const moveY =
      touch.clientY -
      scurbIroningTouchStartY;

    if(
      Math.abs(moveY) >
      Math.abs(moveX)
    ){
      scurbIroningSwipeSide = "";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchend",
  function(){

    if(!scurbIroningSwipeSide){
      return;
    }

    const swipeDistance =
      scurbIroningTouchCurrentX -
      scurbIroningTouchStartX;

    const leftSwipePassed =
      scurbIroningSwipeSide === "left" &&
      swipeDistance >= 90;

    const rightSwipePassed =
      scurbIroningSwipeSide === "right" &&
      swipeDistance <= -90;

    if(
      leftSwipePassed ||
      rightSwipePassed
    ){
      closeIroningPopup();
    }

    scurbIroningSwipeSide = "";

  }
);


document.addEventListener(
  "touchcancel",
  function(){
    scurbIroningSwipeSide = "";
  }
);
