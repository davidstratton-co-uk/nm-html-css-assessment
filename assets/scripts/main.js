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
//FIXME: Add Slide in Effect?
const siteHeader = document.querySelector("#site-header");
const noStickyDistance = 600;

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
    if (curScrollTop >= noStickyDistance && curScrollTop <= prevScrollTop && !hasScrolledUp) {
        siteHeader.classList.add("sticky");
        hasScrolledUp = true;
    }

    prevScrollTop = curScrollTop;
}

window.addEventListener("scroll", scrollHandler);

/**
 *  Hamburger Menu
 * 
 * 
 */
const menuButton = document.querySelector("#header-menu");
const sidebar = document.querySelector("#site-sidebar");
const chatButton = document.querySelector("#chat-icon");
const siteCover = document.querySelector("#site-wrapper");

const toggleMenuButton = () => {
    menuButton.classList.toggle("active");
}

const toggleSidebar = () => {
    document.body.classList.toggle("sidebar-active");
    sidebar.classList.toggle("active");
}

const toggleChatButton = () => {
    chatButton.classList.toggle("hidden");
}

const menuHandler = () => {
    toggleMenuButton();
    toggleSidebar();
    toggleChatButton();
}

//FIXME: Add Sidemenu Slide in
const siteHandler = (event) => {
    if (menuButton.classList.contains("active") && event.target !== menuButton) {
        menuHandler();
    }
}

siteCover.addEventListener("click", siteHandler);
menuButton.addEventListener("click", menuHandler);


/**
 *  Scrolling Hero
 */
//FIXME: Infinite Scroll - Flex Order? Do you need recalc position?
const heroPagination = document.querySelector("#hero-pagination");
const heroList = document.querySelector("#hero-list");
let autoHero = '';
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

    return currentHero = target;
}

const buttonHandler = (e) => {
    if (e.target.type === "LI" || "BUTTON") {
        clearTimeout(autoHero);
        let targetHero = e.target.parentNode.getAttribute("data-hero-num");

        currentHero = toggleHero(currentHero, targetHero); 
    }
}

const slideHero = (currentHero) => {
    heroNum = heroList.children.length - 1;

    let nextHero = currentHero + 1;

    if (currentHero == heroNum) {
        nextHero = 1;
    }

    currentHero = toggleHero(currentHero, nextHero);

    autoHero = setTimeout(() => {
        slideHero(currentHero);
    }, 5000);
}

const heroHandler = () => {
    autoHero = setTimeout(() => {
        slideHero(currentHero);
    }, 5000);
}

document.addEventListener('DOMContentLoaded', heroHandler);
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