//  JS 문자열 선언
var str1 = 'hello';

// TS 문자열 선언
let str2: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk']
let items: number[] = [1,2,3];

// TS 튜플
// 특정 인덱스의 타입 정의
let address: [string, number] = ['apple', 100]

// TS 객체
let obj: object = {};
let person1: object = {
    name: 'capt',
    age: 100
};

let person2: {name: string, age: number} = {
    name: 'thor',
    age: 1000
}

// TS 진위값
let show = true;