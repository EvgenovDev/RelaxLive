import {
  throttle
} from "./helpers";

const simpleSlider = ({
  sliderClass,
  slideClass,
  arrowLeftClass,
  arrowRightClass,
  slideActiveClass,
  tooltipClass,
  tooltipActiveClass,
  tabsClass,
  allSlidesTabClass,
  activeTabClass,
  activeSliderClass,
  paginationCurrentClass,
  paginationTotalClass
}) => {
  const slider = document.querySelector(`.${sliderClass}`);
  const slides = slider.querySelectorAll(`.${slideClass}`);
  const arrowLeft = slider.querySelector(`.${arrowLeftClass}`);
  const arrowRight = slider.querySelector(`.${arrowRightClass}`);
  const tabs = document.querySelectorAll(`.${tabsClass}`);
  const allSlidesTab = document.querySelectorAll(`.${allSlidesTabClass}`);
  const paginationCurrent = document.querySelector(`.${paginationCurrentClass}`);
  const paginationTotal = document.querySelector(`.${paginationTotalClass}`);
  let countSlide = 0;

  function renderPagination() {
    const activeSlider = slider.querySelector(`.${activeSliderClass}`);
    const arraySlides = activeSlider.querySelectorAll(`.${slideClass}`);
    paginationTotal.textContent = arraySlides.length;
    paginationCurrent.textContent = countSlide + 1;
  }

  function showCurrentSliderTab(dataName, sliders) {
    sliders.forEach((slider) => {
      if (slider.getAttribute("data-tab-name") == dataName) {
        clearActiveSlider(sliders);
        slider.classList.add(activeSliderClass);
        slider.querySelector(`.${slideClass}`).classList.add(slideActiveClass);
      }
    });
  }

  function clearActiveSlider(arraySlider) {
    arraySlider.forEach((slider) => {
      slider.classList.remove(activeSliderClass);
    });
  }

  function clearActiveTabs(arrayTabs) {
    arrayTabs.forEach((tab) => {
      tab.classList.remove(activeTabClass);
    });
  }

  function nextSlide(slider) {
    if (slider) {
      let currentSlides = slider.querySelectorAll(`.${slideClass}`);
      currentSlides.forEach((slide) => {
        slide.classList.remove(slideActiveClass);
      });
      countSlide++;
      if (countSlide < currentSlides.length) {
        currentSlides[countSlide].classList.add(slideActiveClass);
      } else {
        countSlide = 0;
        currentSlides[countSlide].classList.add(slideActiveClass);
      }
    } else {
      slides.forEach((slide) => {
        slide.classList.remove(slideActiveClass);
      });
      countSlide++;
      if (countSlide < slides.length) {
        slides[countSlide].classList.add(slideActiveClass);
      } else {
        countSlide = 0;
        slides[countSlide].classList.add(slideActiveClass);
      }
    }
  }

  function prevSlide(slider) {
    if (slider) {
      let currentSlides = slider.querySelectorAll(`.${slideClass}`);
      currentSlides.forEach((slide) => {
        slide.classList.remove(slideActiveClass);
      });
      countSlide--;
      if (countSlide >= 0) {
        currentSlides[countSlide].classList.add(slideActiveClass);
      } else {
        countSlide = currentSlides.length - 1;
        currentSlides[countSlide].classList.add(slideActiveClass);
      }
    } else {
      slides.forEach((slide) => {
        slide.classList.remove(slideActiveClass);
      });
      countSlide--;
      if (countSlide >= 0) {
        slides[countSlide].classList.add(slideActiveClass);
      } else {
        countSlide = slides.length - 1;
        slides[countSlide].classList.add(slideActiveClass);
      }
    }
  }

  try {
    if (slides && arrowLeft && arrowRight && !tabsClass) {
      slider.addEventListener("click", (e) => {
        if (e.target.closest(`.${arrowRightClass}`)) {
          nextSlide();
        } else if (e.target.closest(`.${arrowLeftClass}`)) {
          prevSlide();
        }

        if (tooltipClass && tooltipActiveClass) {
          if (e.target.closest(`.${slideActiveClass}`)) {
            e.target.querySelector(`.${tooltipClass}`).classList.add(tooltipActiveClass);
          } else if (!e.target.closest(`.${slideActiveClass}`)) {
            if (slider.querySelector(`.${tooltipActiveClass}`)) {
              slider.querySelector(`.${tooltipActiveClass}`).classList.remove(tooltipActiveClass);
            }
          }
        }
      });
    }

    if (slides && arrowLeft && arrowRight && tabs && allSlidesTab) {
      if (paginationCurrent && paginationTotal) {
        renderPagination();
      }

      tabs.forEach((tab) => {
        tab.addEventListener("click", (e) => {
          clearActiveTabs(tabs);
          e.target.classList.add(activeTabClass);
          showCurrentSliderTab(e.target.getAttribute("data-tab-name"), allSlidesTab);
          countSlide = 0;
          if (paginationCurrent && paginationTotal) {
            renderPagination();
          }
        });
      });

      slider.addEventListener("click", (e) => {
        if (e.target.closest(`.${arrowRightClass}`)) {
          allSlidesTab.forEach((slider) => {
            if (slider.classList.contains(activeSliderClass)) {
              nextSlide(slider);
              if (paginationCurrent && paginationTotal) {
                renderPagination();
              }
            }
          });
        } else if (e.target.closest(`.${arrowLeftClass}`)) {
          allSlidesTab.forEach((slider) => {
            if (slider.classList.contains(activeSliderClass)) {
              prevSlide(slider);
              if (paginationCurrent && paginationTotal) {
                renderPagination();
              }
            }
          });
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default simpleSlider;
