/*
Contains common js functions used across multiple pages
- showToast(message, duration)
- searchTables(searchBarId, tableRowsSelector)
*/

/* Search functionality for filtering table rows based on input
@searchBarId = id of the search bar input
@tableRowsSelector = the CSS selectors to identify the rows that will be searched
*/
export function searchTables(searchBarId, tableRowsSelector) {
    // console.log('searchTables called');
    document.getElementById(searchBarId).addEventListener('keyup', function () {
        searchTablesRows(this, tableRowsSelector); // passing "this" (the search bar input) as the context  to the search function
    });
}
// Search functionality for filtering table rows based on input
function searchTablesRows(searchBarElem, tableRowsSelector) {
    // console.log('searchTablesRows called');
    let filter = searchBarElem.value.toLowerCase();  // 'this' refers to the <input> element that triggered the event (the search bar)
    let rows = document.querySelectorAll(tableRowsSelector);
    rows.forEach(row => {
        let text = row.innerText.toLowerCase();
        row.style.display = text.includes(filter) ? '' : 'none';
    });
}
// //Add search functionality, but using a different approach (implicitly using search-bar element by using  "this" keyword
// function searchTableRows(tableRowsSelector) {
//     console.log('searchTablesRows called');
//     let filter = this.value.toLowerCase();  // 'this' refers to the <input> element that triggered the event (the search bar)
//     let rows = document.querySelectorAll(tableRowsSelector);
//     rows.forEach(row => {
//         let text = row.innerText.toLowerCase();
//         row.style.display = text.includes(filter) ? '' : 'none';
//     });
// }


/* Show toast notification
@message: string message
@duration: duration of toast in miliseconds
*/
export function showToast(message, duration = 2000) {
    // Create the toast element
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.textContent = message;

    // Apply styles 
    toast.style.display = 'block';
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.padding = '10px 15px';
    toast.style.borderRadius = '5px';
    toast.style.fontSize = '0.9em';
    toast.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';
    toast.style.zIndex = '9999';

    // Checking the current theme and applying appropriate styles
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        toast.style.background = '#fff';
        toast.style.color = '#333';
    } else {
        toast.style.background = '#333';
        toast.style.color = '#fff';
    }

    // Add to the page
    document.body.appendChild(toast);

    // Remove after duration
    setTimeout(() => {
        toast.remove();
    }, duration);
}   