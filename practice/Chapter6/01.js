/**
 *  Chapter 6: Exercise 1
 *   카피-온-라이트 원칙에 따라 코드를 바꾸기
 */

var mailing_list = [];

function add_contact(email) {
  mailing_list.push(email);
}

function submit_form_handler(event) {
  var form = event.target;
  var email = form.elements["email"].value;
  add_contact(email);
}

/*----------------------- */

var mailing_list = [];

function add_contact(emailList, email) {
  // 이 함수는 유틸함수로 "기존 배열에 무언가를 더하는" 역할을 하게 되었다. (재활용)
  return [...emailList, email];
}

function submit_form_handler(event) {
  var form = event.target;
  var email = form.elements["email"].value;
  const updatedEmail = add_contact(mailing_list, email);
  mailing_list = updatedEmail;
}

// 기존과 다르게 전역변수의 배열을 직접 변경하지 않고 순수함수가 되었음
// 불변성 - 데이터 상태에 대한 예측 가능성을 높이고 함수의 재활용성과 조합성이 좋아짐
