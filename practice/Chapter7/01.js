/**
 *  Chapter 7: Exercise 1
 *  급여 계산을 위해 외부 라이브러리를 사용하고 있다.
 *
 *   payrollCalc 함수는 무슨 영향을 끼칠지 모르기때문에 방어적 복사를 적용해보자
 */

function payrollCalc(employees) {
  // ...
  return payrollChecks;
}

function payrollCalcSafe(employees) {}

/*----------------------- */

function payrollCalcSafe(employees) {
  const copy = deepCopy(employees);
  const payrollChecks = payrollCalc(copy);
  return deepCopy(payrollChecks);
}

// 참조를 어디서 바꿀 지 모르니, 값을 복사하고 결과값도 한번 더 복사함으로써 안전장치를 확보
