// console.log("hellow world");

const a = 1; // 숫자 or number
const name = 'minpark'; // 문자열 or string
const isRaining = true; // boolean(true or false)

// const empty = null; // null
// let message; // 변수 선언

// console.log('null 타입체크', empty === null); // null의 타입체크법

// console.log("message", message) // undefined

// console.log("empty type", typeof empty)
// console.log("a", a)
// console.log("a type", typeof a)

//함수

// 매개 변수가 있는 함수 정의
// function welcome(username) {
//     // 실행문
//     console.log("welcome", username);
// }

//인자가 있는 함수 호출
// welcome('박성민'); // 함수를 실행한다, 호출한다

// const inputwelcome = () => {
//     //함수 실행문
//     const name = prompt('당신의 이름은 무엇입니까')
//     console. log("name", name)
// };

// inputwelcome();


// //함수 정의
// const double = (num) => {
//     //실행문
//     return num * 2;
// };

// //함수 호출
// console.log("double", double(2));

//함수 정의 
// const multifly = (num, step) => {

//     return num * step;
// };
// const multiflyresult = multifly(5, 10)
// console.log("multiflyresult:", multiflyresult)

// 개인 실습
// const discount = 0.7 ;

// const account = () => {
//     const inputprice = prompt('제품의 가격은 얼마인가요?') ;

// return inputprice * discount ;
// }
// const discountResult = account()
// console.log("할인된 금액은",discountResult + "입니다.")

// 복습
// const discount = 0.7

// const account = () => {
//     const inputprice = Number(prompt('구매하시려는 상품의 가격이 얼마인가요?'));
//     return inputprice * discount ; 
// }

// const discountResult = account() ;
// console.log("할인된 금액은", discountResult + "입니다.") ;


//8/27 과제

//문제 1. 
// function add(a, b) {
// 	return a + b;}

// 여기에 화살표 함수로 다시 작성하세요.
// const add = (a, b) => {
//     return a + b;
// };

// console.log(add(5, 3)); // 예상 결과: 8

// //문제 2.
// // 여기에 두 개의 parameter를 가진 화살표 함수를 작성하세요.
// const minus = (a, b) => {
//     return a - b;
// }

// // 함수 테스트
// console.log(minus(60, 20));// 예상 결과: 40


// //문제 3. 
// const introduce = (name, age) => {
//     return '안녕하세요, ' + name + '님. 당신의 나이는 ' + age + '세입니다.';
// };

//   // 여기에 함수를 호출하는 코드를 작성하세요.// 당신의 이름과 나이를 argument로 사용하세요.
//   const introduceresult = introduce ('김철수', 25) 
//   console.log( introduceresult );

//   // 예시 결과: "안녕하세요, 김철수님. 당신의 나이는 25세입니다."

// //조건문
// const score = 60; 

// // if (score >= 60) {
// //     //60점 이상인 경우
// //     console.log("합격");
// //     else {
// //         console.log('불합격');
// //     }
//     score >= 60 ? console.log('합격') : console.log('불합격');

// console.log("next!!!")

// // const score = 59;
// // /**
// //  * 1. 90점 이상이면 A 등급
// //  * 2. 80점 이상이면 B 등급
// //  * 3. 70점 이상이면 C 등급
// //  * 4. 70점 미만이면 D 등급
// //  * */

// if(score >= 90){
//     console.log('A등급');
// } else if (score >=80) {
//     console.log('B등급')
// } else if (score >=70) {
//     console.log('C등급')
// } else {
//     console.log('D등급')
// }

// const score = 70;

// if(score >= 90){
//     console.log('A등급')
// } else if(score >= 80){
//     console.log('B등급')
// } else if(score >=70){
//     console.log('C등급')
// } else {
//     console.log('D등급')
// }


// if (score >= 90) {
//     console.log("A 등급")
// } else if(){

// }
// else {
//     //60점 이상이 아닌 경우
//     console.log('불합격');
// }

// //** 
// 1. 마트에 아보카도가 있는지 체크(조건식)
// 2. 아보카도가 있으면(true) 우유 6개사기
// 3. 아보카도가 없으면(false) 우유 1개사기

