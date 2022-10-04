// 1. 获取当前节点的下一个节点
// 2. 将当前节点指向上一个节点,刚开始时，没有上一个节点
// 3. 用prev记录当前节点，
// 4. 下一个节点设置成当前节点

let a = {val: 1};
let b = {val: 2};
let c = {val: 3};
let d = {val: 4};
let e = {val: 5};
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next
  }
  return prev
};

console.log(reverseList(a))