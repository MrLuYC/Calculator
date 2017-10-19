/**
 * Created by 卢耀川 on 2017/10/18.
 */

//  记录第一个数字
var number = 0;
//  记录运算符
var operator = 0;
//  上一个计算结果
var preResult = 0;
//  是否有小数点
var isPoint = false;

window.onload = function () {

  var input = document.getElementById('in');
  //  把输入框的显示设为0
  input.value = 0;
  //  禁止用户直接输入数字
  input.readOnly = 'readonly';
};

/**
 * 往输入框输入数字
 * @param value 输入的数字
 */
function inputNumber(value) {

  var input = document.getElementById('in');

  var inputNumber = null;

  if (!isPoint) {
    inputNumber = parseFloat(input.value);
  } else {
    inputNumber = input.value;
  }

  if (preResult !== 0) {
    preResult = 0;
    input.value = 0;
    inputNumber = 0;
  }

  if (inputNumber === 0) {
    input.value = value;
  } else {
    input.value = '' + inputNumber + value;
  }
}

/**
 * 计算当前运算符
 * @param operator 运算符
 */
function operaing(op) {
  var input = document.getElementById('in');
  var inputNumber = parseFloat(input.value);

  number = inputNumber;
  input.value = 0;
  operator = op;
  isPoint = false;
}

/**
 * 计算结果
 */
function compute() {

  var input = document.getElementById('in');
  var inputNumber = parseFloat(input.value);

  console.log(number, inputNumber, operator);

  switch (operator) {
    case 1:
      input.value = preResult = number + inputNumber;
      break;
    case 2:
      input.value = preResult = number - inputNumber;
      break;
    case 3:
      input.value = preResult = number * inputNumber;
      break;
    case 4:
      input.value = preResult = number / inputNumber;
      break;
  }

  operator = 0;
  isPoint = false;
}

/**
 * 归零
 */
function zero() {
  var input = document.getElementById('in');
  input.value = 0;
  number = 0;
  preResult = 0;
  operator = 0;
}

/**
 * 小数点
 */
function point() {

  if (!isPoint) {
    var input = document.getElementById('in');
    var inputNumber = parseFloat(input.value);

    input.value = '' + inputNumber + '.'
    isPoint = true;
  }

}