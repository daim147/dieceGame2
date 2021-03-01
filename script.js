const newbtn = document.querySelector(".btn--new");
const holdbtn = document.querySelector(".btn--hold");
const rollbtn = document.querySelector(".btn--roll");
const bothCurrent = document.querySelectorAll(".current-score");
const bothScore = document.querySelectorAll(".score");
const imgDice = document.querySelector(".dice");
let bothPlayer = document.querySelectorAll(".player");
let score;
let idx = false;
let one = 0;
let three = 0;
starting();
function starting() {
  idx = false;
  bothPlayer[`${+idx}`].classList.add("player--active");
  imgDice.classList.add("hidden");
  score = 0;
  one = 0;
  three = 0;
}
newbtn.addEventListener("click", () => {
  window.location.reload();
});
rollbtn.addEventListener("click", () => {
  play("yellow");
  makingRandom();
});

function removingAndActive(idx) {
  bothPlayer[`${+idx}`].classList.remove("player--active");
  idx = +!idx;
  bothPlayer[`${+idx}`].classList.add("player--active");
}
function addingHighScore(num) {
  bothScore[`${+idx}`].textContent = num;
  bothCurrent[`${+idx}`].textContent = 0;

  if (num >= 30) {
    play("victory");
    bothPlayer[`${+idx}`].classList.remove("player--active");
    bothPlayer[`${+idx}`].classList.add("player--winner");
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }
}

holdbtn.addEventListener("click", () => {
  play("blue");
  score = 0;
  if (!idx) {
    one = one + Number(bothCurrent[`${+idx}`].textContent);
    addingHighScore(one);
    removingAndActive(idx);
    idx = +!idx;
  } else {
    three = three + Number(bothCurrent[`${+idx}`].textContent);
    addingHighScore(three);
    removingAndActive(idx);
    idx = +!idx;
  }
});

function makingRandom() {
  let random = Math.ceil(Math.random() * 6);
  imgDice.classList.remove("hidden");
  imgDice.src = `dice-${random}.png`;
  score += random;

  if (random !== 1) {
    bothCurrent[`${+idx}`].textContent = score;
  } else {
    score = 0;
    bothCurrent[`${+idx}`].textContent = 0;
    bothScore[`${+idx}`].textContent = 0;

    if (!idx) {
      one = 0;
      removingAndActive(idx);
      idx = +!idx;
    } else {
      three = 0;
      removingAndActive(idx);
      idx = +!idx;
    }
  }
}
function play(sound) {
  var audio = new Audio(`${sound}.mp3`);
  audio.play();
}
// const currentScoreONE = document.querySelector("#current--0");
// const currentScoreTWO = document.querySelector("#current--1");
// const totalScoreONE = document.querySelector("#score--0");
// const totalScoreTWO = document.querySelector("#score--1");
// const playerONE = document.querySelector(".player--0");
// const playerTWO = document.querySelector(".player--1");
//   currentScoreONE.innerText = 0;
//   currentScoreTWO.innerText = 0;
//   totalScoreONE.innerText = 0;
//   totalScoreTWO.innerText = 0;

//   function winner(idx){

//     if(document.querySelector(`#score--${idx}`).textContent >= 30){

//         document.querySelector(`.player--${idx}`).classList.remove("player--active")
//         play("victory")
//         starting()
//         document.querySelector(`.player--${idx}`).classList.add("player--winner")

//     }
//   }

// let one = 0
// let three = 0
// idx = 0
// holdbtn.addEventListener("click",()=>{
//     play("blue")
//     score = 0
//     active = false
//     if(idx == 0){

//         let two;

//         two = +document.querySelector(`#current--${idx}`).textContent
//         one = one + two

//         document.querySelector(`#score--${idx}`).textContent = one

//         document.querySelector(`#current--${idx}`).textContent = 0
//         checkin(idx)
//         document.querySelector(`.player--${idx}`).classList.remove
//         ("player--active")
//         idx ++
//         document.querySelector(`.player--${idx}`).classList.add("player--active")
//     }else{
//         let four;

//         four = +document.querySelector(`#current--${idx}`).textContent
//         three = three + four

//         document.querySelector(`#score--${idx}`).textContent = three
//         document.querySelector(`#current--${idx}`).textContent = 0

//         document.querySelector(`.player--${idx}`).classList.remove("player--active")
//         idx --
//         document.querySelector(`.player--${idx}`).classList.add("player--active")
//     }
// })

