function throttle(fn, ms) {
  let isRun = false;

  function wrap() {
    if (isRun) {
      return;
    }

    fn.apply(this, arguments);
    isRun = true;

    setTimeout(() => {
      isRun = false;
    }, ms);
  }

  return wrap;
}

export {
  throttle
};
