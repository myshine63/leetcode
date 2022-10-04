// 翻转指定节点的链表，翻转之后，head变成了尾巴，tail变成了头，因此，head.next = tail.next
// 返回新的头和尾
function reverse(head, tail) {
  let prev = tail.next;
  let curr = head;
  while (prev !== tail) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return [tail, head]
}

var reverseKGroup = function (head, k) {
  const res = new ListNode(0);
  res.next = head;
  let pre = res;
  while (head) {
    let tail = pre;
    for (let i = 0; i < k; i++) {
      tail = tail.next
      if (!tail) {
        return res.next;
      }
    }
    [head, tail] = reverse(head, tail);
    pre.next = head;
    pre = tail
    head = tail.next
  }
  return res.next;
};

