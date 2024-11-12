/**
 *  Chapter 13: Exercise 4
 *
 *  reduce활용하기 - 명단을 아래와 같이 추출하는 코드 만들기
 *  - 포지션별로 가장 높은 사람을 골라 명단을 완성하는 코드..
 */

var evaluations = [
  { name: "Jane", position: "catcher", score: 25 },
  { name: "John", position: "pitcher", score: 10 },
  { name: "Harry", position: "pitcher", score: 3 },
];

var roster = { pitcher: "John", catcher: "Jane", "first base": "Ellen" };

/*----------------------- */

const higherGroupByPosition = evaluations.reduce((acc, cur) => {
  const { position, name, score } = current;

  if (!acc[position].value || acc[position].value > cur.score) {
    acc[position] = { name, score };
  }
  return acc;
}, {});

const roster = Object.keys(higherGroupByPosition).reduce((acc, position) => {
  acc[position] = higherGroupByPosition[position].name;
  return acc;
}, {});

/**
 *  Chapter 13: Exercise 5
 *
 *  reduce활용하기
 *  - recommendPosition()함수는 직원 이름을 받아 추천 포지션 정보를 반환한다.
 *  - 추천 레코드 목록을 만들어보기
 */

var employeeNames = ["John", "Harry", "Jane"];

var recommendations = [{ name: "John", position: "catcher" }];

/*----------------------- */

const recommendations = employeeNames.map((employName) => {
  return {
    name: employName,
    position: recommendations(employName),
  };
});

/**
 *  Chapter 13: Exercise 6
 *
 *  reduce활용하기
 *  - scorePlayer함수는 직원이름과 포지션을 넘겼을때 숫자로된 점수를 반환한다
 *  - 추천 레코드 목록을 평점 레코드로 만들어보기
 * [{
 *      name : Jane,
 *      position : "cathcer",
 *      score : 25
 *  }, ...]
 */

var recommendations = [
  { name: "Jane", position: "catcher" },
  { name: "John", position: "pitcher" },
];

var evaluations = [];

/*----------------------- */

const evaluations = recommendations.map((recommendation) => {
  const { name, position } = recommendation;
  const score = scorePlayer(name, position); // scorePlayer 함수를 사용하여 점수 계산

  return {
    name: name,
    position: position,
    score: score,
  };
});
