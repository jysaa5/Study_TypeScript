/* 타입 추론 (Type Inference) */
// 타입스크립트: 자바스크립트와 호환성을 위해 타입 주석 부분을 생략할 수 있다.
// 타입스크립트 컴파일러: 대입 연산자 = 오른쪽 값에 따라 변수의 타입을 지정한다.
// 변수 선언문에 타입 주석을 명시하지 않았지만, 컴파일러가 초깃값에 따라 타입을 추론하므로 각 변수는 초기값에 해당하는 타입으로 지정된다.
// 따라서 이후에 각 변수에는 해당 타입의 값만 저장할 수 있다.

let n = 1;
let b = true;
let s = "JooYeon Kim";
let o = {};
