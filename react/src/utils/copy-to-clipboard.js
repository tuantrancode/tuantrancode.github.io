import showToast from './show-toast';

export default function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) { // check if Clipboard API exist and writeText method exist 
        navigator.clipboard.writeText(text)
            .then(() => showToast('Code copied to clipboard!', 2000))
            .catch(() => fallbackCopy(text));
    } else {
        fallbackCopy(text);
    }
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