import React from 'react';
import styles from '../css-basics/css-basics.module.css';
import CodeBlock from '@/components/shared/CodeBlock';

export default function CssProperties() {

  return (
    <>
      {/*<!-- POSITION -->*/}
      <section>
        <h3 className='section-header' id='position'>Position</h3>
        <p>
          The <code>position</code> property determines how an element is positioned in the document. Options
          include <code>static</code> (default), <code>relative</code>, <code>absolute</code>, <code>fixed</code>,
          and <code>sticky</code>. This property allows elements to be precisely placed relative to their normal
          position, parent, or the viewport.
        </p>
        <p>
          <code>position:relative</code> - Setting the <code>top</code>, <code>right</code>,
          <code>bottom</code>, and <code>left</code> properties of a relatively-positioned element will cause it
          to be adjusted away from its normal position
        </p>
        <CodeBlock language='css'>{`div.relative {
  position: relative;
  left: 30px;
} /* The element will appear left indented by 30px */`}</CodeBlock>

        <p>
          <code>position: absolute</code> - the element is positioned relative to the
          nearest positioned ancestor(i.e. the nearest ancestor with <code>position</code> set to
          <code>relative</code>, <code>absolute</code>, or <code>sticky</code>)
        </p>
        <ul>
          <li><code>position: absolute</code> elements are removed from the normal flow of the document and can overlap.</li>
        </ul>
        <CodeBlock language='css'>{`div.absolute {
  position: absolute;
  top: 80px;
  right: 0;
  width: 200px;
  height: 100px;
} /* The element will be below the top by 80px and right align relative to its ancestor element */`}</CodeBlock>

        <p>
          <code>position: fixed</code> - the element is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.
        </p>
        <ul>
          <li><code>position: fixed</code> elements are removed from the normal flow of the document and can overlap.</li>
        </ul>
        <CodeBlock language='css'>{`div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
} /* The element is fixed to the bottom and right and moves along with page scrolling */`}</CodeBlock>

        <p>
          <code>position: sticky</code> - the element is a combination of relative and fixed positioning. It
          behaves like a relatively positioned element until the user scroll to a certain point, at which point it
          becomes fixed.
        </p>
        <ul>
          <li><code>position: sticky</code> elements are <strong><u>NOT</u></strong> removed from the normal flow
            of the document, unlike <code>position: fixed</code></li>
        </ul>
        <CodeBlock language='css'>{`div.sticky {
  position: sticky;
  top: 50px;
  right: 0;
  width: 300px;
} /* Once the user scroll down enough, the element will maintain a fixed position of below the top by 50px while sticking to the right edge */`}</CodeBlock>

        <h4 className='sub-section-header'>Notes</h4>
        <ul>
          <li>% for <code>top|left|right|bottom</code> are relative to parent&apos;s dimensions</li>
        </ul>

        <p> Examples: <a href='https://www.w3schools.com/css/css_positioning.asp' target='_blank'>www.w3schools.com/css/css_positioning.asp</a></p>
        <hr />
      </section>

      {/*<!-- Z-INDEX -->*/}
      <section>
        <h3 className='section-header' id='z-Index'>Z-Index</h3>
        <CodeBlock language='css'>{`z-index: 1000;`}</CodeBlock>
        <ul>
          <li>Define the draw order/ stack order of the element</li>
          <li>Higher number means the element is on top/ in front</li>
          <li>z-index accepts negative numbers</li>
        </ul>
        <hr />
      </section>

      {/*<!-- DISPLAY -->*/}
      <section>
        <h3 className='section-header' id='display'>Display</h3>
        <p>The <strong>display</strong> property affects how the element flow in the layout. Common values include
          <code>inline</code>, <code>block</code>, <code>flex</code>, <code>inline-block</code>, <code>grid</code>
          and <code>none</code>.
        </p>
        <ul>
          <li>The property <code>visibility: hidden</code> is also useful.</li>
          <li><code>column-count: x</code> should NOT be used with <code>flex</code> and <code>grid</code></li>
        </ul>
        <p> More Examples: <a href='https://www.w3schools.com/css/css_display_visibility.asp' target='_blank'>www.w3schools.com/css/css_display_visibility.asp</a></p>
        <CodeBlock language='css'>{`display: block|inline|inline-block|flex|grid|none;
visibility: hidden;
column-count: x;`}</CodeBlock>

        <div className={styles.example} style={{ color: 'black' }}>
          <div style={{ display: 'inline', background: 'yellow' }}>Inline</div>
          <div style={{ display: 'inline-block', background: 'lightblue' }}>Inline-Block</div>
          <div style={{ display: 'block', background: 'lightgreen' }}>Block</div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ background: 'pink' }}>Flex Item 1</div>
            <div style={{ background: 'lightgray' }}>Flex Item 2</div>
          </div>
        </div>
        <hr />
      </section>

      {/*<!-- WIDTH & HEIGHT -->*/}
      <section>
        <h3 className='section-header' id='widthHeight'>Width & Height</h3>
        <CodeBlock language='css'>{`width: length|%;
height: length|%; 
min-width: length|%;
max-width: length|%;
min-height: length|%;
max-height: length|%;`}</CodeBlock>
        <ul>
          <li>% value is relative to the parent container</li>
          <li>Setting <code>width: 100%;</code> and <code>max-width: 1440px;</code> on the container is very useful for responsive layout</li>
          <li><code>min-width</code>: useful for preventing the content-container from getting too narrow relative to other containers</li>
        </ul>
        <hr />
      </section>

      {/*<!-- SPACING -->*/}
      <section>
        <h3 className='section-header' id='spacing'>Spacing</h3>
        <ul>
          <li><code>white-space: normal|nowrap|pre</code>: specifies how white-space and text wrapping inside elements are handled</li>
          <li><code>margin: length</code>: sets the space outside the element&apos;s border</li>
          <li><code>padding: length</code>: sets the space between the content and border of the element</li>
          <li><code>gap: length</code>: shorthand for <code>row-gap</code> and <code>column-gap</code>; sets the space between the children elements</li>
          <ul>
            <li>Only used for multi-column, <code>flex</code>, and <code>grid</code> elements</li>
            <li>In multi-column, <code>gap</code> defines the gaps between columns</li>
            <li>In <code>flex</code>, <code>gap</code> defines the space between flex items and flex lines</li>
            <li>In <code>grid</code>, <code>gap</code> defines the gaps between rows and columns</li>
          </ul>
          <li><code>box-sizing: border-box</code>: includes the border when calculating an element&apos;s total width and height</li>
          <ul>
            <li>Extremely useful for setting up layout and makes it easier to calculate width and height</li>
            <li>With <code>box-sizing: border-box</code>, the width of 2 columns element can be set to 50%</li>
            <li>Without <code>box-sizing: border-box</code>, the width of 2 columns element has to be 48% to account for the padding and border</li>
          </ul>
        </ul>
        <CodeBlock language='css'>{`* {
  box-sizing: border-box;
}
margin: length;
padding: length;
gap: length;`}</CodeBlock>
        <hr />
      </section>

      {/*<!-- SCROLLING PROPERTIES -->*/}
      <section>
        <h3 className='section-header' id='scrolling'>Scrolling</h3>
        <CodeBlock language='css'>{`overflow-x: visible|hidden|scroll|auto;
overflow-y: visible|hidden|scroll|auto;`}</CodeBlock>
        <ul>
          <li><code>visible</code> (default): the content is not clipped and it may be rendered outside the content box</li>
          <li><code>hidden</code>: the content is clipped, but no scrolling mechanism is given</li>
        </ul>
        <hr />
      </section>

      {/*<!-- BACKGROUNDS -->*/}
      <section>
        <h3 className='section-header' id='background'>Background</h3>
        <CodeBlock language='css'>{`/* background property is shorthand form */
background: none;

background-color: color|transparent;

background-image: url("image.jpg")|none;
background-position: left top|right|center|...|center bottom|x% y%;
background-size: auto|cover|contain|width height;
background-clip: border-box|padding-box|content-box;
background-attachment: scroll|fixed|local;

background-repeat: repeat|repeat-x|repeat-y|no-repeat;
background-origin: padding-box|border-box|content-box:`}</CodeBlock>
        <ul>
          <li><code>background-clip</code>: specifies how far the background should extend within element
            <ul>
              <li><code>border-box</code>: extends behind the border</li>
            </ul>
          </li>
          <li><code>background-attachment</code>: sets whether the background image will scrolls with the page</li>
          <li><code>background-origin</code>: specifies the starting point of the background image
            <ul>
              <li><code>border-box</code>: within the border area of the box</li>
            </ul>
          </li>
        </ul>
        <p>Examples: <a href='https://www.w3schools.com/cssref/css3_pr_background.php' target='_blank'>www.w3schools.com/cssref/css3_pr_background.php</a></p>
        <hr />
      </section>

      {/*<!-- BORDER -->*/}
      <section>
        <h3 className='section-header' id='border'>Border</h3>
        <CodeBlock language='css'>{`border-radius: 1-4 length|%;
box-shadow: none|h-offset v-offset blurRadius spreadRadius color;`}</CodeBlock>
        <CodeBlock language='css'>{`/* border property is a shorthand property, but not for border-radius */
border: border-width border-style border-color;   

border-width: medium|thin|thick|length;
border-style: none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset;
border-color: color|transparent;`}</CodeBlock>
        <hr />
      </section>

      {/*<!-- FONT -->*/}
      <section>
        <h3 className='section-header' id='font'>Font</h3>
        <CodeBlock language='css'>{`font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
font-weight: bold|normal|lighter|bolder|900;
font-style: italic|normal|oblique|oblique 40deg;`}</CodeBlock>
        <p><code>bolder</code> and <code>lighter</code> values are relative to the parent&apos;s.</p>
        <p>Examples: <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight' target='_blank'>developer.mozilla.org/en-US/docs/Web/CSS/font-weight</a></p>
        <hr />
      </section>

      {/*<!-- TEXT -->*/}
      <section>
        <h3 className='section-header' id='text'>Text</h3>
        <CodeBlock language='css'>{`/* Text color */
color: red;
/* Text spacing */
white-space: nowrap|pre|normal;`}</CodeBlock>
        <CodeBlock language='css'>{`text-align: left|right|center|justify;
text-transform: none|capitalize|uppercase|lowercase;
text-shadow: h-shadow v-shadow blurRadius color|none;`}</CodeBlock>
        <CodeBlock language='css'>{`/* text-decoration is the shorthand property */
text-decoration: text-decoration-line text-decoration-color text-decoration-style text-decoration-thickness;

text-decoration-color: color;
text-decoration-line: none|underline|overline|line-through;
text-decoration-style: solid|double|dotted|dashed|wavy;
text-decoration-thickness: auto|from-font|length/percentage;`}</CodeBlock>

        <h4 className='sub-section-header'>Notes for Wrapping Text</h4>
        <ul>
          <li><code>white-space: pre|pre-wrap|pre-line</code> preserve white-space and act like the HTML tag <code>&lt;pre&gt;</code></li>
          <ul>
            <li><code>pre</code> : preserve all spaces and line breaks without wrapping text similar to &lt;pre&gt; block</li>
            <li><code>pre-wrap</code> : preserves spaces and line breaks, but also wraps text</li>
            <li><code>pre-line</code> : preserves line breaks, but collapses extra spaces and wraps text</li>
          </ul>
          <li><code>overflow-wrap: normal|anywhere|break-word</code> determines how browser should break up long text that doesn&apos;t contain spaces</li>
        </ul>
        <hr />
      </section>

      {/*<!-- INHERIT & INITIAL -->*/}
      <section>
        <h3 className='section-header' id='inheritInitialValue'>Inherit & Initial Values</h3>
        <p>The <code>inherit</code> and <code>initial</code> values can be used on almost any properties.</p>
        <ul>
          <li><code>inherit</code>: the property will inherit its value from its parent element</li>
          <li><code>initial</code>: return the property to its default value</li>
        </ul>
        <CodeBlock language='css'>{`background-color: inherit;
color: initial;`}</CodeBlock>
        <hr />
      </section>

      {/*<!-- TRANSITIONS -->*/}
      <section>
        <h3 className='section-header' id='transition'>Transition</h3>
        <CodeBlock language='css'>{`/* transition property is the shorthand form */
transition: property duration timing-function delay;

transition-property: none|all|property;
transition-duration: time;
transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|steps(int,start|end)|cubic-bezier(n,n,n,n);
transition-delay: time;`}</CodeBlock>
        <ul>
          <li><code>transition-property</code>: specifies the name of the CSS property the transition effect is for (default is all)</li>
          <li><code>transition-duration</code>: determines how many seconds (s) or milliseconds (ms) the effect takes to complete</li>
          <li><code>transition-timing-function</code>: sets the speed curve of the transition effect, allow changes in speed over its duration</li>
          <ul>
            <li><code>ease</code> (default): slow start, then fast, and finally end slowly</li>
            <li><code>linear</code>: same speed from start to finish</li>
            <li><code>ease-in</code>: slow start</li>
            <li><code>ease-out</code>: slow end</li>
          </ul>
          <li><code>transition-delay</code>: determines how many seconds (s) or milliseconds (ms) before the transition starts</li>
        </ul>
        <CodeBlock language='css'>{`// Useful transition values
.nav-menu {
    transition: transform 0.3s ease;
    OR
    transition: transform 0.3s ease, opacity 0.3s ease;
}`}</CodeBlock>
        <p><strong>Examples</strong>:</p>
        <ul>
          <li><code>transition: 0.3s ease</code> is useful for menu transitions (0.3s duration and ease timing-function)</li>
          <li>Do NOT use <code>display: none</code> along with <code>transition</code> because it prevents the animation from running</li>
          <ul>
            <li>Instead, use <code>opacity: 0</code> to hide the element and <code>opacity: 1</code> to show it</li>
          </ul>
        </ul>
        <p>More Examples: <a href='https://www.w3schools.com/css/css3_transitions.asp' target='_blank'>www.w3schools.com/css/css3_transitions.asp</a></p>
        <hr />
      </section>

      {/*<!-- TRANSFORM -->*/}
      <section>
        <h3 className='section-header' id='transform'>Transform</h3>
        <CodeBlock language='css'>{`transform: none|transform-functions;`}</CodeBlock>
        <p><strong>Transform Functions</strong>:</p>
        <ul>
          <li><code>translateX(x)</code>: move across x-axis</li>
          <ul>
            <li><code>translateX(-50%)</code>: move element to the left by 50% of its own width, NOT its parent</li>
          </ul>
          <li><code>translateY(Y)</code>: move across y-axis</li>
          <li><code>translate(x,y)</code>: move element across x- and y-axis</li>
          <li><code>translate3d(x,y,z)</code>: allow 3D translation</li>
          <li><code>scale(x)</code>: scale in the x- and y-directions by the same amount</li>
          <ul>
            <li><code>scale(1.5)</code>: make element 1.5x larger</li>
            <li><code>scale(150%)</code>: make element 1.5x larger</li>
          </ul>
          <li><code>scale(x,y)</code>: scale in the x- and y-directions</li>
          <li><code>rotate(angle)</code>: rotate element by angle</li>
        </ul>
        <p>For more transform functions: <a href='https://www.w3schools.com/cssref/css3_pr_transform.php' target='_blank'>www.w3schools.com/cssref/css3_pr_transform.php</a></p>

        <p><strong>Examples</strong>:</p>
        <CodeBlock language='css'>{`.card-image:hover {     
  transition: transform 0.3s ease;
  transform: scale(1.03);
}`}</CodeBlock>
        <ul>
          <li><code>scale(x)</code> can be used for more interactive image gallery</li>
        </ul>

        <CodeBlock language='css'>{`.leftNavMenu {
    display: none;
    transition: transform 0.3s ease;
    transform: translateX(-100%);
}    
.leftNavMenu.open {
    display: fixed;
    top: 0;
    transform: translateX(0);
}`}</CodeBlock>
        <ul>
          <li><code>translateX(-100%)</code> hides the menu to the left by 100% of its width (whole menu)</li>
          <li><code>translateX(0)</code> moves the menu from -100% to 0, the left edge of the viewport</li>
        </ul>

        <CodeBlock language='css'>{`.centerElementHorizontally {     
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
}`}</CodeBlock>
        <ul>
          <li><code>left: 50%</code> moves the left edge of the element to the right by 50% of its parent&apos;s width</li>
          <li><code>translateX(-50%)</code> moves the element to the left by 50% of its width; effectively centering it horizontally</li>
        </ul>
      </section>

    </>
  );
}