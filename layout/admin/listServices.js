const select = document.querySelector("select");
const tableBody = document.querySelector("#tbody");
const tr = document.querySelector(".table__row");
const button = document.querySelector(".btn-addItem");
const modal = document.querySelector(".modal__overlay");
let isNewElement = true;

function getInfoModal(modal) {
  const currentInputs = modal.querySelectorAll("input");

  return {
    type: currentInputs[0].value,
    name: currentInputs[1].value,
    units: currentInputs[2].value,
    cost: +currentInputs[3].value
  };
}

const changeElement = (data, id) => {
  return fetch(`http://localhost:3000/api/items/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data)
  });
};

function getServices(url) {
  return fetch(url);
}

function getData(url) {
  return fetch(url);
}

function setNewServices(url, dataObject, method) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(dataObject)
  });
}

function clear(elem) {
  elem.innerHTML = "";
}

function renderSelectOption(array) {
  clear(select);
  let newOption = new Option("Все услуги", "Все услуги");
  select.append(newOption);
  array.forEach((elem) => {
    newOption = new Option(`${elem.type}`, `${elem.type}`);
    select.append(newOption);
  });
}

function renderTable(array) {
  clear(tableBody);
  array.forEach((elem) => {
    let newTr = tr.cloneNode(true);
    newTr.querySelector(".table__id").textContent = elem.id;
    newTr.querySelector(".table-type").textContent = elem.type;
    newTr.querySelector(".table-name").textContent = elem.name;
    newTr.querySelector(".table-units").textContent = elem.units;
    newTr.querySelector(".table-cost").textContent = elem.cost + "руб";
    tableBody.append(newTr);
  });

  const changeButtons = document.querySelectorAll(".action-change");
  changeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      isNewElement = false;
      const currentElem = e.target.closest(".table__row")
      const idElem = currentElem.querySelector(".table__id").textContent;
      modal.classList.add("show-modal");
      modal.querySelector(".modal__header").textContent = "Редактировать услугу";
      getServices(`http://localhost:3000/api/items/${idElem}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const currentInputs = modal.querySelectorAll("input");
          currentInputs[0].value = data.type;
          currentInputs[1].value = data.name;
          currentInputs[2].value = data.units;
          currentInputs[3].value = data.cost;
        });

      modal.querySelector(".button-ui_firm").addEventListener("click", (e) => {
        if (!isNewElement) {
          e.preventDefault();
          let data = getInfoModal(modal);
          changeElement(data, idElem)
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              modal.querySelectorAll("input").forEach((input) => {
                input.value = "";
              });
              modal.classList.remove("show-modal");
              getData("http://localhost:3000/api/items")
                .then((response) => {
                  return response.json();
                })
                .then((data) => {
                  const valueOption = select[select.selectedIndex].value;

                  let arrForTable = [];
                  arrForTable = data.filter(elem => elem.type == valueOption);
                  clear(tableBody);
                  renderTable(arrForTable);
                });
            });
        }
      }, {
        once: true
      });
    });
  });
}

if (!document.cookie || document.cookie !== "admin=true") {
  window.location.href = `${document.location.href}/../index.html`;
} else {
  clear(select);
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
        renderSelectOption(arr);
        renderTable(data);
      }
    });

  select.addEventListener("change", (e) => {
    const valueOption = e.target[e.target.selectedIndex].value;
    getData("http://localhost:3000/api/items")
      .then(response => {
        return response.json();
      })
      .then((data) => {
        if (valueOption == "Все услуги") {
          renderTable(data);
        } else {
          let arr = [];
          arr = data.filter(elem => elem.type == valueOption);
          renderTable(arr);
        }
      });
  });

  button.addEventListener("click", (e) => {
    e.preventDefault();
    modal.classList.add("show-modal");
    modal.querySelector(".modal__header").textContent = "Добавление новой услуги";
    isNewElement = true;
  });

  modal.addEventListener("click", (e) => {
    if (e.target.closest(".icon__close") || !e.target.closest(".modal") || e.target.closest(".cancel-button")) {
      e.preventDefault();
      modal.classList.remove("show-modal");
    } else if (e.target.closest(".button-ui_firm")) {
      if (isNewElement) {
        e.preventDefault();
        const inputs = modal.querySelectorAll("input");
        const data = getInfoModal(modal);
        setNewServices("http://localhost:3000/api/items", data, "POST");
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
              renderSelectOption(arr);
            }
            select.selectedIndex = select.options.length - 1;
            const valueOption = select[select.selectedIndex].value;

            let arrForTable = [];
            arrForTable = data.filter(elem => elem.type == valueOption);
            clear(tableBody);
            renderTable(arrForTable);
            inputs.forEach((input) => {
              input.value = "";
            });
            modal.classList.remove("show-modal");
          });
      }
    }
  });
}
