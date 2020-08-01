"use strict";
void (function () {
    // 数字枚举
    var Numbers;
    (function (Numbers) {
        Numbers[Numbers["TOP"] = 0] = "TOP";
        Numbers[Numbers["BOTTOM"] = 1] = "BOTTOM";
        Numbers[Numbers["LEFT"] = 99] = "LEFT";
        Numbers[Numbers["RIGHT"] = 100] = "RIGHT";
    })(Numbers || (Numbers = {}));
    console.log(Numbers.TOP, Numbers.BOTTOM, Numbers.LEFT, Numbers.RIGHT); // 0 1 99 100
    // 字符串枚举
    var Strings;
    (function (Strings) {
        Strings["TOP"] = "top";
        Strings["BOTTOM"] = "bottom";
        Strings["LEFT"] = "left";
        Strings["RIGHT"] = "right";
    })(Strings || (Strings = {}));
    console.log(Strings.TOP, Strings.BOTTOM, Strings.LEFT, Strings.RIGHT); // top bottom left right
    // 异构枚举
    var MixIns;
    (function (MixIns) {
        MixIns["STR"] = "str";
        MixIns["NUM"] = "num";
    })(MixIns || (MixIns = {}));
    console.log(MixIns.STR, MixIns.NUM); // str num
    // 反向映射【就是 key <=> value 我们可以互反的获取】
    console.log(Numbers[0]); // TOP
    var temp = "top" /* TOP */;
    console.log(temp); // top
    // 枚举合并
    var enum1;
    (function (enum1) {
        enum1["TOP"] = "TOP";
    })(enum1 || (enum1 = {}));
    (function (enum1) {
        enum1["BOTTOM"] = "bottom";
    })(enum1 || (enum1 = {}));
})();
