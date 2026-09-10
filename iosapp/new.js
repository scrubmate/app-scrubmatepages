/* =========================================
   SAVED ADDRESSES POPUP
========================================= */

(function(){

  const scrubSavedAddressesPopup =
    document.getElementById(
      "scrubSavedAddressesPopup"
    );

  const scrubSavedAddressesList =
    document.getElementById(
      "scrubSavedAddressesList"
    );

  const scrubSavedAddressesEmpty =
    document.getElementById(
      "scrubSavedAddressesEmpty"
    );


  /* =========================================
     GET ADDRESS FROM LOCAL STORAGE
  ========================================= */

  function getScrubSavedLocalAddress(){

    const village =
      localStorage.getItem(
        "scurbMateVillage"
      ) || "";

    const street =
      localStorage.getItem(
        "scurbMateStreetName"
      ) || "";

    const city =
      localStorage.getItem(
        "scurbMateCity"
      ) || "";

    const fullAddress =
      localStorage.getItem(
        "scurbMateFullAddress"
      ) || "";


    const address =
      fullAddress ||
      [
        street,
        village,
        city
      ]
        .filter(Boolean)
        .join(", ");


    const title =
      village ||
      street ||
      city ||
      "Saved address";


    return {
      title,
      address
    };

  }


  /* =========================================
     RENDER ADDRESS
  ========================================= */

  function renderScrubSavedAddress(){

    if(
      !scrubSavedAddressesList ||
      !scrubSavedAddressesEmpty
    ){
      return;
    }


    const savedAddress =
      getScrubSavedLocalAddress();


    scrubSavedAddressesList
      .replaceChildren();


    if(!savedAddress.address){

      scrubSavedAddressesEmpty.hidden =
        false;

      return;

    }


    scrubSavedAddressesEmpty.hidden =
      true;


    const card =
      document.createElement(
        "article"
      );

    card.className =
      "scrubSavedAddressCard";


    const top =
      document.createElement(
        "div"
      );

    top.className =
      "scrubSavedAddressTop";


    const icon =
      document.createElement(
        "div"
      );

    icon.className =
      "scrubSavedAddressIcon";

    icon.innerHTML =
      '<i class="fa-solid fa-location-dot"></i>';


    const info =
      document.createElement(
        "div"
      );

    info.className =
      "scrubSavedAddressInfo";


    const title =
      document.createElement(
        "h3"
      );

    title.className =
      "scrubSavedAddressTitle";

    title.textContent =
      savedAddress.title;


    const addressText =
      document.createElement(
        "p"
      );

    addressText.className =
      "scrubSavedAddressText";

    addressText.textContent =
      savedAddress.address;


    info.appendChild(
      title
    );


    top.append(
      icon,
      info
    );


    card.append(
      top,
      addressText
    );


    scrubSavedAddressesList
      .appendChild(
        card
      );

  }


  /* =========================================
     OPEN POPUP
  ========================================= */

  function openScrubSavedAddresses(){

    if(!scrubSavedAddressesPopup){

      console.error(
        "scrubSavedAddressesPopup not found"
      );

      return;

    }


    renderScrubSavedAddress();


    document
      .getElementById(
        "scrubProfilePage"
      )
      ?.classList.remove(
        "show"
      );


    scrubSavedAddressesPopup
      .classList.add(
        "show"
      );


    scrubSavedAddressesPopup
      .setAttribute(
        "aria-hidden",
        "false"
      );


    document.body.style.overflow =
      "hidden";

  }


  /* =========================================
     CLOSE POPUP
  ========================================= */

  function closeScrubSavedAddresses(){

    if(!scrubSavedAddressesPopup){
      return;
    }


    scrubSavedAddressesPopup
      .classList.remove(
        "show"
      );


    scrubSavedAddressesPopup
      .setAttribute(
        "aria-hidden",
        "true"
      );


    document.body.style.overflow =
      "";


    document
      .getElementById(
        "scrubProfilePage"
      )
      ?.classList.add(
        "show"
      );

  }


  /*
    Make functions available in Console.
    Now openScrubSavedAddresses() will work.
  */

  window.openScrubSavedAddresses =
    openScrubSavedAddresses;

  window.closeScrubSavedAddresses =
    closeScrubSavedAddresses;


  /* =========================================
     BUTTON EVENTS
  ========================================= */

  document.addEventListener(
    "click",
    function(event){

      const openButton =
        event.target.closest(
          "#scrubSavedAddressesButton"
        );


      if(openButton){

        event.preventDefault();

        openScrubSavedAddresses();

        return;

      }


      const backButton =
        event.target.closest(
          "#scrubSavedAddressesBackButton"
        );


      if(backButton){

        event.preventDefault();

        closeScrubSavedAddresses();

      }

    }
  );


  /* =========================================
     ESCAPE KEY
  ========================================= */

  document.addEventListener(
    "keydown",
    function(event){

      if(
        event.key === "Escape" &&
        scrubSavedAddressesPopup
          ?.classList.contains("show")
      ){

        closeScrubSavedAddresses();

      }

    }
  );


  /* =========================================
     SWIPE BACK — BOTH SIDES
  ========================================= */

  let swipeStartX = 0;
  let swipeStartY = 0;
  let swipeCurrentX = 0;
  let swipeCurrentY = 0;

  let swipeFromLeft = false;
  let swipeFromRight = false;
  let swipeActive = false;

  const edgeSize = 45;
  const closeDistance = 85;


  scrubSavedAddressesPopup
    ?.addEventListener(
      "touchstart",
      function(event){

        if(
          !scrubSavedAddressesPopup
            .classList.contains("show") ||
          event.touches.length !== 1
        ){
          return;
        }


        const touch =
          event.touches[0];


        swipeStartX =
          touch.clientX;

        swipeStartY =
          touch.clientY;

        swipeCurrentX =
          touch.clientX;

        swipeCurrentY =
          touch.clientY;


        swipeFromLeft =
          touch.clientX <=
          edgeSize;


        swipeFromRight =
          touch.clientX >=
          window.innerWidth -
          edgeSize;


        swipeActive =
          swipeFromLeft ||
          swipeFromRight;

      },
      {
        passive:true
      }
    );


  scrubSavedAddressesPopup
    ?.addEventListener(
      "touchmove",
      function(event){

        if(
          !swipeActive ||
          event.touches.length !== 1
        ){
          return;
        }


        const touch =
          event.touches[0];


        swipeCurrentX =
          touch.clientX;

        swipeCurrentY =
          touch.clientY;


        const moveX =
          swipeCurrentX -
          swipeStartX;

        const moveY =
          swipeCurrentY -
          swipeStartY;


        if(
          Math.abs(moveY) >
          Math.abs(moveX)
        ){

          swipeActive =
            false;

          return;

        }


        const validMovement =
          (
            swipeFromLeft &&
            moveX > 0
          ) ||
          (
            swipeFromRight &&
            moveX < 0
          );


        if(validMovement){

          event.preventDefault();

        }

      },
      {
        passive:false
      }
    );


  scrubSavedAddressesPopup
    ?.addEventListener(
      "touchend",
      function(){

        if(!swipeActive){
          return;
        }


        const moveX =
          swipeCurrentX -
          swipeStartX;

        const moveY =
          swipeCurrentY -
          swipeStartY;


        const validLeftSwipe =
          swipeFromLeft &&
          moveX >=
          closeDistance;


        const validRightSwipe =
          swipeFromRight &&
          moveX <=
          -closeDistance;


        swipeActive =
          false;


        if(
          Math.abs(moveX) >
          Math.abs(moveY) &&
          (
            validLeftSwipe ||
            validRightSwipe
          )
        ){

          closeScrubSavedAddresses();

        }


        swipeFromLeft =
          false;

        swipeFromRight =
          false;

      },
      {
        passive:true
      }
    );

})();


