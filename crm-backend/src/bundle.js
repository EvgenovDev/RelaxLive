import faq from "./modules/FAQ";
import togglePhoneNumber from "./modules/headerPhone";
import menu from "./modules/menu";
import popup from "./modules/popup";
import popupPortfolio from "./modules/popupPortfolio";
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
popupPortfolio();
popup({
  activeClass: "transparency--active",
  classPopup: "popup-transparency",
  otherItemsClass: "transparency-item__img",
  closeclass: "close",
  modalClass: "popup-dialog-transparency"
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
  simpleSlider({
    arrowLeftClass: "nav-arrow_left",
    arrowRightClass: "nav-arrow_right",
    sliderClass: "repair-types",
    slideActiveClass: "repair-types-nav__item--active",
    slideClass: "repair-types-nav__item"
  });
  document.querySelector(".repair-types-nav__item").classList.remove("active");
}
simpleSlider({
  sliderClass: "popup-transparency",
  slideClass: "popup-transparency-slider__slide",
  arrowLeftClass: "popup-arrow_transparency_left",
  arrowRightClass: "popup-arrow_transparency_right",
  slideActiveClass: "popup-transparency-slider__slide--active",
  paginationCurrentClass: "slider-counter-content__current",
  paginationTotalClass: "slider-counter-content__total"
});
simpleSlider({
  sliderClass: "repair-types",
  arrowLeftClass: "slider-arrow_left",
  arrowRightClass: "slider-arrow_right",
  allSlidesTabClass: "type-slide",
  tabsClass: "repair-types-nav__item",
  slideClass: "repair-types-slider__slide",
  activeTabClass: "active",
  activeSliderClass: "type-slide--active",
  slideActiveClass: "repair-types-slider__slide--active",
  paginationCurrentClass: "slider-counter-content__current",
  paginationTotalClass: "slider-counter-content__total"
});
