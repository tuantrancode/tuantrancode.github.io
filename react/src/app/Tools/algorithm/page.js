import CodeBlock from '@/components/shared/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'Algorithm',
  description: 'Notes on basic algorithm',
};

export default function Algorithm() {
  return (
    <>
{/* GOOD DATA STRUCTURES & ALGORITHMS */}
<section>
  <h3 className='section-header' id='quick-algorithms'>Quick Algorithms Refence</h3>
    <figure>
        <img src="/assets/images/sorting-algorithms-complexity.jpg" alt="Bellman-Ford Algorithm" style={{display: 'block', width: '100%', padding: '5px 0px'}}/>
        <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}></figcaption>
    </figure>
      <ul>
        <li><b><Link href="/Tools/data-structures#graph-traversal">DFS (Depth-First Search)</Link>:</b> explores graph nodes deeply/per branch before backtracking.</li>
        <li><b><Link href="/Tools/data-structures#graph-traversal">BFS (Breadth-First Search)</Link>:</b> explores graph nodes level by level.</li>
        <li><b><Link href="/Tools/algorithm#sorting-algorithms">Merge Sort</Link>:</b> divide-and-conquer sort with O(n log n) performance.</li>
        <li><b><Link href="/Tools/algorithm#sorting-algorithms">QuickSelect</Link>:</b> finds k-th smallest element efficiently using partitioning.</li>
        <li><b><Link href="/Tools/algorithm#sorting-algorithms">Radix Sort</Link>:</b> non-comparison integer sort using digit-based bucket passes.</li>
        <li><b><Link href="/Tools/algorithm#sorting-algorithms">Bucket Sort</Link>:</b> distributes elements into value-range buckets, then sorts each.</li>
        <li><b><Link href="/Tools/algorithm#topological-sort">Topological Sort</Link>:</b> creates subtree (DAG) based on prerequisites / ordering of nodes edges.</li>
        <li><b><Link href="/Tools/algorithm#graph-pathfinding">Shortest Path Algorithms</Link>:</b> algorithms to find the shortest path to EACH node from a starting node in a graph.</li>
      </ul>

  <hr/>
</section>


{/* RECURSION*/}
<section>
  <h3 className='section-header' id='recursion'>Recursion</h3>

  <CodeBlock>{`
// Example: Binary Search (Recursive)
// Break the problem into smaller problems and work on those
binarySearch(arr, left, right, target) {
  if left > right:
    return -1

  mid = (left + right) / 2

  if arr[mid] == target:
    return mid
  else if target < arr[mid]:
    return binarySearch(arr, left, mid - 1, target)
  else:
    return binarySearch(arr, mid + 1, right, target)
}
  `}</CodeBlock>

  <ul>
    <li>
      <u><b>Definition:</b></u>
      <ul>
        <li>A function that calls itself to solve smaller subproblems</li>
        <li>Stops when reaching a <b>base case(s)</b></li>
      </ul>
    </li>

    <li>
      <u><b>Core Components:</b></u>
      <ul>
        <li><b>Base Case(s):</b> stopping condition(s)</li>
        <li><b>Recursive Case:</b> reduces problem size</li>
        <li>Number of base cases = number of required initial conditions</li>
      </ul>
      <CodeBlock language='java'>{`
// Example: Fibonacci requires 2 base cases because it needs 2 initial conditions
fibonacci(n) {
  if n == 0:
    return 0
  if n == 1:
    return 1

  return fibonacci(n - 1) + fibonacci(n - 2)
}         `}</CodeBlock>
    </li>

    <li>
      <u><b>Visualization:</b></u>
      <ul>
        <li>Recursive calls form a <b>call tree</b></li>
        <li>Each node represents a function call</li>
        <li>Leaves represent base cases</li>
      </ul>
    </li>

    <li>
      <u><b>Time Complexity Analysis:</b></u>
      <ul>
        <li>General form: <b>T(n) = work per call + recursive calls</b></li>
        <li>
          Example:
          <ul>
            <li>Binary Search → T(n) = O(1) + T(n/2)</li>
            <li>Time Complexity → <b>O(log n)</b></li>
          </ul>
        </li>
        <li>
          Key idea:
          <ul>
            <li>How much the problem size shrinks each call</li>
            <li>How many recursive calls are made</li>
          </ul>
        </li>
      </ul>
    </li>

    <li>
      <u><b>Common Patterns:</b></u>
      <ul>
        <li>
          <b>Linear Recursion:</b>
          <ul>
            <li>T(n) = T(n-1) + O(1) → O(n)</li>
          </ul>
        </li>
        <li>
          <b>Divide & Conquer:</b>
          <ul>
            <li>T(n) = T(n/2) + O(1) → O(log n)</li>
          </ul>
        </li>
        <li>
          <b>Branching Recursion:</b>
          <ul>
            <li>T(n) = 2T(n-1) + O(1) → O(2ⁿ)</li>
            <li>Example: Fibonacci (naive)</li>
          </ul>
        </li>
      </ul>
    </li>

    <li>
      <u><b>Space Complexity:</b></u>
      <ul>
        <li>Depends on recursion depth (call stack)</li>
        <li>
          Examples:
          <ul>
            <li>Binary Search → O(log n)</li>
            <li>Linear recursion → O(n)</li>
          </ul>
        </li>
      </ul>
    </li>

    <li>
      <u><b>Key Insights:</b></u>
      <ul>
        <li>Recursion ≈ implicit stack (function call stack)</li>
        <li>Can often be converted to iteration using a stack</li>
        <li>Performance depends on:
          <ul>
            <li>Number of calls</li>
            <li>Work per call</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
  <hr/>
</section>

{/* ALGORITHMIC PARADIGMS */}
<section>
  <h3 className='section-header' id='algorithms'>Algorithmic Paradigms</h3>
  <p>Algorithmic paradigms are general strategies or approaches for designing algorithms—basically, ways of thinking about how to solve problems.</p>
  <ul>
    <li>
      <u><b>Heuristic:</b></u>
      <ul>
        <li>Rule-of-thumb or approximation strategy</li>
        <li>Trades <b>optimality</b> for <b>speed/practicality</b></li>
        <li>Common in large or complex problem spaces</li>
      </ul>
    </li>

    <li>
      <u><b>Divide and Conquer:</b></u>
      <ul>
        <li>Break problem into smaller independent subproblems</li>
        <li>Solve recursively</li>
        <li>Combine results</li>
        <li>Examples: Merge Sort, Binary Search</li>
      </ul>
    </li>

    <li>
      <u><b>Greedy:</b></u>
      <ul>
        <li>Make the <b>locally optimal choice</b> at each step</li>
        <ul>
          <li>Like picking highest priority or the lowest weight for the next step</li>
        </ul>
        <li>Does not reconsider previous decisions</li>
        <li>Works only when local optimum leads to global optimum</li>
        <li>Examples: Dijkstra (no negative weights), Activity Selection</li>
      </ul>
    </li>

    <li>
      <u><b>Relaxation:</b></u>
      <ul>
        <li>Repeatedly improve a solution estimate</li>
        <li>Common in shortest path algorithms</li>
        <li>
          Example idea:
          <ul>
            <li>If a shorter path to a node is found → update it</li>
          </ul>
        </li>
        <li>Used in: Dijkstra, Bellman-Ford</li>
      </ul>
    </li>

    <li>
      <u><b>Dynamic Programming:</b></u>
      <ul>
        <li>Break problem into overlapping subproblems</li>
        <li>Store and reuse previous results (memoization/tabulation)</li>
        <li>Avoids redundant computation</li>
        <li>
          Two approaches:
          <ul>
            <li><b>Top-down (memoization)</b></li>
            <li><b>Bottom-up (tabulation)</b></li>
          </ul>
        </li>
      </ul>
    </li>

    <li>
      <u><b>Key Differences:</b></u>
      <ul>
        <li><b>Divide & Conquer:</b> independent subproblems</li>
        <li><b>Dynamic Programming:</b> overlapping subproblems</li>
        <li><b>Greedy:</b> no backtracking, local decisions only</li>
        <li><b>Heuristic:</b> approximate, not guaranteed optimal</li>
      </ul>
    </li>
  </ul>
  <hr/>
</section>

    {/* GRAPH PATHFINDING */}
<section>
  <h3 className='section-header' id='graph-pathfinding'>Graph Pathfinding Algorithms</h3>
    <p><b>Goal</b>: find shortest path from a starting node to EACH node in the graph</p>
    <p>When selecting algorithm, it's important to watch for existant of negative edge weight and negative weight cycle in graph</p>

    {/* Dijkstra’s Algorithm */}
  <h4 className='sub-section-header'>Dijkstra’s Algorithm</h4>
  <ul>
    <li><b>Goal</b>: find shortest path from a starting node to EACH node in the graph</li>
    <li><b>Limitation</b>: can not be used if there is a negative edge weight in the graph</li>
    <li>Uses <b>greedy + relaxation</b></li>
    <li>Processes nodes in order of smallest distance (min heap)</li>
    <li><b>Data Structures:</b></li>
    <ul>
      <li><code>PathTracker</code>: maps each node to its total distance from A and its previous node on the path from A</li>
      <li><code>minHeap</code>: priority queue of total distance to reach the node starting from node A</li>
    </ul>
    <li><b>Use Cases:</b></li>
    <ul>
      <li>Network routing / navigation systems</li>
    </ul>
    <li><b>Operation Complexity:</b></li>
    <ul>
      <li>Time complexity: O(E log V) (with min heap)</li>
      <li>V = number of vertices/nodes</li>
      <li>E = number of edges</li>
    </ul>
    <li><b>Steps:</b></li>
    <ol>
        <li>Use <code>min-heap</code> and <b>prioritize the closest node</b> to walk through graph</li>
        <li>Use another DS, <code>PathTracker</code>, to keep track of "Distance from A" and "Previous Node" for each node in graph</li>
        <li>Every time neighbor nodes are added to nodeStack, update the <code>PathTracker</code> with the total distance from A and previous node IF the NEW total distance from A is less than CURRENT total distance from A inside <code>PathTracker</code></li>
        <li>At the end, <code>PathTracker</code> will have the shortest path from A to any node in the graph</li>
    </ol>
    <li><b>Example:</b></li>
    <figure>
      <img src="/assets/images/dijkstra-algorithm.jpg" alt="dijkstra's algorithm" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
      <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Dijkstra's Algorithm and <code>PathTracker</code> table with starting node A</figcaption>
    </figure>
    <ol>
      <li>Push starting node into <code>minHeap</code></li>
      <ul>
        <li>Starting <code>minHeap</code>: [ (0, A) ] = (total distance from A, corresponding node)</li>
      </ul>
      <li>Pop <code>minHeap</code> and visit A: A is the starting node with distance 0, so it's processed first. Both B and C get their first real distances — 6 and 1 respectively — crossed over from ∞.</li>
      <li>Push 2 new total distance and nodes to <code>minHeap</code></li>
      <ul>
        <li><code>minHeap</code> after visiting A: [ (1, C), (6, B) ]</li>
      </ul>
      <li>Pop <code>minHeap</code> and visit C: C wins the next pick with the smallest tentative distance (1). From C, we can reach B at cost 1+2 = 3, which beats B's current value of 6. So 6 gets crossed out and replaced with 3.</li>
      <li>Push the new total distance to node B into <code>minHeap</code></li> 
      <ul>
        <li><code>minHeap</code> after visiting C: [ (3, B), (6, B) ]</li>
      </ul>
      <li>Pop <code>minHeap</code> and visit B: B is processed last with its final distance of 3. C is already visited, so nothing changes.</li>
      <ul>
        <li><code>minHeap</code> after visiting B: [ (6, B) ]</li>
      </ul>
      <li>Pop <code>minHeap</code>, but the total distance is bigger than what's in <code>PathTracker</code> so it's ignored. <code>minHeap is empty so algorithm is done.</code></li>
    </ol>
    <li><b>Pseudocode:</b></li>
    <CodeBlock language='java'>{`
// Dijkstra's Algorithm (Min Heap)
dijkstra(graph, startNode) {

  // PathTracker is split into two maps
  totalDist = map(default = infinity)
  prevNode = map()

  minHeap = new MinHeap()

  totalDist[startNode] = 0
  minHeap.insert((0, startNode))

  while minHeap not empty:
    (currDist, node) = minHeap.extractMin()

    for neighbor in graph[node]:
      newDist = currDist + weight(node, neighbor)

      if newDist < totalDist[neighbor]:
        totalDist[neighbor] = newDist
        prevNode[neighbor] = node
        minHeap.insert((newDist, neighbor))
}   `}</CodeBlock>
  </ul>
  <hr/>

   {/* Bellman-Ford Algorithm */}
  <h4 className='sub-section-header'>Bellman-Ford Algorithm</h4>
  <ul>
    <li><b>Goal</b>: find shortest path from a starting node to EACH node in the graph</li>
    <li><b>Limitation</b>: </li>
    <ul>
      <li>Work with negative edge weight, but can not be used if there is a negative weight CYCLE in the graph</li>
      <li>Algorithm will detect negative cycle though</li>
    </ul>
    <li><b>Data Structures:</b></li>
    <ul>
      <li><code>PathTracker</code>: maps each node to its total distance from A and its previous node on the path from A</li>
      <li><code>edgeList</code>: queue of all lists algorithm will go through for each iteration</li>
    </ul>
    <li>Uses <b>relaxation</b></li>
    <li>Perform V-1 iterations + 1 more as a negative-cycle check - V = number of vertices/nodes</li>
    <ul>
      <li>In the last iteration, if distance in <code>PathTracker</code> table improves → cycle exists</li>
    </ul>
    <li>Bellman-Ford does not walk through a graph like Dijkstra, but loop through every edge in the <code>edgeList</code> and update the <code>PathTracker</code> table the same way as Dijkstra</li>
    <li><b>Use Cases:</b></li>
    <ul>
      <li>Path finding with negative edge weight</li>
    </ul>
    <li><b>Operation Complexity:</b></li>
    <ul>
      <li>Time complexity: O(V × E)</li>
      <li>V = number of vertices/nodes</li>
      <li>E = number of edges</li>
    </ul>
    <li><b>Steps:</b></li>
    <ol>
        <li>1st iteration: loop through every edge and if edge is connection to the starting point or has a PREVIOUSLY checked connection to starting point, calc weight and update <code>PathTracker</code> table</li>
        <li>2nd ... V-1 iterations: same thing as first, but the table gain more data on edges connected to starting point with each iteration</li>
        <li>Vth (Last iteration): negative-cycle check; if the shortest distance still changes in the <code>PathTracker</code>, then there is a negative-cycle</li>
    </ol> 
    <li><b>Example: Starting node is A, and using the worst order for looping through edges</b></li>
    <figure>
      <img src="/assets/images/bellmanford-iteration1.jpg" alt="Bellman-Ford Algorithm" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
      <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>1st Iteration: algorithm visit edge B → C first so it did not see that C was connected to A and did not update the <code>PathTracker</code> table</figcaption>
    </figure>
    <figure>
      <img src="/assets/images/bellmanford-iteration2.jpg" alt="Bellman-Ford Algorithm" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
      <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>2nd Iteration: now, the algorithm sees the A → B connection and understand B → C edge is connected to A and update the <code>PathTracker</code> accordingly</figcaption>
    </figure>
    <figure>
      <img src="/assets/images/bellmanford-iteration3.jpg" alt="Bellman-Ford Algorithm" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
      <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>3rd-5th Iterations (Finalized): after 5 iterations, the algorithm finish the complete <code>PathTracker</code> table</figcaption>
    </figure>
    <li><b>Pseudocode:</b></li>
    <CodeBlock language='java'>{`
// Bellman-Ford Algorithm
bellmanFord(edges, V, start) {

  // PathTracker is split into two maps
  totalDist = map(default = infinity)
  prevNode = map()

  // Relax edges V-1 times
  for i from 1 to V-1:
    for (u, v, w) in edges:
      if totalDist[u] + w < totalDist[v]:
        totalDist[v] = totalDist[u] + w
        prevNode[v] = u

  // Negative cycle check
  for (u, v, w) in edges:
    if totalDist[u] + w < totalDist[v]:
      return false // negative cycle exists

  return totalDist
}   `}</CodeBlock>
  </ul>
  <hr/>
  </section>

    {/* Topological Sorts */}
  <section>
  <h3 className='section-header' id="topological-sort">Topological Sorts</h3>
   <figure>
      <img src="/assets/images/topological-sort.jpg" alt="topological sort" style={{display: 'block', width: '100%', padding: '5px 20px'}}/>
      <figcaption style={{ textAlign: "center", fontSize: "14px", marginTop: "6px" }}>Graph (left) and valid / invalid topological sorts (right) of it</figcaption>
    </figure>
  <ul>
    <li><b>Goal</b>: create subtrees of the graph with the nodes ordered as a <b>Directed Acyclic Graph (DAG)</b></li>
    <li><b>Data Structures:</b></li>
    <ul>
      <li><code>resultStack</code>: keep track of the current topological sort</li>
      <li><code>visitedSet</code>: keep track of visited nodes to avoid cycle</li>
    </ul>
    <li>Ensures all edges go from earlier → later</li>
    <li>Uses <b>DFS + postorder</b></li>
    <li><b>Use Cases:</b></li>
    <ul>
      <li>Use for task scheduling with prerequesites requirement</li>
      <li>Making a valid course/class sequence based on prerequesites</li>
      <li>Dependency resolution (making dependency 1 is installed before 2, etc)</li>
    </ul>
    <li><b>Operation Complexity:</b></li>
    <ul>
      <li>Time complexity: O(V + E)</li>
      <li>V = number of vertices/nodes</li>
      <li>E = number of edges</li>
    </ul>
    <li><b>Steps:</b></li>
    <ol>
      <li>Do DFS on the starting node and every non-visited node of its children and the whole graph</li>
      <li>Push node to <code>resultStack</code> after visiting all its children (postorder)</li>
      <li>Reverse the <code>resultStack</code> to get one possible topological sort for the graph</li>
    </ol>
    <li><b>Pseudocode:</b></li>
    <CodeBlock language='java'>{`
// Topological Sort (DFS)
topoSort(graph) {
  for node in graph:
    if node not in visited:
      dfs(node)

  return reverse(resultStack)
}

dfs(node) {
  visited.add(node)

  for neighbor in graph[node]:
    if neighbor not in visited:
      dfs(neighbor)

  resultStack.push(node)         // postorder
}   `}</CodeBlock>
  </ul>
  <hr/>
</section>

  {/* MINIMUM SPANNING TREE */}
<section>
  <h3 className='section-header' id='mst'>Minimum Spanning Tree (MST)</h3>

  {/* Definition */}
  <p>Minimum spanning tree (MST) is a subtree of the graph with the minimum total edge weight (i.e. what's the cheapest way to connect all points together). 
    MST only keeps cheapest edge for each vertex and avoid more expensive redundant edges.</p>
  <ul>
    <li><b>Goal</b>: connect all vertices in a graph with the <b>minimum total edge weight</b></li>
    <li><b>Requirements</b>:</li>
    <ul>
      <li>Graph must be <b>weighted</b></li>
      <li>Graph must be <b>connected</b> (no vertices are disconnected from rest)</li>
    </ul>
    <li>No cycles allowed (must remain a tree)</li>
    <li>Total edges in MST = <b>V - 1</b></li>
    <li>Uses <b>greedy strategy</b> (pick cheapest valid edges)</li>
  </ul>

  {/* Prim's Algorithm */}
  <h4 className='sub-section-header'>Prim’s Algorithm</h4>
  <ul>
    <li><b>Goal</b>: build MST by expanding from a starting node</li>

    <li><b>Data Structures:</b></li>
    <ul>
      <li><code>visitedSet</code>: tracks nodes already in MST</li>
      <li><code>minHeap</code>: stores edges prioritized by weight → (weight, from, to)</li>
      <li><code>mst</code>: list of edges in the final MST</li>
    </ul>

    <li><b>Use Cases:</b></li>
    <ul>
      <li>Best for <b>dense graphs</b> (many edges)</li>
    </ul>

    <li><b>Operation Complexity:</b></li>
    <ul>
      <li>Time complexity: O(E log V)</li>
      <li>V = number of vertices</li>
      <li>E = number of edges</li>
    </ul>

    <li><b>Steps:</b></li>
    <ol>
      <li>Pick any node as the starting node</li>
      <li>Add all its edges into <code>minHeap</code></li>
      <li>Pop the smallest edge from <code>minHeap</code></li>
      <li>If the destination node is already visited → skip</li>
      <li>Otherwise:
        <ul>
          <li>Add edge to MST</li>
          <li>Mark node as visited</li>
          <li>Push all outgoing edges of that node to unvisited nodes into <code>minHeap</code></li>
        </ul>
      </li>
      <li>Repeat until MST has V - 1 edges</li>
    </ol>

    <li><b>Pseudocode:</b></li>
    <CodeBlock language='java'>{`
// Prim's Algorithm
prim(graph, startNode) {

  visitedSet = new Set()
  minHeap = new MinHeap() // (weight, from, to)
  mst = []

  visitedSet.add(startNode)

  for edge in graph[startNode]:
    minHeap.insert(edge)

  while minHeap not empty:
    (weight, u, v) = minHeap.extractMin()

    if v in visitedSet:
      continue

    mst.add((u, v, weight))
    visitedSet.add(v)

    for edge in graph[v]:
      if edge.to not in visitedSet:
        minHeap.insert(edge)
}
    `}</CodeBlock>
  </ul>

  <hr/>

  {/* Kruskal's Algorithm */}
  <h4 className='sub-section-header'>Kruskal’s Algorithm</h4>
  <ul>
    <li><b>Goal</b>: build MST by selecting smallest edges globally</li>

    <li><b>Data Structures:</b></li>
    <ul>
      <li><code>edgeList</code>: all edges sorted by weight</li>
      <li><code>UnionFind</code>: tracks connected components</li>
      <li><code>mst</code>: list of edges in the final MST</li>
    </ul>

    <li><b>Use Cases:</b></li>
    <ul>
      <li>Best for <b>sparse graphs</b> (few edges)</li>
    </ul>

    <li><b>Operation Complexity:</b></li>
    <ul>
      <li>Time complexity: O(E log E)</li>
      <li>V = number of vertices</li>
      <li>E = number of edges</li>
    </ul>

    <li><b>Steps:</b></li>
    <ol>
      <li>Sort all edges by weight (ascending)</li>
      <li>Initialize each node as its own set</li>
      <li>Iterate through sorted edges</li>
      <li>If edge connects two different sets:
        <ul>
          <li>Add edge to MST</li>
          <li>Union the sets</li>
        </ul>
      </li>
      <li>Stop when MST has V - 1 edges</li>
    </ol>

    <li><b>Pseudocode:</b></li>
    <CodeBlock language='java'>{`
// Kruskal's Algorithm
kruskal(edges, V) {

  sort edges by weight
  uf = new UnionFind(V)
  mst = []

  for (u, v, w) in edges:
    if uf.find(u) != uf.find(v):
      mst.add((u, v, w))
      uf.union(u, v)

    if mst.size == V - 1:
      break
}
    `}</CodeBlock>
  </ul>

  <hr/>
</section>

{/* SORTING ALGORITHMS */}
<section>
  <h3 className='section-header' id='sorting-algorithms'>Sorting Algorithms</h3>

      <u><b>Bubble Sort:</b></u>
      <ul>
        <li>Iterates through a list, swapping adjacent elements if the second is less than the first.</li>
        <li>1st iteration places the largest element at the end; subsequent iterations place the next largest elements.</li>
        <li>Average/Worst Case: O(n²)</li>
      </ul>


      <u><b>Selection Sort:</b></u>
      <ul>
        <li>Splits the array into imaginary sorted/unsorted partitions.</li>
        <li>Iterates through the unsorted part to find the lowest element, then swaps it with the current element.</li>
        <li>Example: <code>[2 5 8 1 10]</code> → <code>[(sorted) (unsorted)]</code>  → <code>[(1) (5 8 2 10)]</code></li>
        <li>Average/Worst Case: O(n²)</li>
      </ul>


      <u><b>Insertion Sort:</b></u>
      <ul>
        <li>Also splits array into sorted/unsorted partitions, but moves the unsorted element into the sorted region instead of finding the lowest first.</li>
        <li>Example: <code>[2 5 8 1 10]</code> → <code>[(sorted) (unsorted)]</code> → <code>[(2 5) (8 1 10)]</code></li>
        <li>Average/Worst Case: O(n²)</li>
        <li>Best Case (already sorted): O(n)</li>
      </ul>
    <hr/>

      <u><b>Merge Sort:</b></u>
      <ul>
        <li>Divide and merge: recursively split the list in half until each sublist has 1 element, then merge while sorting.</li>
        <li>Merging: repeatedly pick the smaller element from the two sublists; if one sublist empties, append the other.</li>
        <li>Example: <code>[2 5 8 1 10]</code> → <code>[[2 5] [1 8] [10]]</code> → <code>[[1 2 5 8] [10]]</code></li>
        <li>Average/Worst Case: O(n log n)</li>
      </ul>
    <hr/>

      <u><b>Quick Sort:</b></u>
      <ul>
        <li>Pick a pivot element; partition elements less than pivot to left, greater to right.</li>
        <li>Recursively apply to left and right partitions until each has 1 or 0 elements.</li>
        <li>Example: <code>[2 5 8 1 10]</code> → <code>[[2 5 1] 8 [10]]</code> → <code>[[2 1] 5 [] 8 [10]]</code> → <code>[[] 1 [2] 5 [] 8 [10]]</code></li>
        <li>Average/Best Case: O(n log n)</li>
        <li>Worst Case: O(n²), depends on pivot choice</li>
      </ul>

      <u><b>QuickSelect:</b></u>
      <ul>
        <li>Uses Quick Sort partitioning to find the k-th smallest element without sorting the whole list.</li>
        <li>Pivot index is used as reference: if k &lt; pivot index → search left; if k &gt; pivot index → search right; else pivot is answer.</li>
        <li>Note: if looking for k-th smallest, desired index = k-1 (2nd smallest → index 1)</li>
        <li>Average/Best Case: O(n)</li>
        <li>Worst Case: O(n²)</li>
      </ul>
    <hr/>

      <u><b>Radix Sort:</b></u>
      <ul>
        <li>Designed for arrays of integers.</li>
        <li>Divide elements into buckets by digit place (ones, tens, hundreds…); collect in order (FIFO) and repeat for next higher digit.</li>
        <li>Final list after highest digit pass is sorted.</li>
        <li>Average/Worst Case: O(nk), k = number of digits</li>
      </ul>

      <u><b>Bucket Sort:</b></u>
      <ul>
        <li>Simpler than Radix Sort.</li>
        <li>Buckets labeled as ranges; divide elements into buckets based on value, then sort each bucket.</li>
        <li>Average Case: O(n + k)</li>
        <li>Worst Case: O(n²)</li>
      </ul>
    <hr/>

      <u><b>Heapify / Heap Sort:</b></u>: <Link href="/Tools/data-structures#heap">more details</Link>
      <ul>
        <li>Heapify: transform array into a max-heap or min-heap (complete binary tree with heap property).</li>
        <li>Heap Sort: repeatedly extract root (max/min) and re-heapify remaining elements.</li>
        <li>Time Complexity: O(n log n) for heap sort, O(n) to build the heap.</li>
      </ul>
    <hr/>

      <u><b>Topological Sort:</b></u>: <Link href="/Tools/algorithm#topological-sort">more details</Link>
      <ul>
        <li>Sort nodes of a DAG so that for every edge u → v, u comes before v.</li>
        <li>Implemented via DFS or Kahn’s algorithm (BFS with indegree tracking).</li>
        <li>Time Complexity: O(V + E), V = vertices, E = edges.</li>
      </ul>

  <hr/>
</section>

    </>
  );
}