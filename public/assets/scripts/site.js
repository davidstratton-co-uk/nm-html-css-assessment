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

let isMenuActive = false;

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

const toggleMenu = () => {
    toggleMenuButton();
    toggleSidebar();
    toggleChatButton();
}

const siteHandler = (event) => {
    if (menuButton.classList.contains("active") && event.currentTarget === siteCover) {
        toggleMenu();
    }
    if (event.target === menuButton || event.target.parentNode === menuButton) {
        toggleMenu();
    }
}

siteCover.addEventListener("click", siteHandler);

/**
 *  Accordion Toggle
 */
const oohButton = document.querySelector(".btn-ooh");
const oohText = document.querySelector(".ooh-text");

const toggleAcordion = (event) =>  {
    oohText.classList.toggle("active");
}

oohButton?.addEventListener("click", toggleAcordion);

/**
 *  Contact Us Form Validation
 */

const contactForm = document.querySelector(".contact-form");
const contactFormInputs = contactForm?.querySelectorAll("input, textarea");
const contactFormRequired = contactForm?.querySelectorAll("input:not(#company, #marketing), textarea");
const contactSubmitBtn = contactForm?.querySelector(".contact-btn");

const displayMsg = (type, msg) => {
    let msgArea = contactForm.querySelector("form-msg-area");
    
    if (!msgArea) {
        msgArea = document.createElement("div");
        msgArea.classList.add("form-msg-area");
        contactForm.prepend(msgArea);
    }

    msgDiv = document.createElement("div");
    msgDiv.classList.add(`form-msg-${type}`);
    msgDiv.innerHTML = `<p>${msg}</p><button type="button" class="form-msg-btn"><i class="fa-solid fa-x"></i></button>`;
    
    msgArea.prepend(msgDiv);

    msgDiv.addEventListener("click", clearMsg);
}

const clearMsg = (event) => {
    let msgDiv = event.target.closest("div");

    msgDiv.removeEventListener("click", clearMsg);
    msgDiv.remove();
}

const isFormValid = () => {
    const validEmail = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
    const emailInput = contactForm.querySelector("#email");
    let isValid = true;

    for (i=0; i < contactFormRequired.length; i++) {
        if (!contactFormRequired[i].value.trim()) {
            contactFormRequired[i].classList.add("has-error");
            isValid = false;
        } else {
            contactFormRequired[i].classList.remove("has-error");
        }
    }

    if (!validEmail.test(emailInput.value)) {
        emailInput.classList.add("has-error");
        isValid = false;
    } else {
        emailInput.classList.remove("has-error");
    }

    // isValid = true; // Uncomment to test php

    return isValid;
}

const postForm = () => {
    contactSubmitBtn.innerHTML = "Sending Enquiry..";

    const params = {
        username: contactFormInputs[0].value,
        company: contactFormInputs[1].value,
        email: contactFormInputs[2].value,
        phone: contactFormInputs[3].value,
        enquiry: contactFormInputs[4].value,
        marketing: contactFormInputs[5].checked
    };

    const options = {
        method: "POST",
        headers: {
             "Content-Type": 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(params) 
    };

    fetch( '../api/enquiry/create/', options )
    .then( response => response.json() )
    .then( response => {
        displayMsg(response.status, response.message);
        contactForm.reset();
        contactSubmitBtn.innerHTML = "Send Enquiry";
    } );
}

const contactFormHandler = (event) => {

    event.preventDefault();

    if (isFormValid()) {
        postForm();
    }     
}

contactForm?.addEventListener("submit", contactFormHandler);


