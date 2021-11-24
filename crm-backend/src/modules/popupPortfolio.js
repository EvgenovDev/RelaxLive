const popupPortfolio = () => {
  const popup = document.querySelector(".popup-portfolio");
  const otherItems = document.querySelectorAll(".portfolio-slider__slide-frame");
  const slide = popup.querySelectorAll(".popup-portfolio-slider__slide");
  const texts = popup.querySelectorAll(".popup-portfolio-text");
  let currentSlide;

  function nextSlide() {
    slide.forEach((elem) => {
      elem.classList.remove("popup-portfolio-slider__slide--active");
    });
    texts.forEach((text) => {
      text.classList.remove("popup-portfolio-text--active");
    });
    currentSlide++;
    if (currentSlide < slide.length) {
      slide[currentSlide].classList.add("popup-portfolio-slider__slide--active");
      texts[currentSlide].classList.add("popup-portfolio-text--active");
    } else {
      currentSlide = 0;
      slide[currentSlide].classList.add("popup-portfolio-slider__slide--active");
      texts[currentSlide].classList.add("popup-portfolio-text--active");
    }
  }

  function prevSlide() {
    slide.forEach((elem) => {
      elem.classList.remove("popup-portfolio-slider__slide--active");
    });
    texts.forEach((text) => {
      text.classList.remove("popup-portfolio-text--active");
    });
    currentSlide--;
    if (currentSlide >= 0) {
      slide[currentSlide].classList.add("popup-portfolio-slider__slide--active");
      texts[currentSlide].classList.add("popup-portfolio-text--active");
    } else {
      currentSlide = slide.length - 1;
      slide[currentSlide].classList.add("popup-portfolio-slider__slide--active");
      texts[currentSlide].classList.add("popup-portfolio-text--active");
    }
  }

  function renderPaginationPopup() {
    popup.querySelector(".slider-counter-content__total").textContent = slide.length;
    popup.querySelectorAll(".popup-portfolio-slider__slide").forEach((slide, index) => {
      if (slide.classList.contains("popup-portfolio-slider__slide--active")) {
        popup.querySelector(".slider-counter-content__current").textContent = index + 1;
        currentSlide = index;
      }
    });
  }

  function showCurrentInfo(dataName) {
    popup.querySelectorAll(".popup-portfolio-slider__slide").forEach((slide) => {
      slide.classList.remove("popup-portfolio-slider__slide--active");
    });
    popup.querySelectorAll(".popup-portfolio-slider__slide").forEach((slide) => {
      if (slide.getAttribute("data-img-name") == dataName) {
        slide.classList.add("popup-portfolio-slider__slide--active");
      }
    });

    popup.querySelectorAll(".popup-portfolio-text").forEach((slide) => {
      slide.classList.remove("popup-portfolio-text--active");
    });
    popup.querySelectorAll(".popup-portfolio-text").forEach((slide) => {
      if (slide.getAttribute("data-img-name") == dataName) {
        slide.classList.add("popup-portfolio-text--active");
      }
    });
  }

  try {
    if (popup && otherItems.length) {
      otherItems.forEach((elem) => {
        elem.addEventListener("click", (e) => {
          popup.classList.add("popup-portfolio--active");
          showCurrentInfo(elem.getAttribute("data-img-name"));
          renderPaginationPopup();
        });
      });

      popup.addEventListener("click", (e) => {
        if (e.target.classList.contains("close") || !e.target.closest(".popup-dialog-portfolio")) {
          popup.classList.remove("popup-portfolio--active");
        } else if (e.target.closest(".popup-arrow_right")) {
          nextSlide();
          renderPaginationPopup();
        } else if (e.target.closest(".popup-arrow_left")) {
          prevSlide();
          renderPaginationPopup();
        }
      });


    } else {
      throw Error("Классы переданы неверно,либо не существуют");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default popupPortfolio;
