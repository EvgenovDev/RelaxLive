const select = document.querySelector("select");
const tableBody = document.querySelector("#tbody");
const tr = document.querySelector(".table__row");
const button = document.querySelector(".btn-addItem");
const popup = document.querySelector(".modal__overlay");

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
  });

  modal.addEventListener("click", (e) => {
    if (e.target.closest(".icon__close") || !e.target.closest(".modal") || e.target.closest(".cancel-button")) {
      e.preventDefault();
      modal.classList.remove("show-modal");
    } else if (e.target.closest(".button-ui_firm")) {
      e.preventDefault();
      const inputs = modal.querySelectorAll("input");
      const data = {
        type: inputs[0].value,
        name: inputs[1].value,
        units: inputs[2].value,
        cost: +inputs[3].value
      };
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
  });
}
