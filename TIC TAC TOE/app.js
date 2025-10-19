let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('.reset_game');
let newbtn = document.querySelector('.new_gamebtn');
let winner = document.querySelector('.winner');
let hide_winner = document.querySelector('.afterwin');
let terno = true;

let ans = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function showWinner(winnerText) {
  if(winnerText === 'It is a Tie!'){
    winner.innerText = `It's a Tie!`;
  }
  else
  winner.innerText = `Winner:${winnerText}`;
  hide_winner.classList.remove('afterwin');
}
function checkTie() {
  for (let box of boxes) {
    if (box.innerText === '') {
      return false;
    }
  }
  return true;
}
tie = true;
boxes.forEach((box) => {
  box.addEventListener('click', () => {
    let audio = new Audio("assets/computer-mouse-click-352734.mp3");
    audio.playbackRate = 2.0;
    audio.play();
    box.innerText = terno ? 'X' : 'O';
    box.disabled = true;
    terno = !terno;
    for (let i = 0; i < ans.length; i++) {
      let [a, b, c] = ans[i];
      if (
        boxes[a].innerText !== '' &&
        boxes[a].innerText === boxes[b].innerText &&
        boxes[b].innerText === boxes[c].innerText
      ) 
      {
        tie = false;
        showWinner(boxes[a].innerText);
        boxes.forEach((b) => (b.disabled = true));
      }
      
    } 
    if (tie && checkTie()) {
      showWinner('It is a Tie!');
    }
   });
});

reset.addEventListener('click', () => {
  boxes.forEach((box) => {
    box.innerText = '';
    box.disabled = false;
  });
  hide_winner.classList.add('afterwin');
  terno = true;
});

newbtn.addEventListener('click', () => {
  boxes.forEach((box) => {
    box.innerText = '';
    box.disabled = false;
  });
  hide_winner.classList.add('afterwin');
  terno = true;
});
