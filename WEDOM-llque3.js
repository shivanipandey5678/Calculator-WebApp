// let keypad=document.getElementsByClassName('box');
// let display=document.getElementById('firstrow');
// let operation=document.getElementsByClassName('oper');
// let equalto=document.getElementById('equal');
// let erase=document.getElementById('C');
// let firstnumber="";
// let secondnumber="";
// let oper="";
// let isfirstnumber=true;

// for(let i=0;i<keypad.length;i++)
// {
//     keypad[i].addEventListener("click", function(){
//         if(isfirstnumber == true){
//             firstnumber+= keypad[i].innerText;
//             display.value=firstnumber;
           
//         }
//         else{
//             secondnumber+=keypad[i].innerText;
//             display.value=secondnumber;
            
//         }
       
//     })
// }
// for(let i=0;i<operation.length;i++){
//     operation[i].addEventListener("click", function(){
//         isfirstnumber=false;
//         oper= operation[i].innerText;
//         }
       

//     )}
// equalto.addEventListener("click",function(){
//     display.value=calculater(firstnumber, secondnumber,oper);
//     firstnumber=secondnumber;
//     secondnumber="";
//     console.log(firstnumber)

//     console.log(secondnumber)
    
// })

// function calculater(firstnumber, secondnumber,oper){
//    switch (oper){
//     case "+":
//         return (Number(firstnumber) + Number(secondnumber));
//     case "-":
//         return (Number(firstnumber) - Number(secondnumber));
//     case "*":
//         return (Number(firstnumber) * Number(secondnumber));
//     case "/":
//         return (Number(firstnumber) / Number(secondnumber));
    
// }
// }
    
// erase.addEventListener("click",function(){
//     display.value="";
//     firstnumber="";
//     secondnumber="";
    
// })
try {
    let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
} catch (error) {
    document.querySelector('input').value = error;
}
