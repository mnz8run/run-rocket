const db = (fn, timeout) => {
  let timer;
  return function (...param) {
    let context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, param);
    }, timeout);
  };
};

const dblog = db(console.log, 1000);

dblog(123);
