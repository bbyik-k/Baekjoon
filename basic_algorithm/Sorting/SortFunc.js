let arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];

// 오름차순 정렬
function compare(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}
arr.sort(compare);
console.log(arr);

// 오름차순 정렬 함수 간소화
function compare2(a, b) {
  return a - b;
}
arr.sort(compare2);
console.log(arr);

// 오름차순 정렬 함수 간소화
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);

// 오름차순 정렬 함수 간소화
arr.sort((a, b) => a - b);
console.log(arr);

// 내림차순 정렬
arr.sort((a, b) => b - a);
console.log(arr);

//문자열 오름차순 정렬
let stringArr = ['pineapple', 'banana', 'durian', 'apple', 'carrot'];
stringArr.sort();
console.log(stringArr);

//문자열 내림차순 함수
function compareString(a, b) {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
}

stringArr.sort(compareString);
console.log(stringArr);

//대소문자 구분 x 문자열 오름차순 정렬
function compareStringUpper(a, b) {
  let upperCaseA = a.toUpperCase();
  let upperCaseB = b.toUpperCase();
  if (upperCaseA < upperCaseB) return -1;
  else if (upperCaseA > upperCaseB) return 1;
  else return 0;
}
stringArr.sort(compareStringUpper);
console.log(stringArr);

//문자열 정렬 내장 메소드 사용
stringArr = ['pineapple', 'banana', 'durian', 'apple', 'carrot'];

// 객체 오름차순 정렬
let dic = [
  { name: '홍길동', score: 90 },
  { name: '김철수', score: 85 },
  { name: '박영희', score: 97 },
];
function compare(a, b) {
  return b.score - a.score; //내림차순 정렬
}
dic.sort(compare);
console.log(dic);

dic.sort((a, b) => a.score - b.score);
console.log(dic);

// 객체 값 기준 정렬, localeCompare 함수 사용
dic.sort((a, b) => a.name.localeCompare(b.name));
console.log(dic);

let testStringArr = ['홍길동', '김철수', '박영희'];
console.log(testStringArr[0].localeCompare(testStringArr[1]));
