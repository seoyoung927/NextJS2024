// 배열
let numArr = [1, 2, 3];
let strArr = ["hello", "ts", "winterlood"];
let boolArr = [true, false, true];
let boolArr2 = [true, false, true];
// 배열에 들어가는 값이 다양한 경우
let multiArr = [1, "hello"];
// 다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5]
];
// 튜플 -> JavaScript에는 없고 TypeScript에서만 특별히 제공되는 타입
// 튜플 : 길이와 타입이 고정된 배열 
let tup1 = [1, 2];
export {};
// tup1 = [1,2,3]; 길이를 넘어서는 배열을 저장할 수 없다.
// tup1 = ["1","2","3"]; Type이 다른 배열을 저장할 수 없다.
