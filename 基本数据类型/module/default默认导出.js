 //默认导出的方式
 export default  class User{
     static render(){
         return "user static render";
     }
 }


//export {User as default};


 //当在其他文件中引用默认导出的文件时，
 // import {} from ..当在导入其它文件时，如果{}不写则默认导入的是默认导出的文件
 //直接写import a/b/c(这个地方随便定义名字) from "./module/def....js"
 //默认导出的引用 import a(可以是其他任意字符) from ".."等价于 import {default as a} from '....'
 //默认导出在一个模块中只能有一个，




 //混合导入导出的使用,如果一个文件里面既有具名导出，也有默认导出，那么就叫做混合导入导出

 //混合导出的第一种方式
//  export let site = "后盾人";  //具名导出
//  export default class User{  //默认导出
//      static render(){
//          return "user static render";
//      }
//  }

 //混合导出的第二种方式
//  export {User as default,site};

 

 //混合导出文件的导入方式
 // 1.import a from '''   import {site} from 
 // 2. import a,{site} from ...



 //批量导入
 //import * as api from "..../../";
 //当用批量导入时，默认导出的使用方法 api.default.属性或方法



 //默认导出使用规范，建议名字和文件名一样




 //模块的合并导出
//  import {obj} from './Lesson.js';
//  import {title, show} from "./hd.js";
//  export {obj, title, show};

 //为了避免引入的js文件之间重名的问题，给每个js文件都编到组里面
//  import * as 123 from "./..";
//  import * as 124 from './hd.js';
//  export {123, 124};





//按需动态加载模块的语法
// import ("./hd").then()//.then是调用js文件里面的方法
// document.querySelector("button").addEventListener("click",(=>{
//     import ("./m7.js").then(({site, url}) = {
//         console.log(stie, usl);
        
//     })
// }))