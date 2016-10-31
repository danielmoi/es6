function* myGenerator() {
  console.log('1');
  yield 'return value of yield #1';
  console.log('2');
  let b = yield 'return value of yield #2';
  console.log('3');
  console.log(b);
  yield 'return value of yield #3';
  return 'and fini';
}

let myIterator;
// nothing
// myIterator() >> error

myIterator = myGenerator();
// nothing logged

let a = myIterator.next();
// 1

console.log(a);
// { value: return value of yield #1', done: false }
// we can't call 'a', like a()
// `a` is just a function

/***********/
myIterator.next();
myIterator.next();
