const btn = document.querySelectorAll(".play");
// var score = 0;
console.log(btn);
var timeLeft = 10;
    var elem = document.getElementById('timer');
    
    
    function countdown() {
      if (timeLeft <= -1) {
        clearTimeout(timerId);
        window.location.href="timer.html"
      }else if (timeLeft<10) {
       elem.innerHTML= `0${timeLeft--}`
      }      
      else {
        elem.innerHTML = timeLeft--;
      }
      console.log(timeLeft);
    }
    var timerId = setInterval(countdown, 1000);
function ans(e) {
  let score;
  if (e.target.innerText==="border") {
    window.location.href="q.five.html"
  }else{
    window.location.href="wrong.html";
  }
}
    for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click',ans)
  
}