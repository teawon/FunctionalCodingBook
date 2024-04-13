/**
 *  Chapter 6: Exercise 9
 *   객체의 키로 키/값 쌍을 지우는 delete 연산을 카피-온-라이트 버전으로 만들어보세요
 */

var a = { x: 1 };
delete a["x"];

function objectDelete(object, key) {}

/*----------------------- */

var a = { x: 1 };
delete a["x"];

function objectDelete(object, key) {
  const objectCopy = { ...object };
  delete objectCopy[key];
  return objectCopy;
}
