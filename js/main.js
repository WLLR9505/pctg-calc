var button = new Array(0);
var btns = document.getElementsByClassName('btn');
var result = document.getElementById('result');
var info = document.getElementById('sub-result');

var switcher = document.getElementById('switcher');
switcher.addEventListener('click', () => {
    updateResult(percentInput.innerText, amountInput.innerText);
    switcher.checked ? info.style.visibility = 'visible' : info.style.visibility = 'hidden';
})
//true : OFF
//false : OF

var percentInput = document.getElementById('percent');

var inputFocus = percentInput;
percentInput.addEventListener('click', () => {
    amountInput.style.borderBottomColor = '#00a1a1';
    percentInput.style.borderBottomColor = 'cyan';
    inputFocus = percentInput;
})

var amountInput = document.getElementById('amount');
amountInput.addEventListener('click', () => {
    percentInput.style.borderBottomColor = '#00a1a1';
    amountInput.style.borderBottomColor = 'cyan';
    inputFocus = amountInput;
})

for (var i = 0; i < btns.length; i++) {
    button.push(btns[i]);
}

button.forEach((b) => {
    b.addEventListener('click', () => {
    updateValue(inputFocus, b.innerText); //faz update do campo selecionado
    updateResult(percentInput.innerText, amountInput.innerText);
    })
})

function updateValue(focus, value) {
    if (value == 'C') {
        focus.id == 'percent' ? focus.innerText = '%': focus.innerText = '0';
        return
    }

    if (focus.id == 'percent') {
        focus.innerText = focus.innerText.replace('%', value) + '%';
    } else {
        focus.innerText === '0' ? focus.innerText = value : focus.innerText += value;
    }
}

function updateResult( p, a) {
    p = p.replace('%', '');
    let r = (Number(p) / 100) * Number(a);
    if (switcher.checked == true) { // OFF
        result.innerText = a - r;
        info.innerText = 'You save: ' + r;
    } else { // OF
        result.innerText = r;
    }
}
