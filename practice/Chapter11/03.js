/**
 *  Chapter 11: Exercise 3
 *
 *  tryCatch 함수를 만들어 서로 다른 콜백을 받을 수 있도록 구현해보기
 */

tryCatch(sendEmail, logToSnapErrors);

try {
  sendEmail();
} catch (error) {
  logToSnapErrors(error);
}

/*----------------------- */

function tryFacth(callback, errorFc) {
  try {
    return callback();
  } catch (error) {
    return errorFc(error);
  }
}

/**
 *  Chapter 11: Exercise 4
 *
 *  when 함수를 만들어 조건에 따라 콜백을 실행할 수 있도록 구현해보기
 */

if (array.length === 0) {
  console.log("Array is empty");
}

if (hasItem(cart, "shoes")) {
  return setPriceByName(cart, "shoes", 0);
}

when(array.length === 0, function () {
  console.log("Array is empty");
});

when(hasItem(cart, "shoes"), function () {
  return setPriceByName(cart, "shoes", 0);
});

/*----------------------- */

function when(condition, callback) {
  if (condition) {
    return callback();
  }
}

/**
 *  Chapter 11: Exercise 5
 *
 *  when 함수를 IF 함수로 변경하고, else 구문 추가해보기
 */

IF(
  array.length === 0,
  function () {
    console.log("Array is empty");
  },
  function () {
    console.log("Array has something in it.");
  }
);

IF(
  hasItem(cart, "shoes"),
  function () {
    return setPriceByName(cart, "shoes", 0);
  },
  function () {
    return cart; // unchanged
  }
);

function If(condition, callback, elseCallBack) {
  if (condition) {
    return callback();
  } else {
    return elseCallBack();
  }
}
