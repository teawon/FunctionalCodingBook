/**
 *  Chapter 12: Exercise 2
 *
 *  filter함수를 사용해 테스트 그룹 지정하기
 *  주어진 것
 *   - 전채 고객배열인 customer
 *   - 고객 id가 들어있는 customer.id
 *   - id가 3으로 나눴을때 떨어지는 수이면 테스트그룹
 */

var testGroup = "_";

var nonTestGroup = "_";

/*----------------------- */

const isDivided = (value, num) => {
  return value % num === 0;
};

const testGroup = customer.filter((customer) => {
  return isDivided(customer.id, 3);
});

const nonTestGroup = customer.filter((customer) => {
  return !isDivided(customer.id, 3);
});

/**
 *  Chapter 12: Exercise 3
 *
 *  다음 두 함수를 reduce 함수를 사용해 하나로 합치기
 */

// 배열에 있는 모든 수 더하기
function sum(numbers) {}

// 배열에 있는 모든 수 곱하기
function product(numbers) {}

/*----------------------- */

function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

function product(numbers) {
  return numbers.reduce((total, num) => total * num, 1);
}

/**
 *  Chapter 12: Exercise 4
 *
 *  Math를 쓰지않고 가장 큰 수, 작은 수를 찾아 반환하는 함수 만들기 (reduce 사용)
 */

function max(numbers) {}

function min(numbers) {}

/*----------------------- */

function max(numbers) {
  return numbers.reduce((minNum, num) => {
    return minNum > num ? minNum : num;
  }, Number.MIN_VALUE);
}

function min(numbers) {
  return numbers.reduce((minNum, num) => {
    return minNum < num ? minNum : num;
  }, Number.MAX_VALUE);
}

/**
 * Q. 내부에서 화살표 함수를 만드는 방법과, 정답 코드에서 function으로 정의한 방법 두개가 다르다.
 * 어떤 차이점이 있고 뭐가 좋은거??
 *  1. 화살표 함수는 자신의 this가 없어 외부함수의 this를 상속 (다르게 바인딩되는 문제점 X)
 *  2. 간결하고, 단일 표혀식을 사용할 때 return 생략 가능
 *  3. 화삺표 함수를 쓰자. (위의 장점이 뚜렷하니까)
 */

// case1
function Timer() {
  this.seconds = 0;
  setInterval(function increase() {
    this.seconds++; // 여기서의 'this'는 전역 객체(window)를 가리킨다
    console.log(this.seconds);
  }, 1000);
}

var timer = new Timer(); // NaN을 출력하며, this.seconds는 정의되지 않은 상태

// case2
function Timer() {
  this.seconds = 0;
  setInterval(() => {
    this.seconds++; // 여기서의 'this'는 Timer 인스턴스를 정확히 가리킨다
    console.log(this.seconds);
  }, 1000);
}

var timer = new Timer(); // 1, 2, 3, ... 을 순차적으로 출력
