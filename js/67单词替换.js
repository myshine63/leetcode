function f(str, word) {
    let arr = str.split(" ");
    for (let i in arr) {
        let s = arr[i];
        if (s.includes(word)) {
            if (/[a-zA-Z]+/.test(s.replace(word, ""))) {
                continue;
            } else {
                arr[i] = s.replace(word, `*${word}*`)
            }
        }
    }
    return arr.join(' ');
}

console.log(f('web hello, hello hel hel,', 'hello'));

function f2(str,word){
    let reg = new RegExp(`\\b${word}\\b`,'g')
    return str.replace(reg,`*${word}*`)
}

console.log(f2('web hello, hello hel hel,', 'hello'));


