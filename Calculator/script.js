document.addEventListener('DOMContentLoaded', () => {
    const displayElement = document.getElementById('display');
    let currentInput = '0';

    document.querySelector('.buttons').addEventListener('click', (event) => {
        if (!event.target.matches('button')) return;
        const value = event.target.getAttribute('data-value');

        switch(value) {
            case 'C':
                clearDisplay();
                break;
            case '=':
                calculate();
                break;
            default:
                inputValue(value);
        }
    });

    function inputValue(value) {
        if (currentInput === '0' && value !== '.') {
            currentInput = value;
        } else {
            currentInput += value;
        }
        displayElement.textContent = currentInput;
    }

    function clearDisplay() {
        currentInput = '0';
        displayElement.textContent = currentInput;
    }

    function calculate() {
        try {
            currentInput = eval(currentInput).toString();
            displayElement.textContent = currentInput;
        } catch (error) {
            displayElement.textContent = 'Error';
            currentInput = '0';
        }
    }
});
