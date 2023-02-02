// WeakMap和Map一个玩法
// WeakMap内部使用的是弱引用(虚引用):
// 当其key为null时，可以让垃圾回收自动销毁value

var wmap = new WeakMap();
var b = new Object(); // map的key

wmap.set(b,new Array(1024 * 1024 * 5) ); // 5M

b = null;