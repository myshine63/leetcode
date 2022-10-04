var levelOrder = function (root) {
  const res = [];
  if (!root) {
    return res
  }
  const queue = [root];
  while (queue.length) {
    const currentLevelLength = queue.length; // 记录当前层级有多少个节点
    const currentLevelData = [];
    for (let i = 0; i < currentLevelLength; i++) {
      const node = queue.shift();
      currentLevelData.push(node.val);
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }
    res.push(currentLevelData)
  }
  return res;
}