/* =========================================
   HOW IT WORKS POPUP
========================================= */

(function(){

  const scrubHowItWorksPopup =
    document.getElementById(
      "scrubHowItWorksPopup"
    );


  const scrubHowItWorksContent =
    document.querySelector(
      ".scrubHowItWorksContent"
    );


  /* =========================================
     GET ALL VIDEOS
  ========================================= */

  function getAllScrubHowItWorksVideos(){

    return (
      scrubHowItWorksPopup
        ?.querySelectorAll(
          ".scrubHowItWorksVideo"
        ) || []
    );

  }


  /* =========================================
     IS POPUP OPEN
  ========================================= */

  function isScrubHowItWorksOpen(){

    return Boolean(
      scrubHowItWorksPopup
        ?.classList.contains("show")
    );

  }


  /* =========================================
     OPEN POPUP
  ========================================= */

  function openScrubHowItWorks(){

    if(!scrubHowItWorksPopup){

      console.error(
        "scrubHowItWorksPopup not found"
      );

      return;

    }


    document
      .getElementById(
        "scrubProfilePage"
      )
      ?.classList.remove("show");


    scrubHowItWorksPopup
      .classList.add("show");


    scrubHowItWorksPopup
      .setAttribute(
        "aria-hidden",
        "false"
      );


    document.body.style.overflow =
      "hidden";


    if(scrubHowItWorksContent){

      scrubHowItWorksContent.scrollTop =
        0;

    }

  }


  /* =========================================
     PAUSE ALL VIDEOS
  ========================================= */

  function pauseAllScrubHowItWorksVideos(
    exceptVideo = null
  ){

    const allVideos =
      getAllScrubHowItWorksVideos();


    allVideos.forEach(function(video){

      if(video !== exceptVideo){

        video.pause();

      }

    });

  }


  /* =========================================
     PAUSE AND HIDE LOADERS
  ========================================= */

  function pauseVideosAndHideLoaders(){

    const allVideos =
      getAllScrubHowItWorksVideos();


    allVideos.forEach(function(video){

      video.pause();


      const videoBox =
        video.closest(
          ".scrubHowItWorksVideoBox"
        );


      const loader =
        videoBox?.querySelector(
          ".scrubHowItWorksLoader"
        );


      if(loader){

        loader.hidden =
          true;

      }

    });

  }


  /* =========================================
     CLOSE POPUP
  ========================================= */

  function closeScrubHowItWorks(){

    if(!scrubHowItWorksPopup){
      return;
    }


    /*
      IMMEDIATELY STOP ALL PLAYBACK
    */

    pauseVideosAndHideLoaders();


    scrubHowItWorksPopup
      .classList.remove("show");


    scrubHowItWorksPopup
      .setAttribute(
        "aria-hidden",
        "true"
      );


    document.body.style.overflow =
      "";


    document
      .getElementById(
        "scrubProfilePage"
      )
      ?.classList.add("show");

  }


  /* =========================================
     PLAY VIDEO SAFELY
  ========================================= */

  function playScrubVideo(video){

    if(!video){
      return;
    }


    /*
      DO NOT PLAY IF POPUP IS CLOSED
    */

    if(!isScrubHowItWorksOpen()){

      video.pause();

      return;

    }


    /*
      PAUSE ALL OTHER VIDEOS
    */

    pauseAllScrubHowItWorksVideos(
      video
    );


    video
      .play()
      .catch(function(error){

        console.error(
          "Video playback failed:",
          error
        );

      });

  }


  /* =========================================
     LOAD AND PLAY SELECTED VIDEO
  ========================================= */

  function loadAndPlayScrubVideo(videoBox){

    if(!videoBox){
      return;
    }


    const video =
      videoBox.querySelector(
        ".scrubHowItWorksVideo"
      );


    const playButton =
      videoBox.querySelector(
        ".scrubHowItWorksPlayButton"
      );


    const loader =
      videoBox.querySelector(
        ".scrubHowItWorksLoader"
      );


    const videoPath =
      videoBox.dataset.videoPath;


    if(
      !video ||
      !videoPath
    ){

      console.error(
        "Video or video path not found"
      );

      return;

    }


    /*
      STOP OTHER VIDEOS
    */

    pauseAllScrubHowItWorksVideos(
      video
    );


    /*
      VIDEO SOURCE ALREADY ADDED
      CONTINUE PLAYING FROM CURRENT POSITION
    */

    if(video.dataset.sourceAdded === "true"){

      playButton?.classList.add(
        "hide"
      );


      video.classList.add(
        "is-visible"
      );


      /*
        SHOW LOADER ONLY IF VIDEO
        DOES NOT HAVE ENOUGH BUFFER YET
      */

      if(video.readyState < 3){

        if(loader){

          loader.hidden =
            false;

        }

      }


      playScrubVideo(
        video
      );

      return;

    }


    /*
      PREVENT DOUBLE CLICK LOADING
    */

    if(video.dataset.loading === "true"){
      return;
    }


    video.dataset.loading =
      "true";


    video.dataset.sourceAdded =
      "true";


    playButton?.classList.add(
      "hide"
    );


    if(loader){

      loader.hidden =
        false;

    }


    /*
      IMPORTANT:

      THE VIDEO HAS NO SRC IN HTML.

      SRC IS ADDED ONLY AFTER THE USER
      PRESSES PLAY.

      preload="metadata" MEANS THE BROWSER
      FIRST LOADS BASIC VIDEO INFORMATION.

      AFTER PLAY STARTS, THE BROWSER
      DOWNLOADS/BUFFERS THE VIDEO GRADUALLY,
      SIMILAR TO STREAMING.
    */

    video.preload =
      "metadata";


    video.muted =
      true;


    video.controls =
      true;


    video.playsInline =
      true;


    video.setAttribute(
      "playsinline",
      ""
    );


    video.setAttribute(
      "webkit-playsinline",
      ""
    );


    video.src =
      videoPath;


    video.load();

  }


  /* =========================================
     RESET FAILED VIDEO
  ========================================= */

  function resetFailedScrubVideo(
    video,
    playButton,
    loader
  ){

    video.pause();


    video.dataset.loading =
      "false";


    video.dataset.loaded =
      "false";


    video.dataset.sourceAdded =
      "false";


    if(loader){

      loader.hidden =
        true;

    }


    video.classList.remove(
      "is-visible"
    );


    playButton?.classList.remove(
      "hide"
    );


    video.removeAttribute(
      "src"
    );


    video.load();

  }


  /* =========================================
     SET UP EACH VIDEO
  ========================================= */

  function setupScrubHowItWorksVideos(){

    const videoBoxes =
      scrubHowItWorksPopup
        ?.querySelectorAll(
          ".scrubHowItWorksVideoBox"
        ) || [];


    videoBoxes.forEach(function(videoBox){

      const video =
        videoBox.querySelector(
          ".scrubHowItWorksVideo"
        );


      const playButton =
        videoBox.querySelector(
          ".scrubHowItWorksPlayButton"
        );


      const loader =
        videoBox.querySelector(
          ".scrubHowItWorksLoader"
        );


      if(
        !video ||
        !playButton
      ){
        return;
      }


      /*
        ENSURE NO VIDEO PRELOADS
        WHEN WEBSITE FIRST OPENS
      */

      video.preload =
        "none";


      video.muted =
        true;


      video.playsInline =
        true;


      video.controls =
        true;


      video.dataset.loading =
        "false";


      video.dataset.loaded =
        "false";


      video.dataset.sourceAdded =
        "false";


      /*
        METADATA LOADED

        THIS DOES NOT MEAN THE COMPLETE
        VIDEO HAS DOWNLOADED.
      */

      video.addEventListener(
        "loadedmetadata",
        function(){

          video.classList.add(
            "is-visible"
          );

        }
      );


      /*
        FIRST PART OF VIDEO IS READY

        PLAYING CAN BEGIN WITHOUT WAITING
        FOR THE COMPLETE DOWNLOAD.
      */

      video.addEventListener(
        "canplay",
        function(){

          video.dataset.loaded =
            "true";


          video.dataset.loading =
            "false";


          if(loader){

            loader.hidden =
              true;

          }


          video.classList.add(
            "is-visible"
          );


          playButton.classList.add(
            "hide"
          );


          if(isScrubHowItWorksOpen()){

            playScrubVideo(
              video
            );

          }else{

            video.pause();

          }

        }
      );


      /*
        ENOUGH VIDEO IS BUFFERED
      */

      video.addEventListener(
        "canplaythrough",
        function(){

          if(loader){

            loader.hidden =
              true;

          }

        }
      );


      /*
        BUFFERING STARTED
      */

      video.addEventListener(
        "waiting",
        function(){

          if(
            isScrubHowItWorksOpen() &&
            !video.paused
          ){

            if(loader){

              loader.hidden =
                false;

            }

          }

        }
      );


      /*
        VIDEO LOADING IS STALLED
      */

      video.addEventListener(
        "stalled",
        function(){

          if(
            isScrubHowItWorksOpen() &&
            !video.paused
          ){

            if(loader){

              loader.hidden =
                false;

            }

          }

        }
      );


      /*
        BROWSER IS FETCHING VIDEO DATA
      */

      video.addEventListener(
        "progress",
        function(){

          /*
            Browser progressively buffers video.
            We do not force complete downloading.
          */

          if(
            video.buffered.length > 0 &&
            video.duration
          ){

            const bufferedUntil =
              video.buffered.end(
                video.buffered.length - 1
              );


            const bufferedPercent =
              Math.min(
                100,
                Math.round(
                  (
                    bufferedUntil /
                    video.duration
                  ) *
                  100
                )
              );


            video.dataset.bufferedPercent =
              String(bufferedPercent);

          }

        }
      );


      /*
        VIDEO STARTED PLAYING
      */

      video.addEventListener(
        "playing",
        function(){

          if(!isScrubHowItWorksOpen()){

            video.pause();

            return;

          }


          pauseAllScrubHowItWorksVideos(
            video
          );


          if(loader){

            loader.hidden =
              true;

          }


          playButton.classList.add(
            "hide"
          );


          video.classList.add(
            "is-visible"
          );

        }
      );


      /*
        VIDEO PAUSED
      */

      video.addEventListener(
        "pause",
        function(){

          if(loader){

            loader.hidden =
              true;

          }


          if(
            video.dataset.sourceAdded ===
            "true"
          ){

            video.classList.add(
              "is-visible"
            );

          }

        }
      );


      /*
        VIDEO COMPLETED
      */

      video.addEventListener(
        "ended",
        function(){

          video.pause();


          video.currentTime =
            0;


          if(loader){

            loader.hidden =
              true;

          }


          playButton.classList.remove(
            "hide"
          );


          video.classList.remove(
            "is-visible"
          );

        }
      );


      /*
        VIDEO FAILED
      */

      video.addEventListener(
        "error",
        function(){

          console.error(
            "Video failed to load. Check path:",
            videoBox.dataset.videoPath
          );


          resetFailedScrubVideo(
            video,
            playButton,
            loader
          );

        }
      );


      /*
        USER EXITS FULLSCREEN

        PAUSE THE VIDEO SO IT DOES NOT
        CONTINUE PLAYING UNEXPECTEDLY.
      */

      video.addEventListener(
        "webkitendfullscreen",
        function(){

          video.pause();

        }
      );

    });

  }


  setupScrubHowItWorksVideos();


  /* =========================================
     GLOBAL FUNCTIONS
  ========================================= */

  window.openScrubHowItWorks =
    openScrubHowItWorks;


  window.closeScrubHowItWorks =
    closeScrubHowItWorks;


  /* =========================================
     CLICK EVENTS
  ========================================= */

  document.addEventListener(
    "click",
    function(event){

      const openButton =
        event.target.closest(
          "#scrubHowItWorksButton"
        );


      if(openButton){

        event.preventDefault();

        openScrubHowItWorks();

        return;

      }


      const backButton =
        event.target.closest(
          "#scrubHowItWorksBackButton"
        );


      if(backButton){

        event.preventDefault();

        closeScrubHowItWorks();

        return;

      }


      const playButton =
        event.target.closest(
          ".scrubHowItWorksPlayButton"
        );


      if(playButton){

        event.preventDefault();


        const videoBox =
          playButton.closest(
            ".scrubHowItWorksVideoBox"
          );


        loadAndPlayScrubVideo(
          videoBox
        );

      }

    }
  );


  /* =========================================
     ESCAPE KEY
  ========================================= */

  document.addEventListener(
    "keydown",
    function(event){

      if(
        event.key === "Escape" &&
        isScrubHowItWorksOpen()
      ){

        closeScrubHowItWorks();

      }

    }
  );


  /* =========================================
     PAUSE WHEN APP/TAB GOES BACKGROUND
  ========================================= */

  document.addEventListener(
    "visibilitychange",
    function(){

      if(document.hidden){

        pauseVideosAndHideLoaders();

      }

    }
  );


  /*
    PAUSE WHEN PAGE IS BEING HIDDEN,
    NAVIGATED AWAY OR APP IS CLOSED.
  */

  window.addEventListener(
    "pagehide",
    function(){

      pauseVideosAndHideLoaders();

    }
  );


  /*
    PAUSE WHEN BROWSER WINDOW OR WEBVIEW
    LOSES FOCUS.
  */

  window.addEventListener(
    "blur",
    function(){

      pauseVideosAndHideLoaders();

    }
  );


  /*
    PAUSE BEFORE LEAVING THE PAGE.
  */

  window.addEventListener(
    "beforeunload",
    function(){

      pauseVideosAndHideLoaders();

    }
  );


  /* =========================================
     FULLSCREEN EXIT
  ========================================= */

  document.addEventListener(
    "fullscreenchange",
    function(){

      if(!document.fullscreenElement){

        pauseAllScrubHowItWorksVideos();

      }

    }
  );


  document.addEventListener(
    "webkitfullscreenchange",
    function(){

      if(!document.webkitFullscreenElement){

        pauseAllScrubHowItWorksVideos();

      }

    }
  );


  /* =========================================
     PAUSE VIDEO WHEN SCROLLED FAR AWAY
  ========================================= */

  if(
    "IntersectionObserver" in window &&
    scrubHowItWorksPopup
  ){

    const videoVisibilityObserver =
      new IntersectionObserver(
        function(entries){

          entries.forEach(function(entry){

            const video =
              entry.target.querySelector(
                ".scrubHowItWorksVideo"
              );


            if(!video){
              return;
            }


            /*
              PAUSE WHEN MOST OF THE VIDEO
              IS NO LONGER VISIBLE.
            */

            if(
              !entry.isIntersecting ||
              entry.intersectionRatio < 0.15
            ){

              video.pause();

            }

          });

        },
        {
          root:scrubHowItWorksContent,
          threshold:[
            0,
            0.15,
            0.5
          ]
        }
      );


    scrubHowItWorksPopup
      .querySelectorAll(
        ".scrubHowItWorksVideoBox"
      )
      .forEach(function(videoBox){

        videoVisibilityObserver.observe(
          videoBox
        );

      });

  }


  /* =========================================
     SWIPE BACK FROM BOTH EDGES
  ========================================= */

  let swipeStartX = 0;
  let swipeStartY = 0;

  let swipeCurrentX = 0;
  let swipeCurrentY = 0;

  let swipeFromLeft = false;
  let swipeFromRight = false;

  let swipeActive = false;


  const swipeEdgeSize =
    45;


  const swipeCloseDistance =
    85;


  scrubHowItWorksPopup
    ?.addEventListener(
      "touchstart",
      function(event){

        if(
          !isScrubHowItWorksOpen() ||
          event.touches.length !== 1
        ){
          return;
        }


        const touch =
          event.touches[0];


        swipeStartX =
          touch.clientX;


        swipeStartY =
          touch.clientY;


        swipeCurrentX =
          touch.clientX;


        swipeCurrentY =
          touch.clientY;


        swipeFromLeft =
          touch.clientX <=
          swipeEdgeSize;


        swipeFromRight =
          touch.clientX >=
          window.innerWidth -
          swipeEdgeSize;


        swipeActive =
          swipeFromLeft ||
          swipeFromRight;

      },
      {
        passive:true
      }
    );


  scrubHowItWorksPopup
    ?.addEventListener(
      "touchmove",
      function(event){

        if(
          !swipeActive ||
          event.touches.length !== 1
        ){
          return;
        }


        const touch =
          event.touches[0];


        swipeCurrentX =
          touch.clientX;


        swipeCurrentY =
          touch.clientY;


        const moveX =
          swipeCurrentX -
          swipeStartX;


        const moveY =
          swipeCurrentY -
          swipeStartY;


        if(
          Math.abs(moveY) >
          Math.abs(moveX)
        ){

          swipeActive =
            false;

          return;

        }


        const validMovement =
          (
            swipeFromLeft &&
            moveX > 0
          ) ||
          (
            swipeFromRight &&
            moveX < 0
          );


        if(validMovement){

          event.preventDefault();

        }

      },
      {
        passive:false
      }
    );


  scrubHowItWorksPopup
    ?.addEventListener(
      "touchend",
      function(){

        if(!swipeActive){
          return;
        }


        const moveX =
          swipeCurrentX -
          swipeStartX;


        const moveY =
          swipeCurrentY -
          swipeStartY;


        const validLeftSwipe =
          swipeFromLeft &&
          moveX >=
          swipeCloseDistance;


        const validRightSwipe =
          swipeFromRight &&
          moveX <=
          -swipeCloseDistance;


        swipeActive =
          false;


        if(
          Math.abs(moveX) >
          Math.abs(moveY) &&
          (
            validLeftSwipe ||
            validRightSwipe
          )
        ){

          closeScrubHowItWorks();

        }


        swipeFromLeft =
          false;


        swipeFromRight =
          false;

      },
      {
        passive:true
      }
    );


  scrubHowItWorksPopup
    ?.addEventListener(
      "touchcancel",
      function(){

        swipeActive =
          false;


        swipeFromLeft =
          false;


        swipeFromRight =
          false;

      },
      {
        passive:true
      }
    );

})();

