const display = document.getElementById('calculating');

let lastItem = "";
const addToLocalStorage = (exp) => {
      lastItem = exp;
}

window.addEventListener('beforeunload', () => {
   if( lastItem){
    let rez = eval(lastItem);
    localStorage.setItem(lastItem,rez);
   }
})

const addToDisplay = (value) => {

  if(display.classList.contains('error')){
    display.classList.remove('error');
    display.innerText = '';
  }
  const result = document.getElementById('result');

    if(result.innerText != ''){
      display.style.visibility = 'visible';
       display.innerText = result.innerText; 
        const calculating = document.getElementById('calculatingDiv');
        calculating.style.visibility = 'visible';
       hide();
        result.innerText = "";
       
    }
    display.innerText += value;
}

const calculate = () => {
    let expression = display.innerText;
   let rezultat = 0, newExp = expression;
   newExp = newExp.replace(/(\d+)²/g, (match, number) => {
    return `(${number}*${number})`;
});
newExp = newExp.replace(/√(\d+)/g, (match, number) => {
    return Math.sqrt(number);
});


newExp = newExp.replace('%', '/');
newExp = newExp.replace(',', '.');
       
  try{
    if(newExp && eval(newExp)){
      display.style.visibility = 'hidden';
      rezultat = eval(newExp)
         const vis = document.getElementById('visibility');
      vis.style.visibility = 'visible';
        const calDiv = document.getElementById('calculatingDiv');
   calDiv.style.visibility = 'hidden';

    const calculatation = document.getElementById('calculation');
    calculatation.innerText = expression;

    const hr = document.getElementById('calLine');
    hr.style.visibility = 'visible';

    const calEq = document.getElementById('calEq');
    calEq.style.visibility = 'visible';

    const result = document.getElementById('result');
    result.innerText = rezultat;
      
     addToLocalStorage(expression);
    }
  }catch(err){
    display.innerText = 'Syntax ERROR';
    display.classList.add('error');
  }
  

}

const deleteLast = () => {
    let exp = display.innerText;
   exp = exp.slice(0,-1);
    display.innerText = exp;
}


const hide = () => {
     const vis = document.getElementById('visibility');
     vis.style.visibility = 'hidden';

    const hr = document.getElementById('calLine');
    hr.style.visibility = 'hidden';

    const calEq = document.getElementById('calEq');
    calEq.style.visibility = 'hidden';
      
}


const reset = () => {
   hide();
  display.innerText = '';
  const calculatation = document.getElementById('calculation');
    calculatation.innerText = "";
    const result = document.getElementById('result');
    result.innerText = "";
    display.style.visibility = 'visible';
   console.log("reset")
}


document.addEventListener('keydown', (event) => {
  display.style.visibility = 'visible';
   let pressed = event.key;

   if( !isNaN(pressed)){
    addToDisplay(pressed);
   }else if( ['+','-','*', '/'].includes(pressed)){
    addToDisplay(pressed);
   }else if( pressed == 'Enter'){
    calculate();
   }else if( pressed == 'Backspace'){
    deleteLast();
   }else if( pressed == '.'){
    addToDisplay(pressed);
   }
})


const buttons = document.querySelectorAll('.button');
console.log(buttons);

const eqBtn = Array.from(buttons).find( (btn) => btn.innerText === '=');

 eqBtn.addEventListener('dblclick', () => {
        reset();
      })

 for(let i = 0; i < buttons.length; i++){
   buttons[i].addEventListener('click', () => {
      const value = buttons[i].innerText;
      if( !['x²', '='].includes(value)){ 
      addToDisplay(value);
    }else if( value == 'x²'){
      addToDisplay(`²`);
    }else if( value == '='){
      setTimeout(() => {
       
        calculate();
      },250) 
        
      
        
    }
   }
  )

 }

 const showRecent = () => {
    for( let i = 0; i < localStorage.length; i++){
     const key = localStorage.key(i);
  const value = localStorage.getItem(key);
  console.log(`${key}: ${value}`);
    }
 }

 showRecent();

 const btnRec = document.getElementById('btnRec');

 btnRec.addEventListener('click', () => {
   window.location.href = "../recent/recent.html";
 })
 




