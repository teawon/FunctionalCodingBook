/**
 *  Chapter 11: Exercise 2
 *
 *  두 함수도 비슷한 로직을 가지고 있다. 이를 리팩토링 해보자. (withObjectCopy 함수를 만들고 적용해볼것)
 */

function objectSet(object, key, value) {
  var copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

function objectDelete(object, key) {
  var copy = Object.assign({}, object);
  delete copy[key];
  return copy;
}

/*----------------------- */

function withObjectCopy(object, modify) {
  var copy = Object.assign({}, object);
  modify(copy);
  return copy;
}

function objectSet(object, key, value) {
  return withObjectCopy(object, (copy) => {
    copy[key] = value;
  });
}

function objectDelete(object, key) {
  return withObjectCopy(object, (copy) => {
    delete copy[key];
  });
}
