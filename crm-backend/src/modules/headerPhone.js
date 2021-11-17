const togglePhoneNumber = (phoneClass, arrowClass) => {
  const phones = document.querySelectorAll(`.${phoneClass}`);
  const arrow = document.querySelector(`.${arrowClass}>img`);

  try {
    if (phones.length && arrow) {
      arrow.addEventListener("click", (e) => {
        phones[1].classList.toggle("header-contacts__phone-number-accord--active");
      });
    } else {
      throw Error("Классы телефона или стрелки переданы не верно");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default togglePhoneNumber;
