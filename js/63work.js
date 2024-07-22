function replaceWord(str, oldWord, newWord) {
    // 使用正则表达式，匹配整个单词
    const regex = new RegExp(`\\b${oldWord}\\b`, 'g');
    return str.replace(regex, newWord);
}

// 测试示例
let sentence = "The quick brown fox jumps over the lazy dog.";
let newSentence = replaceWord(sentence, "dog", "cat");
console.log(newSentence);  // 输出: The quick brown cat jumps over the lazy dog.
