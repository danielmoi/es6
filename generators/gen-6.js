function* myGenerator() {
  console.log('start');
  let midway1 = yield '1';
  console.log('after midway1');
  console.log('midway1:', midway1);
  return 'finished';
}

let myIterator = myGenerator();
// nothing

let a = myIterator.next();
// `start`

console.log('a:', a);
// { value: '1', done: false }

let b = myIterator.next();

// after midway1
// midway1: undefined

console.log('b:', b);
// { value: 'finished', done: true }

let c = myIterator.next();
// nothing

console.log('c:', c);
// { value: undefined, done: true }
