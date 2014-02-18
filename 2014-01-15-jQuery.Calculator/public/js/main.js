$(document).ready(initialize);

function initialize(){
  $('#calc').click(calculate);
  $('#clear').click(clear);
  $('#sum').click(sum);
}

function sum(){
  var s = 0;

  $('.numbers').each(function(index, element){
    s += parseFloat(element.value);
  });

  $('#result').text(s);
}

function clear(){
  $('#num1').val('');
  $('#num1').focus();
  $('#num2').val('');
  $('#op').val('');
  $('#result').text('');
}

function calculate(){
  var num1 = $('#num1').val();
  num1 = parseFloat(num1);
  var num2 = $('#num2').val();
  num2 = parseFloat(num2);
  var op = $('#op').val();

  var result = compute(num1, num2, op);
  $('#result').text(result);
}

function compute(a, b, operator){
  var result;

  switch(operator){
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
  }

  return result;
}

