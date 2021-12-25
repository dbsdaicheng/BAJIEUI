// // 理解javaScript中的事件机制
// // 事件流：每个事件的触发都会产生3个阶段，分别是时间捕获阶段，处于目标阶段，时间冒泡阶段
// // 通常为了减少绑定元素个数和时间处理函数而产生的
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <ul id="root">
//     <li data-title="1">1</li>
//     <li data-title="2">2</li>
//     <li data-title="3">3</li>
//     <li data-title="4">4</li>
//     <li data-title="5">5</li>
//     <li data-title="6">6</li>
//     <li data-title="7">7</li>
//   </ul>
//   <script>
//     //如果要对每一个li元素添加点击事件，有两种方式
//     // 第一种通过对每一个li元素添加点击事件， 如：
//     const liElements = document.getElementsByTagName("li");
//     for(let i = 0; i < liElements.length; i++) {
//       liElements[i].addEventListener("click", (e) => {
//         console.dir(e.target.innerText)
//       })
//     }
//     //第二种方式通过事件委托
//     const ulElement = document.getElementById("root");
//     ulElement.addEventListener("click", (e) => {
//       console.log(e.target.innerText)
//     })

//     //使用时间代理的好处
//     // 将多个事件处理器减少到一个，因为事件处理器要驻留内存，这样就提高了性能。想象如果有一个100行的表格，
//     // 对比传统的为每个单元格绑定事件处理器的方式和事件代理（即table上添加一个事件处理器），
//     // 不难得出结论，事件代理确实避免了一些潜在的风险，提高了性能。

//     // DOM更新无需重新绑定事件处理器，因为事件代理对不同子元素可采用不同处理方法。
//     // 如果新增其他子元素（a,span,div等），直接修改事件代理的事件处理函数即可，不需要重新绑定处理器，不需要再次循环遍历。
//   </script>
// </body>
// </html>