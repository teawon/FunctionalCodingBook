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
