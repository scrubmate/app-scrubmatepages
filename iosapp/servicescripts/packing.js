/* =========================================
   COMMON SERVICE POPUP
========================================= */
const packingUnpackingPopup =
  document.getElementById("packingUnpackingPopup");

function openPackingUnpackingPopup(){
  packingUnpackingPopup.innerHTML = `
    <div class="scurbServicePopup show">

      <div class="scurbServicePopupImage">

  <div class="scurbPopupImageShimmer"></div>

  <img
   id="packingUnpackingPopupHeroImage"
    class="scurbPopupLazyImage"
    data-src="mainn/packing.jpeg"
    alt="Packing and Unpacking"
  >

  <div class="scurbServicePopupTop">

         <button
  type="button"
  class="scurbServicePopupIconBtn"
 id="closePackingUnpackingPopup"
  aria-label="Go back"
>
  <i class="fa-solid fa-chevron-left"></i>
</button>

         <button
  type="button"
  class="scurbServicePopupIconBtn"
  id="sharePackingUnpackingPopup"
  aria-label="Share"
>
  <i class="fa-solid fa-share-nodes"></i>
</button>

        </div>

           </div>

      <div class="scurbServiceHeaderRow">

  <div class="scurbServiceHeaderInfo">

    <h1 class="scurbServiceHeaderTitle">
  Packing and Unpacking
</h1>

    <div class="scurbServiceHeaderPrices">

      <span class="scurbServiceSalePrice">
        ₹70
      </span>

      <span class="scurbServiceStrikePrice">
        ₹110
      </span>

    </div>

  </div>

 <button
  type="button"
  class="scurbServiceHeaderBookBtn"
  id="packingUnpackingBookBtn"
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
  Organized Packing and Unpacking Support
</h3>

<p class="scurbServiceDescription">
  Get help packing household items securely and unpacking them in an organized way. The professional assists with sorting, wrapping, boxing, labeling, opening boxes, and arranging accessible items.
</p>


<h3 class="scurbServiceSubTitleCompact">
  Includes
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Sorting items before packing</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Wrapping non-fragile household items</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Placing items into available boxes</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Basic box labeling</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Opening and unpacking boxes</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Arranging accessible unpacked items</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Separating packing waste</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceTick"></span>
  <span>Final count and area organization</span>
</div>


<h3 class="scurbServiceNotIncludesTitle">
  Doesn't Include
</h3>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Providing boxes or packing materials</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Packing hazardous or illegal items</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Moving very heavy furniture or appliances</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Transporting packed items</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Dismantling or assembling furniture</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Packing high-value items without supervision</span>
</div>

<div class="scurbServiceIncludeItem">
  <span class="scurbServiceCross"></span>
  <span>Disposal of large packing waste</span>
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
        Keep Packing Materials Ready
</h4>
      <p class="scurbHowDoneItemText">
        Keep boxes, tape, covers, labels, and other required packing materials ready before the service begins.
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
        Separate Important Items
</h4>
      <p class="scurbHowDoneItemText">
        Keep documents, medicines, valuables, and frequently needed items separate from general packing.
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
        Explain the Packing Plan
</h4>
      <p class="scurbHowDoneItemText">
        Explain which rooms and items must be packed or unpacked and where unpacked items should be placed.
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
        Supervise Fragile or Valuable Items
</h4>
      <p class="scurbHowDoneItemText">
        Stay available while fragile or valuable items are packed or unpacked.
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
        Check Boxes Before Completion
</h4>
      <p class="scurbHowDoneItemText">
        Check the packed boxes, labels, unpacked items, and remaining materials before the service ends.
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
        Pricing depends on the selected duration, number of items, item type, and amount of packing or unpacking work.
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
const packingUnpackingPopupLazyImages =
  packingUnpackingPopup.querySelectorAll(
    ".scurbPopupLazyImage"
  );

packingUnpackingPopupLazyImages.forEach(function(image){
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

  const scurbPackingUnpackingFaqQuestions =
    packingUnpackingPopup.querySelectorAll(
      ".scurbFaqQuestion"
    );

  scurbPackingUnpackingFaqQuestions.forEach(function(question){

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

      packingUnpackingPopup
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
  .getElementById("closePackingUnpackingPopup")
  .addEventListener(
    "click",
    closePackingUnpackingPopup
  );
  const scurbPackingUnpackingLanguageToggle =
    document.getElementById("scurbLanguageToggle");

  function scurbSetPackingUnpackingPopupTexts(selector, texts){

    const elements =
      packingUnpackingPopup.querySelectorAll(selector);

    elements.forEach(function(element, index){

      if(texts[index] !== undefined){
        element.textContent = texts[index];
      }

    });

  }


  function changePackingUnpackingPopupLanguage(isTelugu){
    const language = isTelugu ? "te" : "en";

    const packingUnpackingPopupTranslations = {
      en: {

        detailsTitle: [
          "About this Service"
        ],

        subTitles: [
          "Organized Packing and Unpacking Support"
        ],

        descriptions: [
          "Get help packing household items securely and unpacking them in an organized way. The professional assists with sorting, wrapping, boxing, labeling, opening boxes, and arranging accessible items."
        ],

        compactTitles: [
          "How Long Does It Take?",
          "Includes"
        ],

        compactDescriptions: [
          "The estimated service duration depends on the number of items, box availability, item type, and selected time."
        ],

        fridgeTypes: [
          "Small Task",
          "Medium Task",
          "Large Task"
        ],

        fridgeTimes: [
          "60 mins",
          "90 mins",
          "120 mins"
        ],

        includeItems: [
          "Sorting items before packing",
          "Wrapping non-fragile household items",
          "Placing items into available boxes",
          "Basic box labeling",
          "Opening and unpacking boxes",
          "Arranging accessible unpacked items",
          "Separating packing waste",
          "Final count and area organization",
          "Providing boxes or packing materials",
          "Packing hazardous or illegal items",
          "Moving very heavy furniture or appliances",
          "Transporting packed items",
          "Dismantling or assembling furniture",
          "Packing high-value items without supervision",
          "Disposal of large packing waste"
        ],

        notIncludesTitle: [
          "Doesn't Include"
        ],

        processTitle: [
          "How Is It Done?"
        ],

        processItemTitles: [
          "Keep Packing Materials Ready",
          "Separate Important Items",
          "Explain the Packing Plan",
          "Supervise Fragile or Valuable Items",
          "Check Boxes Before Completion"
        ],

        processItemTexts: [
          "Keep boxes, tape, covers, labels, and other required packing materials ready before the service begins.",
          "Keep documents, medicines, valuables, and frequently needed items separate from general packing.",
          "Explain which rooms and items must be packed or unpacked and where unpacked items should be placed.",
          "Stay available while fragile or valuable items are packed or unpacked.",
          "Check the packed boxes, labels, unpacked items, and remaining materials before the service ends."
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
          "Pricing depends on the selected duration, number of items, item type, and amount of packing or unpacking work.",
          "You can reach Scrub Mate support anytime through the Help section available in the app."
        ]

      },


      te: {

        detailsTitle: [
          "ఈ సేవ గురించి"
        ],

        subTitles: [
          "క్రమబద్ధమైన ప్యాకింగ్ మరియు అన్‌ప్యాకింగ్ సహాయం"
        ],

        descriptions: [
          "ఇంటి వస్తువులను సురక్షితంగా ప్యాక్ చేయడం మరియు క్రమంగా అన్‌ప్యాక్ చేయడంలో సహాయం అందిస్తాము. వస్తువులను వేరు చేయడం, చుట్టడం, బాక్సుల్లో పెట్టడం, లేబుల్ చేయడం, బాక్సులు తెరవడం మరియు అందుబాటులో ఉన్న వస్తువులను సర్దడంలో ప్రొఫెషనల్ సహాయం చేస్తారు."
        ],

        compactTitles: [
          "ఈ సేవకు ఎంత సమయం పడుతుంది?",
          "సేవలో ఉండేవి"
        ],

        compactDescriptions: [
          "వస్తువుల సంఖ్య, బాక్సుల లభ్యత, వస్తువుల రకం మరియు ఎంచుకున్న సమయాన్ని బట్టి సేవకు పట్టే సమయం మారుతుంది."
        ],

        fridgeTypes: [
          "చిన్న పని",
          "మధ్యస్థ పని",
          "పెద్ద పని"
        ],

        fridgeTimes: [
          "60 నిమిషాలు",
          "90 నిమిషాలు",
          "120 నిమిషాలు"
        ],

        includeItems: [
          "ప్యాకింగ్ ముందు వస్తువులను వేరు చేయడం",
          "సులభంగా పగలని ఇంటి వస్తువులను చుట్టడం",
          "అందుబాటులో ఉన్న బాక్సుల్లో వస్తువులు పెట్టడం",
          "బాక్సులకు సాధారణ లేబులింగ్",
          "బాక్సులు తెరిచి వస్తువులను బయటకు తీయడం",
          "అందుబాటులో ఉన్న వస్తువులను సర్దడం",
          "ప్యాకింగ్ వ్యర్థాలను వేరు చేయడం",
          "చివరిగా వస్తువుల లెక్క మరియు ప్రాంతాన్ని క్రమంగా ఉంచడం",
          "బాక్సులు లేదా ప్యాకింగ్ సామగ్రి అందించడం",
          "ప్రమాదకర లేదా చట్టవిరుద్ధ వస్తువులను ప్యాక్ చేయడం",
          "చాలా భారీ ఫర్నిచర్ లేదా ఉపకరణాలు కదిలించడం",
          "ప్యాక్ చేసిన వస్తువులను రవాణా చేయడం",
          "ఫర్నిచర్ విడదీయడం లేదా అమర్చడం",
          "పర్యవేక్షణ లేకుండా విలువైన వస్తువులను ప్యాక్ చేయడం",
          "ఎక్కువ పరిమాణంలోని ప్యాకింగ్ వ్యర్థాలను తొలగించడం"
        ],

        notIncludesTitle: [
          "సేవలో లేనివి"
        ],

        processTitle: [
          "ఈ సేవ ఎలా చేయబడుతుంది?"
        ],

        processItemTitles: [
          "ప్యాకింగ్ సామగ్రిని సిద్ధంగా ఉంచండి",
          "ముఖ్యమైన వస్తువులను వేరుగా ఉంచండి",
          "ప్యాకింగ్ ప్రణాళికను వివరించండి",
          "సున్నితమైన లేదా విలువైన వస్తువులను పర్యవేక్షించండి",
          "సేవ పూర్తయ్యే ముందు బాక్సులను పరిశీలించండి"
        ],

        processItemTexts: [
          "సేవ ప్రారంభమయ్యే ముందు బాక్సులు, టేప్, కవర్లు, లేబుల్స్ మరియు అవసరమైన ప్యాకింగ్ సామగ్రిని సిద్ధంగా ఉంచండి.",
          "పత్రాలు, మందులు, విలువైన వస్తువులు మరియు తరచుగా అవసరమయ్యే వస్తువులను సాధారణ ప్యాకింగ్ నుంచి వేరుగా ఉంచండి.",
          "ఏ గదులు మరియు వస్తువులను ప్యాక్ లేదా అన్‌ప్యాక్ చేయాలి, అన్‌ప్యాక్ చేసిన వస్తువులను ఎక్కడ ఉంచాలో వివరించండి.",
          "సులభంగా పగిలే లేదా విలువైన వస్తువులను ప్యాక్ లేదా అన్‌ప్యాక్ చేస్తున్నప్పుడు అందుబాటులో ఉండండి.",
          "సేవ ముగిసే ముందు ప్యాక్ చేసిన బాక్సులు, లేబుల్స్, అన్‌ప్యాక్ చేసిన వస్తువులు మరియు మిగిలిన సామగ్రిని పరిశీలించండి."
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
          "ఎంచుకున్న సమయం, వస్తువుల సంఖ్య, వస్తువుల రకం మరియు ప్యాకింగ్ లేదా అన్‌ప్యాకింగ్ పని పరిమాణాన్ని బట్టి ధర నిర్ణయించబడుతుంది.",
          "యాప్‌లో ఉన్న Help విభాగం ద్వారా మీరు ఎప్పుడైనా Scrub Mate సపోర్ట్‌ను సంప్రదించవచ్చు."
        ]

      }

    };


    const text =
  packingUnpackingPopupTranslations[language];

    scurbSetPackingUnpackingPopupTexts(
      ".scurbServiceDetailsTitle",
      text.detailsTitle
    );

    scurbSetPackingUnpackingPopupTexts(
      ".scurbServiceSubTitle",
      text.subTitles
    );

    scurbSetPackingUnpackingPopupTexts(
      ".scurbServiceDescription",
      text.descriptions
    );

    scurbSetPackingUnpackingPopupTexts(
      ".scurbServiceSubTitleCompact",
      text.compactTitles
    );

    scurbSetPackingUnpackingPopupTexts(
      ".scurbServiceDescriptionCompact",
      text.compactDescriptions
    );

    scurbSetPackingUnpackingPopupTexts(
      ".scurbFridgeCard h4",
      text.fridgeTypes
    );

    scurbSetPackingUnpackingPopupTexts(
      ".scurbFridgeCard > span",
      text.fridgeTimes
    );

    scurbSetPackingUnpackingPopupTexts(
      ".scurbServiceIncludeItem > span:last-child",
      text.includeItems
    );

    scurbSetPackingUnpackingPopupTexts(
      ".scurbServiceNotIncludesTitle",
      text.notIncludesTitle
    );

    scurbSetPackingUnpackingPopupTexts(
      ".scurbServiceHowDoneTitle",
      text.processTitle
    );

    scurbSetPackingUnpackingPopupTexts(
      ".scurbHowDoneItemTitle",
      text.processItemTitles
    );

    scurbSetPackingUnpackingPopupTexts(
      ".scurbHowDoneItemText",
      text.processItemTexts
    );

    scurbSetPackingUnpackingPopupTexts(
      ".scurbServiceFaqTitle",
      text.faqTitle
    );

    scurbSetPackingUnpackingPopupTexts(
      ".scurbFaqQuestion > span:first-child",
      text.faqQuestions
    );

    scurbSetPackingUnpackingPopupTexts(
      ".scurbFaqAnswer",
      text.faqAnswers
    );

  }


  scurbPackingUnpackingLanguageToggle.addEventListener(
    "change",
    function(){

     changePackingUnpackingPopupLanguage(
  this.checked
);

    }
  );
}


/* =========================================
   OPEN FROM CARD
========================================= */

document.addEventListener("DOMContentLoaded", function(){

 const packingUnpackingCard =
  document.getElementById("openPackingUnpackingPopup");
  if(!packingUnpackingCard){
    console.error("Packing and Unpacking card not found");
    return;
  }

  packingUnpackingCard.addEventListener("click", function(event){

    if(event.target.closest(".scurbServiceAddBtn")){
      return;
    }

    openPackingUnpackingPopup();

  });

});



let scurbPackingUnpackingTouchStartX = 0;
let scurbPackingUnpackingTouchStartY = 0;
let scurbPackingUnpackingTouchCurrentX = 0;
let scurbPackingUnpackingSwipeSide = "";

function closePackingUnpackingPopup(){

  const popup =
    document.getElementById(
      "packingUnpackingPopup"
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
        "packingUnpackingPopup"
      );

    if(
      !popup ||
      !popup.innerHTML.trim()
    ){
      return;
    }

    const touch =
      event.touches[0];

    scurbPackingUnpackingTouchStartX =
      touch.clientX;

    scurbPackingUnpackingTouchStartY =
      touch.clientY;

    scurbPackingUnpackingTouchCurrentX =
      touch.clientX;

    scurbPackingUnpackingSwipeSide = "";

    const screenWidth =
      window.innerWidth;

    if(
      scurbPackingUnpackingTouchStartX <= 35
    ){
      scurbPackingUnpackingSwipeSide = "left";
    }
    else if(
      scurbPackingUnpackingTouchStartX >=
      screenWidth - 35
    ){
      scurbPackingUnpackingSwipeSide = "right";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchmove",
  function(event){

    if(!scurbPackingUnpackingSwipeSide){
      return;
    }

    const touch =
      event.touches[0];

    scurbPackingUnpackingTouchCurrentX =
      touch.clientX;

    const moveX =
      scurbPackingUnpackingTouchCurrentX -
      scurbPackingUnpackingTouchStartX;

    const moveY =
      touch.clientY -
      scurbPackingUnpackingTouchStartY;

    if(
      Math.abs(moveY) >
      Math.abs(moveX)
    ){
      scurbPackingUnpackingSwipeSide = "";
    }

  },
  {
    passive:true
  }
);


document.addEventListener(
  "touchend",
  function(){

    if(!scurbPackingUnpackingSwipeSide){
      return;
    }

    const swipeDistance =
      scurbPackingUnpackingTouchCurrentX -
      scurbPackingUnpackingTouchStartX;

    const leftSwipePassed =
      scurbPackingUnpackingSwipeSide === "left" &&
      swipeDistance >= 90;

    const rightSwipePassed =
      scurbPackingUnpackingSwipeSide === "right" &&
      swipeDistance <= -90;

    if(
      leftSwipePassed ||
      rightSwipePassed
    ){
      closePackingUnpackingPopup();
    }

    scurbPackingUnpackingSwipeSide = "";

  }
);


document.addEventListener(
  "touchcancel",
  function(){
    scurbPackingUnpackingSwipeSide = "";
  }
);
