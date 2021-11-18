const consultation = (classPopup) => {
  const popup = document.querySelector(`.${classPopup}`);

  try {
    if (popup) {
      const buttons = document.querySelectorAll(".button_wide");

      buttons.forEach((elem) => {
        elem.addEventListener("click", (e) => {
          e.preventDefault();
          popup.classList.add("popup-consultation--active");
        });
      });

      popup.addEventListener("click", (e) => {
        if (e.target.classList.contains("close-consultation") ||
          !e.target.closest(".feedback-wrap")) {
          popup.classList.remove("popup-consultation--active");
        }
      });

    } else {
      throw Error("Класс модального окна консультации передан не верно");
    }
  } catch (error) {
    console.log(error.message);
  }

};

export default consultation;
