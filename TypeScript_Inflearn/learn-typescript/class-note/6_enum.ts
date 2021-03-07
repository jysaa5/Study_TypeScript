// 숫자형 Enum
enum Shoes1 {
  Nike,
  Adidas,
}

var myShoes = Shoes1.Nike;
console.log(myShoes);

// 문자형 Enum
enum Shoes2 {
  Nike = "나이키",
  Adidas = "아디다스",
}

var myShoes2 = Shoes2.Nike;
console.log(myShoes2); // '나이키'

// 예제
enum Answer {
  Yes = "Y",
  No = "N",
}
function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다.");
  }

  if (answer === Answer.No) {
    console.log("오답압니다.");
  }
}
// askQuestion("yes");
// askQuestion("y");
// askQuestion("Yes");

askQuestion(Answer.Yes);
askQuestion("Yes");
