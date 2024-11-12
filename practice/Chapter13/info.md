- filter와 map은 호출될 떄 마다 새로운 배열이 생겨 비효율적이다?
  - 가비지 컬랙터에 의해 대부분 문제가 되지 않는다
  - 스트림 결합(최적화) 작업을 통해 중간 과정을 줄일 수는 있지만..
  - **대부분 여러 단계를 사용하는 것이 더 읽기 쉽고 명확하다**

```javascript
const name = arr.map(getName);
const nameLength = name.map(stringLength);

// =>

const nameLength = arr.map((item) => stringLength(getName(item)));
```

- 자주 사용되는 함수형 도구

```javascript
function plunk(array,field){
    return map(array, function(obj) => {
        return obj[field];
    })
}

const price = pluck(product,'price')


//---- ts

const pluck =
  <T, K extends keyof T>(key: K) =>
  (obj: T): T[K] =>
    obj[key];

const dataIds = dataArray.map(pluck("address"));
```

```javascript
// groupBy - ECMAScript2024에 추가됨~~

const stationary = [
  { name: "Pencil", qty: 100 },
  { name: "Pen", qty: 50 },
  { name: "Rubber", qty: 300 },
  { name: "Notebook", qty: 150 },
  { name: "Scale", qty: 0 },
  { name: "Color Pencil", qty: 0 },
];
function callbackFun({ qty }) {
  return qty > 0 ? "available" : "notAvailable";
}
const result = Object.groupBy(stationary, callbackFun);
console.log(result);

//output
/*
{
  available: [
    { name: 'Pencil', qty: 100 },
    { name: 'Pen', qty: 50 },
    { name: 'Rubber', qty: 300 },
    { name: 'Notebook', qty: 150 }
  ],
  notAvailable: [
    { name: 'Scale', qty: 0 },
    { name: 'Color Pencil', qty: 0 }
  ]
}
*/
```

// 개인적 메모

- 객체 값을 순회할때는 구조 분해 할당을 통해 값을 꺼내고 처리하면 더 깔끔한듯

```javascript
var evaluations = recommendations.map((recommendation) => {
  const { name, position } = recommendation;
  const score = scorePlayer(name, position); // scorePlayer 함수를 사용하여 점수 계산

  return {
    name: name,
    position: position,
    score: score,
  };
});
```
