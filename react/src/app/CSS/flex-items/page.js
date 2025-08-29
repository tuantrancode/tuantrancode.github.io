import React from 'react';
import styles from '../flex-box/flex-box.module.css';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: "Flex Items - CSS",
  description: "Notes on flex items properties",
};

export default function FlexItems() {

  return (
    <>
      <h2 className='page-header'>Flex Items</h2>

      <p>The page is about properties for the <strong>flex items</strong> (i.e. children of the container
        <code>display: flex</code>), NOT the parent container.
      </p>
      <p>The following are properties for the flex items:</p>
      <ul>
        <li><code>order</code></li>
        <li><code>flex</code></li>
        <li><code>flex-grow</code></li>
        <li><code>flex-shrink</code></li>
        <li><code>flex-basis</code></li>
        <li><code>align-self</code>: overrides the parent&apos;s <code>align-items</code> to adjust spacing in
          vertical axis</li>
      </ul>

      {/*
<!-- ORDER PROPERTY -->
*/}
      <section>
        <hr />
        <h3 className='section-header' id='order'>order Property</h3>
        <p>Use <code>order: x</code> to change the order of the items.</p>
        <CodeBlock language='html'>{`
<div class='flexContainer'>
    <div style="<mark>order: 2</mark>">1</div>
    <div style="<mark>order: 3</mark>">2</div>
    <div style="<mark>order: 1</mark>">3</div>
</div>
`}</CodeBlock>
        <div className={styles.flexContainer}>
          <div style={{ order: 2 }}>1</div>
          <div style={{ order: 3 }}>2</div>
          <div style={{ order: 1 }}>3</div>
        </div>
        <hr />
      </section>

      {/*
<!-- FLEX PROPERTY -->
*/}
      <section>
        <h3 className='section-header' id='flex'>flex Property</h3>
        <p>The <code>flex: x y z</code> is the shorthand property for <code>flex-grow</code>,
          <code>flex-shrink</code>, and <code>flex-basis</code>
        </p>
        <CodeBlock language='html'>{`
<div class='flexContainer'>
    <div>1</div>
    <div style="<mark>flex: 0 0 200px;</mark>">2</div> /* Item will not grow, not shrink, and has an initial length of 200px */
    <div>3</div>
</div>
`}</CodeBlock>
        <ul>
          <li><code>flex-grow: 0</code>: item will not grow</li>
          <li><code>flex-shrink: 0</code> item will not shrink</li>
          <li><code>flex-basis: 200px</code> item has an initial length of 200px</li>
        </ul>
        <div className={styles.flexContainer}>
          <div>1</div>
          <div style={{ flex: '0 0 200px' }}>2</div>
          <div>3</div>
        </div>
        <hr />
      </section>

      {/*
<!-- FLEX-GROW PROPERTY -->
*/}
      <section>
        <h3 className='section-header' id='flexGrow'>flex-grow Property</h3>
        <p>Use <code>flex-grow: x</code> to specifies how much a flex item grow relative to the rest of the flex
          items.</p>
        <ul>
          <li>Default value is 0 (i.e. not grow beyond its given width)</li>
        </ul>
        <CodeBlock language='html'>{`
<div class='flexContainer'>
    <div style="<mark>flex-grow: 1</mark>">1</div>
    <div style="<mark>flex-grow: 1</mark>">2</div>
    <div style="<mark>flex-grow: 8</mark>">3</div>
</div>
`}</CodeBlock>
        <div className={styles.flexContainer}>
          <div style={{ flexGrow: 1 }}>1</div>
          <div style={{ flexGrow: 1 }}>2</div>
          <div style={{ flexGrow: 8 }}>3</div>
        </div>
        <hr />
      </section>

      {/*
<!-- FLEX-SHRINK PROPERTY -->
*/}
      <section>
        <h3 className='section-header' id='flexShrink'>flex-shrink Property</h3>
        <p>Use <code>flex-shrink: x</code> to specifies how much a flex item shrink relative to the rest of the flex
          items.</p>
        <ul>
          <li>Default value is 1 (i.e. items will shrink if there&apos;s not enough space)</li>
        </ul>
        <CodeBlock language='html'>{`
<div class='flexContainer'>
    <div style="<mark>flex-shrink: 1; </mark> width:500px">1</div>
    <div style="<mark>flex-shrink: 2; </mark> width:500px">2</div>
    <div style="<mark>flex-shrink: 5; </mark> width:500px">3</div>
</div>
`}</CodeBlock>
        <div className={styles.flexContainer}>
          <div style={{ flexShrink: 1, width: '500px' }}>1</div>
          <div style={{ flexShrink: 2, width: '500px' }}>2</div>
          <div style={{ flexShrink: 5, width: '500px' }}>3</div>
        </div>
        <hr />
      </section>

      {/*
<!-- FLEX-BASIS PROPERTY -->
*/}
      <section>
        <h3 className='section-header' id='flexBasis'>flex-basis Property</h3>
        <p>Use <code>flex-basis: length|%</code> to specifies the initial length of the item.</p>
        <CodeBlock language='html'>{`
<div class='flexContainer'>
    <div>1</div>
    <div style="<mark>flex-basis: 50%;</mark>">2</div>
    <div>3</div>
</div>
`}</CodeBlock>
        <div className={styles.flexContainer}>
          <div>1</div>
          <div style={{ flexBasis: '50%' }}>2</div>
          <div>3</div>
        </div>
        <hr />
      </section>

      {/*
<!-- ALIGN-SELF PROPERTY -->
*/}
      <section>
        <h3 className='section-header' id='alignSelf'>align-self Property</h3>
        <CodeBlock language='css'>{`
align-self: center|flex-start|flex-end|stretch|baseline;
`}</CodeBlock>
        <ul>
          <li><code>align-self</code> overwrites the parent&apos;s/container&apos;s <code>align-items</code> property</li>
        </ul>
        <CodeBlock language='html'>{`
<div class='flexContainer' style="<mark>align-items: stretch;</mark> height: 150px;">
    <div>1</div>
    <div style="<mark>align-self: center;</mark>">2</div>
    <div>3</div>
</div>
`}</CodeBlock>
        <div className={styles.flexContainer} style={{ alignItems: 'stretch', height: '150px' }}>
          <div>1</div>
          <div style={{ alignSelf: 'center' }}>2</div>
          <div>3</div>
        </div>
        <hr />
      </section>

      {/*
<!-- REFERENCE -->
*/}
      <section>
        <h3 className='section-header' id='reference'>Reference</h3>
        <p>Examples from W3 School: <a href='https://www.w3schools.com/css/css3_flexbox_items.asp'
          target='_blank'>www.w3schools.com/css/css3_flexbox_items.asp</a></p>
      </section>


    </>
  );
}