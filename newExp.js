
const getNewExpression = (expression) => {
  let newExp = String(expression);

  
newExp = newExp.replace('%', '/');
newExp = newExp.replace(',', '.');
  
newExp = newExp.replace(/e/g, () => {
  return  2.71828;
  });

newExp = newExp.replace(/π/g, () => {
  return 3.14159;
  });

   newExp = newExp.replace(/(\d+(\.\d+)?)²/g, (match, number) => {
    return `(${number}*${number})`;
});
newExp = newExp.replace(/√(\d+(\.\d+)?)/g, (match, number) => {
    return Math.sqrt(number);
});

newExp = newExp.replace(/sin\((\d+(\.\d+)?)\)/g,(match,number ) => {
    return Math.sin(Number(number) * Math.PI / 180);
})

newExp = newExp.replace(/cos\((\d+(\.\d+)?)\)/g, (match, number) => {
  return Math.cos(number);
})

newExp = newExp.replace(/tan\((\d+(\.\d+)?)\)/g, (match, number) => {
  return Math.tan(number);
})

newExp = newExp.replace(/log\((\d+(\.\d+)?)\)/g, (match, number) => {
    return Math.log(number);
})

  newExp = newExp.replace(/sin⁻¹\((\d+(\.\d+)?)\)/g, (match, number) => {
  return Math.asin(Number(number)) * (180 / Math.PI)
})

newExp = newExp.replace(/cos⁻¹\(\d+(\.\d+)?\)/g, (match, number) => {
  return Math.acos(Number(number)) * (180 / Math.PI)
})

newExp = newExp.replace(/tan⁻¹\(\d+(\.\d+)?\)/g, (match, number) => {
   return Math.atan(Number(number)) * (180 / Math.PI)
})



const factorial = (number) => {
  if( number < 0) {
    return 1;
  }else if( number === 1 || number === 0){
      return 1;
    }else{
     return number * factorial(number-1);
      
    }
}

newExp = newExp.replace(/(\d+(\.\d+)?)\!/g, (match,number) => {
    return factorial(number);
})

newExp = newExp.replace(/(\d+(\.\d+)?)\^(\d+(\.\d+)?)/g, (match, base, _, exponent) => {
    return Math.pow(Number(base), Number(exponent));
});


return newExp;
       
}

export {getNewExpression};