import togglePhoneNumber from "./modules/headerPhone";
import menu from "./modules/menu";
import popup from "./modules/popup";
import sendForm from "./modules/sendForm";
import validatePhone from "./modules/validatePhoneInput";

togglePhoneNumber("header-contacts__phone-number", "header-contacts__arrow");
menu("popup-menu");
validatePhone("feedback__input");
sendForm("popup-thank");
popup({
  classPopup: "popup-consultation",
  otherItemsClass: "button_wide",
  activeClass: "popup-consultation--active",
  closeClass: "close-consultation",
  modalClass: "feedback-wrap"
});
popup({
  classPopup: "popup-privacy",
  otherItemsClass: "link-privacy",
  activeClass: "popup-privacy--active",
  closeClass: "close-privacy",
  modalClass: "popup-dialog-privacy"
});
popup({
  classPopup: "popup-repair-types",
  otherItemsClass: "no-overflow",
  activeClass: "popup-repair-types--active",
  closeClass: "close",
  modalClass: "popup-dialog-repair-types"
});
