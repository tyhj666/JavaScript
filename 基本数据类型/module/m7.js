
//下面两种方法是具名导出的方法


// export let site = "后盾人";
// export function show(){//这个地方的show不能省略
//     return "show function"
// }

// export class User{
//     static frender(){
//         return "user static render"
//     }
// }



 let site = "后盾人";
 function show(){//这个地方的show不能省略
    return "show function"
}

 class User{
    static frender(){
        return "user static render"
    }
}

export {site,show,User}