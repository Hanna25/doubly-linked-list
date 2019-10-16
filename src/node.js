class Node {
    constructor(data = null, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }

    isEqual(node) {
        return this.data === node.data;
    }
}

module.exports = Node;
