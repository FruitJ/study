// 类

// 抽象类【通常用来做其他派生类的基类来使用，与接口不同的是，抽象类可以有具体的实现】
void(() => {

    abstract class Animal {
        abstract handleClick(): void;
        handleChange(): void {
            console.log("改变不了世界，那就改变自己 !");
        }
    }

    // 抽象类是不能够实例化的, 但是我们可以通过创建一个子类，使其继承基类从而实例化子类【在子类继承父类的时候要实现父类全部的抽象方法，否则会编译不通过】。
    // let tigger = new Animal();
    class Tigger extends Animal {
        handleClick():string {
            console.log("你好，世界 !");
            return 'return';
        }
    }
    let dbTigger = new Tigger();
    dbTigger.handleClick();
    dbTigger.handleChange();
})();

// 访问修饰符【public、private、protected】
// 在 ts 中的类中的所有成员间默认都是 public 修饰，被修饰为 public 的属性或者方法是可以被外界直接访问到的
void(() => {

    // public 修饰
    class Person {
        public eat() {
            console.log('吃饭');
        }
        public run() {
            console.log('跑步');
        }
    }

    // private 修饰【被 private 修饰的属性与方法只能在自己内部被访问到】
    class Animal {
        private eat(): void {
            console.log("吃饭 ...");
        }
        
        public run(): void {
            this.eat();
            console.log("运动");
        }
    }

    // new Animal().eat();
    new Animal().run();

    // protected【被 protected 修饰的属性与方法只能被自己内部与子类访问到，外界是无法直接访问到的】
    class Botany {
        private breathing(): void {
            console.log('呼吸');
        }

        public drink(): void {
            console.log('喝水');
        }

        protected bath(): void {
            console.log('沐浴阳光');
        }
    }
    // new Botany().breathing();
    // new Botany().bath();
    new Botany().drink();

    class Peony extends Botany {

        handle() {
            // this.breathing();
            this.bath();
            this.drink();
        }
    }
    new Peony().handle();
})();



