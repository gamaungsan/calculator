var displayText = '0';
var operated = false;
var first = false;
var myOperand = [];
var operation = '';

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if(b === 0)
        return 'Cannot Divide by ZERO';
    return a/b;
}

function percent(a){
    return a/100;
}

function sign(a){
    return a * -1;
}

function operate(operator, ...operands)
{
    switch(operator)
    {
        case '+':
            return add(operands[0],operands[1]);
        case '-':
            return subtract(operands[1],operands[0]);
        case '*':
            return multiply(operands[0], operands[1])
        case '/':
            return divide(operands[1],operands[0]);
        case '%':
            return percent(operands[0]);
        case '-/+':
            return sign(operands[0]);
    }
}

const numbers = (event) => {
    const display = document.querySelector('#display');
    target = event.target;
    switch(target.id)
    {
        case '0':
            if(displayText == '0' || first){
                first = false;
                display.textContent = '0';
            }
            else
                display.textContent += '0';
            displayText = display.textContent;
            
            break;
        case '1':
            if(displayText == '0' || first){
                first = false;
                display.textContent = '1';}
            else
                display.textContent += '1';
            displayText = display.textContent;
            
            break;
        case '2':
            if(displayText == '0' || first){
                first = false;
                display.textContent = '2';}
            else
                display.textContent += '2';
            displayText = display.textContent;
            
            break;
        case '3':
            if(displayText == '0' || first){
                first = false;
                display.textContent = '3';}
            else
                display.textContent += '3';
            displayText = display.textContent;
            
            break;
        case '4':
            if(displayText == '0' || first){
                first = false;
                display.textContent = '4';}
            else
                display.textContent += '4';
            displayText = display.textContent;
            
            break;
        case '5':
            if(displayText == '0' || first){
                first = false;
                display.textContent = '5';}
            else
                display.textContent += '5';
            displayText = display.textContent;
            
            break;
        case '6':
            if(displayText == '0' || first){
                first = false;
                display.textContent = '6';}
            else
                display.textContent += '6';
            displayText = display.textContent;
            
            break;
        case '7':
            if(displayText == '0' || first){
                first = false;
                display.textContent = '7';}
            else
                display.textContent += '7';
            displayText = display.textContent;
            
            break;
        case '8':
            if(displayText == '0' || first){
                first = false;
                display.textContent = '8';}
            else
                display.textContent += '8';
            displayText = display.textContent;
            
            break;
        case '9':
            if(displayText == '0' || first){
                first = false;
                display.textContent = '9';}
            else
                display.textContent += '9';
            displayText = display.textContent;
            break;
        case '.':
            if(display.textContent.indexOf('.') == -1){
                display.textContent += '.';
                displayText = display.textContent;
            }
            break;
        case '+/-':
            if(displayText == '0' || first){
                first = false;
                display.textContent = '0'}
            else
                display.textContent = sign(Number(display.textContent));
            displayText = display.textContent;
            break;
    }
};

const operationListener = (event) => {
    const display = document.querySelector('#display');
    target = event.target;

    switch(target.id)
    {
        case '+':
            myOperand.push(Number(display.textContent));
            if(operated){
                display.textContent = operate(operator, myOperand.pop(), myOperand.pop());
                myOperand.push(Number(display.textContent));
            }
            operated = true;
            first = true;
            operator = '+';
            break;
        case '-':
            myOperand.push(Number(display.textContent));
            if(operated){
                display.textContent = operate(operator, myOperand.pop(), myOperand.pop());
                myOperand.push(Number(display.textContent));
            }
            first = true;
            operator = '-';
            operated = true;
            break;
        case '/':
            myOperand.push(Number(display.textContent));
            if(operated){
                display.textContent = operate(operator, myOperand.pop(), myOperand.pop());
                myOperand.push(Number(display.textContent));
            }
            first = true;
            operator = '/';
            operated = true;
            break;
        case '*':
            myOperand.push(Number(display.textContent));
            if(operated){
                display.textContent = operate(operator, myOperand.pop(), myOperand.pop());
                myOperand.push(Number(display.textContent));
            }
            first = true;
            operator = '*';
            operated = true;
            break;
        case 'equal':
            if(operated){
                display.textContent = operate(operator, Number(display.textContent), myOperand.pop());
                myOperand.push(Number(display.textContent));
                first = true;
                operated = false;
                operation = '';
            }
            break;
        case '%':
            display.textContent = operate('%', Number(display.textContent));
            break;
    }
}; 

function clean(event)
{
    const display = document.querySelector('#display');
    const target = event.target;
    switch(target.id)
    {
        case 'clear':
            displayText = '0';
            operated = false;
            first = false;
            myOperand = [];
            operation = '';
            display.textContent = displayText;
            break;
        case 'delete':
            displayText = display.textContent;
            if(displayText.length == 2 && Number(displayText) < 0)
                displayText = 0;
            else if(displayText.length == 1)
                displayText = 0;
            else
                displayText = displayText.slice(0,displayText.length - 1);

            display.textContent = displayText;
            break;
    }
}

const btns = document.querySelectorAll('.num');
btns.forEach((btn) => {
    btn.addEventListener('click', numbers);
});

const operationsL = document.querySelectorAll('.operation');
operationsL.forEach((operators) => {
    operators.addEventListener('click', operationListener);
});

const cleaners = document.querySelectorAll('.clean');
cleaners.forEach((cleaner) => {
    cleaner.addEventListener('click', clean);
});