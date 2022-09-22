var reverseKGroup = function (head, k) {
    let tail = null;
    let curr = head;
    for (let i = 0; i < k - 1; i++) {
        curr = curr.next;
    }
    reverse()
};

function reverse(head, tail) {
    let prev = null;
    let curr = head;
    while (curr !== tail) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
}