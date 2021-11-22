const repairInfo = () => {

  const clear = (elemClass) => {
    document.querySelector(elemClass).innerHTML = "";
  };

  const getData = (url) => {
    return fetch(url);
  };

  const renderObject = ({
    data,
    parentTable,
    table,
    tr
  }) => {
    try {
      data.forEach((elem) => {
        if (data.type == "Потолок: Демонтажные работы") {
          let newTr = tr.cloneNode(true);
          let newTable = table.cloneNode();
          newTr.querySelector(".repair-types-name").textContent = elem.name;
          newTr.querySelectorAll(".repair-types-value")[0].textContent = elem.units;
          newTr.querySelectorAll(".repair-types-value")[1].textContent = `${elem.cost}руб.`;
          newTable.append(newTr);
        }
      });

      const buttons = document.querySelectorAll(".popup-repair-types-nav__item");
      buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
          document.getElementById("switch-inner").textContent = button.textContent;
          clear(".popup-repair-types-content-table");
          let newTable = table.cloneNode();
          parentTable.append(newTable);

          data.forEach((elem) => {
            if (button.textContent == elem.type) {
              let newTr = tr.cloneNode(true);
              newTr.querySelector(".repair-types-name").textContent = elem.name;
              newTr.querySelectorAll(".repair-types-value")[0].textContent = elem.units;
              newTr.querySelectorAll(".repair-types-value")[1].textContent = `${elem.cost}руб.`;
              newTable.append(newTr);
            }
          });
        });
      });

    } catch (error) {
      console.log(error.message);
    }
  };

  const renderButtons = ({
    array,
    button,
    parentClass
  }) => {
    let parent = document.querySelector(parentClass);
    try {
      if (array.length) {
        for (let i = 0; i < array.length; i++) {
          const cloneButton = button.cloneNode(true);
          cloneButton.textContent = array[i].type;
          parent.append(cloneButton);
        }
      } else {
        throw Error("Данные с сервера получены не верно, либо данных нет");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const init = () => {
    const tableDiv = document.querySelector(".popup-repair-types-content-table");
    const table = tableDiv.querySelector(".popup-repair-types-content-table__list");
    const button = document.querySelectorAll(".popup-repair-types-nav__item")[1];
    const tr = tableDiv.querySelectorAll("tbody>.mobile-row")[1];

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("no-overflow") || e.target == document.querySelectorAll(".link-list-repair>a")[1]) {
        if (document.querySelector(".popup-repair-types--active")) {
          clear(".nav-list-popup-repair");
          getData("http://localhost:3000/api/items")
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              let arr = [];
              if (data[0]) {
                let type = data[0].name;
                arr = data.filter((elem) => {
                  if (elem.type != type) {
                    type = elem.type;
                    return elem.type;
                  }
                });
              }
              renderButtons({
                array: arr,
                button: button,
                parentClass: ".nav-list-popup-repair"
              });
              renderObject({
                data: data,
                table: table,
                tr: tr,
                parentTable: tableDiv
              });
            })
            .catch(error => console.log(error.message));
        }
      }
    });
  };

  init();
};

export default repairInfo;
