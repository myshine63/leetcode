// 二插树的深度等于左边子树深度，和右边子树深度的最大值+1
var maxDepth = function (root) {
  if (root === null) {
    return 0
  }
  return Math.max(maxDepth(root?.left), maxDepth(root?.right)) + 1
};