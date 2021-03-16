// function fetchItems(): string[] {
//   var items = ["a", "b", "c"];
//   return items;
// }

/* fetchItems(): string 배열 */
// var result = fetchItems();
// console.log(result);

/* 비동기 코드 */
function fetchItems(): Promise<string[]> {
  let items: string[] = ["a", "b", "c"];
  return new Promise(function (resolve, reject) {
    resolve(items);
  });
}
fetchItems();

/* map 함수 */
let heroes = [
  { name: "Tony", age: 30 },
  { name: "Captain", age: 100 },
];

heroes.map(function (hero) {
  return hero.name;
});
