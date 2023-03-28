/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}
// const one = new TreeNode(1, []);
// const two = new TreeNode(2, []);
// const four = new TreeNode(4, []);
// const five = new TreeNode(5, []);

// const three = new TreeNode(3, [four, five]);
// const zero = new TreeNode(6, [one, two, three]);
class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    // const child = this.root.children;
    let sum = this.root.val;

    let toVisitQueue = [this.root];
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      for (let child of current.children) {
        sum = sum + child.val;
        toVisitQueue.push(child);
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let value = this.root.val % 2;
    let count = 0;
    value ? count++ : () => {};
    let toVisitQueue = [this.root];
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      for (let child of current.children) {
        value = child.val % 2;
        value ? count++ : () => {};

        toVisitQueue.push(child);
      }
    }
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let value = this.root.val;
    let count = 0;
    value > lowerBound ? count++ : () => {};
    let toVisitQueue = [this.root];
    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();
      for (let child of current.children) {
        value = child.val;
        value > lowerBound ? count++ : () => {};
        toVisitQueue.push(child);
      }
    }
    return count;
  }
}
// const tree = new Tree(zero);
// console.log(tree.numGreater(6));

module.exports = { Tree, TreeNode };
