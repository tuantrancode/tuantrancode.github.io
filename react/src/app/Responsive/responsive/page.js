import React from 'react';
import styles from './responsive.module.css';
import dropdownStyles from './dropdown-menu.module.css';
import CodeBlock from '@/components/shared/CodeBlock';
import DropdownBtn from '@/components/shared/DropdownBtn';
import Button from '@/components/shared/Button';


export const metadata = {
  title: "Responsive",
  description: "Some examples and concepts of responsive UI design including some samples of masonry effect",
};

export default function Responsive() {
  console.log('responsive page');
  return (
    <>
      {/*<!-- DEVICES BREAKPOINT -->*/}
      <section>
        <h3 className='section-header' id='devicesBreakpoint'>Devices Breakpoint</h3>
        <p>
          A popular strategy is to do <strong>mobile-first</strong> development with the following breakpoints:
        </p>
        <ul>
          <li><strong>Mobile-first</strong> : base style is designed for small devices and most phones ( &lt; 480px )</li>
          <li><code>@media (min-width: 480px)</code> : for portrait tablets ( &lt; 1024px )</li>
          <li><code>@media (min-width: 1024px)</code> : for desktop ( &ge; 1024px )</li>
        </ul>
        <p>Sample desktop-first breakpoints:</p>
        <ul>
          <li><strong>Desktop-first</strong> : base style is for desktop ( &gt; 1024px )</li>
          <li><code>@media (max-width: 1024px)</code> : for portrait tablets ( &gt; 480px )</li>
          <li><code>@media (max-width: 480px)</code> : for most phones ( &le; 480px )</li>
        </ul>
        <p>
          A desktop-first design, and mobile-first development approach could work. If experimenting with flexbox
          or grid, then a desktop-first approach might be better.
        </p>
        <h4 className='sub-section-header'>Useful Properties:</h4>
        <ul>
          <li><code>overflow-wrap: break-word</code> and <code>white-space: pre-wrap</code> are useful for handling overflowing text like in &lt;code&gt;</li>
          <li>
            Be careful of using <code>min-width</code> for large screen size, as smaller screen sizes wants
            <code>min-width: 0</code>
          </li>
        </ul>
        <hr />
      </section>

      {/*<!-- SCALING IMAGES -->*/}
      <section>
        <h3 className='section-header' id='scalingImages'>Scaling Images</h3>
        <ul>
          <li>Use vector images, <code>svg</code>, to handle various screen sizes
            <ul>
              <li>Put them in &lt;img&gt; tag or its own &lt;svg&gt; tag</li>
            </ul>
          </li>
          <li>
            For raster images, use <code>sizes</code> and <code>srcset</code> attributes on the element <code>img</code> to let the browser decide what image size to pick
            <CodeBlock language='html'>{`<img 
  src='assets/image.jpg'
  srcset='
    thumbs/image.jpg 480w,
    mediums/image.jpg 1024w,
    assets/image.jpg 1920w'
  sizes='(max-width: 480px) 480px,
         (max-width: 1024px) 1024px,
         1920px'
  alt='Responsive Image'>`}</CodeBlock>
          </li>
          <li>
            Use <code>&lt;picture&gt;</code> element with <code>&lt;sources</code> if completely different image or switch format is needed between screen sizes
          </li>
        </ul>
        <hr />
      </section>

      {/*<!-- USING FLEX-DIRECTION -->*/}
      <section>
        <h3 className='section-header' id='usingFlexDirection'>Using flex-direction & flex-basis</h3>
        <p>
          <code>flex-direction: row</code> and <code>flex-direction: column</code> can be use to switch between horizontal and vertical main-layout
        </p>
        <CodeBlock language='css'>{`.flexResponsiveContainer {
  display: flex;
  flex-direction: row;
  background-color: var(--contrastColor1);
}
.flexContainer > div {
  flex-basis: 25%; /* Makes 4 equal columns */
  margin: 10px;
  text-align: center;
  line-height: 50px;
  background-color: #f1f1f1;
}

@media (max-width: 800px) {
  /* Responsive layout - makes a one column layout instead of a 4-column layout */
  .flexResponsiveContainer {
    flex-direction: column;
  }
}`}</CodeBlock>
        <div className={styles.flexResponsiveContainer}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <hr />
      </section>

      {/*<!-- USING FLEX-WRAP -->*/}
      <section>
        <h3 className='section-header' id='usingFlexWrap'>Using flex-wrap & flex-basis</h3>
        <p>
          <code>flex-basis</code> in children elements to change the number of columns, and
          <code>flex-wrap: wrap</code> in the parent container when in vertical layout.
        </p>
        <CodeBlock language='css'>{`.flexContainer {
  display: flex;
  background-color: var(--contrastColor1);
}
.flexContainer > div {
  flex-basis: 50%; /* Makes 2 equal columns */
  margin: 10px;
  text-align: center;
  line-height: 50px;
  background-color: #f1f1f1;
}

@media (max-width: 800px) {
  /* Responsive layout - makes a one column layout instead of a 2-column layout */
  .flexContainer {
    flex-wrap: wrap;
  }
  .flexContainer > div {
    flex-basis: 100%;
  }
}`}</CodeBlock>
        <div className={styles.flexContainer}>
          <div>1</div>
          <div>2</div>
        </div>
        <hr />
      </section>

      {/*<!-- USING CHANGING THEME -->*/}
      <section>
        <h3 className='section-header' id='changingTheme'>Changing Theme</h3>
        <p>
          Add and manage a <code>data-theme</code> attribute using <code>setAttribute()</code>,
          <code>getAttribute</code>, and <code>localStorage</code> to change the whole site state
        </p>
        <ul>
          <li>
            Set attribute on <code>document.documentElement</code> to apply attribute on the root level or whole site
          </li>
        </ul>
        <CodeBlock language='javascript'>{`// Calls when the page first load
export function getTheme() {
  const theme = localStorage.getItem('data-theme') || 'light';
  document.documentElement.setAttribute('data-theme', theme);
}

// Calls when the switch theme button is clicked
function toggleTheme() {
  if(document.documentElement.getAttribute('data-theme') === 'dark'){
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('data-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('data-theme', 'dark');
  }
}`}</CodeBlock>
        <p>
          Then, in the CSS file, change the CSS variables inside the declaration block with CSS selector picking
          elements containing the attribute and value <code>[data-theme="dark"]</code>
        </p>
        <CodeBlock language='css'>{`:root {
  --primary-color: #333;
  --secondary-color: #f4f4f4;
}

/* Dark Theme */
[data-theme='dark'] {
  --primary-color: #111;
  --secondary-color: #1b1b1b;
}`}</CodeBlock>
        <hr />
      </section>

      {/*<!-- RESPONSIVE DROPDOWN MENU -->*/}
      <section>
        <h3 className='section-header' id='dropDownMenu'>Dropdown Menu on Mobile</h3>

        <p>Navigation bar will switch to a drop down menu if the screen is narrow enough.</p>
        <p><strong>Keypoints:</strong></p>
        <ul>
          <li>Use <code>position: relative</code> on the <u>dropdown container</u> to make the dropdown content position relative to this element</li>
          <li>Use <code>position: absolute</code> on the <u>dropdown content</u> to position it relative to the dropdown container</li>
          <li>Use <code>top: 100%; left: 0; right: 0;</code> to position the dropdown content <u>below</u> the dropdown button</li>
          <li>Use <code>top: 0; left: 100%;</code> to position the dropdown content to the <u>right</u> of the dropdown button</li>
          <li>Use <code>opacity: 0</code> and <code>opacity: 1</code> to hide/show elements for animation/transition instead of <code>display: none</code></li>
          <li>On mobile, hover doesn't work, so the dropdown button has to be bound to an onClick attribute and the function will toggle the dropdown content</li>
        </ul>

        <div className={dropdownStyles.navbar}>
          <a href='#home'>Home</a>
          <a href='#news'>News</a>
          <a href='#about'>About</a>
          <a href='#contact'>Contact</a>
          <DropdownBtn className={dropdownStyles.dropdownBtn}>
            <div className={`${dropdownStyles.dropdownContent}`} id='dropdownContent'>
              <a href='#home'>Home</a>
              <a href='#news'>News</a>
              <a href='#about'>About</a>
              <a href='#contact'>Contact</a>
            </div>
          </DropdownBtn>
        </div>

        <CodeBlock language='html'>{`<div class='navbar'>
  <a href='#home'>Long Home</a>
  <a href='#news'>Long News</a>
  <a href='#about'>Long About</a>
  <a href='#contact'>Long Contact</a>
  <div class='dropdownBtn' onClick='showDropdown()'>
    <div>Dropdown Menu &#9660;</div>
    <div class='dropdown-content' id='dropdownContent'>
      <a href='#home'>Home</a>
      <a href='#news'>News</a>
      <a href='#about'>About</a>
      <a href='#contact'>Contact</a>
    </div>
  </div>
</div>

<script>
  function showDropdown() {
    document.getElementById('dropdownContent').classList.toggle('open');
  }
</script>`}</CodeBlock>

        <CodeBlock language='css'>{`.navbar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
/* Links inside the navbar */
.navbar a {
  flex-basis: 25%; /* To split the 4 menu links evenly */
}
/* The dropdown container */
.dropdown {
  display: none; /* Initially hide the dropdown menu */
  background-color: inherit;
}
.navbar a, .dropdown{
  color: white;
  font-size: 16px;
  text-decoration: none;
  text-align: center;
  padding: 14px 16px; /* To fill up the menu link's space */
}
/* Add a red background color to navbar links on hover ,and active for mobile */
.navbar a:hover, .nav a:active,
.dropdownBtn:hover, .dropdownBtn:active {
  background-color: var(--nav-hover-bg-color);
}

@media (max-width: 800px) {
  /* Switch to dropdown menu on mobile */
  .navbar > a {
    display: none;
  }
  .dropdown {
    display: flex;
    flex-basis: 25%;
    /* use position: relative to make .dropdown-content relative to this element*/
    position: relative;
  }
  /* Dropdown content (hidden by default) */
  .dropdown-content {
    display: none;
    position: absolute; /* makes it relative to the .dropdown element */
    left: 0;
    right: 0; /* Make the dropdown content take the full width of .dropdown */
    top: 100%; /* Position the dropdown content below the dropdown menu */
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }

  /* Show the dropdown-content when hovering/clicking dropdownBtn */
  .dropdownBtn:hover .dropdown-content, .dropdown-content.open {
    display: block;
  }

  /* Links inside the dropdown */
  .dropdown-content a {
    display: block;
    color: black;
    padding: 12px 16px; /* To fill up the dropdown link's space */
  }

  /* Add a grey background color to dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #ddd;
  }
}`}</CodeBlock>
        <hr />
      </section>


      {/*<!-- RESPONSIVE IMAGE GALLERY WITH COLUMN-COUNT -->*/}
      <section>
        <h3 className='section-header' id='galleryUsingColCount'>Masonry Gallery using column-count</h3>
        <p>Only works well all the images are loaded at once, because they are added from top to bottom instead of left to right. It falls apart if images are loaded dynamically.</p>
        <p><strong>Keypoints:</strong></p>
        <ul>
          <li>Use <code>display: block</code> and <code>column-count: x</code> to adjust the number of columns</li>
          <li><code>break-inside: avoid;</code> is also needed to prevent caption of images from splitting across columns</li>
          <li>Use <code>@media (max-width: 800px)</code> to change column-count when the screen narrows</li>
        </ul>

        <CodeBlock language='html'>
          {`
<div className='gallery'>
    <div>
        <img>
    </div>
    <div>
        <img>
    </div>
    ...
</div>
    `}
        </CodeBlock>

        <CodeBlock language='css'>
          {`
/* Create four equal columns that sits next to each other; */
.gallery {
  display: block;
  column-count: 4;
  column-gap: 10px;
}
.gallery div {
  display: block;
  break-inside: avoid; /* To prevent part of the div element from wrapping to the next column */
  margin-bottom: 4px;
}
.gallery img {
  width: 100%;
}

/* Responsive layout - makes a single column-layout */
@media (max-width: 480px) {
    .gallery {
        column-count: 2;
    }
}
    `}
        </CodeBlock>

        <div className={styles.gallery} id='galleryColCount'></div>
        <Button className={styles.loadImgBtn} functionName='loadImgUsingColCount' >Load Images</Button>
        <hr />
      </section>


      {/*<!-- RESPONSIVE IMAGE GALLERY WITH FLEX BOX -->*/}
      <section>
        <h3 className='section-header' id='galleryUsingFlexBox'>Masonry Gallery using Flex Box</h3>
        <p><strong>Keypoints</strong> :</p>
        <ul>
          <li>Use <code>display: flex</code> and <code>flex-basis</code> to generate columns, then each image is placed in the shortest column</li>
          <li>Cheaper than <code>grid</code>, but can have empty gaps in columns after resizing</li>
          <li>Good if not strict with responsiveness</li>
          <li>Number of &lt;div&gt; columns need to be calculated on page load, if the browser try to wrap the columns, then new images will load at the top columsn as well</li>
          <li>If screen changes (switching orientation) after page load then columns will fail</li>
        </ul>

        <CodeBlock language='html'>
          {`
<div className='row' id='galleryFlexBox'>
    <div className='column'>
        <div> <img> </div>
        <div> <img> </div>    
    </div>
    <div className='column'>...</div>
    <div className='column'>...</div>
    <div className='column'>...</div>
</div>
    `}
        </CodeBlock>

        <CodeBlock language='css'>
          {`
* {
    box-sizing: border-box;
}

/* The main container for the gallery, the whole page is one row */
.row {
    display: flex;
    flex-wrap: wrap; // Require to make the container responsive on resize
    gap: 5px;
}

/* Create four equal columns that sits next to each other */
.column {
    flex: 1 1 25%;
}

.column img {
    width: 100%;    
}

/* Responsive layout - make 2 column layout*/
@media (max-width: 480px) {
    .column {
        flex: 49%;
    }
}
    `}
        </CodeBlock>

        <div className={styles.row} id='galleryFlexBox'>
          <div className={styles.column}></div>
          <div className={styles.column}></div>
          <div className={styles.column}></div>
          <div className={styles.column}></div>
        </div>

        <Button className={styles.loadImgBtn} functionName='loadImgUsingFlexBox'>Load Images</Button>
        <hr />
      </section>


      {/*<!-- USING GRID AND CALCULATING ROW SPAN OF EACH IMAGE -->*/}
      <section>
        <h3 className='section-header' id='galleryUsingGrid'>Masonry Gallery using Grid</h3>
        <p><strong>Keypoints</strong> :</p>
        <ul>
          <li>Use <code>grid</code> and calculate <code>grid-row-end</code>, the row span, for each image</li>
          <li>Setting the row gap to 0 will make it easier to calculate</li>
          <li>Lower <code>grid-auto-rows</code> value means shorter row-track height and more accurate grid</li>
          <li>Make sure to recalculate the grid items on finished resource loading and screen resize, <code>'load'</code> and <code>'resize'</code></li>
          <li>Expensive for large gallery because the browser has to recalculate every image everytime there's a resize</li>
          <li>Using <code>loading='lazy'</code> on &lt;img&gt; can improve performance for large galleries.</li>
        </ul>

        <CodeBlock language='html'>
          {`
<div className='grid' id='galleryGrid'>
    <div> <img> </div>
    <div> <img> </div>   
    ...
</div>
    `}
        </CodeBlock>

        <CodeBlock language='css'>
          {`
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* auto fill column number, min-width of 200px and can grow evenly if there space */
    grid-auto-rows: 10px; /* Height of each row track, the lower the number the more accurate the grid */
    gap: 0 10px;      /* Set row track gap to 0 to make calculation easier */
}

.item {
    margin-bottom: 5px;
    break-inside: avoid; /* So caption doesn't wrap onto a new column */
}

/* Responsive layout - keep 2 columns for mobile screen */
@media (max-width: 480px) {
   .grid {
        grid-template-columns: repeat(2, 1fr); 
    }
    .item {
        margin-bottom: 2px;
    }
    .main-content {
        padding: 1px; /* lower padding to get more screen space */
    }
}
    `}
        </CodeBlock>

        <CodeBlock language='javascript'>
          {`
/*
* Calculate the row span needed for each item
* The browser has a LIMIT of 16,000 rows track for a grid.
* Increase grid-auto-rows if row limit is reached
*/
function calcGridItem(item) {
    const grid = document.getElementById(gridId);
    const img = item.querySelector('img');

    /* Goal: calculate how many row-track the item will span (S)
    * Think of grid as cell-shading, where you have to identify how many rows the picture will take up on the canvas
    * Row-track: the invisible row in the grid that is used
    * rowTrackHeight: the height of one row-track
    * rowTrackGap: the gap between each row-track (i.e. bottom margin of row-track)*/

    // Getting all values for item's total height
    const itemBottomMargin = parseInt(window.getComputedStyle(item).getPropertyValue('margin-bottom'));
    const imgHeight = getRenderedHeight(img, grid);

    // Getting values for total row-track height
    const rowTrackHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowTrackGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));

    /* The number of rows an item will span (S) is:
    * S = TI / TR
    * TI = Total Item Height = Image_Rendered_Height + Item_Bottom_Margin
    * TR = Total Row Track-Height = Row_Track_Height + Row_Track_Gap
    */

    // Calculating the total item height and row span
    const itemHeight = imgHeight + itemBottomMargin;
    const rowSpan = parseInt(Math.ceil(itemHeight / (rowTrackHeight + rowTrackGap)));

    // Setting the row span on the item
    item.style.gridRowEnd = 'span ' + rowSpan;
}    

// Recalculate the items when all resource/images finished loading or when the screen resizes
const events = ['load', 'resize'];
events.forEach(function (event) {
    window.addEventListener(event, recalcAllGridItems);
});
    `}
        </CodeBlock>

        <div className={styles.grid} id='galleryGrid'></div>
        <Button className={styles.loadImgBtn} functionName='loadGridImages'>Load Images</Button>
      </section>

    </>
  );
}