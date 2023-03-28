/** BinaryTreeNode: node for a general tree. */

const { devNull } = require('os');

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
const eleven = new BinaryTreeNode(11, null, null);
const ten = new BinaryTreeNode(10, eleven, null);
const nine = new BinaryTreeNode(9, null, null);
const eight = new BinaryTreeNode(8, ten, null);
const seven = new BinaryTreeNode(7, nine, null);
const six = new BinaryTreeNode(6, null, null);
const five = new BinaryTreeNode(5, null, null);
const four = new BinaryTreeNode(4, null, null);
const three = new BinaryTreeNode(3, seven, eight);
const two = new BinaryTreeNode(2, five, six);
const one = new BinaryTreeNode(1, three, four);
const zero = new BinaryTreeNode(0, one, two);

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    const base = this.root;
    let min = 0;
    let children = [base];
    while (children.length) {
      children.map((child) => {
        console.log(child.val);
        children.shift();
        min++;
        !child.left && !child.right ? (children.length = 0) : () => {};
        if (child.right) {
          children.push(child.right);
        }
        child.left ? children.push(child.left) : console.log('NO');
      });
    }
    return min;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  //******************************DID NOT FINISH  */
  maxDepth() {
    if (!this.root) return 0;

    function maxDepthHelper(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return maxDepthHelper(node.right) + 1;
      if (node.right === null) return maxDepthHelper(node.left) + 1;
      return (
        Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right)) + 1
      );
    }

    return maxDepthHelper(this.root);
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let result = 0;

    function maxSumHelper(node) {
      if (node === null) return 0;
      const leftSum = maxSumHelper(node.left);
      const rightSum = maxSumHelper(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    maxSumHelper(this.root);
    return result;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    // let's use BFS for this!
    let queue = [this.root];
    let closest = null;

    while (queue.length) {
      let currentNode = queue.shift();
      let currentVal = currentNode.val;
      let higherThanLowerBound = currentVal > lowerBound;
      let shouldReassignClosest = currentVal < closest || closest === null;

      if (higherThanLowerBound && shouldReassignClosest) {
        closest = currentVal;
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return closest;
  }

  // *******************************************  Further Study
  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {}

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {}

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {}
}

const tree = new BinaryTree(zero);
console.log(tree.maxDepth());
module.exports = { BinaryTree, BinaryTreeNode };
