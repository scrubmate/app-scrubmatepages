/* =========================================
   COMMON SERVICE POPUP
========================================= */
const stageCleaningPopup =
  document.getElementById("stageCleaningPopup");

function openStageCleaningPopup(){
  stageCleaningPopup.innerHTML = `
    <div class="scurbServicePopup show">

      <div class="scurbServicePopupImage">

  <div class="scurbPopupImageShimmer"></div>

  <img
   id="stageCleaningPopupHeroImage"
    class="scurbPopupLazyImage"
    data-src="mainn/stage.jpeg"
    alt="Stage Cleaning"
  >

  <div class="scurbServicePopupTop">

         <button
  type="button"
  class="scurbServicePopupIconBtn"
 id="closeStageCleaningPopup"
  aria-label="Go back"
>
  <i class="fa-solid fa-chevron-left"></i>
</button>

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="shareStageCleaningPopup"
  aria-label="Share"
>
  <i class="fa-solid fa-share-nodes"></i>
</button>

        </div>

           </div>

      <div class="scurbServiceHeaderRow">

  <div class="scurbServiceHeaderInfo">

    <h1 class="scurbServiceHeaderTitle">
  Stage Cleaning
</h1>

    <div class="scurbServiceHeaderPrices">

      <span class="scurbServiceSalePrice">
        ₹160
      </span>

      <span class="scurbServiceStrikePrice">
        ₹250
      </span>

    </div>

  </div>

  <button
  type="button"
  class="scurbServiceHeaderBookBtn"
  id="stageCleaningBookBtn"
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
  Clean and Event-Ready Stage
</h3>

<p class="scurbServiceDescription">
  Get wedding, function, or event stages cleaned before or after use with dust removal, accessible surface wiping, floor sweeping, mopping, and basic waste collection.
</p>


<h3 class="scurbServiceSubTitleCompact">
  Includes
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Stage-floor sweeping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Suitable floor mopping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Dusting accessible stage surfaces</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Chair and table exterior wiping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Basic decoration-area cleanup</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Collection of light event waste</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Cleaning accessible stage corners</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Final event-area check</span>
</div>


<h3 class="scurbServiceNotIncludesTitle">
  Doesn't Include
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Removing or installing decorations</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Electrical or lighting work</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Moving heavy stage structures</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Cleaning at unsafe heights</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Disposal of large event waste</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Removal of paint, glue, or cement stains</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Handling hazardous or sharp waste</span>
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
        Clear the Stage Area
</h4>
      <p class="scurbHowDoneItemText">
        Remove personal items, gifts, loose decorations, and unnecessary objects from the stage area.
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
        Secure Decorations and Equipment
</h4>
      <p class="scurbHowDoneItemText">
        Secure lighting, sound equipment, cables, floral decorations, and delicate items before cleaning.
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
        Separate Event Waste
</h4>
      <p class="scurbHowDoneItemText">
        Separate food waste, flowers, paper, plastic, glass, and sharp items wherever possible.
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
        Inform About Restricted Items
</h4>
      <p class="scurbHowDoneItemText">
        Inform the professional about fragile decorations, restricted areas, or surfaces that must remain dry.
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
        Check the Stage After Cleaning
</h4>
      <p class="scurbHowDoneItemText">
        Inspect the cleaned stage floor, furniture, corners, and event area before the service is completed.
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
        Pricing depends on stage size, decoration setup, floor condition, waste level, and selected duration.
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
const stageCleaningPopupLazyImages =
  stageCleaningPopup.querySelectorAll(
    ".scurbPopupLazyImage"
  );

stageCleaningPopupLazyImages.forEach(function(image){
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

  const scurbStageCleaningFaqQuestions =
    stageCleaningPopup.querySelectorAll(
      ".scurbFaqQuestion"
    );

  scurbStageCleaningFaqQuestions.forEach(function(question){

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

      stageCleaningPopup
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
  .getElementById("closeStageCleaningPopup")
  .addEventListener(
    "click",
    closeStageCleaningPopup
  );
  const scurbStageCleaningLanguageToggle =
    document.getElementById("scurbLanguageToggle");

  function scurbSetStageCleaningPopupTexts(selector, texts){

    const elements =
      stageCleaningPopup.querySelectorAll(selector);

    elements.forEach(function(element, index){

      if(texts[index] !== undefined){
        element.textContent = texts[index];
      }

    });

  }


  function changeStageCleaningPopupLanguage(isTelugu){
    const language = isTelugu ? "te" : "en";

    const stageCleaningPopupTranslations = {
      en: {

        detailsTitle: [
          "About this Service"
        ],

        subTitles: [
          "Clean and Event-Ready Stage"
        ],

        descriptions: [
          "Get wedding, function, or event stages cleaned before or after use with dust removal, accessible surface wiping, floor sweeping, mopping, and basic waste collection."
        ],

        compactTitles: [
          "How Long Does It Take?",
          "Includes"
        ],

        compactDescriptions: [
          "The estimated service duration depends on stage size, decoration setup, floor condition, and amount of waste."
        ],

        fridgeTypes: [
          "Small Stage",
          "Medium Stage",
          "Large Stage"
        ],

        fridgeTimes: [
          "60 mins",
          "90 mins",
          "120 mins"
        ],

        includeItems: [
          "Stage-floor sweeping",
          "Suitable floor mopping",
          "Dusting accessible stage surfaces",
          "Chair and table exterior wiping",
          "Basic decoration-area cleanup",
          "Collection of light event waste",
          "Cleaning accessible stage corners",
          "Final event-area check",
          "Removing or installing decorations",
          "Electrical or lighting work",
          "Moving heavy stage structures",
          "Cleaning at unsafe heights",
          "Disposal of large event waste",
          "Removal of paint, glue, or cement stains",
          "Handling hazardous or sharp waste"
        ],

        notIncludesTitle: [
          "Doesn't Include"
        ],

        processTitle: [
          "How Is It Done?"
        ],

        processItemTitles: [
          "Clear the Stage Area",
          "Secure Decorations and Equipment",
          "Separate Event Waste",
          "Inform About Restricted Items",
          "Check the Stage After Cleaning"
        ],

        processItemTexts: [
          "Remove personal items, gifts, loose decorations, and unnecessary objects from the stage area.",
          "Secure lighting, sound equipment, cables, floral decorations, and delicate items before cleaning.",
          "Separate food waste, flowers, paper, plastic, glass, and sharp items wherever possible.",
          "Inform the professional about fragile decorations, restricted areas, or surfaces that must remain dry.",
          "Inspect the cleaned stage floor, furniture, corners, and event area before the service is completed."
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
          "Pricing depends on stage size, decoration setup, floor condition, waste level, and selected duration.",
          "You can reach Scrub Mate support anytime through the Help section available in the app."
        ]

      },


      te: {

        detailsTitle: [
          "ఈ సేవ గురించి"
        ],

        subTitles: [
          "శుభ్రంగా మరియు కార్యక్రమానికి సిద్ధంగా ఉండే స్టేజ్"
        ],

        descriptions: [
          "పెళ్లి, ఫంక్షన్ లేదా ఇతర కార్యక్రమాల స్టేజ్‌ను వినియోగానికి ముందు లేదా తర్వాత దుమ్ము తొలగించడం, ఉపరితలాలు తుడవడం, నేల ఊడ్చి తుడవడం మరియు సాధారణ వ్యర్థాలను సేకరించడం ద్వారా శుభ్రం చేస్తాము."
        ],

        compactTitles: [
          "ఈ సేవకు ఎంత సమయం పడుతుంది?",
          "సేవలో ఉండేవి"
        ],

        compactDescriptions: [
          "స్టేజ్ పరిమాణం, డెకరేషన్ ఏర్పాటు, నేల పరిస్థితి మరియు వ్యర్థాల పరిమాణాన్ని బట్టి సేవకు పట్టే సమయం మారుతుంది."
        ],

        fridgeTypes: [
          "చిన్న స్టేజ్",
          "మధ్యస్థ స్టేజ్",
          "పెద్ద స్టేజ్"
        ],

        fridgeTimes: [
          "60 నిమిషాలు",
          "90 నిమిషాలు",
          "120 నిమిషాలు"
        ],

        includeItems: [
          "స్టేజ్ నేల ఊడ్చడం",
          "అవసరాన్ని బట్టి నేల తుడవడం",
          "అందుబాటులో ఉన్న స్టేజ్ ఉపరితలాలపై దుమ్ము తొలగింపు",
          "కుర్చీలు మరియు టేబుళ్ల బయటి భాగం తుడవడం",
          "డెకరేషన్ ప్రాంతాన్ని సాధారణంగా శుభ్రం చేయడం",
          "తేలికపాటి కార్యక్రమ వ్యర్థాల సేకరణ",
          "అందుబాటులో ఉన్న స్టేజ్ మూలల శుభ్రత",
          "చివరిగా కార్యక్రమ ప్రాంతాన్ని పరిశీలించడం",
          "డెకరేషన్లు తొలగించడం లేదా అమర్చడం",
          "ఎలక్ట్రికల్ లేదా లైటింగ్ పని",
          "భారీ స్టేజ్ నిర్మాణాలను కదిలించడం",
          "ప్రమాదకరమైన ఎత్తులో శుభ్రత",
          "ఎక్కువ పరిమాణంలోని కార్యక్రమ వ్యర్థాల తొలగింపు",
          "పెయింట్, గ్లూ లేదా సిమెంట్ మరకల తొలగింపు",
          "ప్రమాదకర లేదా పదునైన వ్యర్థాలను నిర్వహించడం"
        ],

        notIncludesTitle: [
          "సేవలో లేనివి"
        ],

        processTitle: [
          "ఈ సేవ ఎలా చేయబడుతుంది?"
        ],

        processItemTitles: [
          "స్టేజ్ ప్రాంతాన్ని ఖాళీ చేయండి",
          "డెకరేషన్లు మరియు పరికరాలను సురక్షితంగా ఉంచండి",
          "కార్యక్రమ వ్యర్థాలను వేరు చేయండి",
          "ప్రవేశం లేని వస్తువుల గురించి తెలియజేయండి",
          "క్లీనింగ్ తర్వాత స్టేజ్‌ను పరిశీలించండి"
        ],

        processItemTexts: [
          "స్టేజ్ ప్రాంతం నుంచి వ్యక్తిగత వస్తువులు, బహుమతులు, విడిగా ఉన్న డెకరేషన్లు మరియు అవసరం లేని వస్తువులను తొలగించండి.",
          "క్లీనింగ్‌కు ముందు లైటింగ్, సౌండ్ పరికరాలు, వైర్లు, పూల డెకరేషన్లు మరియు సున్నితమైన వస్తువులను సురక్షితంగా ఉంచండి.",
          "సాధ్యమైనంత వరకు ఆహార వ్యర్థాలు, పూలు, కాగితం, ప్లాస్టిక్, గాజు మరియు పదునైన వస్తువులను వేరు చేయండి.",
          "సున్నితమైన డెకరేషన్లు, ప్రవేశం లేని ప్రాంతాలు లేదా పొడిగా ఉంచాల్సిన ఉపరితలాల గురించి తెలియజేయండి.",
          "సేవ పూర్తయ్యే ముందు శుభ్రం చేసిన స్టేజ్ నేల, ఫర్నిచర్, మూలలు మరియు కార్యక్రమ ప్రాంతాన్ని పరిశీలించండి."
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
          "స్టేజ్ పరిమాణం, డెకరేషన్ ఏర్పాటు, నేల పరిస్థితి, వ్యర్థాల స్థాయి మరియు ఎంచుకున్న సమయాన్ని బట్టి ధర నిర్ణయించబడుతుంది.",
          "యాప్‌లో ఉన్న Help విభాగం ద్వారా మీరు ఎప్పుడైనా Scrub Mate సపోర్ట్‌ను సంప్రదించవచ్చు."
        ]

      }

    };


    const text =
  stageCleaningPopupTranslations[language];

    scurbSetStageCleaningPopupTexts(
      ".scurbServiceDetailsTitle",
      text.detailsTitle
    );

    scurbSetStageCleaningPopupTexts(
      ".scurbServiceSubTitle",
      text.subTitles
    );

    scurbSetStageCleaningPopupTexts(
      ".scurbServiceDescription",
      text.descriptions
    );

    scurbSetStageCleaningPopupTexts(
      ".scurbServiceSubTitleCompact",
      text.compactTitles
    );

    scurbSetStageCleaningPopupTexts(
      ".scurbServiceDescriptionCompact",
      text.compactDescriptions
    );

    scurbSetStageCleaningPopupTexts(
      ".scurbFridgeCard h4",
      text.fridgeTypes
    );

    scurbSetStageCleaningPopupTexts(
      ".scurbFridgeCard > span",
      text.fridgeTimes
    );

    scurbSetStageCleaningPopupTexts(
      ".scurbServiceIncludeItem > span:last-child",
      text.includeItems
    );

    scurbSetStageCleaningPopupTexts(
      ".scurbServiceNotIncludesTitle",
      text.notIncludesTitle
    );

    scurbSetStageCleaningPopupTexts(
      ".scurbServiceHowDoneTitle",
      text.processTitle
    );

    scurbSetStageCleaningPopupTexts(
      ".scurbHowDoneItemTitle",
      text.processItemTitles
    );

    scurbSetStageCleaningPopupTexts(
      ".scurbHowDoneItemText",
      text.processItemTexts
    );

    scurbSetStageCleaningPopupTexts(
      ".scurbServiceFaqTitle",
      text.faqTitle
    );

    scurbSetStageCleaningPopupTexts(
      ".scurbFaqQuestion > span:first-child",
      text.faqQuestions
    );

    scurbSetStageCleaningPopupTexts(
      ".scurbFaqAnswer",
      text.faqAnswers
    );

  }


  scurbStageCleaningLanguageToggle.addEventListener(
    "change",
    function(){

     changeStageCleaningPopupLanguage(
  this.checked
);

    }
  );
}


/* =========================================
   OPEN FROM CARD
========================================= */

document.addEventListener("DOMContentLoaded", function(){

 const stageCleaningCard =
  document.getElementById("openStageCleaningPopup");
  if(!stageCleaningCard){
    console.error("Stage Cleaning card not found");
    return;
  }

  stageCleaningCard.addEventListener("click", function(event){

    if(event.target.closest(".scurbServiceAddBtn")){
      return;
    }

    openStageCleaningPopup();

  });

});



let scurbStageCleaningTouchStartX = 0;
let scurbStageCleaningTouchStartY = 0;
let scurbStageCleaningTouchCurrentX = 0;
let scurbStageCleaningSwipeSide = "";

function closeStageCleaningPopup(){

  const popup =
    document.getElementById(
      "stageCleaningPopup"
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
        "stageCleaningPopup"
      );

    if(
      !popup ||
      !popup.innerHTML.trim()
    ){
      return;
    }

    const touch =
      event.touches[0];

    scurbStageCleaningTouchStartX =
      touch.clientX;

    scurbStageCleaningTouchStartY =
      touch.clientY;

    scurbStageCleaningTouchCurrentX =
      touch.clientX;

    scurbStageCleaningSwipeSide = "";

    const screenWidth =
      window.innerWidth;

    if(
      scurbStageCleaningTouchStartX <= 35
    ){
      scurbStageCleaningSwipeSide = "left";
    }
    else if(
      scurbStageCleaningTouchStartX >=
      screenWidth - 35
    ){
      scurbStageCleaningSwipeSide = "right";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchmove",
  function(event){

    if(!scurbStageCleaningSwipeSide){
      return;
    }

    const touch =
      event.touches[0];

    scurbStageCleaningTouchCurrentX =
      touch.clientX;

    const moveX =
      scurbStageCleaningTouchCurrentX -
      scurbStageCleaningTouchStartX;

    const moveY =
      touch.clientY -
      scurbStageCleaningTouchStartY;

    if(
      Math.abs(moveY) >
      Math.abs(moveX)
    ){
      scurbStageCleaningSwipeSide = "";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchend",
  function(){

    if(!scurbStageCleaningSwipeSide){
      return;
    }

    const swipeDistance =
      scurbStageCleaningTouchCurrentX -
      scurbStageCleaningTouchStartX;

    const leftSwipePassed =
      scurbStageCleaningSwipeSide === "left" &&
      swipeDistance >= 90;

    const rightSwipePassed =
      scurbStageCleaningSwipeSide === "right" &&
      swipeDistance <= -90;

    if(
      leftSwipePassed ||
      rightSwipePassed
    ){
      closeStageCleaningPopup();
    }

    scurbStageCleaningSwipeSide = "";

  }
);


document.addEventListener(
  "touchcancel",
  function(){
    scurbStageCleaningSwipeSide = "";
  }
);
