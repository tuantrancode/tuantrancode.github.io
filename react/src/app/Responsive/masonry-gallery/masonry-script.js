import styles from './masonry-gallery.module.css';
const cardTemplateHTML = `
    <div>
        <a>
            <img>
            <span></span>
        </a>
    </div>
`;

const assetPath = '/assets/images/';
let imgCount = 0;
let myGridId;
export function updateImageCount(n) {
    imgCount = parseInt(n);
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
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

// Function for gallery using Grid: it distribute images into left to right and calculate the row span of each image
export async function loadMasonryImages(gridId, numberToShow = 20) {
    const totalImages = 30;
    const caption = "Masonry Image"
    myGridId = gridId;

    const gallery = document.getElementById(gridId);
    const cardTemplate = createTemplate();
    for (let i = 0; i < numberToShow; i++) {
        const imgNumber = getRandomInt(1, totalImages);
        // const imgNumber = getNextInt(i + 1, totalImages);
        const src = assetPath + `image${imgNumber}.jpg`;
        const loadedImg = await preloadImage(src);
        if (!loadedImg) return null;

        // Making the card
        const card = cardTemplate.cloneNode(true);
        card.classList.add(styles.item);
        const img = card.querySelector("img");
        const a = card.querySelector("a");
        const span = card.querySelector("span");
        span.textContent = `${caption} ${imgCount + 1}`;
        img.src = src;
        a.href = src;

        gallery.appendChild(card);
        imgCount++;

        // Calculating the row span for each item
        calcGridItem(gridId, card)
    }

    // Recalculate the items when all resource/images finished loading or when the screen resizes
    const events = ['load', 'resize'];
    events.forEach(function (event) {
        window.addEventListener(event, recalcAllGridItems(gridId));
    });
}

//  Function gets called when the screen is resized;
//  It recalculate all the row span for each item
export function recalcAllGridItems(gridId) {
    console.log("recalcAllGridItems was called");
    const allItems = document.querySelectorAll(`#${gridId} > div`);
    allItems.forEach(item => {
        calcGridItem(gridId, item); // calculate using actual rendered height and width
    });
}
export function recalcLastBatch(gridId, batchSize = 20) {
    // console.log("recalcLastBatch was called");
    const allItems = document.querySelectorAll(`#${gridId} > div`);
    const gridSize = allItems.length;
    allItems.forEach( (item, index) => {
        if(index >= gridSize - batchSize)
            calcGridItem(gridId, item); // calculate using actual rendered height and width
    });
}

// Manually calculate the row span needed for each item using actual value from rendered element
function calcGridItem(gridId, item) {
    const grid = document.getElementById(gridId);
    const span = item.querySelector('span');
    const img = item.querySelector('img');

    // Getting all values for item's total height
    const itemBottomMargin = parseInt(window.getComputedStyle(item).getPropertyValue('margin-bottom'));
    const captionHeight = parseInt(window.getComputedStyle(span).getPropertyValue('height'));
    const imgHeight = getRenderedHeight(img, grid);
    // console.log('captionHeight ',captionHeight, itemBottomMargin);

    // Getting values for total row-track height
    const rowTrackHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    const rowTrackGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    //  console.log('rowTrackHeight ',rowTrackHeight, rowTrackGap);
    /*
    Goal: calculate how many row-track the item will span (S)
    * Think of grid as cell-shading, where you have to identify how many rows the picture will take up on the canvas
    * Row-track: the invisible row in the grid that is used
    * rowTrackHeight: the height of one row-track
    * rowTrackGap: the gap between each row-track (i.e. bottom margin of row-track)
    * captionHeight: the height of the caption used below the picture
    
    So the number of rows an item will span (S) is:
    * S = TI / TR
    * TI = Total-Item-Height = Image-Rendered-Height + Caption-Height + Item-Bottom-Margin
    * TR = Total-Row-Track-Height = Row-Track-Height + Row-Track-Gap
    * Assuming the caption is at the bottom and outside of the image
    */


    const itemHeight = imgHeight + captionHeight + itemBottomMargin;
    const rowSpan = parseInt(Math.ceil(itemHeight / (rowTrackHeight + rowTrackGap)));

    // Setting the row span on the item
    item.style.gridRowEnd = 'span ' + rowSpan;

    /* Putting the caption at the bottom; 
    * Add rowTrackHeight to adjust for rounding error */
    const paddingHeight = parseInt(window.getComputedStyle(span).getPropertyValue('padding-top'));
    const spanBottom = `${itemBottomMargin + rowTrackHeight - paddingHeight}px`;
    // console.log('paddingHeight ',paddingHeight);
    span.style.bottom = spanBottom
}
// If the image is not loaded into the DOM yet, it will calculate rendered height instead
function getRenderedHeight(img, grid) {
    const imgHeight = img.getBoundingClientRect().height > 1 ? img.getBoundingClientRect().height : calcRenderedHeight(img, grid);
    console.log('img.getBoundingClientRect() ', img.getBoundingClientRect().height, 'imgHeight', imgHeight, img.src);
    return imgHeight;
}
function calcRenderedHeight(img, grid) {
    if (img.naturalHeight === 0) return 0;
    const columnWidth = getColumnWidth(grid)
    const renderedHeight = img.naturalHeight * columnWidth / img.naturalWidth;
    return renderedHeight;
}
function getColumnWidth(grid) {
    // const columnWidth = parseInt(window.getComputedStyle(grid).gridTemplateColumns);
    const columnWidth = grid.getBoundingClientRect().width / window.getComputedStyle(grid).gridTemplateColumns.split(" ").length;
    return columnWidth;
}

/*-------------------------------------------------------------------------------
REACT PORTION
-------------------------------------------------------------------------------*/

export async function fetchMasonryImages(gridId, numberToShow = 20) {
    console.log("Fetching images...");
    const totalImages = 30;
    let imgData = [];

    for (let i = 0; i < numberToShow; i++) {
        const imgNumber = getRandomInt(1, totalImages);
        // const imgNumber = getNextInt(i + 1, totalImages);
        const src = assetPath + `image${imgNumber}.jpg`;
        const loadedImg = await preloadImage(src);
        if (!loadedImg) return null;

        // Calculating the row span for each item using estimate
        // FIXME: Estimation for rendered height is inaccurate for mobile screen when using Next.js Image component,
        // <img> seems to be more accurate
        const data = calcGridItemReact(gridId, loadedImg)
        imgData[i] = {
            src: src, gridRowEnd: data.gridRowEnd, spanBottom: data.spanBottom,
            width: loadedImg.offsetWidth, height: loadedImg.offsetHeight
        };

        // imgData[i] = {src: src};
        // console.log(data);
    }
    return imgData;
}
// Pre calculate the row span needed for each item using estimate value
function calcGridItemReact(gridId, loadedImg) {
    let data = {}
    const grid = document.getElementById(gridId);
    // const item = grid.querySelector(`#${gridId} > div`);
    // const span = item.querySelector('span');


    // Getting all values for item's total height
    // const itemBottomMargin = parseInt(window.getComputedStyle(item).getPropertyValue('margin-bottom'));
    // const captionHeight = parseInt(window.getComputedStyle(span).getPropertyValue('height'));
    const itemBottomMargin = 5;
    const captionHeight = 35 - 15; // 35 is real value and 15 is to adjust for wrong estimate in imgHeight
    const imgHeight = getRenderedHeight(loadedImg, grid);

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
    * TI = Total-Item-Height = Image-Rendered-Height + Caption-Height + Item-Bottom-Margin
    * TR = Total-Row-Track-Height = Row-Track-Height + Row-Track-Gap
    * Assuming the caption is at the bottom and outside of the image
    */

    const itemHeight = imgHeight + captionHeight + itemBottomMargin;
    const rowSpan = parseInt(Math.ceil(itemHeight / (rowTrackHeight + rowTrackGap)));

    // Setting the row span on the item
    // item.style.gridRowEnd = 'span ' + rowSpan;


    /* Putting the caption at the bottom; 
    * Add rowTrackHeight to adjust for rounding error */
    // const paddingHeight = parseInt(window.getComputedStyle(span).getPropertyValue('padding-top'));
    const paddingHeight = 5;
    const spanBottom = `${itemBottomMargin + rowTrackHeight - paddingHeight}px`;
    // span.style.bottom = spanBottom


    return data = { gridRowEnd: rowSpan, spanBottom: spanBottom };
}