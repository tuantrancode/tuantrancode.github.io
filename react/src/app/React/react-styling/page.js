import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: "Styling in React",
  description: "Notes on styling in React framework",
};

export default function ReactStylings() {

  return (
    <>
      <section>
        {/*<!-- INLINE STYLES -->*/}
        <h3 className="section-header" id="inlineStyles">Inline Styles</h3>
        <p>Apply styles directly to elements using the <code>style</code> attribute, but it takes a Javascript object instead of a string unlike HTML inline CSS</p>
        <ul>
          <li>Styles are scoped to element automatically</li>
          <li>No media queries</li>
          <li>No pseudo-classes (:hover, :focus, etc.).</li>
          <li>CSS properties are camelCase for inline styling in JSX</li>
        </ul>

        <CodeBlock language='jsx'>
          {`// JSS

const styleObj = {
    backgroundColor: 'blue', 
    color: 'white', 
    padding: '10px'
}

function Button() {
  return (      // style attribute accepts a Javascript object
    <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px' }}>Click Me</button>
    <button style={styleObj}>Click Me</button>
  );
}`}
        </CodeBlock>
        <hr />
      </section>

      <section>
        {/*<!-- REGULAR CSS STYLESHEET -->*/}
        <h3 className="section-header" id="regularCSS">Regular CSS Stylesheets</h3>
        <p>Like normal external CSS files, you can import it into your components</p>
        <ul>
          <li>Exactly the same as normal CSS</li>
          <li>Good for global styles</li>
          <li>Same rule of CSS where last imported css file override previous ones</li>
        </ul>

        <CodeBlock language='jsx'>
          {`// JSS

// In App.jsx
import './App.css';            // Global css rules
import Child from './Child';    // Child.css will override App.css because it's imported after

function App() {
  return (
    <div className='main-container'>
      <Child />
    </div>
  );
}

// In Child.jsx
import './Child.css';

function Child() {
  return <button className='button'>Child Button</button>;
}`}
        </CodeBlock>
        <hr />
      </section>

      <section>
        {/*<!-- CSS MODULES -->*/}
        <h3 className="section-header" id="moduleCSS">CSS Modules</h3>
        <p>Write CSS rules in <code>*.module.css</code> file and scope styles to component automatically</p>
        <ul>
          <li>Do NOT use <code>id</code> selectors in <code>*/module.css</code></li>
          <li>Syntax of CSS module files are exactly the same as normal CSS files</li>
          <li>Styles are automatically scoped so no naming conflicts</li>
          <li>Harder to share global styles unless combined with normal <code>.css</code> files</li>
        </ul>
        <CodeBlock language='jsx'>
          {`// JSX

import styles from './Button.module.css';

function Button() {
  return <button className={styles.btn}>Click Me</button>;
}

function Button2() {
  return  <button className={\`$\{styles.example} $\{styles.hoverExample}\`}>Click Me</button>;
}
`}
        </CodeBlock>

        <p><strong>Setting up dark mode css variables in module.css</strong> : </p>
        <CodeBlock language='css'>
          {`// CSS
:global([data-theme="dark"]) {
    --example-bg-color: #222222;
    --example-border-color: #dfdfdf;
}
`}
        </CodeBlock>
        <ul>
          <li>The module.css will override any naming conflict with the global.css but only for the current page</li>
        </ul>
        <hr />
      </section>

      <section>
        {/*<!-- CSS-IN-JS / STYLED COMPONENTS -->*/}
        <h3 className="section-header" id="styledComponent">Styled Components (CSS-in-JS)</h3>
        <p>Uses external libraries to write styles inside the Javascript file and attach them to components</p>
        <ul>
          <li>Scoped styles automatically</li>
          <li>Supports <code>props</code> for dynamic styling</li>
          <li>Harder to separate styles from logic so avoid if planning for mobile development afterward</li>
          <li>Uses backtick <code>`</code> to declare style</li>
        </ul>

        <CodeBlock language='jsx'>
          {`// JSX

import styled from 'styled-components';

const Button = styled.button\`
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 8px;

  &:hover {
    background-color: darkblue;
  }
\`;

function App() {
  return <Button>Click Me</Button>;
}`}
        </CodeBlock>
        <hr />
      </section>

      <section>
        {/*<!-- TAILWIND CSS -->*/}
        <h3 className="section-header" id="tailwind">Tailwind CSS</h3>
        <p>Styles are directly defined onto the class names</p>
        <ul>
          <li>Fast UI</li>
          <li>Consistent design system</li>
          <li>JSX will become cluttered with classes</li>
        </ul>

        <CodeBlock language='jsx'>
          {`// JSX
function Button() {
  return (
    <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>
      Click Me
    </button>
  );
}`}
        </CodeBlock>
      </section>

    </>
  );
}