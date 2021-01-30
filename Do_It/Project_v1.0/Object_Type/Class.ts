/* 클래스 */
class Person1 {
    name?: string
    age?: number
}

let joo1: Person1 = new Person1();
joo1.name = 'Joo';
joo1.age = 27;

console.log(joo1); 

class Person2 {
    constructor(public name: string, public age?: number){}
}

let joo2: Person2 = new Person2('Joo', 27)

class Person3{
    name?: string
    age?: number
    constructor(name: string, age?: number){
        this.name = name;
        this.age = age;
    }
}

let joo3: Person3 = new Person3('Joo', 27)
console.log(joo3)