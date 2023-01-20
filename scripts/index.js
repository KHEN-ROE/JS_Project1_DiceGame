// const showDice = () => {
//     const n = Math.floor(Math.random() * 6)+1;
//     const s1 = document.querySelector("#s1");
//     show("none", "block", "none", "none", "block")
//     s1.innerHTML = `<img src="./images/${n}.png" />`
//     console.log(n);
// }

//전역변수
let n;

//요소 보이기 함수
const show = (dspS1,dspS2,dspS3,dspBt1,dspBt2) => {
    const s1 = document.querySelector("#s1");
    const s2 = document.querySelector("#s2");
    const s3 = document.querySelector("#s3");
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");

    s1.style.display = dspS1 ;
    s2.style.display = dspS2 ;
    s3.style.display = dspS3 ;
    bt1.style.display = dspBt1 ;
    bt2.style.display = dspBt2 ;
};

//주사위 번호 선택
const showDice = () => {
    n = Math.floor(Math.random() * 6)+1;
    console.log(n)
    show("none", "block", "none", "none", "block");
    
}

//주사위 번호결과 확인
const showOk = () => {
    const radios = document.querySelectorAll("input[type=radio]");
    
//사용자가 선택한 숫자
    let usern ;
    for(let r of radios) {
        if (r.checked) {
            // usern = r.value;
            usern = parseInt(r.value);//스트링타입을 정수형으로 변환
            break; 
        }
    }
    console.log(n, usern);
    let tag;
    if(n === usern) tag="o"; //===는 자바스크립트만 있다. ===는 데이터타입 검사. ==는 값만 검사
    else tag = "x"

    document.querySelector("form").reset();//선택 후 초기화

    document.querySelector("#s1").innerHTML = `<img src="./images/${n}.png">`
    document.querySelector("#s3").innerHTML = `<img src="./images/${tag}.png">`
    show("block", "none", "block", "block", "none")
}

//DOM이 로드 된 후
document.addEventListener("DOMContentLoaded", ()=>{
   show("none", "none", "none", "block", "none")
});
