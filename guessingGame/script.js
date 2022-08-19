
// DECLARACIÓN DE VARIABLES

let rulesButton = document.querySelector(".rules-button");
let closeRulesButton = document.querySelector(".close-button");
let ruleBox = document.querySelector(".rule-box");

let riddle1 = document.querySelector(".riddle1");
let riddle2 = document.querySelector(".riddle2");
let riddle3 = document.querySelector(".riddle3");
let riddle4 = document.querySelector(".riddle4");
let riddle5 = document.querySelector(".riddle5");
let riddle6 = document.querySelector(".riddle6");
let riddle7 = document.querySelector(".riddle7");
let riddle8 = document.querySelector(".riddle8");
let riddle9 = document.querySelector(".riddle9");
let riddle10 = document.querySelector(".riddle10");

let tButton1 = document.querySelector(".true-button1");
let fButton1 = document.querySelector(".false-button1");
let answerBox1 = document.querySelector(".answer-box1");

let tButton2 = document.querySelector(".true-button2");
let fButton2 = document.querySelector(".false-button2");
let answerBox2 = document.querySelector(".answer-box2");

let tButton3 = document.querySelector(".true-button3");
let fButton3 = document.querySelector(".false-button3");
let answerBox3 = document.querySelector(".answer-box3");

let tButton4 = document.querySelector(".true-button4");
let fButton4 = document.querySelector(".false-button4");
let answerBox4 = document.querySelector(".answer-box4");

let tButton5 = document.querySelector(".true-button5");
let fButton5 = document.querySelector(".false-button5");
let answerBox5 = document.querySelector(".answer-box5");

let tButton6 = document.querySelector(".true-button6");
let fButton6 = document.querySelector(".false-button6");
let answerBox6 = document.querySelector(".answer-box6");

let tButton7 = document.querySelector(".true-button7");
let fButton7 = document.querySelector(".false-button7");
let answerBox7 = document.querySelector(".answer-box7");

let tButton8 = document.querySelector(".true-button8");
let fButton8 = document.querySelector(".false-button8");
let answerBox8 = document.querySelector(".answer-box8");

let tButton9 = document.querySelector(".true-button9");
let fButton9 = document.querySelector(".false-button9");
let answerBox9 = document.querySelector(".answer-box9");

let tButton10 = document.querySelector(".true-button10");
let fButton10 = document.querySelector(".false-button10");
let answerBox10 = document.querySelector(".answer-box10");

let footer = document.querySelector(".footer");


// DECLARACIÓN DE ARRAYS

let tb = [true,true,true,true,false,false,true,true,false,false];
let fb = [false,false,false,false,true,true,false,false,true,true];

let allAnswerBox = [answerBox1,answerBox2,answerBox3,answerBox4,answerBox5,answerBox6,answerBox7,answerBox8,answerBox9,answerBox10];
let allRiddle = [riddle1,riddle2,riddle3,riddle4,riddle5,riddle6,riddle7,riddle8,riddle9,riddle10,]

let allTButton = [tButton1,tButton2,tButton3,tButton4,tButton5,tButton6,tButton7,tButton8,tButton9,tButton10];
let allFButton = [fButton1,fButton2,fButton3,fButton4,fButton5,fButton6,fButton7,fButton8,fButton9,fButton10];

// FUNCIONES

let tbHelp = 0;
let fbHelp = 0;
let won = 0;
let button1 = allTButton[won];
let button2 = allFButton[won];

function retry() {
    let fragmento = document.createDocumentFragment();
    let newRetryButton = document.createElement("BUTTON");
    newRetryButton.classList.add("retry-button");
    newRetryButton.innerHTML = `Reintentar`;
    fragmento.appendChild(newRetryButton);
    allAnswerBox[won].appendChild(fragmento);
    newRetryButton.addEventListener("click",()=>{
        window.location.reload();
    })
}

const trueAnswer = ()=>{
    if (tb[tbHelp] == true){
        tbHelp++
        fbHelp++
        allTButton[won].disabled = true;
        allFButton[won].disabled = true;
        
        allTButton[won].style.cssText = "transition:1s; background-color:#1ec21e";
        allFButton[won].style.cssText = "transition:1s; background-color:#bbb";
    
        allTButton[won].innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        allFButton[won].innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        
        won++
        if (won < 10){
            let riddleBox = allRiddle[won];
            riddleBox.style.display = "flex";
        }
        // console.log(won);
    } else {
        allTButton[won].disabled = true;
        allFButton[won].disabled = true;
        
        allTButton[won].style.cssText = "transition:1s; background-color:#da0000";
        allFButton[won].style.cssText = "transition:1s; background-color:#bbb";
    
        allFButton[won].innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        allTButton[won].innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;

        allAnswerBox[won].style.display = "block";
        retry();
    }
}

const falseAnswer = ()=>{
    if (fb[fbHelp] == true){
        tbHelp++
        fbHelp++
        allTButton[won].disabled = true;
        allFButton[won].disabled = true;
        
        allFButton[won].style.cssText = "transition:1s; background-color:#1ec21e";
        allTButton[won].style.cssText = "transition:1s; background-color:#bbb";
    
        allFButton[won].innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        allTButton[won].innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        
        won++
        if (won < 10){
            let riddleBox = allRiddle[won];
            riddleBox.style.display = "flex";
        }
        // console.log(won);
    } else {
        allTButton[won].disabled = true;
        allFButton[won].disabled = true;
        
        allTButton[won].style.cssText = "transition:1s; background-color:#bbb";
        allFButton[won].style.cssText = "transition:1s; background-color:#da0000";
        
        allTButton[won].innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        allFButton[won].innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        
        allAnswerBox[won].style.display = "block";
        retry();
    }
}

// EVENTOS

rulesButton.addEventListener("click",()=>{
    console.log("rulesButton está funcionando correctamente");
    ruleBox.style.setProperty("display", "block");
    footer.classList.add("footer-active");
});

closeRulesButton.addEventListener("click",()=>{
    console.log("closeRuleButton está funcionando correctamente");
    ruleBox.style.setProperty("display", "none");
    riddle1.style.display = "flex";
});

// BUCLES E ITERACIONES

for (button in allTButton){
        // console.log("hola");
    allTButton[button].addEventListener("click",trueAnswer);
}

for (button in allFButton){
        // console.log("hola");
    allFButton[button].addEventListener("click",falseAnswer);
}