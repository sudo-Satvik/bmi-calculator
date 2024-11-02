// Initialize variables
var valueHeight = 50;
var weight = 50;
var age = 20;
let gender = document.getElementById('toggleB');

function increment(type) {
    const data = document.querySelector(`.${type}-value`);
    let value = parseInt(data.textContent, 10);
    data.textContent = value + 1;

    if (type === 'age') {
        age = value + 1;
    } else if (type === 'weight') {
        weight = value + 1;
    }
}

function decrement(type) {
    const data = document.querySelector(`.${type}-value`);
    let value = parseInt(data.textContent, 10);
    if (value > 2) {
        data.textContent = value - 1;

        if (type === 'age') {
            age = value - 1;
        } else if (type === 'weight') {
            weight = value - 1;
        }
    }
}

function run() {
    let progressValue = document.getElementById('scale');
    let heightInput = document.getElementById('output');
    
    // Set valueHeight based on the slider's current value
    valueHeight = parseInt(progressValue.value, 10);
    heightInput.value = valueHeight;
}

// Ensure `run()` is called when 'scale' changes
document.getElementById('scale').addEventListener('input', run);

gender.addEventListener('change', (e) => {
    gender.value = e.target.checked ? 'on' : 'off';
});

const buttonCalc = document.querySelector('.btn-submit');
buttonCalc.addEventListener('click', (e) => {
    e.preventDefault();

    const main = document.querySelector('.containers');
    main.classList.add('none-d');
    const result = document.querySelector('.containered');
    result.classList.remove('none-d');

    // Calculate BMI
    const bmi = (weight / ((Math.pow(valueHeight, 2)) / 10000));
    const integerPart = Math.floor(bmi);
    const decimalPart = (bmi % 1).toFixed(2).substring(2);
    
    // Display the result
    document.querySelector('.b-d').innerHTML = `${integerPart}`;
    document.querySelector('.a-d').innerHTML = `.${decimalPart}`;

    let bmiT = document.querySelector('.bmi-text');
    bmiT.classList.remove('yellow', 'green', 'red'); // Remove previous color class

    if (bmi < 18.6) {
        bmiT.innerHTML = `UnderWeight`;
        bmiT.classList.add('yellow');
    } else if (bmi > 18.6 && bmi < 24.9) {
        bmiT.innerHTML = `Normal`;
        bmiT.classList.add('green');
    } else {
        bmiT.innerHTML = `Overweight`;
        bmiT.classList.add('red');
    }
});
