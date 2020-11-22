/*타입스크립트로 각 변수 타입 설정하기*/
// 일반 변수에 타입 선언
const personName: string = "violet";
const personAge: number = 15;

// 배열 변수에 타입 선언
const TempNumberArray: number[] = [10, 20, 30];
const TempArray: [boolean, number] = [true, 10];

// 타입 주석과 타입 추론
let n: number = 1
let m = 2

// 인터페이스
interface Person{
    name: string
    age?: number
}

let person: Person = { name: "Joo" }

interface Animal{
    name: string
    age?: number
}

let animal: Animal = {name: "PengSoo"}

// 배열 튜플
let numberArray: number[] = [1, 2, 3]
let tuple: [boolean, number, string] = [true, 1, 'Ok']

// 제네릭 타입
class Container<T>{
    constructor(public value: T) {}
}

let numberContainer: Container<number> = new Container<number>(1)
let stringContainer: Container<string> = new Container<string>('Hello world')

// 대수 타입
type NumberOrString = number | string
type AnimalAndPerson = Animal & Person 