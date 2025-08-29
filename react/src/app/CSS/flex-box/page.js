import React from 'react';
import styles from './flex-box.module.css';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: "Flexbox - CSS",
  description: "Notes on flexbox properties",
};

export default function FlexBox() {

  return (
    <>
      <h2 className='page-header'>Flex Box</h2>

      <p>The page is about properties for the <strong>flex container</strong> (i.e. uses
        <code>display: flex</code>), NOT the elements inside it.
      </p>
      <p>The following are properties for the flex container:</p>
      <ul>
        <li><code>flex-direction</code></li>
        <li><code>flex-wrap</code></li>
        <li><code>justify-content</code>: adjust horizontal spacing</li>
        <li><code>align-items</code>: adjust vertical spacing</li>
      </ul>
      <hr />

      {/*
<!-- LEFT AND RIGHT ALIGN -->
*/}
      <section>
        <h3 className='section-header' id='rightFlexBox'>Left and Right Align</h3>
        <p>Use the following on the parent container.</p>
        <ul>
          <li><code>display: flex;</code></li>
          <li><code>justify-content: flex-end;</code></li>
          <ul>
            <li><code>justify-content</code> property also has values: <code>center</code>,
              <code>flex-start</code>,
              <code>space-around</code>, <code>space-between</code>, and <code>space-evenly</code>
            </li>
          </ul>
        </ul>
        <CodeBlock language='css'>{`
.rightFlexBox{
    <mark>display:flex;</mark>
    <mark>justify-content: flex-end;</mark>
}
.rightFlexBox > div{
    border: 3px solid var(--contrastColor1);
}

<div class='rightFlexBox'>
    <div>The div element is aligned right.</div>
</div>
`}</CodeBlock>
        <div className={styles.rightFlexBox}>
          <div>The div element is aligned right.</div>
        </div>
        <hr />
      </section>

      {/*
<!-- CENTER VERTICALLY -->
*/}
      <section>
        <h3 className='section-header' id='centerVerticallyFlexBox'>Center Vertically</h3>
        <p>Use the following on the parent container.</p>
        <ul>
          <li><code>display: flex;</code></li>
          <li><code>justify-content: center;</code></li>
          <li><code>align-items: center;</code></li>
        </ul>
        <CodeBlock language='css'>{`
.centerVerticallyFlexBox{
    display:flex;
    <mark>justify-content: center;</mark>
    <mark>align-items: center;</mark>
    height: 200px;
    border: 3px solid var(--contrastColor2);
}
.centerVerticalFlexBox > div{
    border: 3px solid var(--contrastColor1);
}

<div class='centerVerticallyFlexBox'>
    <div>The div element is centered vertically.</div>
</div>
`}</CodeBlock>
        <div className={styles.centerVerticallyFlexBox}>
          <div>The div element is centered vertically.</div>
        </div>
        <hr />
      </section>

      {/*
<!-- FLEX-DIRECTION -->
*/}
      <section>
        <h3 className='section-header' id='flexDirection'>flex-direction Property</h3>
        <CodeBlock language='css'>{`
flex-direction: row|row-reverse|column|column-reverse;
`}</CodeBlock>
        <hr />
      </section>

      {/*
<!-- FLEX-WRAP -->
*/}
      <section>
        <h3 className='section-header' id='flexWrap'>flex-wrap Property</h3>
        <CodeBlock language='css'>{`
flex-wrap: wrap|nowrap|wrap-reverse
`}</CodeBlock>
        <p><strong>Examples:</strong></p>

        <CodeBlock language='css'>{`
.flexWrap {
    <mark>display:flex;</mark>
    <mark>flex-wrap: wrap;</mark>
    background-color: var(--contrastColor1);
}
`}</CodeBlock>
        <div className={`${styles.flexWrap} ${styles.flexContainer}`} style={{ width: '75%' }}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>

        <CodeBlock language='css'>{`
.flexNoWrap {
    <mark>display:flex;</mark>
    <mark>flex-wrap: nowrap;</mark>
    background-color: var(--contrastColor1);
}
`}</CodeBlock>
        <div className={`${styles.flexNoWrap} ${styles.flexContainer}`} style={{ width: '75%' }}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>

        <CodeBlock language='css'>{`
.flexWrapReverse {
    <mark>display:flex;</mark>
    <mark>flex-wrap: wrap-reverse;</mark>
    background-color: var(--contrastColor1);
}
`}</CodeBlock>
        <div className={`${styles.flexWrapReverse} ${styles.flexContainer}`} style={{ width: '75%' }}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>
        <hr />
      </section>

      {/*
<!-- JUSTIFY-CONTENT -->
*/}
      <section>
        <h3 className='section-header' id='justifyContent'>justify-content Property</h3>
        <CodeBlock language='css'>{`
justify-content: center|flex-start|flex-end|space-around|space-between|space-evenly;
`}</CodeBlock>
        <ul>
          <li><code>justify-content</code>: adjust the <mark>horizontal</mark> spacing</li>
        </ul>
        <p><strong>Examples:</strong></p>

        <CodeBlock language='css'>{`
.flexCenter {
    <mark>display:flex;</mark>
    <mark>justify-content: center;</mark>
    background-color: var(--contrastColor1);
}
`}</CodeBlock>
        <div className={`${styles.flexCenter} ${styles.flexContainer}`}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <CodeBlock language='css'>{`
.flexEnd {
    <mark>display:flex;</mark>
    <mark>justify-content: flex-end;</mark>
    background-color: var(--contrastColor1);
}
`}</CodeBlock>
        <div className={`${styles.flexEnd} ${styles.flexContainer}`}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <CodeBlock language='css'>{`
.flexSpaceAround {
    <mark>display:flex;</mark>
    <mark>justify-content: space-around;</mark>
    background-color: var(--contrastColor1);
}
`}</CodeBlock>
        <div className={`${styles.flexSpaceAround} ${styles.flexContainer}`}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <CodeBlock language='css'>{`
.flexSpaceBetween {
    <mark>display:flex;</mark>
    <mark>justify-content: space-between;</mark>
    background-color: var(--contrastColor1);
}
`}</CodeBlock>
        <div className={`${styles.flexSpaceBetween} ${styles.flexContainer}`}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <CodeBlock language='css'>{`
.flexSpaceEvenly {
    <mark>display:flex;</mark>
    <mark>justify-content: space-evenly;</mark>
    background-color: var(--contrastColor1);
}
`}</CodeBlock>
        <div className={`${styles.flexSpaceEvenly} ${styles.flexContainer}`}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <hr />
      </section>

      {/*
<!-- ALIGN-ITEMS -->
*/}
      <section>
        <h3 className='section-header' id='alignItems'>align-items Property</h3>
        <CodeBlock language='css'>{`
align-items: center|flex-start|flex-end|stretch|baseline|normal;
`}</CodeBlock>
        <ul>
          <li><code>align-items</code>: adjust the <mark>vertical</mark> spacing</li>
        </ul>
        <p><strong>Examples:</strong></p>

        <CodeBlock language='css'>{`
.flexVerticalCenter {
    <mark>display:flex;</mark>
    <mark>align-items: center;</mark>
    background-color: var(--contrastColor1);
}
`}</CodeBlock>
        <div className={`${styles.flexVerticalCenter} ${styles.flexContainer}`} style={{ height: '125px' }}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <CodeBlock language='css'>{`
.flexVerticalEnd {
    <mark>display:flex;</mark>
    <mark>align-items: flex-end;</mark>
    background-color: var(--contrastColor1);
}
`}</CodeBlock>
        <div className={`${styles.flexVerticalEnd} ${styles.flexContainer}`} style={{ height: '125px' }}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <CodeBlock language='css'>{`
.flexStretch {
    <mark>display:flex;</mark>
    <mark>align-items: stretch;</mark>
    background-color: var(--contrastColor1);
}
`}</CodeBlock>
        <div className={`${styles.flexStretch} ${styles.flexContainer}`} style={{ height: '125px' }}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <CodeBlock language='css'>{`
.flexBaseline {
    <mark>display:flex;</mark>
    <mark>align-items: baseline;</mark>
    background-color: var(--contrastColor1);
} /* it's aligned by the text baseline */
`}</CodeBlock>
        <div className={`${styles.flexBaseline} ${styles.flexContainer}`} style={{ height: '125px' }}>
          <div><h1>1</h1></div>
          <div><h6>2</h6></div>
          <div><h3>3</h3></div>
        </div>
        <hr />
      </section>

      {/*
<!-- REFERENCE -->
*/}
      <section>
        <h3 className='section-header' id='reference'>Reference</h3>
        <p>Examples from W3 School: <a href='https://www.w3schools.com/css/css3_flexbox_container.asp'
          target='_blank'>www.w3schools.com/css/css3_flexbox_container.asp</a></p>
      </section>

    </>
  );
}