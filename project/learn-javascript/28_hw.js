const RevuCategoryList = [
    {
        id: '1',
        name: "'최다'인플루언서수",
        detail: '1.158.061 +'
    },

    {
        id: '2',
        name: "'최다'캠페인진행",
        detail: '942,737 +'
    },

    {
        id: '3',
        name: "'최다'리뷰생성",
        detail: '8,288,434+'
    }
]
console.log("🚀 ~ RevuCategoryList:", RevuCategoryList)

console.log("🚀 ~ RevuCategoryList:", RevuCategoryList[1].detail);

//Q1 
//     const age = 20;
// let message0;

// if (age >= 18) {
//   message = "성인입니다";
// } else {
//   message = "미성년자입니다";
// }

// 여기에 삼항 연산자를 사용하여 다시 작성하세요.

const age = 20 ; 
const message = age >= 20 ? '성인입니다' : '미성년자입니다';

console.log("🚀 ~ message:", message)

//  Q2
const compareNumbers = (a, b) => {
if (a > b) {
return "a is greater";
} else if (b > a) {
return "b is greater";
}
};

console.log(compareNumbers(5, 5));

// 예상 결과값 : a와 b가 동일한 값일 때에 대한 정의가 없으므로 콘솔에 결과값이 노출되지 않음.   

// Q3. 결과값을 예측하고, 그 이유를 설명하세요.

let x;
console.log(typeof x); // 예상 결과값: undefined

x = 5;
console.log(typeof x); // 예상 결과값: number

x = "Hello";
console.log(typeof x); // 예상 결과값: string