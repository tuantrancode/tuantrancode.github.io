import CodeBlock from '@/components/shared/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'Data Structures',
  description: 'Notes on data structures',
};

export default function DataStructres() {
  return (
    <>
{/* QUICK REF DATA STRUCTURES */}
<section>
  <h3 className='section-header' id='quick-ds'>Quick DS Reference</h3> 
  
    <img src="/assets/images/ds-time-complexity.jpg" alt="data structure time complexity" style={{display: 'block', width: '100%', padding: '5px 0px'}}/> 
    <ul>
        <li><b><Link href="/Tools/data-structures#linked-list">Linked List</Link>:</b> efficient for head/tail access and fast insertion/deletion.</li>
        <li><b><Link href="/Tools/data-structures#basic-ds">Array</Link>:</b> O(1) access to any element, good for indexed data.</li>
        <li><b><Link href="/Tools/data-structures#hash-table">HashTable</Link>:</b> O(1) expected access, but memory heavy and sensitive to collisions.</li>
        <li><b><Link href="/Tools/data-structures#set">Set</Link>:</b> stores unique elements with fast lookup.</li>
        <li><b><Link href="/Tools/data-structures#heap">Min/Max-Heap</Link>:</b> priority queue structure for efficient min/max retrieval.</li>
        <li><b><Link href="/Tools/data-structures#treap">Treap</Link>:</b> BST + heap combination providing balanced search, insert, delete (O(log n) average).</li>
        <li><b><Link href="/Tools/data-structures#graph">Graph</Link>:</b> represents nodes and edges for networked relationships.</li>
        <li><b><Link href="/Tools/data-structures#bst">BST (Binary Search Tree)</Link>:</b> simple sorted tree with O(log n) average operations.</li>
        <li><b><Link href="/Tools/data-structures#btree">B-tree</Link>:</b> balanced tree optimized for disk/database storage.</li>
    </ul>
  <hr/>
</section>

    {/* BIG O */}
    <section>
      <h3 className='section-header' id='big-o'>Big O</h3>
      <img src="/assets/images/big-o-complexity-graph.jpg" alt="big o complexity chart" style={{width: "100%", padding: "5px 10px"}}/>
      <ul>
        <li><code>{`(fastest) 1 | log n | n | n log n | n^2 | 2^n | n! (slowest)`}</code></li>
        <li><code>O(log n)</code>: is when the the loop continuously divide the data/iteration</li>
      </ul>
      <hr/>
    </section>

    {/* BASIC DS */}
    <section>
      <h3 className='section-header' id='basic-ds'>Basic Data Structures</h3>
      <ul>
        <li><u><b>Record:</b></u> DS with subitems called fields</li>
        <ul>
            <li>Similar to Java object, but no methods</li>
        </ul>
        <li><u><b>Array:</b></u> ordered, indexed, mutable, allow dupes, homogenous (same type of items throughout), but need to be resized</li>
        <ul>
            <li>fast read, but slow insert</li>
        </ul>
        <li><b><u>Linked List</u></b> same as array, but not indexed, and traversal is in one direction, unless it's a doubly linked list</li>
        <ul>
            <li>fast insert, but slow read</li>
        </ul>
        <li><b><u>Binary Trees:</u></b> each node only have at most 2 children</li>
        <ul>
            <li><b>root:</b> top node</li>
            <li><b>leaf:</b> node w/o children</li>
        </ul>
        <li><b><u>Hash Table:</u></b> unordered, each item is a bucket, key is obtaine by hashing/modding (%) the item</li>
        <ul>
            <li>fast lookup, but have big memory usage</li>
        </ul>
        <li><b><u>Heap:</u></b> binary tree but have a priority with root being the highest priority</li>
        <ul>
            <li><b>max-heap:</b> higher number has higher priority</li>
            <li><b>min-heap:</b> lower number has higher priority</li>
        </ul>
        <li><b><u>Graph:</u></b> DS to represent connections among items</li>
      </ul>
      <hr/>
    </section>

    {/* ABSTRACT DATA STRUCTURES */}
<section>
  <h3 className='section-header' id='ads'>Abstract Data Structures</h3>
  <CodeBlock>{`
class ADS
    Node head, tail;
    public insert(item) {}
    private insert(node) {}
    public remove(item) {}
    private remove(node) {}
  `}</CodeBlock>
  <ul>
    <li>
      <u><b>List:</b></u> ordered collection of elements
      <ul>
        <li>Implemented with: Array, Linked List</li>
      </ul>
    </li>

    <li>
      <u><b>Dynamic Array:</b></u> array without fixed size (resizable)
      <ul>
        <li>Implemented with: Array</li>
      </ul>
    </li>

    <li>
      <u><b>Stack:</b></u> LIFO (Last In, First Out)
      <ul>
        <li>Implemented with: Linked List (or Array)</li>
      </ul>
    </li>

    <li>
      <u><b>Queue:</b></u> FIFO (First In, First Out)
      <ul>
        <li>Implemented with: Linked List (or Array)</li>
      </ul>
    </li>

    <li>
      <u><b>Deque:</b></u> Double-ended queue (insert/remove from both ends)
      <ul>
        <li>Implemented with: Linked List</li>
      </ul>
    </li>

    <li>
      <u><b>Bag:</b></u> unordered collection, allows duplicates
      <ul>
        <li>Implemented with: Array, Linked List</li>
      </ul>
    </li>

    <li>
      <u><b>Set:</b></u> unordered collection, no duplicates
      <ul>
        <li>Implemented with: Binary Search Tree, Hash Table</li>
      </ul>
    </li>

    <li>
      <u><b>Priority Queue:</b></u> elements processed based on priority
      <ul>
        <li>Implemented with: Heap</li>
      </ul>
    </li>

    <li>
      <u><b>Map / Dictionary:</b></u> key-value pair storage
      <ul>
        <li>Implemented with: Hash Table, Binary Search Tree</li>
      </ul>
    </li>
  </ul>
  <hr/>
</section>

    {/* LINKED LIST */}
   <section>
  <h3 className='section-header' id='linked-list'>Linked List</h3>
      <figure>
          <img src="/assets/images/doubly-list-structure.jpg" alt="doubly linked list structure" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
          <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Doubly Linked List Structure.</figcaption>
      </figure>
  <CodeBlock>{`
// Node Structure
class Node {
  data;
  Node next;
  Node prev;
}

class LinkedList {
  Node head, tail;

  public insert(item) {}
  public remove(item) {}
  public search(item) {}
}
  `}</CodeBlock>

  <ul>
    <li>
      <u><b>Edge Cases:</b></u>
      <ul>
        <li>Check <b>head == null</b> for empty list (dummy node can simplify this)</li>
        <li>Updating <b>head / tail</b> when inserting or deleting</li>
        <li>Handle:
          <ul>
            <li>Appending (tail changes)</li>
            <li>Prepending (head changes)</li>
            <li>Deleting head</li>
            <li>Deleting tail</li>
          </ul>
        </li>
      </ul>
    </li>

    <li>
      <u><b>Operations Complexity:</b></u>
      <ul>
         <li>Search:</li>
         <ul>
            <li>Average / Worst: O(n)</li>
         </ul>
          <li>Insert / Delete:</li>
          <ul>
            <li>Average / Worst: O(1) (at head or tail node)</li>
         </ul>
      </ul>
    </li>
  </ul>

  <hr/>
</section>


{/* HASH TABLE */}
<section>
  <h3 className='section-header' id='hash-table'>Hash Table</h3>

  <CodeBlock>{`
// Bucket Structure: the storage unit within a hash table 
class Bucket {
  key;
  value;
  status; // EMPTY_SINCE_START | EMPTY_AFTER_REMOVAL | OCCUPIED
}

class HashTable {
  Bucket[] table;

  public insert(key, value) {}
  public remove(key) {}
  public search(key) {}
  private hash(key) {}
}
  `}</CodeBlock>

  <ul>
    <li>
      <u><b>Collision Handling:</b></u>
      <ul>
        <li>Linear Probing</li>
        <li>Quadratic Probing</li>
        <li>Double Hashing</li>
      </ul>
    </li>

    <li>
      <u><b>Bucket Structure:</b></u>
      <ul>
        <li>key</li>
        <li>value</li>
        <li>isEmpty / status:
          <ul>
            <li>EMPTY_SINCE_START</li>
            <li>EMPTY_AFTER_REMOVAL</li>
            <li>OCCUPIED</li>
          </ul>
        </li>
        <li>After removal → mark as <b>EMPTY_AFTER_REMOVAL</b> (not fully empty)</li>
        <li>Search ends when:
          <ul>
            <li>Key is found</li>
            <li>OR <b>EMPTY_SINCE_START</b> is encountered</li>
          </ul>
        </li>
      </ul>
    </li>

    <li>
      <u><b>Hashing Concepts:</b></u>
      <ul>
        <li><b>Load Factor:</b> (# of items) / (total buckets)</li>
        <li>Resize when threshold exceeded (e.g., 0.5)</li>
        <li><b>Hash Functions:</b>
          <ul>
            <li>Modulo (%)</li>
            <li>Mid-square (base 2)</li>
            <li>Multiplicative (for strings)</li>
          </ul>
        </li>
      </ul>
    </li>

    <li>
      <u><b>Operations Complexity:</b></u>
      <ul>
        <li>Search / Insert / Delete:</li>
        <ul>
          <li>Average: O(1)</li>
          <li>Worst: O(n)</li>
        </ul>
        <li><b>Note:</b> Worst case caused by collisions and depend on a good hash function to reduce collision rate</li>
        <li><b>Tradeoff:</b> Large memory usage</li>
      </ul>
    </li>
  </ul>

  <hr/>
</section>

{/* SET */}
<section>
  <h3 className='section-header' id='set'>Set</h3>

  <CodeBlock>{`
// Abstract Set
class Set {
  public union(setB) {}
  public intersection(setB) {}
  public difference(setB) {}

  public filter(condition) {}
  public map(func) {}
}
  `}</CodeBlock>

  <ul>
    <li>
      <u><b>Properties:</b></u>
      <ul>
        <li>Unordered</li>
        <li>No duplicates</li>
      </ul>
    </li>

    <li>
      <u><b>Core Concepts:</b></u>
      <ul>
        <li><b>Cardinality:</b> size of the set</li>
        <li>Two sets are equal if they contain the same elements (order does not matter)</li>
      </ul>
    </li>

    <li>
      <u><b>Set Operations:</b></u>
      <ul>
        <li><b>Union:</b> X ∪ Y → elements in X or Y</li>
        <li><b>Intersection:</b> X ∩ Y → elements in both X and Y</li>
        <li><b>Difference:</b> X − Y → elements in X but not in Y</li>
      </ul>
    </li>

    <li>
      <u><b>Functional Operations:</b></u>
      <ul>
        <li><b>Filter:</b> subset of X that satisfies a condition</li>
        <li><b>Map:</b> new set with function applied to each element</li>
      </ul>
    </li>

    <li>
      <u><b>Operations Complexity:</b></u>
      <ul>
        <li>Search / Insert / Delete:</li>
        <ul><li>Average / Worst: depends on implementation</li></ul>
        <li>
          Typically:
          <ul>
            <li>Hash Table → Avg: O(1), Worst: O(n)</li>
            <li>Balanced BST → Avg/Worst: O(log n)</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>

  <hr/>
</section>

{/* UNION-FIND / DISJOINT SET */}
<section>
  <h3 className='section-header' id='union-find'>Union-Find (Disjoint Set)</h3>

  <CodeBlock>{`
class UnionFind {
  int[] parent;
  int[] rank;

  public UnionFind(int n) {
    parent = new int[n];
    rank = new int[n];
    for (int i = 0; i < n; i++) parent[i] = i;
  }

  public int find(int x) {
    if (parent[x] != x) parent[x] = find(parent[x]); // path compression
    return parent[x];
  }

  public void union(int x, int y) {
    int rootX = find(x);
    int rootY = find(y);
    if (rootX == rootY) return;

    // union by rank
    if (rank[rootX] < rank[rootY]) {
      parent[rootX] = rootY;
    } else if (rank[rootX] > rank[rootY]) {
      parent[rootY] = rootX;
    } else {
      parent[rootY] = rootX;
      rank[rootX]++;
    }
  }

  public boolean connected(int x, int y) {
    return find(x) == find(y);
  }
}
  `}</CodeBlock>

  <p>Union-Find tracks a collection of elements partitioned into disjoint sets. It's used to see if two elements belong to the same group/set.
    <b>It can only be used to tell if the nodes are connected directly/indirectly, but not whether Node A and B has a connected edge.</b>
  </p>
  <ul>
    <li>
      <u><b>Basic Terminology:</b></u>
      <ul>
        <li><b>Set:</b> a group of connected elements</li>
        <ul>
          <li>Visually represented by a tree in Union-Find</li>
        </ul>
        <li><b>Representative / Root:</b> the canonical element representing a set</li>
        <li><b>Parent:</b> pointer to the next element toward the root</li>
        <li><b>Rank:</b> an upper bound on the height of the tree representing a set</li>
        <ul>
          <li>Used to optimize union of two sets by attaching the shorter tree to the taller one</li>
        </ul>
        <li><b>Path compression:</b> rewire every node when using <code>find(x)</code> to point directly at the root</li>
        <ul>
          <CodeBlock>{`
  // Path compression
  public int find(int x) {
    if (parent[x] != x) parent[x] = find(parent[x]); // path compression
    return parent[x];
  }          
          `}</CodeBlock>
          <figure>
            <img src="/assets/images/path-compression.jpg" alt="Path Compression" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
            <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Path Compression</figcaption>
          </figure>
        </ul>
      </ul>
    </li>

    <li>
      <u><b>Operations:</b></u>
      <ul>
        <li><b>find(x):</b> returns the root of the set containing x</li>
        <li><b>union(x, y):</b> merges sets containing x and y</li>
        <li><b>connected(x, y):</b> checks if x and y are in the same set</li>
      </ul>
    </li>

    <li>
      <u><b>Optimizations:</b></u>
      <ul>
        <li><b>Path Compression:</b> flattens the tree during find, making future finds faster</li>
        <li><b>Union by Rank / Size:</b> attach smaller tree under larger to keep trees shallow</li>
      </ul>
    </li>

    <li>
      <u><b>Operation Complexity:</b></u>
      <ul>
        <li>Each operation: O(α(n)) ≈ nearly O(1), where α is the inverse Ackermann function</li>
        <li>Space: O(n) for parent and rank arrays</li>
      </ul>
    </li>

    <li>
      <u><b>Example:</b></u>
      <ul>
        <li>We have a graph with nodes 0-4</li>
        <li>We do the following unions: <code>union(0,1)</code>, <code>union(2,3)</code>, and <code>union(1,3)</code></li>
        <li>Ending union-find will be <code>parent = [0, 0, 0, 2, 4]</code></li>
        <ul>
          <li>From this union-find, we can tell nodes 0, 1, 2, 3 are connnected and node 4 is disconnected</li>
          <li>Can NOT tell if nodes 1 and 2 are directly connected</li>
        </ul>
      </ul>
      <figure>
        <img src="/assets/images/union-find-example.jpg" alt="Union-Find example" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
        <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Union-Find Example</figcaption>
      </figure>
    </li>
  </ul>

  <hr/>
</section>

{/* BINARY TREE */}
<section>
  <h3 className='section-header' id='binary-tree'>Binary Tree</h3>

  <CodeBlock>{`
class BinaryTree {
  Node root;

  public insert(item) {}
  public remove(item) {}
  public search(item) {}
}
  `}</CodeBlock>

  <ul>
    <li>
      <u><b>Basic Terminology:</b></u>
      <ul>
        <li><b>Root:</b> top node with no parent</li>
        <li><b>Leaf:</b> node with no children</li>
        <li><b>Internal Node:</b> node with at least one child</li>
        <li><b>Parent:</b> node that has children</li>
        <li><b>Ancestors:</b> all nodes from root → parent of a node</li>
        <li><b>Descendants:</b> all nodes below a node</li>
      </ul>
    </li>

    <li>
      <u><b>Tree Metrics:</b></u>
      <ul>
        <li><b>Depth:</b> # of edges from root → node (root = 0)</li>
        <li>Nodes with same depth form a <b>level</b></li>
        <li><b>Height:</b> # of edges from root → deepest node</li>
      </ul>
    </li>

    <li>
      <u><b>Types of Binary Trees:</b></u>
      <ul>
        <li>
          <b>Full Binary Tree:</b> every node has 0 or 2 children
        </li>
        <li>
          <b>Complete Binary Tree:</b> all levels are filled except possibly the last, filled left → right
        </li>
        <li>
          <b>Perfect Binary Tree:</b> all internal nodes have 2 children and all leaves are at same depth
        </li>
      </ul>
    </li>

    <li>
      <u><b>Operations Complexity:</b></u>
      <ul>
        <li><b>Search / Insert / Delete:</b></li>
        <ul>
          <li>Average: O(log n) (if balanced)</li>
          <li>Worst: O(n) (skewed tree)</li>
        </ul>
      </ul>
    </li>
  </ul>

  <hr/>
</section>

{/* BINARY SEARCH TREE */}
<section>
  <h3 className='section-header' id='bst'>Binary Search Tree (BST)</h3>

  <CodeBlock>{`
// Node Structure
class Node {
  key;
  Node left;
  Node right;
  Node parent;
}

class BST {
  Node root;
  public getHeight(node) {
    if node == null:
    return -1
    left_height = BST_get_height(node.left)
    right_height = BST_get_height(node.right)
    return 1 + max(left_height, right_height)
  }
}

// =============================================

// Traversals
// visit nodes in sorted order
inorder(node) {
  inorder(node.left)
  print(node)
  inorder(node.right)
}

// visit nodes in reverse sorted order
reverseInorder(node) {
  preorder(node.right)
  print(node)
  preorder(node.left)
}

// visit nodes in order of insertion
preorder(node) {
  print(node)
  preorder(node.left)
  preorder(node.right)
}

// visit all leaves first and root last
postorder(node) {
  postorder(node.left)
  postorder(node.right)
  print(node)
}
  `}</CodeBlock>

  <ul>
    <li>
      <u><b>Properties:</b></u>
      <ul>
        <li>Left child ≤ parent</li>
        <li>Right child ≥ parent</li>
        <li>Smallest → leftmost node</li>
        <li>Largest → rightmost node</li>
      </ul>
    </li>

    <li>
      <u><b>Core Concepts:</b></u>
      <ul>
        <li><b>Successor:</b> next larger node (usually leftmost node in right subtree)</li>
        <li><b>Predecessor:</b> next smaller node (usually rightmost node in left subtree)</li>
      </ul>
    </li>

    <li>
      <u><b>Insertion:</b></u>
      <ul>
        <li>Start at root</li>
        <li>Traverse tree based on node value and insert as new leaf</li>
      </ul>
    </li>

    <li>
      <u><b>Removal:</b></u>
      <ul>
        <li>Find target node</li>
        <li>Find successor node</li>
        <li>Replace target with successor</li>
      </ul>
    </li>

    <li>
      <u><b>Traversals:</b></u>
      <ul>
        <li><b>Inorder:</b> left → node → right (sorted order)</li>
        <li><b>Preorder:</b> node → left → right (same as insertion order)</li>
        <li><b>Postorder:</b> left → right → node (all leaves first and root last)</li>
        <li><b>Reverse Inorder:</b> right → node → left (descending order)</li>
      </ul>
    </li>

    <li>
      <u><b>Operations Complexity:</b></u>
      <ul>
        <li><b>Search / Insert / Delete:</b></li>
        <ul>
          <li>Average: O(log n)</li>
          <li>Worst: O(n) (unbalanced tree)</li>
        </ul>
      </ul>
    </li>
  </ul>

  <hr/>
</section>

{/* BALANCED BST */}
<section>
  <h3 className='section-header' id='balanced-bst'>Balanced BST</h3>
  <p>BST operations get worse the taller the tree gets so self-balancing trees are used to optimize the tree height</p>

{/* AVL BST */}
    <h4 className='sub-section-header' id='avl-tree'>AVL Tree</h4>
    <p>
      A self-balancing BST that maintains balance by keeping track of a <b>balance facotr</b> on each node.
    </p>
    <figure>
      <img src="/assets/images/avl-balance-tree.jpg" alt="avl bst tree" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
      <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>AVL tree with balance factor.</figcaption>
    </figure>
  <CodeBlock>{`
// Node Structure
class Node {
  key;
  Node left;
  Node right;
  Node parent;
  int height;
}`}</CodeBlock>
    
      <u><b>Properties:</b></u>
      <ul>
        <li>Self-balancing Binary Search Tree</li>
        <li>Each node must maintain a balance factor</li>
        <ul>
          <li> <b>Balance Factor:</b> height of left subtree − height of right subtree</li>
          <li>Balanced if balance factor is between -1 and 1</li>
          <li>Left heavy → balance factor &gt; 0</li>
          <li>Right heavy → balance factor &lt; 0</li>
        </ul>
    
      </ul>
  
      <u><b>Rotations:</b></u>
      <ul>
        <li>
          <b>Left Rotation at a node:</b> RIGHT child becomes parent, move node down-left
        </li>
        <li>
          <b>Right Rotation at a node:</b> LEFT child becomes parent, move node down-right
        </li>
        <li>
          If left heavy → perform <b>right rotation</b>
        </li>
        <li>
          If right heavy → perform <b>left rotation</b>
        </li>
        <li>
          <b>Double rotations:</b>
          <ul>
            <li>Left-Right (LR)</li>
            <li>Right-Left (RL)</li>
          </ul>
        </li>
      </ul>
  
      <u><b>Rebalancing:</b></u>
      <ul>
        <li>
          <b>Insert:</b> rebalance from inserted node → up to root by rotating based on balance factor
        </li>
        <li>
          <b>Delete:</b> rebalance from modified node → up to root by rotating based on balance factor
        </li>
      </ul>

      <u><b>Operations Complexity:</b></u>
      <ul>
        <li><b>Search / Insert / Delete:</b></li>
        <ul>
          <li>Average / Worst: O(log n)</li>
        </ul>
        <li>
          <b>Note:</b> stricter balance → faster lookup but more rotations than Red-Black Tree during insertion/deletion
        </li>
      </ul>

  <hr/>

    {/* RED BLACK BST */}
    <h4 className="sub-section-header">Red-Black Tree</h4>
    <p>
        A self-balancing binary search tree that maintains balance using <b>recoloring</b>.
    </p>
    <figure>
      <img src="/assets/images/red-black-tree.jpg" alt="red black tree" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
      <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Red-Black tree with imaginary NIL nodes.</figcaption>
    </figure>
   <p><u><b>Tree Rules</b></u></p>
    <ol>
        <li>Each node has a color: <b>red</b> or <b>black</b></li>
        <li>Root and NIL (null leaves) are always <b>black</b></li>
        <li>No two consecutive red nodes (a red node cannot have a red child)</li>
        <li>Every path from a node to its NIL descendants has the same number of black nodes (black height)</li>
        <li>Newly inserted nodes are always <b>red</b></li>
    </ol>

   <p><u><b>Tree Properties</b></u></p>
    <ul>
        <li>Shortest path = all black nodes</li>
        <li>Longest path = alternating red and black</li>
        <li>Longest path ≤ 2 × shortest path</li>
        <li>Balanced structure alternates: black → red → black → ...</li>
    </ul>

   <p><u><b>Rotations</b></u></p>
    <ul>
        <li>
          <b>Left Rotation at a node:</b> RIGHT child becomes parent, move node down-left
        </li>
        <li>
          <b>Right Rotation at a node:</b> LEFT child becomes parent, move node down-right
        </li>
        <li>
          If left heavy → perform <b>right rotation</b>
        </li>
        <li>
          If right heavy → perform <b>left rotation</b>
        </li>
    </ul>

   <p><u><b>Insertion Cases</b></u></p>
    <figure style={{margin: '0px'}}>
      <img src="/assets/images/red-black-tree-insertion.jpg" alt="red black tree insertion cases" style={{display: 'block', width: '100%'}}/>
      <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>The 4 cases of insertion for red-black trees. Node Z is the newly inserted node</figcaption>
    </figure>
    <ul>
        <li><b>Case 1:</b> New node is root → recolor to black;</li>
        <li><b>Case 2:</b> Parent is black → no fix needed; </li>
        <li>
            <b>Case 3:</b> Uncle is red → recolor parent & uncle to black, grandparent to red, then repeat upward
        </li>
        <li>
            <b>Case 4:</b> Uncle is black:
            <ul>
                <li><b>4a (zig-zag):</b> Rotate at parent to make it linear</li>
                <li><b>4b (linear):</b> Rotate at grandparent and swap colors</li>
            </ul>
        </li>
    </ul>

   <p><u><b>Deletion Cases</b></u></p>
    <ul>
        <li><b>Case 1:</b> Deleted node is red or root → no fix needed</li>
        <li><b>Case 2:</b> Sibling is red → recolor and rotate at parent</li>
        <li><b>Case 3:</b> Parent black, sibling and its children black → recolor sibling red, propagate up</li>
        <li><b>Case 4:</b> Parent red, sibling and its children black → swap colors of parent and sibling</li>
        <li>
            <b>Case 5:</b> Sibling has one red child (inner case) → rotate at sibling to convert to Case 6
        </li>
        <li>
            <b>Case 6:</b> Sibling has outer red child → rotate at parent and fix colors
        </li>
    </ul>

   <p><u><b>Operations Complexity</b></u></p>
    <ul>
       <li><b>Search / Insert / Delete:</b></li>
        <ul>
          <li>Average / Worst: O(log n)</li>
        </ul>
        <li>
            Compared to AVL trees:
            <ul>
                <li>Looser balance</li>
                <li>Faster inserts/deletes</li>
                <li>Slightly slower lookups</li>
            </ul>
        </li>
    </ul>
    <hr/>
</section>

{/* TRIE */}
<section>
  <h3 className='section-header' id='trie'>Trie (Prefix Tree)</h3>
  <p>Non-binary tree to represent a set of strings</p>
   <figure>
      <img src="/assets/images/trie-tree.png" alt="prefix tree" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
      <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Prefix tree with "$" as terminal node.</figcaption>
    </figure>
  <ul>
    <li>
      <u><b>Properties:</b></u>
      <ul>
        <li>Each path from root → node represents a prefix</li>
        <li>Terminal nodes mark the end of a valid word</li>
        <ul>
          <li>Without terminal nodes, tree wouldn't know if it has words like <b>CAT</b> or <b>CATS</b></li>
        </ul>
      </ul>
    </li>

    <li>
      <u><b>Use Cases:</b></u>
      <ul>
        <li>Autocomplete</li>
        <li>Predictive text input</li>
        <li>Dictionary / spell checking</li>
        <li>Prefix-based searching</li>
      </ul>
    </li>

    <li>
      <u><b>Core Concepts:</b></u>
      <ul>
        <li>Search is based on <b>prefix traversal</b>, not full comparison</li>
        <li>Efficient for querying after typing a few characters</li>
        <li>No need to scan all results like a normal string search</li>
      </ul>
    </li>

    <li>
      <u><b>Removal:</b></u>
      <ul>
        <li>Unmark terminal node</li>
        <li>Delete nodes bottom-up if they have no children</li>
        <li>Stop when reaching a node that:
          <ul>
            <li>Has other children, or</li>
            <li>Is the end of another word</li>
          </ul>
        </li>
      </ul>
    </li>

    <li>
      <u><b>Operations Complexity:</b></u>
      <ul>
        <li><b>Search / Insert / Delete:</b></li>
        <ul>
          <li>Average: O(k)</li>
          <li>Worst: O(k)</li>
          <li><b>k = length of the word</b></li>
        </ul>
        <li>Note: time complexity is independent of number of stored words</li>
      </ul>
    </li>
  </ul>

  <hr/>
</section>

{/* B-TREE */}
<section>
  <h3 className='section-header' id='btree'>B-Tree</h3>
  <p>Non-binary tree with K children and K-1 sorted, distinct keys; useful for lowering I/O operations or storing data in disk. Simiar to BST except B-trees are not restricted to having only one key and 2 children</p>
   <figure>
      <img src="/assets/images/b-tree.jpg" alt="b-tree" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
      <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>B-tree.</figcaption>
    </figure>
  <CodeBlock>{`
// Node Structure
class BTreeNode {
  int keyCount;
  array keys[key0, key1];                    // sorted keys
  array children[child0, child1, child2];    // size = keyCount + 1
}  `}</CodeBlock>

      <u><b>Properties:</b></u>
      <ul>
        <li>Non-binary tree with up to <b>K children</b> and <b>K-1 sorted keys</b></li>
        <li>Keys inside a node are always sorted</li>
        <li>Each key partitions children into ranges (left &lt; key &lt; right)</li>
        <ul>
          <li>all keys of left subtree are less than that key</li>
          <li>all keys of right subtree are greater that key</li>
          <li><code>{`key0 > child0's keys`}</code></li>
          <li><code>{`key1 > child1's keys > key0`}</code></li>
        </ul>
        <li>All leaf nodes are at the same level (balanced)</li>
        <li>Internal node with N keys has N+1 children</li>
        <li><b>Order (K)</b> : max number of children per node</li>
        <li><b>Minimum keys per node</b>: ceil(K/2) - 1</li>
        <ul>
          <li>Minimum does not apply to root node</li>
        </ul>
        <li><b>Maximum keys per node</b>: K - 1</li>
      </ul>

      <u><b>Core Concepts:</b></u>
      <ul>
        <li>B-Trees store <b>multiple keys per node</b> (unlike BST)</li>
        <li>Reduced tree height compared to BST</li>
        <li>Fewer node accesses → optimized for disk I/O</li>
        <li><b>2-3-4 Tree</b> is a B-Tree with order 4</li>
      </ul>

      <u><b>Use Cases:</b></u>
      <ul>
        <li>Databases (SQL indexing)</li>
        <li>File systems</li>
        <li>Large datasets stored on disk</li>
        <li>Minimizing disk reads/writes</li>
      </ul>

      <u><b>Search:</b></u>
      <ul>
        <li>find the node with the key and return the whole node if it does, else recursively dig children nodes</li>
      </ul>

      <u><b>Insertion:</b></u>
      <p>Insert into correct leaf node and watch for overflow</p>
      <ul>
        <li>If node overflows past the max # of keys per node:
          <ul>
            <li>Split node at median key</li>
            <li>Promote median key to parent</li>
            <li>Repeat upward if parent overflows</li>
            <li>If root overflows → create new root (height increases)</li>
          </ul>
        </li>
      </ul>

            <u><b>Deletion:</b></u>
      <p>Delete key, make sure <code>{`left subtree keys < internal node key < right subtree keys`}</code>, and watch for underflow</p>
 
      <ul>
        <li>
          <b>Case 1:</b> targeted node is a <b>leaf node</b>
          <ul>
            <li>
              <b>Case 1a — Leaf has more than the minimum number of keys:</b>
              <ul>
                <li>Simply delete the key. No structural fix needed.</li>
              </ul>
            </li>
            <li>
              <b>Case 1b — Leaf is at minimum capacity (would underflow after deletion):</b>
              <ul>
                <li>Cannot just delete — must look at siblings and attempt to borrow.</li>
                <li>See <i>Fixing Underflow</i> below.</li>
              </ul>
            </li>
          </ul>
        </li>
 
        <li>
          <b>Case 2:</b> targeted node is an <b>internal or root node</b>
          <ul>
            <li>Cannot remove directly — internal nodes act as separators for child subtrees.</li>
            <li>
              Replace the key with either:
              <ul>
                <li><b>In-order predecessor</b> — largest key in the left subtree, or</li>
                <li><b>In-order successor</b> — smallest key in the right subtree</li>
              </ul>
            </li>
            <li>Then delete the predecessor/successor from the leaf where it lives.</li>
            <li>This reduces the problem back to a leaf deletion (Case 1).</li>
          </ul>
        </li>
 
        <li>
          <b>Fixing Underflow</b> — after a deletion causes a node to fall below the minimum number of keys:
          <ul>
            <li>
              <b>Sub-case A — Borrow from a sibling (rotation):</b>
              <ul>
                <li>If a neighboring sibling has more than the minimum number of keys, rotate through the parent.</li>
                <li>Pull the parent's separator key down into the deficient node.</li>
                <li>Push the sibling's closest key up to replace it in the parent.</li>
                <li>Also called a <i>left rotation</i> or <i>right rotation</i>.</li>
              </ul>
            </li>
            <li>
              <b>Sub-case B — Merge with a sibling:</b>
              <ul>
                <li>If no sibling can spare a key, merge the deficient node with one sibling.</li>
                <li>Pull the parent's separator key down into the merged node.</li>
                <li>The parent loses a key — this may cause the parent to underflow too (cascades upward).</li>
              </ul>
            </li>
            <li>
              <b>Sub-case C — Cascade to the root:</b>
              <ul>
                <li>If merges propagate all the way up and the root ends up with 0 keys, the root is deleted.</li>
                <li>The tree shrinks by one level — the only way a B-tree's height decreases.</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>Example:
           <figure>
              <img src="/assets/images/b-tree-delete1.jpg" alt="b-tree deletion part 1" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
              <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Part 1: Initial B-tree.</figcaption>
           </figure>
           <figure>
              <img src="/assets/images/b-tree-delete2.jpg" alt="b-tree deletion part 2" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
              <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Part 2 - Borrowing: After deleting key 4; the node borrowed from its sibling. Rotated key 9 from parent and key 13 from sibling</figcaption>
           </figure>
           <figure>
              <img src="/assets/images/b-tree-delete3.jpg" alt="b-tree deletion part 3" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
              <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Part 3 - Merging: After deleting key 9; the node merge with sibling key 15 and parent key 13.</figcaption>
           </figure>       
        </li>
      </ul>

      <u><b>Operations Complexity:</b></u>
      <ul>
        <li><b>Search / Insert / Delete:</b></li>
        <ul>
          <li>Average / Worst: O(log n)</li>
        </ul>
        <li>Lower height than BST → fewer node accesses</li>
      </ul>
  <hr/>
</section>

{/* HEAP */}
<section>
  <h3 className='section-header' id='heap'>Heap (Binary Heap)</h3>
  <p>Heaps are priority queue and are normally shown visually as a tree, but it's implemented as an array</p>
  <figure>
    <img src="/assets/images/heap-array.jpg" alt="heap array" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
    <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Heap implementation</figcaption>
  </figure>

  <CodeBlock>{`
// Structure (Array-based)
class Heap {
  array data[];
  int size;
}

// Index mapping for a node at index i:
parent index = floor((i - 1) / 2)
leftChild index = 2i + 1
rightChild index = 2i + 2

  `}</CodeBlock>

  <ul>
    <li>
      <u><b>Properties:</b></u>
      <ul>
        <li><b>Mapping for a node at index i</b>:</li>
        <ul>
          <li><code>parent index = floor((i - 1) / 2)</code></li>
          <li><code>leftChild index = 2i + 1</code></li>
          <li><code>rightChild index = 2i + 2</code></li>
        </ul>
        <li><b>Complete binary tree</b> (last level filled left → right)</li>
        <li><b>Max-Heap:</b> parent ≥ children</li>
        <li><b>Min-Heap:</b> parent ≤ children</li>
        <li>Not fully sorted (only guarantees parent-child ordering)</li>
      </ul>
    </li>

    <li>
      <u><b>Core Concepts:</b></u>
      <ul>
        <li><b>Percolate Up:</b> move node up until heap property is satisfied</li>
        <li><b>Percolate Down:</b> move node down by swapping with larger/smaller child</li>
        <li><b>Heapify:</b> convert unordered array into a valid heap</li>
        <li><b>Heapsort:</b> repeatedly remove root to produce sorted array</li>
      </ul>
    </li>

    <li>
      <u><b>Heapify Process:</b></u> turning an unsorted array of size n into a heap array
      <ol>
        <li>Start at last non-leaf node: <code>floor(n/2) - 1</code></li>
        <li>Apply percolate down</li>
        <li>Repeat upward until reaching root</li>
        <li>Builds heap in O(n) time</li>
      </ol>
      <figure>
        <img src="/assets/images/heapify-1.jpg" alt="heapify" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
        <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Heapify Max-Heap Part 1: start at last non-leaf node and percolate down</figcaption>
      </figure>
      <figure>
        <img src="/assets/images/heapify-2.jpg" alt="heapify" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
        <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Heapify Max-Heap Part 2: repeat for next non-leaf node</figcaption>
      </figure>
      <figure>
        <img src="/assets/images/heapify-3.jpg" alt="heapify" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
        <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Heapify Max-Heap Part 3: keep going until root</figcaption>
      </figure>
      <figure>
        <img src="/assets/images/heapify-4.jpg" alt="heapify" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
        <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Heapify Max-Heap Part 4: finalized heap</figcaption>
      </figure>
    </li>

    <li>
      <u><b>Insertion:</b></u>
      <ul>
        <li>Insert at last position (end of array)</li>
        <li>Percolate up to restore heap property</li>
      </ul>
    </li>

    <li>
      <u><b>Removal:</b></u>
      <ul>
        <li>Remove root (highest/lowest priority)</li>
        <li>Replace with last element</li>
        <li>Percolate down to restore heap property</li>
      </ul>
    </li>

    <li>
      <u><b>Operations Complexity:</b></u>
      <ul>
        <li><b>Search:</b></li>
        <ul>
          <li>Average/Worst: O(n)</li>
          <li>Min/Max lookup: O(1)</li>
        </ul>

        <li><b>Insert / Delete:</b></li>
        <ul>
          <li>Average: O(log n)</li>
          <li>Worst: O(log n)</li>
        </ul>
      </ul>
    </li>
  </ul>
  <hr/>
</section>

{/* TREAP */}
<section>
  <h3 className='section-header' id='treap'>Treap (BST + Heap)</h3>
   <figure>
      <img src="/assets/images/treap.jpg" alt="treap" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
      <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Treap</figcaption>
    </figure>
  <CodeBlock>{`
// Node Structure
class TreapNode {
  key;
  priority;
  TreapNode left;
  TreapNode right;
  TreapNode parent;
}
  `}</CodeBlock>

  <ul>
    <li>
      <u><b>Properties:</b></u>
      <ul>
        <li>Combination of <b>Binary Search Tree</b> and <b>Max-Heap</b> and satisfies both DS properties</li>
        <li>Each node has a <b>key</b> and a <b>random priority</b></li>
        <li><b>BST property:</b> leftChild key &lt; parent key &lt; rightChild key</li>
        <li><b>Heap property:</b> parent priority &gt; children priorities</li>
      </ul>
    </li>

    <li>
      <u><b>Core Concepts:</b></u>
      <ul>
        <li>Tree stays <b>probabilistically balanced</b> due to random priorities</li>
        <li>No strict rebalancing rules like AVL or Red-Black trees</li>
        <li>Rotations maintain heap property (instead of swaps like heaps)</li>
      </ul>
    </li>

    <li>
      <u><b>Search:</b></u>
      <ul>
        <li>Same as BST (compare keys and traverse left/right)</li>
      </ul>
    </li>

    <li>
      <u><b>Insertion:</b></u>
      <ul>
        <li>Insert node using BST rules</li>
        <li>Assign random priority to the inserted node</li>
        <li>Percolate up based on priorities using rotations:
          <ul>
            <li>If you want left child to replace parent → rotate right at parent</li>
            <li>If you want right child to replace parent → rotate left at parent</li>
          </ul>
        </li>
      </ul>
    </li>

    <li>
      <u><b>Deletion:</b></u>
      <ul>
        <li>Set node priority to −∞ (lowest)</li>
        <li>Percolate down using rotations until node becomes a leaf</li>
        <li>Remove the node</li>
      </ul>
    </li>

    <li>
      <u><b>Operations Complexity:</b></u>
      <ul>
        <li><b>Search / Insert / Delete:</b></li>
        <ul>
          <li>Average: O(log n)</li>
          <li>Worst: O(n) (extremely unlikely due to randomness)</li>
        </ul>
      </ul>
    </li>
  </ul>
  <hr/>
</section>

{/* GRAPH */}
<section>
  <h3 className='section-header' id='graph'>Graph</h3>

  <CodeBlock>{`
// Node / Edge Structure
class Node {
  key;
}
class Edge {
  fromNode;
  toNode;
  weight;
}

// Graph Structure w/ Adjacency List
class Graph {
  map<Node, list<Node>> adjacencyList;

  addNode(node) {}
  addDirectedEdge(u, v) {}
  addUndirectedEdge(u, v) {}
}
  `}</CodeBlock>

  <ul>
    <li>
      <u><b>Properties:</b></u>
      <ul>
        <li>Collection of <b>nodes (vertices)</b> and <b>edges</b></li>
        <li>Can be <b>cyclic</b> or <b>acyclic</b></li>
        <ul>
          <li>Trees are acyclic graph</li>
        </ul>
        <li>Can be <b>directed</b> or <b>undirected</b></li>
        <li>Edges may have <b>weights</b> (cost, time, distance)</li>
      </ul>
    </li>

    <li>
      <u><b>Core Concepts:</b></u>
      <ul>
        <li><b>Path:</b> sequence of edges from one node to another</li>
        <li><b>Distance:</b> number of edges in the shortest path</li>
        <li><b>Adjacency:</b> nodes directly connected by an edge</li>
        <li><b>Directed Edge:</b> one-way connection</li>
        <li><b>Undirected Edge:</b> two-way connection</li>
      </ul>
    </li>

    <li>
      <u><b>Graph Representations:</b></u>
      <ul>
        <li>
          <b>Adjacency List:</b>
          <ul>
            <li>Each node stores a list of its neighbors</li>
            <li><b>Space:</b> O(V + E)</li>
            <li><b>Adjacency Lookup:</b> O(V) worst case (usually small in practice)</li>
            <li>Most commonly used (efficient for sparse graphs)</li>
          </ul>
        </li>

        <li>
          <b>Adjacency Matrix:</b>
          <ul>
            <li>2D matrix where rows/columns represent nodes</li>
            <li>1 = edge exists, 0 = no edge</li>
            <li>Diagonal (node to itself) = 0</li>
            <li><b>Space:</b> O(V²)</li>
            <li><b>Adjacency Lookup:</b> O(1)</li>
          </ul>
        </li>
      </ul>
      <figure>
        <img src="/assets/images/graph.jpg" alt="graph" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
        <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Undirected Graph</figcaption>
      </figure>
      <figure>
        <img src="/assets/images/graph-representations.jpg" alt="graph representations" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
        <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Different ways to store a graph.</figcaption>
      </figure>
    </li>

    <li>
      <u><b>Special Cases:</b></u>
      <ul>
        <li><b>Tree:</b> an acyclic graph</li>
        <li><b>Weighted Graph:</b> edges have cost/distance/time values</li>
        <li>
          <b>Negative Weight Cycle:</b>
          <ul>
            <li>No shortest path exists</li>
            <li>Path cost can decrease indefinitely</li>
          </ul>
        </li>
      </ul>
    </li>

    <li>
      <u><b>Use Cases:</b></u>
      <ul>
        <li>Maps and navigation (shortest path)</li>
        <li>Social networks (connections between users)</li>
        <li>Recommendation systems</li>
      </ul>
    </li>

    <li>
      <u><b>Operations Complexity:</b></u>
      <ul>
        <li><b>Add Node:</b> O(1)</li>
        <li><b>Add Edge:</b> O(1)</li>
        <li><b>Space:</b></li>
        <ul>
          <li>Adjacency List: O(V + E)</li>
          <li>Adjacency Matrix: O(V²)</li>
        </ul>
      </ul>
    </li>
  </ul>

  <hr/>
</section>

{/* GRAPH TRAVERSAL */}
<section>
  <h3 className='section-header' id='graph-traversal'>Graph Traversal Techniques (BFS & DFS)</h3>

   <h4 className='sub-section-header'>Breadth-First Search (BFS):</h4>
      <ul>
        <li>Visits nodes <b>level by level</b></li>
        <li>Uses a <b>queue</b> (FIFO)</li>
        <li>Explores all neighbors before going deeper</li>
        <li>Best for <b>shortest path (unweighted graphs)</b></li>
        <li>Steps</li>
        <ol>
          <li>Add starting node to queue</li>
          <li>Pop the queue and add all neighbors into <code>queue</code> and <code>visitedSet</code> if not already in <code>visitedSet</code></li>
          <li>Process current node</li>
          <li>Pop from queue again and repeat until queue is empty</li>
        </ol>
      </ul>
      <CodeBlock language='java'>{`
// Breadth-First Search (BFS)
bfs(start) {
  queue = new Queue()
  visited = new Set()

  queue.enqueue(start)
  visited.add(start)

  while queue is not empty:
    node = queue.dequeue()
    for neighbor in node.neighbors:
      if neighbor not in visited:
        queue.enqueue(neighbor)
        visited.add(neighbor)
    
    process(node)
}   `}</CodeBlock>
      <hr/>

  <h4 className='sub-section-header'>Depth-First Search (DFS):</h4>
      <ul>
        <li>Explores <b>deepest path first</b></li>
        <li>Uses a <b>stack</b> (LIFO) or recursion and the internal program stack</li>
        <li>Backtracks after reaching a dead end</li>
        <li>Good for <b>exploring all paths</b> and <b>cycle detection</b></li>
        <li>Steps</li>
        <ol>
          <li>Dig starting node recursively or add starting node to <code>stack</code></li>
          <li>Pop <code>stack</code> and process node if not in <code>visitedSet</code></li>
          <li>Add current node to <code>visitedSet</code></li>
          <li>Dig neighbors recursely or add neighbors into <code>stack</code> if not in <code>visitedSet</code></li>
          <li>Do until <code>stack</code> is empty</li>
        </ol>
      </ul>
        <CodeBlock language='java'>{`
// Depth-First Search (DFS - Recursive)
dfsRecursive(node, visited) {
  if node in visited:
    return

  process(node)
  visited.add(node)

  for neighbor in node.neighbors:
    dfsRecursive(neighbor, visited)
}  `}</CodeBlock>
     
      <hr/>
  
    <h4 className='sub-section-header'>Core Concepts:</h4>
      <u><b>Handling Cyclic / Acyclic:</b></u>
      <ul>
        <li><b>Visited Set:</b> prevents revisiting nodes</li>
        <li>Required for:
          <ul>
            <li>Cyclic graphs</li>
            <li>Undirected graphs</li>
          </ul>
        </li>
        <li>Not strictly required for trees (acyclic)</li>
      </ul>
 
      <u><b>Key Differences:</b></u>
      <ul>
        <li><b>BFS:</b> queue → level-order traversal (visit all nodes in same level first)</li>
        <li><b>DFS:</b> stack/recursion → depth traversal (visit a whole branch first)</li>
        <li>BFS finds shortest path (unweighted), DFS does not guarantee it</li>
      </ul>

      <u><b>Implementation Notes:</b></u>
      <ul>
        <li>Add node to <code>visited</code> when:
          <ul>
            <li>BFS → when enqueueing the node</li>
            <li>DFS → when pushing the node to stack or processing the node</li>
          </ul>
        </li>
        <li>Avoid adding nodes already in visited set</li>
      </ul>

      <u><b>Operations Complexity:</b></u>
      <ul>
        <li><b>BFS / DFS:</b></li>
        <ul>
          <li>Time: O(V + E)</li>
          <li>Space: O(V)</li>
        </ul>
      </ul>
</section>
    </>
  );
}