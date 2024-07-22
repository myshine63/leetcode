function charToNum() {
    let charCode = 'a'.charCodeAt(0);
    return function (s) {
        const code = s.charCodeAt(0);
        return code - charCode;
    }
}

let f = charToNum();
console.log(f('a'))