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
     First-screen images:
     load immediately.
    */

    document
        .querySelectorAll(".service-img[data-src]")
        .forEach(img => {
            loadCachedImage(img);
        });

    document
        .querySelectorAll(".location-image[data-src]")
        .forEach(img => {
            loadCachedImage(img);
        });


   /*
 Main UI images:
 load all only when the home page opens.
*/
window.loadScurbHomeImages = function () {

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

    document
        .querySelectorAll(
            "#scurbHomePage .scurbServiceImg[data-src]"
        )
        .forEach(img => {
            loadCachedImage(
                img,
                ".scurbServiceImageBox"
            );
        });

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
