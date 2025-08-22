/**
 *  Cookies Bar Accept
 * 
 *  Checks if user has previously accepted
 *  Displays Cookie Bar
 *  Removes Cookie Bar On Accept
 *  Stores Value on Accept
 * 
 */
const siteCookies = document.querySelector("#site-cookies");
const cookiesManage = document.querySelector("#cookies-btn-manage");
const cookiesSettings = document.querySelector("#cookies-btn-settings");
const cookiesAccept = document.querySelector("#cookies-btn-accept");

const settingsHandler = () => {
    // Loads Cookie Content Selection Panel
    // Temp Clears Consent
    localStorage.removeItem("hasGivenConsent");
}

const acceptHandler = () => {
    localStorage.setItem("hasGivenConsent", "true");
    toggleCookiesBar();
};

const toggleCookiesBar = () => {
    siteCookies.classList.toggle("active");
}

const cookiesHandler = () => {
    let hasGivenConsent = localStorage.getItem("hasGivenConsent");

    if (!hasGivenConsent) {
        toggleCookiesBar();
    }   
}



document.addEventListener('DOMContentLoaded', cookiesHandler);
cookiesManage.addEventListener("click", toggleCookiesBar);
cookiesAccept.addEventListener("click", acceptHandler);
cookiesSettings.addEventListener("click", settingsHandler);

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