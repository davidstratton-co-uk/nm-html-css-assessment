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
 *  Hero Carousel
 */

const emblaNode = document.querySelector('.embla')
const options = { loop: true }
const plugins = [EmblaCarouselAutoplay()]
const emblaApi = EmblaCarousel(emblaNode, options, plugins)

const viewportNode = document.querySelector('.embla__viewport')
const dotsNode = document.querySelector('.embla__dots')

const addDotBtnsAndClickHandlers = (
  emblaApi,
  dotsNode,
  onButtonClick
) => {
  let dotNodes = [];

  const addDotBtnsWithClickHandlers = () => {
    dotsNode.innerHTML = emblaApi
        .scrollSnapList()
        .map(() => '<button class="embla__dot" type="button"></button>')
        .join('');

    const scrollTo = (index) => {
      emblaApi.scrollTo(index)
      if (onButtonClick) onButtonClick(emblaApi)
    }

    dotNodes = Array.from(dotsNode.querySelectorAll('.embla__dot'));

    dotNodes.forEach((dotNode, index) => {
      dotNode.addEventListener('click', () => scrollTo(index), false)
    });
    
  }

  const toggleDotBtnsActive = () => {
    const previous = emblaApi.previousScrollSnap();
    const selected = emblaApi.selectedScrollSnap();
    dotNodes[previous].classList.remove('embla__dot--selected');
    dotNodes[selected].classList.add('embla__dot--selected');
  }

  emblaApi
    .on('init', addDotBtnsWithClickHandlers)
    .on('reInit', addDotBtnsWithClickHandlers)
    .on('init', toggleDotBtnsActive)
    .on('reInit', toggleDotBtnsActive)
    .on('select', toggleDotBtnsActive);

  return () => {
    dotsNode.innerHTML = '';
  }
}

const onNavButtonClick = (emblaApi) => {
  const autoplay = emblaApi?.plugins()?.autoplay;
  if (!autoplay) return

  const resetOrStop =
    autoplay.options.stopOnInteraction === false
      ? autoplay.reset
      : autoplay.stop;

  resetOrStop();
}

const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi,
  dotsNode,
  onNavButtonClick
)

emblaApi.on('destroy', removeDotBtnsAndClickHandlers)