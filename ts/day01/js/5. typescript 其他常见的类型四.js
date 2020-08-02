"use strict";
// 类
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 抽象类【通常用来做其他派生类的基类来使用，与接口不同的是，抽象类可以有具体的实现】
void (function () {
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.handleChange = function () {
            console.log("改变不了世界，那就改变自己 !");
        };
        return Animal;
    }());
    // 抽象类是不能够实例化的, 但是我们可以通过创建一个子类，使其继承基类从而实例化子类【在子类继承父类的时候要实现父类全部的抽象方法，否则会编译不通过】。
    // let tigger = new Animal();
    var Tigger = /** @class */ (function (_super) {
        __extends(Tigger, _super);
        function Tigger() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Tigger.prototype.handleClick = function () {
            console.log("你好，世界 !");
            return 'return';
        };
        return Tigger;
    }(Animal));
    var dbTigger = new Tigger();
    dbTigger.handleClick();
    dbTigger.handleChange();
})();
// 访问修饰符【public、private、protected】
// 在 ts 中的类中的所有成员间默认都是 public 修饰，被修饰为 public 的属性或者方法是可以被外界直接访问到的
void (function () {
    // public 修饰
    var Person = /** @class */ (function () {
        function Person() {
        }
        Person.prototype.eat = function () {
            console.log('吃饭');
        };
        Person.prototype.run = function () {
            console.log('跑步');
        };
        return Person;
    }());
    // private 修饰【被 private 修饰的属性与方法只能在自己内部被访问到】
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        Animal.prototype.eat = function () {
            console.log("吃饭 ...");
        };
        Animal.prototype.run = function () {
            this.eat();
            console.log("运动");
        };
        return Animal;
    }());
    // new Animal().eat();
    new Animal().run();
    // protected【被 protected 修饰的属性与方法只能被自己内部与子类访问到，外界是无法直接访问到的】
    var Botany = /** @class */ (function () {
        function Botany() {
        }
        Botany.prototype.breathing = function () {
            console.log('呼吸');
        };
        Botany.prototype.drink = function () {
            console.log('喝水');
        };
        Botany.prototype.bath = function () {
            console.log('沐浴阳光');
        };
        return Botany;
    }());
    // new Botany().breathing();
    // new Botany().bath();
    new Botany().drink();
    var Peony = /** @class */ (function (_super) {
        __extends(Peony, _super);
        function Peony() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Peony.prototype.handle = function () {
            // this.breathing();
            this.bath();
            this.drink();
        };
        return Peony;
    }(Botany));
    new Peony().handle();
})();
