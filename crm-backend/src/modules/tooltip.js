const tooltip = ({
  sectionClass,
  elementsClass,
  tooltipClass,
  tooltipActiveClass,
  tooltipClassBottom
}) => {
  const section = document.querySelector(`.${sectionClass}`);
  const elems = section.querySelectorAll(`.${elementsClass}`);

  try {
    if (elems) {
      elems.forEach((elem) => {
        elem.addEventListener("mouseenter", (e) => {
          const tooltip = e.target.querySelector(`.${tooltipClass}`);
          tooltip.classList.add(tooltipActiveClass);
          let positionElemY = tooltip.getBoundingClientRect();
          if (positionElemY.top < 0) {
            tooltip.style.bottom = `-${window.getComputedStyle(tooltip).minHeight}`;
            tooltip.classList.add(tooltipClassBottom);
          }
        });

        elem.addEventListener("mouseleave", (e) => {
          e.target.querySelector(`.${tooltipClass}`).classList.remove(tooltipActiveClass);
        });
      });
    } else {
      throw Error("Класс элементов передан не верно");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default tooltip;
