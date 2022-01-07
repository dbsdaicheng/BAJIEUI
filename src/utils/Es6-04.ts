//async和await
// async 和 await 干了什么？
// async函数返回的是一个Promise对象，如果在函数中return一个直接量，async会把这个直接量通过Promise.resolve()封装成Promise对象
//    Promise在没有await的情况下执行async函数，它会立即执行，返回一个Promise对象，并且，绝不会阻塞后面的语句，这和普通返回Promise对象的函数
//    并无二致
// await等待的是一个表达式，这个表达式的计算结果是Promise对象或者其他值（就是没有特殊限定）
//    因为async函数返回一个Promise对象，所以await可以用于等待一个async函数的返回值——这也可以说是await在等async函数，但要清楚，它等的实际上是
//    一个返回值。注意到await不仅仅用于等Promise对象，它可以等任意表达式的结果，所以，await后面实际是可以接普通函数调用或者直接量的。
//    await是个运算符，用于组成表达式，await表达式的运算结果取决于它等的东西
//      如果等到的不是一个Promise对象，那await表达式的运算结果就是它等到的东西
//      如果等到的是一个Promise对象，await就会阻塞后面的语句，等着Promise对象resolve，然后得到resolve的值，作为await表达式的运算结果
// 为什么使用async和await？
//  使用await可以解决Promise的回调地狱
//  Promise通过then链来解决多层回调的问题，但是层数多了，就会显得难以阅读，这时候用async和await就能解决
// 注意点：
//    await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中

