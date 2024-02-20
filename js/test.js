function defineReactive(data,key,val){
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function(){
            console.log(`对象属性:${key}访问defineReactive的get！`)
            return val;
        },
        set:function(newVal){
            if(val===newVal){
                return;
            }
            val = newVal;
            console.log(`对象属性:${key}访问defineReactive的set！`)
        }
    })
}

let obj = {};
// defineReactive(obj,'name','sapper');
// 修改obj的name属性
// obj.name = '工兵';
// console.log('obj',obj.name);
// 为obj添加age属性
// obj.age = 12;
// console.log('obj',obj);
// console.log('obj.age',obj.age);
// 为obj添加数组属性
// obj.hobby = ['游戏', '原神'];
// obj.hobby[0] = '王者';
// console.log('obj.hobby',obj.hobby);
// //
// // 为obj添加对象属性
// obj.student = {school:'大学'};
// obj.student.school = '学院';
// console.log('obj.student.school',obj.student.school);
defineReactive(obj,'hobby',['游戏', '原神']);
// 改变数组下标0的值
obj.hobby[0] = '王者';
// console.log('obj.hobby',obj.hobby);