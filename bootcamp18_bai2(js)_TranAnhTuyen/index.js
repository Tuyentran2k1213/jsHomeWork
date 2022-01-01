function numCount() {
    var number = document.getElementsByClassName('input_num');
    var output = document.getElementById('salary');
    var textLine, num = 0, average;
    for(i = 0; i < number.length; i++){
         if(number[i].value === ''){
            textLine = 'Hãy nhập đầy đủ 5 số';
            num = '';
            break;
         } else{
             textLine = 'Giá trị trung bình của 5 số là: ';
             num += (number[i].value / 5);
         }
    }
    output.innerText = textLine + num;
}
function reset() {
    var number = document.getElementsByClassName('input_num');
    var output = document.getElementById('salary');
    for(i = 0; i < number.length; i++){
        if(number[i].value === ''){
            output.innerHTML = '';
        }
    }
}