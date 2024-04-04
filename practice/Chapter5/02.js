/**
 *  Chapter 5: Exercise 2 (104p)
 *   아래의 함수는 많은 역할을 수행하고 있다. 이 함수를 쪼개어 역할을 분리하라
 *
 *   1. 모든 버튼을 가져오기
 *   2. 버튼 가지고 반복
 *   3. 버튼에 관련된 아이템 가져오기
 *   4. 새로운 장바구니 만들기
 *   5. 무료 배송 여부 확인
 *   6. 무료 배송 아이콘 보이기/숨기기
 *
 *
 */

function update_shipping_icons(cart) {
  var buy_buttons = get_buy_buttons_dom();
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    var new_cart = add_item(cart, item);
    if (gets_free_shipping(new_cart)) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

/*1차 수정----------------------- */

function update_shipping_icons(cart) {
  var buy_buttons = get_buy_buttons_dom(); // 버튼 가져오기
  for (var i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i];
    const item = getItem(button);
    const new_cart = add_item(cart, item);
    renderButton(button, gets_free_shipping(new_cart));
  }
}

const getItem = (button) => {
  return button.item;
};

const renderButton = (button, isShown) => {
  if (isShown) {
    button.show_free_shipping_icon();
    return;
  }

  button.hide_free_shipping_icon();
};

/*2차 수정----------------------- */

function update_shipping_icons(cart) {
  var buy_buttons = get_buy_buttons_dom(); // 버튼 가져오기
  for (var i = 0; i < buy_buttons.length; i++) {
    const button = buy_buttons[i];
    const item = getItem(button);
    const isFree = checkFreeShipping(cart, item);
    renderButton(button, isFree); // gets_free_shipping(new_cart)가 의미하는 내용을 변수로 묶자
  }
}

const getItem = (button) => {
  return button.item;
};

const renderButton = (button, isShown) => {
  if (isShown) {
    button.show_free_shipping_icon();
    return;
  }

  button.hide_free_shipping_icon();
};

const checkFreeShipping = (cart, item) => {
  const new_cart = add_item(cart, item);
  return gets_free_shipping(new_cart);
};

// update_shipping_icons이라는 함수를 봤을때 의미하는 내용이 명확하게 분리하는게 좋았다.
// renderButton(button, gets_free_shipping(new_cart)) -> renderButton(button, isFree)로 변경 (이해가 안갔기때문)
// 아이템을 가져오고, 새 카트에 추가하는건 결국 무료배송 여부를 확인하는데 필요한 과정 -> 하나의 함수로 로직을 분리
