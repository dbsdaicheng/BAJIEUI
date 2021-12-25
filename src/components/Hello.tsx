import * as React from "react";

interface HelloProps { compiler: string; framework: string; }

const Hello = (props: HelloProps) => {
    // 字符串的方法
    // 1.split 方法的作用是使用指定的分隔符字符串将一个字符串对象分割成子字符串数组
    // 参数：第一个参数是一个指定的分隔符字符串，也可以是正则表达式 第二个参数则是限定返回的数量
    // 返回值： 返回的是一个子字符串的数组
    const str = "hello world!";
    const arr = str.split(" ");
    const arr1 = str.split(" ", 1);
    console.log(arr, arr1);

    // 2.slice 方法的作用是提取某个字符串的一部分，并返回一个新的字符串，且不会改变原字符串
    // 参数： 第一个参数是从该索引处开始提取字符串中的字符，如果值为负数，会被当做是strLength + beginIndex看待
    //        第二个参数是可选，在该索引出结束提取字符串。如果省略该参数则会一直提取到字符串末尾。
    // 返回值： 返回的一个从原字符串中提取出来的心字符串
    const str1 = 'The quick brown fox jumps over the lazy dog.';
    const newStr1 = str1.slice(31);
    console.log(newStr1);

    //3.replace 方法的作用是替换部分或者所有匹配项的字符串
    // 参数： 第一个参数正则或者字符串，表示需要被匹配替换的字符串（如果是字符串，仅替换第一个匹配项）
    //        第二个参数字符串或者函数，用于替换掉第一个参数在原字符串中的匹配部分的字符串
    // 返回值：一个部分或全部匹配由替换模式所取代的新的字符串。
    const str2 = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
    const newStr2 = str2.replace('dog', 'monkey');
    const new1Str2 = str2.replace(/^dog$/, 'monkey')
    console.log(newStr2, new1Str2);

    return (
        <div>
            <h1>Hello from {props.compiler} and {props.framework}!</h1>
            {/* <button onClick={fn}>节流测试</button> */}
            {/* <input onChange={fn1} type="text" placeholder="防抖测试" /> */}
        </div>
    )
}

export default Hello;