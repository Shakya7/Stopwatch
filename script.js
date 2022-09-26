//DOM - Time
let mSecs=document.querySelector(".time-msec");
let sec=document.querySelector(".time-sec");
let min=document.querySelector(".time-min");
let hour=document.querySelector(".time-hr");

let currentTiming=document.querySelector(".toggle");

//DOM - Buttons
let playBtn=document.querySelector(".btn.play");
let pauseBtn=document.querySelector(".btn.pause");
let resetBtn=document.querySelector(".btn.reset");
let flagBtn=document.querySelector(".btn.laps-btn");

//DOM - Laps
let lapsDiv=document.querySelector(".laps");
let iconClassess=["fa-solid","fa-flag"];

//Javascript logic variables
let hours=0, mins=0, secs=0, miliSecs=0;
let timer=false;

//Laps variables
let lapHr=0;
let lapMin=0;
let lapSec=0;
let lapMSec=0;





function start(){
    timer=true;
    stopwatch();
}

function pause(){
    timer=false;
}

function reset(){
    mSecs.innerHTML="00";
    sec.innerHTML="00";
    min.innerHTML="00";
    hour.innerHTML="00";
}

function stopwatch(){
    if(timer===true){
        if(miliSecs===99){
            if(secs===59){
                if(mins===59){
                    mins=0;
                    hours=hours+1;
                    let hr=hours;
                    if(hour<10){
                        hr="0"+hr;
                    }
                    hour.innerHTML=hr;
                }
                secs=0;
                mins=mins+1;
                let m=mins;
                if(mins<10){
                    m="0"+m;
                }
                min.innerHTML=m;
            }
            miliSecs=0;
            secs=secs+1;
            let s=secs;
            if(secs<10){
                s="0"+s;
            }
            sec.innerHTML=s;
        }
        miliSecs=miliSecs+1;
        let ms=miliSecs;
        if(miliSecs<10){
            ms="0"+ms;
        }
        mSecs.innerHTML=ms;
        setTimeout("stopwatch()",10);
    }
}

function getExactTime(){
    lapHr=hour.innerHTML;
    lapMin= min.innerHTML;
    lapSec=sec.innerHTML;
    lapMSec=mSecs.innerHTML;

    console.log(`${lapHr}:${lapMin}:${lapSec}:${lapMSec}`);

    let newLap=document.createElement("div");
    newLap.classList.add("lap");
    let leftDiv=document.createElement("div");
    leftDiv.classList.add("lap-left");

    let numberDiv=document.createElement("p");

    let iconSpan=document.createElement("i");
    iconSpan.classList.add(...iconClassess);
    leftDiv.appendChild(iconSpan);
    leftDiv.appendChild(numberDiv);
    
    let timeDiv=document.createElement("p");
    newLap.appendChild(leftDiv);
    newLap.appendChild(timeDiv);
    lapsDiv.prepend(newLap);
    console.log(newLap.nextElementSibling);
    if(newLap.nextElementSibling){
        console.log(Number(newLap.nextElementSibling.firstChild.lastChild.innerHTML));
        if(Number(newLap.nextElementSibling.firstChild.lastChild.innerHTML)<9)
            numberDiv.innerHTML="0"+(Number(newLap.nextElementSibling.firstChild.lastChild.innerHTML)+1);
        else
            numberDiv.innerHTML=Number(newLap.nextElementSibling.firstChild.lastChild.innerHTML)+1;
    }
    else{
        numberDiv.innerHTML="01";
    }
    timeDiv.innerHTML=`${lapHr}:${lapMin}:${lapSec}:${lapMSec}`;

}

function deleteLaps(parent){
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


// Display appropriate buttons according to appropriate logic //

playBtn.addEventListener("click",()=>{
    playBtn.classList.add("hidden");
    pauseBtn.classList.remove("hidden");
    flagBtn.classList.remove("hidden");
    resetBtn.classList.add("hidden");
    start();
})

pauseBtn.addEventListener("click",()=>{
    pauseBtn.classList.add("hidden");
    playBtn.classList.remove("hidden");
    flagBtn.classList.add("hidden");
    resetBtn.classList.remove("hidden");
    pause();
})

resetBtn.addEventListener("click",()=>{
    resetBtn.classList.add("hidden");
    playBtn.classList.remove("hidden");
    flagBtn.classList.add("hidden");
    pauseBtn.classList.add("hidden");
    lapsDiv.classList.add("hidden");
    currentTiming.classList.add("hidden");
    reset();
    deleteLaps(lapsDiv);

})

flagBtn.addEventListener("click",()=>{
    //console.log("Flag selected");
    lapsDiv.classList.remove("hidden");
    currentTiming.classList.remove("hidden");
    getExactTime();
})


