/**
 *  Chapter 6: Exercise 5
 *   배열 항복을 카피-온-라이트 방식으로 설정하는 arraySet()함수를 만들어보기
 */

a[15] = 2;

function arraySet(array, idx, value) {}

/*----------------------- */

a[15] = 2;

function arraySet(array, idx, value) {
  const arrayCopy = [...array];
  arrayCopy[idx] = value;
  return arrayCopy;
}
