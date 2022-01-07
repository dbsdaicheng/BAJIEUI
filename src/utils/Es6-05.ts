// Set 和 Map

// Set类似于数组，但是成员的值都是唯一的，没有重复的值
// Set本身是一个构造函数，用来生成Set数据结构
const arr = new Set([1, 2, 3, 4, 4, 4]);
console.log(Array.from(arr)) // Array.form方法可以将Set结构转为数组(Array.from()方法对一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例)
// Set函数可以接受一个数组作为参数，用来初始化
// Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
// Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
// Set.prototype.clear()：清除所有成员，没有返回值。
// Set.prototype.keys()：返回键名的遍历器
// Set.prototype.values()：返回键值的遍历器
// Set.prototype.entries()：返回键值对的遍历器
// Set.prototype.forEach()：使用回调函数遍历每个成员

// Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键
// 注意点：只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。
const map = new Map();
map.set(['a'], 555);
map.get(['a']) // undefined
// Map.prototype.set(key, value) set方法设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。
// Map.prototype.get(key) get方法读取key对应的键值，如果找不到key，返回undefined。
// Map.prototype.has(key) has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
// Map.prototype.delete(key) delete方法删除某个键，返回true。如果删除失败，返回false。
// Map.prototype.clear() clear方法清除所有成员，没有返回值。
// Map.prototype.keys()：返回键名的遍历器。
// Map.prototype.values()：返回键值的遍历器。
// Map.prototype.entries()：返回所有成员的遍历器。
// Map.prototype.forEach()：遍历 Map 的所有成员。
// 与其他数据结构的互相转换
// （1）Map 转为数组 Map 转为数组最方便的方法，就是使用扩展运算符（...）。
const myMap = new Map()
  .set(true, 7)
  .set({foo: 3}, ['abc']);
console.log(Array.from(myMap))
// [ [ true, 7 ], [ { foo: 3 }, [ 'abc' ] ] ]
// （2）数组 转为 Map 将数组传入 Map 构造函数，就可以转为 Map。
new Map([ [true, 7],[{foo: 3}, ['abc']]])
// Map {
//   true => 7,
//   Object {foo: 3} => ['abc']
// }