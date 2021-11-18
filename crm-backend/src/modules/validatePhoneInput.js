const validatePhone = (phoneClass) => {
  const phoneInputs = document.querySelectorAll(`.${phoneClass}>input`);

  try {
    if (phoneInputs.length) {
      phoneInputs.forEach((elem) => {
        elem.setAttribute("placeholder", "+7 (ddd) ddd-dd-dd");

        elem.addEventListener("focus", (e) => {
          elem.value = "+7 (";
        });

        elem.addEventListener("input", (e) => {
          elem.value = "+7 (" + elem.value.replace(/[^\d]/gi, "");
          //  if (elem.value.length == 7) {
          //    elem.value = "";
          //    let firstPoint = elem.value;
          //    elem.value = firstPoint + ") " + elem.value.replace(/[^\d]/gi, "");
          //    if (elem.value.length == 12) {
          //      let secondPoint = elem.value;
          //      elem.value = secondPoint + "-" + elem.value.replace(/[^\d]/gi, "");
          //      if (elem.value.length == 15) {
          //        let thirdPoint = elem.value;
          //        elem.value = thirdPoint + "-" + elem.value.replace(/[^\d]/gi, "");
          //        if (elem.value.length > 18) {
          //          let fourPoint = elem.value;
          //          elem.value = fourPoint;
          //        }
          //      }
          //    }
          //  }
        });
      });
    } else {
      throw Error("Блоков с телефонами не существует");
    }
  } catch (error) {
    console.log(error.message);
  }
};
export default validatePhone;
