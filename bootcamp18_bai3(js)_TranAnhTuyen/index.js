function moneyCal() {
    var USD = document.getElementById('inp');
    var output = document.getElementById('VNDT');
    var warn = document.getElementById('warning');
    if(USD.value == ''){
        warn.innerText = 'Hãy nhập số lượng USD vào';
    } else{
        output.value = USD.value * 23500;
    }
}
function reset() {
    var USD = document.getElementById('inp').value;
    var warn = document.getElementById('warning');
    warn.innerHTML = USD === '' ? '' : '';
}
