function* gen5() {
  console.log('1');
  yield 'hello';
  console.log('2');
  return 'finished'
}

let a = gen5();
// nothing

console.log(a);
// `a` is an OBJECT
// {}
// calling a generator returns an object

// a()
// ERROR

let b = a.next();
// 1

console.log(b);
// `b` is an OBJECT
// { value: 'hello', done: false }

// calling a generator returns an object
// with:
// 1. the value of the (next) yield
// 2. the status of the generator

let c = a.next()
// 2

console.log(c);
// { value: 'finished', done: true }
// c is an OBJECT

// 1. the value of the (next) yield? there isn't, so it takes the value of the `return`
// 2. status of generator `done: true`


let z = gen5();
// let's start again
// with the SAME GENERATOR
