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

/* 제네릭 */
function logText4<T>(text: T): T {
  console.log(text);
  return text;
}

const str1 = logText4<string>("abc");
str1.split(""); // 문자열 함수를 사용.

const login = logText4<boolean>(true);

/* 인터페이스에 제네릭을 선언하는 방법 */
interface Dropdown1 {
  value: string;
  selected: boolean;
}

const obj: Dropdown1 = { value: "abc", selected: false };

interface Dropdown2<T> {
  value: T;
  selected: boolean;
}

const obj2: Dropdown2<string> = { value: "abc", selected: false };
const obj3: Dropdown2<number> = { value: 10, selected: false };

/* 제네릭의 타입 제한 1 */
function legTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}
legTextLength<string>(["hi", "abc"]);

/* 제네릭 타입 제한 2 - 정의된 타입 이용하기 */
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength("a");
logTextLength({ length: 10 });

/* 제네릭 타입 제한 3 - keyof */
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// 미리 정의되어있는 인터페이스의 키 값들만 들어갈 수 있게 제한 = keyof
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>("a");
getShoppingItemOption("name");
