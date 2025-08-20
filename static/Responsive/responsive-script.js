const cardTemplateHTML = `
    <div>
        <a>
            <img loading='lazy'>
        </a>
        <span></span>
    </div>
`;
let assetPath = '/assets/images/';
let colCountImg = 1;
let flexBoxCountImg = 1;
let gridCountImg = 1;
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    //return (flexBoxCountImg) % 15 + 1; // To get a number between 1 and 15
}
function getNextInt(current, total) {
    return (current) % total + 1; // increment the current number and wrap around to 1 when it reaches total
}
function createTemplate() {
    const temp = document.createElement("template");
    temp.innerHTML = cardTemplateHTML.trim();
    return temp.content.firstChild;
}
function preloadImage(src) {
    return new Promise(resolve => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = () => resolve(null); // skip broken images
    });
}


// Function for gallery using column-count: it distribute images top to bottom then left to right
export function loadImgUsingColCount(numberToShow = 20) {
    const totalImages = 30;
    const caption = "Column-Count Image"
    const gallery = document.getElementById("galleryColCount");
    const cardTemplate = createTemplate();
    for (let i = 0; i < numberToShow; i++) {

        const imgNumber = getRandomInt(1, totalImages);
        // const imgNumber = getNextInt(i + 1, totalImages);
    console.log('imgNum', imgNumber);
        const card = cardTemplate.cloneNode(true);
        const img = card.querySelector("img");
        const a = card.querySelector("a");
        const span = card.querySelector("span");
        img.src = assetPath + `image${imgNumber}.jpg`;
        a.href = assetPath + `image${imgNumber}.jpg`;
        span.textContent = `${caption} ${colCountImg}`;
        gallery.appendChild(card);
        colCountImg++;
    }
}


// Function for gallery using Flex Box: it distribute images into columns in order
const numOfColumns = 4;  // Assuming 4 columns
let columnHeights = Array(numOfColumns).fill(0);                  
export async function loadImgUsingFlexBox(numberToShow = 20) {
    const totalImages = 30;
    const caption = "Flex Box Image";

    const gallery = document.getElementById("galleryFlexBox");
    const columns = gallery.querySelectorAll(".column");
    const cardTemplate = createTemplate();
    for (let i = 0; i < numberToShow; i++) {
        const imgNumber = getRandomInt(1, totalImages);
        //const imgNumber = getNextInt(i + 1, totalImages);
        const src = assetPath + `image${imgNumber}.jpg`;
        const loadedImg = await preloadImage(src);
        if (!loadedImg) return null;

        const card = cardTemplate.cloneNode(true);
        const img = card.querySelector("img");
        const a = card.querySelector("a");
        const span = card.querySelector("span");
        span.textContent = `${caption} ${flexBoxCountImg}`;
        img.src = src;
        a.href = src;


        // Append item to shortest column
        const minColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
        const renderHeight = loadedImg.naturalHeight * columns[0].offsetWidth / loadedImg.naturalWidth;
        columnHeights[minColumnIndex] += renderHeight// Update the height of the column
        columns[minColumnIndex].appendChild(card);
        flexBoxCountImg++;

        // Append item to shortest colum while avoiding race condition
        // columns[0].appendChild(card);
        // img.onload = () => {
        //     requestAnimationFrame(() => {
        //         // Find the column with the least height
        //         console.log(`Image: ${img.src}, Num: ${imgNumber}`);
        //         const minColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
        //         //console.log(`Image: ${img.src}, Num: ${imgNumber}, Min Col: ${minColumnIndex}`);
        //         columnHeights[minColumnIndex] += img.height; // Update the height of the column
        //         if (minColumnIndex === 0) {
        //             return;
        //         }
        //         //card.remove(); // Remove the card from the initial column
        //         columns[minColumnIndex].appendChild(card);
        //     });
        // };
    }
}


