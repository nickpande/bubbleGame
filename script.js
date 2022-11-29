var bottom = document.querySelector('#bottom');
var gola = document.querySelector('.gola');
var timerelm = document.querySelector("#timerelm");
var clickelm = document.querySelector("#clickelm");
var scoreelm =  document.querySelector("#scoreelm");
var golaid = document.querySelector("golaid");
var clicked = Number(Math.floor(Math.random()*10));

var timernum = 60;
var val ;
var score = 0;
var time = setInterval(timer,1000)


function showgola(){
temp = ``;
for(var i = 1 ; i < 51 ; i++){
temp += `  <div id = "${golaid}" class="gola"> ${Math.floor(Math.random()*10)}</div>`;
};
bottom.innerHTML = temp;
};


function timer(){
    if(timernum <= 0){
      clearInterval(time)
       
    }
    else{
      timernum --;   
      timerelm.textContent = timernum;
    }
}


function clickfnc(){
clickelm.textContent = clicked;
bottom.addEventListener('click' , function(dets){
console.log(dets.target.textContent);
console.log(clicked);
if(Number(dets.target.textContent) === clicked)
{
  scorefn();
};
clicked = Number(Math.floor(Math.random()*10));
clickelm.textContent = clicked;
changgola();
})
};

function scorefn(){ 
  score = score + 10;
  scoreelm.textContent=score;
  console.log("vuw");
};
function changgola(){
  temp = ``; 
  for(var i = 1 ; i < 51 ; i++){
    temp += `  <div id = "${golaid}" class="gola"> ${Math.floor(Math.random()*10)}</div>`;
    };
    bottom.innerHTML = temp;
};

clickfnc();
showgola()
timer();



