const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "=","sin", "cos", "tan","**", "exp", "sqrt","on", "off", "ln", "!"];
let output = "";



// define function to calculate based on button click
const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        // If output has '%', replace with '/100' before evaluating.
        output = eval(output.replace("%", "/100"))
    
        
        }if (btnValue === "AC") {
        output ="";
    }
    else if (btnValue === "DEL") {
        // if DEL button is clicked, remove te last the last character from the output
        output = output.toString().slice(0, -1);
    
    }
    else if(btnValue === 'sin'){
    output = Math.sin(display.value*(Math.PI/180))
    }
    else if(btnValue === 'cos'){
        output = Math.cos(display.value*(Math.PI/180))
        }
        else if(btnValue === 'tan'){
            output = Math.tan(display.value*(Math.PI/180))
            }
        else if(btnValue === 'log'){
            output= Math.log(output)
        }
        else if(btnValue === '**'){
            output= Math.pow(output, 2)
        }
        else if(btnValue === 'sqrt'){
            output= Math.sqrt(output)
        }
        else if(btnValue === 'mod'){
            output+= "%"
        }

    else {
        // if output is empty and button is specialChars then return
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;


    }
    display.value= output;
};

// Add event listeners to buttons, call calculate() on click
buttons.forEach((button) => {
    // Button click listener calls calculate() with dataset value as argument.
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
