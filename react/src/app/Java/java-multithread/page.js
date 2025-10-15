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
</section>

    </>
  );
}
