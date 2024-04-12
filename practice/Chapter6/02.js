/**
 *  Chapter 6: Exercise 2
 *   pop 메서드를 카피-온-라이트 버전으로 바꿔보기
 */

var a = [1, 2, 3, 4];
var b = a.pop();
console.log(b); // prints 4
console.log(a); // prints [1, 2, 3]

/*----------------------- */

// 0. 내가 생각했던 그냥 답
var a = [1, 2, 3, 4];
var b = [...a].pop();
console.log(b); // prints 4
console.log(a); // prints [1,2,4,5]

// 1. 읽기 함수와 쓰기 함수로 분리하기

const getLastElement = (array) => {
  return array[array.length - 1];
};

const deleteLastElement = (array) => {
  array.pop();
};

// 2. 값 두개를 리턴하는 함수로 만들기

const pop = (array) => {
  const array_copy = [...array];
  const firstElement = array_copy.pop();

  return {
    first: firstElement,
    array: array_copy,
  };
};

// 결국 의도한 부분은 pop, slice와 같이 원본배열에 영향을 미치는 메서드를 사용할때
// 쓰기와, 읽기 함수를 분리해 부수효과를 의식하고 사용하자
