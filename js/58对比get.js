class TestGet {
    #name;
    constructor (name) {
        this.#name = name;
    }

    get name () {
        return 'njvnj';
    }
}

const a = new TestGet('jkl')
const b = new TestGet('jkl');

Object.defineProperty(a, 'name', {
    get: () => {
        return this.name;
    },
    set: (name) => {
        this.name = name + ' word!';
    }
})
a.name = 'hello'
console.log(a.name);
console.log(b.name);
