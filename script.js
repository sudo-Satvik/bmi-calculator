var valueHeight = 0; // Initialize the variable
var weight = 0;      // Initialize the variable
var age = 0;         // Initialize the variable
let gender = document.getElementById('toggleB');

function increment(type) {
    const data = document.querySelector(`.${type}-value`);
    let value = parseInt(data.textContent, 10);
    data.textContent = value + 1;

    if (type === 'age') {
        age = value + 1; // Update age directly
    } else if (type === 'weight'){
        weight = value + 1; // Update weight directly
    }
    // console.log(age)
}

function decrement(type) {
    const data = document.querySelector(`.${type}-value`);
    let value = parseInt(data.textContent, 10);
    if (value > 2) {
        data.textContent = value - 1;

        if (type === 'age') {
            age = value - 1; // Update age directly
        } else if (type === 'weight') {
            weight = value - 1; // Update weight directly
        }
        // console.log(weight)
    }
}

function run() {
    let progressValue = document.getElementById('scale');
    let heightInput = document.getElementById('output');
    
    // Update the value directly instead of replacing the input field
    heightInput.value = progressValue.value;
    
    // Parse the valueHeight after setting the input value
    valueHeight = parseInt(heightInput.value, 10);
}

// Make sure to call run() on an event like 'change' on your scale input to ensure the value is updated

// console.log(gender)

gender.addEventListener('change', (e) => {
    if (e.target.checked) {
        gender.value = 'on';        // female
    } else {    
        gender.value = 'off';       // male
    }
});

const buttonCalc = document.querySelector('.btn-submit');

buttonCalc.addEventListener('click', (e) => {
    e.preventDefault();
    
    const main = document.querySelector('.containers');
    main.classList.add('none-d');
    const result = document.querySelector('.containered');
    result.classList.remove('none-d');

    // Finding BMI
    const bmi = (weight / ((Math.pow(valueHeight, 2)) / 10000));
    const integerPart = Math.floor(bmi); // Extract integer part
    const decimalPart = (bmi % 1).toFixed(2).substring(2); // Extract decimal part with 2 decimal places
    
    // Update the display with integer and decimal parts
    document.querySelector('.b-d').innerHTML = `${integerPart}`;
    document.querySelector('.a-d').innerHTML = `.${decimalPart}`;

    let bmiT = document.querySelector('.bmi-text');

    if (bmi < 18.6){
        bmiT.innerHTML = `UnderWeight`;
        bmiT.classList.add('yellow')
      } else if (bmi > 18.6 && bmi < 24.9 ){
        bmiT.innerHTML = `Normal`;
        bmiT.classList.add('green')
      } else{
        bmiT.innerHTML = `Overweight`;
        bmiT.classList.add('red')
      }
});