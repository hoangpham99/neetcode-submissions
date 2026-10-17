class TreeNode {
    children
    isLastOfWord

    constructor() {
        this.children = new Array(26).fill(null)
        this.isLastOfWord = false
    }
}

class PrefixTree {
    private root: TreeNode
    constructor() {
        this.root = new TreeNode()
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word: string): void {
        let current = this.root
        for(let w of word) {
            const index = w.charCodeAt(0) - "a".charCodeAt(0)
            if(current.children[index] === null) {
                const newNode = new TreeNode()
                current.children[index] = newNode
            }
            current = current.children[index]
        }
        current.isLastOfWord = true
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        let current = this.root
        for(let w of word) {
            const index = w.charCodeAt(0) - "a".charCodeAt(0)
            if(current.children[index] === null) return false
            current = current.children[index]
        }

        return current.isLastOfWord
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        let current = this.root
        for(let p of prefix) {
            const index = p.charCodeAt(0) - "a".charCodeAt(0)
            if(current.children[index] === null) return false
            current = current.children[index]
        }
        return true
    }
}
