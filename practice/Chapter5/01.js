/**
 *  Chapter 5: Exercise 1
 *   전역 변수 읽는 곳을 인자로 바꾸기
 */

function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price);
  calc_cart_total();
}

function calc_cart_total() {
  shopping_cart_total = calc_total(shopping_cart);
  set_cart_total_dom();
  update_shipping_icons(shopping_cart);
  update_tax_dom();
}

function set_cart_total_dom() {
  // ...
  shopping_cart_total;
  //...
}

function update_shipping_icons(cart) {
  var buy_buttons = get_buy_buttons_dom();
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    var new_cart = add_item(cart, item.name, item.price);
    if (gets_free_shipping(new_cart)) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

function update_tax_dom() {
  set_tax_dom(calc_tax(shopping_cart_total));
}

/*----------------------- */

function add_item_to_cart(name, price) {
  const shopping_cart = add_item(shopping_cart, name, price);
  calc_cart_total(shopping_cart); // 인자로 지역변수 추가
}

function calc_cart_total(cart) {
  const shopping_total = calc_total(cart);
  set_cart_total_dom(shopping_total);
  update_shipping_icons(shopping_total);
  update_tax_dom(shopping_total);
}

function set_cart_total_dom(total) {
  // ...
  total;
  //...
}

function update_shipping_icons(cart) {
  var buy_buttons = get_buy_buttons_dom();
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    var new_cart = add_item(cart, item.name, item.price);
    if (gets_free_shipping(new_cart)) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

function update_tax_dom(total) {
  // 전역 변수를 인자로 받도록
  set_tax_dom(calc_tax(total));
}

// 결국 핵심은 전역변수와 같은 암묵적 입출력을 줄이는 것이 중요
// 이는 테스트 용이성과 코드를 모듈화하기 보다 용이함
