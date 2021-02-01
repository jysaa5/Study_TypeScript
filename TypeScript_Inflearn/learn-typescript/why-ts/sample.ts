function add(a: number, b: number): number{
    return a+b;
}

add(10, 20);
// add(10, '20'); -> 에러를 미리 알려줌.

var result = add(10, 20);
result.toLocaleString();