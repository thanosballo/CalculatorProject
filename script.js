function add(a,b){
    return a+b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}
function operate(a,b,code){

}
let string="";
const screen=document.querySelector(".screen");
const buttons=document.querySelectorAll(".button");
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        if (button.classList.contains("num")){
            string=`${string}${button.dataset.num}`;
            console.log(string);
        }
    })
})