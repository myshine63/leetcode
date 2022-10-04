// 对于一个二叉树，从右往左看，可以看见那些节点
var rightSideView = function (root) {
  const res = [];
  if (!root) {
    return res
  }
  const queue = [root];
  while (queue.length !== 0) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      if (i === len - 1) {
        res.push(node.value)
      }
    }
  }
  return res
};