const select = document.querySelector("select");
const tableBody = document.querySelector("#tbody");
const tr = document.querySelector(".table__row");

function getData(url) {
  return fetch(url);
}

function clear(elem) {
  elem.innerHTML = "";
}

function renderSelectOption(array) {
  let newOption = new Option("Все услуги", "Все услуги");
  select.append(newOption);
  array.forEach((elem) => {
    newOption = new Option(`${elem.type}`, `${elem.type}`);
    select.append(newOption);
  });
}

function renderTable(array) {
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
  clear(tableBody);
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
        let arr = [];
        arr = data.filter(elem => elem.type == valueOption);
        clear(tableBody);
        renderTable(arr);
      });
  });
}
