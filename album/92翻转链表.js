var reverseBetween = function (head, left, right) {
    let newNode = new ListNode(0, head);
    let cur = newNode;
    let a, b;
    for (let i = 1; i <= right; i++) {
        if (i === left) {
            a = cur
        }
        if (i === right) {
            b = cur
        }
        cur = cur.next;
    }
    a.next = reverse(a.next, b.next);
    return newNode.next
};

function reverse(head, tail) {
    let prev = tail.next;
    let cur = head;
    while (prev !== tail) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    return tail;
}