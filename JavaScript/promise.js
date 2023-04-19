const promise = new Promise((resolve, reject) => {
  //   console.log('new promise');
  if (1) {
    resolve('200'); // pending -> fulfilled
  } else {
    reject('500'); // pending -> rejected
  }
});

console.log(promise);

promise.then(console.log, console.error);

promise.then(
  (fulfilled) => {
    console.log('fulfilled', fulfilled);
  },
  (rejected) => {
    console.log('rejected', rejected);
  },
);

console.log('end'); // synchronous

const promise2 = new Promise((resolve, reject) => {
  resolve(promise); // promise2 状态 由 promise 决定
  reject(promise); // rejected
});

console.log('promise:', promise);
console.log('promise2:', promise2);

promise2.then(
  (fulfilled) => {
    console.log('fulfilled:', promise2);
    console.log('fulfilled:', fulfilled);
  },
  (rejected) => {
    console.log('rejected:', promise2);
    console.log('rejected:', rejected);
  },
);

const promise3 = new Promise((resolve, reject) => {
  if (1) {
    resolve('200');
  } else {
    reject('500');
  }
});

const pas = Promise.allSettled([promise, promise3]);

pas
  .finally(() => {
    console.log('finally', pas);
  })
  .then(() => {
    console.log('finally then');
  });

console.log(pas);
console.log(pas.then());
console.log(
  pas.then().then((res) => {
    console.log(res);
  }),
);

const ps = Promise.resolve('www');
console.log(ps); // Promise { 'www' }
console.log(ps.then()); // Promise { <pending> }
ps.then((res) => {
  console.log(res);
});

Promise.resolve().then((res) => {
  console.log(res);
});

console.log('end');
