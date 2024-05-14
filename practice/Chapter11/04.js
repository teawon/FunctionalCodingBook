/**
 *  Chapter 11: Exercise 6
 *
 *  "에러가 발생했을 때 에러를 무시하는 함수"를 만드는 함수를 만들어보기
 */

try {
  codeThatMightThrow();
} catch (e) {
  // ignore errors by doing nothing
}

/*----------------------- */

function factoryIgnoreErrorFc(f) {
  return function (params1, params2, parmas3) {
    try {
      return f(params1, params2, parmas3);
    } catch (error) {
      return null;
    }
  };
}

const doSomethingThree = factoryIgnoreErrorFc((a, b, c) => {
  console.log(a, b, c);
});
doSomethingThree(1, 2, 3);

// 이 부분이 조금 햇갈렸는데, "함수를 만드는 함수"를 만드는 것.
// 즉 이 함수로 만들어진 함수는, 매개변수 3개를 받아 실행하는 함수이며, 에러가 발생하면 null을 반환하는 함수이다.
// 이는 자동으로 정형화된 코드를 만들 수 있고, 마치 함수 팩토리 역할을 수행한다.

/**
 *  Chapter 11: Exercise 7
 *
 *  다른 숫자에 어떤 숫자를 더하는 함수를 makeAddre()라는 이름으로 만들어보기
 */

const increment = makeAdder(1);
increment(2); // 3

/*----------------------- */

function makeAdder(source) {
  return function (target) {
    return target + source;
  };
}

// 조금 햇갈리는데, 결과 값을 보면 결국 function(A) 형태로 호출한다. 즉 어떤 함수를 호출했을때, "함수" 자체가 반환되어야 함
