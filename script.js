//DOM - Time
let mSecs=document.querySelector(".time-msec");
let sec=document.querySelector(".time-sec");
let min=document.querySelector(".time-min");
let hour=document.querySelector(".time-hr");

//DOM - Buttons
let playBtn=document.querySelector(".btn.play");
let pauseBtn=document.querySelector(".btn.pause");
let resetBtn=document.querySelector(".btn.reset");
let flagBtn=document.querySelector(".btn.laps");

//Javascript logic variables
let hours=0, mins=0, secs=0, miliSecs=0;
let timer=false;






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
    reset();

})

flagBtn.addEventListener("click",()=>{
    console.log("Flag selected");
})


