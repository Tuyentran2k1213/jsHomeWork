var totalText = document.getElementById('total');
var input = document.getElementById('inp');
function calNum() {
    var inputNum = Number(input.value);
    hundred = Math.floor(inputNum / 100);
    ten = Math.floor((inputNum % 100) / 10);
    sec = (inputNum % 100) % 10;
    totalText.innerHTML = 'Tổng các kí số của số này là: <b>' +  (hundred + ten + sec) + '</b>';
}
function checkNum() {
    if(isNaN(input.value)){
        totalText.innerText = 'Dữ liệu nhập phải là số có ba chữ số';
    } else if(input.value == ''){
        totalText.innerText = 'Hãy nhập số có ba chữ số bất kì';
    } else {
        calNum();
    }
}
function reset() {
    totalText.innerText = input.value == '' ? '' : '';
}