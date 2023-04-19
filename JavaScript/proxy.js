const obj = {};

const op = new Proxy(obj, {
  get() {
    console.log('get');
    return 33;
  },
});

op.a = 'a';

console.log(op);
console.log(obj);
console.log(obj.a);
console.log(op.a);