/* =========================================
   DELETE SCRUB MATE ACCOUNT
========================================= */

(function(){

  const overlay =
    document.getElementById(
      "scrubDeleteAccountOverlay"
    );

  const closeButton =
    document.getElementById(
      "scrubDeleteAccountClose"
    );

  const cancelButton =
    document.getElementById(
      "scrubDeleteAccountCancel"
    );

  const confirmButton =
    document.getElementById(
      "scrubDeleteAccountConfirm"
    );

  const confirmText =
    document.getElementById(
      "scrubDeleteAccountConfirmText"
    );

  const progressBar =
    document.getElementById(
      "scrubDeleteAccountProgress"
    );

  const errorBox =
    document.getElementById(
      "scrubDeleteAccountError"
    );


  let isDeleting = false;
  let progressTimer = null;
  let currentProgress = 0;


  /* =========================================
     GET LOGGED-IN USER
  ========================================= */

  function getScrubLoggedUser(){

    const possibleKeys = [
      "scrubMateUser",
      "scrubUser",
      "cezooUser"
    ];


    for(const key of possibleKeys){

      try{

        const storedValue =
          localStorage.getItem(key);


        if(!storedValue){
          continue;
        }


        const parsedUser =
          JSON.parse(storedValue);


        if(parsedUser){

          return {
            ...parsedUser,
            storageKey:key
          };

        }

      }catch(error){

        console.warn(
          "Could not read user from:",
          key
        );

      }

    }


    return null;

  }


  /* =========================================
     NORMALIZE MOBILE
  ========================================= */

  function normalizeScrubMobile(value){

    return String(value || "")
      .replace(/\D/g, "")
      .slice(-10);

  }


  /* =========================================
     ERROR MESSAGE
  ========================================= */

  function showDeleteAccountError(message){

    if(!errorBox){
      return;
    }


    errorBox.textContent =
      message;


    errorBox.hidden =
      false;

  }


  function hideDeleteAccountError(){

    if(!errorBox){
      return;
    }


    errorBox.textContent =
      "";


    errorBox.hidden =
      true;

  }


  /* =========================================
     RESET DELETE BUTTON
  ========================================= */

  function resetDeleteButton(){

    if(progressTimer){

      clearInterval(progressTimer);

      progressTimer = null;

    }


    currentProgress = 0;


    if(progressBar){

      progressBar.style.width =
        "0%";

    }


    if(confirmText){

      confirmText.textContent =
        "Yes, delete account";

    }


    confirmButton
      ?.classList.remove(
        "is-deleting"
      );


    if(confirmButton){

      confirmButton.disabled =
        false;

    }


    if(cancelButton){

      cancelButton.disabled =
        false;

    }


    if(closeButton){

      closeButton.disabled =
        false;

    }

  }


  /* =========================================
     OPEN BOTTOM SHEET
  ========================================= */

  function openScrubDeleteAccountSheet(){

    if(!overlay){

      console.error(
        "scrubDeleteAccountOverlay not found"
      );

      return;

    }


    if(isDeleting){
      return;
    }


    hideDeleteAccountError();

    resetDeleteButton();


    overlay.classList.add(
      "show"
    );


    overlay.setAttribute(
      "aria-hidden",
      "false"
    );


    document.body.style.overflow =
      "hidden";

  }


  /* =========================================
     CLOSE BOTTOM SHEET
  ========================================= */

  function closeScrubDeleteAccountSheet(){

    if(
      !overlay ||
      isDeleting
    ){
      return;
    }


    overlay.classList.remove(
      "show"
    );


    overlay.setAttribute(
      "aria-hidden",
      "true"
    );


    document.body.style.overflow =
      "";

  }


  /* =========================================
     START PROGRESS 1% TO 90%
  ========================================= */

  function startDeleteProgress(){

    currentProgress = 1;


    if(progressBar){

      progressBar.style.width =
        "1%";

    }


    if(confirmText){

      confirmText.textContent =
        "Deleting 1%";

    }


    progressTimer =
      setInterval(function(){

        if(currentProgress >= 90){

          clearInterval(progressTimer);

          progressTimer = null;

          return;

        }


        let increase = 1;


        if(currentProgress < 35){

          increase =
            Math.floor(
              Math.random() * 4
            ) + 2;

        }else if(currentProgress < 70){

          increase =
            Math.floor(
              Math.random() * 3
            ) + 1;

        }


        currentProgress =
          Math.min(
            90,
            currentProgress + increase
          );


        if(progressBar){

          progressBar.style.width =
            `${currentProgress}%`;

        }


        if(confirmText){

          confirmText.textContent =
            `Deleting ${currentProgress}%`;

        }

      }, 130);

  }


  /* =========================================
     COMPLETE PROGRESS TO 100%
  ========================================= */

  function finishDeleteProgress(){

    return new Promise(function(resolve){

      if(progressTimer){

        clearInterval(progressTimer);

        progressTimer = null;

      }


      const finishTimer =
        setInterval(function(){

          currentProgress += 2;


          if(currentProgress >= 100){

            currentProgress = 100;

          }


          if(progressBar){

            progressBar.style.width =
              `${currentProgress}%`;

          }


          if(confirmText){

            confirmText.textContent =
              `Deleting ${currentProgress}%`;

          }


          if(currentProgress >= 100){

            clearInterval(finishTimer);

            setTimeout(
              resolve,
              350
            );

          }

        }, 40);

    });

  }


  /* =========================================
     CLEAR LOCAL ACCOUNT DATA
  ========================================= */

  function clearScrubAccountLocalData(){

  try{

    /*
      Remove all Local Storage
    */

    localStorage.clear();


    /*
      Remove all Session Storage
    */

    sessionStorage.clear();


    console.log(
      "All local and session storage cleared."
    );

  }catch(error){

    console.error(
      "Failed to clear storage:",
      error
    );

  }

}

  /* =========================================
     RETURN USER TO LOGIN
  ========================================= */

  function goToScrubLogin(){

    overlay
      ?.classList.remove(
        "show"
      );


    overlay
      ?.setAttribute(
        "aria-hidden",
        "true"
      );


    document
      .getElementById(
        "scrubProfilePage"
      )
      ?.classList.remove(
        "show"
      );


    document.body.style.overflow =
      "";


    /*
      First try your Scrub Mate login function.
    */

    if(
      typeof window.openScrubLoginPopup ===
      "function"
    ){

      window.openScrubLoginPopup();

      return;

    }


    /*
      Second possible login function.
    */

    if(
      typeof window.openLoginPopup ===
      "function"
    ){

      window.openLoginPopup();

      return;

    }


    /*
      Fallback: reload after local login
      details are removed.
    */

    window.location.reload();

  }


  /* =========================================
     DELETE ACCOUNT FROM SUPABASE
  ========================================= */

  async function deleteScrubAccount(){

    if(isDeleting){
      return;
    }


    hideDeleteAccountError();


    const loggedUser =
      getScrubLoggedUser();


    console.log(
      "Delete account user:",
      loggedUser
    );


    const mobile =
      normalizeScrubMobile(
        loggedUser?.mobile ||
        loggedUser?.phone ||
        loggedUser?.mobileNumber
      );


    const userId =
      String(
        loggedUser?.uid ||
        loggedUser?.id ||
        ""
      );


    if(mobile.length !== 10){

      showDeleteAccountError(
        "Logged-in mobile number was not found. Please log in again."
      );

      return;

    }


    /*
      Your admin.html uses the Supabase
      client variable named "db".
    */

   if(
  typeof supabaseClient ===
  "undefined"
){

  showDeleteAccountError(
    "Supabase connection was not found."
  );

  console.error(
    'Supabase client "supabaseClient" is not defined'
  );

  return;

}


    isDeleting = true;


    confirmButton
      ?.classList.add(
        "is-deleting"
      );


    if(confirmButton){

      confirmButton.disabled =
        true;

    }


    if(cancelButton){

      cancelButton.disabled =
        true;

    }


    if(closeButton){

      closeButton.disabled =
        true;

    }


    startDeleteProgress();


    try{

      console.log(
        "Deleting account for mobile:",
        mobile
      );


      const {
  data,
  error
} =
  await supabaseClient.rpc(
    "delete_scrub_account_data",
    {
      p_mobile:mobile,
      p_user_id:userId || null
    }
  );


      console.log(
        "Delete account RPC response:",
        {
          data,
          error
        }
      );


      if(error){

        throw error;

      }


      if(
        !data ||
        data.success !== true
      ){

        throw new Error(
          data?.message ||
          "Account deletion was not completed."
        );

      }


      await finishDeleteProgress();


      clearScrubAccountLocalData();


      if(confirmText){

        confirmText.textContent =
          "Account deleted";

      }


      setTimeout(function(){

        isDeleting =
          false;


        goToScrubLogin();

      }, 450);

    }catch(error){

      console.error(
        "Delete account failed:",
        error
      );


      if(progressTimer){

        clearInterval(progressTimer);

        progressTimer = null;

      }


      isDeleting = false;


      resetDeleteButton();


      showDeleteAccountError(
        error?.message ||
        "Account could not be deleted. Please try again."
      );

    }

  }


  /* =========================================
     GLOBAL FUNCTIONS
  ========================================= */

  window.openScrubDeleteAccountSheet =
    openScrubDeleteAccountSheet;


  window.closeScrubDeleteAccountSheet =
    closeScrubDeleteAccountSheet;


  window.deleteScrubAccount =
    deleteScrubAccount;


  /* =========================================
     CLICK EVENTS
  ========================================= */

  document.addEventListener(
    "click",
    function(event){

      const openButton =
        event.target.closest(
          "#scrubDeleteAccountButton"
        );


      if(openButton){

        event.preventDefault();

        openScrubDeleteAccountSheet();

        return;

      }


      const closeTarget =
        event.target.closest(
          "#scrubDeleteAccountClose, #scrubDeleteAccountCancel"
        );


      if(closeTarget){

        event.preventDefault();

        closeScrubDeleteAccountSheet();

        return;

      }


      const confirmTarget =
        event.target.closest(
          "#scrubDeleteAccountConfirm"
        );


      if(confirmTarget){

        event.preventDefault();

        deleteScrubAccount();

      }

    }
  );


  /* =========================================
     CLICK OUTSIDE TO CLOSE
  ========================================= */

  overlay?.addEventListener(
    "click",
    function(event){

      if(
        event.target === overlay &&
        !isDeleting
      ){

        closeScrubDeleteAccountSheet();

      }

    }
  );


  /* =========================================
     ESCAPE KEY
  ========================================= */

  document.addEventListener(
    "keydown",
    function(event){

      if(
        event.key === "Escape" &&
        overlay?.classList.contains(
          "show"
        )
      ){

        closeScrubDeleteAccountSheet();

      }

    }
  );

})();

