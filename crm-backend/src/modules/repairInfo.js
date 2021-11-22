const repairInfo = () => {

  const clearButtons = (parentClass) => {
    document.querySelector(parentClass).innerHTML = "";
  };

  const getData = (url) => {
    return fetch(url);
  };

  const init = () => {
    const button = document.querySelectorAll(".popup-repair-types-nav__item")[1].cloneNode(true);

    document.querySelector(".no-overflow").addEventListener("click", () => {
      if (document.querySelector(".popup-repair-types--active")) {
        clearButtons(".nav-list-popup-repair");
        getData("http://localhost:3000/api/items")
          .then((response) => {
            return response.json();
          })
          .then((data) => {

          });
      }
    });

  };

  init();
  //   getData("http://localhost:3000/api/items");
};

export default repairInfo;
