const afm = Array.from({ length: 2 }).map((e, i, arr) => {
  console.log(e, i, arr);
  return i;
});

console.log(afm);

const af = Array.from(
  {
    length: 5,
  },
  (e, i) => {
    // only two params
    console.log(e, i);
    return i;
  },
);

console.log(af);

console.log(Array.from({ 0: 'a', length: 1 }));

const arr = [1, 2, 3];
const arrb = Array.from(arr);
arrb[0] = 9;

console.log(arr);
console.log(arrb);