/* =========================================
   MY COUPONS POPUP
========================================= */

(function(){

  const couponsPopup =
    document.getElementById(
      "scrubCouponsPopup"
    );


  /* =========================================
     OPEN POPUP
  ========================================= */

  function openScrubCoupons(){

    if(!couponsPopup){

      console.error(
        "scrubCouponsPopup not found"
      );

      return;

    }


    document
      .getElementById(
        "scrubProfilePage"
      )
      ?.classList.remove(
        "show"
      );


    couponsPopup
      .classList.add(
        "show"
      );


    couponsPopup
      .setAttribute(
        "aria-hidden",
        "false"
      );


    document.body.style.overflow =
      "hidden";

  }


  /* =========================================
     CLOSE POPUP
  ========================================= */

  function closeScrubCoupons(){

    if(!couponsPopup){
      return;
    }


    couponsPopup
      .classList.remove(
        "show"
      );


    couponsPopup
      .setAttribute(
        "aria-hidden",
        "true"
      );


    document.body.style.overflow =
      "";


    document
      .getElementById(
        "scrubProfilePage"
      )
      ?.classList.add(
        "show"
      );

  }


  /* =========================================
     GLOBAL FUNCTIONS
  ========================================= */

  window.openScrubCoupons =
    openScrubCoupons;

  window.closeScrubCoupons =
    closeScrubCoupons;


  /* =========================================
     BUTTON EVENTS
  ========================================= */

  document.addEventListener(
    "click",
    function(event){

      const openButton =
        event.target.closest(
          "#scrubProfileCouponsButton"
        );


      if(openButton){

        event.preventDefault();

        openScrubCoupons();

        return;

      }


      const backButton =
        event.target.closest(
          "#scrubCouponsBackButton"
        );


      if(backButton){

        event.preventDefault();

        closeScrubCoupons();

      }

    }
  );


  /* =========================================
     ESCAPE KEY
  ========================================= */

  document.addEventListener(
    "keydown",
    function(event){

      if(
        event.key === "Escape" &&
        couponsPopup
          ?.classList.contains(
            "show"
          )
      ){

        closeScrubCoupons();

      }

    }
  );


  /* =========================================
     SWIPE BACK — BOTH SIDES
  ========================================= */

  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let currentY = 0;

  let fromLeft = false;
  let fromRight = false;
  let swipeActive = false;

  const edgeSize = 45;
  const closeDistance = 85;


  couponsPopup
    ?.addEventListener(
      "touchstart",
      function(event){

        if(
          !couponsPopup.classList.contains(
            "show"
          ) ||
          event.touches.length !== 1
        ){
          return;
        }


        const touch =
          event.touches[0];


        startX =
          touch.clientX;

        startY =
          touch.clientY;

        currentX =
          touch.clientX;

        currentY =
          touch.clientY;


        fromLeft =
          touch.clientX <= edgeSize;


        fromRight =
          touch.clientX >=
          window.innerWidth - edgeSize;


        swipeActive =
          fromLeft || fromRight;

      },
      {
        passive:true
      }
    );


  couponsPopup
    ?.addEventListener(
      "touchmove",
      function(event){

        if(
          !swipeActive ||
          event.touches.length !== 1
        ){
          return;
        }


        const touch =
          event.touches[0];


        currentX =
          touch.clientX;

        currentY =
          touch.clientY;


        const moveX =
          currentX - startX;

        const moveY =
          currentY - startY;


        if(
          Math.abs(moveY) >
          Math.abs(moveX)
        ){

          swipeActive = false;

          return;

        }


        const validMovement =
          (
            fromLeft &&
            moveX > 0
          ) ||
          (
            fromRight &&
            moveX < 0
          );


        if(validMovement){

          event.preventDefault();

        }

      },
      {
        passive:false
      }
    );


  couponsPopup
    ?.addEventListener(
      "touchend",
      function(){

        if(!swipeActive){
          return;
        }


        const moveX =
          currentX - startX;

        const moveY =
          currentY - startY;


        const validLeftSwipe =
          fromLeft &&
          moveX >= closeDistance;


        const validRightSwipe =
          fromRight &&
          moveX <= -closeDistance;


        if(
          Math.abs(moveX) >
          Math.abs(moveY) &&
          (
            validLeftSwipe ||
            validRightSwipe
          )
        ){

          closeScrubCoupons();

        }


        swipeActive = false;
        fromLeft = false;
        fromRight = false;

      },
      {
        passive:true
      }
    );

})();
