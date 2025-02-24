document.addEventListener("DOMContentLoaded", () => {
//Calculator UI
    const calc = document.getElementById('calculator');

    let brand = document.createElement('H1');
    brand.textContent = "PAUTANG";

    let screen = document.createElement('div');
    screen.setAttribute('id','screen');

    calc.appendChild(brand);
    calc.appendChild(screen);

    //Operations
    let opContainer = document.createElement('div');
    opContainer.setAttribute('id','operations');
    
    calc.appendChild(opContainer);
    let operations = ["+", "-", "*","/"]

    generateBtns(operations,'operations',opContainer);    

    //numpad layout
    let numpad = document.createElement('div');
    let numpadLeft = document.createElement('div');
    let numpadRight = document.createElement('div');
    numpad.setAttribute('id','numpad');
    numpadLeft.setAttribute('id','numpadLeft');
    numpadRight.setAttribute('id','numpadRight');
    numpad.appendChild(numpadLeft);
    numpad.appendChild(numpadRight);
    calc.appendChild(numpad);

    //numpadLeft
    let numbers = ["7","8","9","4","5","6","1","2","3","0","."]

    generateBtns(numbers,'number',numpadLeft);

    //numpadRight
    let other = ["Clr","="]
    generateBtns(other,'other',numpadRight);

    function generateBtns(arr,elClass,elParent){
        arr.forEach(value => {
            creatBtn(value, elClass, elParent); // Use value as both label and data-value
        });        
    }

    function creatBtn(val, elClass, elParent) {
        let btn = document.createElement('div');
        btn.setAttribute('data-value', val);
        btn.textContent = val;
        btn.classList.add(elClass,'btn');
        elParent.appendChild(btn);
    }

    //variables
    var num ='0';
    var num2 ='0';
    var op = '';

    const btns = document.getElementsByClassName('btn');
    Array.from(btns).forEach(btn => {
        btn.addEventListener('click', pressed_btn);
    });

    function pressed_btn(event){

        let type;
        let val = this.dataset.value;

        if(this.classList.contains('operations')) {
            type = 'operations'
        } else if(this.classList.contains('number')) {
            type = 'number'
        } else {
            type = 'other'
        }

        if(type == 'number') {
            if(!op) {
                num = (num == '0') ? num = val : num += val ;
                show_on_screen(num);

            } else {
                num2 = (num2 == '0') ? num2 = val : num2 += val ;
                show_on_screen(num + op + num2);
            }
        }

        if(type == 'operations') {            
            if(num && op && num2) {
                //pass the next op and lable to show after calculate
                calculate(val);
            } else {
                op = val;
                show_on_screen(num + op);
            }
        }

        if(type == 'other') {
            if(val == 'Clr') {
                clear();
                show_on_screen('0');
            } else {
                if(num && op && num2) {
                    calculate();
                }
            }
        }
        
    }
    function clear() {
        num ='0';
        num2 ='0';
        op = '';
    }
    function calculate(next_op) {
        let result;
        let x = parseFloat(num);
        let y = parseFloat(num2);

        switch (op) {
            case '+':            
                result = x + y;
                break;
        
            case '-':
                result = x - y;
                break;

            case '*':
                result = x * y;
                break;

            case '/':
                result = x / y;
                break;

            default:
                break;
        }
        clear();
        num = result;
        if(next_op) {
            op = next_op;
            show_on_screen(result + next_op);
        } else {
            show_on_screen(result);
        }        
    }

    //show text on screen
    function show_on_screen(string){
        screen.textContent = string;
    }

    show_on_screen(num);
});