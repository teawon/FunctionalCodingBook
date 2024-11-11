/**
 *  Chapter 13: Exercise 1
 *
 *  구매 금액이 최소 100달러를 넘고, 두 번 이상 구매한 고객을 찾으려 한다.
 *  함수형 도구를 체이닝해서 아래의 함수를 구현해보기
 */

function bigSpenders(customers) {}

/*----------------------- */

function bigSpendersMyAns(customers) {
  const over100Dollars = customers.filter((customer) =>
    isSpendingAboveTarget(customer, 100)
  );

  const frequentBuyers = over100Dollars.filter(
    (customer) => frequentBuyers(customer),
    2
  );

  function isSpendingAboveTarget(customer, target) {
    return customer.purchases > target;
  }

  function frequentBuyers(customer, count) {
    return customer.purchases.length >= count;
  }
}
/**
 *  Chapter 13: Exercise 2
 *
 *  모든 부서에서 숫자 배열에 대한 평균값이 필요하다.
 *  평균을 계산하는 함수를 만들어보기
 */

function average(numbers) {}

/*----------------------- */

function average(numbers) {
  const total = numbers.reduce(add, 0);

  const count = numbers.length;

  return total / count;

  function add(a, b) {
    return a + b;
  }
}

/**
 * 1. 
 * 
 * const total = numbers.reduce((acc, cur) => {
    acc += cur;
    }, 0);
 *   // 해당 로직에서 (acc,cur) => {} 부분만 함수로 추출하기
 */

/**
 * 2.
 *   const total = numbers.reduce(add, 0);
 * 
 *   function add(a, b) {
        return a + b;
     }
 *   
 */

// => 결국 특정 계산로직이 복잡할때 이를 별도의 함수로 분리할 수 있다는게 큰 장점인 듯.
// map, filter도 모두 마찬가지로 내부 로직을 함수로 분리하는건 좋은 방법일 수 있을 것 같다.

/**
 * 개인 심화..
 */

const createSpendingChecker = (target) => {
  return (customer) => {
    return customer.totalSpend > target;
  };
};

// 고객의 구매 횟수가 주어진 수 이상인지 확인하는 함수 생성기
const createPurchaseChecker = (minPurchases) => {
  return (customer) => {
    return customer.purchases >= minPurchases;
  };
};

function bigSpendersMyAns(customers, spendTarget, minPurchases) {
  // 매개변수를 활용하여 커스터마이즈된 조건 함수들을 생성
  const isSpendingAboveTarget = createSpendingChecker(spendTarget);
  const hasMadeFrequentPurchases = createPurchaseChecker(minPurchases);

  // 각 조건 함수를 직접 filter에 전달하여 필터링
  const over100Dollars = customers.filter(isSpendingAboveTarget);
  const frequentBuyers = over100Dollars.filter(hasMadeFrequentPurchases);

  return frequentBuyers;
}

// 이런식으로 조건함수를 "생성"하고, filter인자로 넘기는 것도 가능하다.
// filter는 2개의 인자를 받으므로 내부 처리로직을 수행하는 함수를 결국 만들어야함
//  -> 아니면 맨 위에서 한 것처럼 인자를 직접명시하거나.. 혹은 이렇게 동적으로 생성
