// ES2015 (ES6)
class Person {
    // 클래스 로직

    // 생성자
    constructor(name, age) {
        console.log('생성 되었습니다.')
        this.name = name;
        this.age = age;
    }
}
var joo = new Person('주연', 17);


// 생성자 함수
function Person(name, age) {
    this.name = name;
    this.age = age;
}

var capt = new Person('주연', 100);

// 클래스와 생성자 함수가 같다. (클래스는 생성자 함수를 사용함.) 자바스크립트는 프로토타입 기반이다.