let recents = [];

class recentDiv{
     constructor(){
      this.element = document.createElement('div');
      this.element.classList = "rec";
    }

    fullDiv(key){
      const cal = document.createElement('div');
      cal.innerHTML = key;
      cal.classList.add("calculation");
      const hr = document.createElement('hr');
      hr.classList.add("hrLine");
      const equal = document.createElement('div');
      equal.innerText = '=';
      equal.classList.add("equal");
      const calculated = document.createElement('div');
      calculated.classList.add('calculated');
      calculated.innerText = eval(key);
      const x = document.createElement('i');
      x.classList = "fa-solid fa-xmark";
      x.id = "xBtn";
      x.style.color = "black";

      x.addEventListener('click', () => {
        recDiv.innerHTML = "";
        localStorage.removeItem(key);
         this.element.remove();
         recents
         showRecents();
      })

      this.element.appendChild(cal);
      this.element.appendChild(hr);
      this.element.appendChild(equal);
      this.element.appendChild(calculated);
      this.element.appendChild(x);

      return this.element;
    }
};


const getRecents = () => {
     for( let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      recents.push({key : key, value : value});
     }

     console.log(recents);
}



const recDiv = document.getElementById('recents');

const showRecents = () => {
    recents = [];
    getRecents();
    if( recents.length > 3){
          recDiv.style.overflowY = "scroll";
     }else{
      recDiv.style.overflowY = "hidden";
     }
     recents.forEach( ( rec ) => {
       const createdDiv =  new recentDiv().fullDiv(rec.key);
       recDiv.appendChild(createdDiv);
     

        
     })
}

showRecents();


 const btnCal = document.getElementById('btnCal');

 btnCal.addEventListener('click', () => {
   window.location.href = "../calculator/calculator.html";
 })
 

