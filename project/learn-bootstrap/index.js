//스위치 버튼이 off : Light 모드
//스위치 버튼이 on : Dark모드
const htmlEl = document.querySelector('html');
console.log("🚀 ~ htmlEl:", htmlEl);

const inputel = document.querySelector(".min-switch");
console.log("🚀 ~ inputel:", inputel);

// change 이벤트 함수 연결

const changeMode = () => {
    console.log("🚀 ~ changeMode :")

    const checkFn = () => {
        console.log("check!!");
        if(inputel.checked) {
            //체크된 상태
            htmlEl.setAttribute('data-bs-theme', 'dark')
        } else { 
            //체크 해제 상태
            console.log("해제!!");
            htmlEl.setAttribute('data-bs-theme', 'light');
        }
      };
    
      inputel.addEventListener ("change", checkFn);
}

inputel.addEventListener('change', changeMode);

changeMode();