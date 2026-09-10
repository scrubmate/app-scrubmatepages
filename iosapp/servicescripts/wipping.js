
const dustingWipingPopup =
  document.getElementById("dustingWipingPopup");

function openDustingWipingPopup(){
  dustingWipingPopup.innerHTML = `
    <div class="scurbServicePopup show">

      <div class="scurbServicePopupImage">

  <div class="scurbPopupImageShimmer"></div>

  <img
   id="dustingWipingPopupHeroImage"
    class="scurbPopupLazyImage"
    data-src="mainn/wipping.jpeg"
    alt="Dusting and Wiping"
  >

  <div class="scurbServicePopupTop">

         <button
  type="button"
  class="scurbServicePopupIconBtn"
 id="closeDustingWipingPopup"
  aria-label="Go back"
>
  <i class="fa-solid fa-chevron-left"></i>
</button>

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="shareDustingWipingPopup"
  aria-label="Share"
>
  <i class="fa-solid fa-share-nodes"></i>
</button>

        </div>

           </div>

      <div class="scurbServiceHeaderRow">

  <div class="scurbServiceHeaderInfo">

    <h1 class="scurbServiceHeaderTitle">
  Dusting and Wiping
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
  id="dustingWipingBookBtn"
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
  Dust-Free and Neatly Wiped Surfaces
</h3>

<p class="scurbServiceDescription">
  Get accessible household surfaces dusted and wiped for a cleaner, fresher home. We clean furniture tops, shelves, tables, doors, switches, and other reachable surfaces.
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
  <span>Table and shelf wiping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Door and handle wiping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Switchboard exterior wiping</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Window-sill dust removal</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Dust removal from reachable corners</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Dry or damp wiping as suitable</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Final surface check and clean finish</span>
</div>


<h3 class="scurbServiceNotIncludesTitle">
  Doesn't Include
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Moving heavy furniture</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Cleaning at unsafe heights</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Deep stain or paint removal</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Inside-cabinet cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Electronic appliance repair</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Full-room floor deep cleaning</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Exterior cleaning requiring ladders</span>
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
        Remove papers, decorations, valuables, and personal items from surfaces before cleaning begins.
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
        Clear Accessible Surfaces
</h4>
      <p class="scurbHowDoneItemText">
        Keep tables, shelves, and other surfaces accessible so they can be dusted and wiped properly.
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
        Inform About Delicate Items
</h4>
      <p class="scurbHowDoneItemText">
        Inform the professional about delicate, antique, or easily damaged items before the service begins.
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
        Make sure water is available if damp wiping is required for selected surfaces.
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
        Check Surfaces After Cleaning
</h4>
      <p class="scurbHowDoneItemText">
        Inspect the dusted and wiped surfaces before the professional completes the service.
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
        Pricing depends on the selected duration, number of rooms, amount of furniture, and surface condition.
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
const dustingWipingPopupLazyImages =
  dustingWipingPopup.querySelectorAll(
    ".scurbPopupLazyImage"
  );

dustingWipingPopupLazyImages.forEach(function(image){
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

  const scurbDustingWipingFaqQuestions =
    dustingWipingPopup.querySelectorAll(
      ".scurbFaqQuestion"
    );

  scurbDustingWipingFaqQuestions.forEach(function(question){

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

      dustingWipingPopup
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
  .getElementById("closeDustingWipingPopup")
  .addEventListener(
    "click",
    closeDustingWipingPopup
  );
  const scurbDustingWipingLanguageToggle =
    document.getElementById("scurbLanguageToggle");

  function scurbSetDustingWipingPopupTexts(selector, texts){

    const elements =
      dustingWipingPopup.querySelectorAll(selector);

    elements.forEach(function(element, index){

      if(texts[index] !== undefined){
        element.textContent = texts[index];
      }

    });

  }


  function changeDustingWipingPopupLanguage(isTelugu){
    const language = isTelugu ? "te" : "en";

    const dustingWipingPopupTranslations = {
      en: {

        detailsTitle: [
          "About this Service"
        ],

        subTitles: [
          "Dust-Free and Neatly Wiped Surfaces"
        ],

        descriptions: [
          "Get accessible household surfaces dusted and wiped for a cleaner, fresher home. We clean furniture tops, shelves, tables, doors, switches, and other reachable surfaces."
        ],

        compactTitles: [
          "How Long Does It Take?",
          "Includes"
        ],

        compactDescriptions: [
          "The estimated service duration depends on the number of rooms, amount of furniture, surface condition, and selected time."
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
          "Dusting accessible furniture surfaces",
          "Table and shelf wiping",
          "Door and handle wiping",
          "Switchboard exterior wiping",
          "Window-sill dust removal",
          "Dust removal from reachable corners",
          "Dry or damp wiping as suitable",
          "Final surface check and clean finish",
          "Moving heavy furniture",
          "Cleaning at unsafe heights",
          "Deep stain or paint removal",
          "Inside-cabinet cleaning",
          "Electronic appliance repair",
          "Full-room floor deep cleaning",
          "Exterior cleaning requiring ladders"
        ],

        notIncludesTitle: [
          "Doesn't Include"
        ],

        processTitle: [
          "How Is It Done?"
        ],

        processItemTitles: [
          "Remove Personal Items",
          "Clear Accessible Surfaces",
          "Inform About Delicate Items",
          "Keep Water Access Ready",
          "Check Surfaces After Cleaning"
        ],

        processItemTexts: [
          "Remove papers, decorations, valuables, and personal items from surfaces before cleaning begins.",
          "Keep tables, shelves, and other surfaces accessible so they can be dusted and wiped properly.",
          "Inform the professional about delicate, antique, or easily damaged items before the service begins.",
          "Make sure water is available if damp wiping is required for selected surfaces.",
          "Inspect the dusted and wiped surfaces before the professional completes the service."
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
          "Pricing depends on the selected duration, number of rooms, amount of furniture, and surface condition.",
          "You can reach Scrub Mate support anytime through the Help section available in the app."
        ]

      },


      te: {

        detailsTitle: [
          "ఈ సేవ గురించి"
        ],

        subTitles: [
          "దుమ్ము లేని, శుభ్రంగా తుడిచిన ఉపరితలాలు"
        ],

        descriptions: [
          "మీ ఇంటిలో అందుబాటులో ఉన్న ఫర్నిచర్, షెల్ఫ్‌లు, టేబుళ్లు, తలుపులు, స్విచ్‌లు మరియు ఇతర ఉపరితలాలపై ఉన్న దుమ్మును తొలగించి శుభ్రంగా తుడుస్తాము."
        ],

        compactTitles: [
          "ఈ సేవకు ఎంత సమయం పడుతుంది?",
          "సేవలో ఉండేవి"
        ],

        compactDescriptions: [
          "గదుల సంఖ్య, ఫర్నిచర్ పరిమాణం, ఉపరితలాల పరిస్థితి మరియు ఎంచుకున్న సమయాన్ని బట్టి సేవకు పట్టే సమయం మారుతుంది."
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
          "అందుబాటులో ఉన్న ఫర్నిచర్‌పై దుమ్ము తొలగింపు",
          "టేబుళ్లు మరియు షెల్ఫ్‌లు తుడవడం",
          "తలుపులు మరియు హ్యాండిల్స్ తుడవడం",
          "స్విచ్‌బోర్డ్ బయటి భాగం తుడవడం",
          "కిటికీ అంచులపై దుమ్ము తొలగింపు",
          "అందుబాటులో ఉన్న మూలల దుమ్ము తొలగింపు",
          "అవసరాన్ని బట్టి పొడి లేదా తడి తుడుపు",
          "చివరిగా ఉపరితలాలను పరిశీలించి శుభ్రంగా ఉంచడం",
          "భారీ ఫర్నిచర్ కదిలించడం",
          "ప్రమాదకరమైన ఎత్తులో శుభ్రత",
          "కఠినమైన మరకలు లేదా పెయింట్ తొలగింపు",
          "క్యాబినెట్ల లోపలి శుభ్రత",
          "ఎలక్ట్రానిక్ ఉపకరణాల మరమ్మతు",
          "పూర్తి గది నేల డీప్ క్లీనింగ్",
          "నిచ్చెన అవసరమైన బయట భాగం శుభ్రత"
        ],

        notIncludesTitle: [
          "సేవలో లేనివి"
        ],

        processTitle: [
          "ఈ సేవ ఎలా చేయబడుతుంది?"
        ],

        processItemTitles: [
          "వ్యక్తిగత వస్తువులను తొలగించండి",
          "అందుబాటులో ఉన్న ఉపరితలాలను ఖాళీ చేయండి",
          "సున్నితమైన వస్తువుల గురించి తెలియజేయండి",
          "నీటి సదుపాయాన్ని సిద్ధంగా ఉంచండి",
          "క్లీనింగ్ తర్వాత ఉపరితలాలను పరిశీలించండి"
        ],

        processItemTexts: [
          "క్లీనింగ్ ప్రారంభమయ్యే ముందు కాగితాలు, అలంకరణ వస్తువులు, విలువైన వస్తువులు మరియు వ్యక్తిగత వస్తువులను తొలగించండి.",
          "టేబుళ్లు, షెల్ఫ్‌లు మరియు ఇతర ఉపరితలాలను సులభంగా శుభ్రం చేయడానికి అందుబాటులో ఉంచండి.",
          "సున్నితమైన, పురాతన లేదా సులభంగా పాడయ్యే వస్తువుల గురించి సేవ ప్రారంభానికి ముందు తెలియజేయండి.",
          "తడి తుడుపు అవసరమైతే నీరు అందుబాటులో ఉండేలా చూడండి.",
          "ప్రొఫెషనల్ సేవను పూర్తి చేసే ముందు శుభ్రం చేసిన ఉపరితలాలను పరిశీలించండి."
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
          "ఎంచుకున్న సమయం, గదుల సంఖ్య, ఫర్నిచర్ పరిమాణం మరియు ఉపరితలాల పరిస్థితిని బట్టి ధర నిర్ణయించబడుతుంది.",
          "యాప్‌లో ఉన్న Help విభాగం ద్వారా మీరు ఎప్పుడైనా Scrub Mate సపోర్ట్‌ను సంప్రదించవచ్చు."
        ]

      }

    };


    const text =
  dustingWipingPopupTranslations[language];

    scurbSetDustingWipingPopupTexts(
      ".scurbServiceDetailsTitle",
      text.detailsTitle
    );

    scurbSetDustingWipingPopupTexts(
      ".scurbServiceSubTitle",
      text.subTitles
    );

    scurbSetDustingWipingPopupTexts(
      ".scurbServiceDescription",
      text.descriptions
    );

    scurbSetDustingWipingPopupTexts(
      ".scurbServiceSubTitleCompact",
      text.compactTitles
    );

    scurbSetDustingWipingPopupTexts(
      ".scurbServiceDescriptionCompact",
      text.compactDescriptions
    );

    scurbSetDustingWipingPopupTexts(
      ".scurbFridgeCard h4",
      text.fridgeTypes
    );

    scurbSetDustingWipingPopupTexts(
      ".scurbFridgeCard > span",
      text.fridgeTimes
    );

    scurbSetDustingWipingPopupTexts(
      ".scurbServiceIncludeItem > span:last-child",
      text.includeItems
    );

    scurbSetDustingWipingPopupTexts(
      ".scurbServiceNotIncludesTitle",
      text.notIncludesTitle
    );

    scurbSetDustingWipingPopupTexts(
      ".scurbServiceHowDoneTitle",
      text.processTitle
    );

    scurbSetDustingWipingPopupTexts(
      ".scurbHowDoneItemTitle",
      text.processItemTitles
    );

    scurbSetDustingWipingPopupTexts(
      ".scurbHowDoneItemText",
      text.processItemTexts
    );

    scurbSetDustingWipingPopupTexts(
      ".scurbServiceFaqTitle",
      text.faqTitle
    );

    scurbSetDustingWipingPopupTexts(
      ".scurbFaqQuestion > span:first-child",
      text.faqQuestions
    );

    scurbSetDustingWipingPopupTexts(
      ".scurbFaqAnswer",
      text.faqAnswers
    );

  }


  scurbDustingWipingLanguageToggle.addEventListener(
    "change",
    function(){

     changeDustingWipingPopupLanguage(
  this.checked
);

    }
  );
}


/* =========================================
   OPEN FROM CARD
========================================= */

document.addEventListener("DOMContentLoaded", function(){

 const dustingWipingCard =
  document.getElementById("openDustingWipingPopup");
  if(!dustingWipingCard){
    console.error("Dusting and Wiping card not found");
    return;
  }

  dustingWipingCard.addEventListener("click", function(event){

    if(event.target.closest(".scurbServiceAddBtn")){
      return;
    }

    openDustingWipingPopup();

  });

});



let scurbDustingWipingTouchStartX = 0;
let scurbDustingWipingTouchStartY = 0;
let scurbDustingWipingTouchCurrentX = 0;
let scurbDustingWipingSwipeSide = "";

function closeDustingWipingPopup(){

  const popup =
    document.getElementById(
      "dustingWipingPopup"
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
        "dustingWipingPopup"
      );

    if(
      !popup ||
      !popup.innerHTML.trim()
    ){
      return;
    }

    const touch =
      event.touches[0];

    scurbDustingWipingTouchStartX =
      touch.clientX;

    scurbDustingWipingTouchStartY =
      touch.clientY;

    scurbDustingWipingTouchCurrentX =
      touch.clientX;

    scurbDustingWipingSwipeSide = "";

    const screenWidth =
      window.innerWidth;

    if(
      scurbDustingWipingTouchStartX <= 35
    ){
      scurbDustingWipingSwipeSide = "left";
    }
    else if(
      scurbDustingWipingTouchStartX >=
      screenWidth - 35
    ){
      scurbDustingWipingSwipeSide = "right";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchmove",
  function(event){

    if(!scurbDustingWipingSwipeSide){
      return;
    }

    const touch =
      event.touches[0];

    scurbDustingWipingTouchCurrentX =
      touch.clientX;

    const moveX =
      scurbDustingWipingTouchCurrentX -
      scurbDustingWipingTouchStartX;

    const moveY =
      touch.clientY -
      scurbDustingWipingTouchStartY;

    if(
      Math.abs(moveY) >
      Math.abs(moveX)
    ){
      scurbDustingWipingSwipeSide = "";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchend",
  function(){

    if(!scurbDustingWipingSwipeSide){
      return;
    }

    const swipeDistance =
      scurbDustingWipingTouchCurrentX -
      scurbDustingWipingTouchStartX;

    const leftSwipePassed =
      scurbDustingWipingSwipeSide === "left" &&
      swipeDistance >= 90;

    const rightSwipePassed =
      scurbDustingWipingSwipeSide === "right" &&
      swipeDistance <= -90;

    if(
      leftSwipePassed ||
      rightSwipePassed
    ){
      closeDustingWipingPopup();
    }

    scurbDustingWipingSwipeSide = "";

  }
);


document.addEventListener(
  "touchcancel",
  function(){
    scurbDustingWipingSwipeSide = "";
  }
);
