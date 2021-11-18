const menu = (classMenu) => {
  const mainMenu = document.querySelector(`.${classMenu}`);
  const menuDialog = document.querySelector(".popup-dialog-menu");
  const menuIcon = document.querySelector(".menu__icon");

  const scrolls = (elemForFunc, callback) => {
    let id = callback(elemForFunc);
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  };

  const getIdLink = (elem) => {
    let value = elem.getAttribute("href");
    let value1 = value.slice(1, value.length);

    return value1;
  };

  const addClassSmallOrBig = (event) => {
    if (document.documentElement.clientWidth > 576 && event.target === menuIcon) {
      menuDialog.classList.add("popup-menu-dialog--active--big");
    } else if (document.documentElement.clientWidth < 576 && event.target === menuIcon) {
      menuDialog.classList.add("popup-menu-dialog--active--small");
    }
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest(".button-footer")) {
      e.preventDefault();
      scrolls(e.target, getIdLink);
      if (menuDialog.classList.contains("popup-menu-dialog--active--big")) {
        menuDialog.classList.remove("popup-menu-dialog--active--big");
      }
    }
    addClassSmallOrBig(e);
  });

  mainMenu.addEventListener("click", (e) => {
    if ((e.target.classList.contains("close-menu") ||
        !e.target.closest(".popup-menu-main") ||
        e.target.classList.contains("menu-link")) && document.documentElement.clientWidth > 576) {
      menuDialog.classList.remove("popup-menu-dialog--active--big");
      if (e.target.classList.contains("menu-link") && !e.target.classList.contains("no-overflow")) {
        e.preventDefault();
        scrolls(e.target, getIdLink);
      }
    } else if ((e.target.classList.contains("close-menu") ||
        !e.target.closest(".popup-menu-main") ||
        e.target.classList.contains("menu-link")) && document.documentElement.clientWidth < 576) {
      menuDialog.classList.remove("popup-menu-dialog--active--small");
      if (e.target.classList.contains("menu-link") && !e.target.classList.contains("no-overflow")) {
        e.preventDefault();
        scrolls(e.target, getIdLink);
      }
    }
  });
};

export default menu;
