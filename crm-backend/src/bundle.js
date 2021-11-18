import togglePhoneNumber from "./modules/headerPhone";
import menu from "./modules/menu";
import consultation from "./modules/popupConsultation";
import validatePhone from "./modules/validatePhoneInput";

togglePhoneNumber("header-contacts__phone-number", "header-contacts__arrow");
menu("popup-menu");
validatePhone("feedback__input");
consultation("popup-consultation");