// function makingRandom(){
//     let random = Math.ceil(Math.random() * 6)
//     imgDice.classList.remove('hidden')
//     imgDice.src = `dice-${random}.png`
//     score += random

//     if(random !== 1){
//         document.querySelector(`#current--${idx}`).textContent = score

//     }else{
//         score = 0
//         document.querySelector(`#current--${idx}`).textContent = 0
//         document.querySelector(`#score--${idx}`).textContent  = 0
//         if(idx == 0){
//             one = 0
//             document.querySelector(`.player--${idx}`).classList.remove("player--active")
//             idx ++
//             document.querySelector(`.player--${idx}`).classList.add("player--active")
//         }else{
//             three = 0
//             document.querySelector(`.player--${idx}`).classList.remove("player--active")
//             idx --
//             document.querySelector(`.player--${idx}`).classList.add("player--active")
//         }

//     }
// }
// function play(sound) {
//     var audio = new Audio(`${sound}.mp3`);
//     audio.play();
//   }

//   function checkin(idx){
//     console.log("hyyy")
//     if(document.querySelector(`#score--${idx}`).textContent >= 30){

//         document.querySelector(`.player--${idx}`).classList.remove("player--active")
//         play("victory")
//         rollbtn.removeEventListener("click", ()=>{
//             makingRandom()
//         })
//         one = 0
//         three = 0
//         starting()
//         document.querySelector(`.player--${idx}`).classList.add("player--winner")

//     }
//   }

// let idx = 0

//     holdbtn.addEventListener("click",()=>{
//       active = false
//       if(idx == 1){
//         bothPlayer[idx].classList.remove("player--active")
//         document.querySelector(`#score--${idx}`).textContent = score
//         document.querySelector(`#current--${idx}`).textContent = 0
//         idx = 0
//         bothPlayer[idx].classList.add("player--active")

//     }else{
//         bothPlayer[idx].classList.remove("player--active")
//         document.querySelector(`#current--${idx}`).textContent = 0
//         document.querySelector(`#score--${idx}`).textContent = score
//      idx++
//      bothPlayer[idx].classList.add("player--active")
//     }

//     })

// function playerId(random){

//     bothPlayer[idx].classList.add("player--active")

//        if(random !== 1){
//            document.querySelector(`#current--${idx}`).textContent = score
//         //    if(!active){
//         //     document.querySelector(`#score--${idx}`).textContent = score
//         //     if(idx == 1){
//         //         idx = 0
//         //     }else{
//         //      idx++
//         //     }

//         //    }
//        }else{
//             score = 0
//                document.querySelector(`#score--${idx}`).textContent = score
//                document.querySelector(`#current--${idx}`).textContent = score
//                bothPlayer[idx].classList.remove("player--active")
//                if(idx == 1){
//                 idx = 0
//             }else{
//              idx++
//             }

//            }

// }
//    }else{
//        console.log(idx, "one activating" )
//        // document.querySelector(`#current--${idx}`).textContent = 0
//        if(!active){
//            document.querySelector(`.player--${idx}`).classList.add("player--active")
//            console.log(idx, "two activating" )
//            active = true
//        }

//    }

// function playerId(random){
//      bothPlayer.forEach((player,idx)=>{

//     if(player.classList.contains("player--active")) {
//         if(random !== 1){
//             console.log(idx, "one deactivating" )
//             document.querySelector(`#current--${idx}`).textContent = score
//         }else{
//             if(active){
//                 console.log(idx, "two deactivating" )
//                 score = 0
//                 document.querySelector(`#score--${idx}`).textContent = score
//                 document.querySelector(`#current--${idx}`).textContent = score
//                 player.classList.remove("player--active")
//                 console.log("hello")
//                 active = false
//             }

//         }
//     }else{
//         console.log(idx, "one activating" )
//         // document.querySelector(`#current--${idx}`).textContent = 0
//         if(!active){
//             document.querySelector(`.player--${idx}`).classList.add("player--active")
//             console.log(idx, "two activating" )
//             active = true
//         }

//     }

//  })

// }

// function addingNumbersTo(idx,random){
//     if(random === 1){
//         score = 0
//         document.querySelector(`#score--${idx}`).textContent = score
//         document.querySelector(`#current--${idx}`).textContent = score

//     }else{
//         document.querySelector(`#current--${idx}`).textContent = score
//     }
// }
