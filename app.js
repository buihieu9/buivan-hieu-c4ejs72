 let ramdomMatch = document.getElementById('match')
// let score = document.getElementById('score')
let  number = [-2,-1,0,1,2,0]
let operators = ['+','-'];
let result;
let fakeResult;
let x = 0;
// score.innerHTML += `<span>score:</span> <span>${x}</span>`
let point = document.querySelector('.point')
point.innerText = x
function run () {
    let a = Math.floor(Math.random()*20);
    let b = Math.floor(Math.random()*20);
if(operators[Math.floor(Math.random()*operators.length)] === '+') {
    result = a + b;
    fakeResult = result + number[Math.floor(Math.random()*number.length)]
       ramdomMatch.innerText = `${a} + ${b} = ${fakeResult}`   
}
else {
    result = a - b;
    fakeResult = result + number[Math.floor(Math.random()*number.length)]
       ramdomMatch.innerText = `${a} - ${b} = ${fakeResult}`
}

}
// button select
let selectedTrue = document.getElementById('true')

selectedTrue.addEventListener('click',function() {
    if(fakeResult === result){
        point.innerText = ++x  
        document.querySelector("#true-sound").play();
       }
    else {
        x= 0
        point.innerText = x
        document.querySelector("#false-sound").play();

    }
    run()
    clearInterval(a)
    timeDown()
})

let selectedFalse = document.getElementById('false')

selectedFalse.addEventListener('click',function() {
    if(fakeResult !== result){
        point.innerText = ++x
        document.querySelector("#true-sound").play();
    }
    else {
        x= 0
        point.innerText = x
        document.querySelector("#false-sound").play();

    }
    run()
    clearInterval(a)
    timeDown()
})

function timeDown() {
    let coutDown = document.querySelector('#bar')
    var width = 1;
    a = setInterval(frame, 20);
    function frame() {
        if (width >= 100) {
          clearInterval(a);
          x= 0
          point.innerText = x
          document.querySelector("#false-sound").play();
         
        } else {
          width++;
          coutDown.style.width = width + "%";
        }
      
    }
}
timeDown()
run()

// let coutDown = document.querySelector('#bar')

// function timeDown() {
//     coutDown.value = 6
// a = setInterval(function() {
//     coutDown.value = --coutDown.value
//     if(coutDown.value == '0') {
//         clearInterval(a)
//         x= 0
//         point.innerText = x
//         document.querySelector("#false-sound").play();
//     }
// }, 600);
// }