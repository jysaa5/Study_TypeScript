// function sum(a, b){
//     return a+b;
// }

// sum (10, '20'); // 결과값: 1020 (숫자 + 문자열 = 문자열)

// @ts-check

/**
 * 
 * @param {number} a 첫 번째 숫자
 * @param {number} b 두 번째 숫자
 */

 function sum(a, b){
     return a+b;
 }

 sum(10, 20);
 // sum(10, '20'); //@ts-check를 사용하여 오류를 잡아냄. 하지만 자동완성은 안됨.