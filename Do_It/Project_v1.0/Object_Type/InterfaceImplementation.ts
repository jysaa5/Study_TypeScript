/* 인터페이스 구현 */
interface IPerson4{
    name?: string
    age?: number
}

class Person4 implements IPerson4{
constructor(public name: string, public age?: number){}
}

let joo4: IPerson4 = new Person4('Joo', 27)
console.log(joo4)