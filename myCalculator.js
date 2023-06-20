


const screenDisplay_JS = document.querySelector(".screen");
const buttons_JS = document.querySelectorAll("button");


let calculation = [];       //array vacio
let accumulativeCalculation;    

function calculate(button) {

    const value = button.textContent;

    if (value == "CLEAR") {

        calculation = [];                   //*** vaciamos el array.
        screenDisplay_JS.textContent = ".";    //reiniciamos el screen con el punto por defecto.
    
    } else if (value == "=") {
        screenDisplay_JS.textContent = eval(accumulativeCalculation)   //*** realiza la operacion. Como es String, usamos metodo eval() de JS, que ejectua string como argumento (como numeros, aqui).
    
    } else {    //para los botones 1, 2, 3, 4, 5, 6, 7, 8, 9, +, -, *, /, es decir, cualquier boton que no sea CLEAR o =. 
    calculation.push(value);    //en caso de q nos haya pulsado CLEAR ni =, significa que sigue empujando (push) el value en el array calculation.
    accumulativeCalculation = calculation.join("");     //unimos los elementos del array calculation, para que no aparezcan los numeros con comas, tipo 3,4,5,1, sino 3451. Lo almacenamos en accumlativeCalculation.
    screenDisplay_JS.textContent = accumulativeCalculation;  //asignamos el accumulativeCalculation al screen, usando textCOntent. 
    }

}

buttons_JS.forEach(button => button.addEventListener("click", () => calculate(button) ))


//---