function *myGenerator() {
  console.log(1);
  let a = yield 'first yield';
  console.log('a:', a);
  let b = yield 'second yield';
  console.log('b:', b);
  return 'hi';
}

let iterator = myGenerator();
let firstYield = iterator.next(); // { value: 'first yield', done: false }
