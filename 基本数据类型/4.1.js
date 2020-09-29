//这种定义方法是全局定义的方法

// function hd (){
//     console.log("4.1.js-hd");
// }

// function show(){
//     console.log(4.1.js-show);  
// }


//立即执行函数的方法
// (
//     function (winsow) {
//         function hd (){
//             console.log("4.1.js-hd");
//         }
        
//         function show(){
//             console.log(4.1.js-show);  
//         }

//          //这种写法就是把这两个方法暴露给外面，
//          //外面调用时,必须用js1.hd,和js.show的方式调用
//         winsow.js1 = (hd,show);
//     }
// )(winsow);





//块级作用域
{
  let hd = function (){
    console.log("4.1.js-hd");
  };

  let show = function(){
      console.log("4.1.js-show");
  };
  //将这个暴露给外界
  window.js1 = {hd,show};
}