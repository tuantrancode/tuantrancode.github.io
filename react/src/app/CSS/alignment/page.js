import React from 'react';
import styles from './alignment.module.css';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: "Alignment - CSS",
  description: "Notes on aligning elements using CSS",
};

export default function Alignment() {

  return (
    <>
      {/*<!-- CENTER ALIGN ELEMENT -->*/}
      <section>
        <h3 className='section-header' id='centerAlignElement'>Center Align Element</h3>
        <p>
          Use <code>margin: auto</code>
        </p>
        <CodeBlock language='css'>{`
.centerElement {
  margin: auto;
  width: 50%;
  border: 3px solid var(--contrastColor1);
}
    `}</CodeBlock>
        <div className={styles.scenterElement}>This div element is centered.</div>
        <hr />
      </section>

      {/*<!-- CENTER ALIGN TEXT -->*/}
      <section>
        <h3 className='section-header' id='centerAlignText'>Center Align Text</h3>
        <p>
          Use <code>text-align: center</code>
        </p>
        <CodeBlock language='css'>{`
.centerElement {
  text-align: center;
  border: 3px solid var(--contrastColor1);
}
    `}</CodeBlock>
        <div className={styles.centerText}>The text is centered.</div>
        <hr />
      </section>

      {/*<!-- CENTER IMAGE -->*/}
      <section>
        <h3 className='section-header' id='centerImage'>Center Image</h3>
        <p>
          Use <code>display: block</code> and <code>margin: auto</code>
        </p>
        <CodeBlock language='css'>{`
.centerImage {
  display: block;
  margin: auto;
  border: 3px solid var(--contrastColor1);
}
    `}</CodeBlock>
        <img className={styles.centerImage} src='/assets/images/image1.jpg' alt=''/>
        <hr />
      </section>

      {/*<!-- LEFT AND RIGHT ALIGN USING FLOAT -->*/}
      <section>
        <h3 className='section-header' id='lrAlignUsingFloat'>Left and Right Align - Using Float</h3>
        <p>
          Use <code>float: right</code>
        </p>
        <CodeBlock language='css'>{`
.rightFloat {
  float: right;
  width: 75%;
  border: 3px solid var(--contrastColor1);
}
    `}</CodeBlock>
        <div className={styles.rightFloat}>
          The div element is aligned right, but can overlap because it&apos;s removed from the normal flow.
        </div>
        <hr />
      </section>

      {/*<!-- LEFT AND RIGHT ALIGN USING POSITION -->*/}
      <section>
        <h3 className='section-header' id='lrAlignUsingPosition'>Left and Right Align - Using Position</h3>
        <p>
          Use <code>position: absolute</code> and <code>right: 0px</code>
        </p>
        <CodeBlock language='css'>{`
.rightPosition {
  position: absolute;
  right: 0px;
  width: 75%;
  border: 3px solid var(--contrastColor1);
}
    `}</CodeBlock>
        <div className={styles.rightPosition}>
          The div element is aligned right, but can overlap because it&apos;s removed from the normal flow.
        </div>
        <hr />
      </section>

      {/*<!-- LEFT AND RIGHT ALIGN USING FLEX BOX -->*/}
      <section>
        <h3 className='section-header' id='lrAlignUsingFlexBox'>Left and Right Align - Using Flex Box</h3>
        <p>Use the following on the parent container.</p>
        <ul>
          <li><code>display: flex;</code></li>
          <li><code>justify-content: flex-end;</code></li>
          <ul>
            <li>
              <code>justify-content</code> property also has values: <code>center</code>,
              <code>flex-start</code>, <code>space-around</code>, <code>space-between</code>, and{' '}
              <code>space-evenly</code>
            </li>
          </ul>
        </ul>
        <CodeBlock language='css'>{`
.rightFlexBox {
  display: flex;
  justify-content: flex-end;
}
.rightFlexBox > div {
  border: 3px solid var(--contrastColor1);
}

<div class="rightFlexBox">
  <div>The div element is aligned right.</div>
</div>
    `}</CodeBlock>
        <div className={styles.rightFlexBox}>
          <div>The div element is aligned right.</div>
        </div>
        <hr />
      </section>

      {/*<!-- CENTER VERTICALLY USING FLEX BOX -->*/}
      <section>
        <h3 className='section-header' id='centerVerticallyUsingFlexBox'>Center Vertically - Using Flex Box</h3>
        <p>Use the following on the parent container.</p>
        <ul>
          <li><code>display: flex;</code></li>
          <li><code>justify-content: center;</code></li>
          <li><code>align-items: center;</code></li>
        </ul>
        <CodeBlock language='css'>{`
.centerVerticallyFlexBox {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 3px solid var(--contrastColor2);
}
.centerVerticalFlexBox > div {
  border: 3px solid var(--contrastColor1);
}

<div class="centerVerticallyFlexBox">
  <div>The div element is centered vertically.</div>
</div>
    `}</CodeBlock>
        <div className={styles.centerVerticallyFlexBox}>
          <div>The div element is centered vertically.</div>
        </div>
        <hr />
      </section>

      {/*<!-- REFERENCE -->*/}
      <section>
        <h3 className='section-header' id='reference'>Reference</h3>
        <p>
          Examples from W3 School:{' '}
          <a href='https://www.w3schools.com/css/css_align.asp' target='_blank'>
            www.w3schools.com/css/css_align.asp
          </a>
        </p>
      </section>
    </>

  );
}