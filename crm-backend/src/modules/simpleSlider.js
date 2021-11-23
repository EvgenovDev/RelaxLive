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
  tooltipActiveClass
}) => {
  const slider = document.querySelector(`.${sliderClass}`);
  const slides = slider.querySelectorAll(`.${slideClass}`);
  const arrowLeft = slider.querySelector(`.${arrowLeftClass}`);
  const arrowRight = slider.querySelector(`.${arrowRightClass}`);
  let countSlide = 0;

  function nextSlide() {
    slides.forEach((slide) => {
      slide.classList.remove(slideActiveClass);
    });
    countSlide++;
    if (countSlide < 6) {
      slides[countSlide].classList.add(slideActiveClass);
    } else {
      countSlide = 0;
      slides[countSlide].classList.add(slideActiveClass);
    }
  }

  function prevSlide() {
    slides.forEach((slide) => {
      slide.classList.remove(slideActiveClass);
    });
    countSlide--;
    if (countSlide >= 0) {
      slides[countSlide].classList.add(slideActiveClass);
    } else {
      countSlide = 5;
      slides[countSlide].classList.add(slideActiveClass);
    }
  }

  try {
    if (slides && arrowLeft && arrowRight) {
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
            slider.querySelector(`.${tooltipActiveClass}`).classList.remove(tooltipActiveClass);
          }
        }
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default simpleSlider;
