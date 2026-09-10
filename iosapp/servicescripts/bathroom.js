/* =========================================
   COMMON SERVICE POPUP
========================================= */
const bathroomCleaningPopup =
  document.getElementById("bathroomCleaningPopup");

function openBathroomCleaningPopup(){
  bathroomCleaningPopup.innerHTML = `
    <div class="scurbServicePopup show">

      <div class="scurbServicePopupImage">

  <div class="scurbPopupImageShimmer"></div>

  <img
   id="bathroomPopupHeroImage"
    class="scurbPopupLazyImage"
    data-src="mainn/bathroom.jpeg"
    alt="Bathroom Cleaning"
  >

  <div class="scurbServicePopupTop">

         <button
  type="button"
  class="scurbServicePopupIconBtn"
 id="closeBathroomCleaningPopup"
  aria-label="Go back"
>
  <i class="fa-solid fa-chevron-left"></i>
</button>

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="shareBathroomCleaningPopup"
  aria-label="Share"
>
  <i class="fa-solid fa-share-nodes"></i>
</button>

        </div>

           </div>

      <div class="scurbServiceHeaderRow">

  <div class="scurbServiceHeaderInfo">

    <h1 class="scurbServiceHeaderTitle">
  Bathroom Cleaning
</h1>

    <div class="scurbServiceHeaderPrices">

      <span class="scurbServiceSalePrice">
        ₹90
      </span>

      <span class="scurbServiceStrikePrice">
        ₹140
      </span>

    </div>

  </div>

 <button
  type="button"
  class="scurbServiceHeaderBookBtn"
  id="bathroomCleaningBookBtn"
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
  Fresh and Hygienic Bathroom
</h3>

<p class="scurbServiceDescription">
  Get your bathroom thoroughly cleaned and sanitized. We remove soap scum, hard-water marks, stains, dirt, and buildup from tiles, floors, washbasins, taps, mirrors, and accessible bathroom surfaces.
</p>


<h3 class="scurbServiceSubTitleCompact">
  Includes
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Washbasin and tap cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Bathroom shelves and fixtures wiping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Toilet seat and exterior cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Bathroom floor scrubbing and mopping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Soap scum and stain removal</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Wall and tile cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Mirror, corners, and edges cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Final rinse, dry wipe, and fresh finish</span>
</div>


<h3 class="scurbServiceNotIncludesTitle">
  Doesn't Include
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Plumbing or sanitary repair</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Electrical or geyser repair</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Removal of cement, paint, or construction stains</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Moving heavy bathroom fittings or appliances</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Cleaning inside geysers or exhaust fans</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Replacement of taps, pipes, or damaged parts</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Removal of hazardous or medical waste</span>
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
        Remove toiletries, clothes, buckets, mats, and personal items before the service begins.
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
        Clear the Bathroom Floor
      </h4>
      <p class="scurbHowDoneItemText">
        Clear the bathroom floor so the professional can scrub tiles, corners, and fixtures properly.
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
        Inform About Heavy Stains
      </h4>
      <p class="scurbHowDoneItemText">
        Inform the professional about stubborn stains, hard-water marks, leakage, or damaged surfaces.
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
        Make sure water and electricity are available when required for bathroom cleaning.
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
        Check the Bathroom After Cleaning
      </h4>
      <p class="scurbHowDoneItemText">
        Inspect the cleaned bathroom, tiles, fixtures, and floor before the professional completes the service.
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
        Pricing depends on the bathroom size, condition, level of stains, and the service selected at the time of booking.
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
const bathroomPopupLazyImages =
  bathroomCleaningPopup.querySelectorAll(
    ".scurbPopupLazyImage"
  );

bathroomPopupLazyImages.forEach(function(image){
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

  const scurbBathroomFaqQuestions =
    bathroomCleaningPopup.querySelectorAll(
      ".scurbFaqQuestion"
    );

  scurbBathroomFaqQuestions.forEach(function(question){

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

      bathroomCleaningPopup
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
  .getElementById("closeBathroomCleaningPopup")
  .addEventListener(
    "click",
    closeBathroomCleaningPopup
  );
  const scurbBathroomLanguageToggle =
    document.getElementById("scurbLanguageToggle");

  function scurbSetBathroomPopupTexts(selector, texts){

    const elements =
      bathroomCleaningPopup.querySelectorAll(selector);

    elements.forEach(function(element, index){

      if(texts[index] !== undefined){
        element.textContent = texts[index];
      }

    });

  }


  function changeBathroomPopupLanguage(isTelugu){
    const language = isTelugu ? "te" : "en";

    const bathroomPopupTranslations = {
      en: {

        detailsTitle: [
          "About this Service"
        ],

        subTitles: [
          "Fresh and Hygienic Bathroom"
        ],

        descriptions: [
          "Get your bathroom thoroughly cleaned and sanitized. We remove soap scum, hard-water marks, stains, dirt, and buildup from tiles, floors, washbasins, taps, mirrors, and accessible bathroom surfaces."
        ],

        compactTitles: [
          "How Long Does It Take?",
          "Includes"
        ],

        compactDescriptions: [
          "The estimated service duration depends on the bathroom size, condition, and level of dirt and stains."
        ],

        fridgeTypes: [
          "Regular Bathroom",
          "Attached Bathroom",
          "Large Bathroom"
        ],

        fridgeTimes: [
          "60 mins",
          "75 mins",
          "90 mins"
        ],

        includeItems: [
          "Washbasin and tap cleaning",
          "Bathroom shelves and fixtures wiping",
          "Toilet seat and exterior cleaning",
          "Bathroom floor scrubbing and mopping",
          "Soap scum and stain removal",
          "Wall and tile cleaning",
          "Mirror, corners, and edges cleaning",
          "Final rinse, dry wipe, and fresh finish",

          "Plumbing or sanitary repair",
          "Electrical or geyser repair",
          "Removal of cement, paint, or construction stains",
          "Moving heavy bathroom fittings or appliances",
          "Cleaning inside geysers or exhaust fans",
          "Replacement of taps, pipes, or damaged parts",
          "Removal of hazardous or medical waste"
        ],

        notIncludesTitle: [
          "Doesn't Include"
        ],

        processTitle: [
          "How Is It Done?"
        ],

        processItemTitles: [
          "Remove Personal Items",
          "Clear the Bathroom Floor",
          "Inform About Heavy Stains",
          "Keep Water Access Ready",
          "Check the Bathroom After Cleaning"
        ],

        processItemTexts: [
          "Remove toiletries, clothes, buckets, mats, and personal items before the service begins.",
          "Clear the bathroom floor so the professional can scrub tiles, corners, and fixtures properly.",
          "Inform the professional about stubborn stains, hard-water marks, leakage, or damaged surfaces.",
          "Make sure water and electricity are available when required for bathroom cleaning.",
          "Inspect the cleaned bathroom, tiles, fixtures, and floor before the professional completes the service."
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
          "Pricing depends on the bathroom size, condition, level of stains, and the service selected at the time of booking.",
          "You can reach Scrub Mate support anytime through the Help section available in the app."
        ]

      },


      te: {

        detailsTitle: [
          "ఈ సేవ గురించి"
        ],

        subTitles: [
          "తాజాగా మరియు పరిశుభ్రంగా ఉండే బాత్రూమ్"
        ],

        descriptions: [
          "మీ బాత్రూమ్‌ను పూర్తిగా శుభ్రం చేసి శానిటైజ్ చేస్తాము. టైల్స్, నేల, వాష్‌బేసిన్, ట్యాప్స్, అద్దం మరియు అందుబాటులో ఉన్న ఉపరితలాలపై ఉన్న సబ్బు మురికి, నీటి మరకలు, దుమ్ము మరియు పేరుకుపోయిన మలినాలను తొలగిస్తాము."
        ],

        compactTitles: [
          "ఈ సేవకు ఎంత సమయం పడుతుంది?",
          "సేవలో ఉండేవి"
        ],

        compactDescriptions: [
          "బాత్రూమ్ పరిమాణం, పరిస్థితి మరియు మురికి లేదా మరకల స్థాయిని బట్టి సేవకు పట్టే సమయం మారుతుంది."
        ],

        fridgeTypes: [
          "సాధారణ బాత్రూమ్",
          "అటాచ్డ్ బాత్రూమ్",
          "పెద్ద బాత్రూమ్"
        ],

        fridgeTimes: [
          "60 నిమిషాలు",
          "75 నిమిషాలు",
          "90 నిమిషాలు"
        ],

        includeItems: [
          "వాష్‌బేసిన్ మరియు ట్యాప్స్ శుభ్రత",
          "బాత్రూమ్ షెల్ఫ్‌లు మరియు ఫిక్చర్స్ తుడవడం",
          "టాయిలెట్ సీట్ మరియు బయటి భాగం శుభ్రత",
          "బాత్రూమ్ నేల రుద్ది తుడవడం",
          "సబ్బు మురికి మరియు మరకల తొలగింపు",
          "గోడలు మరియు టైల్స్ శుభ్రత",
          "అద్దం, మూలలు మరియు అంచుల శుభ్రత",
          "చివరిగా కడిగి, పొడిగా తుడిచి తాజాగా ఉంచడం",

          "ప్లంబింగ్ లేదా శానిటరీ మరమ్మతు",
          "ఎలక్ట్రికల్ లేదా గీజర్ మరమ్మతు",
          "సిమెంట్, పెయింట్ లేదా నిర్మాణ మరకల తొలగింపు",
          "భారీ బాత్రూమ్ ఫిక్చర్స్ లేదా ఉపకరణాలను కదిలించడం",
          "గీజర్ లేదా ఎగ్జాస్ట్ ఫ్యాన్ లోపలి భాగం శుభ్రత",
          "ట్యాప్స్, పైపులు లేదా పాడైన భాగాల మార్పు",
          "ప్రమాదకర లేదా వైద్య వ్యర్థాల తొలగింపు"
        ],

        notIncludesTitle: [
          "సేవలో లేనివి"
        ],

        processTitle: [
          "ఈ సేవ ఎలా చేయబడుతుంది?"
        ],

        processItemTitles: [
          "వ్యక్తిగత వస్తువులను తొలగించండి",
          "బాత్రూమ్ నేలను ఖాళీ చేయండి",
          "కఠినమైన మరకల గురించి తెలియజేయండి",
          "నీటి సదుపాయాన్ని సిద్ధంగా ఉంచండి",
          "క్లీనింగ్ తర్వాత బాత్రూమ్‌ను పరిశీలించండి"
        ],

        processItemTexts: [
          "సేవ ప్రారంభమయ్యే ముందు టాయిలెట్రీస్, బట్టలు, బకెట్లు, మ్యాట్స్ మరియు వ్యక్తిగత వస్తువులను తొలగించండి.",
          "టైల్స్, మూలలు మరియు ఫిక్చర్స్‌ను సరిగా శుభ్రం చేయడానికి బాత్రూమ్ నేలను ఖాళీగా ఉంచండి.",
          "కఠినమైన మరకలు, నీటి మరకలు, లీకేజీ లేదా దెబ్బతిన్న ఉపరితలాల గురించి ప్రొఫెషనల్‌కు తెలియజేయండి.",
          "బాత్రూమ్ క్లీనింగ్‌కు అవసరమైనప్పుడు నీరు మరియు విద్యుత్ అందుబాటులో ఉండేలా చూడండి.",
          "ప్రొఫెషనల్ సేవను పూర్తి చేసే ముందు క్లీనింగ్ తర్వాత బాత్రూమ్‌ను పరిశీలించండి."
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
          "బాత్రూమ్ పరిమాణం, పరిస్థితి, మరకల స్థాయి మరియు మీరు ఎంచుకున్న సేవను బట్టి ధర నిర్ణయించబడుతుంది.",
          "యాప్‌లో ఉన్న Help విభాగం ద్వారా మీరు ఎప్పుడైనా Scrub Mate సపోర్ట్‌ను సంప్రదించవచ్చు."
        ]

      }

    };


    const text =
  bathroomPopupTranslations[language];

    scurbSetBathroomPopupTexts(
      ".scurbServiceDetailsTitle",
      text.detailsTitle
    );

    scurbSetBathroomPopupTexts(
      ".scurbServiceSubTitle",
      text.subTitles
    );

    scurbSetBathroomPopupTexts(
      ".scurbServiceDescription",
      text.descriptions
    );

    scurbSetBathroomPopupTexts(
      ".scurbServiceSubTitleCompact",
      text.compactTitles
    );

    scurbSetBathroomPopupTexts(
      ".scurbServiceDescriptionCompact",
      text.compactDescriptions
    );

    scurbSetBathroomPopupTexts(
      ".scurbFridgeCard h4",
      text.fridgeTypes
    );

    scurbSetBathroomPopupTexts(
      ".scurbFridgeCard > span",
      text.fridgeTimes
    );

    scurbSetBathroomPopupTexts(
      ".scurbServiceIncludeItem > span:last-child",
      text.includeItems
    );

    scurbSetBathroomPopupTexts(
      ".scurbServiceNotIncludesTitle",
      text.notIncludesTitle
    );

    scurbSetBathroomPopupTexts(
      ".scurbServiceHowDoneTitle",
      text.processTitle
    );

    scurbSetBathroomPopupTexts(
      ".scurbHowDoneItemTitle",
      text.processItemTitles
    );

    scurbSetBathroomPopupTexts(
      ".scurbHowDoneItemText",
      text.processItemTexts
    );

    scurbSetBathroomPopupTexts(
      ".scurbServiceFaqTitle",
      text.faqTitle
    );

    scurbSetBathroomPopupTexts(
      ".scurbFaqQuestion > span:first-child",
      text.faqQuestions
    );

    scurbSetBathroomPopupTexts(
      ".scurbFaqAnswer",
      text.faqAnswers
    );

  }


  scurbBathroomLanguageToggle.addEventListener(
    "change",
    function(){

     changeBathroomPopupLanguage(
  this.checked
);

    }
  );
}


/* =========================================
   OPEN FROM CARD
========================================= */

document.addEventListener("DOMContentLoaded", function(){

 const bathroomCard =
  document.getElementById("openBathroomCleaningPopup");
  if(!bathroomCard){
    console.error("Bathroom cleaning card not found");
    return;
  }

  bathroomCard.addEventListener("click", function(event){

    if(event.target.closest(".scurbServiceAddBtn")){
      return;
    }

    openBathroomCleaningPopup();

  });

});



let scurbBathroomTouchStartX = 0;
let scurbBathroomTouchStartY = 0;
let scurbBathroomTouchCurrentX = 0;
let scurbBathroomSwipeSide = "";

function closeBathroomCleaningPopup(){

  const popup =
    document.getElementById(
      "bathroomCleaningPopup"
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
        "bathroomCleaningPopup"
      );

    if(
      !popup ||
      !popup.innerHTML.trim()
    ){
      return;
    }

    const touch =
      event.touches[0];

    scurbBathroomTouchStartX =
      touch.clientX;

    scurbBathroomTouchStartY =
      touch.clientY;

    scurbBathroomTouchCurrentX =
      touch.clientX;

    scurbBathroomSwipeSide = "";

    const screenWidth =
      window.innerWidth;

    if(
      scurbBathroomTouchStartX <= 35
    ){
      scurbBathroomSwipeSide = "left";
    }
    else if(
      scurbBathroomTouchStartX >=
      screenWidth - 35
    ){
      scurbBathroomSwipeSide = "right";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchmove",
  function(event){

    if(!scurbBathroomSwipeSide){
      return;
    }

    const touch =
      event.touches[0];

    scurbBathroomTouchCurrentX =
      touch.clientX;

    const moveX =
      scurbBathroomTouchCurrentX -
      scurbBathroomTouchStartX;

    const moveY =
      touch.clientY -
      scurbBathroomTouchStartY;

    if(
      Math.abs(moveY) >
      Math.abs(moveX)
    ){
      scurbBathroomSwipeSide = "";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchend",
  function(){

    if(!scurbBathroomSwipeSide){
      return;
    }

    const swipeDistance =
      scurbBathroomTouchCurrentX -
      scurbBathroomTouchStartX;

    const leftSwipePassed =
      scurbBathroomSwipeSide === "left" &&
      swipeDistance >= 90;

    const rightSwipePassed =
      scurbBathroomSwipeSide === "right" &&
      swipeDistance <= -90;

    if(
      leftSwipePassed ||
      rightSwipePassed
    ){
      closeBathroomCleaningPopup();
    }

    scurbBathroomSwipeSide = "";

  }
);


document.addEventListener(
  "touchcancel",
  function(){
    scurbBathroomSwipeSide = "";
  }
);
