import CodeBlock from '@/components/shared/CodeBlock';
import SearchContainer from '@/components/shared/SearchContainer';

export const metadata = {
  title: 'Java Multithreading',
  description: 'Notes on multhreading in Java',
};

export default function JavaMultithread() {
  return (
    <>
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
          Runnable
        </h3>
        <p>Represents a task that can be executed by a thread.</p>
        <ul>
          <li>
            <code>Runnable</code> is a functional interface with a single method: <code>void run()</code>.
          </li>
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
            Important methods:
            <ul>
              <li>
                <code>submit(Runnable/Callable task)</code> : Submits a task for execution and returns a{' '}
                <code>Future</code>.
              </li>
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
            </ul>
          </li>
        </ul>
        <hr />
      </section>

    {/* THREAD POOL EXECUTOR SERVICE */}
      <section>
  <h3 className='section-header' id='threadpoolexecutor'>
    ThreadPoolExecutor
  </h3>
  <p>A concrete implementation of <code>ExecutorService</code> that uses a pool of threads to execute tasks.</p>
  <ul>
    <li>
      Manages a pool of threads to improve performance and resource utilization by reusing threads instead of creating new ones for each task.
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
      Commonly created via <code>Executors</code> factory methods:
      <ul>
        <li><code>Executors.newFixedThreadPool(int n)</code></li>
        <li><code>Executors.newCachedThreadPool()</code></li>
      </ul>
    </li>
    <li>
      Important methods:
      <ul>
        <li>
          <code>execute(Runnable task)</code> : Submits a task for execution without returning a result.
        </li>
        <li>
          <code>submit(Runnable/Callable task)</code> : Submits a task and returns a <code>Future</code> representing its result.
        </li>
        <li>
          <code>shutdown()</code> : Initiates an orderly shutdown where previously submitted tasks are executed but no new tasks are accepted.
        </li>
        <li>
          <code>shutdownNow()</code> : Attempts to stop all actively executing tasks and halts processing of waiting tasks.
        </li>
        <li>
          <code>getPoolSize()</code> : Returns the current number of threads in the pool.
        </li>
        <li>
          <code>getActiveCount()</code> : Returns the approximate number of threads that are actively executing tasks.
        </li>
      </ul>
    </li>
  </ul>
  <hr/>
</section>

      {/* DATA STRUCTURE */}
       <section>
         <h3 className="section-header" id="data-structures">Data Structures</h3>
         <p>Common data structures for blocking queue:</p>
        <ul>
          <li>BlockingQueue</li>
          <ul>
            <li><code>ArrayBlockingQueue | LinkedBlockingQueue | PriorityBlockingQueue | DelayQueue | SynchronousQueue (zero capacity queue)</code></li>
          </ul>
          <li>BlockingDeque: double-ended queue</li>
          <ul>
            <li><code>LinkedBlockingDeque</code></li>
          </ul>
          <li>Concurrent Collections: allow non-blocking reads</li>
          <ul>
            <li><code>ConcurrentHashMap</code></li>
            <li><code>ConcurrentLinkedQueue | ConcurrentLinkedDeque</code></li>
          </ul>
          <li>Atomic Structures</li>
          <ul>
            <li><code>AtomicInteger | AtomicLong | AtomicReference</code></li>
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
        <p>Rule of thumb: share objects, not static state</p>
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
          <p>Non-static version allows multiple <code>TaskQueue</code> of different types to be created like <code>Queue A (CPU tasks)</code> and <code>Queue B (I/O tasks)</code></p>
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
