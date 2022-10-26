var lowestCommonAncestor = function (root, p, q) {
  let set = new Set();

  function track(root, m, n) {

  }
};
var nextPermutation = function (root, node, res = []) {
  if (root === null) {
    return -1
  }
  res.push(root.val);
  if (root.val === node) {
    return res;
  }
  let flag = -1;
  if (root.left) {
    flag = nextPermutation(root.left, node, res)
  }
  if (flag !== -1) {
    return flag
  }
  if (root.right) {
    flag = nextPermutation(root.right, node, res)
  }
  if (flag !== -1) {
    return flag
  }
  res.pop();
  return -1
}

function check(root, m, n) {
  if (root === null) {
    return false
  }
  if (root === m) {
    return true
  }
  return check(root.left, q) || check(root.right, q);
}

function search(root, node) {
  if (!root) {
    return [];
  }
  let path = []
}