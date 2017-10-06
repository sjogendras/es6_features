//without arguments
var zeroArgArrowFun = _ => console.log('Arrow function without arguments using _');
zeroArgArrowFun();

zeroArgArrowFun = () => console.log('Arrow function1 without arguments using ()');
zeroArgArrowFun();

var oneArgArrowFun = arg1 => console.log('Arrow function with one argument which is :' + arg1);
oneArgArrowFun('Test Arg');

oneArgArrowFun = (arg1) => console.log('Arrow function with one argument which is :' + arg1);
oneArgArrowFun('Test Arg');

var manyArgArrowFun = (num1, num2) => { return num1 + num2; }
console.log('Sum of 10 and 20 is :' +manyArgArrowFun(10,20));

let array = [1,7,98,5,4,2]
// ES5 way
var moreThan20 = array.filter(function (num) {
    return num > 20
});

//ES6 way
moreThan20 = array.filter(num => num > 20)
console.log(moreThan20);