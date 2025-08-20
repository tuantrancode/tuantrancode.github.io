import { showToast } from '/common-js.js';

// Copy functionality to copy the <rowSelector> content from table's rows selected by css tableRowsSelector
export function copyRow(tableRowsSelector, rowSelector){
 document.querySelectorAll(tableRowsSelector).forEach(row => {  // getting all rows from tables
            row.addEventListener('click', () => {               // adding click event listener to each row
                let codeCell = row.querySelector(rowSelector);  // finding the <code> element within the clicked row
                if (codeCell) {
                    navigator.clipboard.writeText(codeCell.textContent).then(() => {
                        showToast('Code copied to clipboard!', 2000);
                    });
                }
            });
        });
}