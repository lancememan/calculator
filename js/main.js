document.addEventListener("DOMContentLoaded", () => {
//Calculator UI
    const calc = document.getElementById('calculator');

    let brand = document.createElement('H1');
    brand.textContent = "Lacio";

    let screen = document.createElement('div');
    screen.setAttribute('id','screen');

    calc.appendChild(brand);
    calc.appendChild(screen);

    //Operations
    let opContainer = document.createElement('div');
    opContainer.setAttribute('id','operations');
    
    calc.appendChild(opContainer);
    let operations = {
        "add": '+',
        "subtract": '-',
        "multiply": '*',
        "divide": '/'
    }

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
    let numbers = {
        "7": '7',
        "8": '8',
        "9": '9',
        "4": '4',
        "5": '5',
        "6": '6',
        "1": '1',
        "2": '2',
        "3": '3'
    }

    generateBtns(numbers,'number',numpadLeft);

    //numpadRight
    let other = {
        "clear": 'Clr',
        "equals": '=',
    }
    generateBtns(other,'other',numpadRight);

    function generateBtns(obj,elClass,elParent){
        Object.entries(obj).forEach(entry => {
            //key 'add'; val = '+'
            const [key, value] = entry;
    
            //creatBtn(label, val, elClass, elParent)
            creatBtn(value, key, elClass, elParent);
        });
    }

    function creatBtn(label, val, elClass, elParent) {
        let btn = document.createElement('div');
        btn.setAttribute('data-value', val);
        btn.textContent = label;
        btn.classList.add(elClass,'btn');
        elParent.appendChild(btn);
    }

});