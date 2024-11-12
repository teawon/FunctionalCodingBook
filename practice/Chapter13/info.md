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
