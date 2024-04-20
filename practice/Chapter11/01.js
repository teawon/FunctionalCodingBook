/**
 *  Chapter 11: Exercise 1
 *
 *  withArrayCopy()함수를 사용해 push(), drop_last(), drop_first() 함수를 리팩토링 해보기
 */

function arraySet(array, idx, value) {
  var copy = array.slice();
  copy[idx] = value;
  return copy;
}

function push(array, elem) {
  var copy = array.slice();
  copy.push(elem);
  return copy;
}

function drop_last(array) {
  var array_copy = array.slice();
  array_copy.pop();
  return array_copy;
}

function drop_first(array) {
  var array_copy = array.slice();
  array_copy.shift();
  return array_copy;
}

function withArrayCopy(array, modify) {
  var copy = array.slice();
  modify(copy);
  return copy;
}

/*----------------------- */

function arraySet(array, idx, value) {
  return withArrayCopy(array, (copy) => {
    copy[idx] = value;
  });
}

function push(array, elem) {
  return withArrayCopy(array, (copy) => {
    copy.push(elem);
  });
}

function drop_last(array) {
  return withArrayCopy(array, (copy) => {
    copy.pop();
  });
}

function drop_first(array) {
  return withArrayCopy(array, (copy) => {
    copy.shift();
  });
}

/**
 * 결국 "배열을 복사"하고, 수정 작업을 거쳐 "복사본을 반환"하는 로직은 모두 동일하다.
 * 따라서 해당 부분을 콜백으로 넘겨(일급 함수) 처리하도록 리팩토링
 * 
 * 
 * -> 1. 만약 복사연산이 여러 개 일때 withArrayCopy를 통해 한번의 복사로 처리가 가능하다
 * function manyThings(array) {
  return withArrayCopy(array, (copy) => {
    copy.shift();
     copy.shift();
      copy.shift();
       copy.shift();
         { ... } 
  });
  -
 */
