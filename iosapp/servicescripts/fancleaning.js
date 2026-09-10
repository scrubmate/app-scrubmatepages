/* =========================================
   COMMON SERVICE POPUP
========================================= */
const fanCleaningPopup =
  document.getElementById("fanCleaningPopup");

function openFanCleaningPopup(){
  fanCleaningPopup.innerHTML = `
    <div class="scurbServicePopup show">

      <div class="scurbServicePopupImage">

  <div class="scurbPopupImageShimmer"></div>

  <img
   id="fanCleaningPopupHeroImage"
    class="scurbPopupLazyImage"
    data-src="mainn/fan.jpeg"
    alt="Fan Cleaning"
  >

  <div class="scurbServicePopupTop">

         <button
  type="button"
  class="scurbServicePopupIconBtn"
 id="closeFanCleaningPopup"
  aria-label="Go back"
>
  <i class="fa-solid fa-chevron-left"></i>
</button>

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="shareFanCleaningPopup"
  aria-label="Share"
>
  <i class="fa-solid fa-share-nodes"></i>
</button>

        </div>

           </div>

      <div class="scurbServiceHeaderRow">

  <div class="scurbServiceHeaderInfo">

    <h1 class="scurbServiceHeaderTitle">
  Fan Cleaning
</h1>

    <div class="scurbServiceHeaderPrices">

      <span class="scurbServiceSalePrice">
        ₹50
      </span>

      <span class="scurbServiceStrikePrice">
        ₹90
      </span>

    </div>

  </div>

  <button
  type="button"
  class="scurbServiceHeaderBookBtn"
  id="fanCleaningBookBtn"
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
  Clean and Dust-Free Fans
</h3>

<p class="scurbServiceDescription">
  Get ceiling and wall fans cleaned to remove dust, dirt, and buildup from blades, guards, and accessible outer surfaces for a cleaner room and smoother airflow.
</p>


<h3 class="scurbServiceSubTitleCompact">
  Includes
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Dust removal from fan blades</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Wiping accessible fan surfaces</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Cleaning blade edges and joints</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Exterior motor-body wiping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Wall-fan guard exterior cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Exhaust-fan outer surface cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Dust collection around the work area</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Final dry wipe and clean finish</span>
</div>


<h3 class="scurbServiceNotIncludesTitle">
  Doesn't Include
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Electrical or motor repair</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Fan removal or installation</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Cleaning at unsafe heights</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Replacement of damaged parts</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Internal motor cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Painting or rust treatment</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Cleaning inaccessible ceiling areas</span>
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
        Switch Off the Power
</h4>
      <p class="scurbHowDoneItemText">
        Switch off the fan and power supply before the professional begins cleaning.
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
        Clear the Area Below
</h4>
      <p class="scurbHowDoneItemText">
        Remove furniture, clothes, and personal items from the area directly below the fan.
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
        Inform About Damaged Fans
</h4>
      <p class="scurbHowDoneItemText">
        Inform the professional about loose blades, unusual noise, damage, or electrical issues.
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
        Keep Safe Access Ready
</h4>
      <p class="scurbHowDoneItemText">
        Provide safe access to the fan and ensure the surrounding floor is dry and clear.
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
        Check the Fan After Cleaning
</h4>
      <p class="scurbHowDoneItemText">
        Inspect the cleaned fan blades and accessible surfaces before the service is completed.
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
        Pricing depends on the number of fans, fan type, height, and level of dust buildup.
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
const fanCleaningPopupLazyImages =
  fanCleaningPopup.querySelectorAll(
    ".scurbPopupLazyImage"
  );

fanCleaningPopupLazyImages.forEach(function(image){
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

  const scurbFanCleaningFaqQuestions =
    fanCleaningPopup.querySelectorAll(
      ".scurbFaqQuestion"
    );

  scurbFanCleaningFaqQuestions.forEach(function(question){

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

      fanCleaningPopup
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
  .getElementById("closeFanCleaningPopup")
  .addEventListener(
    "click",
    closeFanCleaningPopup
  );
  const scurbFanCleaningLanguageToggle =
    document.getElementById("scurbLanguageToggle");

  function scurbSetFanCleaningPopupTexts(selector, texts){

    const elements =
      fanCleaningPopup.querySelectorAll(selector);

    elements.forEach(function(element, index){

      if(texts[index] !== undefined){
        element.textContent = texts[index];
      }

    });

  }


  function changeFanCleaningPopupLanguage(isTelugu){
    const language = isTelugu ? "te" : "en";

    const fanCleaningPopupTranslations = {
      en: {

        detailsTitle: [
          "About this Service"
        ],

        subTitles: [
          "Clean and Dust-Free Fans"
        ],

        descriptions: [
          "Get ceiling and wall fans cleaned to remove dust, dirt, and buildup from blades, guards, and accessible outer surfaces for a cleaner room and smoother airflow."
        ],

        compactTitles: [
          "How Long Does It Take?",
          "Includes"
        ],

        compactDescriptions: [
          "The estimated service duration depends on the number of fans, fan type, height, and level of dust buildup."
        ],

        fridgeTypes: [
          "Ceiling Fan",
          "Wall Fan",
          "Exhaust Fan"
        ],

        fridgeTimes: [
          "20 mins",
          "25 mins",
          "20 mins"
        ],

        includeItems: [
          "Dust removal from fan blades",
          "Wiping accessible fan surfaces",
          "Cleaning blade edges and joints",
          "Exterior motor-body wiping",
          "Wall-fan guard exterior cleaning",
          "Exhaust-fan outer surface cleaning",
          "Dust collection around the work area",
          "Final dry wipe and clean finish",
          "Electrical or motor repair",
          "Fan removal or installation",
          "Cleaning at unsafe heights",
          "Replacement of damaged parts",
          "Internal motor cleaning",
          "Painting or rust treatment",
          "Cleaning inaccessible ceiling areas"
        ],

        notIncludesTitle: [
          "Doesn't Include"
        ],

        processTitle: [
          "How Is It Done?"
        ],

        processItemTitles: [
          "Switch Off the Power",
          "Clear the Area Below",
          "Inform About Damaged Fans",
          "Keep Safe Access Ready",
          "Check the Fan After Cleaning"
        ],

        processItemTexts: [
          "Switch off the fan and power supply before the professional begins cleaning.",
          "Remove furniture, clothes, and personal items from the area directly below the fan.",
          "Inform the professional about loose blades, unusual noise, damage, or electrical issues.",
          "Provide safe access to the fan and ensure the surrounding floor is dry and clear.",
          "Inspect the cleaned fan blades and accessible surfaces before the service is completed."
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
          "Pricing depends on the number of fans, fan type, height, and level of dust buildup.",
          "You can reach Scrub Mate support anytime through the Help section available in the app."
        ]

      },


      te: {

        detailsTitle: [
          "ఈ సేవ గురించి"
        ],

        subTitles: [
          "శుభ్రంగా, దుమ్ము లేని ఫ్యాన్లు"
        ],

        descriptions: [
          "సీలింగ్, వాల్ మరియు ఎగ్జాస్ట్ ఫ్యాన్ల బ్లేడ్లు, గార్డులు మరియు అందుబాటులో ఉన్న బయటి భాగాలపై ఉన్న దుమ్ము, మురికి మరియు పేరుకుపోయిన మలినాలను తొలగిస్తాము."
        ],

        compactTitles: [
          "ఈ సేవకు ఎంత సమయం పడుతుంది?",
          "సేవలో ఉండేవి"
        ],

        compactDescriptions: [
          "ఫ్యాన్ల సంఖ్య, ఫ్యాన్ రకం, ఎత్తు మరియు దుమ్ము స్థాయిని బట్టి సేవకు పట్టే సమయం మారుతుంది."
        ],

        fridgeTypes: [
          "సీలింగ్ ఫ్యాన్",
          "వాల్ ఫ్యాన్",
          "ఎగ్జాస్ట్ ఫ్యాన్"
        ],

        fridgeTimes: [
          "20 నిమిషాలు",
          "25 నిమిషాలు",
          "20 నిమిషాలు"
        ],

        includeItems: [
          "ఫ్యాన్ బ్లేడ్లపై దుమ్ము తొలగింపు",
          "అందుబాటులో ఉన్న ఫ్యాన్ ఉపరితలాలు తుడవడం",
          "బ్లేడ్ అంచులు మరియు జాయింట్లు శుభ్రత",
          "మోటార్ బయటి భాగం తుడవడం",
          "వాల్ ఫ్యాన్ గార్డ్ బయటి భాగం శుభ్రత",
          "ఎగ్జాస్ట్ ఫ్యాన్ బయటి భాగం శుభ్రత",
          "పని ప్రాంతంలో పడిన దుమ్ము సేకరణ",
          "చివరిగా పొడిగా తుడిచి శుభ్రంగా ఉంచడం",
          "ఎలక్ట్రికల్ లేదా మోటార్ మరమ్మతు",
          "ఫ్యాన్ తొలగింపు లేదా అమరిక",
          "ప్రమాదకరమైన ఎత్తులో శుభ్రత",
          "పాడైన భాగాల మార్పు",
          "మోటార్ లోపలి భాగం శుభ్రత",
          "పెయింటింగ్ లేదా తుప్పు చికిత్స",
          "అందుబాటులో లేని సీలింగ్ ప్రాంతాల శుభ్రత"
        ],

        notIncludesTitle: [
          "సేవలో లేనివి"
        ],

        processTitle: [
          "ఈ సేవ ఎలా చేయబడుతుంది?"
        ],

        processItemTitles: [
          "విద్యుత్ సరఫరాను ఆఫ్ చేయండి",
          "కింద ఉన్న ప్రాంతాన్ని ఖాళీ చేయండి",
          "పాడైన ఫ్యాన్ల గురించి తెలియజేయండి",
          "సురక్షితమైన ప్రవేశాన్ని సిద్ధంగా ఉంచండి",
          "క్లీనింగ్ తర్వాత ఫ్యాన్‌ను పరిశీలించండి"
        ],

        processItemTexts: [
          "ప్రొఫెషనల్ క్లీనింగ్ ప్రారంభించే ముందు ఫ్యాన్ మరియు విద్యుత్ సరఫరాను ఆఫ్ చేయండి.",
          "ఫ్యాన్ కింద ఉన్న ఫర్నిచర్, బట్టలు మరియు వ్యక్తిగత వస్తువులను తొలగించండి.",
          "లూజ్ బ్లేడ్లు, అసాధారణ శబ్దం, నష్టం లేదా ఎలక్ట్రికల్ సమస్యల గురించి ముందుగా తెలియజేయండి.",
          "ఫ్యాన్‌కు సురక్షితమైన ప్రవేశం కల్పించి, చుట్టుపక్కల నేలను పొడిగా మరియు ఖాళీగా ఉంచండి.",
          "సేవ పూర్తయ్యే ముందు శుభ్రం చేసిన బ్లేడ్లు మరియు అందుబాటులో ఉన్న ఉపరితలాలను పరిశీలించండి."
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
          "ఫ్యాన్ల సంఖ్య, ఫ్యాన్ రకం, ఎత్తు మరియు దుమ్ము స్థాయిని బట్టి ధర నిర్ణయించబడుతుంది.",
          "యాప్‌లో ఉన్న Help విభాగం ద్వారా మీరు ఎప్పుడైనా Scrub Mate సపోర్ట్‌ను సంప్రదించవచ్చు."
        ]

      }

    };


    const text =
  fanCleaningPopupTranslations[language];

    scurbSetFanCleaningPopupTexts(
      ".scurbServiceDetailsTitle",
      text.detailsTitle
    );

    scurbSetFanCleaningPopupTexts(
      ".scurbServiceSubTitle",
      text.subTitles
    );

    scurbSetFanCleaningPopupTexts(
      ".scurbServiceDescription",
      text.descriptions
    );

    scurbSetFanCleaningPopupTexts(
      ".scurbServiceSubTitleCompact",
      text.compactTitles
    );

    scurbSetFanCleaningPopupTexts(
      ".scurbServiceDescriptionCompact",
      text.compactDescriptions
    );

    scurbSetFanCleaningPopupTexts(
      ".scurbFridgeCard h4",
      text.fridgeTypes
    );

    scurbSetFanCleaningPopupTexts(
      ".scurbFridgeCard > span",
      text.fridgeTimes
    );

    scurbSetFanCleaningPopupTexts(
      ".scurbServiceIncludeItem > span:last-child",
      text.includeItems
    );

    scurbSetFanCleaningPopupTexts(
      ".scurbServiceNotIncludesTitle",
      text.notIncludesTitle
    );

    scurbSetFanCleaningPopupTexts(
      ".scurbServiceHowDoneTitle",
      text.processTitle
    );

    scurbSetFanCleaningPopupTexts(
      ".scurbHowDoneItemTitle",
      text.processItemTitles
    );

    scurbSetFanCleaningPopupTexts(
      ".scurbHowDoneItemText",
      text.processItemTexts
    );

    scurbSetFanCleaningPopupTexts(
      ".scurbServiceFaqTitle",
      text.faqTitle
    );

    scurbSetFanCleaningPopupTexts(
      ".scurbFaqQuestion > span:first-child",
      text.faqQuestions
    );

    scurbSetFanCleaningPopupTexts(
      ".scurbFaqAnswer",
      text.faqAnswers
    );

  }


  scurbFanCleaningLanguageToggle.addEventListener(
    "change",
    function(){

     changeFanCleaningPopupLanguage(
  this.checked
);

    }
  );
}


/* =========================================
   OPEN FROM CARD
========================================= */

document.addEventListener("DOMContentLoaded", function(){

 const fanCleaningCard =
  document.getElementById("openFanCleaningPopup");
  if(!fanCleaningCard){
    console.error("Fan Cleaning card not found");
    return;
  }

  fanCleaningCard.addEventListener("click", function(event){

    if(event.target.closest(".scurbServiceAddBtn")){
      return;
    }

    openFanCleaningPopup();

  });

});



let scurbFanCleaningTouchStartX = 0;
let scurbFanCleaningTouchStartY = 0;
let scurbFanCleaningTouchCurrentX = 0;
let scurbFanCleaningSwipeSide = "";

function closeFanCleaningPopup(){

  const popup =
    document.getElementById(
      "fanCleaningPopup"
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
        "fanCleaningPopup"
      );

    if(
      !popup ||
      !popup.innerHTML.trim()
    ){
      return;
    }

    const touch =
      event.touches[0];

    scurbFanCleaningTouchStartX =
      touch.clientX;

    scurbFanCleaningTouchStartY =
      touch.clientY;

    scurbFanCleaningTouchCurrentX =
      touch.clientX;

    scurbFanCleaningSwipeSide = "";

    const screenWidth =
      window.innerWidth;

    if(
      scurbFanCleaningTouchStartX <= 35
    ){
      scurbFanCleaningSwipeSide = "left";
    }
    else if(
      scurbFanCleaningTouchStartX >=
      screenWidth - 35
    ){
      scurbFanCleaningSwipeSide = "right";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchmove",
  function(event){

    if(!scurbFanCleaningSwipeSide){
      return;
    }

    const touch =
      event.touches[0];

    scurbFanCleaningTouchCurrentX =
      touch.clientX;

    const moveX =
      scurbFanCleaningTouchCurrentX -
      scurbFanCleaningTouchStartX;

    const moveY =
      touch.clientY -
      scurbFanCleaningTouchStartY;

    if(
      Math.abs(moveY) >
      Math.abs(moveX)
    ){
      scurbFanCleaningSwipeSide = "";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchend",
  function(){

    if(!scurbFanCleaningSwipeSide){
      return;
    }

    const swipeDistance =
      scurbFanCleaningTouchCurrentX -
      scurbFanCleaningTouchStartX;

    const leftSwipePassed =
      scurbFanCleaningSwipeSide === "left" &&
      swipeDistance >= 90;

    const rightSwipePassed =
      scurbFanCleaningSwipeSide === "right" &&
      swipeDistance <= -90;

    if(
      leftSwipePassed ||
      rightSwipePassed
    ){
      closeFanCleaningPopup();
    }

    scurbFanCleaningSwipeSide = "";

  }
);


document.addEventListener(
  "touchcancel",
  function(){
    scurbFanCleaningSwipeSide = "";
  }
);
