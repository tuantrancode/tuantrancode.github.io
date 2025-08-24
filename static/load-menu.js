// TOP NAV
const topNavDiv = `
<div class="top-bar">
    <div class="top-nav">
        <button class="menu-btn" id="menuBtn">&#9776;</button>
        <div class="top-nav-scrollable">
          <a href="/index.html">HTML</a>
          <a href="/CSS/css-basics.html">CSS</a>
          <a href="/Javascript/js-basics.html">Javascript</a>
          <a href="/React/react-basics.html">React</a>
          <a href="/Responsive/responsive.html">Responsive</a>
          <a href="/Tools/browser.html">Tools</a>
          <button class="theme-btn" id="themeBtn">&#9681;</button>
	    </div>
    </div>
    <button class="right-nav-btn" id="rightNavBtn">&#8942;</button>
</div>
`;

// LEFT NAV
const leftNavDiv = `
<div class="left-nav" id="leftNav">
    <h3>HTML</h3>
    <a href="/index.html">HTML Basics</a>
    <a href="/HTML/forms.html">Forms</a>
    <a href="/HTML/table.html">Table</a>
    <a href="/HTML/special-characters.html">Special Characters</a>
    <a href="/HTML/libraries.html">Libraries</a>

    <h3>CSS</h3>
    <a href="/CSS/css-basics.html">CSS Basics</a>
    <a href="/CSS/css-properties.html">CSS Properties</a>
    <a href="/CSS/alignment.html">Alignment</a>
    <a href="/CSS/flex-box.html">Flex Box</a>
    <a href="/CSS/flex-items.html">Flex Items</a>

    <h3>Javascript</h3>
    <a href="/Javascript/js-basics.html">JS Basics</a>
    <a href="/Javascript/js-functions.html">Functions</a>
    <a href="/Javascript/js-methods-reference.html">Methods Reference</a>
    <a href="/Javascript/js-dom.html">Working with DOM</a>

    <h3>React</h3>
    <a href="/React/react-basics.html">React Basics</a>
    <a href="/React/react-styling.html">React Styling</a>
    <a href="/React/react-form.html">Form in React</a>
    <a href="/React/react-setup.html">React Setup Comparison</a>
    <a href="/React/react-nextjs.html">Next.js</a>
    <a href="/React/react-libraries.html">Libraries</a>
    <a href="/React/react-pattern.html">Programming Pattern</a>
    <a href="/React/react-mobile-ready.html">Mobile-Ready React</a>
    
    <h3>Responsive</h3>
    <a href="/Responsive/responsive.html">Responsive Styles</a>
    <a href="/Responsive/masonry-gallery.html">Masonry Gallery</a>

    <h3>Tools</h3>
    <a href="/Tools/browser.html">Browser DevTools</a>
    <a href="/Tools/react-dev-tools.html">React DevTools</a>
    <a href="/Tools/cmd.html">Cmd / Terminal</a>
    <a href="/Tools/visual-studio-code.html">Visual Studio Code</a>
    <a href="/Tools/eclipse.html">Eclipse for Java</a>
    <a href="/Tools/android-studio.html">Android Studio</a>
</div>
`;


// Fully modular menu, just import the function and call it
// But easy to lose track of the DOM tree structure
export function loadMenu(mainContainerId, rightNavId) {
    // console.log('loadMenu called');
    const mainContainer = document.getElementById(mainContainerId);

    // Create top nav
    const topNavTemp = document.createElement('template');
    topNavTemp.innerHTML = topNavDiv.trim();
    const topNav = topNavTemp.content.firstChild;
    document.body.prepend(topNav);

    //Create left nav
    const leftNavTemp = document.createElement('template');
    leftNavTemp.innerHTML = leftNavDiv.trim();
    const leftNav = leftNavTemp.content.firstChild;
    mainContainer.prepend(leftNav);

    // Attach events
    topNav.querySelector('#menuBtn').addEventListener('click', toggleLeftNav);
    topNav.querySelector('#themeBtn').addEventListener('click', toggleTheme);
    topNav.querySelector('#rightNavBtn').addEventListener('click', toggleRightNav);

    /* Listener for when a right nav link is clicked, the right nav will close*/
    const rightNav = document.getElementById(rightNavId);
    rightNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            rightNav.classList.remove('open');
        })
    });

    /* Listener for when anything outside the menu is pressed, it will close the corresponding menu */
    document.addEventListener("click", function (event) {
        const rightNav = document.getElementById("rightNav");
        const rightNavBtn = document.getElementById('rightNavBtn');
        const leftNav = document.getElementById("leftNav");
        const menuBtn = document.getElementById('menuBtn');

        if (!(rightNav.contains(event.target) || rightNavBtn.contains(event.target))) {
            rightNav.classList.remove("open");
        }
        if (!(leftNav.contains(event.target) || menuBtn.contains(event.target))) {
            leftNav.classList.remove("open");
        }
    });
}

