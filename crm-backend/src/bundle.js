import faq from "./modules/FAQ";
import togglePhoneNumber from "./modules/headerPhone";
import menu from "./modules/menu";
import popup from "./modules/popup";
import portfolioSlider from "./modules/portfolioSlider";
import repairInfo from "./modules/repairInfo";
import sendForm from "./modules/sendForm";
import simpleSlider from "./modules/simpleSlider";
import tooltip from "./modules/tooltip";
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
popup({
  classPopup: "popup-repair-types",
  otherItemsClass: "link-list-repair",
  activeClass: "popup-repair-types--active",
  closeClass: "close",
  modalClass: "popup-dialog-repair-types"
});
popup({
  classPopup: "popup-portfolio",
  otherItemsClass: "portfolio-slider__slide-frame",
  activeClass: "popup-portfolio--active",
  closeClass: "close",
  modalClass: "popup-dialog-portfolio"
});
repairInfo();
portfolioSlider("portfolio-slider-wrap");
faq({
  elemsClass: "accordion>ul>li",
  activeClass: "msg-active"
});
tooltip({
  sectionClass: "formula>.mobile-hide",
  elementsClass: "formula-item__icon",
  tooltipActiveClass: "tooltip--active",
  tooltipClass: "formula-item-popup",
  tooltipClassBottom: "tooltip_bottom"
});
simpleSlider({
  tooltipClass: "formula-item-popup",
  tooltipActiveClass: "tooltip--active",
  slideActiveClass: "formula-item--active",
  sliderClass: "formula",
  slideClass: "formula-slider__slide",
  arrowLeftClass: "slider-arrow_left-formula",
  arrowRightClass: "slider-arrow_right-formula"
});
simpleSlider({
  slideActiveClass: "reviews-slider__slide--active",
  sliderClass: "reviews",
  slideClass: "reviews-slider__slide",
  arrowLeftClass: "slider-arrow_left",
  arrowRightClass: "slider-arrow_right"
});
if (document.documentElement.clientWidth <= 1090) {
  simpleSlider({
    sliderClass: "transparency",
    slideClass: "transparency-item",
    arrowLeftClass: "slider-arrow_left",
    arrowRightClass: "slider-arrow_right",
    slideActiveClass: "transparency-item--active"
  });
}
