// interface Email {
//   value: string;
//   selected: boolean;
// }

// const emails: Email[] = [
//   { value: "naver.com", selected: true },
//   { value: "gmail.com", selected: false },
//   { value: "hanmail.net", selected: false },
// ];

interface DropdownItem<T> {
  value: T;
  selected: boolean;
}

const emails: DropdownItem<string>[] = [
  { value: "naver.com", selected: true },
  { value: "gmail.com", selected: false },
  { value: "hanmail.net", selected: false },
];

// interface ProductNumber {
//   value: number;
//   selected: boolean;
// }

// interface TrueFalse {
//   value: boolean;
//   selected: boolean;
// }

// const numberOfProducts: ProductNumber[] = [
//   { value: 1, selected: true },
//   { value: 2, selected: false },
//   { value: 3, selected: false },
// ];

const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// function createDropdownItem(item: Email | ProductNumber) {
//   const option = document.createElement("option");
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// function createDropdownItem(item: DropdownItem<string> | DropdownItem<number>) {
//   const option = document.createElement("option");
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

function createDropdownItem<T>(item: DropdownItem<T>) {
  const option = document.createElement("option");
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}
// NOTE: 이메일 드롭 다운 아이템 추가
// emails.forEach(function (email) {
//   const item = createDropdownItem(email);
//   const selectTag = document.querySelector("#email-dropdown");
//   selectTag.appendChild(item);
// });

emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector("#email-dropdown");
  selectTag.appendChild(item);
});

// numberOfProducts.forEach(function (product) {
//   const item = createDropdownItem(product);
// });

numberOfProducts.forEach(function (product) {
  const item = createDropdownItem<number>(product);
});
