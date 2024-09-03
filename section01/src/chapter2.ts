// 배열
let numArr:number[] = [1,2,3];
let strArr:string[] = ["hello", "ts", "winterlood"];
let boolArr:boolean[] = [true,false,true];
let boolArr2: Array<boolean> = [true, false, true];

// 배열에 들어가는 값이 다양한 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1,2,3],
    [4,5]
];

// 튜플 -> JavaScript에는 없고 TypeScript에서만 특별히 제공되는 타입
// 튜플 : 길이와 타입이 고정된 배열 
let tup1:[number, number] = [1,2];
// tup1 = [1,2,3]; 길이를 넘어서는 배열을 저장할 수 없다.
// tup1 = ["1","2","3"]; Type이 다른 배열을 저장할 수 없다.

let tup2: [number, string, boolean] = [1,"2",true];
const users: [string, number][] = [
    ["이정환",1],
    ["이아무개",2],
    ["김아무개",3],
    ["이정환",4],
    ["이정환",5],
]