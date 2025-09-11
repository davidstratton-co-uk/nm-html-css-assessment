/**
 *  Hero Carousel
 */

const emblaNode = document.querySelector('#section-hero .embla');
const options = { loop: true };
const plugins = [EmblaCarouselAutoplay({stopOnInteraction: false}), EmblaCarouselAutoHeight()];
const emblaApi = EmblaCarousel(emblaNode, options, plugins);

const viewportNode = document.querySelector('.embla__viewport');
const dotsNode = document.querySelector('.embla__dots');

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
      dotNode?.addEventListener('click', () => scrollTo(index), false)
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
};

const onNavButtonClick = (emblaApi) => {
  const autoplay = emblaApi?.plugins()?.autoplay;
  if (!autoplay) return

  const resetOrStop =
    autoplay.options.stopOnInteraction === false
      ? autoplay.reset
      : autoplay.stop;

  resetOrStop();
};

const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi,
  dotsNode,
  onNavButtonClick
);

emblaApi.on('destroy', removeDotBtnsAndClickHandlers);


/**
 *  Partner Carousel
 */

const partnerEmblaNode = document.querySelector('#section-partners .embla');
const partnerOptions = { loop: true, watchDrag: false };
const partnerPlugins = [EmblaCarouselAutoplay({stopOnInteraction: false})];
const partnerEmblaApi = EmblaCarousel(partnerEmblaNode, partnerOptions, partnerPlugins);

// /**
//  *  Client Carousel
//  */

const clientEmblaNode = document.querySelector('#section-clients .embla');
const clientOptions = { loop: true, watchDrag: false };
const clientPlugins = [EmblaCarouselAutoplay()];
const clientEmblaApi = EmblaCarousel(clientEmblaNode, clientOptions, clientPlugins);
const autoplay = clientEmblaApi?.plugins()?.autoplay;

const clientMouseoverHandler = (event) => {
  if (event.target.tagName === "IMG"){
    autoplay.stop();
  }
}

const clientMouseoutHandler = (event) => {
    autoplay.play();
}

clientEmblaNode?.addEventListener("mouseover", clientMouseoverHandler);
clientEmblaNode?.addEventListener("mouseout", clientMouseoutHandler);