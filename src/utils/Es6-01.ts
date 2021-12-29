// 对象解构、箭头函数
// 解构赋值的基本原则
// 数组的元素是按次序排列的，变量的取值由它的位置决定；
// 对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
const dog = {
  dogName: "小黄",
  dogAge: 3,
  eat: () => {
      console.log("吃饭");
  }
}
const color = ["blue", "skyblue", "green", "red"];
const { dogName, dogAge } = dog;
console.log(dogName, dogAge);
console.log(...color);
// 作用
// (1)交换变量的值
let x = 1;
let y = 2;
[x, y] = [y, x];
console.log(x, y);
// （2）从函数中返回多个值
function fun1 () {
  return {
      foo: 1,
      bar: 2,
  }
}
// （3）函数参数的定义
function fun2 ({ x, y, z}: any) {}
// （4）函数参数的默认值
function fun3 ({ x = 1, y = 2, z = 3}) {}

// 箭头函数
// 箭头函数表达式的语法比函数表达式更简介，并且没有自己的this，arguments, super。函数
// 表达式更适用于那些本来需要匿名函数的地方，并且它不能用作构造函数
