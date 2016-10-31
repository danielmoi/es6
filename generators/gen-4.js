function* gen4() {
  console.log('1');
  yield 'hello';
}
let a = gen4();
// nothing

console.log(a);
// {}
// calling a generator returns an object

let b = a.next();
// 1

console.log(b);
// { value: 'hello', done: false }

// calling a generator returns an object
// with:
// 1. the value of the (next) yield
// 2. the status of the generator
