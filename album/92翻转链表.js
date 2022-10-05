var reverseBetween = function (head, left, right) {
  let leftNode;
  let rightNode;
  let curr = head;
  let pre = null;
  // 找到要翻转的左节点的前一个节点，左节点，右节点
  for (let i = 1; i <= right; i++) {
    if (i === left - 1) {
      pre = curr
    }
    if (i === left) {
      leftNode = curr
    }
    if (i === right) {
      rightNode = curr
    }
    curr = curr.next;
  }
  leftNode = reverse(leftNode, rightNode);
  if (pre) {
    pre.next = leftNode;
    return head
  } else {
    return leftNode
  }
}

function reverse(leftNode, rightNode) {
  let prev = rightNode.next;
  let curr = leftNode;
  while (prev !== rightNode) {
    let next = curr.next
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return rightNode;
}