// Initializing the top, left, and right nav 
// and then replacing the placeholder elements in the HTML page with them
export function replaceMenu(topNavId, leftNavId, rightNavId) {
    // console.log('loadMenu called');
    // Create top nav
    const oldTopNav = document.getElementById(topNavId);
    const topNavTemp = document.createElement('template');
    topNavTemp.innerHTML = topNavDiv.trim();
    const topNav = topNavTemp.content.firstChild;
    oldTopNav.replaceWith(topNav);

    //Create left nav
    const oldLeftNav = document.getElementById(leftNavId);
    const leftNavTemp = document.createElement('template');
    leftNavTemp.innerHTML = leftNavDiv.trim();
    const leftNav = leftNavTemp.content.firstChild;
    oldLeftNav.replaceWith(leftNav);

    // Attach events
    topNav.querySelector('#menuBtn').addEventListener('click', toggleLeftNav);
    topNav.querySelector('#themeBtn').addEventListener('click', toggleTheme);
    topNav.querySelector('#rightNavBtn').addEventListener('click', toggleRightNav);

    /* Listener for when a right nav link is clicked, the right nav will close*/
    const rightNav = document.getElementById(rightNavId);
    rightNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            rightNav.classList.remove('open');
        })
    });

    /* Listener for when anything outside the menu is pressed, it will close the corresponding menu */
    document.addEventListener("click", function (event) {
        const rightNav = document.getElementById("rightNav");
        const rightNavBtn = document.getElementById('rightNavBtn');
        const leftNav = document.getElementById("leftNav");
        const menuBtn = document.getElementById('menuBtn');

        if (!(rightNav.contains(event.target) || rightNavBtn.contains(event.target))) {
            rightNav.classList.remove("open");
        }
        if (!(leftNav.contains(event.target) || menuBtn.contains(event.target))) {
            leftNav.classList.remove("open");
        }
    });
}

// Initializing the top, left, and right nav 
// and then adding them into the HTML page directly
export function replaceMenuUsingInnerHTML() {
    // console.log('loadMenu called');
    // Create top nav
    const topNav = document.getElementById('topNav');
    topNav.innerHTML = topNavDiv.trim();

    // Create left nav
    const leftNav = document.getElementById('leftNav');
    leftNav.innerHTML = leftNavDiv.trim();

    // Attach events
    topNav.querySelector('#menuBtn').addEventListener('click', toggleLeftNav);
    topNav.querySelector('#themeBtn').addEventListener('click', toggleTheme);
    topNav.querySelector('#rightNavBtn').addEventListener('click', toggleRightNav);
}

function toggleLeftNav() {
    document.getElementById('leftNav').classList.toggle('open');
}
function toggleRightNav() {
    document.getElementById('rightNav').classList.toggle('open');
}
function toggleTheme() {
    // console.log('toggleTheme called');
    const themeLink = document.getElementById('prism-theme');
    if (document.documentElement.getAttribute("data-theme") === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("data-theme", "light");
        themeLink.href = getPrismTheme("light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("data-theme", "dark");
        themeLink.href = getPrismTheme("dark");
    }
}
export function getTheme() {
    // console.log('getTheme called');
    const currentTheme = localStorage.getItem("data-theme") ? localStorage.getItem("data-theme") : "dark";
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
    }
    loadPrism(currentTheme)
}
function getPrismTheme(currentTheme) {
    const basePath = '/library/prism/';
    switch (currentTheme) {
        case 'light':
            return basePath + 'solarized-light.css';
        case 'dark':
            return basePath + 'tomorrow-night.css';
    }

}

function loadPrism(currentTheme) {
    // Add Prism CSS
    const prismCSS = document.createElement('link');
    prismCSS.id = 'prism-theme';
    prismCSS.rel = 'stylesheet';
    prismCSS.href = getPrismTheme(currentTheme);
    document.head.appendChild(prismCSS);

    // Add Prism JS
    const prismJS = document.createElement('script');
    prismJS.src = '/library/prism/prism.js';
    document.head.appendChild(prismJS);
}
