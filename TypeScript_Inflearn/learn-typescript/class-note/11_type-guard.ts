interface Developer1 {
  name: string;
  skill: string;
}

interface Person1 {
  name: string;
  age: number;
}

// 유니온 타입: 공통된 속성만 접근 가능
function introduce(): Developer1 | Person1 {
  return { name: "Joo", age: 17, skill: "Iron Making" };
}

var tony = introduce();
console.log(tony.name);

// 타입 단언 사용
if ((tony as Developer1).skill) {
  var skill = (tony as Developer1).skill;
  console.log(skill);
} else if ((tony as Person1).age) {
  var age = (tony as Person1).age;
  console.log(age);
}

// 타입 가드 정의
function isDeveloper(target: Developer1 | Person1): target is Developer1 {
  return (target as Developer1).skill !== undefined;
}

if (isDeveloper(tony)) {
  console.log(tony.skill);
} else {
  console.log(tony.age);
}
