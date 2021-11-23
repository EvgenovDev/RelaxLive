const portfolioSlider = (sliderClass) => {
  const portfolioSlider = document.querySelector(`.${sliderClass}`);
  const arrows = portfolioSlider.querySelectorAll(".slider-arrow");
  const AllSlidersOld = portfolioSlider.querySelectorAll(".portfolio-slider__slide");
  let AllSlidersDiv = portfolioSlider.querySelector(".portfolio-slider");
  let countSlide = 0;

  try {
    function throttle(fn, ms) {
      let isRun = false;

      function wrap() {
        if (isRun) {
          return;
        }

        fn.apply(this, arguments);
        isRun = true;

        setTimeout(() => {
          isRun = false;
        }, ms);
      }

      return wrap;
    }

    function nextSlide() {
      portfolioSlider.querySelectorAll(".portfolio-slider__slide").forEach((elem) => {
        if (elem.classList.contains("portfolio-slide--active")) {
          elem.classList.remove("portfolio-slide--active");
        }
      });

      countSlide++;
      if (document.documentElement.clientWidth > 1024) {
        if (countSlide != 0 && countSlide != 2) {
          if (document.getElementById("portfolio-arrow_right").classList.contains("arrow-hidden")) {
            document.getElementById("portfolio-arrow_right").classList.remove("arrow-hidden");
          }
          if (document.getElementById("portfolio-arrow_left").classList.contains("arrow-hidden")) {
            document.getElementById("portfolio-arrow_left").classList.remove("arrow-hidden");
          }
        }
        if (countSlide === 2) {
          document.getElementById("portfolio-arrow_right").classList.add("arrow-hidden");
        }
        setTimeout(() => {
          AllSlidersDiv.innerHTML = "";
          AllSlidersDiv.append(AllSlidersOld[countSlide]);
          AllSlidersDiv.append(AllSlidersOld[countSlide + 1]);
          AllSlidersDiv.append(AllSlidersOld[countSlide + 2]);

          AllSlidersDiv.querySelectorAll(".portfolio-slider__slide").forEach((slide) => {
            slide.classList.add("portfolio-slide--active");
          });
        }, 1000);

      } else if (document.documentElement.clientWidth > 575 &&
        document.documentElement.clientWidth <= 1024) {
        if (countSlide != 0 && countSlide != 3) {
          if (document.getElementById("portfolio-arrow_right").classList.contains("arrow-hidden")) {
            document.getElementById("portfolio-arrow_right").classList.remove("arrow-hidden");
          }
          if (document.getElementById("portfolio-arrow_left").classList.contains("arrow-hidden")) {
            document.getElementById("portfolio-arrow_left").classList.remove("arrow-hidden");
          }
        }
        if (countSlide === 3) {
          document.getElementById("portfolio-arrow_right").classList.add("arrow-hidden");
        }
        setTimeout(() => {
          AllSlidersDiv.innerHTML = "";
          AllSlidersDiv.append(AllSlidersOld[countSlide]);
          AllSlidersDiv.append(AllSlidersOld[countSlide + 1]);

          AllSlidersDiv.querySelectorAll(".portfolio-slider__slide").forEach((slide) => {
            slide.classList.add("portfolio-slide--active");
          });
        }, 1000);
      }

    };

    function prevSlide() {
      portfolioSlider.querySelectorAll(".portfolio-slider__slide").forEach((elem) => {
        if (elem.classList.contains("portfolio-slide--active")) {
          elem.classList.remove("portfolio-slide--active");
        }
      });

      countSlide--;
      if (document.documentElement.clientWidth > 1024) {
        if (countSlide != 0 && countSlide != 2) {
          if (document.getElementById("portfolio-arrow_right").classList.contains("arrow-hidden")) {
            document.getElementById("portfolio-arrow_right").classList.remove("arrow-hidden");
          }
          if (document.getElementById("portfolio-arrow_left").classList.contains("arrow-hidden")) {
            document.getElementById("portfolio-arrow_left").classList.remove("arrow-hidden");
          }
        }
        if (countSlide === 0) {
          document.getElementById("portfolio-arrow_left").classList.add("arrow-hidden");
        }
        setTimeout(() => {
          AllSlidersDiv.innerHTML = "";
          AllSlidersDiv.append(AllSlidersOld[countSlide]);
          AllSlidersDiv.append(AllSlidersOld[countSlide + 1]);
          AllSlidersDiv.append(AllSlidersOld[countSlide + 2]);

          AllSlidersDiv.querySelectorAll(".portfolio-slider__slide").forEach((slide) => {
            slide.classList.add("portfolio-slide--active");
          });
        }, 1000);

      } else if (document.documentElement.clientWidth > 575 &&
        document.documentElement.clientWidth <= 1024) {
        if (countSlide != 0 && countSlide != 3) {
          if (document.getElementById("portfolio-arrow_right").classList.contains("arrow-hidden")) {
            document.getElementById("portfolio-arrow_right").classList.remove("arrow-hidden");
          }
          if (document.getElementById("portfolio-arrow_left").classList.contains("arrow-hidden")) {
            document.getElementById("portfolio-arrow_left").classList.remove("arrow-hidden");
          }
        }
        if (countSlide === 0) {
          document.getElementById("portfolio-arrow_left").classList.add("arrow-hidden");
        }
        setTimeout(() => {
          AllSlidersDiv.innerHTML = "";
          AllSlidersDiv.append(AllSlidersOld[countSlide]);
          AllSlidersDiv.append(AllSlidersOld[countSlide + 1]);

          AllSlidersDiv.querySelectorAll(".portfolio-slider__slide").forEach((slide) => {
            slide.classList.add("portfolio-slide--active");
          });
        }, 1000);
      }
    };

    if (portfolioSlider) {
      nextSlide = throttle(nextSlide, 2000);
      prevSlide = throttle(prevSlide, 2000);
      arrows.forEach((arrow) => {
        arrow.addEventListener("click", (e) => {
          if (e.target.closest(".slider-arrow_right-portfolio")) {
            nextSlide();
          } else if (e.target.closest(".slider-arrow_left-portfolio")) {
            prevSlide();
          }
        });
      });

    } else {
      throw Error("Класс слайдера передан не верно");
    }
  } catch (error) {
    console.log(error.message);
  }
};


export default portfolioSlider;
