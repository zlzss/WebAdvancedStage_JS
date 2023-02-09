let obj1 = {
    // typeof 数组|对象 =>  'object'
    // Array.isArray()
    arr: [1, 2, 3],
    arrayOfObjs: [{ c: 5 }, { d: 6 }],

    date: new Date(),
    object: { val: 4 },


    // 增加一个属性
    fn: function () {  // typeof fn ===> 'function'
        return 5;
    },


    set: new Set([7, 8, 9, { e: 10 }]),
    map: new Map([
        [11, 'f'],
        [12, 'g']
    ]),
    reg: /[h-z]/

};