// Function for gallery using Grid: it distribute images into left to right and calculate the row span of each image
const gridId = "galleryGrid";
export async function loadGridImages(numberToShow = 20) {
    const totalImages = 30;
    const caption = "Grid Image"

    const gallery = document.getElementById("galleryGrid");
    const cardTemplate = createTemplate();
    for (let i = 0; i < numberToShow; i++) {
        const imgNumber = getRandomInt(1, totalImages);
        // const imgNumber = getNextInt(i + 1, totalImages);
        const src = assetPath + `image${imgNumber}.jpg`;
        const loadedImg = await preloadImage(src);
        if (!loadedImg) return null;

        // Making the card
        const card = cardTemplate.cloneNode(true);
        card.classList.add("item");
        const img = card.querySelector("img");
        const a = card.querySelector("a");
        const span = card.querySelector("span");
        span.textContent = `${caption} ${gridCountImg}`;
        img.src = src;
        a.href = src;

        gallery.appendChild(card);
        gridCountImg++;

        // Calculating the row span for each item
        calcGridItem(card, img)
    }
    const events = ['load', 'resize'];
    events.forEach(function (event) {
        window.addEventListener(event, recalcAllGridItems);
    });
}
function recalcAllGridItems() {
    console.log("recalcAllGridItems called");
    const allItems = document.querySelectorAll('.grid .item');
    allItems.forEach(item => {
        calcGridItem(item);
    });
}

/*
* Manually calculate the row span needed for each item
* The browser has a LIMIT of 16,000 rows track for a grid.
* Increase grid-auto-rows if row limit is reached
*/
function calcGridItem(item) {
    const grid = document.getElementById(gridId);
    const span = item.querySelector('span');
    const img = item.querySelector('img');

    // Getting all values for item's total height
    const itemBottomMargin = parseInt(window.getComputedStyle(item).getPropertyValue('margin-bottom'));

    const imgHeight = getRenderedHeight(img, grid);

    // Getting values for total row-track height
    const rowTrackHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowTrackGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));

    /*
    Goal: calculate how many row-track the item will span (S)
    * Think of grid as cell-shading, where you have to identify how many rows the picture will take up on the canvas
    * Row-track: the invisible row in the grid that is used
    * rowTrackHeight: the height of one row-track
    * rowTrackGap: the gap between each row-track (i.e. bottom margin of row-track)
    * captionHeight: the height of the caption used below the picture
    
    So the number of rows an item will span (S) is:
    * S = TI / TR
    * TI = Total-Item-Height = Image-Rendered-Height + Item-Bottom-Margin
    * TR = Total-Row-Track-Height = Row-Track-Height + Row-Track-Gap
    * Assuming the caption is at the bottom and outside of the image
    */

    const itemHeight = imgHeight + itemBottomMargin;
    const rowSpan = parseInt(Math.ceil(itemHeight / (rowTrackHeight + rowTrackGap)));

    // Setting the row span on the item
    item.style.gridRowEnd = 'span ' + rowSpan;

    /* Putting the caption at the bottom; 
    * Adding rowTrackHeight is to adjust for rounding error */
    // const paddingHeight = parseInt(window.getComputedStyle(span).getPropertyValue('padding-top'));
    // span.style.bottom = `${itemBottomMargin + rowTrackHeight - paddingHeight}px`;
    // console.log("rowSpan:", rowSpan, " itemHeight:", itemHeight);
}
function getRenderedHeight(img, grid) {
    const imgHeight = img.getBoundingClientRect().height > 1 ? img.getBoundingClientRect().height : calcRenderedHeight(img, grid);
    return imgHeight;
}
function calcRenderedHeight(img, grid) {
    if (img.naturalHeight === 0) return 0;
    const columnWidth = parseInt(window.getComputedStyle(grid).gridTemplateColumns);
    const renderedHeight = img.naturalHeight * columnWidth / img.naturalWidth;
    return renderedHeight;
}
