const privacy = (classPopup, linkClass) => {
  const popup = document.querySelector(`.${classPopup}`);
  const linkPrivacy = document.querySelectorAll(`.${linkClass}`);

  try {
    if (popup && linkPrivacy) {
      linkPrivacy.forEach((elem) => {
        elem.addEventListener("click", (e) => {
          popup.classList.add("popup-privacy--active");
        });
      });

      popup.addEventListener("click", (e) => {
        if (e.target.classList.contains("close-privacy") ||
          !e.target.closest(".popup-dialog-privacy")) {
          popup.classList.remove("popup-privacy--active");
        }
      });
    } else {

      throw Error("Класс модального окна приватности передан не верно");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default privacy;
