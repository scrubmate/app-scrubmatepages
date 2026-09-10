/* =========================================
   COMMON SERVICE POPUP
========================================= */
const utilitiesCleaningPopup =
  document.getElementById("utilitiesCleaningPopup");

function openUtilitiesCleaningPopup(){
  utilitiesCleaningPopup.innerHTML = `
    <div class="scurbServicePopup show">

      <div class="scurbServicePopupImage">

  <div class="scurbPopupImageShimmer"></div>

  <img
   id="utilitiesPopupHeroImage"
    class="scurbPopupLazyImage"
    data-src="mainn/utilizes.jpeg"
    alt="Utilities Cleaning"
  >

  <div class="scurbServicePopupTop">

         <button
  type="button"
  class="scurbServicePopupIconBtn"
 id="closeUtilitiesCleaningPopup"
  aria-label="Go back"
>
  <i class="fa-solid fa-chevron-left"></i>
</button>

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="shareUtilitiesCleaningPopup"
  aria-label="Share"
>
  <i class="fa-solid fa-share-nodes"></i>
</button>

        </div>

           </div>

      <div class="scurbServiceHeaderRow">

  <div class="scurbServiceHeaderInfo">

    <h1 class="scurbServiceHeaderTitle">
  Utilities Cleaning
</h1>

    <div class="scurbServiceHeaderPrices">

      <span class="scurbServiceSalePrice">
        ₹9
      </span>

      <span class="scurbServiceStrikePrice">
        ₹20
      </span>

    </div>

  </div>

 <button
  type="button"
  class="scurbServiceHeaderBookBtn"
  id="utilitiesCleaningBookBtn"
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
  Clean and Organized Utility Areas
</h3>

<p class="scurbServiceDescription">
  Get your utility area thoroughly cleaned and organized. We remove dust, dirt, stains, and buildup from utility sinks, shelves, storage areas, washing-machine surroundings, and frequently used surfaces.
</p>

<h3 class="scurbServiceSubTitleCompact">
  How Long Does It Take?
</h3>

<p class="scurbServiceDescriptionCompact">
  The estimated service duration depends on the size, condition, and number of utility areas.
</p>

<div class="scurbFridgeTypes">

  <div class="scurbFridgeCard">

    <div class="scurbPopupSmallImageWrap">

      <div class="scurbPopupSmallImageShimmer"></div>

      <img
        class="scurbPopupLazyImage"
        data-src="popup/utilizes1.png"
        alt="Small Utility Area"
      >

    </div>

    <h4>Small Area</h4>
    <span>45 mins</span>

  </div>


  <div class="scurbFridgeCard">

    <div class="scurbPopupSmallImageWrap">

      <div class="scurbPopupSmallImageShimmer"></div>

      <img
        class="scurbPopupLazyImage"
        data-src="popup/utilizes2.png"
        alt="Medium Utility Area"
      >

    </div>

    <h4>Medium Area</h4>
    <span>60 mins</span>

  </div>


  <div class="scurbFridgeCard">

    <div class="scurbPopupSmallImageWrap">

      <div class="scurbPopupSmallImageShimmer"></div>

      <img
        class="scurbPopupLazyImage"
        data-src="popup/utilizes3.png"
        alt="Large Utility Area"
      >

    </div>

    <h4>Large Area</h4>
    <span>90 mins</span>

  </div>

</div>
<h3 class="scurbServiceSubTitleCompact">
  Includes
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Utility sink cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Shelves and storage surfaces cleaned</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Washing-machine exterior cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Floor sweeping and mopping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Stain and dirt removal</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Wall and tile wiping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Dust removal from corners</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Final wipe and fresh finish</span>
</div>


<h3 class="scurbServiceNotIncludesTitle">
  Doesn't Include
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Washing-machine repair</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Plumbing or electrical repair</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Removal of heavy construction waste</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Moving heavy appliances</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Cleaning inside appliances</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Replacement of damaged parts</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Disposal of hazardous materials</span>
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
        Remove Stored Items
      </h4>
      <p class="scurbHowDoneItemText">
        Remove clothes, containers, buckets, and personal items before the service begins.
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
        Clear the Utility Floor
      </h4>
      <p class="scurbHowDoneItemText">
        Clear the utility floor so the professional can clean every corner properly.
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
        Inform the professional about stubborn stains, grease, or damaged surfaces.
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
        Make sure water and electricity are available when required for the service.
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
        Check the Area After Cleaning
      </h4>
      <p class="scurbHowDoneItemText">
        Inspect the cleaned area before the professional completes the service.
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
        Pricing depends on the utility-area size, condition, and the service selected at the time of booking.
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
const utilitiesPopupLazyImages =
  utilitiesCleaningPopup.querySelectorAll(
    ".scurbPopupLazyImage"
  );

utilitiesPopupLazyImages.forEach(function(image){
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

  const scurbFaqQuestions =
    utilitiesCleaningPopup.querySelectorAll(
      ".scurbFaqQuestion"
    );

  scurbFaqQuestions.forEach(function(question){

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

      utilitiesCleaningPopup
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
  .getElementById("closeUtilitiesCleaningPopup")
  .addEventListener(
    "click",
    closeUtilitiesCleaningPopup
  );
  const scurbUtilitiesLanguageToggle =
    document.getElementById("scurbLanguageToggle");

  function scurbSetUtilitiesPopupTexts(selector, texts){

    const elements =
      utilitiesCleaningPopup.querySelectorAll(selector);

    elements.forEach(function(element, index){

      if(texts[index] !== undefined){
        element.textContent = texts[index];
      }

    });

  }


  function changeUtilitiesPopupLanguage(isTelugu){
    const language = isTelugu ? "te" : "en";

    const utilitiesPopupTranslations = {
      en: {

        detailsTitle: [
          "About this Service"
        ],

        subTitles: [
          "Clean and Organized Utility Areas"
        ],

        descriptions: [
          "Get your utility area thoroughly cleaned and organized. We remove dust, dirt, stains, and buildup from utility sinks, shelves, storage areas, washing-machine surroundings, and frequently used surfaces."
        ],

        compactTitles: [
          "How Long Does It Take?",
          "Includes"
        ],

        compactDescriptions: [
          "The estimated service duration depends on the size, condition, and number of utility areas."
        ],

        fridgeTypes: [
          "Small Area",
          "Medium Area",
          "Large Area"
        ],

        fridgeTimes: [
          "45 mins",
          "60 mins",
          "90 mins"
        ],

        includeItems: [
          "Utility sink cleaning",
          "Shelves and storage surfaces cleaned",
          "Washing-machine exterior cleaning",
          "Floor sweeping and mopping",
          "Stain and dirt removal",
          "Wall and tile wiping",
          "Dust removal from corners",
          "Final wipe and fresh finish",

          "Washing-machine repair",
          "Plumbing or electrical repair",
          "Removal of heavy construction waste",
          "Moving heavy appliances",
          "Cleaning inside appliances",
          "Replacement of damaged parts",
          "Disposal of hazardous materials"
        ],

        notIncludesTitle: [
          "Doesn't Include"
        ],

        processTitle: [
          "How Is It Done?"
        ],

        processItemTitles: [
          "Remove Stored Items",
          "Clear the Utility Floor",
          "Inform About Heavy Stains",
          "Keep Water Access Ready",
          "Check the Area After Cleaning"
        ],

        processItemTexts: [
          "Remove clothes, containers, buckets, and personal items before the service begins.",
          "Clear the utility floor so the professional can clean every corner properly.",
          "Inform the professional about stubborn stains, grease, or damaged surfaces.",
          "Make sure water and electricity are available when required for the service.",
          "Inspect the cleaned area before the professional completes the service."
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
          "Pricing depends on the utility-area size, condition, and the service selected at the time of booking.",
          "You can reach Scrub Mate support anytime through the Help section available in the app."
        ]

      },


      te: {

        detailsTitle: [
          "ఈ సేవ గురించి"
        ],

        subTitles: [
          "శుభ్రంగా మరియు క్రమబద్ధంగా ఉండే యుటిలిటీ ప్రాంతాలు"
        ],

        descriptions: [
          "మీ యుటిలిటీ ప్రాంతాన్ని పూర్తిగా శుభ్రం చేసి క్రమబద్ధంగా ఉంచుతాము. యుటిలిటీ సింక్‌లు, షెల్ఫ్‌లు, నిల్వ ప్రదేశాలు, వాషింగ్ మెషిన్ చుట్టుపక్కల భాగాలు మరియు తరచుగా ఉపయోగించే ఉపరితలాలపై ఉన్న దుమ్ము, మురికి, మరకలు మరియు పేరుకుపోయిన మలినాలను తొలగిస్తాము."
        ],

        compactTitles: [
          "ఈ సేవకు ఎంత సమయం పడుతుంది?",
          "సేవలో ఉండేవి"
        ],

        compactDescriptions: [
          "యుటిలిటీ ప్రాంతం పరిమాణం, పరిస్థితి మరియు ప్రాంతాల సంఖ్యను బట్టి సేవకు పట్టే సమయం మారుతుంది."
        ],

        fridgeTypes: [
          "చిన్న ప్రాంతం",
          "మధ్యస్థ ప్రాంతం",
          "పెద్ద ప్రాంతం"
        ],

        fridgeTimes: [
          "45 నిమిషాలు",
          "60 నిమిషాలు",
          "90 నిమిషాలు"
        ],

        includeItems: [
          "యుటిలిటీ సింక్ శుభ్రత",
          "షెల్ఫ్‌లు మరియు నిల్వ ఉపరితలాల శుభ్రత",
          "వాషింగ్ మెషిన్ బయటి భాగం శుభ్రత",
          "నేల ఊడ్చడం మరియు తుడవడం",
          "మరకలు మరియు మురికి తొలగింపు",
          "గోడలు మరియు టైల్స్ తుడవడం",
          "మూలల్లోని దుమ్ము తొలగింపు",
          "చివరిగా తుడిచి తాజాగా ఉంచడం",

          "వాషింగ్ మెషిన్ మరమ్మతు",
          "ప్లంబింగ్ లేదా ఎలక్ట్రికల్ మరమ్మతు",
          "భారీ నిర్మాణ వ్యర్థాల తొలగింపు",
          "భారీ ఉపకరణాలను కదిలించడం",
          "ఉపకరణాల లోపలి భాగం శుభ్రత",
          "పాడైన భాగాల మార్పు",
          "ప్రమాదకర పదార్థాల తొలగింపు"
        ],

        notIncludesTitle: [
          "సేవలో లేనివి"
        ],

        processTitle: [
          "ఈ సేవ ఎలా చేయబడుతుంది?"
        ],

        processItemTitles: [
          "నిల్వ చేసిన వస్తువులను తొలగించండి",
          "యుటిలిటీ నేలను ఖాళీ చేయండి",
          "కఠినమైన మరకల గురించి తెలియజేయండి",
          "నీటి సదుపాయాన్ని సిద్ధంగా ఉంచండి",
          "శుభ్రం చేసిన ప్రాంతాన్ని పరిశీలించండి"
        ],

        processItemTexts: [
          "సేవ ప్రారంభమయ్యే ముందు బట్టలు, డబ్బాలు, బకెట్లు మరియు వ్యక్తిగత వస్తువులను తొలగించండి.",
          "ప్రతి మూలను సరిగా శుభ్రం చేయడానికి యుటిలిటీ నేలను ఖాళీగా ఉంచండి.",
          "కఠినమైన మరకలు, గ్రీజు లేదా దెబ్బతిన్న ఉపరితలాల గురించి ప్రొఫెషనల్‌కు తెలియజేయండి.",
          "సేవకు అవసరమైనప్పుడు నీరు మరియు విద్యుత్ అందుబాటులో ఉండేలా చూడండి.",
          "ప్రొఫెషనల్ సేవను పూర్తి చేసే ముందు శుభ్రం చేసిన ప్రాంతాన్ని పరిశీలించండి."
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
          "యుటిలిటీ ప్రాంతం పరిమాణం, పరిస్థితి మరియు మీరు ఎంచుకున్న సేవను బట్టి ధర నిర్ణయించబడుతుంది.",
          "యాప్‌లో ఉన్న Help విభాగం ద్వారా మీరు ఎప్పుడైనా Scrub Mate సపోర్ట్‌ను సంప్రదించవచ్చు."
        ]

      }

    };


    const text =
  utilitiesPopupTranslations[language];

    scurbSetUtilitiesPopupTexts(
      ".scurbServiceDetailsTitle",
      text.detailsTitle
    );

    scurbSetUtilitiesPopupTexts(
      ".scurbServiceSubTitle",
      text.subTitles
    );

    scurbSetUtilitiesPopupTexts(
      ".scurbServiceDescription",
      text.descriptions
    );

    scurbSetUtilitiesPopupTexts(
      ".scurbServiceSubTitleCompact",
      text.compactTitles
    );

    scurbSetUtilitiesPopupTexts(
      ".scurbServiceDescriptionCompact",
      text.compactDescriptions
    );

    scurbSetUtilitiesPopupTexts(
      ".scurbFridgeCard h4",
      text.fridgeTypes
    );

    scurbSetUtilitiesPopupTexts(
      ".scurbFridgeCard > span",
      text.fridgeTimes
    );

    scurbSetUtilitiesPopupTexts(
      ".scurbServiceIncludeItem > span:last-child",
      text.includeItems
    );

    scurbSetUtilitiesPopupTexts(
      ".scurbServiceNotIncludesTitle",
      text.notIncludesTitle
    );

    scurbSetUtilitiesPopupTexts(
      ".scurbServiceHowDoneTitle",
      text.processTitle
    );

    scurbSetUtilitiesPopupTexts(
      ".scurbHowDoneItemTitle",
      text.processItemTitles
    );

    scurbSetUtilitiesPopupTexts(
      ".scurbHowDoneItemText",
      text.processItemTexts
    );

    scurbSetUtilitiesPopupTexts(
      ".scurbServiceFaqTitle",
      text.faqTitle
    );

    scurbSetUtilitiesPopupTexts(
      ".scurbFaqQuestion > span:first-child",
      text.faqQuestions
    );

    scurbSetUtilitiesPopupTexts(
      ".scurbFaqAnswer",
      text.faqAnswers
    );

  }


  scurbUtilitiesLanguageToggle.addEventListener(
    "change",
    function(){

     changeUtilitiesPopupLanguage(
  this.checked
);

    }
  );
}


/* =========================================
   OPEN FROM CARD
========================================= */

document.addEventListener("DOMContentLoaded", function(){

 const utilitiesCard =
  document.getElementById("openUtilitiesCleaningPopup");
  if(!utilitiesCard){
    console.error("Utilities cleaning card not found");
    return;
  }

  utilitiesCard.addEventListener("click", function(event){

    if(event.target.closest(".scurbServiceAddBtn")){
      return;
    }

    openUtilitiesCleaningPopup();

  });

});



let scurbUtilitiesTouchStartX = 0;
let scurbUtilitiesTouchStartY = 0;
let scurbUtilitiesTouchCurrentX = 0;
let scurbUtilitiesSwipeSide = "";

function closeUtilitiesCleaningPopup(){

  const popup =
    document.getElementById(
      "utilitiesCleaningPopup"
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
        "utilitiesCleaningPopup"
      );

    if(
      !popup ||
      !popup.innerHTML.trim()
    ){
      return;
    }

    const touch =
      event.touches[0];

    scurbUtilitiesTouchStartX =
      touch.clientX;

    scurbUtilitiesTouchStartY =
      touch.clientY;

    scurbUtilitiesTouchCurrentX =
      touch.clientX;

    scurbUtilitiesSwipeSide = "";

    const screenWidth =
      window.innerWidth;

    if(
      scurbUtilitiesTouchStartX <= 35
    ){
      scurbUtilitiesSwipeSide = "left";
    }
    else if(
      scurbUtilitiesTouchStartX >=
      screenWidth - 35
    ){
      scurbUtilitiesSwipeSide = "right";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchmove",
  function(event){

    if(!scurbUtilitiesSwipeSide){
      return;
    }

    const touch =
      event.touches[0];

    scurbUtilitiesTouchCurrentX =
      touch.clientX;

    const moveX =
      scurbUtilitiesTouchCurrentX -
      scurbUtilitiesTouchStartX;

    const moveY =
      touch.clientY -
      scurbUtilitiesTouchStartY;

    if(
      Math.abs(moveY) >
      Math.abs(moveX)
    ){
      scurbUtilitiesSwipeSide = "";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchend",
  function(){

    if(!scurbUtilitiesSwipeSide){
      return;
    }

    const swipeDistance =
      scurbUtilitiesTouchCurrentX -
      scurbUtilitiesTouchStartX;

    const leftSwipePassed =
      scurbUtilitiesSwipeSide === "left" &&
      swipeDistance >= 90;

    const rightSwipePassed =
      scurbUtilitiesSwipeSide === "right" &&
      swipeDistance <= -90;

    if(
      leftSwipePassed ||
      rightSwipePassed
    ){
      closeUtilitiesCleaningPopup();
    }

    scurbUtilitiesSwipeSide = "";

  }
);


document.addEventListener(
  "touchcancel",
  function(){
    scurbUtilitiesSwipeSide = "";
  }
);
