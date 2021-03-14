function logText(text) {
  console.log(text);
  return text;
}

logText(10);
logText("하이");
logText(true);

// 제네릭
function logText1<T>(text: T): T {
  console.log(text);
  return text;
}

// 자연 추론
logText1("하이");

// 타입 선언
logText1<string>("하이");

function logText2(text: string) {
  console.log(text);
  // text.split("").reverse().join(""); -> 문자열만 받기 때문에 가능함.
  return text;
}

// 문자열만 가능
logText2("a");

// 함수를 여러 개 선언
function logNumber(num: number) {
  console.log(num);
  return num;
}

logNumber(10);

// 유니온 타입
function logText3(text: string | number) {
  console.log(text);
  return text;
}

logText3("a");
logText3(10);

// 제네릭
function logText4<T>(text: T): T {
  console.log(text);
  return text;
}

const str1 = logText4<string>("abc");
str1.split(""); // 문자열 함수를 사용.

const login = logText4<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown1 {
  value: string;
  selected: boolean;
}

interface Dropdown2<T> {
  value: T;
  selected: boolean;
}
