var sortList = function (head) {
  if (!head) {
    return head
  }
  const arr = [];
  while (head) {
    arr.push(head);
    head = head.next;
  }
  arr.sort((a, b) => a.val - b.val);
  let curr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    curr.next = arr[i];
    curr = arr[i]
  }
  arr[arr.length - 1].next = null;
  return arr[0]
};