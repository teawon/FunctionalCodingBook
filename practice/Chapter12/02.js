/**
 *  Chapter 11: Exercise 5
 *
 *  reduce함수를 사용해 map, filter함수 만들어보기
 */

const numbers = [1, 2, 3, 4, 5];

/*----------------------- */

const myMap = (array, func) => {
  return array.reduce((acc, cur) => {
    const newValue = func(cur);
    acc.push(newValue);
    return acc;
  }, []);
};

const testMap = myMap(numbers, (x) => x * x);

/**
 * 책에서는 push기반의 변이함수를 사용했더라도 지역적으로 일어나기때문에 허용된다고 함
 */

const myFilter = (array, func) => {
  return array.reduce((acc, cur) => {
    const isValid = func(cur);
    if (isValid) acc.push(cur);
    return acc;
  }, []);
};

const testFilter = myFilter(numbers, (x) => x % 2 === 0);
