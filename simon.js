let gameseq = [];
let userseq = [];
let start = false;
let highest = 0;
let level = 0;
let btns = ["yellow","green" , "blue" ,"red"]
let h2 = document.querySelector('h2');
window.addEventListener("keypress",function(e) {
  if(start == false){
    start = true;
    levelup();
  }

})

function levelup(){
  userseq = [];
  level++;
  h2.innerText = `level ${level}`;
  let btn = randombtn();
  btnflash(btn);
}

function btnflash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250)
}

function randombtn(){
let randomcolor = Math.floor(Math.random()*4);
let randombtn = btns[randomcolor];
gameseq.push(randombtn);
let btn = document.querySelector(`.${randombtn}`);
return btn;
}

let delbtns = document.querySelectorAll(".btn");

function btnclick(){
  let btn = this;
  let userbtn = btn.getAttribute("id");
  console.log("button was pressed");
  btnflash(btn);
  userseq.push(userbtn);
  checkanswer(userseq.length-1);
}

for(btn of delbtns){
  btn.addEventListener("click",btnclick);
}

function checkanswer(indx){
  if(userseq[indx]==gameseq[indx]){
    if(userseq.length == gameseq.length){
      setTimeout(levelup,1000);
    }
  }
  else{
    reset();
  }
}
function reset(){
  if(highest < level){
    highest = level;
  }
  h2.innerHTML = `Game over! your score is ${level} <br>Highest score is ${highest} <br> press any key to start a new game` ;
  
  start = false;
  gameseq = [];
  userseq = [];
  level = 0;
  let body = document.querySelector("body");
  body.style.backgroundColor = "red";
  setTimeout(function(){
    body.style.backgroundColor = "white";
  },250);
}