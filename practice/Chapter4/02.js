/**
 *  Chapter 4: Exercise 2
 *   update_shipping_icons() 함수에서 계산을 추출하기
 */

function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    if (item.price + shopping_cart_total >= 20)
      button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

/*----------------------- */

function update_shipping_icons() {
  var buy_buttons = get_buy_buttons_dom();
  for (var i = 0; i < buy_buttons.length; i++) {
    var button = buy_buttons[i];
    var item = button.item;
    if (isFreeShipping(item.price, shopping_cart_total)) {
      button.show_free_shipping_icon();
      return;
    }

    button.hide_free_shipping_icon();
  }
}

// 무료 배송 여부 계산 로직을 분리
function isFreeShipping(item_price, shopping_cart_total) {
  return item_price + shopping_cart_total >= 20;
}
