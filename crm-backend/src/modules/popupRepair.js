const repair = (repairClass) => {
  const popup = document.querySelector(`.${repairClass}`);
  const links = document.querySelectorAll(".no-overflow");

  try {
    if (popup && links.length) {
      links.forEach((elem) => {
        elem.addEventListener("click", (e) => {
          popup.classList.add("popup-repair-types--active");
        });
      });
      popup.addEventListener("click", (e) => {
        if (e.target.classList.contains("close") ||
          !e.target.closest(".popup-dialog-repair-types")) {
          popup.classList.remove("popup-repair-types--active");
        }
      });
    } else {
      throw Error("Нет модального окна или ссылок,либо не правильно переданы классы");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default repair;
