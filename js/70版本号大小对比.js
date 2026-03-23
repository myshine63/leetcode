function sortVersion(versions) {
    return versions.sort(check);
}

function check(a, b) {
    a = a.split('.').map(Number);
    b = b.split('.').map(Number);
    let len = Math.min(a.length, b.length)
    for (let i = 0; i < len; i++) {
        if (a[i] < b[i]) {
            return -1
        }
        if (a[i] > b[i]) {
            return 1
        }
    }
    return a.length < b.length ? -1 : 1
}

console.log(sortVersion(['1', '1.1', '2', '2.1', '2.2']))