"use strict";
void (function () {
    // 接口的作用就是对 引用类型实例进行约束 对 类的一部分行为进行抽象
    // 创造 User 类型的实例
    var tom = {
        name: "Tom",
        hobby: "打代码",
        handle: function (param) {
            return param + " - FruitJ";
        }
    };
    // tom.hobby = "听音乐";
    // 普通形式
    var show = function (user) { return user.name; };
    // 类型约束形式
    function _show(user) {
        return user.name;
    }
    console.log(_show(tom));
    console.log(tom.handle("爬山"));
    function Biology(biology) {
        console.log(biology);
    }
    Biology({ name: 'tigger' }); // { name: 'tigger' }
    Biology({}); // {}
    Biology({ age: 21 }); // { age: 21 } 实际上最好不要这么干，因为本身接口就没有提供
})();
