document.addEventListener("DOMContentLoaded", () => {

    function loadCachedImage(img, loadedParent) {

        if (!img || !img.dataset.src) return;

        if (img.dataset.started === "1") return;

        img.dataset.started = "1";

        const imageUrl = img.dataset.src;
        const cacheKey = "img_" + imageUrl;

        const parent =
            typeof loadedParent === "string"
                ? img.closest(loadedParent)
                : img.parentElement;

        function markAsLoaded() {

            img.classList.add("loaded");

            if (parent) {
                parent.classList.add("loaded");
            }
        }

        img.onload = function () {

            markAsLoaded();

            try {
                localStorage.setItem(cacheKey, "1");
            } catch (error) {
                console.warn("Image cache flag failed:", error);
            }
        };

        img.onerror = function () {

            console.error("Image failed:", imageUrl);

            markAsLoaded();
        };

        img.src = imageUrl;

        if (img.complete && img.naturalWidth > 0) {
            markAsLoaded();
        }
    }


    function lazyLoadImages(selector, loadedParent) {

        const images =
            document.querySelectorAll(selector);

        if (!images.length) return;

        if (!("IntersectionObserver" in window)) {

            images.forEach(img => {
                loadCachedImage(img, loadedParent);
            });

            return;
        }

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (!entry.isIntersecting) return;

                        loadCachedImage(
                            entry.target,
                            loadedParent
                        );

                        observer.unobserve(
                            entry.target
                        );
                    });

                },
                {
                    root: null,
                    rootMargin: "250px 0px",
                    threshold: 0
                }
            );

        images.forEach(img => {
            observer.observe(img);
        });
    }


    /*
     First-screen location images:
     load immediately.

     Login images load directly from Xcode:
     scrubmate-local://loginimages/...

     Service images load directly from Xcode:
     scrubmate-local://services/...
    */

    document
        .querySelectorAll(".location-image[data-src]")
        .forEach(img => {
            loadCachedImage(img);
        });


    /*
       Main UI images:
       Banner + Feature + Verified Badge only.

       Service images are NOT handled here anymore.
    */

    window.loadScurbHomeImages = function () {

        /* BANNER IMAGES */
        document
            .querySelectorAll(
                "#scurbHomePage .scurbBannerImg[data-src]"
            )
            .forEach(img => {
                loadCachedImage(
                    img,
                    ".scurbBannerItem"
                );
            });


        /* FEATURE IMAGES */
        document
            .querySelectorAll(
                "#scurbHomePage .scurbFeatureImg[data-src]"
            )
            .forEach(img => {
                loadCachedImage(
                    img,
                    ".scurbFeatureItem"
                );
            });


        /* VERIFIED BADGE IMAGES */
        document
            .querySelectorAll(
                "#scurbHomePage .verifiedBadgeImg[data-src]"
            )
            .forEach(img => {
                loadCachedImage(
                    img,
                    ".verifiedBadge"
                );
            });

    };

});
