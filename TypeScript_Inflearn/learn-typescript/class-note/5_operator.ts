// function logMessage(value: string) {
//   console.log(value);
// }

logMessage("hello");
var joo: string | number | boolean;
function logMessage(value: string | number) {
  console.log(value);
  if (typeof value === "number") {
    value.toLocaleString();
  }

  if (typeof value === "string") {
    value.toString();
  }

  throw new TypeError("value must be string or number");
}

logMessage("hello");
logMessage(100);

interface Developer1 {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// 공통된 속성만 사용 가능.
function askSomeone1(someone: Developer1 | Person) {
  //someone.name;
}

var jj: string | number | boolean;
var kk: string & number & boolean;

// 모든 타입 포함
function askSomeone2(someone: Developer1 & Person) {
  someone.name;
  someone.skill;
  someone.age;
}

askSomeone1({ name: "디벨로퍼", skill: "웹 개발" });
askSomeone1({ name: "디벨로퍼", age: 100 });

askSomeone2({ name: "디벨로퍼", skill: "웹 개발", age: 17 });
