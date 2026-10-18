class Trie {
    children;
    isLastOfWord;

    constructor() {
        this.children = new Array(26).fill(null);
        this.isLastOfWord = false;
    }
}

class WordDictionary {
    root: Trie;
    constructor() {
        this.root = new Trie();
    }

    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word: string): void {
        let current = this.root;
        for (let w of word) {
            const index = w.charCodeAt(0) - "a".charCodeAt(0);
            if (current.children[index] === null) {
                const newRoot = new Trie();
                current.children[index] = newRoot;
            }
            current = current.children[index];
        }
        current.isLastOfWord = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        const dfs = (i: number, node: Trie) => {
            if(i === word.length) return node.isLastOfWord
            
            const ch = word[i]
            if(ch === '.') {
                for(const child of node.children) {
                    if(child && dfs(i + 1, child)) return true
                }
                return false
            }

            const child = node.children[ch.charCodeAt(0) - "a".charCodeAt(0)]
            return child ? dfs(i + 1, child) : false
        } 
        return dfs(0, this.root)
    }
}
