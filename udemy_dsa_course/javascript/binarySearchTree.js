//error

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let found = false;
    let node = this.root;
    while (found !== true) {
      if (value < node.value) {
        if (node.left === null) {
          node.left = newNode;
          found = true;
        } else {
          node = node.left;
          continue;
        }
      } else if (value > node.value) {
        if (node.right === null) {
          node.right = newNode;
          found = true;
        } else {
          node = node.right;
          continue;
        }
      } else {
      }
    }
    return this;
  }
  lookup(value) {
    if (this.root === null) {
      return this;
    }
    let found = false;
    let node = this.root;
    while (found !== true) {
      if (value < node.value) {
        if (node.left === null) {
          found = true;
        } else {
          node = node.left;
          continue;
        }
      } else if (value > node.value) {
        if (node.right === null) {
          found = true;
        } else {
          node = node.right;
          continue;
        }
      } else {
        return node;
      }
    }
    return false;
  }

  remove(value) {
    let found = false;
    let node = this.root;
    let parentNode = this.root;
    let currentSuccesor = null;
    let newSuccesor = null;
    let newSuccesorParent = null;
    let newSuccesorChild = null;
    while (!found) {
      if (value < node.value) {
        // left traverse
        if (node.left === null) {
          found = true;
        } else {
          parentNode = node;
          node = node.left;
        }
      } else if (value > node.value) {
        // right traverse
        if (node.right === null) {
          found = true;
        } else {
          parentNode = node;
          node = node.right;
        }
      } else {
        // value found
        if (node.right === null && node.left === null) {
          found = true;
        } else if (node.right.left === null) {
          newSuccesor = currentSuccesor = node.right;
          break;
        } else {
          newSuccesor = node.right.left;
          while (!found) {
            if (newSuccesor.left !== null) {
              newSuccesorParent = newSuccesor;
              newSuccesor = newSuccesor.left;
            } else {
              newSuccesorChild = newSuccesor.right;
              found = true;
            }
          }
        }
      }
    }
    if(node.left === null && node.right === null ){
        node = null;
    }
    if (newSuccesor === currentSuccesor) {
      newSuccesor.left = node.left;
      parentNode.right = newSuccesor;
    } else {
      newSuccesorParent.right = newSuccesorChild;
      newSuccesor.right = currentSuccesor;
      parentNode.right = newSuccesor;
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(5);
tree.insert(11);
tree.insert(1);
tree.insert(320);
tree.insert(45);
tree.remove(1);
//   JSON.stringify(traverse(tree.root))
console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
