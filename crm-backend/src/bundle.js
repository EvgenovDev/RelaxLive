import togglePhoneNumber from "./modules/headerPhone";
import menu from "./modules/menu";
import consultation from "./modules/popupConsultation";
import privacy from "./modules/popupPrivacy";
import sendForm from "./modules/sendForm";
import validatePhone from "./modules/validatePhoneInput";

togglePhoneNumber("header-contacts__phone-number", "header-contacts__arrow");
menu("popup-menu");
validatePhone("feedback__input");
consultation("popup-consultation");
privacy("popup-privacy", "link-privacy");
sendForm("popup-thank");
