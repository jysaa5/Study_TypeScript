// 인터페이스
interface Developer {
  name: string;
  skill: string;
}

// interface Person {
//     name: string;
//     skill: string;
// }

class Person {
  name: string;
  skill: string;
}

var developer: Developer;
var person: Person;
developer = new Person();

// 1. interface, interface
// 호환 불가능
// developer = person;
// 호환 가능
// person = developer;

// 2. inteface, class
// class Person {
//   name: string;
// }
// 호환 불가능
// developer = new Person();
