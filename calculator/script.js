let screenContent = document.getElementById("screenContent");

let expression;
function updateScreen(value) {
    if (screenContent.textContent === "0" && value !== ".") {
        screenContent.textContent = value;
        expression = value;
    } else {
        screenContent.textContent += value;
        expression += value;
    }
}

document.getElementById("btn0").onclick = () => updateScreen("0");
document.getElementById("btn1").onclick = () => updateScreen("1");
document.getElementById("btn2").onclick = () => updateScreen("2");
document.getElementById("btn3").onclick = () => updateScreen("3");
document.getElementById("btn4").onclick = () => updateScreen("4");
document.getElementById("btn5").onclick = () => updateScreen("5");
document.getElementById("btn6").onclick = () => updateScreen("6");
document.getElementById("btn7").onclick = () => updateScreen("7");
document.getElementById("btn8").onclick = () => updateScreen("8");
document.getElementById("btn9").onclick = () => updateScreen("9");

document.getElementById("btn+").onclick = () => updateScreen("+");
document.getElementById("btn-").onclick = () => updateScreen("-");
document.getElementById("btn*").onclick = () => updateScreen("*");
document.getElementById("btn/").onclick = () => updateScreen("/");
document.getElementById("btn.").onclick = () => updateScreen(".");
document.getElementById("btnc").onclick = () => screenContent.textContent="0"


document.getElementById("btn=").onclick = () => {
    try {
        screenContent.textContent = eval(screenContent.textContent);
        
        
    } catch (e) {
        screenContent.textContent = "Error";
    }
};


// var display="0";
// let screenContent=document.getElementById("screenContent");

// let zero=document.getElementById("btn0")
// let one=document.getElementById("btn1")
// let two=document.getElementById("btn2")
// let three=document.getElementById("btn3")
// let four=document.getElementById("btn4")
// let five=document.getElementById("btn5")
// let six=document.getElementById("btn6")
// let seven=document.getElementById("btn7")
// let eight=document.getElementById("btn8")
// let nine=document.getElementById("btn9")
// let plus=document.getElementById("btn+")
// let minus=document.getElementById("btn-")
// let mul=document.getElementById("btn*")
// let div=document.getElementById("btn/")
// let dot=document.getElementById("btn.")
// let equals=document.getElementById("btn=")

// zero.onclick=()=>{
//     screenContent.textContent+="0"
//     console.log("0"); 
// }
// one.onclick=()=>{
//     screenContent.textContent+="1"
//     console.log("1");
    
// }
// two.onclick=()=>{
//     screenContent.textContent+="2"
//     console.log("2")
// }
// three.onclick=()=>{
//     screenContent.textContent+="3"
//     console.log("3")
// }
// four.onclick=()=>{
//     console.log("4")
//     screenContent.textContent+="4"
// }
// five.onclick=()=>{
//     screenContent.textContent+="5"
//     console.log("5")
// }
// six.onclick=()=>{
//     screenContent.textContent+="6"
//     console.log("6")
// }
// seven.onclick=()=>{
//     screenContent.textContent+="7"
//     console.log("7")
// }
// eight.onclick=()=>{
//     screenContent.textContent+="8"
//     console.log("8")
// }
// nine.onclick=()=>{
//     screenContent.textContent+="9"
//     console.log("9")
// }
// console.log(screenContent.textContent)
