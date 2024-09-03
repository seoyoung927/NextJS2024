// type 주석 또는 type annotation

// 기본적인 5개의 원시 type: number, string, boolean, null, undefined
// number 
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let numb7: number = NaN;

// num1.toUpperCase(); error
num1.toFixed();

// string
let str1: string = "hello";
let str2: string = 'hello';
let str3: string =  `hello`;
let str4: string = `hello ${num1}`;

str1.toUpperCase();

// boolean
let bool1: boolean = true;
let bool2: boolean = false;

// null
let null1: null = null;

// undefined
let unde1: undefined = undefined;

// 리터럴 타입
// 리터럴 -> 값이라는 뜻
let numA: 10 = 10; // 타입으로 지정한 값 외에는 다른 값을 지정할 수 없다.
let strA: "hello" = "hello";
// let boolA: true = false; error


