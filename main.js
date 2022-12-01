const secondHand = document.querySelector(`#hand-sec`);
const minHand = document.querySelector(`#hand-min`);
const hourHand = document.querySelector(`#hand-hour`);

function date(){
    let noneDisplay = document.getElementById(`hand-sec`);
    const now = new Date();
    const seconds = now.getSeconds();   
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    if((seconds == 0)&&(seconds < 1)){
    noneDisplay = document.getElementById(`hand-sec`).style.display = "none";
    }
    else{
        noneDisplay = document.getElementById(`hand-sec`).style.display = "block";
    }
    const min = now.getMinutes();
    const minDegree = ((min / 60) * 360)+90;
    minHand.style.transform = `rotate(${minDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour / 12)*360)+90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
    //digital clock
    const digital = document.querySelector("h4").innerHTML = `${hour}:${min}:${seconds}`;
   
} 
setInterval(date, 1000);

