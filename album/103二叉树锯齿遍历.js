var zigzagLevelOrder = function (root) {
  const res = [];
  if (!root) {
    return res
  }
  const queue = [root];
  let order = true
  while (queue.length) {
    const len = queue.length;
    const data = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      if (order) {
        data.push(node.val)
      } else {
        data.unshift(node.val)
      }
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    order = !order
    res.push(data);
  }
  return res
};