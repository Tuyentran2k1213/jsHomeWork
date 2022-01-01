var height = document.getElementById('height');
var width = document.getElementById('width');
var perimeter = document.getElementById('perimeter');
var area = document.getElementById('area'); 
function periCal() {
    var lengthHeight = Number(height.value);
    var lengthWidth = Number(width.value);
    var valuePeri;
    if(lengthHeight == '' || lengthWidth == '') {
        valuePeri = 'Hãy nhập đầy đủ chiều dài và chiều rộng của hình chữ nhật';
    } else {
        valuePeri = 'Chu vi của hình chữ nhật là: <b>' + ((lengthWidth + lengthHeight) * 2) + '</b>';
    }
    perimeter.innerHTML = valuePeri;
}
function areaCal() {
    var lengthHeight = Number(height.value);
    var lengthWidth = Number(width.value);
    var valueArea;
    if(lengthHeight == '' || lengthWidth == '') {
        valueArea = 'Hãy nhập đầy đủ chiều dài và chiều rộng của hình chữ nhật';
    } else {
        valueArea = 'Diện tích của hình chữ nhật là: <b>' + (lengthWidth * lengthHeight) + '</b>';
    }
    area.innerHTML = valueArea;
}
function reset() {
    if(width.value == '' || height.value == ''){
        perimeter.innerHTML = '';
        area.innerHTML = '';
    }
}