// const mart = ['🥑', '🥛', '🍔']
// const isAvocado = mart.some((item) => item === '🥛');
// console.log('~isAvocado:', isAvocado);

// if(isAvocado === true) {
//     //아보카도가 있는 경우
//     console.log('🥛🥛🥛🥛🥛🥛')
// }
// //아보카도가 없는 경우
// else{
//     console.log('🥛')
// }
// //삼항 연산자로 바꾸기
// isAvocado ? console.log('🥛🥛🥛🥛🥛🥛') : console.log('🥛')
// console.log(isAvocado ? '🥛🥛🥛🥛🥛🥛' : '🥛');




// // 비교연산자는 boolean 데이터타입 반환

// if (1) {
//     console.log('false')
// } else{
//     console.log('true')
// }

// const input = 
// input ? console.log('true') : console.log('false');

// const bootcampStudents = ['김원명', '박성민', '김현호', '주영신', '강지영', '김영혜',
//     '조재원', '김태욱', '정세헌', '장현재', '김완재', '박준혁', '김은호'];
//     const studentsLen = bootcampStudents.length;
//     console.log("🚀 ~ bootcampStudents:", bootcampStudents);
//     console.log('내이름', bootcampStudents[1]);
    
//     const mbti = 'infp'
//     const user = {
//         name: '박성민', 
//         age: 31,
//         ismale: true,
//         mbti: mbti
//         fn: () => {
//             console.log("fn")
//         },
//     };
//    /    //객체타입
//     console.log("🚀 ~ user:", user);
//     console.log("🚀 ~ 유저 mbti:", user.mbti);

// //     // user.name
// console.dir
    

//     const CategoryList = [
//       // 배열 타입
//         { 
//             id: '1',
//             name: '선물관',
//             subCategoriList: [
//                 {
//                 id: '1-1',
//                 name: '선착순쿠폰'
//                 },
//                 {
//                     id: '1-2',
//                     name: '선물가전'
//                 },
//                 {
//                     id: '1-3',
//                     name: '인기디지털'
//                 },
//                 {
//                     id: '1-4',
//                     name: '렌탈선물'
//                 }
//             ]
//         },
        
//         {
//             id: '2',
//             name: '식품/생활',
//             subCategoriList: [
//                 {
//                 id: '2-1',
//                 name: '선착순쿠폰22'
//                 },
//                 {
//                     id: '2-2',
//                     name: '선물가전'
//                 },
//                 {
//                     id: '2-3',
//                     name: '인기디지털'
//                 },
//                 {
//                     id: '2-4',
//                     name: '렌탈선물'
//                 }
//             ]
//         },
//         {
//             id: '3',
//             name: '효도가전',
//             subCategoriList: [
//                 {
//                 id: '3-1',
//                 name: '선착순쿠폰'
//                 },
//                 {
//                     id: '3-2',
//                     name: '선물가전'
//                 },
//                 {
//                     id: '3-3',
//                     name: '인기디지털'
//                 },
//                 {
//                     id: '3-4',
//                     name: '렌탈선물'
//                 }
//             ]
//         },
//         {
//             id: '4',
//             name: '럭셔리',
//             subCategoriList: [
//                 {
//                 id: '4-1',
//                 name: '선착순쿠폰'
//                 },
//                 {
//                     id: '4-2',
//                     name: '선물가전'
//                 },
//                 {
//                     id: '4-3',
//                     name: '인기디지털'
//                 },
//                 {
//                     id: '4-4',
//                     name: '렌탈선물'
//                 }
//             ]
//         }
    
//     ]
//     console.log("🚀 ~ CategoryList:", CategoryList);

