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

      {/* <!-- SUSPENSE API AND USE HOOK--> */}
      <section>
        <h3 className="section-header" id="suspense">Suspense API and use Hook</h3>
        <p>The Suspense component in React lets you handle many nested async operations cleanly. Until the async functions finish, the component will show a subsitute using the attribute <code>fallback</code></p>
        <ul>
          <li>Primarily used with the <code>use</code> hook to tell when the async functions are finished</li>
          <li>While in the suspended state (i.e. not finished/still loading), the children elements are not rendered yet</li>
          <li>It stays suspended until all nested async functions are finished</li>
          <li>Documentation: <a href='https://react.dev/reference/react/Suspense'>react.dev/reference/react/Suspense</a></li>
        </ul>
        <h4 className='sub-section-name'>The <code>use</code> Hook</h4>
        <p><code>resolvedValue = use( Promise )</code></p>
        <ul>
          <li>As of React 18+, the hook only accepts <strong>cached</strong> Promise or Promises that came from a Server component</li>
          <li>Documentation: <a href='https://react.dev/reference/react/use'>react.dev/reference/react/use</a></li>
          <li>Notes on Promises in javascript: <a href="/Javascript/js-functions#promiseAsync">link</a></li>
        </ul>
        <CodeBlock language='jsx'>{`
import { Suspense } from 'react';

export default function MyPage(){
  return (
    <Suspense key={index} fallback={<div>Loading...</div>}>       
      <LazyImage src={src} className={styles.img} />
    </Suspense>
  );
}
---------------------------------------------------------------
// Using cached Promises with Suspense
'use client';
import React, { use } from 'react';

<mark>const imgCache = new Map();</mark>

function loadImage(src) {
    if (!imgCache.has(src)) {
        imgCache.set(
            src,
            new Promise((resolve, reject) => {
                const img = new window.Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
            })
        );
    }
    return imgCache.get(src);
}

export default function LazyImage({ className, src }) {
    use(loadImage(src));

    return <img src={src} className={className}/>
}
`}</CodeBlock>


        <hr />
      </section >

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