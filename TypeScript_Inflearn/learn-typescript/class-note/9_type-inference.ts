/* 타입 추론 기본 1 */
var a = 10;

var b = "abc";

// b의 기본값을 10으로 정함. b의 타입 = number
function getC(b = 10) {
  var d = "hi";
  return b + d;
}

/* 타입 추론 기본 2 */
interface Dropdown<T> {
  value: T;
  title: string;
}

var shoppingItem: Dropdown<string> = {
  value: "abc",
  title: "hello",
};

/* 타입 추론 기본 3 */
interface Dropdown1<T> {
  value: T;
  title: string;
}

interface DetailedDropdown<K> extends Dropdown1<K> {
  description: string;
  tag: K;
}

var detailedItem: DetailedDropdown<string> = {
  title: "abc",
  description: "ab",
  value: "vv",
  tag: "tt",
};

/* Best Common Type */
var arr1 = [1, 2, 3];

var arr2 = [1, 2, true];

var arr3 = [1, 2, true, true, "a"];
