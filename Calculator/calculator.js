let expression = '';
let history = [];
let historyVisible = false;

function addToDisplay(value) {
    expression += value;
    document.getElementById('display').innerText = expression;
}

function calculate() {
    try {
        const result = eval(expression);
        document.getElementById('display').innerText = result;
        history.push(expression + ' = ' + result);
        document.getElementById('historyList').innerHTML = '';
        history.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            document.getElementById('historyList').appendChild(li);
        });
        expression = '';
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
        expression = '';
    }
}

function clearDisplay() {
    expression = '';
    document.getElementById('display').innerText = '0';
}

function clearHistory() {
    history = [];
    document.getElementById('historyList').innerHTML = '';
}

function calculatePercentage() {
    try {
        const result = eval(expression) / 100;
        document.getElementById('display').innerText = result;
        history.push(expression + '% = ' + result);
        document.getElementById('historyList').innerHTML = '';
        history.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            document.getElementById('historyList').appendChild(li);
        });
        expression = '';
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
        expression = '';
    }
}

function calculateSquareRoot() {
    try {
        const result = Math.sqrt(eval(expression));
        document.getElementById('display').innerText = result;
        history.push('√(' + expression + ') = ' + result);
        document.getElementById('historyList').innerHTML = '';
        history.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            document.getElementById('historyList').appendChild(li);
        });
        expression = '';
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
        expression = '';
    }
}

function toggleHistory() {
    const historySection = document.getElementById('historySection');
    historyVisible = !historyVisible; // Toggle visibility state
    if (historyVisible) {
        historySection.style.display = 'block'; // Show history
    } else {
        historySection.style.display = 'none'; // Hide history
    }
}