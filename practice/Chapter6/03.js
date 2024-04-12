/**
 *  Chapter 6: Exercise 3
 *   push 메서드를 카피-온-라이트 버전으로 바꾸기
 */

function push(array, elem) {}

/*----------------------- */

function push(array, elem) {
  return [...array].push(elem);
}

/**
 *  Chapter 6: Exercise 4
 *  위 코드를 사용해 add_contact()함수를 리펙토링하기
 */

function add_contact(mailing_list, email) {
  var list_copy = mailing_list.slice();
  list_copy.push(email);
  return list_copy;
}

/*----------------------- */

function add_contact(mailing_list, email) {
  return push(mailing_list, email);
}
