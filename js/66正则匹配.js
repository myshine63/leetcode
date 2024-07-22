/*
* ^:开头; $: 结尾;
* *: 0-n; +: 1-n; ?: 0/1; {n}: n次; {n,m}: n-m次; {n,} 至少n次。没有{,m}这种形式
* .: 匹配换行符外任何字符(\n,\r)，匹配任意字符 [\s\S];
* \b: 单词边界 \B: 非单词边界 \d: 数字 \w: 字母数字下划线
* (?=): 正想匹配
* **/

let a = /a{2,3}/;
console.log(a.test(''))
console.log(a.test('a'))
console.log(a.test('aa'))
console.log(a.test('aaa'))
console.log(a.test('aaaa'))