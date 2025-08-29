import { useEffect } from 'react';

/**
 * Hook to check if the user clicked outside the given array of ref(menu and its nested menus) 
 * and call the callback function if that's the case
 * 
 * Make sure to use useMemo and useCallback to save references of refs array and callback function or
 * else this hook will cleanup every render
 *
 * @param {array of ref object} refs: array of ref to check
 * @param {function} callback: function to call, like handleClose, if the user clicked outside all refs
 */
export function useClickOutside(refs, callback) {
    useEffect(() => {
        function handleClick(event) {
            // If click is outside all refs, call callback
            const clickedOutside = refs.every(ref => ref.current && !ref.current.contains(event.target));
            if (clickedOutside) callback();
        }
        document.addEventListener("mousedown", handleClick);
        return () => document.removeEventListener("mousedown", handleClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [refs, callback]);
}

