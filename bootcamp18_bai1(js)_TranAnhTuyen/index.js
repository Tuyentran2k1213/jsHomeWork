function salaryCount() {
    var day = document.getElementById('inp').value;
    var output = document.getElementById('salary');
    output.innerHTML = day === ''? 'Hãy nhập số ngày làm việc vào' : 'Tiền lương của bạn trong <b>' + day + ' ngày</b> là: <b>' + (day * 100000) + '</b>VND';
}
function reset() {
    var day = document.getElementById('inp').value;
    var output = document.getElementById('salary');
    output.innerHTML = day === '' ? '' : '';
}
