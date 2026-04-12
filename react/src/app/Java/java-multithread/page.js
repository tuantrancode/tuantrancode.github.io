import CodeBlock from '@/components/shared/CodeBlock';
import SearchContainer from '@/components/shared/SearchContainer';

export const metadata = {
  title: 'Java Multithreading',
  description: 'Notes on multhreading in Java',
};

export default function JavaMultithread() {
  return (
    <>
     {/* Java Concurrency Core Concepts */}
<section>
  <h3 className="section-header" id="java-concurrency">Java Concurrency Core Concepts</h3>
  

  <h4 className="sub-section-header">Monitors</h4>
   <p>Monitors are <code>synchronized</code> blocks or methods that ensure only one thread can execute a section of code at a time</p>
  <ul>
    <li><code>wait()</code>, <code>notify()</code>, and <code>notifyAll()</code> can only be used inside monitor blocks</li>
    <li><code>wait()</code> releases the lock of the monitor and waits for notification</li>
    <ul>
      <li>Because <code>wait()</code> releases the lock, other threads can enter the monitor and also wait</li>
      <li>When multiple threads are waiting, only one random one will wake up from <code>notify()</code> or <code>notifyAll()</code></li>
      <li>That's why it's important to use <code>while</code> to check inside monitor instead of <code>if</code></li>
    </ul>
  </ul>
  <p>Other useful tools:  </p>
  <ul>
    <li><code>ReentrantReadWriteLock</code>: allow multiple readers and only block if writer is active</li>
    <li><code>Fork / Join</code>: framework for parallel execution of tasks that can be divided into subtasks (fork) and then merged (join)</li>
  </ul>

  <CodeBlock language='java'>{`
synchronized(queue) {
  while (queue.isEmpty()) {
    queue.wait();
  }
  // critical section
  item = queue.pop();

  queue.notifyAll();
}
 `}</CodeBlock>


  <h4 className="sub-section-header">Concurrency Collections</h4>
  <p>Collections that guarantee thread-safety but may not provide atomic operations across multiple steps</p>
  <ul>
    <li><code>ConcurrentHashMap | ArrayBlockingQueue | PriorityBlockingQueue | SynchronousQueue | ConcurrentLinkedDeque</code></li>
    <li>Blocking methods: <code>put()</code>, <code>take()</code></li>
    <li>Return special values: <code>offer() - return false</code>, <code>poll() - return null</code></li>
    <li>Non-blocking methods: <code>add</code>, <code>remove()</code></li>
    <li><a href="https://stackoverflow.com/questions/58720109/does-thread-safe-mean-no-race-conditions" target="_blank" rel="noopener noreferrer">Read more about thread safety</a></li>
  </ul>
  <CodeBlock language='java'>{`
// Will cause race condition

List<Integer> list = IntStream.range(0, 10000).boxed().collect(Collectors.toList());
Map<Integer, Integer> map = new HashMap<>();
list.parallelStream().forEach(i -> {
  map.put(i, i);
});

System.out.println("List size "+list.size());   // print out 10000
System.out.println("Map size "+map.size());     // print out < 10000

// ===========================================================
// Thread-safe

List<Integer> list = IntStream.range(0, 10000).boxed().collect(Collectors.toList());
Map<Integer, Integer> map = new ConcurrentHashMap<>();
list.parallelStream().forEach(i -> {
  map.put(i, i);
});

System.out.println("List size "+list.size());   // print out 10000
System.out.println("Map size "+map.size());     // print out 10000
 `}</CodeBlock>

  <h4 className="sub-section-header">Stream</h4>
  <p>Parallel streams and Collectors can be used in Java to handle concurrent operations safely</p>
  <ul>
    <li>Using <code>parallelStream()</code></li>
    <ul>
      <li><code>stream()</code> can be switched to <code>parallelStream()</code>, but it does not automatically ensure thread safety</li>
      <li><code>parallelStream</code> operations should NOT access any shared mutable field/state</li>
    </ul>
    <CodeBlock language='java'>{`
// Below is safe only if r.getTotalDistance() is a pure function (return this.value) without modifying shared states
double sum = list.parallelStream().mapToDouble(r -> r.getTotalDistance()).sum();

 // safe (unless this.totalDistance is mutable and can be modified by other thread)
double getTotalDistance() {
  return this.totalDistance; // if immutable field
}
  
// unsafe
double getTotalDistance() {
  return routingService.compute(this);
}
    `}</CodeBlock>
    <li>Using <code>Collectors</code></li>
<ul>
  <li><code>{`.toConcurrentMap`}</code>: returns a <code>{`ConcurrentHashMap<K, V>`}</code></li>
  <ul>
    <li><code>{`Map<K, V> map = stream.parallel()...collect(Collectors.toConcurrentMap(...))`}</code></li>
  </ul>

  <li><code>{`.groupingByConcurrent`}</code>: returns a <code>{`ConcurrentHashMap<K, List<V>>`}</code></li>
  <ul>
    <li><code>{`Map<K, List<V>> grouped = stream.parallel()...collect(Collectors.groupingByConcurrent(...))`}</code></li>
  </ul>

  <li><code>{`.toList`}</code>: returns a <code>{`List<T>`}</code></li>
  <ul>
    <li><code>{`List<T> list = stream.parallel()...collect(Collectors.toList())`}</code></li>
  </ul>

  <li><code>{`.toSet`}</code>: returns a <code>{`Set<T>`}</code></li>
  <ul>
    <li><code>{`Set<T> set = stream.parallel()...collect(Collectors.toSet())`}</code></li>
  </ul>

  <li><code>{`.joining`}</code>: returns a <code>{`String`}</code></li>
  <ul>
    <li><code>{`String joined = stream.parallel()...collect(Collectors.joining())`}</code></li>
  </ul>
</ul>
    <li>Common Stream Operations</li>
<ul>
  <li><code>{`map`}</code>: transforms each element of the stream</li> 
  <ul>
    <li><code>{`.map(i -> i.getValue())`}</code>: applies a function to each element</li>
    <li><code>{`.mapToDouble(i -> i.getValue()).sum()`}</code>: maps to double and aggregates using sum</li>
  </ul>

  <li><code>{`forEach`}</code>: performs an action on each element (side effects)</li>
  <ul>
    <li><code>{`.forEach(x -> System.out.println(x))`}</code>: executes an action for each element</li>
  </ul>

  <li><code>{`collect`}</code>: transforms the stream into a collection or result container</li>
  <ul>
    <li><code>{`.collect(Collectors.toList())`}</code>: collects elements into a list</li>
  </ul>

  <li><code>{`filter`}</code>: selects elements based on a condition</li>
  <ul>
    <li><code>{`.filter(x -> x > 10)`}</code>: keeps elements that match the predicate</li>
  </ul>

  <li><code>{`reduce`}</code>: combines elements into a single result</li>
  <ul>
    <li><code>{`.reduce(0, (a, i) -> a + i)`}</code>: sums elements using a reduction function</li>
    <ul>
      <li><code>{`a`}</code>: the accumulated value</li>
      <li><code>{`i`}</code>: the current element in the stream</li>
    </ul>
  </ul>

  <li><code>{`anyMatch`}</code>: checks if any element matches a condition</li>
  <ul>
    <li><code>{`.anyMatch(x -> x > 10)`}</code>: returns true if at least one element matches</li>
  </ul>

  <li><code>{`allMatch`}</code>: checks if all elements match a condition</li>
  <ul>
    <li><code>{`.allMatch(x -> x > 10)`}</code>: returns true only if all elements match</li>
  </ul>

  <li><code>{`noneMatch`}</code>: checks if no elements match a condition</li>
  <ul>
    <li><code>{`.noneMatch(x -> x > 10)`}</code>: returns true if no elements match</li>
  </ul>
</ul>
  </ul>
  
    <CodeBlock language='java'>{`
// Thread-safe with Concurrent Collection

List<Integer> list = IntStream.range(0, 10000).boxed().collect(Collectors.toList());
Map<Integer, Integer> map = new ConcurrentHashMap<>();
list.parallelStream().forEach(i -> {
  map.put(i, i);
});

// ==============================================================
// Thread-safe with Collector

// Use Collectors.toMap to safely put into Map; faster and safer than ConcurrentMap
List<Integer> list = IntStream.range(0, 10000).boxed().collect(Collectors.toList());
Map<Integer, Integer> map = list.parallelStream().collect(Collectors.toMap(k -> k, v -> v));

 `}</CodeBlock>

  <hr/>
</section>


    {/* THREAD SAFETY VS ATOMICITY */}
<section>
  <h3 className="section-header" id="thread-safety-atomicity">Thread Safety vs Atomicity</h3>

  <h4 className="sub-section-header">Thread Safety</h4>
  <p>
    A piece of code or data structure is <strong>thread-safe</strong> if it behaves correctly when accessed by multiple threads at the same time,
    without causing data corruption or inconsistent state. (does not promise atomicity and no race conditions)
  </p>
  <a href="https://stackoverflow.com/questions/58720109/does-thread-safe-mean-no-race-conditions" target="_blank" rel="noopener noreferrer">Read more about thread safety</a>

  <p><strong>Example:</strong></p>
  <CodeBlock language='java'>{`
counter++; // NOT thread-safe (race condition)
  `}</CodeBlock>

  <h4 className="sub-section-header">Atomicity</h4>
  <p>
    An operation is <strong>atomic</strong> if it happens completely or not at all (no partial state). It does not allow other thread to interleave inside that operation
  </p>

  <p><strong>Example:</strong></p>
  <CodeBlock language='java'>{`
AtomicInteger counter = new AtomicInteger(0);
counter.incrementAndGet(); // atomic operation
  `}</CodeBlock>

  <h4>Key Difference</h4>
  <ul>
    <li><strong>Thread Safety</strong> = overall correctness in a multi-threaded environment</li>
    <li><strong>Atomicity</strong> = a single operation cannot be interrupted</li>
  </ul>

  <p>
    A system can be thread-safe without every individual operation being atomic, as long as it ensures correctness through coordination.
  </p>

  <h4 className="sub-section-header">Concurrent Data Structures</h4>
  <p>
    Most concurrent data structures in Java (like <code>ConcurrentHashMap</code>) guarantee <strong>thread safety</strong>,
    but <strong>not atomicity across multiple operations</strong>.
  </p>

  <p><strong>Example:</strong></p>
  <CodeBlock language='java'>{`
if (!map.containsKey(key)) {
    map.put(key, value); // NOT atomic as a whole
}
  `}</CodeBlock>

  <p>
    The above is thread-safe at the method level, but the combination of operations is <strong>not atomic</strong> and can lead to race conditions.
  </p>

  <p><strong>Correct atomic alternative:</strong></p>
  <CodeBlock language='java'>{`
map.putIfAbsent(key, value); // atomic

// ====================================

E item = blockingQueue.poll(); // atomic
if (item != null) {
    process(item); // atomic
}

// ====================================

E item = blockingQueue.poll(); // atomic
if (item != null) {
    sharedList.add(item); // not thread safe
}

// ====================================

// Block to get item from queue atomically
synchronized(lock) {
  // atomic using monitor pattern
  while (queue.isEmpty()) {
    queue.wait();
  }
  // critical section
  item = queue.pop();

  lock.notifyAll();
}
  `}</CodeBlock>

  <h4>Summary</h4>
  <ul>
    <li>Thread-safe ≠ atomic</li>
    <li>Atomic operations are building blocks for thread safety</li>
    <li>Most concurrent collections guarantee safe access, but not multi-step atomicity</li>
  </ul>
    <hr/>
</section>

      {/* THREAD */}
      <section>
        <h3 className='section-header' id='thread'>
          Thread
        </h3>
        <p>Represents an actual thread of execution</p>
        <ul>
          <li>
            Each <code>Thread</code> runs independently and has its own call stack.
          </li>
          <li>Create a thread by:</li>
          <ul>
            <li>
              Extending the <code>Thread</code> class and overriding its <code>run()</code> method
            </li>
            <li>
              Passing a <code>Runnable</code> object to a <code>Thread</code> constructor
            </li>
          </ul>
          <li>Methods to control its execution:</li>
          <ul>
            <li>
              <code>start()</code> : Begins the thread's execution, calling its <code>run()</code> method
            </li>
            <li>
              <code>sleep(long millis)</code> : Pauses the current thread for the specified number of milliseconds
              without releasing locks.
            </li>
            <li>
              <code>join()</code> : Causes the current thread to wait until the thread on which <code>join()</code> is
              called completes execution.
            </li>
            <li><code>thread1.join(thread2)</code>: thread2 can only start after thread1 finishes</li>
            <li><code>thread1.join()</code>: the current thread must wait for thread1 to finish</li>
            <li>
              <code>interrupt()</code> : Interrupts a thread, signaling it to stop its current operation (commonly used
              with <code>sleep()</code> or blocking operations).
            </li>
            <li>
              <code>isAlive()</code> : Returns <code>true</code> if the thread has been started and has not yet
              terminated.
            </li>
          </ul>
        </ul>
        <hr />
      </section>

      {/* RUNNABLE */}
      <section>
        <h3 className='section-header' id='runnable'>
          Runnable / Callable
        </h3>
        <p>Represents a task that can be executed by a thread.</p>
        <ul>
          <li>
            <code>Runnable</code> is a functional interface with a single method: <code>void run()</code>.
          </li>
          <li><code>Callable</code> is the same as <code>Runnable</code> but is able to return the result once finished</li>
          <li>It does not represent a thread itself, only the code that a thread will execute.</li>
          <li>
            Create a Runnable task by:
            <ul>
              <li>
                Implementing the <code>Runnable</code> interface and overriding <code>run()</code>
              </li>
              <li>Using a lambda expression or method reference for short tasks</li>
            </ul>
          </li>
          <li>
            Execute a Runnable task by passing it to a <code>Thread</code> or an <code>ExecutorService</code>:
            <ul>
              <li>
                <code>Thread t = new Thread(runnable); t.start();</code> : Executes the task in a new thread
              </li>
              <li>
                <code>executor.submit(runnable);</code> : Executes the task via an ExecutorService
              </li>
            </ul>
          </li>
        </ul>
        <hr />
      </section>

      {/* EXECUTOR SERVICE */}
      <section>
        <h3 className='section-header' id='executorservice'>
          ExecutorService
        </h3>
        <p>A high-level framework for managing and executing tasks asynchronously.</p>
        <ul>
          <li>
            Part of <code>java.util.concurrent</code> package.
          </li>
          <li>Decouples task submission from thread management, making concurrency easier to handle.</li>
          <li>
            Can execute <code>Runnable</code> and <code>Callable</code> tasks.
          </li>
          <li>
            Commonly created using <code>Executors</code> factory methods:
            <ul>
              <li>
                <code>Executors.newFixedThreadPool(int n)</code> : A fixed-size pool of threads
              </li>
              <li>
                <code>Executors.newCachedThreadPool()</code> : A dynamically growing pool
              </li>
              <li>
                <code>Executors.newSingleThreadExecutor()</code> : A single-threaded executor
              </li>
            </ul>
          </li>
          <li>
            Provides advanced configuration:
          <ul>
            <li><code>corePoolSize</code> : Minimum number of threads to keep alive</li>
            <li><code>maximumPoolSize</code> : Maximum number of threads allowed in the pool</li>
            <li><code>keepAliveTime</code> : Time excess idle threads wait for new tasks before terminating</li>
            <li><code>workQueue</code> : Queue for holding tasks before they are executed</li>
          </ul>
        </li>
          <li>
            Important methods:
            <ul>
              <li><code>execute(Runnable task)</code> : Submits a task for execution without returning a result.</li>
              <li><code>submit(Runnable/Callable task)</code> : Submits a task for execution and returns a{' '}<code>Future</code>.</li>
              <li>
                <code>invokeAll(Collection&lt;Callable&gt; tasks)</code> : Executes a collection of tasks and waits for
                all to complete.
              </li>
              <li>
                <code>shutdown()</code> : Initiates an orderly shutdown in which previously submitted tasks are
                executed, but no new tasks are accepted.
              </li>
              <li>
                <code>shutdownNow()</code> : Attempts to stop all actively executing tasks and halts the processing of
                waiting tasks.
              </li>
              <li>
                <code>awaitTermination(long timeout, TimeUnit unit)</code> : Blocks until all tasks have completed after
                a shutdown request, or the timeout occurs.
              </li>
              <li><code>getPoolSize()</code> : Returns the current number of threads in the pool.</li>
              <li><code>getActiveCount()</code> : Returns the approximate number of threads that are actively executing tasks.</li>
            </ul>
          </li>
          <li>Useful to know:</li>
          <ul>
            <li><code>Runtime rt = Runtime.getRuntime(); int cpus = rt.availableProcessors();</code>: to get number of available resource on system</li>
          </ul>
          <li>Shutting down ExecutorService:</li>
          <ul>
            <li><code>.shutdown()</code>: wait for existing tasks to finish without allowing new tasks and threads terminate when work is done</li>
            <li><code>.awaitTermination(x, TimeUnit.SECONDS)</code>: wait for x seconds before executing next</li>
            <li><code>.shutdownNow()</code>: forced termination and return a list containing tasks that never started execution</li>
            <ul>
              <li>It can only interrupts threads that respond to interrupts</li>
              <li>If the thread is blocked when it gets interrupted then it will throw an <code>InterruptedException</code> and need to be handle properly</li>
              <li>Do not use <code>while(true)</code> or the thread will ignore the interrupt</li>
              <CodeBlock language='java'>{`
// interrupt-aware task
 while (!Thread.currentThread().isInterrupted()) {
    doWork();
} 

// ===========================================
// Handling InteruptedException    

while (!Thread.currentThread().isInterrupted()) {
    try {
        blockingQueue.take();               // blocking method will cause InterruptedException if thread is blocked when it gets interrupted
    } catch (InterruptedException e) {
        Thread.currentThread().interrupt(); // restore flag to properly end thread
        break; // exit loop
    }
    doWork();
}        
              `}</CodeBlock>
            </ul>
          </ul>
          <br/>
           <li>Typical Shutdown Flow:</li>
        </ul>
        <CodeBlock language='java'>{`
// soft shutdown start
executor.shutdown();

try {
    // wait 60s before calling hard shutdown
    if (!executor.awaitTermination(60, TimeUnit.SECONDS)) {
        executor.shutdownNow();
    }
} catch (InterruptedException e) {
    // Thread responsible for awaitingTermination got interrupted while waiting so we want to stop all tasks NOW instead of wait
    executor.shutdownNow();
    Thread.currentThread().interrupt();
} finally {
    if(!ex.isTerminated()) {
      // a collection of the unfinished tasks
      List<Runnable> unfinished = ex.shutdownNow();
      System.err.println("Pool did not terminate");  
    }
}       
        `}</CodeBlock> 
        <hr />
      </section>

      {/* DATA STRUCTURE */}
       <section>
         <h3 className="section-header" id="data-structures">Data Structures</h3>
         <p>Common data structures for synchronization:</p>
        <ul>
          <li>CopyOnWrite Collections:</li>
          <ul>
            <li>Strongly consistent collection; iterators will take snapshot of a CopyOnWrite collections</li>
            <li>Ideals for...</li>
            <ul>
              <li>{`Reads >> Writes`}</li>
              <li>Many threads read concurrently</li>
              <li>iteration must be safe without locks</li>
            </ul>
            <li>Examples:</li>
            <ul>
              <li>eveny listener lists</li>
              <li>configuration lists</li>
              <li>routing tables</li>
              <li>plugin registries</li>
            </ul>
            <li>Avoid if...</li>
            <ul>
              <li>Frequent writes</li>
              <li>Large collection</li>
              <li>Memory sensitive systems</li>
            </ul>
          </ul>
          <br/>
          <li>Concurrent Collections: allow non-blocking reads</li>
          <ul>
            <li>Weakly consistent collection</li>
            <li><code>ConcurrentHashMap</code></li>
            <ul>
              <li>Guarantees <b>thread safety</b> for read and write operations, but does not guarantee <b>atomicity</b></li>
            </ul>
            <li><code>ConcurrentLinkedQueue | ConcurrentLinkedDeque</code></li>
            <li>Also has method <code>.poll(x)</code> to have consumer wait x sec before checking again instead of infinite wait</li>
            <li>Examples:</li>
            <ul>
              <li>Web servers</li>
              <li>Message queues</li>
              <li>Caches</li>
              <li>Event systems</li>
            </ul>
          <br/>
          <li>BlockingQueue</li>
          <ul>
            <li><code>ArrayBlockingQueue | LinkedBlockingQueue | PriorityBlockingQueue | DelayQueue | SynchronousQueue (zero capacity queue)</code></li>
            <li>Methods:</li>
            <ul>
               <li><code>put(E e)</code>: waits until space becomes available, then inserts element</li>
               <li><code>take()</code>: waits until an element is available, then removes it</li>
               <li><code>offer(E e, long timeout, TimeUnit unit)</code>: waits up to the timeout for space to become available</li>
               <li><code>poll(long timeout, TimeUnit unit)</code>: waits up to the timeout for an element</li>
               <br/>
               <li><code>add(E e)</code>: inserts element, throws <code>IllegalStateException</code> if the queue is full</li>
               <li><code>remove()</code>: removes and returns the head element, throws exception if the queue is empty</li>
               <li><code>element()</code>: returns the head element without removing it, throws exception if the queue is empty</li>
               <li><code>offer(E e)</code>: inserts element, returns <code>false</code> if the queue is full</li>
               <li><code>poll()</code>: removes and returns the head element, returns <code>null</code> if the queue is empty</li>
               <li><code>peek()</code>: returns the head element without removing it, returns <code>null</code> if the queue is empty</li>
            </ul>
          </ul>
          <li>BlockingDeque: double-ended queue</li>
          <ul>
            <li><code>LinkedBlockingDeque</code></li>
          </ul>
          <br/>
           <li>SynchronousQueue: zero-capacity queue</li>
           <br/>
           <li>LinkedTransferQueue: same as normal queue but allow for direct transfer of item to a waiting consumer without storing the item first</li>
           <ul>
            <li>reduces latency</li>
            <li>Methods:</li>
            <ul>
              <li><code>transfer(E e)</code>: transfers the element to a waiting consumer, blocking until the consumer receives it</li>
              <li><code>tryTransfer(E e)</code>: immediately transfers the element if a consumer is already waiting; returns <code>false</code> otherwise</li>
              <li><code>tryTransfer(E e, long timeout, TimeUnit unit)</code>: waits up to the specified timeout for a consumer to receive the element</li>
              <li><code>hasWaitingConsumer()</code>: returns <code>true</code> if there is at least one consumer waiting to receive an element</li>
              <li><code>getWaitingConsumerCount()</code>: returns an estimate of the number of consumers waiting to receive elements</li>
            </ul>
           </ul>
          </ul>
          <br/>
          <li>Atomic Structures</li>
          <ul>
            <li><code>AtomicInteger | AtomicLong | AtomicReference</code></li>
          </ul>
          <br/>
          <li>CyclicBarrier</li>
          <ul>
            <li>synchronization tool that let a group of threads wait for each other to reach a common point before continuing</li>
            <li>Methods:</li>
            <ul>
              <li><code>await()</code>: waits until all parties reach the barrier</li>
              <li><code>await(long timeout, TimeUnit unit)</code>: waits until all parties reach the barrier or the timeout expires</li>
              <li><code>getParties()</code>: returns the number of threads required to trip the barrier</li>
              <li><code>getNumberWaiting()</code>: returns the number of threads currently waiting at the barrier</li>
              <li><code>isBroken()</code>: returns <code>true</code> if the barrier is in a broken state</li>
              <li><code>reset()</code>: resets the barrier to its initial state</li>
            </ul>
            <li>Examples:</li>
            <ul>
              <li>Physics simulation</li>
              <li>Game engine</li>
              <li>Matrix calculations</li>
              <li>Parallel algorithms</li>
            </ul>
          </ul>
        </ul>
        <hr/>
      </section>

       {/* SYNCHRONIZED */}
       <section>
         <h3 className="section-header" id="synchronized-monitor">Synchronized/Monitor Blocks</h3>
         <p>Use to enforce mutual exclusion in an encapsulated manner</p>
         <ul>
          <li>Manages a lock object to determine which thread can enter <code>synchronized</code> block</li>
          <ul>
            <li>lock object should be <code>private final Object</code>, but Java accept any object</li>
            <li>Calling <code>lock.wait()</code> suspend the current thread, release the lock, and free-up resources used by the now-waiting thread</li>
            <ul>
              <li>Always call <code>lock.wait()</code> inside a <code>while</code> loop because multiple threads generally wake up at the same time, and threads are not allowed to immediately run after waking because the lock has not been released by the notifying thread</li>
            </ul>
            <li>Calling <code>lock.notifyAll()</code> wake up all waiting threads, but the notifying thread still has the lock</li>
          </ul>
          <li>Also, uses a conditional variable to check it's alright to run the critical section code</li>
          <ul>
            <li>Conditional variable do not have to be atomic if only accessed inside the <code>synchronized</code> block</li>
          </ul>
          </ul>
          <p><b><u>Key Methods</u></b>:</p>
          <ul>
            <li><code>synchronized(lock)</code>: acquire the lock to enter <code>syncrhonized</code> block</li>
            <ul>
              <li>lock is released automatically after leaving <code>syncrhonized</code> block</li>
            </ul>
            <li><code>lock.wait()</code>: releases lock and suspend thread to free up resources</li>
            <ul>
              <li><code>lock.sleep()</code>: pause thread and does NOT release lock</li>
            </ul>
            <li><code>lock.notifyAll()</code>: keep lock while waking up all waiting threads</li>
            <ul>
              <li><code>lock.notify(): wake up a random thread</code></li>
            </ul>
          </ul>
        <CodeBlock language="java">{`
private final Object lock = new Object();
private final boolean isFull = false;

public void put(item){
  synchronized(lock){
    while(isFull){
      lock.wait();
    }
    // critical section
    enqueue(item);

    // Make sure to wake up all waiting threads
    lock.notifyAll();
  }
}
        `}</CodeBlock>

        <br/>
        <p><b><u>Synchronized Method & Static</u></b></p>
        <p>If <code>synchronized</code> is used on the whole method, then the lock is <code>this</code> - the current instance of the class</p>
          <ul>
            <li>Eliminate needs for a <code>lock</code> object</li>
            <li><code>static synchronized</code> method would use the class, <code>MyClass.class</code>, itself as the lock causing all <code>MyClass</code> instance to be locked</li>
            <ul>
              <li><code>static</code> variable behave similarly</li>
            </ul>
          </ul> 
          <CodeBlock language="java">{`
private final boolean isFull = false;

public synchronized void put(item){
  while(isFull){
     lock.wait();
  }
  // critical section
  enqueue(item);

  // Make sure to wake up all waiting threads
  lock.notifyAll();
}
        `}</CodeBlock>
            <hr/>
      </section>
          
      {/* CLASS DESIGN TIPS */}
       <section>
       <h3 className="section-header" id="class-design-tips">Class Design Tips</h3>
       <ul>
        <li>Rule of thumb: share objects, not static state</li>
        <ul>
          <li>Non-static version allows multiple <code>TaskQueue</code> of different types to be created like <code>Queue A (CPU tasks)</code> and <code>Queue B (I/O tasks)</code></li>
        </ul>
        <CodeBlock language="java">{`
// GOOD DESIGN

public class TaskQueue{
  private queue;
  public synchronized void put() {}
}
====================================
// BAD DESIGN

public class TaskQueue{
  private static queue;
  public static synchronized void put() {}
}
        `}</CodeBlock>
        <li>Separation of concerns:</li>
        <ul>
          <li>In multithreading, there are 2 needs:</li>
          <ul>
            <li>Creating and scheduling some Java code for execution</li>
            <li>Optimizing the execution of that code for the hardware resources you have available</li>
          </ul>
          <li><code>Executors</code> was designed to deal with number 2</li>
        </ul>
       </ul>
          <hr/>
      </section>

         {/* FORK/JOIN FRAMEWORK */}
       <section>
       <h3 className="section-header" id="fork-join-framework">Fork / Join Framework</h3>
       <p>The Fork / Join framework provide a way for programmers to do with one BIG problem utilizing threads; like filling a 100mil elements array with randomly generated value</p>
       <ul>
        <li>Any problem that can be recursively divided can be solved using <code>ForkJoinPool</code></li>
        <li>The problem is broken down into subtask using <u>divide-and-conquer</u></li>
        <li>If the problem is broken into too many subtasks, then the overhead can cause sequential work to be better than parallel work</li>
        <ul>
          <li><code>ForkJoinPool</code>: thread pool that manages <code>ForkJoinTask</code></li>
          <ul>
            <li><code>ForkJoinPool pool = new ForkJoinPool()</code>: create the pool to manage threads</li>
            <li><code>pool.invoke(ForkJoinTask)</code>: perform the task and return the value if it's a <code>RecursiveTask</code></li>
          </ul>
          <li><code>ForkJoinTask</code>: abstract class for task with the following concrete subclasses</li>
          <ul>
            <li><code>RecursiveAction</code>: returns nothing</li>
            <li><code>{`RecursiveTask<V>`}</code>: returns a value of type <code>V</code></li>
          </ul>
          <li>Methods of <code>ForkJoinTask</code>:</li>
          <ul>
            <li><code>[ForkJoinTask].fork()</code>: submit a subtask to the pool for parallel execution</li>
            <li><code>[ForkJoinTask].join()</code>: wait for a subtask to finish and get the result; normally called at the end of compute on the subtask that was forked</li>
            <li><code>compute()</code>: abstract method that must be implemented and where you define how the task is divided</li>
            <li><code>invokeAll(task1, task2)</code>: shorthand way to use the 3 methods above</li>
            <ul>
              <li>Slightly less efficient because <code>invokeAll</code> fork both tasks so it creates more threads and then wait</li>
            </ul>
          </ul>
        </ul>
        <br/>
        <li>RecursiveAction Example:</li>
            <CodeBlock language='java'>{`
// RecursiveAction (no return value)

@Override
protected void compute() {
  ...
  MyRecursiveAction a1 = new MyRecursiveAction(data, start, halfWay);
  MyRecursiveAction a2 = new MyRecursiveAction(data, halfWay, end);

  a1.fork();       // queue left half of task
  a2.compute();    // work on right half of task
  a1.join();       // wait for queued task to be completed
}     

// ============================================================
// Using invokeAll

MyRecursiveAction a1 = new MyRecursiveAction(data, start, halfWay);
MyRecursiveAction a2 = new MyRecursiveAction(data, halfWay, end);
invokeAll(a2, a1);
            `}</CodeBlock>
          
       <br/>
       <li>{`RecursiveTask<Integer>`} Example:</li>
            <CodeBlock language='java'>{`
// RecursiveTask (returning int)

@Override
protected Integer compute() {
  ...
  FindMaxTask a1 = new FindMaxTask(data, start, halfWay);
  FindMaxTask a2 = new FindMaxTask(data, halfWay, end);

  a1.fork();                     // queue left half of task
  int result2 = a2.compute();    // work on right half of task
  int result1 = a1.join();       // wait for queued task to be completed

  return result2 > result1 ? result2 : result1;
}     

// ============================================================
// Using invokeAll

FindMaxTask a1 = new FindMaxTask(data, start, halfWay);
FindMaxTask a2 = new FindMaxTask(data, halfWay, end);

invokeAll(a2, a1);
int result2 = a2.join();
int result1 = a1.join();

return result2 > result1 ? result2 : result1;
            `}</CodeBlock>
             <br/>
          <li>Overall Example:</li>
          <CodeBlock language='java'>{`
 public class SumTask extends RecursiveTask<Long> {
      private final long[] array;
        private final int start, end;
        private final int THRESHOLD = 1000; // adjust for optimal performance

        SumTask(long[] array, int start, int end) {
            this.array = array;
            this.start = start;
            this.end = end;
        }

        @Override
        protected Long compute() {
            int length = end - start;
            if (length <= THRESHOLD) {
                long sum = 0;
                for (int i = start; i < end; i++) sum += array[i];
                return sum;
            } else {
                int mid = start + length / 2;
                SumTask left = new SumTask(array, start, mid);
                SumTask right = new SumTask(array, mid, end);

                // Fork left task to run asynchronously
                left.fork();

                // Compute right task in current thread
                long rightResult = right.compute();

                // Wait for left task to finish and get result
                long leftResult = left.join();

                // Combine results
                return leftResult + rightResult;
            }
        }
}

// ================================================================
// in main()

public static void main(String[] args) {
        // Create a large array
        long[] array = new long[10_000_000];
        for (int i = 0; i < array.length; i++) array[i] = i + 1;

        // Create a ForkJoinPool
        ForkJoinPool pool = new ForkJoinPool();

        // Submit the main task and get the result
        long sum = pool.invoke(new SumTask(array, 0, array.length));

        System.out.println("Sum = " + sum);
} 
          `}</CodeBlock>
       </ul>
          <hr/>
      </section>

        {/* PARALLEL STREAM */}
       <section>
       <h3 className="section-header" id="parallel-streams">Parallel Streams</h3>
       <p>Parallel Streams is an abstraction of Fork/Join framework, but only work on streams/collections</p>
       <ul>
        <li>Allows for parallel processing of collection data</li>
        <li><code>.parallel()</code> for <code>IntStream | LongStream | DoubleStream</code></li>
        <CodeBlock language='java'>{`
Arrays.stream(array)
      .parallel()
      .average();   // returns OptionalDouble        
        `}</CodeBlock>
        <li><code>.parallelStream()</code> and <code>.collect()</code> for collections</li>
        <CodeBlock language='java'>{`
List<String> result = list.parallelStream()
                          .filter(s -> s.length() > 3)
                          .collect(Collectors.toList());     
        `}</CodeBlock>
        <br/>
        <li>Transformative Methods</li>
        <ul>
          <li><code>map()</code>: Transform each element</li>
          <li><code>mapToInt()</code>, <code>mapToLong()</code>, <code>mapToDouble()</code>: Transform to primitive streams for numeric operations</li>
          <li><code>filter()</code>: Keep only elements matching a predicate</li>
          <li><code>distinct()</code>: Remove duplicates</li>
          <li><code>sorted()</code>: Sort the elements (parallel sort internally)</li>
          <li><code>limit(n)</code> / <code>skip(n)</code>: Truncate or skip elements</li>
          <li><code>flatMap()</code>: Flatten nested streams</li>
          <li><code>peek()</code>: Inspect elements without modifying them</li>
        </ul>
        <br/>
        <li>Terminal Methods: return a final result</li>
        <ul>
          <li><code>forEach()</code>: Apply an action to each element (order not guaranteed in parallel)</li>
          <li><code>forEachOrdered()</code>: Apply action in encounter order (slower in parallel)</li>
          <li><code>collect()</code>: Gather elements into a collection or map (e.g., <code>Collectors.toList()</code>, <code>toSet()</code>, <code>groupingBy()</code>)</li>
          <li><code>reduce()</code>: Combine elements to a single value using a binary operator</li>
          <li><code>min()</code>, <code>max()</code>: Get the minimum or maximum element</li>
          <li><code>count()</code>: Count elements matching the pipeline</li>
          <li><code>anyMatch()</code>, <code>allMatch()</code>, <code>noneMatch()</code>: Boolean checks over elements</li>
          <li><code>findAny()</code>, <code>findFirst()</code>: Return one element (<code>findAny</code> can be faster in parallel)</li>
          <li><code>sum()</code>, <code>average()</code>, <code>summaryStatistics()</code>: Numeric aggregations for primitive streams</li>
        </ul>
        <br/>
        <li>Gotchas:</li>
        <ul>
          <li>When using transformative methods (<code>map or filter</code>), <u>racing condition</u> can be a problem if the method perform write on a shared variable/object</li>
          <li>Methods that are order-sensitive (<code>sorted() | limit() | skip() | distinct() | forEachOrdered() | findFirst()</code>) can be slower in parallel</li>
          <ul>
            <li>Ordering can be removed from the above by calling <code>.unordered()</code> and can improve performance, but cause random result</li>
          </ul>
        </ul>
       <CodeBlock language='java'>{`
List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
long sum = nums.stream()
             .unordered()     // make the stream unordered
             .parallel()  
             .sum()     
       `}</CodeBlock>
       </ul>
        <hr/>
        <p><b><u>If Collecting Items into a List</u></b></p>
       <ul>
        <li>Do NOT use <code>.add(item)</code> to add item to a list because it will cause racing condition</li>
        <li>Instead use <code>.collect(Collectors.toList())</code> or a synchronized list (but synchronization will impact performance)</li>
        <CodeBlock language='java'>{`
// Bad way that will cause racing condition

List<Dog> dogsOlderThan7 = new ArrayList<>();
long count = dogs.stream()                // stream the dogs
    .unordered()                          // make the stream unordered
    .parallel()                           // make the stream parallel
    .filter(d -> d.getAge() > 7)          // filter the dogs
    .peek(d -> dogsOlderThan7.add(d))     // save... with a side effect -> cause racing condition
    .count();

//====================================================================
// Good way using collect()

List<Dog> dogsOlderThan7 =
    dogs.stream()                       // stream the dogs
        .unordered()                    // make the stream unordered
        .parallelo                      // make the stream parallel
        .filter(d -> d.getAge() > 7)    // filter dogs older than 7
        .collect(Collectors.toList());  // collect older dogs into a List -> safer       
        `}</CodeBlock>
       </ul>
       
       <hr/>
       </section>


       {/* SEMAPHORE */}
       <section>
         <h3 className="section-header" id="semaphore">Semaphore</h3>
         <p>Semaphores are low-level objects to synchronize threads, but offer more flexibility like handling N instances of a limited resource</p>
         <p><b><u>Key Methods</u></b>:</p>
          <ul>
            <li><code>emptySlots.acquire()</code>: request if there are available resources</li>
            <ul>
              <li>Check if <code>{`emptySlots > 0`}</code> and if is then permit the thread to continue and at the same time decrement <code>emptySlots--</code>, else cause thread to wait/block it</li>
            </ul>
            <li><code>emptySlots.release()</code>: wake up all waiting threads that were caused by <code>emptySlots.acquire()</code> and at the same time increment <code>emptySlots++</code></li>
          </ul>
          <CodeBlock language='java'>{`
private final Semaphore mutex = new Semaphore(1); -> mutual exclusion lock
private final Semaphore emptySlots = new Semaphore(10); -> capacity or N resources
private final Semaphore usedSlots = new Semaphore(0); 

public void put(item) {
  emptySlots.acquire();
  mutex.acquire();

  // critical section
  enqueue(item);

  mutex.release();
  usedSlots.release();
}

public T pop() {
  usedSlots.acquire();
  mutex.acquire();

  // critical section
  T = pop(item);

  mutex.release();
  emptySlots.release();

  return T;
}
          `}</CodeBlock>
        <hr/>
      </section>

       {/* REENTRANTLOCK */}
       <section>
         <h3 className="section-header" id="ReentrantLock">ReentrantLock</h3>
         <p>Similar to <code>synchronized</code> block, but offer more flexibility like interruptible lock, first-come-first-served lock, and allow finer control of which thread wake up like <code>semaphore</code></p>
          <p><b><u>Key Methods</u></b>:</p>
          <ul>
            <li><code>lock.lock()</code>: acquire the <code>lock</code></li>
            <li><code>lock.unlock()</code>: release the <code>lock</code></li>
            <ul>
              <li>Should always be put in <code>final</code> block in case thread throws Exception</li>
            </ul>
            <li><code>notFull.await()</code>: wait and suspend thread until <code>notFull.signal()</code> is called</li>
            <li><code>notFull.signal()</code>: wake up a thread that is waiting because of <code>notFull.await()</code> is called</li>
            <ul>
              <li><code>notFull.signalAll()</code>: wake up all threads tied to the condition <code>notFull</code></li>
            </ul>
          </ul>
          <CodeBlock language='java'>{`
private final ReentrantLock lock = new ReentrantLock();

private final Condition notFull = lock.newCondition();
private final Condition notEmpty = lock.newCondition();

public void put(item) {
    lock.lock();
    try {
        while (isFull) {
            notFull.await();   // while Full, will wait until notFull
         }

        // critical section
        enqueue(item);

        notEmpty.signal(); // equivalent to notifyAll()
     } finally {
        lock.unlock();
     }
}         

public T pop() {
    lock.lock();
    try {
      while (isEmpty) {
           notEmpty.await();  // while Empty, will wait until notEmpty
      }

      // critical section
      enqueue(item);

      notFull.signal(); 
    } finally {
      lock.unlock();
    }
}      
          `}</CodeBlock>
        <hr/>
      </section>

             {/* REENTRANT READ AND WRITE LOCK */}
       <section>
         <h3 className="section-header" id="ReentrantReadWriteLock">ReentrantReadWriteLock</h3>
         <p>This lock separates readers and writers, and allow multiple readers in the critical section unless a writer is in it</p>
         <p><b><u>Key Methods</u></b>:</p>
          <ul>
            <li><code>lock.readLock().lock()</code>: acquire the <code>lock</code> for the purpose of reading, blocking any writer from entering</li>
            <ul>
              <li><code>lock.readlock().unlock()</code>: release the lock; should be placed in <code>final</code> block</li>
            </ul>
            <li><code>lock.writeLock().lock()</code>: acquire the <code>lock</code> for the purpose of writing, blocking both readers and writer from entering</li>
            <ul>
              <li><code>lock.writeLock().unlock()</code>: release the lock; should be placed in <code>final</code> block</li>
            </ul>
          </ul>
          <CodeBlock language='java'>{`
class Cache {

    private final ReentrantReadWriteLock rwLock =
        new ReentrantReadWriteLock();

    public int read() {

        rwLock.readLock().lock();
        try {
            //critical section
            return value;
        } finally {
            rwLock.readLock().unlock();
        }
    }

    public void write(int newValue) {

        rwLock.writeLock().lock();
        try {
            //critical section
            value = newValue;
        } finally {
            rwLock.writeLock().unlock();
        }
    }
}    
          `}</CodeBlock>
          <hr/>
      </section>

      {/* DIAGRAM */}
      <section>
        <h3 className='section-header' id='diagram'>RAG & Wait-Graph Diagram</h3>
        <p>Resource Allocation Graph (RAG) and wait-graph can be used to identify deadlocks in a system: <a href='/Tools/diagram'>Diagram Section</a></p>
      </section>
    </>
  );
}
