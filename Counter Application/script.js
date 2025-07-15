let count=document.getElementById("count")
let inc=document.getElementById("inc")
let dec= document.getElementById("dec")
let reset=document.getElementById("reset")

let c=0;
inc.onclick=()=>{
    c++;
    // count.innerText=c
    count.innerText= c

}
// while(c==0){
dec.onclick=()=>{
    if(c>0){
        c--;
        count.innerText= c
    }
    
}
// }
reset.onclick=()=>{
    c=0
    count.innerText= c
}
