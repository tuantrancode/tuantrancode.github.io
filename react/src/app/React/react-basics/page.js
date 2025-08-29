import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: "React Basics",
  description: "Basics concept of React",
};

export default function ReactBasics() {

  return (
    <>
      <section>
        {/*<!-- React -->*/}
        <h2 className="page-header">React</h2>
        <p> The benefit of React is that it only updates DOM elements that have changed by managing a virtual DOM.
          It also allow us to swap component out of webpages.</p>
        <p><strong>Primary Libraries</strong> :</p>
        <ul>
          <li><code>import React from 'react'</code> : for pure React purposes; the library does not interact with
            the DOM; mainly use for creating components or writing JSX elements</li>
          <li><code>import ReactDOM from 'react-dom/client'</code> : contains methods for React to interact with
            DOM</li>
        </ul>
        <hr />
      </section>

      <section>
        {/*<!-- JSX LANGUAGE-->*/}
        <h3 className="section-header" id="jsx">JSX</h3>
        <p>JSX is the language use for React. It's a combination of Javascript + HTML. JSX is used everywhere
          between the opening and closing tags of JSX elements</p>
        <h4 className="sub-section-header">JSX Elements</h4>
        <ul>
          <li>JSX Elements are the same as HTML Elements, like <code>div button input p</code> except they're in
            Javascript file, but they are not the same as React components</li>
          <li>They can contain attributes like <code>id</code></li>
          <ul>
            <li>The HTML attribute <code>class</code> can not be used in JSX, instead <code>className</code>
              has to be used instead because class is a reserved Javascript keyword</li>
          </ul>
          <li>They can be assigned to variables and pass around like functions</li>
          <li>They must be <mark>wrapped in parenthesis ()</mark> if the element require multiple lines of code
          </li>
          <li><mark>There can only be <strong>one outermost</strong> html element in a jsx element</mark></li>
        </ul>
        <p><strong>Differences in React</strong> :</p>
        <ul>
          <li>The HTML attribute <code>class</code> can not be used in JSX, instead <code>className</code> has to
            be used instead because class is a reserved Javascript keyword</li>
          <li>Elements that have a self-closing tag MUST have a forward slash before the final bracket</li>
          <ul>
            <li>Example: <code>&lt;img src=&quot;&quot;/&gt; &lt;input name=&quot;&quot;/&gt; &lt;br/&gt;</code></li>
          </ul>
          <li>JSX elements must be wrapped in parenthesis () if the element require multiple lines of code</li>
          <li>Similar to injecting Javascript <code>$&#123;expression&#125;</code> in string, it's possible to inject
            Javascript into JSX expressions too, but using only curly braces <code>&#123;js expression&#125;</code></li>
          <ul>
            <li>Example: <code>&lt;img src={'{variableName}'}/&gt;</code> : there is no need for quotation mark</li>
          </ul>
        </ul>

        <CodeBlock language='jsx'>
          {`
const jsxElement = (
    <div className="top-bar">
        <div className="top-nav">
            <button id="menuBtn" onClick={functionName}>Menu</button>
            <a href="#">Link</a>
        </div>
    </div>
); `}
        </CodeBlock>
        <hr />
      </section>

      <section>
        {/*<!-- RENDERING JSX LANGUAGE-->*/}
        <h3 className="section-header" id="renderingJSX">Rendering JSX Elements</h3>
        <ul>
          <li>JSX element typically render to one react root.</li>
          <li>Use <code>createRoot()</code> method to create the root from 'react-dom/client' library</li>
          <li>Use <code>render()</code> method to render the JSX element</li>
        </ul>

        <CodeBlock language='jsx'>
          {`
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxElement);

// HTML
<div id="root"></div>
    `}
        </CodeBlock>

        <h4 className="sub-section-header">Conditional Rendering</h4>
        <ul>
          <li>You can use the ternary operator and <code>&&</code> to make conditional rendering, but not
            <code>if</code> statements
          </li>
        </ul>

        <CodeBlock language='jsx'>
          {`
// Using ternary operator
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);

// Using && operator
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
  </ul>
); 
    `}
        </CodeBlock>
        <hr />
      </section>

      <section>
        {/*<!-- USING MAP METHOD-->*/}
        <h3 className="section-header" id="renderingJSX">Using array.map() Method</h3>
        <p>The map() method is very useful for building repetitive elements from an array.</p>

        <CodeBlock language='jsx'>
          {`
// Mapping a string array
const strings = ['Home', 'Shop', 'About Me'];
const listItems = strings.map(string => <li key="string">{string}</li>);
root.render(<ul>{listItems}</ul>);

// Output
<ul>
  <li key="Home">Home</li>
  <li key="Shop">Shop</li>
  <li key="About Me">About Me</li>
</ul>
    `}
        </CodeBlock>
        <br />

        <CodeBlock language='jsx'>
          {`
// Mapping a set
const navSet = {
  'Home': '/index.html',
  'Shop': '/shop.html',
  'About Me': '/aboutMe.html'
};
const navMenu = Object.keys(navSet).map(([name, url]) => <a key={name} href={url}>{name}</a>);
root.render(navMenu);

// Output:
<a key="Home" href="/index.html">Home</a>,
<a key="Shop" href="/shop.html">Shop</a>,
<a key="About Me" href="/aboutMe.html">About Me</a>
    `}
        </CodeBlock>
        <hr />
      </section>

      <section>
        {/*<!-- USING JSX KEY ATTRIBUTE-->*/}
        <h3 className="section-header" id="key">JSX key Attribute</h3>
        <p>When rendering with map(), React uses the <code>key</code> attribute to identify which element was mapped
          from which value. This allows React to update/remove only the necessary element when the list changes.
        </p>
        <ul>
          <li><code>key</code> must be unique among siblings element, but they don't have to be globally unique</li>
          <li>Don't use the array index as a key unless you're sure items never reorder or get removed.</li>
          <ul>
            <li>Combining value and index to make a key can work, but list can not be re-ordered:
              <code>key=&#123;array[i] + i&#125;</code>
            </li>
          </ul>
          <li>Keys are not accessible inside the component via <code>props</code></li>
          <li>ALWAYS try to have the key attribute for repetitive elements as it makes rendering more efficient</li>
        </ul>
        <hr />
      </section>

      <section>
        {/*<!-- REACT COMPONENT-->*/}
        <h3 className="section-header" id="component">React Component</h3>
        <ul>
          <li><strong>Component</strong>: for React, it is a block of code that renders HTML and re-renders whenever some data changes</li>
          <li><strong>Functional Component</strong>: a JavaScript function that returns a JSX element (a component)</li>
          <ul>
            <li>Functional components MUST begin with a capital letter, or the React compiler will not recognize it as a React component</li>
            <ul>
              <li>The JS file of the component should also have the first letter capitalized for easy recognition.</li>
            </ul>
            <li>They can be used like JSX elements: nesting other components and adding attributes, but require passing and using <code>props</code> within the function</li>
            <CodeBlock language='jsx'>
              {`
// MySimpleComponent cannot accept attributes or have nested children
function MySimpleComponent() {
  return <div>Hello, I'm a functional React Component!</div>;
}   

// MyNewComponent can accept attributes and nested children because it uses props
function MyNewComponent(props) {
  return (
    <div className={props.className}> {props.children || "Hello, I'm a functional React Component!"}</div>
  );
}   

// Using functional component
const nestedComponent = (
  <MyNewComponent className="top-bar">
    <OtherComponent />
  </MyNewComponent>  
);

// Rendering functional component
root.render(<MySimpleComponent />)
        `}
            </CodeBlock>
          </ul>
        </ul>
        <hr />
      </section>

      <section>
        {/*<!-- FUNCTIONAL COMPONENT LIFECYCLE-->*/}
        <h3 className="section-header" id="lifecycle">Functional Component (with Hooks) Lifecycle</h3>
        <p>Sequence: Mount → Render → Update (re-render on state/props change) → Unmount</p>
        <ol>
          <li><strong>Mounting</strong>:
            <ul>
              <li>Runs the function once</li>
              <li><code>useEffect(() =&gt; &#123;... &#125;, [])</code> runs after the initial render</li>
            </ul>
          </li>
          <li><strong>Updating</strong>:
            <ul>
              <li>Function runs again when state or props change</li>
              <li><code>useEffect(() =&gt; &#123;... &#125;)</code> runs after every render by default</li>
              <li><code>useEffect(() =&gt; &#123;... &#125;, [deps])</code> runs when dependencies change</li>
            </ul>
          </li>
          <li><strong>Unmounting</strong>:
            <ul>
              <li>Cleanup function inside <code>useEffect</code> runs</li>
            </ul>
          </li>
        </ol>
        <hr />
      </section>

      <section>
        {/*<!-- PROPS-->*/}
        <h3 className="section-header" id="props">Props</h3>
        <p><code>props</code> are used to pass information from one component to another (like className, style, children nodes)</p>
        <ul>
          <li>The functional component adds <code>props</code> into its argument to indicate it will accept attributes</li>
          <li>By giving attributes to the component, the attributes and their values are passed to the functional component via <code>props</code></li>
          <li>Add curly braces <code>{ }</code> to pass JavaScript expressions like functions, arrays, or objects</li>
          <li>Use <code>useContext</code> if you're passing <code>props</code> deeply or need shared state across multiple components</li>
        </ul>

        <CodeBlock language='jsx'>
          {`
// Passing info to Button component as attributes
root.render( 
  <Button className="submitBtn" onClick={myFunction} data={[1, 2, 3]} /> 
);

// The functional component accesses the info using props
function Button(props) {
  calcData(props.data);
  return <button className={props.className} onClick={props.onClick} />;
}

// Using destructuring to simplify
function Button({ data, className, onClick }) {
  calcData(data);
  return <button className={className} onClick={onClick} />;
}
    `}
        </CodeBlock>
        <hr />
      </section>

      <section>
        {/*<!-- PASSING PROPS TO CHILDREN COMPONENTS-->*/}
        <h4 className="sub-section-header">Passing Props to Children Components</h4>
        <p><code>props</code> are immutable (read-only) and one-way: data flows down from the parent to the child</p>
        <ul>
          <li>If a child component needs to modify a prop, the parent must pass a callback function as a reference</li>
        </ul>

        <CodeBlock language='jsx'>
          {`
// Parent component
function Parent() {
  const [count, setCount] = React.useState(0);

  // handleIncrement allows the child component to modify the count
  const handleIncrement = () => {
    setCount(current => current + 1);
  };

  return <Child count={count} onIncrement={handleIncrement} />;
}

// Child component
function Child({ count, onIncrement }) {
  count = count + 1;  // ❌ this won't work; props are read-only
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

----------------------------------------------------------------
// Simplified version using setCount directly
function Parent() {
  const [count, setCount] = React.useState(0);
  return <Child count={count} setCount={setCount} />;
}

function Child({ count, setCount }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(current => current + 1)}>Increment</button>
    </div>
  );
}
    `}
        </CodeBlock>
        <hr />
      </section>

      <section>
        {/*<!-- NESTING COMPONENTS WITH props.children-->*/}
        <h4 className="sub-section-header">Nesting Components with props.children</h4>
        <p><code>props.children</code> returns everything between a component's opening and closing JSX tags</p>
        <ul>
          <li>Useful for reusing components while letting the parent control the content</li>
        </ul>

        <CodeBlock language='jsx'>
          {`
// Parent component
function Grid() {
  return (
    <grid>
      <Card>
        <h5>Image 1</h5>
        <img src="/image1.jpg" />
      </Card>
      <Card>
        <h5>Image 2</h5>
        <img src="/image2.jpg" />
      </Card>
    </grid>
  );
}

// Child component
// Content inside Card depends on parent; makes lower-level components reusable
function Card(props) {
  return (
    <div className="grid-item">
      <mark>{props.children}</mark>
    </div>
  );
}
    `}
        </CodeBlock>
        <hr />
      </section>

      <section>
        {/*<!-- SETTING DEFAULT VALUES FOR PROPS-->*/}
        <h4 className="sub-section-header">Setting Default Values for props</h4>
        <p>Default values can be set for <code>props</code> if none are passed, using three methods:</p>
        <ul>
          <li>Add a <code>defaultProps</code> static property</li>
          <CodeBlock language='jsx'>
            {`
function Card({ src = '/defaultImage.jpg' }) {
  return <img src={src} />;
}

Card.defaultProps = {
  src: '/defaultImage.jpg',
};
      `}
          </CodeBlock>
          <li>Add the default value directly in the function arguments</li>
          <CodeBlock language='jsx'>
            {`
function Card({ src = '/defaultImage.jpg' }) {
  return <img src={src} />;
}
      `}
          </CodeBlock>
          <li>Set the default value inside the function body using destructuring</li>
          <CodeBlock language='jsx'>
            {`
function Card(props) {
  const { src = '/defaultImage.jpg' } = props;
  return <img src={src} />;
}
      `}
          </CodeBlock>
        </ul>
        <hr />
      </section>

      {/* TODO: Maybe I should move the hooks section to a new page */}
      <section>
        {/*<!-- HOOKS-->*/}
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

      <section>
        {/*<!-- STATE HOOK (useState)-->*/}
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

      <section>
        {/* <!-- EVENT LISTENER AND HANDLER--> */}
        <h3 className="section-header" id="eventListener">Event Listener & Handler</h3>
        <p>Event handlers are custom callback functions with the naming convention that they start with 'handle'</p>
        <p>Event listeners are used in the same way as their HTML counterpart</p>
        <h4 className="sub-section-header">Naming Convention</h4>
        <ul>
          <li>React uses camelCase to name their events - <code>onClick</code> instead of <code>click</code></li>
          <li>The custom callback function that handles the event commonly starts with 'handle'</li>
          <li>For 'click' event, the callback function would be named <code>handleClick</code></li>
          <li>For 'hover' event, the callback function would be named <code>handleHover</code></li>
        </ul>
        <CodeBlock language='jsx'>{`// JSX
function SubmitButton() {
  function handleClick() {
    alert('Submission Successful.');
  }
  return <button <mark>onClick={handleClick}</mark>>Submit</button>;
}`}</CodeBlock>

        <h4 className="sub-section-header">Common Event React Supports</h4>


        <ul>
          <li><strong>Mouse Events</strong>
            <ul>
              <li><code>onClick</code> : Mouse click on an element</li>
              <li><code>onDoubleClick</code> : Double-click on an element</li>
              <li><code>onMouseDown</code> / <code>onMouseUp</code> : Mouse button pressed/released</li>
              <li><code>onMouseMove</code> : Mouse moves over an element</li>
              <li><code>onMouseEnter</code> / <code>onMouseLeave</code> : Mouse enters/leaves (no bubbling)
              </li>
              <li><code>onMouseOver</code> / <code>onMouseOut</code> : Mouse enters/leaves (bubbles)</li>
              <li><code>onContextMenu</code> : Right-click context menu</li>
            </ul>
          </li>

          <li><strong>Pointer Events</strong>
            <ul>
              <li><code>onPointerDown</code>, <code>onPointerUp</code>, <code>onPointerMove</code> : Pointer
                pressed, released, moved</li>
              <li><code>onPointerEnter</code>, <code>onPointerLeave</code> : Pointer enters/leaves (no
                bubbling)</li>
              <li><code>onPointerOver</code>, <code>onPointerOut</code> : Pointer enters/leaves (bubbles)</li>
              <li><code>onPointerCancel</code> : Pointer interaction canceled</li>
            </ul>
          </li>

          <li><strong>Keyboard Events</strong>
            <ul>
              <li><code>onKeyDown</code> : Key is pressed down</li>
              <li><code>onKeyPress</code> : Key is pressed (deprecated, prefer <code>onKeyDown</code>)</li>
              <li><code>onKeyUp</code> : Key is released</li>
            </ul>
          </li>

          <li><strong>Form & Input Events</strong>
            <ul>
              <li><code>onSubmit</code> : Form submission</li>
              <li><code>onChange</code> : Input/select value changes</li>
              <li><code>onInput</code> : Input value changes (real-time)</li>
              <li><code>onFocus</code> / <code>onBlur</code> : Element gains or loses focus</li>
              <li><code>onInvalid</code> : Form validation fails</li>
              <li><code>onReset</code> : Form reset</li>
            </ul>
          </li>

          <li><strong>Clipboard Events</strong>
            <ul>
              <li><code>onCopy</code>, <code>onCut</code>, <code>onPaste</code> : Clipboard interactions</li>
            </ul>
          </li>

          <li><strong>Drag & Drop Events</strong>
            <ul>
              <li><code>onDragStart</code>, <code>onDrag</code>, <code>onDragEnd</code> : Drag starts, moves,
                ends</li>
              <li><code>onDragEnter</code>, <code>onDragOver</code>, <code>onDragLeave</code>,
                <code>onDrop</code> : Drag target interactions
              </li>
            </ul>
          </li>

          <li><strong>Touch Events</strong>
            <ul>
              <li><code>onTouchStart</code>, <code>onTouchMove</code>, <code>onTouchEnd</code>,
                <code>onTouchCancel</code> : Touch interactions
              </li>
            </ul>
          </li>

          <li><strong>Composition Events</strong>
            <ul>
              <li><code>onCompositionStart</code>, <code>onCompositionUpdate</code>,
                <code>onCompositionEnd</code> : IME text input handling
              </li>
            </ul>
          </li>

          <li><strong>Media Events</strong>
            <ul>
              <li><code>onPlay</code>, <code>onPause</code>, <code>onEnded</code> : Media playback state</li>
              <li><code>onVolumeChange</code>, <code>onTimeUpdate</code>, <code>onProgress</code> : Media
                volume, time, and loading progress</li>
              <li><code>onLoadedData</code>, <code>onLoadedMetadata</code>, <code>onCanPlay</code>,
                <code>onCanPlayThrough</code> : Media readiness events
              </li>
              <li><code>onStalled</code>, <code>onSuspend</code>, <code>onWaiting</code> : Media buffering
                states</li>
            </ul>
          </li>

          <li><strong>Animation & Transition Events</strong>
            <ul>
              <li><code>onAnimationStart</code>, <code>onAnimationEnd</code>,
                <code>onAnimationIteration</code> : CSS animations
              </li>
              <li><code>onTransitionEnd</code> : CSS transition ends</li>
            </ul>
          </li>

          <li><strong>Wheel & Scroll Events</strong>
            <ul>
              <li><code>onWheel</code> : Mouse wheel scroll</li>
              <li><code>onScroll</code> : Scroll event on an element</li>
            </ul>
          </li>
        </ul>
        <p>More events: <a
          href="https://react.dev/reference/react-dom/components/common">react.dev/reference/react-dom/components/common</a>
        </p>
        <hr />
      </section>

      {/* TODO: Move to When To Use What and expand on it with examples */}
      <section>
        {/* <!-- COMMUNICATING BETWEEN COMPONENTS--> */}
        <h3 className="section-header" id="portal">Communicating Between Components</h3>
        <ul>
          <li><strong>Using <code>props</code></strong>: parent to children</li>
          <li><strong>Using <code>ref</code></strong>: parent &rarr; child 1 &rarr; parent &rarr; child 2</li>
          <li><strong>Using <code>context</code></strong>: as long as the components are wrapped around the context provider</li>
          <li><strong>Using <code>zustand store</code></strong>: global</li>
        </ul>
        <hr />
      </section>


      {/* TODO: add react portal section*/}
      <section>
        {/* <!-- PORTAL--> */}
        <h3 className="section-header" id="portal">Portal</h3>
      </section>

    </>
  );
}