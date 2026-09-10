/* =========================================
   COMMON SERVICE POPUP
========================================= */
const bedroomCleaningPopup =
  document.getElementById("bedroomCleaningPopup");

function openBedroomCleaningPopup(){
  bedroomCleaningPopup.innerHTML = `
    <div class="scurbServicePopup show">

      <div class="scurbServicePopupImage">

  <div class="scurbPopupImageShimmer"></div>

  <img
   id="bedroomCleaningPopupHeroImage"
    class="scurbPopupLazyImage"
    data-src="mainn/bedroom.jpeg"
    alt="Bedroom Cleaning"
  >

  <div class="scurbServicePopupTop">

         <button
  type="button"
  class="scurbServicePopupIconBtn"
 id="closeBedroomCleaningPopup"
  aria-label="Go back"
>
  <i class="fa-solid fa-chevron-left"></i>
</button>

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="shareBedroomCleaningPopup"
  aria-label="Share"
>
  <i class="fa-solid fa-share-nodes"></i>
</button>

        </div>

           </div>

      <div class="scurbServiceHeaderRow">

  <div class="scurbServiceHeaderInfo">

    <h1 class="scurbServiceHeaderTitle">
  Bedroom Cleaning
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
  id="bedroomCleaningBookBtn"
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
  Fresh and Comfortable Bedroom
</h3>

<p class="scurbServiceDescription">
  Get your bedroom cleaned and organized with dusting, accessible surface wiping, floor sweeping, mopping, and basic arrangement for a fresh and comfortable space.
</p>


<h3 class="scurbServiceSubTitleCompact">
  Includes
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Dusting accessible furniture surfaces</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Bed exterior and side-table wiping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Wardrobe exterior wiping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Door, handle, and switch wiping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Floor sweeping and mopping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Cleaning reachable corners</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Basic arrangement of visible items</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Final room check and fresh finish</span>
</div>


<h3 class="scurbServiceNotIncludesTitle">
  Doesn't Include
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Changing or washing bed linen</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Inside-wardrobe cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Moving heavy furniture</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Mattress shampooing or deep cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Wall stain or paint removal</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Electrical or furniture repair</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Cleaning at unsafe heights</span>
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
        Remove clothes, documents, cosmetics, and personal items from surfaces before cleaning begins.
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
        Clear the Bedroom Floor
</h4>
      <p class="scurbHowDoneItemText">
        Keep the bedroom floor clear so sweeping, mopping, and corner cleaning can be completed properly.
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
        Keep Valuables Secure
</h4>
      <p class="scurbHowDoneItemText">
        Store jewellery, cash, electronics, and other valuables safely before the service.
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
        Inform About Delicate Surfaces
</h4>
      <p class="scurbHowDoneItemText">
        Inform the professional about delicate furniture, damaged surfaces, or items requiring special care.
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
        Check the Room After Cleaning
</h4>
      <p class="scurbHowDoneItemText">
        Inspect the cleaned bedroom, furniture surfaces, and floor before the professional completes the service.
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
        Pricing depends on the bedroom size, furniture, room condition, and selected service duration.
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
const bedroomCleaningPopupLazyImages =
  bedroomCleaningPopup.querySelectorAll(
    ".scurbPopupLazyImage"
  );

bedroomCleaningPopupLazyImages.forEach(function(image){
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

  const scurbBedroomCleaningFaqQuestions =
    bedroomCleaningPopup.querySelectorAll(
      ".scurbFaqQuestion"
    );

  scurbBedroomCleaningFaqQuestions.forEach(function(question){

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

      bedroomCleaningPopup
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
  .getElementById("closeBedroomCleaningPopup")
  .addEventListener(
    "click",
    closeBedroomCleaningPopup
  );
  const scurbBedroomCleaningLanguageToggle =
    document.getElementById("scurbLanguageToggle");

  function scurbSetBedroomCleaningPopupTexts(selector, texts){

    const elements =
      bedroomCleaningPopup.querySelectorAll(selector);

    elements.forEach(function(element, index){

      if(texts[index] !== undefined){
        element.textContent = texts[index];
      }

    });

  }


  function changeBedroomCleaningPopupLanguage(isTelugu){
    const language = isTelugu ? "te" : "en";

    const bedroomCleaningPopupTranslations = {
      en: {

        detailsTitle: [
          "About this Service"
        ],

        subTitles: [
          "Fresh and Comfortable Bedroom"
        ],

        descriptions: [
          "Get your bedroom cleaned and organized with dusting, accessible surface wiping, floor sweeping, mopping, and basic arrangement for a fresh and comfortable space."
        ],

        compactTitles: [
          "How Long Does It Take?",
          "Includes"
        ],

        compactDescriptions: [
          "The estimated service duration depends on the bedroom size, furniture, room condition, and level of dirt."
        ],

        fridgeTypes: [
          "Small Bedroom",
          "Standard Bedroom",
          "Large Bedroom"
        ],

        fridgeTimes: [
          "45 mins",
          "60 mins",
          "90 mins"
        ],

        includeItems: [
          "Dusting accessible furniture surfaces",
          "Bed exterior and side-table wiping",
          "Wardrobe exterior wiping",
          "Door, handle, and switch wiping",
          "Floor sweeping and mopping",
          "Cleaning reachable corners",
          "Basic arrangement of visible items",
          "Final room check and fresh finish",
          "Changing or washing bed linen",
          "Inside-wardrobe cleaning",
          "Moving heavy furniture",
          "Mattress shampooing or deep cleaning",
          "Wall stain or paint removal",
          "Electrical or furniture repair",
          "Cleaning at unsafe heights"
        ],

        notIncludesTitle: [
          "Doesn't Include"
        ],

        processTitle: [
          "How Is It Done?"
        ],

        processItemTitles: [
          "Remove Personal Items",
          "Clear the Bedroom Floor",
          "Keep Valuables Secure",
          "Inform About Delicate Surfaces",
          "Check the Room After Cleaning"
        ],

        processItemTexts: [
          "Remove clothes, documents, cosmetics, and personal items from surfaces before cleaning begins.",
          "Keep the bedroom floor clear so sweeping, mopping, and corner cleaning can be completed properly.",
          "Store jewellery, cash, electronics, and other valuables safely before the service.",
          "Inform the professional about delicate furniture, damaged surfaces, or items requiring special care.",
          "Inspect the cleaned bedroom, furniture surfaces, and floor before the professional completes the service."
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
          "Pricing depends on the bedroom size, furniture, room condition, and selected service duration.",
          "You can reach Scrub Mate support anytime through the Help section available in the app."
        ]

      },


      te: {

        detailsTitle: [
          "ఈ సేవ గురించి"
        ],

        subTitles: [
          "తాజాగా మరియు సౌకర్యంగా ఉండే బెడ్‌రూమ్"
        ],

        descriptions: [
          "దుమ్ము తొలగింపు, అందుబాటులో ఉన్న ఉపరితలాలు తుడవడం, నేల ఊడ్చి తుడవడం మరియు సాధారణ సర్దుబాటుతో మీ బెడ్‌రూమ్‌ను శుభ్రంగా, సౌకర్యంగా ఉంచుతాము."
        ],

        compactTitles: [
          "ఈ సేవకు ఎంత సమయం పడుతుంది?",
          "సేవలో ఉండేవి"
        ],

        compactDescriptions: [
          "బెడ్‌రూమ్ పరిమాణం, ఫర్నిచర్, గది పరిస్థితి మరియు మురికి స్థాయిని బట్టి సేవకు పట్టే సమయం మారుతుంది."
        ],

        fridgeTypes: [
          "చిన్న బెడ్‌రూమ్",
          "సాధారణ బెడ్‌రూమ్",
          "పెద్ద బెడ్‌రూమ్"
        ],

        fridgeTimes: [
          "45 నిమిషాలు",
          "60 నిమిషాలు",
          "90 నిమిషాలు"
        ],

        includeItems: [
          "అందుబాటులో ఉన్న ఫర్నిచర్‌పై దుమ్ము తొలగింపు",
          "బెడ్ బయటి భాగం మరియు సైడ్ టేబుల్ తుడవడం",
          "వార్డ్రోబ్ బయటి భాగం తుడవడం",
          "తలుపులు, హ్యాండిల్స్ మరియు స్విచ్‌లు తుడవడం",
          "నేల ఊడ్చి తుడవడం",
          "అందుబాటులో ఉన్న మూలల శుభ్రత",
          "కనిపించే వస్తువులను సాధారణంగా సర్దడం",
          "చివరిగా గదిని పరిశీలించి తాజాగా ఉంచడం",
          "బెడ్ షీట్లు మార్చడం లేదా ఉతకడం",
          "వార్డ్రోబ్ లోపలి భాగం శుభ్రత",
          "భారీ ఫర్నిచర్ కదిలించడం",
          "మ్యాట్రెస్ షాంపూ లేదా డీప్ క్లీనింగ్",
          "గోడ మరకలు లేదా పెయింట్ తొలగింపు",
          "ఎలక్ట్రికల్ లేదా ఫర్నిచర్ మరమ్మతు",
          "ప్రమాదకరమైన ఎత్తులో శుభ్రత"
        ],

        notIncludesTitle: [
          "సేవలో లేనివి"
        ],

        processTitle: [
          "ఈ సేవ ఎలా చేయబడుతుంది?"
        ],

        processItemTitles: [
          "వ్యక్తిగత వస్తువులను తొలగించండి",
          "బెడ్‌రూమ్ నేలను ఖాళీ చేయండి",
          "విలువైన వస్తువులను సురక్షితంగా ఉంచండి",
          "సున్నితమైన ఉపరితలాల గురించి తెలియజేయండి",
          "క్లీనింగ్ తర్వాత గదిని పరిశీలించండి"
        ],

        processItemTexts: [
          "క్లీనింగ్ ప్రారంభమయ్యే ముందు బట్టలు, పత్రాలు, కాస్మెటిక్స్ మరియు వ్యక్తిగత వస్తువులను ఉపరితలాల నుంచి తొలగించండి.",
          "నేల ఊడ్చడం, తుడవడం మరియు మూలల శుభ్రత కోసం బెడ్‌రూమ్ నేలను ఖాళీగా ఉంచండి.",
          "సేవకు ముందు నగలు, నగదు, ఎలక్ట్రానిక్స్ మరియు ఇతర విలువైన వస్తువులను సురక్షితంగా ఉంచండి.",
          "సున్నితమైన ఫర్నిచర్, పాడైన ఉపరితలాలు లేదా ప్రత్యేక జాగ్రత్త అవసరమైన వస్తువుల గురించి తెలియజేయండి.",
          "ప్రొఫెషనల్ సేవను పూర్తి చేసే ముందు శుభ్రం చేసిన గది, ఫర్నిచర్ మరియు నేలను పరిశీలించండి."
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
          "బెడ్‌రూమ్ పరిమాణం, ఫర్నిచర్, గది పరిస్థితి మరియు ఎంచుకున్న సేవ సమయాన్ని బట్టి ధర నిర్ణయించబడుతుంది.",
          "యాప్‌లో ఉన్న Help విభాగం ద్వారా మీరు ఎప్పుడైనా Scrub Mate సపోర్ట్‌ను సంప్రదించవచ్చు."
        ]

      }

    };


    const text =
  bedroomCleaningPopupTranslations[language];

    scurbSetBedroomCleaningPopupTexts(
      ".scurbServiceDetailsTitle",
      text.detailsTitle
    );

    scurbSetBedroomCleaningPopupTexts(
      ".scurbServiceSubTitle",
      text.subTitles
    );

    scurbSetBedroomCleaningPopupTexts(
      ".scurbServiceDescription",
      text.descriptions
    );

    scurbSetBedroomCleaningPopupTexts(
      ".scurbServiceSubTitleCompact",
      text.compactTitles
    );

    scurbSetBedroomCleaningPopupTexts(
      ".scurbServiceDescriptionCompact",
      text.compactDescriptions
    );

    scurbSetBedroomCleaningPopupTexts(
      ".scurbFridgeCard h4",
      text.fridgeTypes
    );

    scurbSetBedroomCleaningPopupTexts(
      ".scurbFridgeCard > span",
      text.fridgeTimes
    );

    scurbSetBedroomCleaningPopupTexts(
      ".scurbServiceIncludeItem > span:last-child",
      text.includeItems
    );

    scurbSetBedroomCleaningPopupTexts(
      ".scurbServiceNotIncludesTitle",
      text.notIncludesTitle
    );

    scurbSetBedroomCleaningPopupTexts(
      ".scurbServiceHowDoneTitle",
      text.processTitle
    );

    scurbSetBedroomCleaningPopupTexts(
      ".scurbHowDoneItemTitle",
      text.processItemTitles
    );

    scurbSetBedroomCleaningPopupTexts(
      ".scurbHowDoneItemText",
      text.processItemTexts
    );

    scurbSetBedroomCleaningPopupTexts(
      ".scurbServiceFaqTitle",
      text.faqTitle
    );

    scurbSetBedroomCleaningPopupTexts(
      ".scurbFaqQuestion > span:first-child",
      text.faqQuestions
    );

    scurbSetBedroomCleaningPopupTexts(
      ".scurbFaqAnswer",
      text.faqAnswers
    );

  }


  scurbBedroomCleaningLanguageToggle.addEventListener(
    "change",
    function(){

     changeBedroomCleaningPopupLanguage(
  this.checked
);

    }
  );
}


/* =========================================
   OPEN FROM CARD
========================================= */

document.addEventListener("DOMContentLoaded", function(){

 const bedroomCleaningCard =
  document.getElementById("openBedroomCleaningPopup");
  if(!bedroomCleaningCard){
    console.error("Bedroom Cleaning card not found");
    return;
  }

  bedroomCleaningCard.addEventListener("click", function(event){

    if(event.target.closest(".scurbServiceAddBtn")){
      return;
    }

    openBedroomCleaningPopup();

  });

});



let scurbBedroomCleaningTouchStartX = 0;
let scurbBedroomCleaningTouchStartY = 0;
let scurbBedroomCleaningTouchCurrentX = 0;
let scurbBedroomCleaningSwipeSide = "";

function closeBedroomCleaningPopup(){

  const popup =
    document.getElementById(
      "bedroomCleaningPopup"
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
        "bedroomCleaningPopup"
      );

    if(
      !popup ||
      !popup.innerHTML.trim()
    ){
      return;
    }

    const touch =
      event.touches[0];

    scurbBedroomCleaningTouchStartX =
      touch.clientX;

    scurbBedroomCleaningTouchStartY =
      touch.clientY;

    scurbBedroomCleaningTouchCurrentX =
      touch.clientX;

    scurbBedroomCleaningSwipeSide = "";

    const screenWidth =
      window.innerWidth;

    if(
      scurbBedroomCleaningTouchStartX <= 35
    ){
      scurbBedroomCleaningSwipeSide = "left";
    }
    else if(
      scurbBedroomCleaningTouchStartX >=
      screenWidth - 35
    ){
      scurbBedroomCleaningSwipeSide = "right";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchmove",
  function(event){

    if(!scurbBedroomCleaningSwipeSide){
      return;
    }

    const touch =
      event.touches[0];

    scurbBedroomCleaningTouchCurrentX =
      touch.clientX;

    const moveX =
      scurbBedroomCleaningTouchCurrentX -
      scurbBedroomCleaningTouchStartX;

    const moveY =
      touch.clientY -
      scurbBedroomCleaningTouchStartY;

    if(
      Math.abs(moveY) >
      Math.abs(moveX)
    ){
      scurbBedroomCleaningSwipeSide = "";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchend",
  function(){

    if(!scurbBedroomCleaningSwipeSide){
      return;
    }

    const swipeDistance =
      scurbBedroomCleaningTouchCurrentX -
      scurbBedroomCleaningTouchStartX;

    const leftSwipePassed =
      scurbBedroomCleaningSwipeSide === "left" &&
      swipeDistance >= 90;

    const rightSwipePassed =
      scurbBedroomCleaningSwipeSide === "right" &&
      swipeDistance <= -90;

    if(
      leftSwipePassed ||
      rightSwipePassed
    ){
      closeBedroomCleaningPopup();
    }

    scurbBedroomCleaningSwipeSide = "";

  }
);


document.addEventListener(
  "touchcancel",
  function(){
    scurbBedroomCleaningSwipeSide = "";
  }
);
