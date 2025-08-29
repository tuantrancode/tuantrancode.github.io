import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: 'HTML Basics',
  description: 'Basic concepts of HTML.',
};

export default function HtmlBasics() {

  return (
    <>
      {/* <!-- HTML SETUP --> */}
      <section>
        <h3 className='section-header' id='setup'>Basic HTML Page Setup</h3>
        <CodeBlock language='html'>{`<!DOCTYPE html>
<html lang='en'>

<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Android Studio</title>
    <link rel='stylesheet' href='/common-styles.css'>
    <ink rel='stylesheet' href='/main-layout.css'>
    <script type='module'>
        import { loadMenu, getTheme } from '/load-menu.js';

        getTheme();
        loadMenu();
    </script>
</head>

<body>
    <!-- Main Container -->
    <div class='container' id='mainContainer'>

    
    </div> <!-- Main Container End -->

    <script>
    </script>
</body>
</html> `}</CodeBlock>
        <hr />
      </section>

      {/* <!-- HTML DEFINITION --> */}
      <section>
        <h3 className='section-header' id='definition'>HTML Definitions</h3>
        <strong>{`<{element} {attribute}='{value}'>`}</strong>
        <ul>
          <li>Example elements: <code>div</code>, <code>body</code>, <code>img</code></li>
          <li>Example attributes: <code>class</code>, <code>type</code>, <code>href</code>, <code>styles</code>,
            <code>id</code>
          </li>
        </ul>
        <CodeBlock language='html'>{`Example: 
<link rel='example'> 'link' is the element and 'rel' is the attribute`}</CodeBlock>
        <hr />
      </section>

      {/* // <!-- COMMENTS --> */}
      <section>
        <h3 className='section-header' id='comment'>Commenting in HTML</h3>
        <p>HTML comments are not displayed in the browser, but they are displayed in the browser&apos;s DevTools</p>
        <CodeBlock language='html'>{`<!-- This is a comment -->`}</CodeBlock>
        <hr />
      </section>

      {/* // <!-- LINKING CSS STYLESHEETS --> */}
      <section>
        <h3 className='section-header' id='linkingCSS'>Linking CSS Stylesheets</h3>
        <ul>
          <li>Put the <code>&lt;link&gt;</code> element in the <code>&lt;head&gt;</code> of HTML page.
            <CodeBlock language='html'>{`<link rel='stylesheet' href='/stylesheets/main.css'>`}</CodeBlock>
          </li>
          <li>When linking stylesheets from parent folder, use <code>../</code> notation to go up one folder.
            <CodeBlock language='html'>{`<link rel='stylesheet' href='../stylesheets/secondary.css'>`}</CodeBlock>
          </li>
          <ul><li>More examples in <a href='#links'>Links and Multimedia</a></li></ul><br />
          <li>When linking multiple stylesheets, add more <code>&lt;link&gt;</code> elements, but the last stylesheet will
            overwrite the previous ones if they shared the same selectors
            <CodeBlock language='html'>{`<link rel='stylesheet' href='/stylesheets/main.css'>
<link rel='stylesheet' href='../stylesheets/secondary.css'>`}</CodeBlock>
          </li>
        </ul>
        <hr />
      </section>

      {/* <!-- LINKING JS SCRIPTS --> */}
      <section>
        <h3 className='section-header' id='linkingJS'>Importing JS Scripts</h3>

        <h4 className='sub-section-header'>Method 1:</h4>If importing simple scripts, using <code>&lt;script&gt;</code> and
        <code>src</code> attribute in the HTML
        <code>head</code> element is enough. The
        function can be called after if desired.
        <ul>
          <li><code>defer</code> and <code>async</code> are used to tell when the script will be run: after the DOM
            finished loading or right after the script is finished downloading</li>
        </ul>
        <CodeBlock language='html'>{`<script src='/scripts/myScript.js' defer|async>
  myFunction();
</script>`}</CodeBlock>

        <h4 className='sub-section-header'>Method 2:</h4>Using ES6 syntax for a modular approach, you have to export the
        function in the js
        file first, then import
        it in the <code>head</code> element and between the <code>script</code> element of the HTML file.
        <ul>
          <li><mark>Everything between the <code>&lt;script&gt;</code> tags is Javascript code. Anything that can be done
            in a Javascript file can be done here and vice-versa.</mark></li>
          <li><code>type=&apos;module&apos;</code> scripts are automatically deferred so there&apos;s no need for
            <code>document.addEventListener(&apos;DOMContentLoaded&apos;, () =&gt; function)</code>
          </li>
        </ul>
        <CodeBlock language='javascript'>{`// Javascript
export function myFunction() {
  //Do something
}`}</CodeBlock>
        <CodeBlock language='javascript'>{`// HTML
<script type='module'>
    import { myFunction } from 'script1.js';
    import { deferredFunction, asyncFunction } from 'script2.js';

    asyncFunction();
    deferredFunction();
    myFunction();

    --------------------------------------------------------------
    /* Redundant because type='module' scripts are automatically deferred */
    document.addEventListener('DOMContentLoaded', () => {
      deferredFunction();

      // Do anything else you want after the DOM is loaded
      myFunction();
    });
    */
</script>`}</CodeBlock>
        <hr />
      </section>

      {/* // <!-- ATTRIBUTES --> */}
      <section>
        <h3 className='section-header' id='attributes'>Attributes</h3>
        <ul>
          <li><strong>class</strong>: Classification for CSS styling</li>
          <li><strong>id</strong>: Unique element identifier</li>
          <li><strong>style</strong>: Inline CSS styling</li>
          <li><strong>href</strong>: URL for links</li>
          <li><strong>target</strong>: Specifies where to open the linked document</li>
          <li><strong>src</strong>: Source path for images, scripts, etc.</li>
          <li><strong>alt</strong>: Alternate text for images</li>
        </ul>
        <hr />
      </section>

      {/* <!--CONTAINER ELEMENT-- > */}
      <section>
        <h3 className='section-header' id='containerElements'>Container Elements</h3>
        <ul>
          <li><strong>&lt;section&gt; &lt;article&gt; &lt;div&gt; &lt;main&gt;</strong>: container elements to hold
            other elements
          </li>
          <ul>
            <li>The only difference between them are related to SEO</li>
          </ul>
          <li><strong>&lt;div&gt;</strong>: most commonly used container block element</li>
          <li><strong>&lt;span&gt;</strong>: inline element primarily to hold text;</li>
          <li><strong>&lt;header&gt;</strong> and <strong>&lt;footer&gt;</strong>: for specific contents</li>
          <li><strong>&lt;nav&gt;</strong>: can be used to hold navigation elements (optional)</li>

        </ul>
        <hr />
      </section>

      {/* <!--TEXT ELEMENT-- > */}
      <section>
        <h3 className='section-header' id='text'>Text Elements</h3>
        <ul>
          <li>
            <strong>&lt;p&gt;</strong>: Paragraph - define text blocks;
            <CodeBlock language='html'>{`<p>This is a paragraph.</p>`}</CodeBlock>
          </li>

          <li>
            <strong>&lt;h1&gt; to &lt;h6&gt;</strong>: Headings
            <CodeBlock language='html'>{`<h1>Main Heading</h1>
<h3>Subheading</h3>`}</CodeBlock>
          </li>

          <li>
            <strong>&lt;strong&gt;</strong> and <strong>&lt;em&gt;</strong>: Bold and Italic
            <CodeBlock language='html'>{`<strong>Bold Text</strong>
<em>Italic Text</em>`}</CodeBlock>
          </li>


        </ul >
        <hr />
      </section>

      {/* <!--OTHER ELEMENT-- > */}
      <section>
        <h3 className='section-header' id='other'>Other Elements</h3>
        <ul>
          <li><strong>&lt;br /&gt;</strong>: line break;</li>
          <li><strong>&lt;hr /&gt;</strong>: horizontal rule</li>
        </ul>
        <hr />
      </section>

      {/* <!--LINKS & MULTIMEDIA-- > */}
      <section>
        <h3 className='section-header' id='links'>Links and Multimedia</h3>
        <ul>
          <li><strong>&lt;a href=&apos;...&apos;&gt;</strong>: Hyperlink</li>
          <ul>
            <li>Use the <code>href</code> attribute to specify the link destination</li>
            <ul>
              <li><strong>&apos;https://example.com&apos;</strong>: absolute link</li>
              <li><code>&apos;index.html&apos;</code> or <code>&apos;./index.html&apos;</code>: relative link starting from current folder
              </li>
              <li><code>&apos;/index.html&apos;</code>: root-relative link starting from root folder
                <strong>(PREFERRED)</strong>
              </li>
            </ul>
            <li>Use the <code>target</code> attribute to specify where to open the link</li>
            <ul>
              <li><strong>_blank</strong>: Opens in a new tab or window</li>
              <li><strong>_self</strong>: Opens in the same frame as it was clicked (default)</li>
              <li><strong>_parent</strong>: Opens in the parent frame</li>
              <li><strong>_top</strong>: Opens in the full body of the window</li>
            </ul>
          </ul>
          <li>
            <CodeBlock language='html'>{`<a href='https://example.com' target='_blank'>Visit Example</a>
<a href='/index.html' target='_blank'>Visit Example</a> // Relative link that starts from root folder
<a href='index.html' target='_blank'>Visit Example</a> // Relative link that starts from current folder`}</CodeBlock>
          </li>

          <li><strong>&lt;img src=&apos;...&apos; alt=&apos;...&apos;&gt;</strong>: Image
            <CodeBlock language='html'>{`<img src='image.jpg' alt='A description' width='200' />`}</CodeBlock>
          </li>

          <li><strong>&lt;audio src=&apos;...&apos; controls&gt;</strong>: Audio
            <ul>
              <li>Requires the <code>controls</code> attribute to let user pause and play it.</li>
            </ul>
            <CodeBlock language='html'>{`<audio src='audio.mp3' controls>Require browser update in order to play audio.</audio>`}</CodeBlock>
          </li>

          <li><strong>&lt;video src=&apos;...&apos; controls&gt;</strong>: Video
            <ul>
              <li>Requires the <code>controls</code> attribute to let user pause and play it.</li>
            </ul>
            <CodeBlock language='html'>{`<video src='video.mp4' controls width='98%'>Require browser update in order to play video.</video>`}</CodeBlock>
          </li>

          <li><strong>&lt;iframe src=&apos;...&apos;&gt;</strong>: embeds external content (e.g. maps)
            <CodeBlock language='html'>{`<iframe src='...' width='98%'>`}</CodeBlock>
          </li>


        </ul >
        <hr />
      </section>

      {/* <!--LISTS --> */}
      <section>
        <h3 className='section-header' id='lists'>Lists</h3>
        <ul style={{ columnCount: 2 }}>
          <li><strong>&lt;ul&gt;</strong>: Unordered List
            <div className='exampleRow'>
              <CodeBlock language='html'>{`<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>`}</CodeBlock>
              <div className='exampleMargin exampleOutput'>
                <ul>
                  <li>Item 1</li>
                  <li>Item 2</li>
                </ul>
              </div>
            </div>
          </li>
          <li><strong>&lt;ol&gt;</strong>: Ordered List
            <div className='exampleRow'>
              <CodeBlock language='html'>{`<ol>
  <li>First</li>
  <li>Second</li>
</ol>`}</CodeBlock>
              <div className='exampleMargin exampleOutput'>
                <ol>
                  <li>First</li>
                  <li>Second</li>
                </ol>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}
