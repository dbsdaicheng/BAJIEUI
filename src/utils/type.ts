//判断类型的三种方式 typeof instanceOf Object.prototype.toString.call(对象,对象)
const array1 = [1, 2, 3, 4];
const fun = () => {};
const object: Object = {
  name: "张三",
  age: 27,
  eat: () => {
    console.log("吃饭");
  }
};
const pemty: any = null;
const reg = /ab+c/;
console.log(typeof array1); // 局限性
console.log(typeof fun);
console.log(typeof object);
console.log(typeof pemty);
console.log(typeof reg); //局限性
console.log(array1 instanceof Array);
console.log(fun instanceof Object);
console.log(fun instanceof Function);
console.log(object instanceof Object);
console.log(pemty instanceof Object); // 局限性
console.log(reg instanceof RegExp); 
console.log(Object.prototype.toString.call(array1, array1));
console.log(Object.prototype.toString.call(fun, fun));
console.log(Object.prototype.toString.call(object, object));
console.log(Object.prototype.toString.call(pemty, pemty));
console.log(Object.prototype.toString.call(reg, reg));