//     console.log('선물관을 뽑아오기 위함', CategoryList[1].subCategoriList[0].name);

    // const RevuCategoryList = [
    //     {
    //         id: '1',
    //         name: "'최다'인플루언서수",
    //         detail: '1.158.061 +'
    //     },

    //     {
    //         id: '2',
    //         name: "'최다'캠페인진행",
    //         detail: '942,737 +'
    //     },

    //     {
    //         id: '3',
    //         name: "'최다'리뷰생성",
    //         detail: '8,288,434+'
    //     }
    // ]
    // console.log("🚀 ~ RevuCategoryList:", RevuCategoryList)
    
    // console.log("🚀 ~ RevuCategoryList:", RevuCategoryList[1].detail);
    
//     //Q1 
//     const age = 20;
// let message0;

// if (age >= 18) {
//   message = "성인입니다";
// } else {
//   message = "미성년자입니다";
// }

// 여기에 삼항 연산자를 사용하여 다시 작성하세요.

    // const age = 20 ; 
    // const message = age >= 20 ? '성인입니다' : '미성년자입니다';

    // console.log("🚀 ~ message:", message)

    
// // // const compareNumbers = (a, b) => {
// // //   if (a > b) {
// // //     return "a is greater";
// // //   } else if (b > a) {
// // //     return "b is greater";
// // //   }
// // // };

// // // console.log(compareNumbers(5, 5));

// // // // 예상 결과값 : a와 b가 동일한 값일 때에 대한 정의가 없으므로 콘솔에 결과값이 노출되지 않음.   

// // // // Q3. 결과값을 예측하고, 그 이유를 설명하세요.

// // // let x;
// // // console.log(typeof x); // 예상 결과값: undefined

// // // x = 5;
// // // console.log(typeof x); // 예상 결과값: number

// // // x = "Hello";
// // // console.log(typeof x); // 예상 결과값: string


// // // const bootcampStudents = ['김원명', '박성민', '김현호', '주영신', '강지영', '김영혜',
// // //         '조재원', '김태욱', '정세헌', '장현재', '김완재', '박준혁', '김은호'];


// // // 반복문
// // const max = 100;

// // for (let i = 0; i < bootcampStudents.length; i++)
// // { 
// //         if (bootcampStudents[i].includes('김')) {
// //             console.log("학생이름" , i, ":",
// //             bootcampStudents[i], "씨");}
// // // 학생 이름 7 : 김태욱 씨
// //     console.log(`학생 이름${i}:${bootcampStudents[i]}씨`)
// }
// bootcampStudents.forEach((value, index) => {
//     console.log("🚀 ~ value:", value);
// });


// const add = (a,b) => {
//     return a + b;
// };
// console.log("🚀 ~ add ~ add:", add (1,2));

// // bootcampStudents.map()

// const studentNameList = bootcampStudents.map((student) => `${student}🔥`);

// console.log("🚀 ~ studentNameList:", studentNameList);

const fireStudents = [
    {
        id: 1,
        name: 'mark',
        age: 35,
        mbti: 'ENFP',
    },
    {
        id: 2,
        name: 'june',
        age: 29,
        mbti: 'ESFP',
    },
    {
        id: 3,
        name: 'ho',
        age: 34,
        mbti: 'ESFP',
    },
];

fireStudents.map((student) => fireStudents.name.toUpperCase
);
console.log("🚀 ~ toUpperCase()):", 
    fireStudents.map((student) => fireStudents.name.toUpperCase()));

    const twentyStudents = fireStudents.filter((student) => student.age <= 29);
    const esfpStudents = fireStudents.filter((student)=>student.mbti === 'ESFP');
    const ttStudent = fireStudents.find((student) => student.age >= 20);
    
    console.log("🚀 ~ twentyStudents:", twentyStudents);
    console.log("🚀 ~ ttStudent:", ttStudent);

   const issomeStudent = fireStudents.some((student) => student.name === "Mark");
   const isEveryStudent = fireStudents.every((student) => student.age >= 20);

   console.log("🚀 ~ issomeStudents:", issomeStudents)
   
   const counterEl = document.querySelector('.counter');
   const increaseButtonEl = document.
   querySelector('.increase-button');
   const decreaseButtonEl = document.
   querySelector('.decrease-button');

   
   console.log("🚀 ~ counterEl:", counterEl);

   const increase = () => {
    
   }
   


