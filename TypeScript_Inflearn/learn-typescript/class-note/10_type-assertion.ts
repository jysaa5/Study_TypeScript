/* 타입 단언(Type assertion) */
var aa;
var bb = 10;
var cc = aa as string;

// DOM API 조작을 할 때 타입 단언(as)를 많이 사용한다.
// <div id="app">hi</div>;
var div1 = document.querySelector("#app");
var div2 = document.querySelector("div") as HTMLDivElement;
// if (div1) {
//   div2.innerText;
// }
div2.innerText;
