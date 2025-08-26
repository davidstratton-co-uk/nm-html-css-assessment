/**
 *  Cookies Bar Accept
 */
const siteConsent = document.querySelector("#site-consent");
const consentManage = document.querySelector("#consent-btn-manage");
const consentSettings = document.querySelector("#consent-btn-settings");
const consentAccept = document.querySelector("#consent-btn-accept");

const settingsHandler = () => {
    // Temp Clears Consent
    localStorage.removeItem("hasGivenConsent");
}

const acceptHandler = () => {
    localStorage.setItem("hasGivenConsent", "true");
    toggleConsentBar();
};

const toggleConsentBar = () => {
    siteConsent.classList.toggle("active");
}

const consentHandler = () => {
    let hasGivenConsent = localStorage.getItem("hasGivenConsent");

    if (!hasGivenConsent) {
        toggleConsentBar();
    }   
}

document.addEventListener('DOMContentLoaded', consentHandler);
consentManage.addEventListener("click", toggleConsentBar);
consentAccept.addEventListener("click", acceptHandler);
consentSettings.addEventListener("click", settingsHandler);

/**
  *  On Scroll Header Sticky Class Handler
  * 
  *  Sets class based on scroll direction
  *  Stops repeated changes if scrolling same as previous direction
  *  
  */
//TODO: Add Slide in Effect?
//TODO: Remove when Idle?
//FIXME: Add a minimum height before effect starts
const siteHeader = document.querySelector("#site-header");

let prevScrollTop = document.documentElement.scrollTop || window.pageYOffset;
let hasScrolledUp = false;

const scrollHandler = () => {
    const curScrollTop = document.documentElement.scrollTop || window.pageYOffset;
      
    // Scroll Down
    if (curScrollTop > prevScrollTop && hasScrolledUp) {
        siteHeader.classList.remove("sticky");
        hasScrolledUp = false;
    }

    // Scroll Up
    if (curScrollTop <= prevScrollTop && !hasScrolledUp) {
        siteHeader.classList.add("sticky");
        hasScrolledUp = true;
    }

    prevScrollTop = curScrollTop;
}

window.addEventListener("scroll", scrollHandler);

/**
 *  Scrolling Hero
 */
//TODO: Add Auto Scroll
//TODO: Delay Auto Scroll if button is pushed
//TODO: Infinite Scroll - Flex Order? Do you need recalc position?
const heroPagination = document.querySelector("#hero-pagination");
const heroList = document.querySelector("#hero-list");
let currentHero = 1;

const toggleHero = (current, target) => {
    let width = document.documentElement.clientWidth;
    
    heroPagination.children[current - 1].classList.remove("active");
    heroPagination.children[target - 1].classList.add("active");
    heroList.children[current - 1].classList.remove("active");
    heroList.children[target - 1].classList.add("active");

    heroList.scrollTo({
    left: (width * (target - 1)),
    behavior: 'smooth'
  })
    return newCurrent = target;
}

const buttonHandler = (e) => {
    if (e.target.type === "LI" || "BUTTON") {
        let targetHero = e.target.parentNode.getAttribute("data-hero-num");
        currentHero = toggleHero(currentHero, targetHero);
    }

    // let itemNum = e.target.attr("data-hero-num");
    // console.log(itemNum)
}

// document.addEventListener('DOMContentLoaded', autoScrollHandler);
heroPagination.addEventListener("click", buttonHandler);

/**
 *  Scrolling Partner and Client Images
 */
//FIXME: Due to how Scroll Containers work, the tooltips are no longer
//       displayed correctly due to overflow clipping.
//       Research Popover API, Mousein, MouseOut, MouseOver Events.
const partnerImages = document.querySelector("#partner-list");
const clientImages = document.querySelector("#client-list");


const slide = (imageSet, byPixels) => {
    console.log(`${imageSet} Auto Scroll Called`);
    let width = document.documentElement.clientWidth;

    imageSet.scrollBy({
        left: byPixels,
        behavior: 'smooth'
    })

    setTimeout(() => {
        slide(imageSet, byPixels);
    }, 5000);
}
const partnerScrollHandler = () => {
    slide(partnerImages, 100);
}

const clientScrollHandler = () => {
    slide(clientImages, 100);
}


document.addEventListener('DOMContentLoaded', partnerScrollHandler);
document.addEventListener('DOMContentLoaded', clientScrollHandler);