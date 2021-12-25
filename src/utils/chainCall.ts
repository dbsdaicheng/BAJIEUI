// 如何实现链式调用
class Person1 {
  name: string;
  age: number;
  constructor (name: string, age: number) {
      this.name = name;
      this.age = age;
  }
  info () {
      console.log(`${this.age}的${this.name}`);
      return this;
  }
  start () {
      console.log("开始工作");
      return this;
  }
  eat () {
      console.log("开始吃饭");
      return this;
  }
  study () {
      console.log("开始学习");
      return this;
  }
}
const person = new Person1("张三", 27);
person.eat().info().start().study();