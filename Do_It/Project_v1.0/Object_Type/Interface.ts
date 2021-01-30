interface IPerson1 {
    name: string
    age: number
}

/* 선택 속성 구문 (Optional property) */
interface IPerson2 {
    name: string // 필수 속성
    age: number // 필수 속성
    etc?: boolean  // 선택 속성
}

let good1: IPerson2 = {name: 'Jack', age: 32}
let good2: IPerson2 = {name: 'Jack', age: 32, etc: true }

/* 익명 인터페이스 (Anonymous interface) */
let ai: {
    name: string
    age: number
    etc?: boolean
} = {name: 'Jack', age: 32}

/* 함수에 사용된 익명 인터페이스 */
function printMe(me: {name: string, age: number, etc?: boolean}){
    console.log(me.etc? `${me.name} ${me.age} ${me.etc}`: `${me.name} ${me.age}`)
}

printMe(ai)