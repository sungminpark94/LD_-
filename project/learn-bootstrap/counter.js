// count 기능 만들기 

const counterEl = document.querySelector(".counter")
const increaseButtonEl = document.querySelector(".increase-button")
const decreaseButtonEl = document.querySelector(".decrease-button")

console.log("🚀 ~ counterEl:", counterEl)


    let count = 0

    const updateDisplay = () => {
        counterEl.innerText = count;
    }


const increase = () => {
    count = count + 1;
    if (count > 10) {
        count = 10;
      }
    updateDisplay();
    
    console.log("🚀 ~ increase ~ increase:", increase)
}


const decrease = () => {
    count -= 1;
    updateDisplay();
    if (count < 1) {
        count = 1;
      
    console.log("🚀 ~ decrease ~ decrease:", decrease)
};


increaseButtonEl.addEventListener('click', increase);
decreaseButtonEl.addEventListener('click', decrease);
}

//Q1. 다음 코드에서 각 숫자에 1을 더한 새로운 배열을 만들어 주세요 (map)
const numbers = [1, 2, 3, 4, 5];

// 여기에 코드를 작성하세요.
const incrementedNumbers = numbers.map(number => number+1)

console.log(incrementedNumbers); // 예상 결과: [2, 3, 4, 5, 6]


//Q2. 다음 코드에서 짝수만 필터링된 새로운 배열을 만들어 주세요 (filter)
const numbers2 = [1, 2, 3, 4, 5, 6];

// 여기에 코드를 작성하세요.
const evenNumbers = numbers2.filter(number => number % 2===0);
// const evenNumbers = numbers2.filter(number => number % 2===0);
// const evenNumbers = numbers2.filter(number => number % 2===0);

console.log(evenNumbers); // 예상 결과: [2, 4, 6]


//Q3. 다음 코드에서 각 문제를 풀어보세요. (`find`)

// 1. 전공이 "Physics"인 학생의 정보를 찾으세요.
// 2. 이름이 "David"인 학생의 정보를 찾으세요.

// 학생들의 정보가 담긴 배열
const students = [
    { name: "Alice", age: 22, major: "Computer Science" },
    { name: "Bob", age: 21, major: "Mathematics" },
    { name: "Charlie", age: 23, major: "Physics" },
    { name: "David", age: 20, major: "Chemistry" },
    { name: "Eva", age: 22, major: "Biology" }
  ];
  
  // 1. 전공이 "Physics"인 학생을 찾으세요.

  // 여기에 코드를 작성하세요.
  const physicsStudent = students.find( student => student.major === "Physics");
  // const physicsStudent = students.find( student => student.major === "Physics")
  
  console.log("전공이 Physics인 학생:", physicsStudent); // 예상 결과: { name: "Charlie", age: 23, major: "Physics" },
  
  // 2. 이름이 "David"인 학생을 찾으세요.
  // 여기에 코드를 작성하세요.
  const davidStudent = students.find(student => student.name === "David");

  console.log("이름이 David인 학생:", davidStudent); // 예상 결과:{ name: "David", age: 20, major: "Chemistry" },
  

  //Dom 조작 실습 
  const inputel = document.querySelector(".input");
  const textInputel = document.querySelector(".text-input");

  console.log("🚀 ~ inputel:", inputel.checked)


  //체크 했을 때 
  const checkFn = () => {
    console.log("check!!");
    if(inputel.checked) {
        //체크된 상태
        textInputel.setAttribute('disabled', true)
    } else { 
        //체크 해제 상태
        console.log("해제!!");
        textInputel.removeAttribute('disabled');
    }
  };

  inputel.addEventListener ("change", checkFn);


  