void(() => {

    // 接口的作用就是对 引用类型实例进行约束 对 类的一部分行为进行抽象

    interface User {
        name: string,
        age?: number, // 配置可选属性
        readonly hobby: string, // 配置只读属性
        handle: (param: string) => void, // 为接口添加函数属性
    }

    // 创造 User 类型的实例
    let tom: User = {
        name: "Tom",
        hobby: "打代码",
        handle(param) {

            return `${ param } - FruitJ`;
        }
    }; 

    // tom.hobby = "听音乐";

    // 普通形式
    let show = (user): string => user.name;

    // 类型约束形式
    function _show(user: User): string {

        return user.name; 
    }

    console.log(_show(tom));
    console.log(tom.handle("爬山"));

    /* ========== */
    interface Animal {
        name?: string,
    }
    
    function Biology(biology: Animal): void {
        console.log(biology);
    }

    Biology({ name: 'tigger' }); // { name: 'tigger' }
    Biology({}); // {}
    Biology({age: 21} as Animal); // { age: 21 } 实际上最好不要这么干，因为本身接口就没有提供
 
})();