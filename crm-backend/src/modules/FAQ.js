const faq = ({
  elemsClass,
  activeClass,
}) => {
  const elems = document.querySelectorAll(`.${elemsClass}`);

  const tab = (event) => {
    event.target.classList.add(activeClass);
  };

  elems.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      if (e.target.closest(`.${elemsClass}`) && !e.target.classList.contains(activeClass)) {
        tab(e);
      } else {
        e.target.classList.remove(activeClass);
      }
    });
  });
};

export default faq;
