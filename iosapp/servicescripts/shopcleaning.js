/* =========================================
   COMMON SERVICE POPUP
========================================= */
const shopCleaningPopup =
  document.getElementById("shopCleaningPopup");

function openShopCleaningPopup(){
  shopCleaningPopup.innerHTML = `
    <div class="scurbServicePopup show">

      <div class="scurbServicePopupImage">

  <div class="scurbPopupImageShimmer"></div>

  <img
   id="shopCleaningPopupHeroImage"
    class="scurbPopupLazyImage"
    data-src="mainn/shopp.jpeg"
    alt="Shop Cleaning"
  >

  <div class="scurbServicePopupTop">

         <button
  type="button"
  class="scurbServicePopupIconBtn"
 id="closeShopCleaningPopup"
  aria-label="Go back"
>
  <i class="fa-solid fa-chevron-left"></i>
</button>

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="shareShopCleaningPopup"
  aria-label="Share"
>
  <i class="fa-solid fa-share-nodes"></i>
</button>

        </div>

           </div>

      <div class="scurbServiceHeaderRow">

  <div class="scurbServiceHeaderInfo">

    <h1 class="scurbServiceHeaderTitle">
  Shop Cleaning
</h1>

    <div class="scurbServiceHeaderPrices">

      <span class="scurbServiceSalePrice">
        ₹120
      </span>

      <span class="scurbServiceStrikePrice">
        ₹200
      </span>

    </div>

  </div>

<button
  type="button"
  class="scurbServiceHeaderBookBtn"
  id="shopCleaningBookBtn"
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
  Clean and Presentable Shop Space
</h3>

<p class="scurbServiceDescription">
  Get your shop cleaned with dusting, counter wiping, accessible shelf cleaning, floor sweeping, mopping, and basic waste collection for a neat customer-ready space.
</p>


<h3 class="scurbServiceSubTitleCompact">
  Includes
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Counter and desk wiping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Accessible shelf exterior cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Door and handle wiping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Floor sweeping and mopping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Dust removal from reachable surfaces</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Basic waste collection</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Cleaning accessible corners</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Final shop-area check</span>
</div>


<h3 class="scurbServiceNotIncludesTitle">
  Doesn't Include
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Product stock arrangement or counting</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Moving heavy shelves or machinery</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>High-glass exterior cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Pest control or chemical treatment</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Electrical or equipment repair</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Removal of construction waste</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Cleaning hazardous substances</span>
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
        Secure Cash and Valuables
</h4>
      <p class="scurbHowDoneItemText">
        Secure cash, documents, electronic devices, and valuable products before cleaning begins.
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
        Clear the Shop Floor
</h4>
      <p class="scurbHowDoneItemText">
        Remove cartons, loose stock, and obstacles from the shop floor wherever possible.
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
        Protect Product Stock
</h4>
      <p class="scurbHowDoneItemText">
        Cover or move products that may be affected by dust, water, or cleaning activity.
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
        Inform About Restricted Areas
</h4>
      <p class="scurbHowDoneItemText">
        Inform the professional about restricted areas, delicate displays, or surfaces requiring special care.
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
        Check the Shop After Cleaning
</h4>
      <p class="scurbHowDoneItemText">
        Inspect the cleaned counters, shelves, floor, and customer area before the service is completed.
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
        Pricing depends on shop size, number of shelves, floor condition, and selected service duration.
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
const shopCleaningPopupLazyImages =
  shopCleaningPopup.querySelectorAll(
    ".scurbPopupLazyImage"
  );

shopCleaningPopupLazyImages.forEach(function(image){
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

  const scurbShopCleaningFaqQuestions =
    shopCleaningPopup.querySelectorAll(
      ".scurbFaqQuestion"
    );

  scurbShopCleaningFaqQuestions.forEach(function(question){

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

      shopCleaningPopup
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
  .getElementById("closeShopCleaningPopup")
  .addEventListener(
    "click",
    closeShopCleaningPopup
  );
  const scurbShopCleaningLanguageToggle =
    document.getElementById("scurbLanguageToggle");

  function scurbSetShopCleaningPopupTexts(selector, texts){

    const elements =
      shopCleaningPopup.querySelectorAll(selector);

    elements.forEach(function(element, index){

      if(texts[index] !== undefined){
        element.textContent = texts[index];
      }

    });

  }


  function changeShopCleaningPopupLanguage(isTelugu){
    const language = isTelugu ? "te" : "en";

    const shopCleaningPopupTranslations = {
      en: {

        detailsTitle: [
          "About this Service"
        ],

        subTitles: [
          "Clean and Presentable Shop Space"
        ],

        descriptions: [
          "Get your shop cleaned with dusting, counter wiping, accessible shelf cleaning, floor sweeping, mopping, and basic waste collection for a neat customer-ready space."
        ],

        compactTitles: [
          "How Long Does It Take?",
          "Includes"
        ],

        compactDescriptions: [
          "The estimated service duration depends on shop size, number of shelves, floor condition, and level of dirt."
        ],

        fridgeTypes: [
          "Small Shop",
          "Medium Shop",
          "Large Shop"
        ],

        fridgeTimes: [
          "60 mins",
          "90 mins",
          "120 mins"
        ],

        includeItems: [
          "Counter and desk wiping",
          "Accessible shelf exterior cleaning",
          "Door and handle wiping",
          "Floor sweeping and mopping",
          "Dust removal from reachable surfaces",
          "Basic waste collection",
          "Cleaning accessible corners",
          "Final shop-area check",
          "Product stock arrangement or counting",
          "Moving heavy shelves or machinery",
          "High-glass exterior cleaning",
          "Pest control or chemical treatment",
          "Electrical or equipment repair",
          "Removal of construction waste",
          "Cleaning hazardous substances"
        ],

        notIncludesTitle: [
          "Doesn't Include"
        ],

        processTitle: [
          "How Is It Done?"
        ],

        processItemTitles: [
          "Secure Cash and Valuables",
          "Clear the Shop Floor",
          "Protect Product Stock",
          "Inform About Restricted Areas",
          "Check the Shop After Cleaning"
        ],

        processItemTexts: [
          "Secure cash, documents, electronic devices, and valuable products before cleaning begins.",
          "Remove cartons, loose stock, and obstacles from the shop floor wherever possible.",
          "Cover or move products that may be affected by dust, water, or cleaning activity.",
          "Inform the professional about restricted areas, delicate displays, or surfaces requiring special care.",
          "Inspect the cleaned counters, shelves, floor, and customer area before the service is completed."
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
          "Pricing depends on shop size, number of shelves, floor condition, and selected service duration.",
          "You can reach Scrub Mate support anytime through the Help section available in the app."
        ]

      },


      te: {

        detailsTitle: [
          "ఈ సేవ గురించి"
        ],

        subTitles: [
          "శుభ్రంగా మరియు ఆకర్షణీయంగా ఉండే షాప్"
        ],

        descriptions: [
          "కౌంటర్లు తుడవడం, అందుబాటులో ఉన్న షెల్ఫ్‌లు శుభ్రం చేయడం, నేల ఊడ్చి తుడవడం మరియు సాధారణ వ్యర్థాలను సేకరించడం ద్వారా మీ షాప్‌ను కస్టమర్లకు సిద్ధంగా ఉంచుతాము."
        ],

        compactTitles: [
          "ఈ సేవకు ఎంత సమయం పడుతుంది?",
          "సేవలో ఉండేవి"
        ],

        compactDescriptions: [
          "షాప్ పరిమాణం, షెల్ఫ్‌ల సంఖ్య, నేల పరిస్థితి మరియు మురికి స్థాయిని బట్టి సేవకు పట్టే సమయం మారుతుంది."
        ],

        fridgeTypes: [
          "చిన్న షాప్",
          "మధ్యస్థ షాప్",
          "పెద్ద షాప్"
        ],

        fridgeTimes: [
          "60 నిమిషాలు",
          "90 నిమిషాలు",
          "120 నిమిషాలు"
        ],

        includeItems: [
          "కౌంటర్ మరియు డెస్క్ తుడవడం",
          "అందుబాటులో ఉన్న షెల్ఫ్ బయటి భాగం శుభ్రత",
          "తలుపులు మరియు హ్యాండిల్స్ తుడవడం",
          "నేల ఊడ్చి తుడవడం",
          "అందుబాటులో ఉన్న ఉపరితలాలపై దుమ్ము తొలగింపు",
          "సాధారణ వ్యర్థాల సేకరణ",
          "అందుబాటులో ఉన్న మూలల శుభ్రత",
          "చివరిగా షాప్ ప్రాంతాన్ని పరిశీలించడం",
          "ఉత్పత్తుల స్టాక్ సర్దడం లేదా లెక్కించడం",
          "భారీ షెల్ఫ్‌లు లేదా యంత్రాలు కదిలించడం",
          "ఎత్తులో ఉన్న గాజు బయటి భాగం శుభ్రత",
          "పెస్ట్ కంట్రోల్ లేదా రసాయన చికిత్స",
          "ఎలక్ట్రికల్ లేదా పరికరాల మరమ్మతు",
          "నిర్మాణ వ్యర్థాల తొలగింపు",
          "ప్రమాదకర పదార్థాల శుభ్రత"
        ],

        notIncludesTitle: [
          "సేవలో లేనివి"
        ],

        processTitle: [
          "ఈ సేవ ఎలా చేయబడుతుంది?"
        ],

        processItemTitles: [
          "నగదు మరియు విలువైన వస్తువులను సురక్షితంగా ఉంచండి",
          "షాప్ నేలను ఖాళీ చేయండి",
          "ఉత్పత్తుల స్టాక్‌ను రక్షించండి",
          "ప్రవేశం లేని ప్రాంతాల గురించి తెలియజేయండి",
          "క్లీనింగ్ తర్వాత షాప్‌ను పరిశీలించండి"
        ],

        processItemTexts: [
          "క్లీనింగ్ ప్రారంభమయ్యే ముందు నగదు, పత్రాలు, ఎలక్ట్రానిక్ పరికరాలు మరియు విలువైన ఉత్పత్తులను సురక్షితంగా ఉంచండి.",
          "సాధ్యమైనంత వరకు కార్టన్లు, విడిగా ఉన్న స్టాక్ మరియు అడ్డంకులను షాప్ నేల నుంచి తొలగించండి.",
          "దుమ్ము, నీరు లేదా క్లీనింగ్ వల్ల ప్రభావితమయ్యే ఉత్పత్తులను కవర్ చేయండి లేదా పక్కకు మార్చండి.",
          "ప్రవేశం లేని ప్రాంతాలు, సున్నితమైన డిస్ప్లేలు లేదా ప్రత్యేక జాగ్రత్త అవసరమైన ఉపరితలాల గురించి తెలియజేయండి.",
          "సేవ పూర్తయ్యే ముందు శుభ్రం చేసిన కౌంటర్లు, షెల్ఫ్‌లు, నేల మరియు కస్టమర్ ప్రాంతాన్ని పరిశీలించండి."
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
          "షాప్ పరిమాణం, షెల్ఫ్‌ల సంఖ్య, నేల పరిస్థితి మరియు ఎంచుకున్న సేవ సమయాన్ని బట్టి ధర నిర్ణయించబడుతుంది.",
          "యాప్‌లో ఉన్న Help విభాగం ద్వారా మీరు ఎప్పుడైనా Scrub Mate సపోర్ట్‌ను సంప్రదించవచ్చు."
        ]

      }

    };


    const text =
  shopCleaningPopupTranslations[language];

    scurbSetShopCleaningPopupTexts(
      ".scurbServiceDetailsTitle",
      text.detailsTitle
    );

    scurbSetShopCleaningPopupTexts(
      ".scurbServiceSubTitle",
      text.subTitles
    );

    scurbSetShopCleaningPopupTexts(
      ".scurbServiceDescription",
      text.descriptions
    );

    scurbSetShopCleaningPopupTexts(
      ".scurbServiceSubTitleCompact",
      text.compactTitles
    );

    scurbSetShopCleaningPopupTexts(
      ".scurbServiceDescriptionCompact",
      text.compactDescriptions
    );

    scurbSetShopCleaningPopupTexts(
      ".scurbFridgeCard h4",
      text.fridgeTypes
    );

    scurbSetShopCleaningPopupTexts(
      ".scurbFridgeCard > span",
      text.fridgeTimes
    );

    scurbSetShopCleaningPopupTexts(
      ".scurbServiceIncludeItem > span:last-child",
      text.includeItems
    );

    scurbSetShopCleaningPopupTexts(
      ".scurbServiceNotIncludesTitle",
      text.notIncludesTitle
    );

    scurbSetShopCleaningPopupTexts(
      ".scurbServiceHowDoneTitle",
      text.processTitle
    );

    scurbSetShopCleaningPopupTexts(
      ".scurbHowDoneItemTitle",
      text.processItemTitles
    );

    scurbSetShopCleaningPopupTexts(
      ".scurbHowDoneItemText",
      text.processItemTexts
    );

    scurbSetShopCleaningPopupTexts(
      ".scurbServiceFaqTitle",
      text.faqTitle
    );

    scurbSetShopCleaningPopupTexts(
      ".scurbFaqQuestion > span:first-child",
      text.faqQuestions
    );

    scurbSetShopCleaningPopupTexts(
      ".scurbFaqAnswer",
      text.faqAnswers
    );

  }


  scurbShopCleaningLanguageToggle.addEventListener(
    "change",
    function(){

     changeShopCleaningPopupLanguage(
  this.checked
);

    }
  );
}


/* =========================================
   OPEN FROM CARD
========================================= */

document.addEventListener("DOMContentLoaded", function(){

 const shopCleaningCard =
  document.getElementById("openShopCleaningPopup");
  if(!shopCleaningCard){
    console.error("Shop Cleaning card not found");
    return;
  }

  shopCleaningCard.addEventListener("click", function(event){

    if(event.target.closest(".scurbServiceAddBtn")){
      return;
    }

    openShopCleaningPopup();

  });

});



let scurbShopCleaningTouchStartX = 0;
let scurbShopCleaningTouchStartY = 0;
let scurbShopCleaningTouchCurrentX = 0;
let scurbShopCleaningSwipeSide = "";

function closeShopCleaningPopup(){

  const popup =
    document.getElementById(
      "shopCleaningPopup"
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
        "shopCleaningPopup"
      );

    if(
      !popup ||
      !popup.innerHTML.trim()
    ){
      return;
    }

    const touch =
      event.touches[0];

    scurbShopCleaningTouchStartX =
      touch.clientX;

    scurbShopCleaningTouchStartY =
      touch.clientY;

    scurbShopCleaningTouchCurrentX =
      touch.clientX;

    scurbShopCleaningSwipeSide = "";

    const screenWidth =
      window.innerWidth;

    if(
      scurbShopCleaningTouchStartX <= 35
    ){
      scurbShopCleaningSwipeSide = "left";
    }
    else if(
      scurbShopCleaningTouchStartX >=
      screenWidth - 35
    ){
      scurbShopCleaningSwipeSide = "right";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchmove",
  function(event){

    if(!scurbShopCleaningSwipeSide){
      return;
    }

    const touch =
      event.touches[0];

    scurbShopCleaningTouchCurrentX =
      touch.clientX;

    const moveX =
      scurbShopCleaningTouchCurrentX -
      scurbShopCleaningTouchStartX;

    const moveY =
      touch.clientY -
      scurbShopCleaningTouchStartY;

    if(
      Math.abs(moveY) >
      Math.abs(moveX)
    ){
      scurbShopCleaningSwipeSide = "";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchend",
  function(){

    if(!scurbShopCleaningSwipeSide){
      return;
    }

    const swipeDistance =
      scurbShopCleaningTouchCurrentX -
      scurbShopCleaningTouchStartX;

    const leftSwipePassed =
      scurbShopCleaningSwipeSide === "left" &&
      swipeDistance >= 90;

    const rightSwipePassed =
      scurbShopCleaningSwipeSide === "right" &&
      swipeDistance <= -90;

    if(
      leftSwipePassed ||
      rightSwipePassed
    ){
      closeShopCleaningPopup();
    }

    scurbShopCleaningSwipeSide = "";

  }
);


document.addEventListener(
  "touchcancel",
  function(){
    scurbShopCleaningSwipeSide = "";
  }
);
