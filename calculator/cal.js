import {  getNewExpression} from "../newExp.js";

document.addEventListener('DOMContentLoaded', () => {
    if( localStorage.getItem('recentClick')){
      const value = localStorage.getItem('recentClick');
      console.log(value);
      display.innerText = value;
     calculate(localStorage.getItem('recentClick'))
      localStorage.removeItem('recentClick');
    }
})

const display = document.getElementById('calculating');

let lastItem = "";
const addToLocalStorage = (exp) => {
      lastItem = exp;
}

window.addEventListener('beforeunload', () => {
   if( lastItem){
    let rez = eval(getNewExpression(lastItem));
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
    if( fClicked && ['sin', 'cos', 'tan'].includes(value)){
     switch(value){
      case 'sin':  display.innerText = "sin⁻¹("; break;
      case 'cos': display.innerText = "cos⁻¹("; break;
      case 'tan': display.innerText = "tan⁻¹("; break;
      default:
      fClicked = false;
    }
    fClicked = false;
    return;
  }else if( ['sin', 'cos', 'tan', 'xʸ', 'x!', 'log'].includes(value)){
    if (['sin', 'cos', 'tan', 'log'].includes(value)) {
        display.innerText += value + '(';
    } else if (value === 'xʸ') {
        display.innerText += "^";
    } else if (value === 'x!') {
        display.innerText += '!';
    }
    return;
}

    display.innerText += value;
}


const calculate = () => {

   let expression = display.innerText;
   let rezultat = 0, newExp = getNewExpression(expression);
    const calculated = document.getElementById('calculating');


  try{
    if(newExp && eval(newExp)){
      
 calculated.classList.add('calculatedAnim');
      rezultat = eval(newExp);
        setTimeout( () => {
      display.style.visibility = 'hidden';
           const vis = document.getElementById('visibility');
          vis.style.visibility = 'visible';
        const calDiv = document.getElementById('calculatingDiv');
        calDiv.style.visibility = 'hidden';
       calculated.classList.remove('calculatedAnim');

        },500);

    const calculatation = document.getElementById('calculation');
    calculatation.innerText = expression;

    const hr = document.getElementById('calLine');
    hr.style.visibility = 'visible';

    const calEq = document.getElementById('calEq');
    calEq.style.visibility = 'visible';

    const result = document.getElementById('result');
    result.innerText = rezultat;

     addToLocalStorage(expression);

    }else{
      console.error("Error while calculating!");
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

 /* sidebar*/

 const dots = document.getElementById('dots');
 const gridCal = document.getElementById('calculator');
 const rightSide = document.getElementById('rightSide');
 const sidebar = document.getElementById('leftSide');



 dots.addEventListener('click', () => {
  if( result.innerText === ""){
    dots.style.visibility = "hidden";
   sidebar.classList.remove('removingSidebar');
 
   gridCal.classList.add('gridCalculator');
   rightSide.style.position = "relative";
   sidebar.classList.add('showSidebar');
  }
   
 })
const removeSidebar = () => {
  sidebar.classList.add('removingSidebar');
    setTimeout(() => {
      dots.style.visibility = "visible";
      gridCal.classList.remove('gridCalculator');
   rightSide.style.position = "absolute";
   sidebar.classList.remove('showSidebar');
    }, 850)
}

 const xButton = document.getElementById('sidebarX');

 xButton.addEventListener('click', () => {
   removeSidebar();

 })

 const moreFuncBtns = document.getElementsByClassName('btnSidebar');
 let fClicked = false;
 

 for( let i = 0; i < moreFuncBtns.length; i++){
 
     moreFuncBtns[i].addEventListener('click', () => {
    if( moreFuncBtns[i].innerText == "f⁻¹"){
    fClicked = true;
    }else{
      addToDisplay(moreFuncBtns[i].innerText);
      removeSidebar();
    }
      
 })
  }

 




 const btnRec = document.getElementById('btnRec');

 btnRec.addEventListener('click', () => {
   window.location.href = "../recent/recent.html";
 })



 




