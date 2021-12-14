//递归？就是在函数中调用自身
function recursion (count: number) {
  let currentCount: number = count;
  if (currentCount <= 10) {
    currentCount += 1;
    recursion(currentCount);
  }
  return currentCount;
}
recursion(1);

//递归的作用，进行对象的深拷贝
function copyObject (currentObj: any) {
  if (!currentObj || typeof currentObj !== "object" || currentObj.lenth === undefined) return currentObj;
  let cloneObj: any = Array.isArray(currentObj) ? [] : {};
  Object.keys(currentObj).forEach((item) => {
    if(typeof currentObj[item] === "object") {
      cloneObj[item] = copyObject(currentObj[item]);
    } else if (typeof currentObj[item] === 'function') {
      cloneObj[item] = new Function(`return ${item.toString()}`)();
    } else {
      cloneObj[item] = item;
    }
  })
  return cloneObj;
}