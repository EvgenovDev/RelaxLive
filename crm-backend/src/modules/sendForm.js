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
    if (form.classList.contains("feedback__form")) {
      return {
        tel: form.querySelector("input").value
      };
    } else if (form.classList.contains("feedback-block__form")) {
      return {
        name: form.querySelectorAll("input")[0].value,
        tel: form.querySelectorAll("input")[1].value
      };
    }
  };

  try {
    if (forms) {
      forms.forEach((elem) => {
        let check = elem.querySelector(".checkbox__input");
        elem.querySelector("button").addEventListener("click", (e) => {
          e.preventDefault();
          if (check.checked) {
            let data = getInfoForm(elem);
            sendData({
              data: data,
              method: "POST",
              header: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              url: "https://jsonplaceholder.typicode.com/posts"
            });
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
