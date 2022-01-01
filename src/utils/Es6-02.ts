// promise相关的问题，手写promise
// promise的三个状态： pending resolved rejected

// 改变这三个状态必须通过resolve()或者rejected()这两个方法，resolve()可以将pendding转换为resolved，
// rejected()可以将pedding转换成rejected。并且将得到的数值存储在内部的data里面。并且这状态一旦转换是转换是不可逆的。

// promise的原型对象含有then，catch这两个方法
// then这个方法可以接受两个参数，一个成功的回调，一个失败的回调。也就是onResolved和onRejected，返回一个promise对象，执行方式是异步的
// 执行then的时候，也会有三个可能，一个是状态为resolve时，一个是状态为rejected时，一个是状态为pending
// catch这个方法只可以接受一个参数，失败的回调，也就是onRejectd
// promise的结果根据执行的结果返回

// 构造函数需要参数，参数必须是一个函数类型，这里面我们叫做handler，对handler进行验证，如果不是函数抛出异常
// handler函数需要两个形式参数 对应的是类自身的两个方法
// relove方法
//  该方法只能在promise状态为pending的时候调用，如果promise已经有了状态，则不允许调用
//  调用方法promise的状态改为fulfilled
//  调用该方法会得到一个终值value
//  该方法里面会用到实例的this，在调用的时候需要改变this的指向
// reject方法
//  该方法只能在promise状态为pending的时候调用，如果promise已经有了状态，则不允许调用
//  调用方法promise的状态变为rejected
//  调用该方法会得到一个拒因reason
//  该方法可能异步调用
//  该方法里面会用到实例的this，在调用的时候需要改变this的指向
// 实例里面的属性
//  value 终值
//  reason 拒因
//  state 状态
//      状态可以作为静态的属性，也可以作为实例的属性
//      状态会多次用于判断，使用常量保存
// 实例里面的方法
//  then
//  cactch
//  finally
// 类自身的方法
//  resolve
//  reject

// then方法接受两个参数，两个参数类型是函数
// onResolved
//    需要对onResolved类型进行校验，如果不是一个函数就设置为默认函数，这个函数是获取终值
//    该函数在promise状态为fulfilled时调用，传入终值
// onRejected
//    需要对onRejected类型进行验证，如果不是一个函数就设置为默认函数，这个函数时获取终值
//    该函数在promise状态为rejected时候调用，传入拒因


// then 方法需要支持多次调用
// new Promise中的handler需要支持异步调用
// then方法需要支持链式调用
// then方法如果只传递一个参数，也需要返回正确的结果
// 需要支持链式调用
//    支持链式调用的条件
//      只有then函数调用返回一个promise对象
//      then函数有一个返回值
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class newPromise {
  state: any;
  value: any;
  reason: any;
  successCallBack: any;
  errorCallBack: any;
  constructor(handler: Function) {
    if (typeof handler !== 'function') {
      throw `Promise构造函数的参数${handler}不是一个函数`
    }
    this.state = PENDING; //存储promise的状态，初始化状态为pending
    this.value = undefined; //终值
    this.reason =undefined; //拒因
    handler(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(value: any) {
    if (this.state !== PENDING) return ;
    this.state = FULFILLED;
    this.value = value;
    this.successCallBack.map((fn: any) => fn())
  }
  reject(reason: any) {
    if (this.state !== PENDING) return ;
    this.state = REJECTED;
    this.reason = reason;
    this.errorCallBack.map((fn: any) => fn())
  }
  then(onResolved: Function, onRejected?: Function) {
    return new newPromise((resolve: any, reject: any) => {
      onResolved = typeof onResolved === 'function' ? onResolved : (value: any) => value;
      onRejected = typeof onRejected === 'function' ? onRejected : (value: any) => value;
      if (this.state === FULFILLED) {
        let result = onResolved(this.value);
        this.handlerPromise(result, resolve, reject);
      }
      if (this.state === REJECTED) {
        let result = onRejected(this.reason);
        this.handlerPromise(result, resolve, reject);
      }
      if (this.state === PENDING) {
        this.successCallBack.push(() => {
          let result = onResolved(this.value);
          this.handlerPromise(result, resolve, reject);
        });
        this.errorCallBack.push(() => {
          let result = onRejected(this.reason);
          this.handlerPromise(result, resolve, reject);
        });
      }
    })
  }
  handlerPromise (result: any, resolve: any, reject: any) {
    if(result instanceof Promise) {
      result.then(resolve, reject);
    } else {
      resolve(result);
    }
  }
}


// 测试
const p = new newPromise((resolve: any, reject: any) => {
  resolve("errr")
})
console.log(p)
p.then(() => {
return new Promise((resolve, reject) => {
  resolve("2222")
})
}).then((value: any) => {
  console.log(value); 
})


const s = new Promise((resolve, reject) => {
resolve("success")
})

s.then((value) => {
return new Promise((resolve, reject) => {
  resolve("11")
})
}).then((value) => {
  console.log(value)
})