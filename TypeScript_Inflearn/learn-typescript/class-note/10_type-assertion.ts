/* 타입 단언(Type assertion) */
var aa;
var bb = 10;
var cc = aa as string;

// DOM API: document (전역 변수) 접근자에서 제공하는 속성, body, API등을 말한다. 웹 페이지의 태그 정보를 접근하고 조작할 수 있게 한다.
// DOM API 조작을 할 때 타입 단언(as)를 많이 사용한다.
// <div id="app">hi</div>;
// querySelector: html 태그가 위와 같이 있을 때, div로 접근하거나 #app으로 접근을 할 수 있다.
var div1 = document.querySelector("#app");

// 타입 단언을 함으로써 div2를 바로 접근 할 수 있다.
var div2 = document.querySelector("div") as HTMLDivElement;

// 특정 시점에 div1, div2 가 있는지 확인하고 내부를 접근해야 한다.
// if (div1) {
//   div2.innerText;
// }
div2.innerText;
