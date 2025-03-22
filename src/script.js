const output = document.getElementById('output');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const hasil = document.getElementById('Hasil');
const hapus = document.getElementById('hapus');
const operators = document.querySelectorAll('.operator');

let currentInput = '';
let operatorPilihan = ';'
let newvalue = '';
let rawValue = '';
buttons.forEach((button)=>{
    button.addEventListener('click',function(){
        const value = button.textContent;

        if(value !== 'C' && value !== '='){
          
               rawValue += value;

            
               output.value += rawValue
              console.log(currentInput);
        }
      
    })
})

operators.forEach((operator)=>{
    operator.addEventListener('click',function(e){
      operatorPilihan = operator.textContent;
      console.log(operatorPilihan);
      output.value += operatorPilihan;
      rawValue = '';
     
    })
})

clear.addEventListener('click',function(){
    currentInput = '';
    output.value = currentInput;
})


hapus.addEventListener('click',function(){
 
   currentInput = output.value.slice(0,-1);
output.value = currentInput;
})



hasil.addEventListener('click',function(){
    try{
        currentInput =  eval(output.value);
        output.value = currentInput
    }catch(err){
        output.value = 'Error'
        currentInput = ""
    }
})