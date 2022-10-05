var isValid = function (s) {
  let stack = [];
  for (let i of s) {
    let last = stack[stack.length - 1];
    if (last === "(" && i === ")") {
      stack.pop();
    } else if (last === "{" && i === "}") {
      stack.pop();
    } else if (last === "[" && i === "]") {
      stack.pop();
    } else {
      stack.push(i)
    }
  }
  return stack.length === 0
};