/**
 *  Chapter 6: Exercise 6
 *   카이-온-라이트 방식으로 객체에 값을 설정하도록 수정하기
 */

o["price"] = 37;

function objectSet(object, key, value) {}

/**
 *  Chapter 6: Exercise 7
 *  그리고 해당 함수를 사용해 setPrice()를 리펙터링 해보기
 */

function setPrice(item, new_price) {
  var item_copy = Object.assign({}, item);
  item_copy.price = new_price;
  return item_copy;
}

/**
 * Chapter 6: Exercise 8
 * ObjectSet함수를 이용해 제품 개수를 설정하는 setQuantity()함수를 만들어보기
 */

function setQuantity(item, new_quantity) {}

/*----------------------- */

o["price"] = 37;

function objectSet(object, key, value) {
  const objectCopy = { ...object };
  // 책에서는 objectCopy = Object.assign({}, object); 을 사용 (두 방식 모두 얕은비교)
  objectCopy[key] = value;
  return objectCopy;
}

function setPrice(item, new_price) {
  return objectSet(item, "price", new_price);
}

function setQuantity(item, new_quantity) {
  return objectSet(item, "quantity", new_quantity);
}
