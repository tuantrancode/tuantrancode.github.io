import { showToast } from '/common-js.js';

// Copy functionality to copy the <rowSelector> content from table's rows selected by css tableRowsSelector
export function copyRow(tableRowsSelector, rowSelector) {
    document.querySelectorAll(tableRowsSelector).forEach(row => {
        row.addEventListener('click', () => {   // adding click event listener to each row
            const codeCell = row.querySelector(rowSelector); // finding the <code> element within the clicked row
            if (!codeCell) return;

            const text = codeCell.textContent;
            if (navigator.clipboard && navigator.clipboard.writeText) { // check if Clipboard API exist and writeText method exist 
                navigator.clipboard.writeText(text)
                    .then(() => showToast('Code copied to clipboard!', 2000))
                    .catch(() => fallbackCopy(text));
            } else {
                fallbackCopy(text);
            }
        });
    });
}
// fallback for older browser or using local IP for development testing
function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('Code copied!');
}