// 什么是继承？继承就是子类拥有父类的属性和方法
class Person {
  name: "张三"
  age: 27
  eat() {
    console.log("吃饭")
  }
}

class Students extends Person {
  study() {
    console.log("学习");
  }
  play() {
    console.log("打游戏");
  }
}

//如何实现原型链继承
 //构造函数和原型链结合的方式实现属性和方法的继承
 function Father (name: String, age:number) {
  this.name = name;
  this.age = age;
}
const obj = new (Father as any)("张三", 27);
obj.eat();
Father.prototype.status = "开心";
Father.prototype.study = function () {
  console.log("学习");
}
obj.study();
console.log(obj);
console.log(Object.getPrototypeOf(obj)) //返回参数的内部特性{[Prototype]}的值
console.log(Object.hasOwnProperty("name")); //ture 来自实例
console.log(Object.hasOwnProperty("status")); //false 来自原型
// Object.hasOwnProperty 判断实例对象上是否拥有这个属性，返回值为布尔值