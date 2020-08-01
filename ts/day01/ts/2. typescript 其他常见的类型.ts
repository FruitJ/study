// any 类型与 unknown 类型
let _unknown: unknown = 2;
console.log(_unknown);

// any 与 unknown 的区别
void (() => {
    /* function handle(params: any): void {
        
        console.log(new params());
        
    }   
    handle(Number); */

    function handle(params: unknown): void {
        // 在使用 unknown 之前必须缩小其范围 

        if (params instanceof Date) {

            console.log(params.getDate());
        }
    }
    handle(new Date);
})();

// never 类型【表示那些永远不存在值的类型 - 例如下面这个函数，中途会抛出异常，基本上不会有任何的返回值】
/* function fn(): never {
    throw new Error("error");
}

fn(); */

// 数组有两种定义方式
let arr: string[] = ["john", "tom"];
console.log(Object.prototype.toString.call(arr));

let ary: Array<string> = ["alice", "jim"];
console.log(Object.prototype.toString.call(ary));

// 元祖【 定义元祖中的数据必须是 】
let tuple: [string, number] = ["s", 1];
// let tuple: [string, number] = [1, "上"]; // 报错
console.log(tuple);
console.log(tuple[0]);

let _tuple: [string, number];

_tuple = ['s', 2];
console.log('--- 分割线 ---');

console.log(_tuple[0]);

_tuple[1] = 99;
console.log(_tuple[1]);

// Object 表示非原始类型，也即除了【number/string/boolean/undfined/null/symbol/bigint】类型之外的类型

let obj: Object;
console.log('--- 分割线 ---');
obj = [1, 2, 3];
console.log(obj);
obj = _tuple;
console.log(obj);

 