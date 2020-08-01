void (() => {

    // 数字枚举
    enum Numbers {
        TOP,
        BOTTOM,
        LEFT = 99,
        RIGHT,
    }

    console.log(Numbers.TOP, Numbers.BOTTOM, Numbers.LEFT, Numbers.RIGHT); // 0 1 99 100

    // 字符串枚举
    enum Strings {
        TOP = "top",
        BOTTOM = "bottom",
        LEFT = "left",
        RIGHT = "right",
    }
    console.log(Strings.TOP, Strings.BOTTOM, Strings.LEFT, Strings.RIGHT); // top bottom left right

    // 异构枚举
    enum MixIns {
        STR = "str",
        NUM = "num",
    }
    console.log(MixIns.STR, MixIns.NUM); // str num

    // 反向映射【就是 key <=> value 我们可以互反的获取】
    console.log(Numbers[0]); // TOP

    // 常量枚举
    const enum Consts {
        TOP = "top",
        BOTTOM = "bottom",
        LEFT = "left",
        RIGHT = "right",
    }
    const temp = Consts.TOP;
    console.log(temp); // top
    
    // 枚举合并
    enum enum1 {
        TOP = "TOP",
    }

    enum enum1 {
        BOTTOM = "bottom",
    }
    
})();

