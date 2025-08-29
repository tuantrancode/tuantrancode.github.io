import React from 'react';
import CodeBlock from '@/components/shared/CodeBlock';

export const metadata = {
  title: "Working with DOM using Javascript",
  description: "Methods on editing DOM elements",
};

export default function JsDOM() {

  return (
    <>
      {/*<!--ADDING BUTTONS-->*/}
      <section>
        <h3 className="section-header" id="addingButtons">Adding Buttons</h3>
        <h4 className="sub-section-header">Quick Method</h4>
        <p>Add attribute <code>onClick=&apos;functionName()&apos;</code> to the desired element</p>
        <CodeBlock language='html'>{`// In HTML
<button class="menu-btn" id="menuBtn" onClick="myFunction()">&#9776;</button>

<script>
function myFunction() {
    console.log("Button clicked!");
}
</script>`}</CodeBlock>

        <h4 className="sub-section-header">Modular Method</h4>
        <p>Use <code>addEventListener()</code> to bind the element to the function and the &apos;click&apos; event</p>
        <CodeBlock language='html'>{`// In HTML
<head>
<script type="module">
    import { bindButton } from '/load-menu.js';

    document.addEventListener('DOMContentLoaded', () => {// wrap the callback function 
                                                        (bindButton) in a function so it doesn't run immediately when script loads
        // Bind button after DOM is loaded
        <mark>bindButton("menuBtn");</mark>
    });
</script>
</head>

<body>
    <button class="menu-btn" <mark>id="menuBtn"</mark>>&amp;#9776;</button>
</body>`}</CodeBlock>
        <br />
        <CodeBlock language='javascript'>{`// In load-menu.js
// Function to bind button click event
export function bindButton(buttonId) {
    <mark>document.getElementById(buttonId).addEventListener('click', myFunction);</mark>
}
// Declare the function to be called when button clicked
function myFunction() {
    console.log("Button clicked!");
}`}</CodeBlock>
        <hr />
      </section>

      {/*<!--FINDING ELEMENTS-->*/}
      <section>
        <h3 className="section-header" id="findingElements">Finding Elements</h3>
        <p>The main methods for getting an element in the DOM are <code>getElementById</code>,
          <code>querySelector</code>, <code>querySelectorAll</code>
        </p>
        <ul>
          <li><code>getElementById</code> can only be used by <code>Document</code> objects (i.e.
            <code>document</code>)
          </li>
          <li><code>querySelector</code> and <code>querySelectorAll</code> can be used by both
            <code>HTMLElement</code> and <code>Document</code> objects
          </li>
        </ul>
        <CodeBlock language='javascript'>{`// In Javascript
// Returns the element with id="menuBtn"
const menuBtn = document.getElementById("menuBtn");   

// Returns the first button element with class="menu-btn"
const menuBtn = document.querySelector("button .menu-btn");  

 // Returns a NodeList of all button elements with class="menu-btn"
const menuBtns = document.querySelectorAll("button .menu-btn");

// Looking for a #menuBtn starting from a specific element, topNav
const topNav = document.getElementById("topNav"); 
const menuBtn = topNav.querySelector("#menuBtn");`}</CodeBlock>
        <hr />
      </section>

      {/*<!--ELEMENT OBJECT-->*/}
      <section>
        <h3 className="section-header" id="element">Element Object</h3>
        <p>The <code>Element</code> object has generic DOM manipulation methods and properties.</p>
        <h4 className="sub-section-header">Commonly Used Methods and Properties</h4>
        <ul>
          <li><code>querySelector(selector)</code> : Returns the first matching descendant element.</li>
          <li><code>querySelectorAll(selector)</code> : Returns a NodeList of all matching descendants.</li>
          <li><code>getAttribute(name)</code> / <code>setAttribute(name, value)</code> /
            <code>removeAttribute(name)</code> : Attribute handling.
          </li>
          <ul>
            <li><code>document.documentElement.setAttribute(&apos;data-theme&apos;, &apos;dark&apos;)</code> : add the custom
              attribute <code>data-theme=&apos;dark&apos;</code> to the root-level element (i.e.<code>&lt;html$gt;</code>
              element)</li>
            <li>Very useful to change the &apos;state&apos; of the overall site</li>
          </ul>
          <li><code>append(...nodesOrStrings)</code> / <code>prepend(...nodesOrStrings)</code> : Insert content
            inside the element.</li>
          <ul>
            <li><code>document.body.prepend(node)</code> : add a node as the first child of the
              <code>&lt;body&gt;</code>
            </li>
          </ul>
          <li><code>before(...nodesOrStrings)</code> / <code>after(...nodesOrStrings)</code> /
            <code>replaceWith(...nodesOrStrings)</code> : Insert or replace relative to the element itself.
          </li>
          <ul>
            <li><code>oldTopNav.replaceWith(newTopNav)</code> : replace the old top nav element with the newly
              created one</li>
          </ul>
          <li><code>classList</code> : Property with methods like <code>add()</code>, <code>remove()</code>,
            <code>toggle()</code>, <code>contains()</code>.
          </li>
          <ul>
            <li><code>leftNav.classList.toggle(&apos;open&apos;)</code> : add/ remove the class &apos;open&apos; from the element
              leftNav</li>
            <ul>
              <li>Very useful to switch the &apos;state&apos; of an element</li>
            </ul>
          </ul>
        </ul>
        <h4 className="sub-section-header">Other Methods and Properties</h4>
        <ul>
          <li><code>hasAttribute(name)</code> : Check if attribute exists.</li>
          <li><code>matches(selector)</code> : Checks if the element would be selected by a given CSS selector.
          </li>
          <li><code>closest(selector)</code> : Finds the nearest ancestor (including itself) matching a selector.
          </li>
          <li><code>remove()</code> : Removes the element from the DOM.</li>
        </ul>
        <p>Reference: <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element">developer.mozilla.org/en-US/docs/Web/API/Element</a></p>
        <hr />
      </section>

      {/*<!--HTMLElement Object-->*/}
      <section>
        <h3 className="section-header" id="htmlElement">HTMLElement Object</h3>
        <ul>
          <li><code>style</code> : Access inline CSS styling via JS (e.g.,
            <code>element.style.color = &apos;red&apos;</code>).</li>
          <li><code>innerText</code> / <code>innerHTML</code> / <code>outerHTML</code> : Get or set the element&apos;s
            content.</li>

          <li><code>focus()</code> / <code>blur()</code> : Manage element focus.</li>
          <li><code>click()</code> : Programmatically triggers a click event.</li>
          <li><code>hidden</code> : Boolean property to toggle whether the element is hidden.</li>
          <li><code>tabIndex</code> : Controls keyboard tab navigation order.</li>
          <li><code>contentEditable</code> : Makes element text editable in the browser.</li>
          <li><code>dataset</code> : Access <code>data-*</code> attributes (e.g., <code>div.dataset.id</code>).
          </li>
        </ul>
        <p>Reference: <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement">developer.mozilla.org/en-US/docs/Web/API/HTMLElement</a></p>
        <hr />
      </section>

      {/*<!--CREATING ELEMENTS-->*/}
      <section>
        <h3 className="section-header" id="creatingElements">Creating Elements</h3>
        <h4 className="sub-section-header">Creating Elements</h4>
        <p>Use <code>document.createElement(&apos;template&apos;)</code> to create a template element where the
          <code>innerHTML</code> can be replaced with new element&apos;s code
        </p>
        <CodeBlock language='javascript'>{`// In Javascript

// raw HTML code for the new button
const btnHTML = \`
    <button class="menu-btn" id="menuBtn">&amp;#9776;</button>
\`;   

// Create a new button element
function createButton() {
    const btnTemp = document.createElement('template');
    btnTemp.innerHTML = btnHTML.trim();        // Set the HTML code
    const newBtn = btnTemp.content.firstChild;  // Get the element node 
    return newBtn;                    
}`}</CodeBlock>

        <h4 className="sub-section-header">Notes</h4>
        <ul>
          <li>Use backticks ` in order to create a template literal string - string in Javascript that spans
            multiple lines and uses embedded expression ( i.e. $&#123;variableName&#125; )</li>
          <li>Use <code>content.children</code> to get all the nodes if multiple elements were created</li>
        </ul>
        <hr />
      </section>

      {/*<!--EDITING DOM-->*/}
      <section>
        <h3 className="section-header" id="editingDOM">Editing DOM</h3>
        <h4 className="sub-section-header">Adding Elements</h4>
        <p>Use methods like <code>prepend()</code>, <code>append()</code>, <code>before()</code>, and
          <code>after()</code> to add element(s) into the DOM
        </p>
        <CodeBlock language='javascript'>{`// In Javascript
const topNav = createTopNav(); // Create the top nav element
document.body.prepend(topNav); // Add the top nav as the first child of the body`}</CodeBlock>

        <h4 className="sub-section-header">Replacing Elements</h4>
        <p>Use <code>replaceWith()</code> method to replace element.</p>
        <CodeBlock language='javascript'>{`// In Javascript
const topNav = createTopNav(); // Create the top nav element
const oldTopNav = document.getElementById('topNav'); // Get the old top nav element
oldTopNav.replaceWith(topNav); // Replace the old top nav with the new one`}</CodeBlock>

        <h4 className="sub-section-header">Getting and Setting Element Styles</h4>
        <ul>
          <li>Use <code>window.getComputedStyle(element).getPropertyValue(&apos;css-property&apos;)</code> to get the
            current property value as a <strong>String</strong></li>
          <li>To <strong>SET</strong> the inline property styles, use <code>element.style.cssProperty</code></li>
          <li>Trying to read the CSS property value with <code>element.style.cssProperty</code> can give an empty
            string because it reads the inline value</li>
        </ul>
        <CodeBlock language='javascript'>{`// Reading the CSS property rule
const grid = document.getElementById('grid');
const rowTrackHeightString = window.getComputedStyle(grid).getPropertyValue('grid-auto-rows');
rowTrackHeight = parseInt(rowTrackHeightString);

// Setting the inline style
grid.style.gridAutoRows = someValue`}</CodeBlock>
        <hr />
      </section>

      {/*<!--GETTING ELEMENT SIZES-->*/}
      <section>
        <h3 className="section-header" id="elementSizes">Getting Element Sizes</h3>

        <h4 className="sub-section-header">Generic HTML Element Properties</h4>
        <ul>
          <li><code>style.width / style.height</code> : Inline style value, as a String; if not set, returns
            empty string</li>
          <li><code>clientWidth / clientHeight</code> : inner size of the element as an integer (includes padding,
            but excludes borders)</li>
          <li><code>offsetWidth / offsetHeight</code> : Rendered size as an integer (includes padding + border)</li>
          <li><code>getBoundingClientRect().width / height</code> : Precise rendered size as a float (reflects
            transforms and includes padding + border)</li>
          <li><code>getComputedStyle(element).width / height</code> : Resolved CSS width/height value (e.g.,
            &apos;200px&apos; or &apos;auto&apos;)</li>
        </ul>

        <h4 className="sub-section-header">Image-, Video-, & Canvas-only Sizes</h4>
        <ul>
          <li><code>img.naturalWidth / img.naturalHeight</code> : Actual image size in pixels (only for &lt;img&gt;)</li>
          <li><code>video.videoWidth / video.videoHeight</code> : Actual video resolution (only for &lt;video&gt;)</li>
          <li><code>canvas.width / canvas.height</code> : Internal drawing buffer size (only for &lt;canvas&gt;)</li>
          <li><code>img.width/height & video.width/height</code> : Reflects the HTML attributes; sets rendered
            size (not intrinsic)</li>
        </ul>
        <hr />
      </section>

      {/*<!--LOCAL STORAGE-->*/}
      <section>
        <h3 className="section-header" id="localStorage">Local/Session Storage</h3>
        <p><code>localStorage</code> is a persistent data storage for the web unlike <code>sessionStorage</code>
          unless the user is incognito mode, clears cookies, or storage is full
        </p>

        <h4 className="sub-section-header">Methods</h4>
        <ul>
          <li><code>localStorage.setItem(key, value)</code> : Store a key-value pair.</li>
          <li><code>localStorage.getItem(key)</code> : Retrieve the value for a given key.</li>
          <li><code>localStorage.removeItem(key)</code> : Remove a key-value pair.</li>
          <li><code>localStorage.clear()</code> : Clear all local storage data.</li>
        </ul>

        <h4 className="sub-section-header">Notes</h4>
        <ul>
          <li><code>sessionStorage</code> has the same methods, but the data in <code>sessionStorage</code> is
            only kept for the duration of the page session</li>
        </ul>
        <hr />
      </section>

      {/*<!--CHANGING STATE-->*/}
      <section>
        <h3 className="section-header" id="states">Managing States</h3>
        <p>CSS classes can be used to define the state of an element</p>
        <ul>
          <li><code>&lt;nav className=&apos;menu&apos;&gt;</code> : the menu is closed
            <ul>
              <li>In CSS code: <code>.menu { }</code></li>
            </ul>
          </li>
          <li><code>&lt;nav className=&apos;menu open&apos;&gt;</code> : the menu is open
            <ul>
              <li>In CSS code: <code>.menu.open { }</code></li>
            </ul>
          </li>
        </ul>

        <h4 className="sub-section-header">Managing State of Elements</h4>
        <p>Use methods like <code>classList.add(&apos;open&apos;)</code>, <code>classList.remove(&apos;open&apos;)</code>,
          <code>classList.toggle(&apos;open&apos;)</code>, and <code>classList.contains(&apos;open&apos;)</code> to handle CSS classes
        </p>
        <CodeBlock language='javascript'>{`// In Javascript
// Get the element
const leftNav = document.getElementById('leftNav');
// Toggle the menu's state
leftNav.classList.toggle('open'); // add/remove the class 'open' from the element leftNav`}</CodeBlock>

        <h4 className="sub-section-header">Managing State of Whole Site</h4>
        <p>Use <code>setAttribute()</code>, <code>removeAttribute()</code> and <code>getAttribute()</code> methods
          alongside <code>localStorage</code> and <code>document.documentElement</code> to manage the whole site
          states
        </p>
        <CodeBlock language='javascript'>{`// In Javascript
// Set the theme to dark and store it
document.documentElement.setAttribute('data-theme', 'dark');
localStorage.setItem('data-theme', 'dark'); 

// Get the current theme
const currentTheme = localStorage.getItem('data-theme') ? localStorage.getItem('data-theme') : null;
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
}`}</CodeBlock>
        <hr />
      </section>

      {/*<!--RELOADING SESSIONS-->*/}
      <section>
        <h3 className="section-header" id="reloadingSessions">Reloading Sessions</h3>
        <p>Most browsers automatically save sessions up to a certain point, but for more complicated pages,
          <code>sessionStorage</code> can be used to save the states of a session
        </p>
        <ul>
          <li><code>sessionStorage</code> data gets deleted when the user closes the tab or window.</li>
          <li><code>localStorage</code> and IndexedDB can be used for more persistent data</li>
        </ul>

        <h4 className="sub-section-header">Restore by pageshow (bfcache)</h4>
        <p>Sometimes back clicks cannot be detected and all page loads are treated as normal loads. In those cases,
          this method is more reliable.
        </p>
        <CodeBlock language='html'>{`<script type='module'>

// Do what is not saved here so it will run every time page loads
getTheme();
loadMenu('mainContainer', 'rightNav');
document.getElementById(loadBtnId).addEventListener('click', () => {
        loadMasonryImages(gridId);
});

// Save gallery and scroll state before leaving page
window.addEventListener('beforeunload', saveGalleryState);

// Save the state of certain elements
function saveGalleryState() {
    const gallery = document.getElementById(gridId);
    sessionStorage.setItem('galleryHTML', gallery.innerHTML);
    sessionStorage.setItem('galleryItemsCount', gallery.childElementCount);
    sessionStorage.setItem('scrollPos', window.scrollY);
}

// Reload what was saved
function restoreGalleryState() {
    const savedHTML = sessionStorage.getItem('galleryHTML');
    if (savedHTML) {
        const gallery = document.getElementById(gridId);
        gallery.innerHTML = savedHTML;
        updateImageCount(sessionStorage.getItem('galleryItemsCount'));
        window.scrollTo(0, sessionStorage.getItem('scrollPos') || 0);
        return true;
    }
    return false;
}

//  What to make once and reload from session if possible
function makeOnce() {
    loadMasonryImages(gridId);
}

// Listen for pageshow (bfcache) and normal load
window.addEventListener('pageshow', (event) => {
    // If restored from bfcache, DOM is already there
    if (event.persisted) {
        console.log('Page restored from bfcache');
        restoreGalleryState();
    } else {
        console.log('Normal page load');
        makeOnce();
    }
});
</script>`}</CodeBlock>

        <h4 className="sub-section-header">Restoring by manually listening for entries event</h4>
        <p>Use <code>performance.getEntriesByType(&apos;navigation&apos;)[0].type</code> to get the last navigation method used
          to enter the page. This is more reliable than the previous method.
        </p>
        <CodeBlock language='javascript'>{`window.addEventListener('load', () => {
    const navType = performance.getEntriesByType('navigation')[0].type;
    
    if (navType === 'back_forward') {
        console.log('Back/Forward navigation — restoring gallery');
        restoreGalleryState();
    } else {
        console.log('Normal load — initialize page');
        initPage();
    }
});`}</CodeBlock>
        <p>Other <code>navigation.type</code> values:</p>
        <ul>
          <li><code>&apos;navigate&apos;</code> : normal load</li>
          <li><code>&apos;reload&apos;</code> : reload</li>
          <li><code>&apos;back_forward&apos;</code> : user navigated via back/forward</li>
        </ul>
        <hr />
      </section>

      {/*<!--addEventListener-->*/}
      <section>
        <h3 className="section-header" id="addEventListener">addEventListener</h3>
        <p><code>addEventListener()</code> method allows the site to listen for when certain events are triggered on
          the specified element
        </p>
        <ul>
          <li><code>addEventListener(type, listenerFunc)</code></li>
          <ul>
            <li><code>type</code> is the type of event to listen for (e.g., &apos;click&apos;, &apos;mouseover&apos;, &apos;keyup&apos;,
              &apos;DOMContentLoaded&apos;, &apos;resize&apos;, &apos;scroll&apos;, &apos;load&apos;, &apos;unload&apos;)</li>
          <li><code>listenerFunc</code> is the function to be called when the event is triggered</li>
          <li>Example: <code>menuBtn.addEventListener(&apos;click&apos;, () =&gt; myFunction)</code></li>
        </ul>
      </ul>

      <h4 className="sub-section-header">Types of Events</h4>
      <ul>
        <li><strong>Mouse Events</strong>
          <ul>
            <li><code>click</code> : Mouse click on an element</li>
            <li><code>dblclick</code> : Double-click</li>
            <li><code>mousedown / mouseup</code> : Mouse button pressed/released</li>
            <li><code>mousemove</code> : Mouse moves over an element</li>
            <li><code>mouseenter / mouseleave</code> : Mouse enters/leaves an element (no bubbling)</li>
            <li><code>mouseover / mouseout</code> : Mouse enters/leaves an element (bubbles)</li>
            <li><code>contextmenu</code> : Right-click context menu</li>
          </ul>
        </li>

        <li><strong>Keyboard Events</strong>
          <ul>
            <li><code>keydown</code> : Key is pressed down</li>
            <li><code>keypress</code> : Key is pressed (deprecated, use keydown)</li>
            <li><code>keyup</code> : Key is released</li>
          </ul>
        </li>

        <li><strong>Form & Input Events</strong>
          <ul>
            <li><code>submit</code> : Form submission</li>
            <li><code>change</code> : Input/select value changes</li>
            <li><code>input</code> : Input value changes (real-time)</li>
            <li><code>focus / blur</code> : Element gains or loses focus</li>
            <li><code>focusin / focusout</code> : Similar to focus/blur but bubbles</li>
          </ul>
        </li>

        <li><strong>Window / Document Events</strong>
          <ul>
            <li><code>load</code> : Page or resource fully loaded</li>
            <li><code>DOMContentLoaded</code> : DOM fully parsed</li>
            <li><code>resize</code> : Window size changes</li>
            <li><code>scroll</code> : Scrolling occurs</li>
            <li><code>beforeunload / unload</code> : Page is about to leave</li>
          </ul>
        </li>

        <li><strong>Drag & Drop Events</strong>
          <ul>
            <li><code>dragstart, drag, dragend</code></li>
            <li><code>dragenter, dragover, dragleave, drop</code></li>
          </ul>
        </li>

        <li><strong>Clipboard Events</strong>
          <ul>
            <li><code>copy, cut, paste</code></li>
          </ul>
        </li>

        <li><strong>Touch Events</strong>
          <ul>
            <li><code>touchstart, touchmove, touchend, touchcancel</code></li>
          </ul>
        </li>

        <li><strong>Media Events</strong>
          <ul>
            <li><code>play, pause, ended, volumechange, timeupdate</code></li>
          </ul>
        </li>

        <li><strong>Pointer Events</strong>
          <ul>
            <li><code>pointerdown, pointerup, pointermove, pointerenter, pointerleave, pointercancel</code></li>
          </ul>
        </li>

        <li><strong>Miscellaneous Events</strong>
          <ul>
            <li><code>contextmenu</code> : Right-click menu</li>
            <li><code>wheel</code> : Mouse wheel scroll</li>
            <li><code>animationstart, animationend, animationiteration</code></li>
            <li><code>transitionstart, transitionend, transitionrun</code></li>
          </ul>
        </li>
      </ul>
    </section >

    </>
  );
}