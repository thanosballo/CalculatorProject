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
let sign="";
let result="";
let a="";
let b="";
const screen=document.querySelector(".screen");
const buttons=document.querySelectorAll(".button");
buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        if (button.classList.contains("num")){
            string=`${string}${button.dataset.num}`;
            console.log(string);
        }
        else if (button.classList.contains("icons")){
            sign=button.dataset.sign;
            if (a===""){
            a=parseInt(string);
            string="";
            }else {
            b=parseInt(string);
            string="";
            console.log(b);
            }
            console.log(typeof(a),a,b,sign);
        }else if (button.classList.contains("equal")){
            switch (sign){
                case "+":result=add(a,b);break;
                case "-":result=substract(a,b);break;
                case "*":result=multiply(a,b);break;
                case "/":result=divide(a,b);break;
            }
            console.log(result,sign);
        }
    }
        )})