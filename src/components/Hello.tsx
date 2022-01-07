import * as React from "react";

interface HelloProps { compiler: string; framework: string; }

const Hello = (props: HelloProps) => {
    
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
    this.successCallBack = [];
    this.errorCallBack = [];
    handler(this.resolve.bind(this), this.reject.bind(this));
  }
  resolve(value: any) {
    if (this.state !== PENDING) return ;
    this.state = FULFILLED;
    this.value = value;
    this.successCallBack.forEach((fn: any) => fn())
  }
  reject(reason: any) {
    if (this.state !== PENDING) return ;
    this.state = REJECTED;
    this.reason = reason;
    this.errorCallBack.forEach((fn: any) => fn())
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


    const p = new newPromise((resolve: any, reject: any) => {
        resolve("errr")
    })
    console.log(p)
    p.then((value: any) => {
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
    return (
        <div>
            <h1>Hello from {props.compiler} and {props.framework}!</h1>
            {/* <button onClick={fn}>节流测试</button> */}
            {/* <input onChange={fn1} type="text" placeholder="防抖测试" /> */}
        </div>
    )
}

export default Hello;