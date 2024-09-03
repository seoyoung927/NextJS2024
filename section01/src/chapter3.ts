// object
// 결론적으로 객체를 사용하려면 객체 리터럴 타입을 사용해야 한다.
let user: {
    id?: number, // 있어도 되고, 없어도 되는데 있다면 type이 number여야 한다.
    name: string
} = {
    id:1,
    name: "이정환",
};

// 객체의 type을 object로 표현하면 다음과 같이 점 표기법으로 접근하려고 할 때 문제가 발생한다.
// console.log(user.name); error

// let dog:{
//     name: string,
//     color: string,
// } = {
//     name: "돌돌이",
//     color: "brown"
// }

user = {
    name: "홍길동",
};

let config: {
    readonly apiKey: string; // 읽기 전용 property
} = {
    apiKey: "private API KEY",
}

