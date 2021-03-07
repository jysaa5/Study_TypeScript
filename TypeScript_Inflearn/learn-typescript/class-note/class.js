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
console.log(joo);