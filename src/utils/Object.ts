 // Object.assign Object.is Object.keys Object.values
    // Object.assign 第一个参数目标对象， 第二个参数需要合并的对象 返回目标对象
    interface props {
      name: string;
      age: number;
      gender: String;
      work?: any;
    }

    const objectOne: props = {
      name: "张三",
      age: 14,
      gender: "男",
    }
    const ObjectTwo = {
      work: {
        name: "打游戏",
      }
    }
    Object.assign(objectOne, ObjectTwo);
    // Object.assign 拷贝的是对象的引用
    objectOne.work.name = "做作业";
    objectOne.work;
    ObjectTwo.work;
    console.log(ObjectTwo, objectOne);


    // Object.is方法判断两个值是否为同一个值 两个参数， value1 被比较的第一个值， value2 被比较的第二个值
    // 都是 undefined
    // 都是 null
    // 都是 true 或 false
    // 都是相同长度的字符串且相同字符按相同顺序排列
    // 都是相同对象（意味着每个对象有同一个引用）
    // 都是数字且
    // 都是 +0
    // 都是 -0
    // 都是 NaN
    // 或都是非零而且非 NaN 且为同一个值
    console.log(Object.is("0", 0));
    console.log(Object.is(undefined, undefined));
    //注意，Object并不会向 == 那样进行类型转换后进行比较

    // Object.keys方法返回所有可枚举属性的字符串数组 参数就是目标对象
    console.log(objectOne);
    console.log(Object.keys(objectOne));

    // Object.values方法返回所有可枚举属性值的数组 参数就是目标对象
    console.log(objectOne);
    console.log(Object.values(objectOne));