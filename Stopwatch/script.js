let startBtn=document.getElementById("startBtn")
let stopBtn=document.getElementById("stopBtn")
let resetBtn=document.getElementById("resetBtn")
let timer=document.getElementById("timer")
let sec=0;
let min=0;
let hr=0;
let time;
let is_timer_run=false
startBtn.onclick=()=>{
    if(is_timer_run===true){
        return
    }
    is_timer_run=true
    time=setInterval(()=>{
        sec++
        if(sec==60){
            min++
            sec=0
        }
        if(min==60){
            hr++
            sec=0
            min=0
        }
        timer.textContent=(hr<10?"0"+hr:hr)+":"+(min<10?"0"+min:min)+":"+(sec<10?"0"+sec:sec)
    },1000)
}
stopBtn.onclick=function(){
    // console.log("stop");
    clearInterval(time)
    is_timer_run=false
    
}
resetBtn.onclick=function(){
    clearInterval(time)
    sec=0
    min=0
    hr=0
    timer.textContent="00:00:00"
    is_timer_run=false

}