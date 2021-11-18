const popup = ({
  classPopup,
  otherItemsClass,
  activeClass,
  closeClass,
  modalClass
}) => {
  const popup = document.querySelector(`.${classPopup}`);
  const otherItems = document.querySelectorAll(`.${otherItemsClass}`);

  try {
    if (popup && otherItems.length) {
      otherItems.forEach((elem) => {
        elem.addEventListener("click", (e) => {
          popup.classList.add(activeClass);
        });
      });

      popup.addEventListener("click", (e) => {
        if (e.target.classList.contains(closeClass) || !e.target.closest(`.${modalClass}`)) {
          popup.classList.remove(activeClass);
        }
      });
    } else {
      throw Error("Классы переданы неверно,либо не существуют");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default popup;
