const billValue = document.getElementById('billValue')! as HTMLInputElement;
const people = document.getElementById('people')! as HTMLInputElement;
const serviceQuality = document.getElementById('serviceQuality')! as HTMLSelectElement;
const calculate = document.getElementById('calculate')! as HTMLButtonElement;
const resultTip = document.getElementById('resultTip')! as HTMLInputElement;
const resultTotal = document.getElementById('resultTotal')! as HTMLInputElement;
const clearButton = document.getElementById('clearButton')! as HTMLButtonElement;
const form = document.getElementById('mainForm')! as HTMLFormElement;

enum Quality {
    BAD = 'bad',
    AVERAGE = 'average',
    GOOD = 'good',
    EXCELLENT = 'excellent',
}

function getPercentage(p: string){
    let result = 0;

    switch(p) {
        case Quality.BAD: result = 5;
        break;
        case Quality.AVERAGE: result = 10;
        break;
        case Quality.GOOD: result = 15;
        break;
        case Quality.EXCELLENT: result = 20;
        break;
    }

    return result / 100;
}

function getValue(value: number, divided: number, percentage: string){
    let result = value * getPercentage(percentage);

    if (divided > 0) {
        result /= divided;
    }

    return result.toFixed(2).toString();
}

function getTotalValue(tip: number){
    let result = tip + +billValue.value;
    return result.toFixed(2).toString();
}

calculate.addEventListener('click', () => {
    let tip = getValue(+billValue.value, +people.value, serviceQuality.value);
    let total = getTotalValue(+tip);

    resultTip.setAttribute('value', 'Tip: ' + tip);
    resultTotal.setAttribute('value', 'Total: ' + total);
});

clearButton.addEventListener('click', () => {
    form.reset();
    resultTip.setAttribute('value', '');
    resultTotal.setAttribute('value', '');
});