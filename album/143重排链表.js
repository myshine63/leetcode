// 节点全部存入数组中

var reorderList = function (head) {
  let stack = [];
  let curr = head
  while (curr) {
    stack.push(curr)
    curr = curr.next;
  }
  let left = 0;
  let right = stack.length - 1
  while (left < right) {
    stack[left].next = stack[right];
    stack[right].next = stack[left + 1] // 这里存入了下一个left节点，因此left=right,还是left>right时，都需要置空
    left++;
    right--
  }
  stack[left].next = null;
  return head
};