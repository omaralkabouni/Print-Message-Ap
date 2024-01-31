// get elments into variable

let input = document.getElementById("text-input");
let btn = document.getElementById("btn");
let meg = document.getElementById("meg");



// Events
btn.onclick = function(){
    // get value from input
    let text = input.value;tio
    
    // if text empty show me error
   if(!text){

    meg.innerHTML= "Input is  empty "
   }
   else{

     // put input Value into p
     meg.innerHTML = text ;
     // empty input value
     input.value = ""
    
   }
}
