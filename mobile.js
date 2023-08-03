
    //check for mobile
    function detectMobile() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i
        ];
        return toMatch.some((toMatchItem) => {
            return navigator.userAgent.match(toMatchItem);
        });
    }
    const isMobile = detectMobile()

    if(isMobile) {
        document.querySelector(".grid").style.gridTemplateColumns = "1fr";
        for (var i = 0; i < items.length; i++) {
            items[i].classList.remove("odd")
          }
    }