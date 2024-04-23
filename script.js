let resultField = document.getElementById('field');

document.querySelectorAll('#btn').forEach(button => {
    button.addEventListener('click', () => {
        handleButtonClick(button.getAttribute('value'));
    });
});

document.addEventListener('keydown', event => {
    const key = event.key;
    if (!isNaN(key) || key === '.' || '+-/*'.includes(key)) {
        handleButtonClick(key);
    } else if (key === 'Backspace') {
        handleButtonClick('del');
    } else if (key === 'Enter') {
        handleButtonClick('=');
    } else if (key === 'Escape') {
        handleButtonClick('C');
    }
});

//Функция, которая вызывается при нажатии
function handleButtonClick(value) {
    if (value === 'C') {
        clearField();
    } else if (value === 'del') {
        del();
    } else if (value === '=') {
        calculate();
    } else {
        num(value);
    }
}

// Функция полной очистки поля ввода
function clearField() {
    resultField.innerText = '0';
}

// Функция ввода значений
function num(symbol) {
    if (resultField.innerText === '0' && symbol !== '.') {
        resultField.innerText = '';
    }
    resultField.innerText += symbol;
}

// Функция частичного удаления значения
function del() {
    resultField.innerText = resultField.innerText.slice(0, -1);
    if (resultField.innerText === '') {
        resultField.innerText = '0';
    }
}

// Функция вычисления
function calculate() {
    try {
        resultField.innerText = eval(resultField.innerText);
    } catch (error) {
        resultField.innerHTML = 'Ошибка вычисления';
    }
}