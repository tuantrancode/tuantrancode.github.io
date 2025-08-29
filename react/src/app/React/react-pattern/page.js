import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: "Programming Pattern for React",
  description: "Notes on using programming patterns for React",
};

export default function ReactPattern() {
// TODO: maybe move section on Communicating Between Components here?
  return (
    <>
      {/*<!-- REACT PROGRAMMING PATTERN -->*/}
<section>
  <h2 className='page-header'>React Programming Pattern</h2>
  <p>
    Each component should focus on one responsilitiy. Components that handle states, calculations, or complex
    logic should not render JSX. To reduce the code complexity, a component can be split into stateful
    (container) or stateless (presentational) components
  </p>
  <h3 className='section-header' id="statefulStateless">Stateful vs Stateless</h3>
  <ul>
    <li>
      <strong>Stateful (Container) Component</strong> : manage state, make calculations based on
      props/state, and handle complex logic
    </li>
    <li>
      <strong>Stateless (Presentational) Component</strong> : render JSX
    </li>
  </ul>
  <p>
    A simple React app will have one stateful component that holds the other stateless components
  </p>

  <CodeBlock language='jsx'>{`// JSX
// Main component (stateful)
import React, { useState } from 'react';
import Counter from './Counter';       // Stateless
import Display from './Display';       // Stateless

export default function App() {
  // Stateful part: count
  const [count, setCount] = useState(0);

  // Function to update state
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Stateful vs Stateless Example</h1>
      
      {/* Stateless component, receives props */}
      <Display count={count} />
      <Counter onIncrement={increment} onDecrement={decrement} />
    </div>
  );
}`}</CodeBlock>

  <CodeBlock language='jsx'>{`// JSX
// Counter.js - render the buttons (stateless)
import React from 'react';

export default function Counter({ onIncrement, onDecrement }) {
  return (
    <div>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}`}</CodeBlock>

  <CodeBlock language='jsx'>{`// JSX
// Display.js - render the header (stateless)
import React from 'react';

export default function Display({ count }) {
  return <h2>Current Count: {count}</h2>;
}`}</CodeBlock>

  <p>
    In this sample, the whole App component and its children will re-render (update the Virtual DOM) when the
    buttons are clicked because App's state got changed. Using memo hook can helps avoid unnecessary Virtual
    DOM recalculations for performance optimization.
  </p>
  <hr />
</section>

{/*<!-- COMPARING STATEFUL/STATELESS WITH SERVER/CLIENT -->*/}
<section>
  <h3 className='section-header' id='comparison'>Comparing with Next.js Server/Client Components</h3>
  <p>
    Server/Client component notes:{' '}
    <a href='/React/react-nextjs.html#serverClient'>link</a>
  </p>
  <ul>
    <li><strong>Server Component (Next.js)</strong> :</li>
    <ul>
      <li>Fetch data from backend and handle API</li>
      <li>Authorization, tokens, and any secrets that shouldn't be run on client</li>
      <li>Perform heavy process client can't do</li>
    </ul>
    <li><strong>Client Component (Next.js)</strong> :</li>
    <ul>
      <li>Manages states, hooks</li>
      <li>Use browser APIs</li>
      <li>Interactive and dynamic UI</li>
    </ul>
    <li><strong>Stateful Component</strong> :</li>
    <ul>
      <li>Manages states, hooks, event handlers</li>
      <li>Perform complex logic</li>
    </ul>
    <li><strong>Stateless Component</strong> :</li>
    <ul>
      <li>Render JSX</li>
    </ul>
  </ul>
  <p>
    Separating code to make components mobile-ready for React Native:{' '}
    <a href='/React/react-mobile-ready.html#sharedComponents'>link</a>
  </p>
</section>

    </>
  );
}