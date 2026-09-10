/* =========================================
   COMMON SERVICE POPUP
========================================= */
const kitchenHelpPopup =
  document.getElementById("kitchenHelpPopup");

function openKitchenHelpPopup(){
  kitchenHelpPopup.innerHTML = `
    <div class="scurbServicePopup show">

      <div class="scurbServicePopupImage">

  <div class="scurbPopupImageShimmer"></div>

  <img
   id="kitchenHelpPopupHeroImage"
    class="scurbPopupLazyImage"
    data-src="mainn/kitchenhelp.jpeg"
    alt="Kitchen Help"
  >

  <div class="scurbServicePopupTop">

         <button
  type="button"
  class="scurbServicePopupIconBtn"
 id="closeKitchenHelpPopup"
  aria-label="Go back"
>
  <i class="fa-solid fa-chevron-left"></i>
</button>

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="shareKitchenHelpPopup"
  aria-label="Share"
>
  <i class="fa-solid fa-share-nodes"></i>
</button>

        </div>

           </div>

      <div class="scurbServiceHeaderRow">

  <div class="scurbServiceHeaderInfo">

    <h1 class="scurbServiceHeaderTitle">
  Kitchen Help
</h1>

    <div class="scurbServiceHeaderPrices">

      <span class="scurbServiceSalePrice">
        ₹100
      </span>

      <span class="scurbServiceStrikePrice">
        ₹200
      </span>

    </div>

  </div>

  <button
  type="button"
  class="scurbServiceHeaderBookBtn"
  id="kitchenHelpBookBtn"
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
  Reliable Help for Everyday Kitchen Tasks
</h3>

<p class="scurbServiceDescription">
  Get practical assistance with everyday kitchen work such as vegetable cutting, dish washing, counter wiping, ingredient arrangement, and keeping the cooking area clean and organized.
</p>


<h3 class="scurbServiceSubTitleCompact">
  Includes
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Vegetable washing and cutting assistance</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Dish washing and utensil arrangement</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Kitchen counter wiping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Sink-area cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Ingredient and container arrangement</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Light floor sweeping and mopping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Cleaning accessible cooking surfaces</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Final organization of the work area</span>
</div>


<h3 class="scurbServiceNotIncludesTitle">
  Doesn't Include
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Cooking complete meals independently</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Gas stove, chimney, or appliance repair</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Deep cleaning inside cabinets or appliances</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Buying groceries or ingredients</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Handling unsafe or spoiled food</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Heavy vessel cleaning with permanent stains</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Plumbing or electrical work</span>
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
        Keep Ingredients Ready
</h4>
      <p class="scurbHowDoneItemText">
        Keep the vegetables, ingredients, utensils, and containers required for the selected kitchen tasks ready.
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
        Explain the Required Tasks
</h4>
      <p class="scurbHowDoneItemText">
        Explain the kitchen-help tasks clearly to the professional before the service begins.
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
        Clear the Kitchen Workspace
</h4>
      <p class="scurbHowDoneItemText">
        Remove personal or unnecessary items so the professional can work safely and efficiently.
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
        Keep Water and Electricity Available
</h4>
      <p class="scurbHowDoneItemText">
        Make sure water, electricity, and the required kitchen facilities are available during the service.
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
        Check the Work Before Completion
</h4>
      <p class="scurbHowDoneItemText">
        Check the completed kitchen tasks and cleaned work area before the professional leaves.
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
        Pricing depends on the selected duration, amount of kitchen work, and tasks chosen at the time of booking.
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
const kitchenHelpPopupLazyImages =
  kitchenHelpPopup.querySelectorAll(
    ".scurbPopupLazyImage"
  );

kitchenHelpPopupLazyImages.forEach(function(image){
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

  const scurbKitchenHelpFaqQuestions =
    kitchenHelpPopup.querySelectorAll(
      ".scurbFaqQuestion"
    );

  scurbKitchenHelpFaqQuestions.forEach(function(question){

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

      kitchenHelpPopup
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
  .getElementById("closeKitchenHelpPopup")
  .addEventListener(
    "click",
    closeKitchenHelpPopup
  );
  const scurbKitchenHelpLanguageToggle =
    document.getElementById("scurbLanguageToggle");

  function scurbSetKitchenHelpPopupTexts(selector, texts){

    const elements =
      kitchenHelpPopup.querySelectorAll(selector);

    elements.forEach(function(element, index){

      if(texts[index] !== undefined){
        element.textContent = texts[index];
      }

    });

  }


  function changeKitchenHelpPopupLanguage(isTelugu){
    const language = isTelugu ? "te" : "en";

    const kitchenHelpPopupTranslations = {
      en: {

        detailsTitle: [
          "About this Service"
        ],

        subTitles: [
          "Reliable Help for Everyday Kitchen Tasks"
        ],

        descriptions: [
          "Get practical assistance with everyday kitchen work such as vegetable cutting, dish washing, counter wiping, ingredient arrangement, and keeping the cooking area clean and organized."
        ],

        compactTitles: [
          "How Long Does It Take?",
          "Includes"
        ],

        compactDescriptions: [
          "The estimated service duration depends on the selected time, amount of kitchen work, and kitchen condition."
        ],

        fridgeTypes: [
          "Basic Kitchen Help",
          "Standard Kitchen Help",
          "Extended Kitchen Help"
        ],

        fridgeTimes: [
          "60 mins",
          "90 mins",
          "120 mins"
        ],

        includeItems: [
          "Vegetable washing and cutting assistance",
          "Dish washing and utensil arrangement",
          "Kitchen counter wiping",
          "Sink-area cleaning",
          "Ingredient and container arrangement",
          "Light floor sweeping and mopping",
          "Cleaning accessible cooking surfaces",
          "Final organization of the work area",
          "Cooking complete meals independently",
          "Gas stove, chimney, or appliance repair",
          "Deep cleaning inside cabinets or appliances",
          "Buying groceries or ingredients",
          "Handling unsafe or spoiled food",
          "Heavy vessel cleaning with permanent stains",
          "Plumbing or electrical work"
        ],

        notIncludesTitle: [
          "Doesn't Include"
        ],

        processTitle: [
          "How Is It Done?"
        ],

        processItemTitles: [
          "Keep Ingredients Ready",
          "Explain the Required Tasks",
          "Clear the Kitchen Workspace",
          "Keep Water and Electricity Available",
          "Check the Work Before Completion"
        ],

        processItemTexts: [
          "Keep the vegetables, ingredients, utensils, and containers required for the selected kitchen tasks ready.",
          "Explain the kitchen-help tasks clearly to the professional before the service begins.",
          "Remove personal or unnecessary items so the professional can work safely and efficiently.",
          "Make sure water, electricity, and the required kitchen facilities are available during the service.",
          "Check the completed kitchen tasks and cleaned work area before the professional leaves."
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
          "Pricing depends on the selected duration, amount of kitchen work, and tasks chosen at the time of booking.",
          "You can reach Scrub Mate support anytime through the Help section available in the app."
        ]

      },


      te: {

        detailsTitle: [
          "ఈ సేవ గురించి"
        ],

        subTitles: [
          "రోజువారీ వంటగది పనులకు నమ్మకమైన సహాయం"
        ],

        descriptions: [
          "కూరగాయలు కట్ చేయడం, పాత్రలు కడగడం, కిచెన్ కౌంటర్ తుడవడం, పదార్థాలను సర్దడం మరియు వంటగదిని శుభ్రంగా, క్రమంగా ఉంచడం వంటి రోజువారీ పనుల్లో సహాయం అందిస్తాము."
        ],

        compactTitles: [
          "ఈ సేవకు ఎంత సమయం పడుతుంది?",
          "సేవలో ఉండేవి"
        ],

        compactDescriptions: [
          "ఎంచుకున్న సమయం, వంటగది పనుల పరిమాణం మరియు వంటగది పరిస్థితిని బట్టి సేవకు పట్టే సమయం మారుతుంది."
        ],

        fridgeTypes: [
          "ప్రాథమిక కిచెన్ సహాయం",
          "సాధారణ కిచెన్ సహాయం",
          "ఎక్కువ సమయ కిచెన్ సహాయం"
        ],

        fridgeTimes: [
          "60 నిమిషాలు",
          "90 నిమిషాలు",
          "120 నిమిషాలు"
        ],

        includeItems: [
          "కూరగాయలు కడిగి కట్ చేయడంలో సహాయం",
          "పాత్రలు కడిగి సర్దడం",
          "కిచెన్ కౌంటర్ తుడవడం",
          "సింక్ ప్రాంతం శుభ్రత",
          "పదార్థాలు మరియు డబ్బాలను సర్దడం",
          "తేలికగా నేల ఊడ్చి తుడవడం",
          "అందుబాటులో ఉన్న వంట ఉపరితలాల శుభ్రత",
          "చివరిగా పని ప్రాంతాన్ని క్రమంగా ఉంచడం",
          "పూర్తి భోజనం స్వతంత్రంగా వండడం",
          "గ్యాస్ స్టవ్, చిమ్నీ లేదా ఉపకరణాల మరమ్మతు",
          "క్యాబినెట్లు లేదా ఉపకరణాల లోపలి డీప్ క్లీనింగ్",
          "కిరాణా లేదా పదార్థాలు కొనడం",
          "పాడైన లేదా ప్రమాదకర ఆహారాన్ని నిర్వహించడం",
          "శాశ్వత మరకలున్న భారీ పాత్రల శుభ్రత",
          "ప్లంబింగ్ లేదా ఎలక్ట్రికల్ పని"
        ],

        notIncludesTitle: [
          "సేవలో లేనివి"
        ],

        processTitle: [
          "ఈ సేవ ఎలా చేయబడుతుంది?"
        ],

        processItemTitles: [
          "పదార్థాలను సిద్ధంగా ఉంచండి",
          "అవసరమైన పనులను వివరించండి",
          "కిచెన్ పని ప్రాంతాన్ని ఖాళీ చేయండి",
          "నీరు మరియు విద్యుత్ అందుబాటులో ఉంచండి",
          "సేవ పూర్తయ్యే ముందు పనిని పరిశీలించండి"
        ],

        processItemTexts: [
          "ఎంచుకున్న కిచెన్ పనులకు అవసరమైన కూరగాయలు, పదార్థాలు, పాత్రలు మరియు డబ్బాలను సిద్ధంగా ఉంచండి.",
          "సేవ ప్రారంభమయ్యే ముందు చేయాల్సిన కిచెన్ పనులను ప్రొఫెషనల్‌కు స్పష్టంగా వివరించండి.",
          "ప్రొఫెషనల్ సురక్షితంగా మరియు వేగంగా పని చేయడానికి అవసరం లేని వస్తువులను తొలగించండి.",
          "సేవ సమయంలో నీరు, విద్యుత్ మరియు అవసరమైన కిచెన్ సదుపాయాలు అందుబాటులో ఉండేలా చూడండి.",
          "ప్రొఫెషనల్ వెళ్లే ముందు పూర్తయిన పనులు మరియు శుభ్రం చేసిన ప్రాంతాన్ని పరిశీలించండి."
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
          "ఎంచుకున్న సమయం, వంటగది పనుల పరిమాణం మరియు బుకింగ్ సమయంలో ఎంచుకున్న పనులను బట్టి ధర నిర్ణయించబడుతుంది.",
          "యాప్‌లో ఉన్న Help విభాగం ద్వారా మీరు ఎప్పుడైనా Scrub Mate సపోర్ట్‌ను సంప్రదించవచ్చు."
        ]

      }

    };


    const text =
  kitchenHelpPopupTranslations[language];

    scurbSetKitchenHelpPopupTexts(
      ".scurbServiceDetailsTitle",
      text.detailsTitle
    );

    scurbSetKitchenHelpPopupTexts(
      ".scurbServiceSubTitle",
      text.subTitles
    );

    scurbSetKitchenHelpPopupTexts(
      ".scurbServiceDescription",
      text.descriptions
    );

    scurbSetKitchenHelpPopupTexts(
      ".scurbServiceSubTitleCompact",
      text.compactTitles
    );

    scurbSetKitchenHelpPopupTexts(
      ".scurbServiceDescriptionCompact",
      text.compactDescriptions
    );

    scurbSetKitchenHelpPopupTexts(
      ".scurbFridgeCard h4",
      text.fridgeTypes
    );

    scurbSetKitchenHelpPopupTexts(
      ".scurbFridgeCard > span",
      text.fridgeTimes
    );

    scurbSetKitchenHelpPopupTexts(
      ".scurbServiceIncludeItem > span:last-child",
      text.includeItems
    );

    scurbSetKitchenHelpPopupTexts(
      ".scurbServiceNotIncludesTitle",
      text.notIncludesTitle
    );

    scurbSetKitchenHelpPopupTexts(
      ".scurbServiceHowDoneTitle",
      text.processTitle
    );

    scurbSetKitchenHelpPopupTexts(
      ".scurbHowDoneItemTitle",
      text.processItemTitles
    );

    scurbSetKitchenHelpPopupTexts(
      ".scurbHowDoneItemText",
      text.processItemTexts
    );

    scurbSetKitchenHelpPopupTexts(
      ".scurbServiceFaqTitle",
      text.faqTitle
    );

    scurbSetKitchenHelpPopupTexts(
      ".scurbFaqQuestion > span:first-child",
      text.faqQuestions
    );

    scurbSetKitchenHelpPopupTexts(
      ".scurbFaqAnswer",
      text.faqAnswers
    );

  }


  scurbKitchenHelpLanguageToggle.addEventListener(
    "change",
    function(){

     changeKitchenHelpPopupLanguage(
  this.checked
);

    }
  );
}


/* =========================================
   OPEN FROM CARD
========================================= */

document.addEventListener("DOMContentLoaded", function(){

 const kitchenHelpCard =
  document.getElementById("openKitchenHelpPopup");
  if(!kitchenHelpCard){
    console.error("Kitchen Help card not found");
    return;
  }

  kitchenHelpCard.addEventListener("click", function(event){

    if(event.target.closest(".scurbServiceAddBtn")){
      return;
    }

    openKitchenHelpPopup();

  });

});



let scurbKitchenHelpTouchStartX = 0;
let scurbKitchenHelpTouchStartY = 0;
let scurbKitchenHelpTouchCurrentX = 0;
let scurbKitchenHelpSwipeSide = "";

function closeKitchenHelpPopup(){

  const popup =
    document.getElementById(
      "kitchenHelpPopup"
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
        "kitchenHelpPopup"
      );

    if(
      !popup ||
      !popup.innerHTML.trim()
    ){
      return;
    }

    const touch =
      event.touches[0];

    scurbKitchenHelpTouchStartX =
      touch.clientX;

    scurbKitchenHelpTouchStartY =
      touch.clientY;

    scurbKitchenHelpTouchCurrentX =
      touch.clientX;

    scurbKitchenHelpSwipeSide = "";

    const screenWidth =
      window.innerWidth;

    if(
      scurbKitchenHelpTouchStartX <= 35
    ){
      scurbKitchenHelpSwipeSide = "left";
    }
    else if(
      scurbKitchenHelpTouchStartX >=
      screenWidth - 35
    ){
      scurbKitchenHelpSwipeSide = "right";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchmove",
  function(event){

    if(!scurbKitchenHelpSwipeSide){
      return;
    }

    const touch =
      event.touches[0];

    scurbKitchenHelpTouchCurrentX =
      touch.clientX;

    const moveX =
      scurbKitchenHelpTouchCurrentX -
      scurbKitchenHelpTouchStartX;

    const moveY =
      touch.clientY -
      scurbKitchenHelpTouchStartY;

    if(
      Math.abs(moveY) >
      Math.abs(moveX)
    ){
      scurbKitchenHelpSwipeSide = "";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchend",
  function(){

    if(!scurbKitchenHelpSwipeSide){
      return;
    }

    const swipeDistance =
      scurbKitchenHelpTouchCurrentX -
      scurbKitchenHelpTouchStartX;

    const leftSwipePassed =
      scurbKitchenHelpSwipeSide === "left" &&
      swipeDistance >= 90;

    const rightSwipePassed =
      scurbKitchenHelpSwipeSide === "right" &&
      swipeDistance <= -90;

    if(
      leftSwipePassed ||
      rightSwipePassed
    ){
      closeKitchenHelpPopup();
    }

    scurbKitchenHelpSwipeSide = "";

  }
);


document.addEventListener(
  "touchcancel",
  function(){
    scurbKitchenHelpSwipeSide = "";
  }
);
