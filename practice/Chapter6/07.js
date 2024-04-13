/**
 *  Chapter 6: Exercise 10
 *  중첩된 동작을 카피-온-라이트 버전으로 만들기
 */

var a = { x: 1 };
delete a["x"];

function setQuantityByName(cart, name, quantity) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].name === name) cart[i].quantity = quantity;
  }
}

/*----------------------- */

function setQuantityByName(cart, name, quantity) {
  const copyCart = [...cart];
  for (var i = 0; i < copyCart.length; i++) {
    if (copyCart[i].name === name) copyCart[i].quantity = { ...quantity };
    // quantity는 깊이 1을 가지는 객체임
  }

  return copyCart;
}
