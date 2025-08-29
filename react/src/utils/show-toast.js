/* Show toast notification
@message: string message
@duration: duration of toast in miliseconds
*/
export default function showToast(message, duration = 2000) {
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