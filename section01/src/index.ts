interface User{
    name: string;
    age: number;
}

let user: User = {
    name: 'xx',
    age: 30
}

console.log(user.name);

interface Add{
    (num1:number, num2:number): number,
}

const add: Add = function (x, y) {
    return x + y;
}

console.log(add(10, 20));

interface IsAdult {
    (age: number): boolean;
}

const a: IsAdult = (age) => {
    return age > 10;
}

console.log(a(12));

// implements
interface Car {
    color: string;
    wheels: number;
    start(): void;
}

class Bmw implements Car{
    color;
    wheels = 4;

    constructor(c: string) {
        this.color = c;
    }

    start() {
        console.log('go...');
    }
}

const b = new Bmw('green');
b.start();

// 함수 타입 정의
function hello(name?: string) {
    return `Hello, ${name || "word"}`;
}

const result = hello();
const result2 = hello("Sam");
// const result3 = hello(123); 오류

function add3(...nums:number[]) {
    return nums.reduce((result, num)=> result + num, 0);
}

add3(1, 2, 3); // 6


