/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head, tail, m, n, sum, val, flag = 0;
    while (l1 || l2) {
        m = l1?.val || 0;
        n = l2?.val || 0;
        sum = m + n + flag;
        flag = Math.floor(sum / 10);
        val = sum % 10;
        if (!head) {
            head = tail = new ListNode(val);
        } else {
            tail.next = new ListNode(val);
            tail = tail.next;
        }
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (flag > 0) {
        tail.next = new ListNode(flag);
    }
    return head;
};