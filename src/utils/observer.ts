// 实现observer
//observe方法遍历并包装对象属性
function observer(target: any) {
  //若target是一个对象，则遍历它
  if (target && typeof target === "object") {
    Object.keys(target).forEach((key) => {
      defineReactive(target, key , target[key]);
    })
  }
}
//定义defaineReactive方法
function defineReactive(target: Object, key: any, val: any) {
  const dep = new Dep();
  //属性值也可能是Object类型，这种情况下需要调用observe进行递归遍历
  observer(val)
  //为当前属性安装监听器
  Object.defineProperty(target, key, {
    //可以枚举
    enumerable: true,
    //不可以配置
    configurable: false,
    get: function () {
      return val;
    },
    //监听器函数
    set: function (value) {
      //通知订阅者
      dep.notify(value);
    }
  })
}

//实现订阅者
class Dep {
  subs: any[];
  constructor() {
    //初始化订阅队列
    this.subs = [];
  }
  //添加订阅者
  addsub(sub: any) {
    this.subs.push(sub);
  }
  //通知订阅者
  notify(sub: any) {
    this.subs.forEach(((sub) => {
      //更新订阅者
      sub.update(); 
    }))
  }
}

// 定义订阅者类
class Observer {
  constructor() {
      console.log('Observer created');
  }
  update() {
      console.log('Observer.update invoked');
  }
}
