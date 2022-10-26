// 前序遍历 [根节点,左子树,右子树]
// 前序遍历 [左子树,根节点,右子树]
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) {
    return null
  }
  let root = new TreeNode(preorder[0]);
  let i
  for (i = 0; i < inorder.length; i++) {
    if (preorder[0] === inorder[i]) {
      break;
    }
  }
  root.left = buildTree(preorder.slice(1, i), inorder.slice(0, i))
  root.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1))
  return root
};