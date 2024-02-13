/**
 *  Chapter 4: Exercise 1
 *   update_tax_dom() 함수에서 세금을 계산하는 부분을 추출하고 분리해보기
 */

function update_tax_dom() {
  set_tax_dom(shooping_cart_total * 0.1);
}
// 이 코드는 DOM과 묶여있어 재사용성이 떨어진다.

/*----------------------- */

function update_tax_dom() {
  set_tax_dom(calculate_tax(shooping_cart_total));
}

function calculate_tax(totalPrice) {
  const taxRate = 0.1;
  return totalPrice * taxRate;
}

// 위의 코드는 "세금 계산" 부분을 순수함수로 분리하여 재사용성을 높일 수 있다.
// Q. 상수는 전역변수처럼 사용해도 되는건가?? 혹은 코드 내에 변수로 선언?
