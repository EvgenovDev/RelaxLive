const validatePhone = (phoneClass) => {
  const phoneInputs = document.querySelectorAll(`.${phoneClass}>input`);
  const footerPhones = document.querySelectorAll("form>label>.feedback-block__form-input_phone");

  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }


  function mask(event) {
    let matrix = "+7 (___) ___-__-__",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
    });
    if (event.type == "blur") {
      if (this.value.length == 2) this.value = "";
    } else setCursorPosition(this.value.length, this);
  };


  try {
    if (phoneInputs.length && footerPhones.length) {
      phoneInputs.forEach((elem) => {
        elem.setAttribute("placeholder", "+7 (___) ___-__-__");
        elem.addEventListener("input", mask, false);
        elem.addEventListener("focus", mask, false);
        elem.addEventListener("blur", mask, false);
      });

      footerPhones.forEach((elem) => {
        elem.setAttribute("placeholder", "+7 (___) ___-__-__");
        elem.addEventListener("input", mask, false);
        elem.addEventListener("focus", mask, false);
        elem.addEventListener("blur", mask, false);
      });

    } else {
      throw Error("Блоков с телефонами не существует");
    }
  } catch (error) {
    console.log(error.message);
  }
};
export default validatePhone;
