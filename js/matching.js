document.getElementById('generate-pin').addEventListener('click', function () {
    var pinNumber = generatePin();
    console.log(pinNumber);
    var showPin = document.getElementById('show-pin');
    showPin.value = pinNumber;
})
var newPin = '';
function generatePin() {
    var pin = Math.round(Math.random() * 10000);
    newPin = pin + '';
    if (newPin.length != 4) {
        return generatePin();
    }
    else {
        return newPin;
    }
}

var pressNum2 = '';
document.getElementById('calc-num').addEventListener('click', function (event) {
    var pressNum = event.target.innerText;
    pressNum2 = document.getElementById('press-num');
    if (isNaN(pressNum)) {
        if (pressNum == 'C' || pressNum == '<') {
            pressNum2.value = '';
            document.getElementById('noo').style.display = 'none';
            document.getElementById('yess').style.display = 'none';


        }
    }
    else {
        pressNum2.value = pressNum2.value + pressNum;
    }


})
document.getElementById('matcher-btn').addEventListener('click', function () {
    var pin1 = document.getElementById('show-pin').value;
    var pin2 = document.getElementById('press-num').value;
    if (pin1 == pin2) {
        document.getElementById('yess').style.display = 'block';
        document.getElementById('noo').style.display = 'none';
    }
    else {
        document.getElementById('noo').style.display = 'block';
        document.getElementById('yess').style.display = 'none';
    }
})


