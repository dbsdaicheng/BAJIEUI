// 数组常用的方法和数组的去重
// 数组常用的方法 reduce filter map forEach 

// forEach方法的第一个参数是一个方法（方法中的第一个参数是数组中正在处理的当前元素，
// 第二个参数是数组正在处理的元素的下标， 第三个参数是forEach正在操作的数组） 第二个参数是thisArg（可以忽略）；返回值是undefined
const array = [1, 2, 3, 4, 87, 2, 2, 3, 4 ,5];
const a = array.forEach((item, index, me) => {
    console.log(item, index, me);
})
console.log(a);

// filter方法的第一个参数是一个回调方法（方法中的第一个参数是数组中正在处理的当前元素，
// 第二个参数是数组正在处理的元素的下标，第三个参数是filter正在操作的数组） 第二个参数是thisArg（可以忽略）；
// 返回值是一个新的通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组
const b = array.filter((item, index, me) => {
    console.log(item, index, me);
    return item === 2;
})
console.log(b);

// map方法的第一个参数是一个回调方法（方法中的第一个参数是数组中正在处理的当前元素，
// 第二个参数是数组正在处理的元素的下标，第三个参数是map正在操作的数组）第二个参数是thisArg（可以忽略）
// 返回值是由原数组每个元素执行回调函数的结果组成的新的数组
const c = array.map((item, index, me) => {
    console.log(item, index, me);
    return item += 2;
})
console.log(c);

// reduce方法的第一个参数是一个回调方法（方法中的第一个参数是累加器，
// 第二个参数数组中正在处理的当前元素， 第三个参数数组的下标， 第四个参数是当前数组）；
// 第二个参数作为第一次调用 callback函数时的第一个参数的值。 
// 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 reduce 将报错。
const d = array.reduce((acc, current, index, arr) => {
    console.log(acc, current, index, arr);
    return acc += current; //数组求和
}, 0)
console.log(d);


// 数组去重的方法
// 1.使用Set对象： Set对象是值的集合，你可以按照插入的顺序迭代它的元素。 Set中的元素只会出现一次，即 Set 中的元素是唯一的。
// 因为Set对象类似于数组，因此需要通过展开运算符将其转换为数组
const e = new Set(array);
console.log([...e]);

// 通过循环遍历的方式进行数组去重
function setArray(array: Array<any>) {
    let f: any = [];
    array.forEach((item: any) => {
        if (!f.includes(item)) {
            f.push(item);
        }
    })
    return f;
}
console.log(setArray(array));

// 利用reduce的方式去重
const g = array.reduce((acc, current, index, arr) => {
    return acc.includes(current) ? acc : [...acc, current];
}, [])
console.log(g);