interface Person11 {
  name: string;
  age: number;
}

// 타입 별칭
type Person2 = {
  name: string;
  age: number;
};

var seho1: Person11 = {
  name: "주연",
  age: 17,
};

var seho2: Person2 = {
  name: "주연",
  age: 17,
};

type MyString = string;
var str: MyString = "hello";

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo) {}
