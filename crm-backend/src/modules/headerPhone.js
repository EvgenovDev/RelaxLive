const togglePhoneNumber = (phoneClass, arrowClass) => {
  const phones = document.querySelectorAll(`.${phoneClass}`);
  const arrow = document.querySelector(`.${arrowClass}>img`);

  arrow.addEventListener("click", (e) => {
    phones[1].classList.toggle("header-contacts__phone-number-accord--active");
  });
};

export default togglePhoneNumber;
