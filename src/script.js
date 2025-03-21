const output = document.getElementById('output');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const hasil = document.getElementById('Hasil');
const hapus = document.getElementById('hapus');


let currentInput = ''

buttons.forEach((button)=>{
    button.addEventListener('click',function(){
        const value = button.textContent;

        if(value !== 'C' && value !== '='){
            currentInput += value;
            output.value = currentInput
        }
      
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
        currentInput = eval(currentInput);
        output.value = currentInput
    }catch(err){
        output.value = 'Error'
        currentInput = ""
    }
})