import SearchContainer from '@/components/shared/SearchContainer';

export const metadata = {
  title: 'Java Collections Framework',
  description: 'Notes on Java Collection Framework (JCF)',
};

export default function JavaCollections() {
  return (
    <>
      {/* Overview */}
      <section>
        <h2 className='page-header' id='collections-overview'>
          Overview
        </h2>
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Ordered?</th>
              <th>Allows Duplicates?</th>
              <th>Sorted?</th>
              <th>Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>List</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
              <td>ArrayList, LinkedList</td>
            </tr>
            <tr>
              <td>Set</td>
              <td>No</td>
              <td>No</td>
              <td>Yes / No</td>
              <td>HashSet, TreeSet</td>
            </tr>
            <tr>
              <td>Queue</td>
              <td>Usually</td>
              <td>Yes</td>
              <td>No</td>
              <td>LinkedList, PriorityQueue</td>
            </tr>
            <tr>
              <td>Deque</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>No</td>
              <td>ArrayDeque, LinkedList</td>
            </tr>
            <tr>
              <td>Map</td>
              <td>Yes (by keys)</td>
              <td>Keys: No, Values: Yes</td>
              <td>Yes / No</td>
              <td>HashMap, TreeMap</td>
            </tr>
          </tbody>
        </table>
        <h4>Notes</h4>
        <ul>
          <li>“Ordered” means elements retain insertion order or defined order. </li>
          <li> “Sorted” means elements are arranged by natural order or a custom comparator. </li>
          <li>
            * Maps store key–value pairs and are not part of the <code>Collection</code> interface.{' '}
          </li>
        </ul>
        <hr />
      </section>

      {/* <!-- Descriptions --> */}
      <section>
        <h3 className='section-header' id='descriptions'>
          Descriptions
        </h3>
        <h4 className='sub-section-header'>List</h4>
<ul>
  <li><code>ArrayList</code> : Dynamic array, fast random access, slower insert/remove</li>
  <li><code>LinkedList</code> : Doubly linked list, fast insert/remove, slower random access</li>
</ul>

<h4 className='sub-section-header'>Queue / Deque (Stack)</h4>
<ul>
  <li><code>LinkedList</code> : Can be used as both Queue and Deque</li>
  <li><code>PriorityQueue</code> : Orders elements by priority (natural order or comparator)</li>
  <li><code>ArrayDeque</code> : Resizable array-based deque (double-ended queue)</li>
</ul>

<h4 className='sub-section-header'>Concurrent Collections</h4>
<ul>
  <li><code>BlockingQueue</code> (interface) : For concurrency (used in producer–consumer)</li>
  <ul>
    <li><code>ArrayBlockingQueue</code> : A bounded blocking queue backed by an array.</li>
    <li><code>LinkedBlockingQueue</code> : A bounded / unbounded blocking queue backed by linked nodes.</li>
    <li><code>PriorityBlockingQueue</code> : An unbounded blocking queue that orders elements based on priority.</li>
    <li><code>DelayQueue</code> : An unbounded blocking queue where elements are only available after a specified delay.</li>
  </ul>
  <li><code>ConcurrentLinkedQueue</code> : Thread-safe queue (non-blocking)</li>
  <li><code>CopyOnWriteArrayList</code> : Thread-safe variant of ArrayList</li>
  <li><code>CopyOnWriteArraySet</code> : Thread-safe variant of HashSet</li>
  <li><code>ConcurrentLinkedDeque</code> : Thread-safe deque</li>
  <li><code>ConcurrentSkipListMap</code> : Sorted concurrent map</li>
  <li><code>ConcurrentSkipListSet</code> : Sorted concurrent set</li>
</ul>


        <hr />
      </section>

      {/* <!-- ArrayList --> */}
      <section>
        <h3 className='section-header' id='arraylist'>
          ArrayList
        </h3>
        <SearchContainer searchSelector='tbody tr, thead:not(.firstHead) tr' placeholder='Search methods...'>
          {/* <!-- Returns BOOLEAN --> */}
          <h4 className='sub-section-header'>Return Type: Boolean</h4>
          <table>
            <thead className='firstHead'>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>contains(Object o)</code>
                </td>
                <td>Checks if list contains the object.</td>
                <td>
                  <code>list.contains("apple")</code>
                </td>
                <td>
                  <code>true</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>isEmpty()</code>
                </td>
                <td>Checks if list is empty.</td>
                <td>
                  <code>list.isEmpty()</code>
                </td>
                <td>
                  <code>false</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>remove(Object o)</code>
                </td>
                <td>Removes the first occurrence of the object.</td>
                <td>
                  <code>list.remove("apple")</code>
                </td>
                <td>
                  <code>true</code>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- Returns INT --> */}
          <h4 className='sub-section-header'>Return Type: int</h4>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>size()</code>
                </td>
                <td>Returns the number of elements.</td>
                <td>
                  <code>list.size()</code>
                </td>
                <td>
                  <code>3</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>indexOf(Object o)</code>
                </td>
                <td>Index of first occurrence (-1 if not found).</td>
                <td>
                  <code>list.indexOf("apple")</code>
                </td>
                <td>
                  <code>0</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>lastIndexOf(Object o)</code>
                </td>
                <td>Index of last occurrence (-1 if not found).</td>
                <td>
                  <code>list.lastIndexOf("apple")</code>
                </td>
                <td>
                  <code>2</code>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- Returns ELEMENT (E) --> */}
          <h4 className='sub-section-header'>Return Type: E</h4>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>get(int index)</code>
                </td>
                <td>Returns element at specified index.</td>
                <td>
                  <code>list.get(0)</code>
                </td>
                <td>
                  <code>"apple"</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>set(int index, E element)</code>
                </td>
                <td>Replaces element at index, returns old value.</td>
                <td>
                  <code>list.set(0, "banana")</code>
                </td>
                <td>
                  <code>"apple"</code>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- Returns VOID --> */}
          <h4 className='sub-section-header'>Return Type: void</h4>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>add(E element)</code>
                </td>
                <td>Adds element to the end of the list.</td>
                <td>
                  <code>list.add("orange")</code>
                </td>
                <td>—</td>
              </tr>
              <tr>
                <td>
                  <code>add(int index, E element)</code>
                </td>
                <td>Inserts element at index.</td>
                <td>
                  <code>list.add(1, "kiwi")</code>
                </td>
                <td>—</td>
              </tr>
              <tr>
                <td>
                  <code>clear()</code>
                </td>
                <td>Removes all elements.</td>
                <td>
                  <code>list.clear()</code>
                </td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </SearchContainer>
        <hr />
      </section>

      {/* <!-- LinkedList --> */}
      <section>
        <h3 className='section-header' id='linkedlist'>
          LinkedList
        </h3>
        <SearchContainer searchSelector='tbody tr, thead:not(.firstHead) tr' placeholder='Search methods...'>
          {/* <!-- Returns BOOLEAN --> */}
          <h4 className='sub-section-header'>Return Type: Boolean</h4>
          <table>
            <thead className='firstHead'>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>contains(Object o)</code>
                </td>
                <td>Checks if the list contains the specified element.</td>
                <td>
                  <code>list.contains("apple")</code>
                </td>
                <td>
                  <code>true</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>isEmpty()</code>
                </td>
                <td>Checks if the list is empty.</td>
                <td>
                  <code>list.isEmpty()</code>
                </td>
                <td>
                  <code>false</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>remove(Object o)</code>
                </td>
                <td>Removes the first occurrence of the specified element.</td>
                <td>
                  <code>list.remove("apple")</code>
                </td>
                <td>
                  <code>true</code>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- Returns INT --> */}
          <h4 className='sub-section-header'>Return Type: int</h4>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>size()</code>
                </td>
                <td>Returns the number of elements in the list.</td>
                <td>
                  <code>list.size()</code>
                </td>
                <td>
                  <code>3</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>indexOf(Object o)</code>
                </td>
                <td>Returns the index of first occurrence of element (-1 if not found).</td>
                <td>
                  <code>list.indexOf("apple")</code>
                </td>
                <td>
                  <code>0</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>lastIndexOf(Object o)</code>
                </td>
                <td>Returns the index of last occurrence of element (-1 if not found).</td>
                <td>
                  <code>list.lastIndexOf("apple")</code>
                </td>
                <td>
                  <code>2</code>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- Returns ELEMENT (E) --> */}
          <h4 className='sub-section-header'>Return Type: E</h4>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>get(int index)</code>
                </td>
                <td>Returns the element at the specified position.</td>
                <td>
                  <code>list.get(0)</code>
                </td>
                <td>
                  <code>"apple"</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>getFirst()</code>
                </td>
                <td>Returns the first element.</td>
                <td>
                  <code>list.getFirst()</code>
                </td>
                <td>
                  <code>"apple"</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>getLast()</code>
                </td>
                <td>Returns the last element.</td>
                <td>
                  <code>list.getLast()</code>
                </td>
                <td>
                  <code>"orange"</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>set(int index, E element)</code>
                </td>
                <td>Replaces element at specified index, returns old value.</td>
                <td>
                  <code>list.set(0, "banana")</code>
                </td>
                <td>
                  <code>"apple"</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>remove()</code>
                </td>
                <td>Removes and returns the first element.</td>
                <td>
                  <code>list.remove()</code>
                </td>
                <td>
                  <code>"banana"</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>removeFirst()</code>
                </td>
                <td>Removes and returns the first element.</td>
                <td>
                  <code>list.removeFirst()</code>
                </td>
                <td>
                  <code>"apple"</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>removeLast()</code>
                </td>
                <td>Removes and returns the last element.</td>
                <td>
                  <code>list.removeLast()</code>
                </td>
                <td>
                  <code>"orange"</code>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- Returns VOID --> */}
          <h4 className='sub-section-header'>Return Type: void</h4>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>add(E element)</code>
                </td>
                <td>Adds element to the end of the list.</td>
                <td>
                  <code>list.add("kiwi")</code>
                </td>
                <td>—</td>
              </tr>
              <tr>
                <td>
                  <code>add(int index, E element)</code>
                </td>
                <td>Inserts element at specified position.</td>
                <td>
                  <code>list.add(1, "mango")</code>
                </td>
                <td>—</td>
              </tr>
              <tr>
                <td>
                  <code>addFirst(E element)</code>
                </td>
                <td>Adds element at the beginning.</td>
                <td>
                  <code>list.addFirst("pear")</code>
                </td>
                <td>—</td>
              </tr>
              <tr>
                <td>
                  <code>addLast(E element)</code>
                </td>
                <td>Adds element at the end.</td>
                <td>
                  <code>list.addLast("melon")</code>
                </td>
                <td>—</td>
              </tr>
              <tr>
                <td>
                  <code>clear()</code>
                </td>
                <td>Removes all elements from the list.</td>
                <td>
                  <code>list.clear()</code>
                </td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </SearchContainer>
        <hr />
      </section>

      {/* <!-- HashSet --> */}
      <section>
        <h3 className='section-header' id='hashset'>
          HashSet
        </h3>
        <SearchContainer searchSelector='tbody tr, thead:not(.firstHead) tr' placeholder='Search methods...'>
          {/* <!-- Returns BOOLEAN --> */}
          <h4 className='sub-section-header'>Return Type: Boolean</h4>
          <table>
            <thead className='firstHead'>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>contains(Object o)</code>
                </td>
                <td>Checks if the set contains the specified element.</td>
                <td>
                  <code>set.contains("apple")</code>
                </td>
                <td>
                  <code>true</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>remove(Object o)</code>
                </td>
                <td>Removes the specified element if present.</td>
                <td>
                  <code>set.remove("apple")</code>
                </td>
                <td>
                  <code>true</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>add(E e)</code>
                </td>
                <td>Adds the element if not already present, returns false if duplicate.</td>
                <td>
                  <code>set.add("apple")</code>
                </td>
                <td>
                  <code>true</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>isEmpty()</code>
                </td>
                <td>Checks if the set is empty.</td>
                <td>
                  <code>set.isEmpty()</code>
                </td>
                <td>
                  <code>false</code>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- Returns INT --> */}
          <h4 className='sub-section-header'>Return Type: int</h4>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>size()</code>
                </td>
                <td>Returns the number of elements in the set.</td>
                <td>
                  <code>set.size()</code>
                </td>
                <td>
                  <code>3</code>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- Returns VOID --> */}
          <h4 className='sub-section-header'>Return Type: void</h4>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>clear()</code>
                </td>
                <td>Removes all elements from the set.</td>
                <td>
                  <code>set.clear()</code>
                </td>
                <td>—</td>
              </tr>
              <tr>
                <td>
                  <code>addAll(Collection c)</code>
                </td>
                <td>Adds all elements from the specified collection.</td>
                <td>
                  <code>set.addAll(otherSet)</code>
                </td>
                <td>—</td>
              </tr>
              <tr>
                <td>
                  <code>removeAll(Collection c)</code>
                </td>
                <td>Removes all elements in the specified collection.</td>
                <td>
                  <code>set.removeAll(otherSet)</code>
                </td>
                <td>—</td>
              </tr>
              <tr>
                <td>
                  <code>retainAll(Collection c)</code>
                </td>
                <td>Retains only elements present in the specified collection.</td>
                <td>
                  <code>set.retainAll(otherSet)</code>
                </td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </SearchContainer>
        <hr />
      </section>

      {/* <!-- HashMap --> */}
      <section>
        <h3 className='section-header' id='hashmap'>
          HashMap
        </h3>
        <SearchContainer searchSelector='tbody tr, thead:not(.firstHead) tr' placeholder='Search methods...'>
          {/* <!-- Returns BOOLEAN --> */}
          <h4 className='sub-section-header'>Return Type: Boolean</h4>
          <table>
            <thead className='firstHead'>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>containsKey(Object key)</code>
                </td>
                <td>Checks if the map contains the specified key.</td>
                <td>
                  <code>map.containsKey("id")</code>
                </td>
                <td>
                  <code>true</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>containsValue(Object value)</code>
                </td>
                <td>Checks if the map contains the specified value.</td>
                <td>
                  <code>map.containsValue(42)</code>
                </td>
                <td>
                  <code>true</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>isEmpty()</code>
                </td>
                <td>Checks if the map is empty.</td>
                <td>
                  <code>map.isEmpty()</code>
                </td>
                <td>
                  <code>false</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>remove(Object key, Object value)</code>
                </td>
                <td>Removes entry only if key maps to value.</td>
                <td>
                  <code>map.remove("id", 42)</code>
                </td>
                <td>
                  <code>true</code>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- Returns INT --> */}
          <h4 className='sub-section-header'>Return Type: int</h4>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>size()</code>
                </td>
                <td>Returns the number of key-value mappings.</td>
                <td>
                  <code>map.size()</code>
                </td>
                <td>
                  <code>3</code>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- Returns VALUE (V) --> */}
          <h4 className='sub-section-header'>Return Type: V</h4>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>get(Object key)</code>
                </td>
                <td>Returns value mapped to key (or null if absent).</td>
                <td>
                  <code>map.get("id")</code>
                </td>
                <td>
                  <code>42</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>put(K key, V value)</code>
                </td>
                <td>Adds or replaces key-value mapping; returns old value or null.</td>
                <td>
                  <code>map.put("id", 99)</code>
                </td>
                <td>
                  <code>42</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>remove(Object key)</code>
                </td>
                <td>Removes mapping for key; returns old value or null.</td>
                <td>
                  <code>map.remove("id")</code>
                </td>
                <td>
                  <code>99</code>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- Returns SET or COLLECTION --> */}
          <h4 className='sub-section-header'>Return Type: Set / Collection</h4>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>keySet()</code>
                </td>
                <td>Returns a Set view of the keys.</td>
                <td>
                  <code>map.keySet()</code>
                </td>
                <td>
                  <code>[id, name]</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>values()</code>
                </td>
                <td>Returns a Collection view of the values.</td>
                <td>
                  <code>map.values()</code>
                </td>
                <td>
                  <code>[42, "Alice"]</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>entrySet()</code>
                </td>
                <td>Returns a Set of Map.Entry objects.</td>
                <td>
                  <code>map.entrySet()</code>
                </td>
                <td>
                  <code>[id=42, name=Alice]</code>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- Returns VOID --> */}
          <h4 className='sub-section-header'>Return Type: void</h4>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>clear()</code>
                </td>
                <td>Removes all mappings from the map.</td>
                <td>
                  <code>map.clear()</code>
                </td>
                <td>—</td>
              </tr>
              <tr>
                <td>
                  <code>putAll(Map m)</code>
                </td>
                <td>Copies all mappings from the specified map.</td>
                <td>
                  <code>map.putAll(otherMap)</code>
                </td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </SearchContainer>
        <hr />
      </section>

      {/* <!-- BlockingQueue --> */}
      <section>
        <h3 className='section-header' id='blockingqueue'>
          BlockingQueue
        </h3>
        <SearchContainer searchSelector='tbody tr, thead:not(.firstHead) tr' placeholder='Search methods...'>
          {/* <!-- Returns BOOLEAN --> */}
          <h4 className='sub-section-header'>Return Type: Boolean</h4>
          <table>
            <thead className='firstHead'>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>offer(E e)</code>
                </td>
                <td>Adds element if possible immediately, returns false if full.</td>
                <td>
                  <code>queue.offer("apple")</code>
                </td>
                <td>
                  <code>true</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>remove(Object o)</code>
                </td>
                <td>Removes a single instance of the specified element.</td>
                <td>
                  <code>queue.remove("apple")</code>
                </td>
                <td>
                  <code>true</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>contains(Object o)</code>
                </td>
                <td>Checks if the queue contains the element.</td>
                <td>
                  <code>queue.contains("apple")</code>
                </td>
                <td>
                  <code>true</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>isEmpty()</code>
                </td>
                <td>Checks if the queue is empty.</td>
                <td>
                  <code>queue.isEmpty()</code>
                </td>
                <td>
                  <code>false</code>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- Returns INT --> */}
          <h4 className='sub-section-header'>Return Type: int</h4>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>size()</code>
                </td>
                <td>Returns the number of elements currently in the queue.</td>
                <td>
                  <code>queue.size()</code>
                </td>
                <td>
                  <code>3</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>remainingCapacity()</code>
                </td>
                <td>Returns remaining capacity for bounded queues.</td>
                <td>
                  <code>queue.remainingCapacity()</code>
                </td>
                <td>
                  <code>7</code>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- Returns ELEMENT (E) --> */}
          <h4 className='sub-section-header'>Return Type: E</h4>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>peek()</code>
                </td>
                <td>Retrieves, but does not remove, the head of the queue, or null if empty.</td>
                <td>
                  <code>queue.peek()</code>
                </td>
                <td>
                  <code>"apple"</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>poll()</code>
                </td>
                <td>Retrieves and removes the head, or null if empty.</td>
                <td>
                  <code>queue.poll()</code>
                </td>
                <td>
                  <code>"apple"</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>take()</code>
                </td>
                <td>Retrieves and removes the head, waiting if necessary until available.</td>
                <td>
                  <code>queue.take()</code>
                </td>
                <td>
                  <code>"apple"</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>element()</code>
                </td>
                <td>Retrieves, but does not remove, the head. Throws exception if empty.</td>
                <td>
                  <code>queue.element()</code>
                </td>
                <td>
                  <code>"apple"</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>remove()</code>
                </td>
                <td>Retrieves and removes the head. Throws exception if empty.</td>
                <td>
                  <code>queue.remove()</code>
                </td>
                <td>
                  <code>"apple"</code>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <!-- Returns VOID --> */}
          <h4 className='sub-section-header'>Return Type: void</h4>
          <table>
            <thead>
              <tr>
                <th>Method</th>
                <th>Description</th>
                <th>Example</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>put(E e)</code>
                </td>
                <td>Adds element, waiting if necessary for space in bounded queue.</td>
                <td>
                  <code>queue.put("apple")</code>
                </td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </SearchContainer>
      </section>
    </>
  );
}
