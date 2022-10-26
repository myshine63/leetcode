// 对于一个二叉树，从右往左看，可以看见那些节点
// 用广度优先遍历，则每层最后一个值，是需要我们添加进结果的值。
var rightSideView = function (root) {
  const res = [];
  if (!root) {
    return res
  }
  const queue = [root];
  while (queue.length !== 0) {
    // 广度优先遍历
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      // 每层最后一个节点的值，保存到结果中
      if (i === len - 1) {
        res.push(node.val)
      }
    }
  }
  return res
};