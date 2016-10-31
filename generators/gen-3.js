function* gen2() {
  console.log('1');
  yield 'hello';
}
let a = gen2();
// nothing

console.log(a);
// {}
// calling a generator returns an object
