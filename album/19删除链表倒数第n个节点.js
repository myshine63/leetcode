var removeNthFromEnd = function (head, n) {
    let node = new ListNode(0, head);
    let left = node;
    let right = node;
    let flag = 0
    while (flag < n) {
        right = right.next;
    }
    while (right.next) {
        right = right.next;
        left = left.next
    }
    let del = left.next;
    left.next = del.next;
    return node.next;
};