const button = document.querySelector("button");
const spansWarning = document.querySelectorAll(".text-warning");
const inputs = document.querySelectorAll("input");

const user = "admin";
const pass = "1234";

function isAdmin() {
  let isNoValide = false;
  if (inputs[0].value !== user) {
    spansWarning[0].style.display = "block";
    inputs[0].value = "";
    isNoValide = true;
  }
  if (inputs[1].value !== pass) {
    spansWarning[1].style.display = "block";
    inputs[1].value = "";
    isNoValide = true;
  }

  return !isNoValide;
}

inputs.forEach(input => {
  input.addEventListener("focus", (e) => {
    if (e.target == inputs[0]) {
      spansWarning[0].style.display = "none";
    } else if (e.target == inputs[1]) {
      spansWarning[1].style.display = "none";
    }
  });
});

spansWarning.forEach((span) => {
  span.style.display = "none";
});

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (isAdmin()) {
    document.cookie = "admin=true";
    inputs.forEach((input) => {
      input.classList.add("success");
    });
    setTimeout(() => {
      window.location.href = `${document.location.href}/../table.html`;
    }, 2000);
  }

});
