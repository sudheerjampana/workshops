let image=document.getElementById("image")
let zoomIn=document.getElementById("zoomIn")
let zoomOut=document.getElementById("zoomOut")
let fit=document.getElementById("fit")

let scale=100
zoomIn.onclick=()=>{
    scale=scale+10
    // console.log("zoomin");
    image.style.height=`${scale}%`
    
}
zoomOut.onclick=()=>{
    // console.log("zoomOut");
    scale=scale-10
    image.style.height=`${scale}%`
    
}
fit.onclick=()=>{
    // console.log("fit");
    scale=100
    image.style.height=`${scale}%`
    
}