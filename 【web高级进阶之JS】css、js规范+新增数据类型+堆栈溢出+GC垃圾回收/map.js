// map 和对象的感觉是类似的 结构差不多，key value
var map = new Map();
var b = new Object(); // map的key

map.set(b,new Array(1024 * 1024 * 5) ); // 5M

// 将key置为null 让其等待垃圾回收
b = null; // 并不是说这个key为null  map的value就会释放，这取决于map他是否对value有着【强引用】
map = null; // 释放了map,释放了b,才释放了value