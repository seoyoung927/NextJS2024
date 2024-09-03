// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// 숫자형 열거
enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

const user1 = {
    name: "이정환",
    role: Role.ADMIN, // 관리자
} 

const user2 = {
    name: "홍길동",
    role: Role.USER, // 회원
}

const user3 = {
    name: "아무개",
    role: Role.GUEST, // 게스트
}

// enum에 직접 할당하지 않으면 0부터 1씩 늘어나는 값으로 자동 할당된다.
enum Role2 {
    ADMIN, // 0 할당(자동)
    USER,  // 1 할당(자동)
    GUEST, // 2 할당(자동)
}


// 문자형 열거
enum Language {
    korean = "ko",
    english = "en",
}
  
const user11 = {
    name: "이정환",
    role: Role.ADMIN, // 0
    language: Language.korean,// "ko"
};