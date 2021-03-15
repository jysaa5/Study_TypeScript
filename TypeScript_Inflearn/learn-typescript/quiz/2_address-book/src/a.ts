// function fetchItems(): string[] {
//   var items = ["a", "b", "c"];
//   return items;
// }

// var result = fetchItems();
// console.log(result);

// 비동기 코드
function fetchItems(): Promise<string[]> {
  let items: string[] = ["a", "b", "c"];
  return new Promise(function (resolve) {
    resolve(items);
  });
}
fetchItems();
