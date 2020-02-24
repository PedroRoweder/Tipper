"use strict";
var billValue = document.getElementById('billValue');
var people = document.getElementById('people');
var serviceQuality = document.getElementById('serviceQuality');
var calculate = document.getElementById('calculate');
var resultTip = document.getElementById('resultTip');
var resultTotal = document.getElementById('resultTotal');
var clearButton = document.getElementById('clearButton');
var form = document.getElementById('mainForm');
var Quality;
(function (Quality) {
    Quality["BAD"] = "bad";
    Quality["AVERAGE"] = "average";
    Quality["GOOD"] = "good";
    Quality["EXCELLENT"] = "excellent";
})(Quality || (Quality = {}));
function getPercentage(p) {
    var result = 0;
    switch (p) {
        case Quality.BAD:
            result = 5;
            break;
        case Quality.AVERAGE:
            result = 10;
            break;
        case Quality.GOOD:
            result = 15;
            break;
        case Quality.EXCELLENT:
            result = 20;
            break;
    }
    return result / 100;
}
function getValue(value, divided, percentage) {
    var result = value * getPercentage(percentage);
    if (divided > 0) {
        result /= divided;
    }
    return result.toFixed(2).toString();
}
function getTotalValue(tip) {
    var result = tip + +billValue.value;
    return result.toFixed(2).toString();
}
calculate.addEventListener('click', function () {
    var tip = getValue(+billValue.value, +people.value, serviceQuality.value);
    var total = getTotalValue(+tip);
    resultTip.setAttribute('value', 'Tip: ' + tip);
    resultTotal.setAttribute('value', 'Total: ' + total);
});
clearButton.addEventListener('click', function () {
    form.reset();
    resultTip.setAttribute('value', '');
    resultTotal.setAttribute('value', '');
});
