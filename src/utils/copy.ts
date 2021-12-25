// 深拷贝和浅拷贝

// 深拷贝的实现方式
// 第一种：通过递归的方式实现深拷贝
const animal = {
  age: 6,
  name: "小黑",
  run: () => {
    console.log("运动")
  },
  child: {
    name: "小花",
    age: 3,
    child: {
      name: "小丑",
      age: 1
    }
  },
  color: ["黑", "白", "黄"]
}

function copyAnimal (obj: any) {
  // 如果是传递的值不是对象，那么返回error
  if (typeof obj !== "object") {
      throw console.error("传递的值不是对象！！！");
  }
  let targetObj: any = {};
  // 传递的值是对象，那么对对象进行遍历
  Object.keys(obj).forEach((item) => {
      //如果对象中的对应的键值对是复杂数据类型，那么就递归遍历
      //如果对象中的对应的键值对是简单数据类型，那么直接赋值
      if(typeof obj[item] === "object") {
          return targetObj[item] = copyAnimal(obj[item]);
      }
      if (typeof obj[item] === "function") {
          return targetObj[item] = new Function(`return ${obj[item].toString()}`)()
      }
      targetObj[item] = obj[item];
    })
    return targetObj;
  }
  console.log(copyAnimal(animal).run)

  //第二种可以使用JSON.stringfy和JSON.parse方法使用
  // 有局限性，正则，函数会出问题: 如下
  const animal1 = JSON.stringify(animal);
  const animal2 = JSON.parse(animal1);
  console.log(animal2)



  // 浅拷贝的实现方式
  // 第一种通过直接赋值
  const plants = {
    grass: "杂草",
    flower: "花",
    color: ["blue", "red", "green"],
    water: () => {
      console.log("需要水")
    }
  }
  function simpleCopy (obj: any) {
    const targetObj: any = {};
    Object.keys(obj).forEach((item) => {
      targetObj[item] = obj[item];
    })
    return targetObj;
  }

  const copyPlants = simpleCopy(plants);
  console.log(copyPlants.water())
  console.log(plants.water());
  console.log(plants.color)
  console.log(copyPlants.color)
  copyPlants.water = () => {
    console.log(111111)
  }
  copyPlants.color.push("skyblue");
  console.log(copyPlants.water())
  console.log(plants.water());
  console.log(plants.color)
  console.log(copyPlants.color)

  //第二种通过Object.assign();
  const newPlants = Object.assign({}, plants);
  console.log(newPlants.water())
  console.log(plants.water());
  console.log(plants.color)
  console.log(newPlants.color)
  copyPlants.water = () => {
    console.log(111111)
  }
  copyPlants.color.push("skyblue");
  console.log(newPlants.water())
  console.log(plants.water());
  console.log(plants.color)
  console.log(newPlants.color)