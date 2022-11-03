// 前序遍历 [根节点,左子树,右子树]
// 前序遍历 [左子树,根节点,右子树]
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0) {
    return null
  }
  let root = new TreeNode(preorder[0]);
  // 找出根节点在中序中的位置
  let i = 0;
  while (preorder[0] !== inorder[i]) {
    i++;
  }
  // 递归调用。找出当前节点的前序左子树节点，和中序的左子树节点
  root.left = buildTree(preorder.slice(1, i + 1), inorder.slice(0, i))
  // 找出当前节点前序有节点，和中序右节点
  root.right = buildTree(preorder.slice(i + 1), inorder.slice(i + 1))
  return root
};