const sendForm = (popupThankClass) => {
  const forms = document.querySelectorAll("form");

  const sendData = ({
    data,
    url,
    method,
    header
  }) => {
    return fetch(url, {
        method: method,
        headers: header,
        body: JSON.stringify(data)
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        thankPopup(popupThankClass);
      })
      .then(() => {
        setTimeout(() => {
          document.querySelector(`.${popupThankClass}`).classList.remove("popup-thank--active");
        }, 3000);
      })
      .then(() => {
        forms.forEach((elem) => {
          elem.querySelectorAll("input").forEach((input) => {
            input.value = "";
          });
        });
        document.querySelectorAll(".checkbox>input").forEach((elem) => {
          elem.checked = false;
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const thankPopup = (popupClass) => {
    const popup = document.querySelector(`.${popupClass}`);
    try {
      if (popup) {
        popup.classList.add("popup-thank--active");
      } else {
        throw Error("Неправильный класс модалки спасибо");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const getInfoForm = (form) => {
    let isNoValide = false;
    if (form.classList.contains("feedback__form")) {
      if (form.querySelector("input").value == "" && form.querySelector("input").value.length < 18) {
        return false;
      }

      return {
        tel: form.querySelector("input").value
      };

    } else if (form.classList.contains("feedback-block__form")) {
      for (let i = 0; i < form.querySelectorAll("input").length; i++) {
        if (form.querySelectorAll("input")[i] == "") {
          form.querySelectorAll("input")[i].classList.add("fail__input");
          isNoValide = true;
        }
        if (form.querySelectorAll("input")[1].value.length < 18) {
          form.querySelectorAll("input")[1].classList.add("fail__input");
          isNoValide = true;
        }
        if (form.querySelectorAll("input")[0].value.length < 2) {
          form.querySelectorAll("input")[0].classList.add("fail__input");
          isNoValide = true;
        }
      }

      if (!isNoValide) {
        return {
          name: form.querySelectorAll("input")[0].value,
          tel: form.querySelectorAll("input")[1].value
        };
      } else {
        return false;
      }
    }
  };

  try {
    if (forms) {
      forms.forEach((elem) => {
        let check = elem.querySelector(".checkbox__input");
        const checkBox = elem.querySelector(".checkbox__label");

        elem.addEventListener("click", (e) => {
          if (e.target == checkBox) {
            if (checkBox.classList.contains("fail__checkbox")) {
              checkBox.classList.remove("fail__checkbox");
            }
          } else if (e.target == elem.querySelectorAll("input")[0]) {
            elem.querySelectorAll("input")[0].classList.remove("fail__input");
          } else if (e.target == elem.querySelectorAll("input")[1]) {
            elem.querySelectorAll("input")[1].classList.remove("fail__input");
          } else if (e.target == elem.querySelector("button")) {
            e.preventDefault();
            let data = getInfoForm(elem);
            if (check.checked && data) {
              sendData({
                data: data,
                method: "POST",
                header: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                url: "https://jsonplaceholder.typicode.com/posts"
              });
            } else {
              elem.querySelectorAll(".checkbox__label").forEach((elem) => {
                elem.classList.add("fail__checkbox");
              });
            }
          }
        });

      });
    } else {
      throw Error("Ни одной формы не существует");
    }
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
