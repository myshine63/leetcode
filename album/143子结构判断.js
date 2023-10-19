var isSubStructure = function (A, B) {
    if (A === null || B === null) {
        return false
    }
    // 判断当前节点，子节点。形成递归
    return track(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
};

function track(a, b) {
    // 如果B节点为空了，说明B树已经便利完毕，这时不管A树，是否为空，
    if (b === null) {
        return true
    }
    // 如果B不为空，A如果为空，或者A不为空，但是两个节点的值不一致，
    if (a === null || a.val !== b.val) {
        return false
    }
    // 判断完当前节点，再递归判断子节点
    return track(a.left, b.left) && track(a.right, b.right)
}