function add(a,b){
    return (a+b);
}

function substract(a,b){
    return (a-b);
}

function multiply(a*b){
    return(a*b);
}

function divide(a,b){
    return(a/b)
}

let firstNumber = 0;
let secondNumber = 0;

let operator = "";


function operate(a,b,c){
    switch (c) {
        case 'add':
          add(a,b);
          break;
        case 'substract':
            substract(a,b);
            break;

        case 'multiply':
          multiply(a,b);
          break;

          case 'divide':
          divide(a,b);
          break;
        default:
          console.log(`Sorry, no value`);
      }
      

}