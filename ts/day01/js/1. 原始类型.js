"use strict";
// 布尔类型
var bol = true;
console.log(bol);
// 数值类型
var num = 9;
console.log(num);
// 数值类型 - 其他进制
num = 484;
console.log(num);
num = 10;
console.log(num);
num = 0xf00d;
console.log(num);
// 字符串
var str = 'alibaba';
console.log(str);
// 空值【 空值没有任何类型，譬如说当一个函数没有返回值的时候他的类型为 void 】
function sayHello() {
    console.log('空值');
}
console.log(sayHello());
// undefined 可以赋值给 void
var variable = undefined;
console.log(variable);
// variable = null; // Type 'null' is not assignable to type 'void'.
// null 和 undefined 可以赋值给 any
var _variable = null;
console.log(_variable);
_variable = undefined;
console.log(_variable);
// symbol 类型
var symbol = Symbol('s');
console.log(symbol);
// bigint 类型
var bigint = BigInt(1);
console.log(bigint);
