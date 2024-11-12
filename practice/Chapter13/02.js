/**
 *  Chapter 13: Exercise 3
 *
 *  다음의 코드를 함수형 도구 체인으로 개선해보기
 */

function shoesAndSocksInventory(products) {
  var inventory = 0;
  for (var p = 0; p < products.length; p++) {
    var product = products[p];
    if (product.type === "shoes" || product.type === "socks") {
      inventory += product.numberInInventory;
    }
  }
  return inventory;
}

/*----------------------- */

function shoesAndSocksInventory(products) {
  const targetProduct = products.filter(
    (product) => product.type === "shoes" || product.type === "socks"
  );
  const targetProductInInventory = targetProduct.map(
    (product) => product.numberInInventory
  );
  const sumOfInventory = targetProductInInventory.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return sumOfInventory;
}
