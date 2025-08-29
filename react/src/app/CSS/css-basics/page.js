import React from 'react';
import styles from './css-basics.module.css';
import CodeBlock from '@/components/shared/CodeBlock';
import { useTheme } from '@/context/ThemeContext';

export const metadata = {
  title: "CSS Basics",
  description: "Basic concepts of CSS.",
};

export default function CssBasics() {

  return (
    <>
      {/*<!-- CSS DEFINITIONS -->*/}
      <section>
        <h3 className='section-header' id='definitions'>CSS Definitions</h3>
        <ul>
          <li><strong>selector</strong>: use to identify which component the styles will apply to</li>
          <li><strong>property</strong>: the style property to be applied to the selected component</li>
          <li><strong>value</strong>: the value of the style property to be applied</li>
          <li><strong>property: value</strong>: declaration statement; a complete style rule that consists of a
            selector, property, and value</li>
          <ul>
            <li>Each declaration statement is ended by semi-colon</li>
          </ul>
        </ul>
        <CodeBlock language='css'>{`{selector} {
  {property}: {value}; /* This is a CSS declaration statement */
}`}</CodeBlock>
        <hr />
      </section>

      {/*<!-- COMMENTS -->*/}
      <section>
        <h3 className='section-header' id='comment'>Commenting in CSS</h3>
        <p>CSS comments are not displayed in the browser, but they are displayed in the browser&apos;s DevTools</p>
        <CodeBlock language='css'>{`/* This is a comment */`}</CodeBlock>
        <hr />
      </section>

      {/*<!-- CSS SELECTORS -->*/}
      <section>
        <h3 className='section-header' id='selectors'>CSS Selectors</h3>
        <ul>
          <li><strong>Element</strong>: <code>&lt;table&gt; { }</code> or <code>&lt;body&gt; { }</code></li>
          <li><strong>Class</strong>: <code>.className { }</code></li>
          <li><strong>ID</strong>: <code>#idName { }</code></li>
          <li><strong>Descendant</strong>: parent child; <code>div img { }</code> or <code>div &gt; img { }</code></li>
          <li><strong>Multiple</strong>: separated by commas; <code>div, article, section { }</code></li>
          <li><strong>Attribute</strong>: [attribute=&apos;value&apos;] <code>input[type=&apos;submit&apos;] { }</code></li>
          <li><strong>Pseudo-Class</strong>:
            <ul>
              <li><code>:nth-child()</code>: e.g. <code>li:nth-child(even) { } \/*Every other list item*/</code>
                or <code>td:nth-child(4n) { } \/*Every 4th column*/</code></li>
              <li><code>:hover</code></li>
              <li><code>:active</code></li>
              <li><code>:focus</code></li>
              <li><code>:first-child</code></li>
              <li><code>:nth-child(n)</code></li>
            </ul>
          </li>
          <li><strong>Pseudo-Element</strong>: <code>div::first-line { }</code>
            <ul>
              <li><code>::before</code></li>
              <li><code>::after</code></li>
              <li><code>::first-letter</code></li>
              <li><code>::first-line</code></li>
              <li><code>::selection</code></li>
            </ul>
          </li>
        </ul>
        <hr />
      </section>

      {/*<!-- LENGTH UNITS -->*/}
      <section>
        <h3 className='section-header' id='lengthUnits'>Length Units</h3>
        <ul>
          <li><strong>Absolute</strong>:</li>
          <ul>
            <li><code>px</code> (pixels) - most commonly used in web design</li>
          </ul>
          <li><strong>Relative to Font Size</strong>:</li>
          <ul>
            <li><code>em</code>: scale to the font size of the element itself (e.g. 2em = 2 * font size)</li>
            <li><code>rem</code> (root em): scale to the root element&apos;s font size (e.g. 2rem = 2 * root font size)</li>
          </ul>
          <li><strong>Relative to Viewport</strong>:</li>
          <ul>
            <li><code>vw</code>: represents a % of the viewport&apos;s width (e.g. 100vw is 100% of the viewport&apos;s width)</li>
            <li><code>vh</code>: represents a % of the viewport&apos;s height (e.g. 100vh is 100% of the viewport&apos;s height)</li>
            <li><code>vmin</code>: represents % of the smaller of the viewport&apos;s height or width </li>
            <li><code>vmax</code>: represents % of the larger of the viewport&apos;s height or width</li>
          </ul>
          <li><strong>Percentage</strong>:</li>
          <ul>
            <li><code>%</code>: define a size relative to the parent&apos;s size (e.g. width: 50%; - width will be 50% of the parent&apos;s width)</li>
          </ul>
          <li><strong>Calculating at Runtime</strong>:</li>
          <ul>
            <li><code>calc()</code>: use it to calculate length value at runtime </li>
            <li>e.g. <code>height: calc(100vh - var(--top-nav-height));</code></li>
          </ul>
        </ul>
        <hr />
      </section>

      {/*<!-- CSS VARIABLES -->*/}
      <section>
        <h3 className='section-header' id='cssVariables'>CSS Variables</h3>
        <p>Use the <code>:root {`{--variable-name: 100px}`}</code> block to save variables in a css sheet to be used or
          change later.</p>
        <ul>
          <li>To use the variable, call on it with <code>var(--variable-name)</code></li>
        </ul>
        <CodeBlock language='css'>{`:root {
  --max-width: 1440px;
  --main-content-min-width: 500px;
  --main-color: #3498db;
}

.container {
  max-width: var(--max-width);
}`}</CodeBlock>
        <hr />
      </section>

      {/*<!-- CALCULATING WITH CSS -->*/}
      <section>
        <h3 className='section-header' id='cssVariables'>Calculating with CSS</h3>
        <p>You can dynamically calculate the value in CSS by using <code>calc()</code></p>
        <CodeBlock language='css'>{`:root {
  --top-nav-height: 50px;
}

.container {
  height: calc(100% - var(--top-nav-height));
}`}</CodeBlock>

        <h4 className='sub-section-header'>Modifying Color</h4>
        <p>Use the function <code>oklch()</code> to modify a color&apos;s oklab, lightness, chroma, and hue</p>
        <CodeBlock language='css'>{`:root {
  --primary-color: blue;
}

.container {
  /* Make the primary color 1.5x brighter */
  background-color: oklch( from var(--primary-color) calc(l * 1.5) c h);
}`}</CodeBlock>
        <hr />
      </section>

      {/*<!-- HOVER EFFECTS -->*/}
      <section>
        <h3 className='section-header' id='hoverEffect'>Hover Effect</h3>
        <CodeBlock language='css'>{`#hoverExample:hover {
  background-color: lightcoral;
}`}</CodeBlock>
        <div id='hoverExample' className={`${styles.example} ${styles.hoverExample}`} style={{ padding: '10px' }}>
          Hover over me
        </div>
      </section>

    </>
  );
}