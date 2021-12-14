// 防抖 原理就是维护一个计时器，规定时间后触发函数，但是在规定时间内再次触发的话，就会取消之前的定时器重新设置，这样只有最后一次操作才会被触发
// 调用debounce函数会返回一个函数，并且需要使用apply或者call方法
//使用场景：搜索框搜索输入、手机号或者邮箱进行输入检测、窗口大小resize（只需窗口调整完成后，计算窗口大小）
function debounce(callback: Function, time: number, immediate: Boolean) {
  let timeId: any = undefined;
  let localImmediate = immediate;
  return function () {
    let args = arguments;
    clearTimeout(timeId);
    if (localImmediate && timeId === undefined) {
      localImmediate = false;
      callback.apply(this, args);
    }
    timeId = setTimeout(() => {
      callback.apply(this, args);
    }, time);
  };
}

// 节流:是为了限制函数一段时间内只能执行一次。
// 因此，定时器实现节流函数通过使用定时任务，延时方法执行。在延时的时间内，方法若被触发，则直接退出方法。从而，实现函数一段时间内只执行一次。
// 使用场景：滚动加载、谷歌搜索框、高频点击
function throttle(callback: Function, time: number) {
  let flag = true; // // 通过闭包保存一个标记
  return function () {
    let args = arguments;
    if (flag === true) {
      // // 在函数开头判断标记是否为true
      flag = false; //立即设置为false
      setTimeout(() => {
        //将外部传入的函数的执行放在setTimeout中
        callback.apply(this, args);
        //最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头会进行判断
        flag = true;
      }, time);
    }
  };
}



