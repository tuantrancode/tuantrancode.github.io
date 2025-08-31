import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
    title: "Hooks",
    description: "Notes on using the various hooks in React",
};

export default function ReactHooks() {

    return (
        <>
            {/*<!-- HOOKS-->*/}
            <section>
                <h3 className="section-header" id="hooks">Hooks</h3>
                <p>Hooks allow us to manage state, lifecycle methods, and other React features inside functional components.</p>
                <p>Some common hooks: <code>useState, useEffect, useContext, useReducer, useRef, useMemo, useCallback</code></p>
                <p><strong>Rules of Hooks</strong></p>
                <ul>
                    <li>Only call hooks at the top level (inside the main function body)</li>
                    <ul>
                        <li>i.e., don't call hooks inside loops, conditions, or nested functions</li>
                    </ul>
                    <li>Only call hooks in React functions (functional components and custom hooks)</li>
                    <ul>
                        <li>Functional components start with a capital letter</li>
                        <li>Custom hooks start with 'use', call other hooks, and return values, state, or logic (not JSX)</li>
                    </ul>
                </ul>
                <hr />
            </section>

            {/*<!-- STATE HOOK (useState)-->*/}
            <section>
                <h3 className="section-header" id="useState">State Hook</h3>
                <p><code>[ current, setState ] = useState(initial)</code></p>
                <ul>
                    <li><code>useState</code> : returns an array with the current state and a state setter</li>
                    <li><code>current</code> : the current state value</li>
                    <li><code>setState(callbackFunc)</code> : a function that we can use to update the value of the current
                        state</li>
                    <ul>
                        <li><code>setState( (current) =&gt; &#123;return newState&#125; )</code> : the <code>callbackFunc</code> always
                            have the current state (or previous state) as a parameter and return the new state</li>
                        <li>Always use a callback function in <code>setState</code> instead of using
                            <code>setState(current + 1)</code> because it can cause race condition
                        </li>
                        <li>React will always re-render the component (unless new state is the same as old) whenever the
                            setter function is called</li>
                        <ul>
                            <li>i.e. React will calls on the functional component again and re-render the whole component,
                                so the whole function rerun except with different state values</li>
                        </ul>
                    </ul>
                    <li><code>initial</code> : the initial value of the state (optional, but recommended to put an empty
                        object, array, or <code>null</code>, otherwise useState default to <code>undefined</code>)</li>
                </ul>
                <CodeBlock language='jsx'>
                    {`
      import { useState } from 'react';
      
      function Counter() {
        // 1. useState call
        <mark>const [count, setCount] = useState(0);</mark>
      
        const increment = () => {
          // 2. Update state
          <mark>setCount(prev =&gt; prev + 1);</mark>
        };
      
        return (
          <div>
            // 3. Use state
            <mark><p>Count: {count}</p></mark>
            <button onClick={increment}>Increase</button>
          </div>
        );
      }
          `}
                </CodeBlock>
                <hr />
            </section>

            <section>
                {/*<!-- EFFECT HOOK (useEffect)-->*/}
                <h3 className="section-header" id="useEffect">Effect Hook</h3>
                <p><code>useEffect(callbackFunc, [dependencyArray])</code></p>
                <ul>
                    <li><code>callbackFunc</code> returns a <code>cleanup()</code> function to be used before re-rendering
                        and unmounting a component</li>
                    <li>The 2nd argument takes a dependency array that tells <code>useEffect</code> to run only if any
                        variable in the array changed, like <code>[state]</code></li>
                    <ul>
                        <li>Passing an empty dependency array <code>[]</code> tells <code>useEffect</code> to only run after
                            the first render()</li>
                        <li>General rule of thumb is to include any variables or functions from outer scope that <code>useEffect</code> used, like the setter of the context</li>
                    </ul>
                </ul>
                <p><code>useEffect</code> runs...  everytime AFTER the component finishes rendering by calling on the callback
                    function, or effect</p>
                <ul>
                    <li>When the component is mounted.</li>
                    <li>When any value in the dependency array changes, it runs the cleanup function and then the effect.</li>
                    <li>It runs the cleanup function one last time before unmounting a component</li>
                </ul>
                <p><strong>Uses of Effect Hook: </strong></p>
                <ul>
                    <li>Use to fetch data from back-end, subscribe to a stream of data, manage timers and intervals,
                        read/edit DOM</li>
                    <li>There are 3 key moments in a component's lifecycle that can make use of the Effect Hook</li>
                    <ul>
                        <li>When component is first added/mounted to the DOM and renders</li>
                        <ul>
                            <li>Only the body of the <code>callbackFunc</code> is run</li>
                        </ul>
                        <li>When it re-render due to state or props change</li>
                        <ul>
                            <li>Both the body of the <code>callbackFunc</code> and <code>cleanup</code> function is run</li>
                        </ul>
                        <li>When it's removed/unmounted from the DOM</li>
                        <ul>
                            <li>Only the <code>cleanup</code> function is run</li>
                        </ul>
                    </ul>
                    <li>Keep hooks separate based on their effect - i.e. one <code>useEffect</code> hook for setting up menu
                        items and another <code>useEffect</code> for fetching data</li>
                </ul>

                <CodeBlock language='jsx'>
                    {`
      import { useState, useEffect } from 'react';
      
      export default function UsersList() {
        const [users, setUsers] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
      
        <mark>useEffect(() =&gt; {</mark>
          async function fetchUsers() {
            try {
              const response = await fetch("https://jsonplaceholder.typicode.com/users");
              if (!response.ok) throw new Error(\`HTTP error! status: \${response.status}\`);
              const data = await response.json();
              setUsers(data);
            } catch (err) {
              setError(err.message);
            } finally {
              setLoading(false);
            }
          }
          fetchUsers();
        }, <mark>[]</mark>);
      
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error: {error}</p>;
      
        return (
          <div>
            <h5>User List</h5>
            <ul>
              {users.map(user => (
                <li key={user.id}>
                  <strong>{user.name}</strong> — {user.email}
                </li>
              ))}
            </ul>
          </div>
        );
      }
          `}
                </CodeBlock>
                <hr />
            </section>

            <section>
                {/*<!-- EFFECT HOOK CLEANUP EXAMPLES -->*/}
                <h4 className="sub-section-header">When Cleanup is Needed</h4>
                <ul>
                    <li>Event listeners on elements outside the component - <code>window, document, body</code></li>
                    <CodeBlock language='jsx'>
                        {`
      useEffect(() =&gt; {
        function handleResize() {
          console.log(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
      
        return () =&gt; {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
            `}
                    </CodeBlock>

                    <li>Adding listeners using <code>ref</code></li>
                    <CodeBlock language='jsx'>
                        {`
      useEffect(() =&gt; {
        const btn = buttonRef.current;
        btn.addEventListener("click", handleClick);
        return () =&gt; btn.removeEventListener("click", handleClick);
      }, []);
            `}
                    </CodeBlock>

                    <li>Subscribing to data, websockets, or streaming APIs</li>
                    <CodeBlock language='jsx'>
                        {`
      useEffect(() =&gt; {
        const ws = new WebSocket("wss://example.com");
        ws.onmessage = event =&gt; console.log(event.data);
      
        return () =&gt; {
          ws.close(); // Cleanup when component unmounts
        };
      }, []);
            `}
                    </CodeBlock>

                    <li>Timers <code>setInterval</code> and <code>setTimeout</code> must be cleaned up</li>
                    <CodeBlock language='jsx'>
                        {`
      useEffect(() =&gt; {
        const timer = setInterval(() =&gt; {
          console.log("Tick");
        }, 1000);
      
        return () =&gt; clearInterval(timer);
      }, []);
            `}
                    </CodeBlock>

                    <li>Initializing libraries inside useEffect (Chart.js, Leaflet, GSAP) requires cleanup</li>
                    <CodeBlock language='jsx'>
                        {`
      useEffect(() =&gt; {
        const chart = new Chart(ctx, config);
        return () =&gt; chart.destroy();
      }, []);
            `}
                    </CodeBlock>
                </ul>
                <hr />
            </section>

            <section>
                {/*<!-- REFERENCE HOOK (useRef) -->*/}
                <h3 className="section-header" id="useRef">Reference Hook</h3>
                <p><code>ref = useRef(initial)</code></p>
                <ul>
                    <li><code>ref</code> : an object with a single property: <code>current</code> that will persist between
                        re-render</li>
                    <li><code>ref.current</code> : use to access and update the value of the object</li>
                    <li><code>initial</code> : inital value of <code>ref.current</code></li>
                    <li><code>useRef</code> will keep the reference if it's an object</li>
                    <li><code>ref</code> objects are removed on unmount</li>
                </ul>
                <p>Used to access DOM elements or persist a value between re-render, updating persisting values between render without causing re-render </p>
                <ul>
                    <li>Accessing DOM elements directly</li>
                    <li>Storing mutable values that don't trigger a re-render</li>
                    <li>Keeping previous values between re-render for comparison</li>

                </ul>

                <CodeBlock language='jsx'>
                    {`// Preserving values between render
      import React, { useState, useEffect, useRef } from "react";
      
      export default function PreviousValueTracker() {
        const [count, setCount] = useState(0);
        <mark>const prevCountRef = useRef();</mark>
      
        useEffect(() =&gt; {
          <mark>prevCountRef.current = count;</mark>
        }, [count]);
      
        return (
          <div>
            <h5>Current Count: {count}</h5>
            <mark><h3>Previous Count: {prevCountRef.current}</h3></mark>
            <button onClick={() =&gt; setCount(c =&gt; c + 1)}>Increment</button>
            <button onClick={() =&gt; setCount(c =&gt; c - 1)}>Decrement</button>
          </div>
        );
      }
          `}</CodeBlock>
                <br />
                <CodeBlock language='jsx'>
                    {`// Saving ref of JSX elements/components to be used else where
      // Passing the ref onto a sibling component or use it at parent
      function Parent() {
          const buttonRef = useRef(null);
          return (
              <>
                  <Child buttonRef={buttonRef}/>
                  <UseRef buttonRef={buttonRef}/>
              </>
          );
      }
      -------------------------------------------
      function Child({ buttonRef }) {
        return (
          <mark><button ref={buttonRef} /></mark>
        );
      }
          `}
                </CodeBlock>

                <hr />
            </section>


            {/* <!-- CONTEXT HOOK--> */}
            <section>
                <h3 className="section-header" id="useContext">Context Hook</h3>
                <p>React Context is another way to pass information to components and their children without using
                    <code>props</code>
                </p>
                <ul>
                    <li>Use React Context to give many components access to the same state</li>
                    <li>React Context also allow any component children component to get access without having to drill
                        <code>props</code> down to deeply nested children
                    </li>
                </ul>
                <CodeBlock language='jsx'>{`// JSX
      // ThemeContext.js
      // 1. Create the ThemeContext and ThemeProvider
      "use client";
      import {createContext, useContext, useState} from "react";
      
      <mark>const ThemeContext = createContext();</mark>
      
      export function ThemeProvider({children}) {
        const [theme, setTheme] = useState("light");
        return (
        <mark><ThemeContext.Provider value={{ theme, setTheme }}>
                  {children}
          </ThemeContext.Provider></mark>
                );
      }
      
      <mark>export function useTheme() {</mark>
         return useContext(ThemeContext);
      }
      --------------------------------------------------------------
      // app/layout.js
      import {ThemeProvider} from 'context/ThemeContext';
      
      export default function RootLayout({children}) {
          return (
            <html lang="en">
              <body id="root">
                // 2. Wrap children in the Provider
                <mark><ThemeProvider></mark>
                  <Child />
                </ThemeProvider>
              </body>
            </html>
          );
      }
      --------------------------------------------------------------
      / Child.js
      // Using the value
      import {useTheme} from 'context/ThemeContext';
      
      function Child(){
          const {theme, setTheme} = useTheme();
          return (
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme
            </button>
          );
      }  `}</CodeBlock>`
                <hr></hr>
            </section>


            {/*<!-- MEMO HOOKS & CALLBACK HOOKS -->*/}
            <section>
                <h3 className="section-header" id="useMemoCallback">Memo & Callback Hooks</h3>
                <p><strong>Memo Hook</strong> : optimizes expensive computations by caching results/values so it doesn't have to be recalculated on re-render</p>
                <ul>
                    <li>Can be used to memoize a component so that it doesn't re-render unless props changed</li>
                </ul>
                <p><strong>Callback Hook</strong>: prevents unnecessary function re-creations; same as memo except for saving function</p>
                <ul>
                    <li>Use cases: if the function is used as a dependency or if it's passed to memorized children</li>
                </ul>
                <p>Useful for preventing the reference of an variable/function from changing if it's used in a dependency array</p>
                <CodeBlock language='jsx'>{`
      import { useState, memo } from "react";
      
      // Child was memorized and won't re-render unless onFetch changes
      <mark>const Child = memo(({ onFetch }) => {</mark>
        console.log("Child rendered");
        return <button onClick={onFetch}>Fetch Data</button>;
      });
      
      export default function App() {
        const [count, setCount] = useState(0);
      
        // fetchData is a function and will be re-created on every render so the Child's prop will change with every render, causing infinite re-render unless a callback hook is used to memorize the fetchData 
        <mark>const fetchData = useCallback(() => {</mark>
          console.log("Fetching data...");
        }, []); 
      
        return (
          <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <mark><Child onFetch={fetchData} /></mark>
          </div>
        );
      }        
              `}</CodeBlock>
                <hr />
            </section>



            {/* TODO: work on reducer hook section */}
            {/* <!-- REDUCER HOOK--> */}
            <section>
                <h3 className="section-header" id="useReducer">Reducer Hook</h3>
                <p>Advanced State Management - An alternative to useState when state logic is complex.</p>
                <hr />
            </section>

        </>
    );
}