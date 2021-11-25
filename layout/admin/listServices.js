const select = document.querySelector("select");

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
      }
    });
}
